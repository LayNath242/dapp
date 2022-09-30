import type { KeyringPair } from '@polkadot/keyring/types';
import { RewriteFrames } from '@sentry/integrations';
import * as Sentry from '@sentry/node';
import getSelendraApi from "../utils/getSelendraApi";
import config from '../config';

Sentry.init({
  dsn: config.sentryDns,
  tracesSampleRate: 1.0,
  integrations: [
    new RewriteFrames({
       root: global.__dirname,
      }),
    ],
});
  
export const oracalValues = async (token: string) => {
  try {
    const api = await getSelendraApi();
    const value = await api.query.selendraOracle.values({ Token: token });
    return value.toString()
  } catch (error) {
    Sentry.captureException(error);  
  }
}