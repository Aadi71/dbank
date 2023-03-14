import type { Principal } from '@dfinity/principal';
export interface _SERVICE {
  'WithDrawl' : (arg_0: bigint) => Promise<undefined>,
  'checkBalance' : () => Promise<bigint>,
  'topUp' : (arg_0: bigint) => Promise<undefined>,
}
