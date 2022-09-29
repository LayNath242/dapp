
import { Keyring } from "@polkadot/keyring";;
import {cryptoWaitReady} from "@polkadot/util-crypto";
import config from '../config';

export const getSigner = async () => {
  await cryptoWaitReady()
  const keyring = new Keyring({
    type: "sr25519",
  });

  // Add Alice to our keyring with a hard-deived path (empty phrase, so uses dev)
  return keyring.addFromMnemonic(config.seedPhase);
};

export default getSigner;
