/**
 * Generated by orval v6.16.0 🍺
 * Do not edit manually.
 * StakeKit
 * StakeKit API documentation
 * OpenAPI spec version: 1.0
 */
import type { YieldYieldsType } from './yieldYieldsType';
import type { YieldYieldsSortBy } from './yieldYieldsSortBy';
import type { YieldYieldsNetwork } from './yieldYieldsNetwork';

export type YieldYieldsParams = {
  type?: YieldYieldsType;
  sortBy?: YieldYieldsSortBy;
  page?: number;
  network?: YieldYieldsNetwork;
  limit?: number;
};
