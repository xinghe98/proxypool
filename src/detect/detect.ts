
import axios, { AxiosError } from 'axios'

class testIp {

    async useIp(ip: string) {
        const ipadd:string = ip.split(':')[0]
        const prot:number = Number(ip.split(':')[1])
        
        const request = axios.create({
            proxy:{
                host:ipadd,
                port:prot,
                protocol:'http'
            },
            headers:{'accept':'text/plain'},
            timeout:5000,
        })
        try {
            console.log("正在使用的ip是:" + ipadd); 
            const res = await request.get('http://icanhazip.com/')
            console.log("检测使用的ip为" + res.data);
            return true
        } catch (error:any) {
            console.log(error.config.proxy);
            return false
        }
    }
}

export default testIp;