import axios from "axios";

const instance = axios.create({
  
})

// 请求拦截
// 所有的网络请求都会先走这个方法，我们可以在它里面添加一些自定义内容
instance.interceptors.request.use(function (config) {
    // config.headers.token = ;
    config.headers.Authorization = 'Bearer ' +localStorage.getItem("token");
    return config;
}, function (err) {
    return Promise.reject(err);
});

// 响应拦截
// 所有的网络请求返回数据之后都会先执行此方法
// 此处可以根据服务器的返回状态码作相应的数据 404 401 500
instance.interceptors.response.use(function (response) {
 
    return response.data;
}, function (err) {
    return Promise.reject(err);
});


export function get(url, params) {
    return instance.get(url, { params });

}

export function post(url, data) {
    return instance.post(url, data);
}

export function del(url, data) {
    return instance.delete(url, data);
}

export function put(url, data) {
    return instance.put(url, data)
}

