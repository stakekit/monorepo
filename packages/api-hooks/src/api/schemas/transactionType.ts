export type TransactionType =
  (typeof TransactionType)[keyof typeof TransactionType];

// eslint-disable-next-line @typescript-eslint/no-redeclare
export const TransactionType = {
  SWAP: 'SWAP',
  DEPOSIT: 'DEPOSIT',
  APPROVAL: 'APPROVAL',
  STAKE: 'STAKE',
  CLAIM_UNSTAKED: 'CLAIM_UNSTAKED',
  CLAIM_REWARDS: 'CLAIM_REWARDS',
  RESTAKE_REWARDS: 'RESTAKE_REWARDS',
  UNSTAKE: 'UNSTAKE',
  SPLIT: 'SPLIT',
  MERGE: 'MERGE',
  LOCK: 'LOCK',
  UNLOCK: 'UNLOCK',
  SUPPLY: 'SUPPLY',
  BRIDGE: 'BRIDGE',
  VOTE: 'VOTE',
  REVOKE: 'REVOKE',
  RESTAKE: 'RESTAKE',
  REBOND: 'REBOND',
  WITHDRAW: 'WITHDRAW',
  CREATE_ACCOUNT: 'CREATE_ACCOUNT',
  REVEAL: 'REVEAL',
  UTXO_P_TO_C_IMPORT: 'UTXO_P_TO_C_IMPORT',
  UTXO_C_TO_P_IMPORT: 'UTXO_C_TO_P_IMPORT',
  UNFREEZE_LEGACY: 'UNFREEZE_LEGACY',
  UNFREEZE_BANDWIDTH: 'UNFREEZE_BANDWIDTH',
  UNFREEZE_ENERGY: 'UNFREEZE_ENERGY',
  FREEZE_BANDWIDTH: 'FREEZE_BANDWIDTH',
  FREEZE_ENERGY: 'FREEZE_ENERGY',
  UNDELEGATE_BANDWIDTH: 'UNDELEGATE_BANDWIDTH',
  UNDELEGATE_ENERGY: 'UNDELEGATE_ENERGY',
  P2P_NODE_REQUEST: 'P2P_NODE_REQUEST',
} as const;
