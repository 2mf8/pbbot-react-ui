import httpClient from "./HttpClient";
import { AxiosRequestConfig } from "axios";
import { Message, Method, rpc, RPCImpl, RPCImplCallback, util } from "protobufjs";
import { urls } from "./urls";
import { dto } from "./gen/proto";


export const protobufAxiosConfig: AxiosRequestConfig = {
    method: 'post',
    headers: {
        'Content-Type': 'application/x-protobuf',
        'X-Requested-With': 'XMLHttpRequest',
    },
    responseType: "arraybuffer"
}

// 基于 HTTP 实现的 RPC
export const rpcImpl: RPCImpl = (method: (Method | rpc.ServiceMethod<Message<{}>, Message<{}>>), requestData: Uint8Array, callback: RPCImplCallback) => {
    // TODO 想办法获取 URL path，有没有更好地办法？
    let url = urls[method.name]
    httpClient.post(url, util.newBuffer(Array.from(requestData)), protobufAxiosConfig).then((res) => {
        let numberArray: number[] = res.data
        callback(null, util.newBuffer(numberArray))
    }).catch(reason => {
        console.log(reason)
        callback(reason, null)
    })
}

export const service = dto.HttpService.create(rpcImpl)
