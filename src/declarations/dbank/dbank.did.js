export const idlFactory = ({ IDL }) => {
  return IDL.Service({
    'WithDrawl' : IDL.Func([IDL.Nat], [], ['oneway']),
    'checkBalance' : IDL.Func([], [IDL.Nat], ['query']),
    'topUp' : IDL.Func([IDL.Nat], [], ['oneway']),
  });
};
export const init = ({ IDL }) => { return []; };
