
import { initSimnet } from '@hirosystems/clarinet-sdk';
const simnet = await initSimnet();
import { Cl } from '@stacks/transactions';
import { describe, it } from 'vitest';

const accounts = simnet.getAccounts();
const address1 = accounts.get("deployer")!;

/*
  The test below is an example. To learn more, read the testing documentation here:
  https://docs.hiro.so/clarinet/feature-guides/test-contract-with-clarinet-sdk
*/

describe('test `construct` ', () => {
  it('call construct passing in the default proposal', () => {
    const init = simnet.callPublicFn('core', 'construct', [
      Cl.contractPrincipal("ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM","proposal")], address1);

      for (let i = 0; i < init.events.length; i++) {
        console.log(init.events[i]);
      }

      console.log(Cl.prettyPrint(init.result)); // (ok true)
  });
});

describe('test `propose` ', () => {
  it('call construct passing in the default proposal', () => {
    const init = simnet.callPublicFn('proposal-submission', 'propose', [
      Cl.contractPrincipal("ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM","proposal2"),
      Cl.stringAscii("Title"), Cl.stringUtf8("Description")], address1);

      for (let i = 0; i < init.events.length; i++) {
        console.log(init.events[i]);
      }

      console.log(Cl.prettyPrint(init.result)); // (ok true)
  });
});

describe('test `add-milestone` ', () => {
  it('call add-milestone to attach a proposal milestone', () => {
    const init = simnet.callPublicFn('proposal-milestones', 'add-milestone', 
    [
      Cl.contractPrincipal("ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM","proposal2"),
      Cl.stringAscii("Milestone Name"),
      Cl.uint(1500),
      Cl.standardPrincipal("ST2JHG361ZXG51QTKY2NQCVBPPRRE2KZB1HR05NNC")
    ], address1);

      for (let i = 0; i < init.events.length; i++) {
        console.log(init.events[i]);
      }

      console.log(Cl.prettyPrint(init.result)); // (ok true)
  });
});