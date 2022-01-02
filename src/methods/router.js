import { getErc20Contract, getcheFactoryContract, getcheRouterContract, getchePairContract } from '@/utils/contractHelp';
import { MaxUint256 } from '@ethersproject/constants';
import { formatAmount, parseAmount, accMul, accDiv, toFixed, accAdd, accSub, accGt } from '@/utils/format.js';

import store from '@/store';

export const getAllowance = async (from, to, address) => {
  const erc20Contract = getErc20Contract(address);
  const allowance = await erc20Contract.methods.allowance(from, to).call();
  return allowance;
};

export const swapExactQKIForTokens = async (value, amountOutMin, path, to, deadline, account) => {};
