import JSONP from 'jsonp'
export default class Axios{
  static jsonp(options){
    return new Promise((resolve,reject)=>{
      /**
       * 用Promise封装一个jsonp方法来调用外域接口
       */
      JSONP(options.url,{
        param:'callback'
      },function(err,response) {
        //to do
        if(response.status ==='success'){
          resolve(response)
        }else{
          reject(response)
        }
      })
    })
  }
}