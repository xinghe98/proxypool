import axios from 'axios'
import  config  from '../conf/config';

// 获取模块
class getProxyIp {

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
}}

export default getProxyIp;