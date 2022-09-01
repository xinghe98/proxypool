import getProxyIp from "./get/getproxy";
import testIp from "./detect/detect";
const getIp = new getProxyIp();
const testip = new testIp();
async function main() {
  // setInterval(async () => {getIp.run();} ,50000)
  setInterval(async () => {testip.run();} ,6000)
}
// console.log(config.proxyurl);
main();

