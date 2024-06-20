import ethNode from "./eth";
import etcNode from "./etc";
import maticNode from "./matic";
import maticZkNode from "./maticzk";
import bscNode from "./bsc";
import moonbeamNode from "./glmr";
import moonriverNode from "./movr";
import karuraEvmNode from "./karura";
import okcNode from "./okc";
import shidenEvmNode from "./sdn";
import astarEvmNode from "./astr";
import optimismNode from "./op";
import cantoNode from "./canto";
import rootstockNode from "./rsk";
import edgeEvmNode from "./edg";
import zkGoerliNode from "./zkgoerli";
import vicNode from "./vic";
import zkSyncNode from "./zksync";
import arbNode from "./arb";
import * as skale from "./skale";
import ontEVMNode from "./ontevm";
import gnoNode from "./gno";
import avaxNode from "./avax";
import ftmNode from "./ftm";
import klayNode from "./klay";
import auroraNode from "./aurora";
import puppyNode from "./puppy";
import sepoliaNode from "./sepolia";
import baseNode from "./base";
import celoNode from "./celo";
import shibNode from "./shib";
import artheraNode from "./aa";
import formTestnet from "./form-testnet";
import artheraTestNode from "./aat";
import syscoinTestNode from "./tsys";
import syscoinNode from "./sys";
import rolluxTestNode from "./trlx";
import rolluxNode from "./rlx";
import cagaAnkara from "./cagaAnkara";

export default {
  sepolia: sepoliaNode,
  ethereum: ethNode,
  etc: etcNode,
  matic: maticNode,
  maticzk: maticZkNode,
  bsc: bscNode,
  moonbeam: moonbeamNode,
  moonriver: moonriverNode,
  karuraEvm: karuraEvmNode,
  okc: okcNode,
  shidenEvm: shidenEvmNode,
  astarEvm: astarEvmNode,
  op: optimismNode,
  canto: cantoNode,
  rootstock: rootstockNode,
  edgeEvm: edgeEvmNode,
  zkGoerli: zkGoerliNode,
  vic: vicNode,
  zkSync: zkSyncNode,
  skaleEuropa: skale.europaNode,
  skaleBlockBrawlers: skale.blockBrawlersNode,
  skaleCalypso: skale.calypsoNode,
  skaleCryptoBlades: skale.cryptoBladesNode,
  skaleCryptoColosseum: skale.cryptoColosseumNode,
  skaleExorde: skale.exordeNode,
  skaleNebula: skale.nebulaNode,
  skaleRazor: skale.razorNode,
  skaleTitan: skale.titanNode,
  skaleChaos: skale.chaosNode,
  ontEVM: ontEVMNode,
  arbitrum: arbNode,
  gnosis: gnoNode,
  avax: avaxNode,
  fantom: ftmNode,
  klaytn: klayNode,
  aurora: auroraNode,
  puppy: puppyNode,
  base: baseNode,
  celo: celoNode,
  shib: shibNode,
  arthera: artheraNode,
  formTestnet: formTestnet,
  artheraTest: artheraTestNode,
  syscoinTest: syscoinTestNode,
  syscoin: syscoinNode,
  rolluxTest: rolluxTestNode,
  rollux: rolluxNode,
  cagaAnkara: cagaAnkara,
};
