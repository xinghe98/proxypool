import { createClient } from 'redis';
import config from '../conf/config';
class save {
    public client
    constructor() {
        this.client = createClient({url:config.redis.url});
        this.client.on('error', (err: any) => console.log('Redis Client Error', err));
        this.client.connect();
    }
    async saveIp(value:string,score:number=100) :Promise<boolean>{
try{
    await this.client.zAdd("key", {score:score,value:value})
    return true;
}catch(err){
    return false;
}
    }
}

export default save;