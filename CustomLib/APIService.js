export default class APIService {
  constructor(url,endPoint,data,header,method){
    this.url = url
    this.endPoint = endPoint
    this.data = data
    this.header = header
    this.method = method
  }
  fetch = () =>{
    return fetch(this.url+this.endPoint,{
      method: this.method,
      headers : this.header,
      body : JSON.stringify(this.data)
    }).catch((err)=>{
      console.log(err,'error');
    });
  }
}