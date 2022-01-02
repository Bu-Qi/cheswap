import { simpleRpcProvider } from '@/utils/provider';
import cheFactoryAbi from '@/config/abi/cheFactory.json';
import cheRouterAbi from '@/config/abi/cheRouter.json';
import chePairAbi from '@/config/abi/chePair.json';
import wethAbi from '@/config/abi/weth.json';

import erc20Abi from '@/config/abi/erc20.json';

import { getcheFactoryAddress, getcheRouterAddress, getWethAddress } from '@/utils/addressHelp';

const getContract = (abi, address, provider) => {
  let signerOrProvider = provider != undefined ? provider : simpleRpcProvider;
  return new signerOrProvider.eth.Contract(abi, address);
};

export const getErc20Contract = (address, provider) => {
  return getContract(erc20Abi, address, provider);
};

export const getcheRouterContract = provider => {
  return getContract(cheRouterAbi, getcheRouterAddress(), provider);
};

export const getcheFactoryContract = provider => {
  return getContract(cheFactoryAbi, getcheFactoryAddress(), provider);
};

export const getchePairContract = (address, provider) => {
  return getContract(chePairAbi, address, provider);
};

export const getWethContract = provider => {
  console.log(getWethAddress(), 'getWethAddress()');
  return getContract(wethAbi, getWethAddress(), provider);
};
