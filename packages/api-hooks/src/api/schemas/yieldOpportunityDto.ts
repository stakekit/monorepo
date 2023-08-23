/**
 * Generated by orval v6.16.0 🍺
 * Do not edit manually.
 * StakeKit
 * StakeKit API documentation
 * OpenAPI spec version: 1.0
 */
import type { TokenDto } from './tokenDto';
import type { YieldConfigDto } from './yieldConfigDto';
import type { StakeArgumentResponseDto } from './stakeArgumentResponseDto';
import type { YieldStatusResponseDto } from './yieldStatusResponseDto';
import type { YieldMetadataDto } from './yieldMetadataDto';
import type { ValidatorDto } from './validatorDto';

export interface YieldOpportunityDto {
  /** The yield opportunity ID */
  id: string;
  token: TokenDto;
  config: YieldConfigDto;
  args: StakeArgumentResponseDto;
  status: YieldStatusResponseDto;
  apy: number;
  metadata: YieldMetadataDto;
  validators: ValidatorDto[];
}
