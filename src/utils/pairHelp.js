const base = [
  {
    "name": "WQKI Token",
    "symbol": "WQKI",
    "address": "0x835f6df988b6f51c9477d49e96adbbc644ba97a2",
    "chainId": 20181205,
    "decimals": 18,
    "logoURI": "https://token-list.oss-cn-hongkong.aliyuncs.com/tokens/icon/e62bd978cdbab3ec2783da7ac597e32e.png"
  },
 
  {"name":"QKIUSD",
  "symbol":"QUSD",
  "address":"0xD7B7e7ddCAf501CeC5946bbe8c05c4A468162523",
  "chainId":20181205,
  "decimals":6,
  "logoURI":"https://token-list.oss-cn-hongkong.aliyuncs.com/tokens/icon/4f91c69f09e18c908f8c870b75031b5d.png"
},
{
  "name": "Tether USD",
  "symbol": "USDT",
  "address": "0xDF0e293CC3c7bA051763FF6b026DA0853D446E38",
  "chainId": 20181205,
  "decimals": 6,
  "logoURI": "https://token-list.oss-cn-hongkong.aliyuncs.com/tokens/icon/usdt.png"
}
];

export function getAllPair(curA, curB) {
  let lpPair = [];
  for (let i = 0; i < base.length; i++) {
    if (base[i].address != curA.address) {
      lpPair.push({ toCur: base[i], fromCur: curA });
    }

    if (base[i].address != curB.address) {
      lpPair.push({ toCur: curB, fromCur: base[i] });
    }
  }
  return lpPair;
}
