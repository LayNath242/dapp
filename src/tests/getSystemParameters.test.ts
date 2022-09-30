import getSystemParameters from '../utils/getSystemParameters';
 
describe('testing get system parameter', () => {
  test('all parameter should exit', async () => {
    const {decimals, symbols, symbolsDecimals} = await getSystemParameters();

    expect(decimals?.toString()).toBe(["12", "12"].toString());
    expect(symbols.toString()).toBe(["SEL", "KUSD"].toString());
    expect(symbolsDecimals.toString()).toBe({ SEL: 0, KUSD: 1 }.toString());
  });
});
