import { createClient } from 'redis';
import config from '../conf/config';
type IpScore ={
    score: number;
    value: string;
}
// 储存模块
class save {
    public client
    constructor() {
        this.client = createClient({ url: config.redis.url });
        this.client.on('error', (err: any) => console.log('Redis Client Error', err));
        this.client.connect();
    }
    // 储存方法
    async saveIp(value: string, score: number = 100): Promise<boolean> {
        try {
            await this.client.zAdd("key", { score: score, value: value })
            return true;
        } catch (err) {
            return false;
        }
    }
    // 获取全部代理方法
    async fetchIp():Promise<IpScore[]> {
        const re =await this.client.ZRANGE_WITHSCORES("key",0,-1);
        return re;
    }
}
export default save;