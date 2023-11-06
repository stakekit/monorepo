import { useQuery, useMutation } from '@tanstack/react-query';
import type {
  UseQueryOptions,
  UseMutationOptions,
  QueryFunction,
  MutationFunction,
  UseQueryResult,
  QueryKey,
} from '@tanstack/react-query';
import type {
  ActionDto,
  GeolocationError,
  ActionRequestDto,
  PendingActionRequestDto,
  TransactionDto,
  ConstructTransactionRequestDto,
  SubmitResponseDto,
  SubmitRequestDto,
  SubmitHashRequestDto,
  TransactionStatusResponseDto,
  GasForNetworkResponseDto,
  TokenWithAvailableYieldsDto,
  TokenGetTokensParams,
  PriceResponseDto,
  PriceRequestDto,
  BalanceResponseDto,
  BalancesRequestDto,
  TokenBalanceScanResponseDto,
  TokenBalanceScanDto,
  YieldYields200,
  YieldYieldsParams,
  YieldBalancesWithIntegrationIdDto,
  YieldBalanceWithIntegrationIdRequestDto,
  YieldGetMultipleYieldBalancesParams,
  YieldBalanceScanRequestDto,
  YieldYieldBalancesScanParams,
  YieldGetMyYields200,
  YieldGetMyYieldsParams,
  ValidatorSearchResultDto,
  YieldFindValidatorsParams,
  YieldDto,
  YieldYieldOpportunityParams,
  ValidatorDto,
  YieldGetValidatorsParams,
  YieldBalanceDto,
  YieldBalanceRequestDto,
  YieldGetSingleYieldBalancesParams,
} from './schemas';
import { api } from '../api-client';
import { customQueryOptions } from '../query-options';

type AwaitedInput<T> = PromiseLike<T> | T;

type Awaited<O> = O extends AwaitedInput<infer T> ? T : never;

/**
 * Returns a action with associated transactions
 * @summary Get action
 */
export const actionGetAction = (actionId: string, signal?: AbortSignal) => {
  return api<ActionDto>({
    url: `/v1/actions/${actionId}`,
    method: 'get',
    signal,
  });
};

export const getActionGetActionQueryKey = (actionId: string) =>
  [`/v1/actions/${actionId}`] as const;

export const useActionGetActionQueryOptions = <
  TData = Awaited<ReturnType<typeof actionGetAction>>,
  TError = GeolocationError,
>(
  actionId: string,
  options?: {
    query?: UseQueryOptions<
      Awaited<ReturnType<typeof actionGetAction>>,
      TError,
      TData
    >;
  },
): UseQueryOptions<
  Awaited<ReturnType<typeof actionGetAction>>,
  TError,
  TData
> & { queryKey: QueryKey } => {
  const { query: queryOptions } = options ?? {};

  const queryKey =
    queryOptions?.queryKey ?? getActionGetActionQueryKey(actionId);

  const queryFn: QueryFunction<Awaited<ReturnType<typeof actionGetAction>>> = ({
    signal,
  }) => actionGetAction(actionId, signal);

  const customOptions = customQueryOptions({
    ...queryOptions,
    queryKey,
    queryFn,
  });

  return customOptions;
};

export type ActionGetActionQueryResult = NonNullable<
  Awaited<ReturnType<typeof actionGetAction>>
>;
export type ActionGetActionQueryError = GeolocationError;

/**
 * @summary Get action
 */
export const useActionGetAction = <
  TData = Awaited<ReturnType<typeof actionGetAction>>,
  TError = GeolocationError,
>(
  actionId: string,
  options?: {
    query?: UseQueryOptions<
      Awaited<ReturnType<typeof actionGetAction>>,
      TError,
      TData
    >;
  },
): UseQueryResult<TData, TError> & { queryKey: QueryKey } => {
  const queryOptions = useActionGetActionQueryOptions(actionId, options);

  const query = useQuery(queryOptions) as UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
  };

  query.queryKey = queryOptions.queryKey;

  return query;
};

/**
 * Get the transactions necessary to enter a yield bearing position
 * @summary Create "enter" action
 */
export const actionEnter = (actionRequestDto: ActionRequestDto) => {
  return api<ActionDto>({
    url: `/v1/actions/enter`,
    method: 'post',
    headers: { 'Content-Type': 'application/json' },
    data: actionRequestDto,
  });
};

export const useActionEnterMutationOptions = <
  TError = GeolocationError,
  TContext = unknown,
>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<typeof actionEnter>>,
    TError,
    { data: ActionRequestDto },
    TContext
  >;
}): UseMutationOptions<
  Awaited<ReturnType<typeof actionEnter>>,
  TError,
  { data: ActionRequestDto },
  TContext
> => {
  const { mutation: mutationOptions } = options ?? {};

  const mutationFn: MutationFunction<
    Awaited<ReturnType<typeof actionEnter>>,
    { data: ActionRequestDto }
  > = (props) => {
    const { data } = props ?? {};

    return actionEnter(data);
  };

  const customOptions = customQueryOptions({ ...mutationOptions, mutationFn });

  return customOptions;
};

export type ActionEnterMutationResult = NonNullable<
  Awaited<ReturnType<typeof actionEnter>>
>;
export type ActionEnterMutationBody = ActionRequestDto;
export type ActionEnterMutationError = GeolocationError;

/**
 * @summary Create "enter" action
 */
export const useActionEnter = <
  TError = GeolocationError,
  TContext = unknown,
>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<typeof actionEnter>>,
    TError,
    { data: ActionRequestDto },
    TContext
  >;
}) => {
  const mutationOptions = useActionEnterMutationOptions(options);

  return useMutation(mutationOptions);
};

/**
 * Get the transactions necessary to exit a yield bearing position
 * @summary Create "exit" action
 */
export const actionExit = (actionRequestDto: ActionRequestDto) => {
  return api<ActionDto>({
    url: `/v1/actions/exit`,
    method: 'post',
    headers: { 'Content-Type': 'application/json' },
    data: actionRequestDto,
  });
};

export const useActionExitMutationOptions = <
  TError = GeolocationError,
  TContext = unknown,
>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<typeof actionExit>>,
    TError,
    { data: ActionRequestDto },
    TContext
  >;
}): UseMutationOptions<
  Awaited<ReturnType<typeof actionExit>>,
  TError,
  { data: ActionRequestDto },
  TContext
> => {
  const { mutation: mutationOptions } = options ?? {};

  const mutationFn: MutationFunction<
    Awaited<ReturnType<typeof actionExit>>,
    { data: ActionRequestDto }
  > = (props) => {
    const { data } = props ?? {};

    return actionExit(data);
  };

  const customOptions = customQueryOptions({ ...mutationOptions, mutationFn });

  return customOptions;
};

export type ActionExitMutationResult = NonNullable<
  Awaited<ReturnType<typeof actionExit>>
>;
export type ActionExitMutationBody = ActionRequestDto;
export type ActionExitMutationError = GeolocationError;

/**
 * @summary Create "exit" action
 */
export const useActionExit = <
  TError = GeolocationError,
  TContext = unknown,
>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<typeof actionExit>>,
    TError,
    { data: ActionRequestDto },
    TContext
  >;
}) => {
  const mutationOptions = useActionExitMutationOptions(options);

  return useMutation(mutationOptions);
};

/**
 * Get the transactions to apply a pending action
 * @summary Create "pending" action
 */
export const actionPending = (
  pendingActionRequestDto: PendingActionRequestDto,
) => {
  return api<ActionDto>({
    url: `/v1/actions/pending`,
    method: 'post',
    headers: { 'Content-Type': 'application/json' },
    data: pendingActionRequestDto,
  });
};

export const useActionPendingMutationOptions = <
  TError = GeolocationError,
  TContext = unknown,
>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<typeof actionPending>>,
    TError,
    { data: PendingActionRequestDto },
    TContext
  >;
}): UseMutationOptions<
  Awaited<ReturnType<typeof actionPending>>,
  TError,
  { data: PendingActionRequestDto },
  TContext
> => {
  const { mutation: mutationOptions } = options ?? {};

  const mutationFn: MutationFunction<
    Awaited<ReturnType<typeof actionPending>>,
    { data: PendingActionRequestDto }
  > = (props) => {
    const { data } = props ?? {};

    return actionPending(data);
  };

  const customOptions = customQueryOptions({ ...mutationOptions, mutationFn });

  return customOptions;
};

export type ActionPendingMutationResult = NonNullable<
  Awaited<ReturnType<typeof actionPending>>
>;
export type ActionPendingMutationBody = PendingActionRequestDto;
export type ActionPendingMutationError = GeolocationError;

/**
 * @summary Create "pending" action
 */
export const useActionPending = <
  TError = GeolocationError,
  TContext = unknown,
>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<typeof actionPending>>,
    TError,
    { data: PendingActionRequestDto },
    TContext
  >;
}) => {
  const mutationOptions = useActionPendingMutationOptions(options);

  return useMutation(mutationOptions);
};

/**
 * Returns a transaction
 * @summary Get transaction
 */
export const transactionGetTransaction = (
  transactionId: string,
  signal?: AbortSignal,
) => {
  return api<TransactionDto>({
    url: `/v1/transactions/${transactionId}`,
    method: 'get',
    signal,
  });
};

export const getTransactionGetTransactionQueryKey = (transactionId: string) =>
  [`/v1/transactions/${transactionId}`] as const;

export const useTransactionGetTransactionQueryOptions = <
  TData = Awaited<ReturnType<typeof transactionGetTransaction>>,
  TError = GeolocationError,
>(
  transactionId: string,
  options?: {
    query?: UseQueryOptions<
      Awaited<ReturnType<typeof transactionGetTransaction>>,
      TError,
      TData
    >;
  },
): UseQueryOptions<
  Awaited<ReturnType<typeof transactionGetTransaction>>,
  TError,
  TData
> & { queryKey: QueryKey } => {
  const { query: queryOptions } = options ?? {};

  const queryKey =
    queryOptions?.queryKey ??
    getTransactionGetTransactionQueryKey(transactionId);

  const queryFn: QueryFunction<
    Awaited<ReturnType<typeof transactionGetTransaction>>
  > = ({ signal }) => transactionGetTransaction(transactionId, signal);

  const customOptions = customQueryOptions({
    ...queryOptions,
    queryKey,
    queryFn,
  });

  return customOptions;
};

export type TransactionGetTransactionQueryResult = NonNullable<
  Awaited<ReturnType<typeof transactionGetTransaction>>
>;
export type TransactionGetTransactionQueryError = GeolocationError;

/**
 * @summary Get transaction
 */
export const useTransactionGetTransaction = <
  TData = Awaited<ReturnType<typeof transactionGetTransaction>>,
  TError = GeolocationError,
>(
  transactionId: string,
  options?: {
    query?: UseQueryOptions<
      Awaited<ReturnType<typeof transactionGetTransaction>>,
      TError,
      TData
    >;
  },
): UseQueryResult<TData, TError> & { queryKey: QueryKey } => {
  const queryOptions = useTransactionGetTransactionQueryOptions(
    transactionId,
    options,
  );

  const query = useQuery(queryOptions) as UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
  };

  query.queryKey = queryOptions.queryKey;

  return query;
};

/**
 * Constructs an unsigned transaction given a transaction id and optional gas parameters
 * @summary Construct transaction
 */
export const transactionConstruct = (
  transactionId: string,
  constructTransactionRequestDto: ConstructTransactionRequestDto,
) => {
  return api<TransactionDto>({
    url: `/v1/transactions/${transactionId}`,
    method: 'patch',
    headers: { 'Content-Type': 'application/json' },
    data: constructTransactionRequestDto,
  });
};

export const useTransactionConstructMutationOptions = <
  TError = GeolocationError,
  TContext = unknown,
>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<typeof transactionConstruct>>,
    TError,
    { transactionId: string; data: ConstructTransactionRequestDto },
    TContext
  >;
}): UseMutationOptions<
  Awaited<ReturnType<typeof transactionConstruct>>,
  TError,
  { transactionId: string; data: ConstructTransactionRequestDto },
  TContext
> => {
  const { mutation: mutationOptions } = options ?? {};

  const mutationFn: MutationFunction<
    Awaited<ReturnType<typeof transactionConstruct>>,
    { transactionId: string; data: ConstructTransactionRequestDto }
  > = (props) => {
    const { transactionId, data } = props ?? {};

    return transactionConstruct(transactionId, data);
  };

  const customOptions = customQueryOptions({ ...mutationOptions, mutationFn });

  return customOptions;
};

export type TransactionConstructMutationResult = NonNullable<
  Awaited<ReturnType<typeof transactionConstruct>>
>;
export type TransactionConstructMutationBody = ConstructTransactionRequestDto;
export type TransactionConstructMutationError = GeolocationError;

/**
 * @summary Construct transaction
 */
export const useTransactionConstruct = <
  TError = GeolocationError,
  TContext = unknown,
>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<typeof transactionConstruct>>,
    TError,
    { transactionId: string; data: ConstructTransactionRequestDto },
    TContext
  >;
}) => {
  const mutationOptions = useTransactionConstructMutationOptions(options);

  return useMutation(mutationOptions);
};

/**
 * Submits the signed transactions for broadcasting
 * @summary Submit transaction
 */
export const transactionSubmit = (
  transactionId: string,
  submitRequestDto: SubmitRequestDto,
) => {
  return api<SubmitResponseDto>({
    url: `/v1/transactions/${transactionId}/submit`,
    method: 'post',
    headers: { 'Content-Type': 'application/json' },
    data: submitRequestDto,
  });
};

export const useTransactionSubmitMutationOptions = <
  TError = GeolocationError,
  TContext = unknown,
>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<typeof transactionSubmit>>,
    TError,
    { transactionId: string; data: SubmitRequestDto },
    TContext
  >;
}): UseMutationOptions<
  Awaited<ReturnType<typeof transactionSubmit>>,
  TError,
  { transactionId: string; data: SubmitRequestDto },
  TContext
> => {
  const { mutation: mutationOptions } = options ?? {};

  const mutationFn: MutationFunction<
    Awaited<ReturnType<typeof transactionSubmit>>,
    { transactionId: string; data: SubmitRequestDto }
  > = (props) => {
    const { transactionId, data } = props ?? {};

    return transactionSubmit(transactionId, data);
  };

  const customOptions = customQueryOptions({ ...mutationOptions, mutationFn });

  return customOptions;
};

export type TransactionSubmitMutationResult = NonNullable<
  Awaited<ReturnType<typeof transactionSubmit>>
>;
export type TransactionSubmitMutationBody = SubmitRequestDto;
export type TransactionSubmitMutationError = GeolocationError;

/**
 * @summary Submit transaction
 */
export const useTransactionSubmit = <
  TError = GeolocationError,
  TContext = unknown,
>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<typeof transactionSubmit>>,
    TError,
    { transactionId: string; data: SubmitRequestDto },
    TContext
  >;
}) => {
  const mutationOptions = useTransactionSubmitMutationOptions(options);

  return useMutation(mutationOptions);
};

/**
 * Submit a hash of an already broadcasted transaction
 * @summary Submit transaction hash
 */
export const transactionSubmitHash = (
  transactionId: string,
  submitHashRequestDto: SubmitHashRequestDto,
) => {
  return api<void>({
    url: `/v1/transactions/${transactionId}/submit_hash`,
    method: 'post',
    headers: { 'Content-Type': 'application/json' },
    data: submitHashRequestDto,
  });
};

export const useTransactionSubmitHashMutationOptions = <
  TError = GeolocationError,
  TContext = unknown,
>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<typeof transactionSubmitHash>>,
    TError,
    { transactionId: string; data: SubmitHashRequestDto },
    TContext
  >;
}): UseMutationOptions<
  Awaited<ReturnType<typeof transactionSubmitHash>>,
  TError,
  { transactionId: string; data: SubmitHashRequestDto },
  TContext
> => {
  const { mutation: mutationOptions } = options ?? {};

  const mutationFn: MutationFunction<
    Awaited<ReturnType<typeof transactionSubmitHash>>,
    { transactionId: string; data: SubmitHashRequestDto }
  > = (props) => {
    const { transactionId, data } = props ?? {};

    return transactionSubmitHash(transactionId, data);
  };

  const customOptions = customQueryOptions({ ...mutationOptions, mutationFn });

  return customOptions;
};

export type TransactionSubmitHashMutationResult = NonNullable<
  Awaited<ReturnType<typeof transactionSubmitHash>>
>;
export type TransactionSubmitHashMutationBody = SubmitHashRequestDto;
export type TransactionSubmitHashMutationError = GeolocationError;

/**
 * @summary Submit transaction hash
 */
export const useTransactionSubmitHash = <
  TError = GeolocationError,
  TContext = unknown,
>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<typeof transactionSubmitHash>>,
    TError,
    { transactionId: string; data: SubmitHashRequestDto },
    TContext
  >;
}) => {
  const mutationOptions = useTransactionSubmitHashMutationOptions(options);

  return useMutation(mutationOptions);
};

/**
 * Returns the transaction status given a transaction id
 * @summary Get transaction status
 */
export const transactionGetTransactionStatusFromId = (
  transactionId: string,
  signal?: AbortSignal,
) => {
  return api<TransactionStatusResponseDto>({
    url: `/v1/transactions/${transactionId}/status`,
    method: 'get',
    signal,
  });
};

export const getTransactionGetTransactionStatusFromIdQueryKey = (
  transactionId: string,
) => [`/v1/transactions/${transactionId}/status`] as const;

export const useTransactionGetTransactionStatusFromIdQueryOptions = <
  TData = Awaited<ReturnType<typeof transactionGetTransactionStatusFromId>>,
  TError = GeolocationError,
>(
  transactionId: string,
  options?: {
    query?: UseQueryOptions<
      Awaited<ReturnType<typeof transactionGetTransactionStatusFromId>>,
      TError,
      TData
    >;
  },
): UseQueryOptions<
  Awaited<ReturnType<typeof transactionGetTransactionStatusFromId>>,
  TError,
  TData
> & { queryKey: QueryKey } => {
  const { query: queryOptions } = options ?? {};

  const queryKey =
    queryOptions?.queryKey ??
    getTransactionGetTransactionStatusFromIdQueryKey(transactionId);

  const queryFn: QueryFunction<
    Awaited<ReturnType<typeof transactionGetTransactionStatusFromId>>
  > = ({ signal }) =>
    transactionGetTransactionStatusFromId(transactionId, signal);

  const customOptions = customQueryOptions({
    ...queryOptions,
    queryKey,
    queryFn,
  });

  return customOptions;
};

export type TransactionGetTransactionStatusFromIdQueryResult = NonNullable<
  Awaited<ReturnType<typeof transactionGetTransactionStatusFromId>>
>;
export type TransactionGetTransactionStatusFromIdQueryError = GeolocationError;

/**
 * @summary Get transaction status
 */
export const useTransactionGetTransactionStatusFromId = <
  TData = Awaited<ReturnType<typeof transactionGetTransactionStatusFromId>>,
  TError = GeolocationError,
>(
  transactionId: string,
  options?: {
    query?: UseQueryOptions<
      Awaited<ReturnType<typeof transactionGetTransactionStatusFromId>>,
      TError,
      TData
    >;
  },
): UseQueryResult<TData, TError> & { queryKey: QueryKey } => {
  const queryOptions = useTransactionGetTransactionStatusFromIdQueryOptions(
    transactionId,
    options,
  );

  const query = useQuery(queryOptions) as UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
  };

  query.queryKey = queryOptions.queryKey;

  return query;
};

/**
 * Returns the current gas parameters for a network
 * @summary Get current gas parameters
 */
export const transactionGetGasForNetwork = (
  network: string,
  signal?: AbortSignal,
) => {
  return api<GasForNetworkResponseDto>({
    url: `/v1/transactions/gas/${network}`,
    method: 'get',
    signal,
  });
};

export const getTransactionGetGasForNetworkQueryKey = (network: string) =>
  [`/v1/transactions/gas/${network}`] as const;

export const useTransactionGetGasForNetworkQueryOptions = <
  TData = Awaited<ReturnType<typeof transactionGetGasForNetwork>>,
  TError = GeolocationError,
>(
  network: string,
  options?: {
    query?: UseQueryOptions<
      Awaited<ReturnType<typeof transactionGetGasForNetwork>>,
      TError,
      TData
    >;
  },
): UseQueryOptions<
  Awaited<ReturnType<typeof transactionGetGasForNetwork>>,
  TError,
  TData
> & { queryKey: QueryKey } => {
  const { query: queryOptions } = options ?? {};

  const queryKey =
    queryOptions?.queryKey ?? getTransactionGetGasForNetworkQueryKey(network);

  const queryFn: QueryFunction<
    Awaited<ReturnType<typeof transactionGetGasForNetwork>>
  > = ({ signal }) => transactionGetGasForNetwork(network, signal);

  const customOptions = customQueryOptions({
    ...queryOptions,
    queryKey,
    queryFn,
  });

  return customOptions;
};

export type TransactionGetGasForNetworkQueryResult = NonNullable<
  Awaited<ReturnType<typeof transactionGetGasForNetwork>>
>;
export type TransactionGetGasForNetworkQueryError = GeolocationError;

/**
 * @summary Get current gas parameters
 */
export const useTransactionGetGasForNetwork = <
  TData = Awaited<ReturnType<typeof transactionGetGasForNetwork>>,
  TError = GeolocationError,
>(
  network: string,
  options?: {
    query?: UseQueryOptions<
      Awaited<ReturnType<typeof transactionGetGasForNetwork>>,
      TError,
      TData
    >;
  },
): UseQueryResult<TData, TError> & { queryKey: QueryKey } => {
  const queryOptions = useTransactionGetGasForNetworkQueryOptions(
    network,
    options,
  );

  const query = useQuery(queryOptions) as UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
  };

  query.queryKey = queryOptions.queryKey;

  return query;
};

/**
 * Returns the tokens with available yields
 * @summary Get all tokens
 */
export const tokenGetTokens = (
  params?: TokenGetTokensParams,
  signal?: AbortSignal,
) => {
  return api<TokenWithAvailableYieldsDto[]>({
    url: `/v1/tokens`,
    method: 'get',
    params,
    signal,
  });
};

export const getTokenGetTokensQueryKey = (params?: TokenGetTokensParams) =>
  [`/v1/tokens`, ...(params ? [params] : [])] as const;

export const useTokenGetTokensQueryOptions = <
  TData = Awaited<ReturnType<typeof tokenGetTokens>>,
  TError = unknown,
>(
  params?: TokenGetTokensParams,
  options?: {
    query?: UseQueryOptions<
      Awaited<ReturnType<typeof tokenGetTokens>>,
      TError,
      TData
    >;
  },
): UseQueryOptions<
  Awaited<ReturnType<typeof tokenGetTokens>>,
  TError,
  TData
> & { queryKey: QueryKey } => {
  const { query: queryOptions } = options ?? {};

  const queryKey = queryOptions?.queryKey ?? getTokenGetTokensQueryKey(params);

  const queryFn: QueryFunction<Awaited<ReturnType<typeof tokenGetTokens>>> = ({
    signal,
  }) => tokenGetTokens(params, signal);

  const customOptions = customQueryOptions({
    ...queryOptions,
    queryKey,
    queryFn,
  });

  return customOptions;
};

export type TokenGetTokensQueryResult = NonNullable<
  Awaited<ReturnType<typeof tokenGetTokens>>
>;
export type TokenGetTokensQueryError = unknown;

/**
 * @summary Get all tokens
 */
export const useTokenGetTokens = <
  TData = Awaited<ReturnType<typeof tokenGetTokens>>,
  TError = unknown,
>(
  params?: TokenGetTokensParams,
  options?: {
    query?: UseQueryOptions<
      Awaited<ReturnType<typeof tokenGetTokens>>,
      TError,
      TData
    >;
  },
): UseQueryResult<TData, TError> & { queryKey: QueryKey } => {
  const queryOptions = useTokenGetTokensQueryOptions(params, options);

  const query = useQuery(queryOptions) as UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
  };

  query.queryKey = queryOptions.queryKey;

  return query;
};

/**
 * Returns the token prices for a specific list of tokens
 * @summary Get token prices
 */
export const tokenGetTokenPrices = (priceRequestDto: PriceRequestDto) => {
  return api<PriceResponseDto>({
    url: `/v1/tokens/prices`,
    method: 'post',
    headers: { 'Content-Type': 'application/json' },
    data: priceRequestDto,
  });
};

export const getTokenGetTokenPricesQueryKey = (
  priceRequestDto: PriceRequestDto,
) => [`/v1/tokens/prices`, priceRequestDto] as const;

export const useTokenGetTokenPricesQueryOptions = <
  TData = Awaited<ReturnType<typeof tokenGetTokenPrices>>,
  TError = unknown,
>(
  priceRequestDto: PriceRequestDto,
  options?: {
    query?: UseQueryOptions<
      Awaited<ReturnType<typeof tokenGetTokenPrices>>,
      TError,
      TData
    >;
  },
): UseQueryOptions<
  Awaited<ReturnType<typeof tokenGetTokenPrices>>,
  TError,
  TData
> & { queryKey: QueryKey } => {
  const { query: queryOptions } = options ?? {};

  const queryKey =
    queryOptions?.queryKey ?? getTokenGetTokenPricesQueryKey(priceRequestDto);

  const queryFn: QueryFunction<
    Awaited<ReturnType<typeof tokenGetTokenPrices>>
  > = () => tokenGetTokenPrices(priceRequestDto);

  const customOptions = customQueryOptions({
    ...queryOptions,
    queryKey,
    queryFn,
  });

  return customOptions;
};

export type TokenGetTokenPricesQueryResult = NonNullable<
  Awaited<ReturnType<typeof tokenGetTokenPrices>>
>;
export type TokenGetTokenPricesQueryError = unknown;

/**
 * @summary Get token prices
 */
export const useTokenGetTokenPrices = <
  TData = Awaited<ReturnType<typeof tokenGetTokenPrices>>,
  TError = unknown,
>(
  priceRequestDto: PriceRequestDto,
  options?: {
    query?: UseQueryOptions<
      Awaited<ReturnType<typeof tokenGetTokenPrices>>,
      TError,
      TData
    >;
  },
): UseQueryResult<TData, TError> & { queryKey: QueryKey } => {
  const queryOptions = useTokenGetTokenPricesQueryOptions(
    priceRequestDto,
    options,
  );

  const query = useQuery(queryOptions) as UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
  };

  query.queryKey = queryOptions.queryKey;

  return query;
};

/**
 * Returns the balances for specific addresses and token addresses
 * @summary Get token balances
 */
export const tokenGetTokenBalances = (
  balancesRequestDto: BalancesRequestDto,
) => {
  return api<BalanceResponseDto[]>({
    url: `/v1/tokens/balances`,
    method: 'post',
    headers: { 'Content-Type': 'application/json' },
    data: balancesRequestDto,
  });
};

export const getTokenGetTokenBalancesQueryKey = (
  balancesRequestDto: BalancesRequestDto,
) => [`/v1/tokens/balances`, balancesRequestDto] as const;

export const useTokenGetTokenBalancesQueryOptions = <
  TData = Awaited<ReturnType<typeof tokenGetTokenBalances>>,
  TError = unknown,
>(
  balancesRequestDto: BalancesRequestDto,
  options?: {
    query?: UseQueryOptions<
      Awaited<ReturnType<typeof tokenGetTokenBalances>>,
      TError,
      TData
    >;
  },
): UseQueryOptions<
  Awaited<ReturnType<typeof tokenGetTokenBalances>>,
  TError,
  TData
> & { queryKey: QueryKey } => {
  const { query: queryOptions } = options ?? {};

  const queryKey =
    queryOptions?.queryKey ??
    getTokenGetTokenBalancesQueryKey(balancesRequestDto);

  const queryFn: QueryFunction<
    Awaited<ReturnType<typeof tokenGetTokenBalances>>
  > = () => tokenGetTokenBalances(balancesRequestDto);

  const customOptions = customQueryOptions({
    ...queryOptions,
    queryKey,
    queryFn,
  });

  return customOptions;
};

export type TokenGetTokenBalancesQueryResult = NonNullable<
  Awaited<ReturnType<typeof tokenGetTokenBalances>>
>;
export type TokenGetTokenBalancesQueryError = unknown;

/**
 * @summary Get token balances
 */
export const useTokenGetTokenBalances = <
  TData = Awaited<ReturnType<typeof tokenGetTokenBalances>>,
  TError = unknown,
>(
  balancesRequestDto: BalancesRequestDto,
  options?: {
    query?: UseQueryOptions<
      Awaited<ReturnType<typeof tokenGetTokenBalances>>,
      TError,
      TData
    >;
  },
): UseQueryResult<TData, TError> & { queryKey: QueryKey } => {
  const queryOptions = useTokenGetTokenBalancesQueryOptions(
    balancesRequestDto,
    options,
  );

  const query = useQuery(queryOptions) as UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
  };

  query.queryKey = queryOptions.queryKey;

  return query;
};

/**
 * Scans for tokens with balance with available yields
 * @summary Scan for token balances
 */
export const tokenTokenBalancesScan = (
  tokenBalanceScanDto: TokenBalanceScanDto,
) => {
  return api<TokenBalanceScanResponseDto[]>({
    url: `/v1/tokens/balances/scan`,
    method: 'post',
    headers: { 'Content-Type': 'application/json' },
    data: tokenBalanceScanDto,
  });
};

export const getTokenTokenBalancesScanQueryKey = (
  tokenBalanceScanDto: TokenBalanceScanDto,
) => [`/v1/tokens/balances/scan`, tokenBalanceScanDto] as const;

export const useTokenTokenBalancesScanQueryOptions = <
  TData = Awaited<ReturnType<typeof tokenTokenBalancesScan>>,
  TError = unknown,
>(
  tokenBalanceScanDto: TokenBalanceScanDto,
  options?: {
    query?: UseQueryOptions<
      Awaited<ReturnType<typeof tokenTokenBalancesScan>>,
      TError,
      TData
    >;
  },
): UseQueryOptions<
  Awaited<ReturnType<typeof tokenTokenBalancesScan>>,
  TError,
  TData
> & { queryKey: QueryKey } => {
  const { query: queryOptions } = options ?? {};

  const queryKey =
    queryOptions?.queryKey ??
    getTokenTokenBalancesScanQueryKey(tokenBalanceScanDto);

  const queryFn: QueryFunction<
    Awaited<ReturnType<typeof tokenTokenBalancesScan>>
  > = () => tokenTokenBalancesScan(tokenBalanceScanDto);

  const customOptions = customQueryOptions({
    ...queryOptions,
    queryKey,
    queryFn,
  });

  return customOptions;
};

export type TokenTokenBalancesScanQueryResult = NonNullable<
  Awaited<ReturnType<typeof tokenTokenBalancesScan>>
>;
export type TokenTokenBalancesScanQueryError = unknown;

/**
 * @summary Scan for token balances
 */
export const useTokenTokenBalancesScan = <
  TData = Awaited<ReturnType<typeof tokenTokenBalancesScan>>,
  TError = unknown,
>(
  tokenBalanceScanDto: TokenBalanceScanDto,
  options?: {
    query?: UseQueryOptions<
      Awaited<ReturnType<typeof tokenTokenBalancesScan>>,
      TError,
      TData
    >;
  },
): UseQueryResult<TData, TError> & { queryKey: QueryKey } => {
  const queryOptions = useTokenTokenBalancesScanQueryOptions(
    tokenBalanceScanDto,
    options,
  );

  const query = useQuery(queryOptions) as UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
  };

  query.queryKey = queryOptions.queryKey;

  return query;
};

/**
 * Returns the available yields (staking, lending, vaults, etc) with associated configuration and metadata
 * @summary Get all yields
 */
export const yieldYields = (
  params?: YieldYieldsParams,
  signal?: AbortSignal,
) => {
  return api<YieldYields200>({
    url: `/v1/yields`,
    method: 'get',
    params,
    signal,
  });
};

export const getYieldYieldsQueryKey = (params?: YieldYieldsParams) =>
  [`/v1/yields`, ...(params ? [params] : [])] as const;

export const useYieldYieldsQueryOptions = <
  TData = Awaited<ReturnType<typeof yieldYields>>,
  TError = unknown,
>(
  params?: YieldYieldsParams,
  options?: {
    query?: UseQueryOptions<
      Awaited<ReturnType<typeof yieldYields>>,
      TError,
      TData
    >;
  },
): UseQueryOptions<Awaited<ReturnType<typeof yieldYields>>, TError, TData> & {
  queryKey: QueryKey;
} => {
  const { query: queryOptions } = options ?? {};

  const queryKey = queryOptions?.queryKey ?? getYieldYieldsQueryKey(params);

  const queryFn: QueryFunction<Awaited<ReturnType<typeof yieldYields>>> = ({
    signal,
  }) => yieldYields(params, signal);

  const customOptions = customQueryOptions({
    ...queryOptions,
    queryKey,
    queryFn,
  });

  return customOptions;
};

export type YieldYieldsQueryResult = NonNullable<
  Awaited<ReturnType<typeof yieldYields>>
>;
export type YieldYieldsQueryError = unknown;

/**
 * @summary Get all yields
 */
export const useYieldYields = <
  TData = Awaited<ReturnType<typeof yieldYields>>,
  TError = unknown,
>(
  params?: YieldYieldsParams,
  options?: {
    query?: UseQueryOptions<
      Awaited<ReturnType<typeof yieldYields>>,
      TError,
      TData
    >;
  },
): UseQueryResult<TData, TError> & { queryKey: QueryKey } => {
  const queryOptions = useYieldYieldsQueryOptions(params, options);

  const query = useQuery(queryOptions) as UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
  };

  query.queryKey = queryOptions.queryKey;

  return query;
};

/**
 * Given addresses and integration ids, returns respective balances and configuration.
 * @summary Get multiple yield balances
 */
export const yieldGetMultipleYieldBalances = (
  yieldBalanceWithIntegrationIdRequestDto: YieldBalanceWithIntegrationIdRequestDto[],
  params?: YieldGetMultipleYieldBalancesParams,
) => {
  return api<YieldBalancesWithIntegrationIdDto[]>({
    url: `/v1/yields/balances`,
    method: 'post',
    headers: { 'Content-Type': 'application/json' },
    data: yieldBalanceWithIntegrationIdRequestDto,
    params,
  });
};

export const getYieldGetMultipleYieldBalancesQueryKey = (
  yieldBalanceWithIntegrationIdRequestDto: YieldBalanceWithIntegrationIdRequestDto[],
  params?: YieldGetMultipleYieldBalancesParams,
) =>
  [
    `/v1/yields/balances`,
    ...(params ? [params] : []),
    yieldBalanceWithIntegrationIdRequestDto,
  ] as const;

export const useYieldGetMultipleYieldBalancesQueryOptions = <
  TData = Awaited<ReturnType<typeof yieldGetMultipleYieldBalances>>,
  TError = unknown,
>(
  yieldBalanceWithIntegrationIdRequestDto: YieldBalanceWithIntegrationIdRequestDto[],
  params?: YieldGetMultipleYieldBalancesParams,
  options?: {
    query?: UseQueryOptions<
      Awaited<ReturnType<typeof yieldGetMultipleYieldBalances>>,
      TError,
      TData
    >;
  },
): UseQueryOptions<
  Awaited<ReturnType<typeof yieldGetMultipleYieldBalances>>,
  TError,
  TData
> & { queryKey: QueryKey } => {
  const { query: queryOptions } = options ?? {};

  const queryKey =
    queryOptions?.queryKey ??
    getYieldGetMultipleYieldBalancesQueryKey(
      yieldBalanceWithIntegrationIdRequestDto,
      params,
    );

  const queryFn: QueryFunction<
    Awaited<ReturnType<typeof yieldGetMultipleYieldBalances>>
  > = () =>
    yieldGetMultipleYieldBalances(
      yieldBalanceWithIntegrationIdRequestDto,
      params,
    );

  const customOptions = customQueryOptions({
    ...queryOptions,
    queryKey,
    queryFn,
  });

  return customOptions;
};

export type YieldGetMultipleYieldBalancesQueryResult = NonNullable<
  Awaited<ReturnType<typeof yieldGetMultipleYieldBalances>>
>;
export type YieldGetMultipleYieldBalancesQueryError = unknown;

/**
 * @summary Get multiple yield balances
 */
export const useYieldGetMultipleYieldBalances = <
  TData = Awaited<ReturnType<typeof yieldGetMultipleYieldBalances>>,
  TError = unknown,
>(
  yieldBalanceWithIntegrationIdRequestDto: YieldBalanceWithIntegrationIdRequestDto[],
  params?: YieldGetMultipleYieldBalancesParams,
  options?: {
    query?: UseQueryOptions<
      Awaited<ReturnType<typeof yieldGetMultipleYieldBalances>>,
      TError,
      TData
    >;
  },
): UseQueryResult<TData, TError> & { queryKey: QueryKey } => {
  const queryOptions = useYieldGetMultipleYieldBalancesQueryOptions(
    yieldBalanceWithIntegrationIdRequestDto,
    params,
    options,
  );

  const query = useQuery(queryOptions) as UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
  };

  query.queryKey = queryOptions.queryKey;

  return query;
};

/**
 * Scans for yield balances among enabled yields.
 * @summary Scan for yield balances
 */
export const yieldYieldBalancesScan = (
  yieldBalanceScanRequestDto: YieldBalanceScanRequestDto,
  params?: YieldYieldBalancesScanParams,
) => {
  return api<YieldBalancesWithIntegrationIdDto[]>({
    url: `/v1/yields/balances/scan`,
    method: 'post',
    headers: { 'Content-Type': 'application/json' },
    data: yieldBalanceScanRequestDto,
    params,
  });
};

export const getYieldYieldBalancesScanQueryKey = (
  yieldBalanceScanRequestDto: YieldBalanceScanRequestDto,
  params?: YieldYieldBalancesScanParams,
) =>
  [
    `/v1/yields/balances/scan`,
    ...(params ? [params] : []),
    yieldBalanceScanRequestDto,
  ] as const;

export const useYieldYieldBalancesScanQueryOptions = <
  TData = Awaited<ReturnType<typeof yieldYieldBalancesScan>>,
  TError = unknown,
>(
  yieldBalanceScanRequestDto: YieldBalanceScanRequestDto,
  params?: YieldYieldBalancesScanParams,
  options?: {
    query?: UseQueryOptions<
      Awaited<ReturnType<typeof yieldYieldBalancesScan>>,
      TError,
      TData
    >;
  },
): UseQueryOptions<
  Awaited<ReturnType<typeof yieldYieldBalancesScan>>,
  TError,
  TData
> & { queryKey: QueryKey } => {
  const { query: queryOptions } = options ?? {};

  const queryKey =
    queryOptions?.queryKey ??
    getYieldYieldBalancesScanQueryKey(yieldBalanceScanRequestDto, params);

  const queryFn: QueryFunction<
    Awaited<ReturnType<typeof yieldYieldBalancesScan>>
  > = () => yieldYieldBalancesScan(yieldBalanceScanRequestDto, params);

  const customOptions = customQueryOptions({
    ...queryOptions,
    queryKey,
    queryFn,
  });

  return customOptions;
};

export type YieldYieldBalancesScanQueryResult = NonNullable<
  Awaited<ReturnType<typeof yieldYieldBalancesScan>>
>;
export type YieldYieldBalancesScanQueryError = unknown;

/**
 * @summary Scan for yield balances
 */
export const useYieldYieldBalancesScan = <
  TData = Awaited<ReturnType<typeof yieldYieldBalancesScan>>,
  TError = unknown,
>(
  yieldBalanceScanRequestDto: YieldBalanceScanRequestDto,
  params?: YieldYieldBalancesScanParams,
  options?: {
    query?: UseQueryOptions<
      Awaited<ReturnType<typeof yieldYieldBalancesScan>>,
      TError,
      TData
    >;
  },
): UseQueryResult<TData, TError> & { queryKey: QueryKey } => {
  const queryOptions = useYieldYieldBalancesScanQueryOptions(
    yieldBalanceScanRequestDto,
    params,
    options,
  );

  const query = useQuery(queryOptions) as UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
  };

  query.queryKey = queryOptions.queryKey;

  return query;
};

/**
 * Returns the enabled yields (staking, lending, vaults, etc) associated with current API key with configuration and metadata
 * @summary Get enabled yields
 */
export const yieldGetMyYields = (
  params?: YieldGetMyYieldsParams,
  signal?: AbortSignal,
) => {
  return api<YieldGetMyYields200>({
    url: `/v1/yields/enabled`,
    method: 'get',
    params,
    signal,
  });
};

export const getYieldGetMyYieldsQueryKey = (params?: YieldGetMyYieldsParams) =>
  [`/v1/yields/enabled`, ...(params ? [params] : [])] as const;

export const useYieldGetMyYieldsQueryOptions = <
  TData = Awaited<ReturnType<typeof yieldGetMyYields>>,
  TError = unknown,
>(
  params?: YieldGetMyYieldsParams,
  options?: {
    query?: UseQueryOptions<
      Awaited<ReturnType<typeof yieldGetMyYields>>,
      TError,
      TData
    >;
  },
): UseQueryOptions<
  Awaited<ReturnType<typeof yieldGetMyYields>>,
  TError,
  TData
> & { queryKey: QueryKey } => {
  const { query: queryOptions } = options ?? {};

  const queryKey =
    queryOptions?.queryKey ?? getYieldGetMyYieldsQueryKey(params);

  const queryFn: QueryFunction<
    Awaited<ReturnType<typeof yieldGetMyYields>>
  > = ({ signal }) => yieldGetMyYields(params, signal);

  const customOptions = customQueryOptions({
    ...queryOptions,
    queryKey,
    queryFn,
  });

  return customOptions;
};

export type YieldGetMyYieldsQueryResult = NonNullable<
  Awaited<ReturnType<typeof yieldGetMyYields>>
>;
export type YieldGetMyYieldsQueryError = unknown;

/**
 * @summary Get enabled yields
 */
export const useYieldGetMyYields = <
  TData = Awaited<ReturnType<typeof yieldGetMyYields>>,
  TError = unknown,
>(
  params?: YieldGetMyYieldsParams,
  options?: {
    query?: UseQueryOptions<
      Awaited<ReturnType<typeof yieldGetMyYields>>,
      TError,
      TData
    >;
  },
): UseQueryResult<TData, TError> & { queryKey: QueryKey } => {
  const queryOptions = useYieldGetMyYieldsQueryOptions(params, options);

  const query = useQuery(queryOptions) as UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
  };

  query.queryKey = queryOptions.queryKey;

  return query;
};

/**
 * Returns the networks that has enabled yields
 * @summary Get enabled networks
 */
export const yieldGetMyNetworks = (signal?: AbortSignal) => {
  return api<string[]>({
    url: `/v1/yields/enabled/networks`,
    method: 'get',
    signal,
  });
};

export const getYieldGetMyNetworksQueryKey = () =>
  [`/v1/yields/enabled/networks`] as const;

export const useYieldGetMyNetworksQueryOptions = <
  TData = Awaited<ReturnType<typeof yieldGetMyNetworks>>,
  TError = string[],
>(options?: {
  query?: UseQueryOptions<
    Awaited<ReturnType<typeof yieldGetMyNetworks>>,
    TError,
    TData
  >;
}): UseQueryOptions<
  Awaited<ReturnType<typeof yieldGetMyNetworks>>,
  TError,
  TData
> & { queryKey: QueryKey } => {
  const { query: queryOptions } = options ?? {};

  const queryKey = queryOptions?.queryKey ?? getYieldGetMyNetworksQueryKey();

  const queryFn: QueryFunction<
    Awaited<ReturnType<typeof yieldGetMyNetworks>>
  > = ({ signal }) => yieldGetMyNetworks(signal);

  const customOptions = customQueryOptions({
    ...queryOptions,
    queryKey,
    queryFn,
  });

  return customOptions;
};

export type YieldGetMyNetworksQueryResult = NonNullable<
  Awaited<ReturnType<typeof yieldGetMyNetworks>>
>;
export type YieldGetMyNetworksQueryError = string[];

/**
 * @summary Get enabled networks
 */
export const useYieldGetMyNetworks = <
  TData = Awaited<ReturnType<typeof yieldGetMyNetworks>>,
  TError = string[],
>(options?: {
  query?: UseQueryOptions<
    Awaited<ReturnType<typeof yieldGetMyNetworks>>,
    TError,
    TData
  >;
}): UseQueryResult<TData, TError> & { queryKey: QueryKey } => {
  const queryOptions = useYieldGetMyNetworksQueryOptions(options);

  const query = useQuery(queryOptions) as UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
  };

  query.queryKey = queryOptions.queryKey;

  return query;
};

/**
 * Returns a list of available validators to specify when providing a `validatorAddress` property.
 * @summary Get validators
 */
export const yieldFindValidators = (
  params?: YieldFindValidatorsParams,
  signal?: AbortSignal,
) => {
  return api<ValidatorSearchResultDto[]>({
    url: `/v1/yields/validators`,
    method: 'get',
    params,
    signal,
  });
};

export const getYieldFindValidatorsQueryKey = (
  params?: YieldFindValidatorsParams,
) => [`/v1/yields/validators`, ...(params ? [params] : [])] as const;

export const useYieldFindValidatorsQueryOptions = <
  TData = Awaited<ReturnType<typeof yieldFindValidators>>,
  TError = unknown,
>(
  params?: YieldFindValidatorsParams,
  options?: {
    query?: UseQueryOptions<
      Awaited<ReturnType<typeof yieldFindValidators>>,
      TError,
      TData
    >;
  },
): UseQueryOptions<
  Awaited<ReturnType<typeof yieldFindValidators>>,
  TError,
  TData
> & { queryKey: QueryKey } => {
  const { query: queryOptions } = options ?? {};

  const queryKey =
    queryOptions?.queryKey ?? getYieldFindValidatorsQueryKey(params);

  const queryFn: QueryFunction<
    Awaited<ReturnType<typeof yieldFindValidators>>
  > = ({ signal }) => yieldFindValidators(params, signal);

  const customOptions = customQueryOptions({
    ...queryOptions,
    queryKey,
    queryFn,
  });

  return customOptions;
};

export type YieldFindValidatorsQueryResult = NonNullable<
  Awaited<ReturnType<typeof yieldFindValidators>>
>;
export type YieldFindValidatorsQueryError = unknown;

/**
 * @summary Get validators
 */
export const useYieldFindValidators = <
  TData = Awaited<ReturnType<typeof yieldFindValidators>>,
  TError = unknown,
>(
  params?: YieldFindValidatorsParams,
  options?: {
    query?: UseQueryOptions<
      Awaited<ReturnType<typeof yieldFindValidators>>,
      TError,
      TData
    >;
  },
): UseQueryResult<TData, TError> & { queryKey: QueryKey } => {
  const queryOptions = useYieldFindValidatorsQueryOptions(params, options);

  const query = useQuery(queryOptions) as UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
  };

  query.queryKey = queryOptions.queryKey;

  return query;
};

/**
 * Returns a yield that is associated with given integration ID
 * @summary Get a yield given an integration ID
 */
export const yieldYieldOpportunity = (
  integrationId: string,
  params?: YieldYieldOpportunityParams,
  signal?: AbortSignal,
) => {
  return api<YieldDto>({
    url: `/v1/yields/${integrationId}`,
    method: 'get',
    params,
    signal,
  });
};

export const getYieldYieldOpportunityQueryKey = (
  integrationId: string,
  params?: YieldYieldOpportunityParams,
) => [`/v1/yields/${integrationId}`, ...(params ? [params] : [])] as const;

export const useYieldYieldOpportunityQueryOptions = <
  TData = Awaited<ReturnType<typeof yieldYieldOpportunity>>,
  TError = unknown,
>(
  integrationId: string,
  params?: YieldYieldOpportunityParams,
  options?: {
    query?: UseQueryOptions<
      Awaited<ReturnType<typeof yieldYieldOpportunity>>,
      TError,
      TData
    >;
  },
): UseQueryOptions<
  Awaited<ReturnType<typeof yieldYieldOpportunity>>,
  TError,
  TData
> & { queryKey: QueryKey } => {
  const { query: queryOptions } = options ?? {};

  const queryKey =
    queryOptions?.queryKey ??
    getYieldYieldOpportunityQueryKey(integrationId, params);

  const queryFn: QueryFunction<
    Awaited<ReturnType<typeof yieldYieldOpportunity>>
  > = ({ signal }) => yieldYieldOpportunity(integrationId, params, signal);

  const customOptions = customQueryOptions({
    ...queryOptions,
    queryKey,
    queryFn,
  });

  return customOptions;
};

export type YieldYieldOpportunityQueryResult = NonNullable<
  Awaited<ReturnType<typeof yieldYieldOpportunity>>
>;
export type YieldYieldOpportunityQueryError = unknown;

/**
 * @summary Get a yield given an integration ID
 */
export const useYieldYieldOpportunity = <
  TData = Awaited<ReturnType<typeof yieldYieldOpportunity>>,
  TError = unknown,
>(
  integrationId: string,
  params?: YieldYieldOpportunityParams,
  options?: {
    query?: UseQueryOptions<
      Awaited<ReturnType<typeof yieldYieldOpportunity>>,
      TError,
      TData
    >;
  },
): UseQueryResult<TData, TError> & { queryKey: QueryKey } => {
  const queryOptions = useYieldYieldOpportunityQueryOptions(
    integrationId,
    params,
    options,
  );

  const query = useQuery(queryOptions) as UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
  };

  query.queryKey = queryOptions.queryKey;

  return query;
};

/**
 * Returns a list of available validators to specify when providing a `validatorAddress` property.
 * @summary Get validators given an integration ID
 */
export const yieldGetValidators = (
  integrationId: string,
  params?: YieldGetValidatorsParams,
  signal?: AbortSignal,
) => {
  return api<ValidatorDto[]>({
    url: `/v1/yields/${integrationId}/validators`,
    method: 'get',
    params,
    signal,
  });
};

export const getYieldGetValidatorsQueryKey = (
  integrationId: string,
  params?: YieldGetValidatorsParams,
) =>
  [
    `/v1/yields/${integrationId}/validators`,
    ...(params ? [params] : []),
  ] as const;

export const useYieldGetValidatorsQueryOptions = <
  TData = Awaited<ReturnType<typeof yieldGetValidators>>,
  TError = unknown,
>(
  integrationId: string,
  params?: YieldGetValidatorsParams,
  options?: {
    query?: UseQueryOptions<
      Awaited<ReturnType<typeof yieldGetValidators>>,
      TError,
      TData
    >;
  },
): UseQueryOptions<
  Awaited<ReturnType<typeof yieldGetValidators>>,
  TError,
  TData
> & { queryKey: QueryKey } => {
  const { query: queryOptions } = options ?? {};

  const queryKey =
    queryOptions?.queryKey ??
    getYieldGetValidatorsQueryKey(integrationId, params);

  const queryFn: QueryFunction<
    Awaited<ReturnType<typeof yieldGetValidators>>
  > = ({ signal }) => yieldGetValidators(integrationId, params, signal);

  const customOptions = customQueryOptions({
    ...queryOptions,
    queryKey,
    queryFn,
  });

  return customOptions;
};

export type YieldGetValidatorsQueryResult = NonNullable<
  Awaited<ReturnType<typeof yieldGetValidators>>
>;
export type YieldGetValidatorsQueryError = unknown;

/**
 * @summary Get validators given an integration ID
 */
export const useYieldGetValidators = <
  TData = Awaited<ReturnType<typeof yieldGetValidators>>,
  TError = unknown,
>(
  integrationId: string,
  params?: YieldGetValidatorsParams,
  options?: {
    query?: UseQueryOptions<
      Awaited<ReturnType<typeof yieldGetValidators>>,
      TError,
      TData
    >;
  },
): UseQueryResult<TData, TError> & { queryKey: QueryKey } => {
  const queryOptions = useYieldGetValidatorsQueryOptions(
    integrationId,
    params,
    options,
  );

  const query = useQuery(queryOptions) as UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
  };

  query.queryKey = queryOptions.queryKey;

  return query;
};

/**
 * Given addresses, returns the available, deposited balance, pending actions and associated configuration for any yield
 * @summary Get yield balances given an integration ID
 */
export const yieldGetSingleYieldBalances = (
  integrationId: string,
  yieldBalanceRequestDto: YieldBalanceRequestDto,
  params?: YieldGetSingleYieldBalancesParams,
) => {
  return api<YieldBalanceDto[]>({
    url: `/v1/yields/${integrationId}/balances`,
    method: 'post',
    headers: { 'Content-Type': 'application/json' },
    data: yieldBalanceRequestDto,
    params,
  });
};

export const getYieldGetSingleYieldBalancesQueryKey = (
  integrationId: string,
  yieldBalanceRequestDto: YieldBalanceRequestDto,
  params?: YieldGetSingleYieldBalancesParams,
) =>
  [
    `/v1/yields/${integrationId}/balances`,
    ...(params ? [params] : []),
    yieldBalanceRequestDto,
  ] as const;

export const useYieldGetSingleYieldBalancesQueryOptions = <
  TData = Awaited<ReturnType<typeof yieldGetSingleYieldBalances>>,
  TError = unknown,
>(
  integrationId: string,
  yieldBalanceRequestDto: YieldBalanceRequestDto,
  params?: YieldGetSingleYieldBalancesParams,
  options?: {
    query?: UseQueryOptions<
      Awaited<ReturnType<typeof yieldGetSingleYieldBalances>>,
      TError,
      TData
    >;
  },
): UseQueryOptions<
  Awaited<ReturnType<typeof yieldGetSingleYieldBalances>>,
  TError,
  TData
> & { queryKey: QueryKey } => {
  const { query: queryOptions } = options ?? {};

  const queryKey =
    queryOptions?.queryKey ??
    getYieldGetSingleYieldBalancesQueryKey(
      integrationId,
      yieldBalanceRequestDto,
      params,
    );

  const queryFn: QueryFunction<
    Awaited<ReturnType<typeof yieldGetSingleYieldBalances>>
  > = () =>
    yieldGetSingleYieldBalances(integrationId, yieldBalanceRequestDto, params);

  const customOptions = customQueryOptions({
    ...queryOptions,
    queryKey,
    queryFn,
  });

  return customOptions;
};

export type YieldGetSingleYieldBalancesQueryResult = NonNullable<
  Awaited<ReturnType<typeof yieldGetSingleYieldBalances>>
>;
export type YieldGetSingleYieldBalancesQueryError = unknown;

/**
 * @summary Get yield balances given an integration ID
 */
export const useYieldGetSingleYieldBalances = <
  TData = Awaited<ReturnType<typeof yieldGetSingleYieldBalances>>,
  TError = unknown,
>(
  integrationId: string,
  yieldBalanceRequestDto: YieldBalanceRequestDto,
  params?: YieldGetSingleYieldBalancesParams,
  options?: {
    query?: UseQueryOptions<
      Awaited<ReturnType<typeof yieldGetSingleYieldBalances>>,
      TError,
      TData
    >;
  },
): UseQueryResult<TData, TError> & { queryKey: QueryKey } => {
  const queryOptions = useYieldGetSingleYieldBalancesQueryOptions(
    integrationId,
    yieldBalanceRequestDto,
    params,
    options,
  );

  const query = useQuery(queryOptions) as UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
  };

  query.queryKey = queryOptions.queryKey;

  return query;
};
