import getProxyIp from "./get/getproxy";
import save from "./save/saveIp";
import testIp from "./detect/detect";
const getIp = new getProxyIp();
const saveProxy = new save();
const testip = new testIp();
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
saveProxy.client.quit()
const proxyip = res.map((item:any) => {
    return item.value;
})
console.log(proxyip);
let promiseArr:any[] = [];
for await (const item of proxyip??[]) {
    promiseArr.push(testip.useIp(item));
}
await Promise.all(promiseArr);
}
// console.log(config.proxyurl);
main();

