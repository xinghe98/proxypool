import getProxyIp from "./get/getproxy";
import testIp from "./detect/detect";
import saveIp from "./save/saveIp";
import express from "express";
const app = express();
const getIp = new getProxyIp();
const testip = new testIp();
const saveProxy = new saveIp();
async function main() {
  setInterval(async () => {getIp.run();} ,150000)
  setInterval(async () => {testip.run();} ,60000)
  app.get("/", async (req, res) => {
    res.send("hello world");
  })
  app.get("/get", async (req, res) => {
    res.send(await saveProxy.get());
  })
}
// console.log(config.proxyurl);
main();
app.listen(3000, () => {
  console.log("server is running on port 3000");
})
