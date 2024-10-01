import { Networks } from '../enums';
import { cosmosChainConfig } from './cosmos-chains';

export const NetworkToCoinGeckoPlatformId: { [x in Networks]?: string } = {
  [Networks.Ethereum]: 'ethereum',
  [Networks.Solana]: 'solana',
  [Networks.Celo]: 'celo',
  [Networks.Optimism]: 'optimistic-ethereum',
  [Networks.AvalancheC]: 'avalanche',
  [Networks.Fantom]: 'fantom',
  [Networks.Polygon]: 'polygon-pos',
  [Networks.Binance]: 'binance-smart-chain',
  [Networks.Harmony]: 'harmony-shard-0',
  [Networks.Arbitrum]: 'arbitrum-one',
  [Networks.Tezos]: 'tezos',
  [Networks.Cardano]: 'cardano',
  [Networks.Starknet]: 'starknet',
  [Networks.Base]: 'base',
  [Networks.Linea]: 'linea',
  [Networks.zkSync]: 'zksync',

  [Networks.Cosmos]: cosmosChainConfig[Networks.Cosmos].coinGeckoId,
  [Networks.Kava]: cosmosChainConfig[Networks.Kava].coinGeckoId,
  [Networks.Osmosis]: cosmosChainConfig[Networks.Osmosis].coinGeckoId,
  [Networks.Stargaze]: cosmosChainConfig[Networks.Stargaze].coinGeckoId,
  [Networks.Juno]: cosmosChainConfig[Networks.Juno].coinGeckoId,
  [Networks.Persistence]: cosmosChainConfig[Networks.Persistence].coinGeckoId,
  [Networks.Axelar]: cosmosChainConfig[Networks.Axelar].coinGeckoId,
  [Networks.Onomy]: cosmosChainConfig[Networks.Onomy].coinGeckoId,
  [Networks.Agoric]: cosmosChainConfig[Networks.Agoric].coinGeckoId,
  [Networks.BandProtocol]: cosmosChainConfig[Networks.BandProtocol].coinGeckoId,
  [Networks.Bitsong]: cosmosChainConfig[Networks.Bitsong].coinGeckoId,
  [Networks.Canto]: cosmosChainConfig[Networks.Canto].coinGeckoId,
  [Networks.Chihuahua]: cosmosChainConfig[Networks.Chihuahua].coinGeckoId,
  [Networks.Comdex]: cosmosChainConfig[Networks.Comdex].coinGeckoId,
  [Networks.Crescent]: cosmosChainConfig[Networks.Crescent].coinGeckoId,
  [Networks.Cronos]: cosmosChainConfig[Networks.Cronos].coinGeckoId,
  [Networks.Cudos]: cosmosChainConfig[Networks.Cudos].coinGeckoId,
  [Networks.Evmos]: cosmosChainConfig[Networks.Evmos].coinGeckoId,
  [Networks.FetchAi]: cosmosChainConfig[Networks.FetchAi].coinGeckoId,
  [Networks.GravityBridge]:
    cosmosChainConfig[Networks.GravityBridge].coinGeckoId,
  [Networks.Injective]: cosmosChainConfig[Networks.Injective].coinGeckoId,
  [Networks.IRISnet]: cosmosChainConfig[Networks.IRISnet].coinGeckoId,
  [Networks.KiNetwork]: cosmosChainConfig[Networks.KiNetwork].coinGeckoId,
  [Networks.MarsProtocol]: cosmosChainConfig[Networks.MarsProtocol].coinGeckoId,
  [Networks.NYM]: cosmosChainConfig[Networks.NYM].coinGeckoId,
  [Networks.OKExChain]: cosmosChainConfig[Networks.OKExChain].coinGeckoId,
  [Networks.Regen]: cosmosChainConfig[Networks.Regen].coinGeckoId,
  [Networks.Secret]: cosmosChainConfig[Networks.Secret].coinGeckoId,
  [Networks.Sentinel]: cosmosChainConfig[Networks.Sentinel].coinGeckoId,
  [Networks.Sommelier]: cosmosChainConfig[Networks.Sommelier].coinGeckoId,
  [Networks.StaFi]: cosmosChainConfig[Networks.StaFi].coinGeckoId,
  [Networks.Stride]: cosmosChainConfig[Networks.Stride].coinGeckoId,
  [Networks.Teritori]: cosmosChainConfig[Networks.Teritori].coinGeckoId,
  [Networks.TGrade]: cosmosChainConfig[Networks.TGrade].coinGeckoId,
  [Networks.Umee]: cosmosChainConfig[Networks.Umee].coinGeckoId,
  [Networks.Coreum]: cosmosChainConfig[Networks.Coreum].coinGeckoId,
  [Networks.Desmos]: cosmosChainConfig[Networks.Desmos].coinGeckoId,
  [Networks.Dydx]: cosmosChainConfig[Networks.Dydx].coinGeckoId,
};

export const ChainIds: { [x in Networks]?: string } = {
  [Networks.Arbitrum]: '42161',
  [Networks.AvalancheC]: '43114',
  [Networks.Binance]: '56',
  [Networks.Celo]: '42220',
  [Networks.Ethereum]: '1',
  [Networks.EthereumGoerli]: '5',
  [Networks.EthereumHolesky]: '17000',
  [Networks.Fantom]: '250',
  [Networks.Near]: 'near',
  [Networks.Harmony]: '1666600000',
  [Networks.Optimism]: '10',
  [Networks.Polygon]: '137',
  [Networks.Akash]: 'akashnet-2',
  [Networks.Solana]: '4sGjMW1sUnHzSxGspuhpqLDx6wiyjNtZ',
  [Networks.Tezos]: 'NetXdQprcVkpaWU',
  [Networks.Starknet]: '23448594291968334',
  [Networks.Viction]: '88',
  [Networks.Base]: '8453',
  [Networks.Linea]: '59144',
  [Networks.zkSync]: '324',

  [Networks.Cosmos]: cosmosChainConfig[Networks.Cosmos].chainId,
  [Networks.Kava]: cosmosChainConfig[Networks.Kava].chainId,
  [Networks.Osmosis]: cosmosChainConfig[Networks.Osmosis].chainId,
  [Networks.Stargaze]: cosmosChainConfig[Networks.Stargaze].chainId,
  [Networks.Juno]: cosmosChainConfig[Networks.Juno].chainId,
  [Networks.Persistence]: cosmosChainConfig[Networks.Persistence].chainId,
  [Networks.Axelar]: cosmosChainConfig[Networks.Axelar].chainId,
  [Networks.Onomy]: cosmosChainConfig[Networks.Onomy].chainId,
  [Networks.Agoric]: cosmosChainConfig[Networks.Agoric].chainId,
  [Networks.BandProtocol]: cosmosChainConfig[Networks.BandProtocol].chainId,
  [Networks.Bitsong]: cosmosChainConfig[Networks.Bitsong].chainId,
  [Networks.Canto]: cosmosChainConfig[Networks.Canto].chainId,
  [Networks.Chihuahua]: cosmosChainConfig[Networks.Chihuahua].chainId,
  [Networks.Comdex]: cosmosChainConfig[Networks.Comdex].chainId,
  [Networks.Crescent]: cosmosChainConfig[Networks.Crescent].chainId,
  [Networks.Cronos]: cosmosChainConfig[Networks.Cronos].chainId,
  [Networks.Cudos]: cosmosChainConfig[Networks.Cudos].chainId,
  [Networks.Evmos]: cosmosChainConfig[Networks.Evmos].chainId,
  [Networks.FetchAi]: cosmosChainConfig[Networks.FetchAi].chainId,
  [Networks.GravityBridge]: cosmosChainConfig[Networks.GravityBridge].chainId,
  [Networks.Injective]: cosmosChainConfig[Networks.Injective].chainId,
  [Networks.IRISnet]: cosmosChainConfig[Networks.IRISnet].chainId,
  [Networks.KiNetwork]: cosmosChainConfig[Networks.KiNetwork].chainId,
  [Networks.MarsProtocol]: cosmosChainConfig[Networks.MarsProtocol].chainId,
  [Networks.NYM]: cosmosChainConfig[Networks.NYM].chainId,
  [Networks.OKExChain]: cosmosChainConfig[Networks.OKExChain].chainId,
  [Networks.Regen]: cosmosChainConfig[Networks.Regen].chainId,
  [Networks.Secret]: cosmosChainConfig[Networks.Secret].chainId,
  [Networks.Sentinel]: cosmosChainConfig[Networks.Sentinel].chainId,
  [Networks.Sommelier]: cosmosChainConfig[Networks.Sommelier].chainId,
  [Networks.StaFi]: cosmosChainConfig[Networks.StaFi].chainId,
  [Networks.Stride]: cosmosChainConfig[Networks.Stride].chainId,
  [Networks.Teritori]: cosmosChainConfig[Networks.Teritori].chainId,
  [Networks.TGrade]: cosmosChainConfig[Networks.TGrade].chainId,
  [Networks.Umee]: cosmosChainConfig[Networks.Umee].chainId,
  [Networks.Coreum]: cosmosChainConfig[Networks.Coreum].chainId,
  [Networks.Desmos]: cosmosChainConfig[Networks.Desmos].chainId,
  [Networks.Dydx]: cosmosChainConfig[Networks.Dydx].chainId,
};
