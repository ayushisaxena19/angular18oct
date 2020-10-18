import { Component, OnInit } from '@angular/core';
import { RegularService} from '../regular.service';
import { Router} from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
@Component({
  selector: 'app-special',
  templateUrl: './special.component.html',
  styleUrls: ['./special.component.css']
})
export class SpecialComponent implements OnInit {
specials=[];
  constructor( private _regularService:RegularService,
    private _router:Router) { }

  ngOnInit(){
    this._regularService.getSpecial()
    .subscribe(
      res =>this.specials=res,
      err=>{
        if (err instanceof HttpErrorResponse){
          if (err.status ===401){
            this._router.navigate(['/login'])

          }
        }
      }
    )
  }

}
