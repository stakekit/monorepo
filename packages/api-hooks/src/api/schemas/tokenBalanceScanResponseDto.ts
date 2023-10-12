import type { TokenDto } from './tokenDto';

export interface TokenBalanceScanResponseDto {
  token: TokenDto;
  availableYields: string[];
  amount: string;
}