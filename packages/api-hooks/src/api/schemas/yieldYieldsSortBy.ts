export type YieldYieldsSortBy =
  (typeof YieldYieldsSortBy)[keyof typeof YieldYieldsSortBy];

// eslint-disable-next-line @typescript-eslint/no-redeclare
export const YieldYieldsSortBy = {
  name: 'name',
  yieldType: 'yieldType',
} as const;