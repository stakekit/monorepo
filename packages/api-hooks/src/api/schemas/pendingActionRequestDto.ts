import type { ActionTypes } from './actionTypes';
import type { PendingActionArgumentsDto } from './pendingActionArgumentsDto';

export interface PendingActionRequestDto {
  type: ActionTypes;
  integrationId: string;
  /** The corresponding passthrough for the pending action to be run, returned in the balances endpoint */
  passthrough: string;
  args?: PendingActionArgumentsDto;
}
