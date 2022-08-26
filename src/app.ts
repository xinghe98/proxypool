import getProxyIp from "./get/getproxy";
import save from "./save/saveIp";
const getIp = new getProxyIp();
const saveProxy = new save();

async function main() {
    // const res = await getIp.getIp();
    // // console.log(res);
    // let promiseArr:any[] = [];
    // for await (const item of res??[]) {
    //     promiseArr.push(saveProxy.saveIp(item));
    // }
    // await Promise.all(promiseArr);
    // saveProxy.client.quit();
const res = await saveProxy.getIp();
console.log(res);
}
// console.log(config.proxyurl);
main();

