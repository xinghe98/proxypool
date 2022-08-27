import getProxyIp from "./get/getproxy";
import save from "./save/saveIp";
import testIp from "./detect/detect";
const getIp = new getProxyIp();
const saveProxy = new save();
const testip = new testIp();
async function main() {
  // getIp.run();
  await testip.run();
  saveProxy.client.quit();
}
// console.log(config.proxyurl);
main();

