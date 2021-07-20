import { Component, OnInit } from '@angular/core';
import { Register } from './registration.model';
import {DataserviceService} from '../dataservice.service'

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  constructor(private serve:DataserviceService) { }

  ngOnInit(): void {
  }
  res=new Register()
  msg:any
  insertdata(){
    this.serve.datainsert(this.res).subscribe(result=>{
    this.msg=result
    })
  
  
  }
}
