import { Component, OnInit } from '@angular/core';
import { RegularService} from '../regular.service';
@Component({
  selector: 'app-regular',
  templateUrl: './regular.component.html',
  styleUrls: ['./regular.component.css']
})
export class RegularComponent implements OnInit {

  constructor( private _regularService:RegularService) { }

  ngOnInit() {
    this._regularService.getRegular()
      .subscribe(
        res=>this.regulars=res,
        err =>console.log(err)
      
    )
  }
regulars=[];

}
