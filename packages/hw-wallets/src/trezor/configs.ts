import { NetworkNames } from "@enkryptcom/types";
import { bip44Paths } from "../configs";

const supportedPaths = {
  [NetworkNames.Ethereum]: [bip44Paths.ethereum],
  [NetworkNames.Matic]: [bip44Paths.ethereum],
  [NetworkNames.Avalanche]: [bip44Paths.ethereum],
  [NetworkNames.Binance]: [bip44Paths.ethereum],
  [NetworkNames.EthereumClassic]: [bip44Paths.ethereumClassic],
  [NetworkNames.Rootstock]: [bip44Paths.rootstock],
};
export { supportedPaths };
