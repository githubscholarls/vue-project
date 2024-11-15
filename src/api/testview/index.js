import request from '@/utils/request'


export function getViewTestList(){
    return request({
        url:'/viewTest/wshilist',
        method:'get'
    });
}