import { Component, OnInit } from '@angular/core';
import { DataserviceService } from '../dataservice.service';
import { Register } from '../registration/registration.model';
@Component({
  selector: 'app-showdetails',
  templateUrl: './showdetails.component.html',
  styleUrls: ['./showdetails.component.css']
})
export class ShowdetailsComponent implements OnInit {

  constructor(private pass:DataserviceService) { }

  ngOnInit(): void {
    this.showdata()
  }
  data:any
  showdata(){
    this.pass.getdata().subscribe(res=>{
      this.data=res
      console.log(this.data)
  
    })
  
  }
  delete(i:any){
    this.pass.deletedata(i).subscribe(result=>{
      this.showdata()
  
    })
  }
  public show:boolean=false;
  public buttonName:any='Show';
  upd=new Register()
  updt(){
    console.log("check")
    this.pass.update(this.upd).subscribe(result=>{
    console.log(result)
    this.showdata()
    alert(result)
    window.location.reload();
    
  })
 }



 dt:any
 updatedata(asd:any){
  this.show = !this.show;

  this.pass.getdata().subscribe(res=>{
        this.dt=res;
        for (var i = 0; i < this.dt.length; i++) {
          if (this.dt[i].id == asd) {
            this.upd=this.dt[i]
            console.log("upd",this.upd)
        }
      }
 
    })

}

}
