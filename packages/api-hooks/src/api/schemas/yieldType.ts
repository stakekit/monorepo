export type YieldType = (typeof YieldType)[keyof typeof YieldType];

// eslint-disable-next-line @typescript-eslint/no-redeclare
export const YieldType = {
  staking: 'staking',
  'liquid-staking': 'liquid-staking',
  lending: 'lending',
  vault: 'vault',
} as const;
