import superagent from 'superagent';
import  config  from '../conf/config';

// 获取模块
class getProxyIp {

async getIp(): Promise<string[]|undefined> {
    const res = await superagent.get(config.proxyurl);
    if (res.body.success===true) {
        // 拼接ip与端口
        const ipArr:string[] = res.body.data.map((item:any) => {
            return item.ip + ':' + item.port;
        })
    return ipArr;
}else{
    console.log(res.body.request_ip);
    this.getIp();
}
}}

export default getProxyIp;