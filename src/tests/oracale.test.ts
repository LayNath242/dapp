import { createTestPairs } from '@polkadot/keyring/testingPairs';
import { oracalFeedValues, oracalValues } from '../oracal';
import BN from 'bn.js';

const testPairs = createTestPairs();

const alice = testPairs.alice;
const bob = testPairs.bob;
const charlie = testPairs.charlie;
const dave = testPairs.dave;
const eve = testPairs.eve;

const nativeToken = 'SEL';
const nativePrice = new BN("250000000000000000");

const stableToken = 'KUSD';
const stablePrice = new BN("1100000000000000000");
 
// describe('testing Feed Oracale', () => {
//   test('should work when feed value by alice', async () => {
//     await oracalFeedValues(alice, nativeToken, nativePrice);
//   });

//   test('should work when feed value by bob', async () => {
//     await oracalFeedValues(bob, nativeToken, nativePrice);
//   });

//   test('should work when feed value by charlie', async () => {
//     await oracalFeedValues(charlie, nativeToken, nativePrice);
//   });

//   test('should work when feed value by dave', async () => {
//     await oracalFeedValues(dave, nativeToken, nativePrice);
//   });

//   test('should work when feed value by eve', async () => {
//     await oracalFeedValues(eve, nativeToken, nativePrice);
//   });
// });

describe('testing Feed Oracale', () => {
  test('should work when feed value by alice', async () => {
    await oracalFeedValues(alice, stableToken, stablePrice);
  });

  test('should work when feed value by bob', async () => {
    await oracalFeedValues(bob, stableToken, stablePrice);
  });

  test('should work when feed value by charlie', async () => {
    await oracalFeedValues(charlie, stableToken, stablePrice);
  });

  test('should work when feed value by dave', async () => {
    await oracalFeedValues(dave, stableToken, stablePrice);
  });

  test('should work when feed value by eve', async () => {
    await oracalFeedValues(eve, stableToken, stablePrice);
  });
});


describe('testing Get Oracale price', () => {
  test('should get native value ', async () => {
    const result = await oracalValues(nativeToken);
    const value = JSON.parse(result ? result.toString() : '{"value": 0, "timestamp": 0}');
    const nativeTokenPrice = new BN(parseInt(value.value).toString());
    expect(nativeTokenPrice.toString()).toBe(nativePrice.toString());
  });

  test('should get stable value ', async () => {
    const result = await oracalValues(stableToken);
    const value = JSON.parse(result ? result.toString() : '{"value": 0, "timestamp": 0}');
    const stableTokenPrice = new BN(parseInt(value.value).toString());
    expect(stableTokenPrice.toString()).toBe(stablePrice.toString());
  });
});
