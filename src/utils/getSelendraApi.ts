import { ApiPromise, WsProvider } from "@polkadot/api";
import { options } from "@selendra/api";
import config from '../config';

export const getSelendraApiProvider = async () => {
  const provider = new WsProvider(config.nodeUrls, 100);
  const api = new ApiPromise(
    options({
      provider,
    })
  );
  await api.isReady;
  return api;
};

export default getSelendraApiProvider;