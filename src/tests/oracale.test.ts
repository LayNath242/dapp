import { createTestPairs } from '@polkadot/keyring/testingPairs';
import { oracalFeedValude, oracalValues } from '../oracal';

const testPairs = createTestPairs();

const alice = testPairs.alice;
const bob = testPairs.bob;
const charlie = testPairs.charlie;
const dave = testPairs.dave;
const eve = testPairs.eve;

const token = 'SEL';
const price = 240_000_000_000;
 
describe('testing Feed Oracale', () => {
  test('should work when feed value by alice', async () => {
    await oracalFeedValude(alice, token, price);
  });

  test('should work when feed value by bob', async () => {
    await oracalFeedValude(bob, token, price);
  });

  test('should work when feed value by charlie', async () => {
    await oracalFeedValude(charlie, token, price);
  });

  test('should work when feed value by dave', async () => {
    await oracalFeedValude(dave, token, price);
  });

  test('should work when feed value by eve', async () => {
    await oracalFeedValude(eve, token, price);
  });
});


describe('testing Get Oracale price', () => {
  test('should get value', async () => {
    const result = await oracalValues(token);
    const value = JSON.parse(result ? result.toString() : '{"value": 0, "timestamp": 0}');
    expect(value.value).toBe(price);
  });
});
