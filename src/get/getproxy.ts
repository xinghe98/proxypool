import axios from 'axios'
import  config  from '../conf/config';
import save from '../save/saveIp';

// 获取模块
class getProxyIp {
    private saveProxy:save;
    constructor(){
    this.saveProxy = new save();
    }

async getIp(): Promise<string[]|undefined> {
    const res = await axios.get(config.proxyurl);
    if (res.data.success===true) {
        // 拼接ip与端口
        const ipArr:string[] = res.data.data.map((item:any) => {
            return item.ip + ':' + item.port;
        })
    return ipArr;
}else{
    console.log(res.data.request_ip);
    this.getIp();
}
}
// 运行获取代理ip的方法
async run(){
  const res = await this.getIp();
    // console.log(res);
    let promiseArr:any[] = [];
    // 储存获取的ip
    for await (const item of res??[]) {
        promiseArr.push(this.saveProxy.saveIp(item));
    }
    await Promise.all(promiseArr);
    this.saveProxy.client.quit();
}
}

export default getProxyIp;