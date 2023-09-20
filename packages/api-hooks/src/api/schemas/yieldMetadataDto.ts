import type { YieldProviderDto } from './yieldProviderDto';
import type { TokenDto } from './tokenDto';
import type { YieldType } from './yieldType';
import type { RewardSchedule } from './rewardSchedule';
import type { TimePeriodDto } from './timePeriodDto';
import type { RewardClaiming } from './rewardClaiming';
import type { YieldRevshareDto } from './yieldRevshareDto';
import type { YieldFeeDto } from './yieldFeeDto';

export interface YieldMetadataDto {
  name: string;
  logoURI: string;
  description: string;
  documentation: string;
  provider?: YieldProviderDto;
  gasFeeToken: TokenDto;
  rewardTokens?: TokenDto[];
  token: TokenDto;
  type: YieldType;
  rewardSchedule: RewardSchedule;
  cooldownPeriod: TimePeriodDto;
  warmupPeriod: TimePeriodDto;
  withdrawPeriod?: TimePeriodDto;
  rewardClaiming: RewardClaiming;
  defaultValidator?: string;
  minimumStake?: number;
  supportsMultipleValidators?: boolean;
  revshare: YieldRevshareDto;
  fee: YieldFeeDto;
}
