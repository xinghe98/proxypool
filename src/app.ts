import getProxyIp from "./get/getproxy";
const getIp = new getProxyIp();

async function main() {
    const res = await getIp.getIp();
    console.log(res);
}
// console.log(config.proxyurl);
main();
