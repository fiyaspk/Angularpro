import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class DataserviceService {

  constructor(private client:HttpClient) { }
  datainsert(data:any){
    console.log(data)
    return this.client.post('https://cybersquare.herokuapp.com/user/',data)
    


  }
  getdata(){
    return this.client.get('https://cybersquare.herokuapp.com/user/')

  }
  deletedata(id:any){
    return this.client.delete('https://cybersquare.herokuapp.com/user/'+id)
      
  }
  update(data:any){
    console.log(data)
    return this.client.put('https://cybersquare.herokuapp.com/user/',data) 
}
}
