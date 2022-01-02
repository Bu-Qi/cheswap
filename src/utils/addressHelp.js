// import addresses from '@/config/constants/contracts.js';
const addresses = {
  cheRouter: '0x3c91FD5247B050A1536F24D012a17a618EEFbfCA',
  cheFactory: '0x4cb5b19e8316743519072170886355b0e2c717cf',
  weth: '0x835F6dF988B6f51c9477D49e96aDBbc644ba97a2',};

export const getAddress = address => {
  return address;
};

export const getcheFactoryAddress = () => {
  return getAddress(addresses.cheFactory);
};

export const getcheRouterAddress = () => {
  return getAddress(addresses.cheRouter);
};

export const getWethAddress = () => {
  console.log(addresses.weth, 'addresses.weth');
  return getAddress(addresses.weth);
};
