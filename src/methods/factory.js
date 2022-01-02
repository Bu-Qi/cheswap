import store from '@/store';
import { getcheFactoryContract, getErc20Contract } from '@/utils/contractHelp';

export const useErc20 = address => {
  const { provider } = store.state;
  return getErc20Contract(address, provider);
};

export const usecheFactory = () => {
  const { provider } = store.state;
  return getcheFactoryContract(provider);
};
