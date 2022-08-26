import superagent from 'superagent';
import  config  from '../conf/config';

class getProxyIp {

async getIp() {
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