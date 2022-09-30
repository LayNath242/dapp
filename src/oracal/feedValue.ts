
import type { KeyringPair } from '@polkadot/keyring/types';
import { RewriteFrames } from '@sentry/integrations';
import * as Sentry from '@sentry/node';
import BN from 'bn.js';
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

export const oracalFeedValues = async (signer: KeyringPair, token: string, price: BN) => {
  try {
    const api = await getSelendraApi();
    const extrinsic = api.tx.selendraOracle.feedValues([[{ Token: token }, price]])
    const hash = await extrinsic.signAndSend(signer);
    return hash;
  } catch (error) {
    Sentry.captureException(error);   
  }
}
