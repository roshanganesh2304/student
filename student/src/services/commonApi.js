import axios  from 'axios'


const commonApi = (reqMethod, url, reqBody)=>{
    const config={
        url: url,
        method: reqMethod,
        data: reqBody,
        header: {"Content-Type":"application/json"}
    }
    return axios(config)
}
export default commonApi