import superagent from 'superagent';
import { config } from '../conf/config';

class getProxyIp {

async getIp() {
    const res = await superagent.get(config.proxyurl);
    if (res.body.success===true) {
    return res.body.data;
}else{
    this.getIp();
}
}}

export default getProxyIp;