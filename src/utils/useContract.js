import store from '@/store';

import { getErc20Contract, getcheRouterContract, getcheFactoryContract, getWethContract } from '@/utils/contractHelp';
export const useErc20Contract = address => {
  const { provider } = store.state;

  return getErc20Contract(address, provider);
};

export const usecheRouterContract = () => {
  const { provider } = store.state;

  return getcheRouterContract(provider);
};

export const usecheFactoryContract = () => {
  const { provider } = store.state;

  return getcheFactoryContract(provider);
};

export const useWethContract = () => {
  const { provider } = store.state;

  return getWethContract(provider);
};
