import  Redis  from 'ioredis';
import config from '../conf/config';
// 储存模块
class save {
    public client
    constructor() {
        this.client = new Redis(config.redis.url);
        this.client.on('error', (err:any) => console.log('Redis Client Error', err));
    }
    /**
     * 
     * @param value 代理ip{string}
     * @param score 分数(默认为10){number}
     * @returns boolean
     * 储存方法
    首次储存的时候分数为10
    首次测试成功增加分数至100,或测试出现问题的扣分的方法
     */
    async saveIp(value: string, score: number = 10): Promise<boolean> {
        try {
            if (score<0) {
               const originscore = await this.returnScore(value);
               console.log(originscore+score);
                await this.client.zadd("key", originscore+score, value)
            }else{
            await this.client.zadd("key", score, value)
            }
            return true;
        } catch (err) {
            return false;
        }
    }
    /**
     * 
     * @returns Number(score)
     */
    async returnScore(value:string) :Promise<number>{
      const score =  await this.client.zscore("key",value);
      return Number(score)

    }
    // 获取全部代理方法
    async fetchIp(): Promise<string[]> {
        const re =await this.client.zrange("key",0,-1);
        return re;
    }
    }

export default save;