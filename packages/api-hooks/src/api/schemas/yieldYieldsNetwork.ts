export type YieldYieldsNetwork =
  (typeof YieldYieldsNetwork)[keyof typeof YieldYieldsNetwork];

// eslint-disable-next-line @typescript-eslint/no-redeclare
export const YieldYieldsNetwork = {
  ethereum: 'ethereum',
  'ethereum-goerli': 'ethereum-goerli',
  'ethereum-holesky': 'ethereum-holesky',
  arbitrum: 'arbitrum',
  base: 'base',
  gnosis: 'gnosis',
  optimism: 'optimism',
  polygon: 'polygon',
  starknet: 'starknet',
  zksync: 'zksync',
  'avalanche-c': 'avalanche-c',
  'avalanche-c-atomic': 'avalanche-c-atomic',
  'avalanche-p': 'avalanche-p',
  binance: 'binance',
  celo: 'celo',
  fantom: 'fantom',
  harmony: 'harmony',
  moonriver: 'moonriver',
  okc: 'okc',
  viction: 'viction',
  agoric: 'agoric',
  akash: 'akash',
  axelar: 'axelar',
  'band-protocol': 'band-protocol',
  bitsong: 'bitsong',
  canto: 'canto',
  chihuahua: 'chihuahua',
  comdex: 'comdex',
  coreum: 'coreum',
  cosmos: 'cosmos',
  crescent: 'crescent',
  cronos: 'cronos',
  cudos: 'cudos',
  desmos: 'desmos',
  dydx: 'dydx',
  evmos: 'evmos',
  'fetch-ai': 'fetch-ai',
  'gravity-bridge': 'gravity-bridge',
  injective: 'injective',
  irisnet: 'irisnet',
  juno: 'juno',
  kava: 'kava',
  'ki-network': 'ki-network',
  'mars-protocol': 'mars-protocol',
  nym: 'nym',
  'okex-chain': 'okex-chain',
  onomy: 'onomy',
  osmosis: 'osmosis',
  persistence: 'persistence',
  quicksilver: 'quicksilver',
  regen: 'regen',
  secret: 'secret',
  sentinel: 'sentinel',
  sommelier: 'sommelier',
  stafi: 'stafi',
  stargaze: 'stargaze',
  stride: 'stride',
  teritori: 'teritori',
  tgrade: 'tgrade',
  umee: 'umee',
  polkadot: 'polkadot',
  kusama: 'kusama',
  westend: 'westend',
  binancebeacon: 'binancebeacon',
  near: 'near',
  solana: 'solana',
  tezos: 'tezos',
  tron: 'tron',
} as const;
