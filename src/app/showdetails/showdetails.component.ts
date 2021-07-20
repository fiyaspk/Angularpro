import { Component, OnInit } from '@angular/core';
import { DataserviceService } from '../dataservice.service';

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


}
