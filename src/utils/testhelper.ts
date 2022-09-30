import type { KeyringPair } from '@polkadot/keyring/types';
import getSelendraApi from "../utils/getSelendraApi";
import { createTestPairs } from '@polkadot/keyring/testingPairs';

const testPairs = createTestPairs();

const alice = testPairs.alice;
const bob = testPairs.bob;
const charlie = testPairs.charlie;
const dave = testPairs.dave;
const eve = testPairs.eve;

const sleep = (waitTimeInMs: number) => new Promise(resolve => setTimeout(resolve, waitTimeInMs));

const sudoAddOperationMemberShip = async (signer: KeyringPair, address: string) => {
  const api = await getSelendraApi();
  await api.tx.sudo
    .sudo(api.tx.operatorMembershipSelendra.addMember(address)).signAndSend(signer);
}

const addOperationMember = async () => {
  const membership = [alice.address, bob.address, charlie.address, dave.address, eve.address];
  for(let i = 0; i<membership.length; i++){
    await sudoAddOperationMemberShip(alice, membership[i]);
    console.log(`add new address: ${membership[i]}`)
    await sleep(8000);
  };
  process.exit(1);
};


Promise.resolve()
  .then(async () => {
    await addOperationMember()})


