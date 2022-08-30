
import axios, { AxiosError, AxiosInstance } from 'axios'
import save from '../save/saveIp';
// 检测模块
class testIp {
    private saveProxy: save;
    constructor() {
        this.saveProxy = new save();
    }
    // 使用ip进行检测
    async useIp(ip: string) {
        const ipadd: string = ip.split(':')[0]
        const prot: number = Number(ip.split(':')[1])
        const request: AxiosInstance = axios.create({
            proxy: {
                host: ipadd,
                port: prot,
                protocol: 'http'
            },
            timeout: 5000,
        })
        try {
            // console.log("正在使用的ip是:" + ipadd);
            const res = await request.get('http://myip.ipip.net/')
            if (res.status === 200) {
                console.log("检测使用的ip为" + res.data)
                this.saveProxy.saveIp(ip, 100);
            }
            else {
                console.log("检测使用的ip为:"+ip+'失败')
                this.saveProxy.saveIp(ip, -10);
            }
            ;
            // return true
            return
        } catch (error) {
            if (error instanceof AxiosError){
                console.log("检测使用的ip为:"+ip+'失败'+error.message)
                this.saveProxy.saveIp(ip, -10);
    
            }
            // console.log(error.code);
            
            // return false
        }
    }
    async run() {
        const res = await this.saveProxy.fetchIp();
        console.log(res);
        let promiseArr: any[] = [];
        for await (const item of res ?? []) {
            promiseArr.push(this.useIp(item));
        }
        await Promise.all(promiseArr);
    }
}

export default testIp;