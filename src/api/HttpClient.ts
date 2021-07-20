import axios, { AxiosInstance } from 'axios'

// TODO update baseUrl
const httpClient: AxiosInstance = axios.create({
    baseURL: "http://localhost:9000/"
})
export default httpClient
