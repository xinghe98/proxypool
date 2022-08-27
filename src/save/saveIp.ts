import  Redis  from 'ioredis';
import config from '../conf/config';
// 储存模块
class save {
    public client
    constructor() {
        this.client = new Redis(config.redis.url);
        this.client.on('error', (err:any) => console.log('Redis Client Error', err));
    }
    // 储存方法
    async saveIp(value: string, score: number = 100): Promise<boolean> {
        try {
            await this.client.zadd("key", score, value)
            return true;
        } catch (err) {
            return false;
        }
    }
    // 获取全部代理方法
    async fetchIp(): Promise<string[]> {
        const re =await this.client.zrange("key",0,-1);
        return re;
    }
}
export default save;