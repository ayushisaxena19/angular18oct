  
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';


@Component({
  selector: 'app-covid',
  templateUrl: './covid.component.html',
  styleUrls: ['./covid.component.css']
})
export class CovidComponent implements OnInit {
  

  constructor(private Auth : AuthService) { }

  data:any;
  ngOnInit(): void {
    this.Auth.getData().subscribe((result)=>{
      this.data=result;
    });
  }
}
