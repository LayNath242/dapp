import getSelendraApi from "./getSelendraApi";

export const getSystemParameters = async () => {
  const api = await getSelendraApi();
  const params = await api.rpc.system.properties();

  const decimals = !params.tokenDecimals.isNone && params.tokenDecimals.value.toHuman();
  const symbols = 
    (!params.tokenSymbol.isNone && (params.tokenSymbol.value.toHuman() as string[]))
    ? (!params.tokenSymbol.isNone && (params.tokenSymbol.value.toHuman() as string[]))
    : [""] ;
    
  const symbolsDecimals = symbols.reduce(
    (acc: any, symbol: any, index: string | number) => ({
      ...acc,
      [symbol]: + [index],
    }),
    {}
  );
  return {
    decimals,
    symbols,
    symbolsDecimals,
  };
};

export default getSystemParameters;