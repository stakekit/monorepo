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
  PriceResponseDto,
  PriceRequestDto,
  BalanceResponseDto,
  BalancesRequestDto,
  YieldYields200,
  YieldYieldsParams,
  YieldBalancesWithIntegrationIdDto,
  YieldBalanceWithIntegrationIdRequestDto,
  YieldGetMyYields200,
  YieldGetMyYieldsParams,
  YieldDto,
  ValidatorDto,
  YieldBalanceDto,
  YieldBalanceRequestDto,
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
 * @summary Get staked balances for multiple yields
 */
export const yieldGetMultipleYieldBalances = (
  yieldBalanceWithIntegrationIdRequestDto: YieldBalanceWithIntegrationIdRequestDto[],
) => {
  return api<YieldBalancesWithIntegrationIdDto[]>({
    url: `/v1/yields/balances`,
    method: 'post',
    headers: { 'Content-Type': 'application/json' },
    data: yieldBalanceWithIntegrationIdRequestDto,
  });
};

export const getYieldGetMultipleYieldBalancesQueryKey = (
  yieldBalanceWithIntegrationIdRequestDto: YieldBalanceWithIntegrationIdRequestDto[],
) => [`/v1/yields/balances`, yieldBalanceWithIntegrationIdRequestDto] as const;

export const useYieldGetMultipleYieldBalancesQueryOptions = <
  TData = Awaited<ReturnType<typeof yieldGetMultipleYieldBalances>>,
  TError = GeolocationError,
>(
  yieldBalanceWithIntegrationIdRequestDto: YieldBalanceWithIntegrationIdRequestDto[],
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
    );

  const queryFn: QueryFunction<
    Awaited<ReturnType<typeof yieldGetMultipleYieldBalances>>
  > = () =>
    yieldGetMultipleYieldBalances(yieldBalanceWithIntegrationIdRequestDto);

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
export type YieldGetMultipleYieldBalancesQueryError = GeolocationError;

/**
 * @summary Get staked balances for multiple yields
 */
export const useYieldGetMultipleYieldBalances = <
  TData = Awaited<ReturnType<typeof yieldGetMultipleYieldBalances>>,
  TError = GeolocationError,
>(
  yieldBalanceWithIntegrationIdRequestDto: YieldBalanceWithIntegrationIdRequestDto[],
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
    options,
  );

  const query = useQuery(queryOptions) as UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
  };

  query.queryKey = queryOptions.queryKey;

  return query;
};

/**
 * Returns the enabled yields (staking, lending, vaults, etc) with associated configuration and metadata
 * @summary Get yields enabled in project associated with current API key
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
 * @summary Get yields enabled in project associated with current API key
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
 * Returns a yield that is associated with given integration ID
 * @summary Get a yield given an integration ID
 */
export const yieldYieldOpportunity = (
  integrationId: string,
  signal?: AbortSignal,
) => {
  return api<YieldDto>({
    url: `/v1/yields/${integrationId}`,
    method: 'get',
    signal,
  });
};

export const getYieldYieldOpportunityQueryKey = (integrationId: string) =>
  [`/v1/yields/${integrationId}`] as const;

export const useYieldYieldOpportunityQueryOptions = <
  TData = Awaited<ReturnType<typeof yieldYieldOpportunity>>,
  TError = unknown,
>(
  integrationId: string,
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
    queryOptions?.queryKey ?? getYieldYieldOpportunityQueryKey(integrationId);

  const queryFn: QueryFunction<
    Awaited<ReturnType<typeof yieldYieldOpportunity>>
  > = ({ signal }) => yieldYieldOpportunity(integrationId, signal);

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
  signal?: AbortSignal,
) => {
  return api<ValidatorDto[]>({
    url: `/v1/yields/${integrationId}/validators`,
    method: 'get',
    signal,
  });
};

export const getYieldGetValidatorsQueryKey = (integrationId: string) =>
  [`/v1/yields/${integrationId}/validators`] as const;

export const useYieldGetValidatorsQueryOptions = <
  TData = Awaited<ReturnType<typeof yieldGetValidators>>,
  TError = GeolocationError,
>(
  integrationId: string,
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
    queryOptions?.queryKey ?? getYieldGetValidatorsQueryKey(integrationId);

  const queryFn: QueryFunction<
    Awaited<ReturnType<typeof yieldGetValidators>>
  > = ({ signal }) => yieldGetValidators(integrationId, signal);

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
export type YieldGetValidatorsQueryError = GeolocationError;

/**
 * @summary Get validators given an integration ID
 */
export const useYieldGetValidators = <
  TData = Awaited<ReturnType<typeof yieldGetValidators>>,
  TError = GeolocationError,
>(
  integrationId: string,
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
 * @summary Get staked balances given an integration ID
 */
export const yieldGetSingleYieldBalances = (
  integrationId: string,
  yieldBalanceRequestDto: YieldBalanceRequestDto,
) => {
  return api<YieldBalanceDto[]>({
    url: `/v1/yields/${integrationId}/balances`,
    method: 'post',
    headers: { 'Content-Type': 'application/json' },
    data: yieldBalanceRequestDto,
  });
};

export const useYieldGetSingleYieldBalancesMutationOptions = <
  TError = GeolocationError,
  TContext = unknown,
>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<typeof yieldGetSingleYieldBalances>>,
    TError,
    { integrationId: string; data: YieldBalanceRequestDto },
    TContext
  >;
}): UseMutationOptions<
  Awaited<ReturnType<typeof yieldGetSingleYieldBalances>>,
  TError,
  { integrationId: string; data: YieldBalanceRequestDto },
  TContext
> => {
  const { mutation: mutationOptions } = options ?? {};

  const mutationFn: MutationFunction<
    Awaited<ReturnType<typeof yieldGetSingleYieldBalances>>,
    { integrationId: string; data: YieldBalanceRequestDto }
  > = (props) => {
    const { integrationId, data } = props ?? {};

    return yieldGetSingleYieldBalances(integrationId, data);
  };

  const customOptions = customQueryOptions({ ...mutationOptions, mutationFn });

  return customOptions;
};

export type YieldGetSingleYieldBalancesMutationResult = NonNullable<
  Awaited<ReturnType<typeof yieldGetSingleYieldBalances>>
>;
export type YieldGetSingleYieldBalancesMutationBody = YieldBalanceRequestDto;
export type YieldGetSingleYieldBalancesMutationError = GeolocationError;

/**
 * @summary Get staked balances given an integration ID
 */
export const useYieldGetSingleYieldBalances = <
  TError = GeolocationError,
  TContext = unknown,
>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<typeof yieldGetSingleYieldBalances>>,
    TError,
    { integrationId: string; data: YieldBalanceRequestDto },
    TContext
  >;
}) => {
  const mutationOptions =
    useYieldGetSingleYieldBalancesMutationOptions(options);

  return useMutation(mutationOptions);
};
