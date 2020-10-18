import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class RegularService {
private _regularUrl="";
private _specialUrl="https://coronavirus-19-api.herokuapp.com/countries";
  constructor( private http:HttpClient) { }
  getRegular(){
    return this.http.get<any>(this._regularUrl)
  }
  getSpecial(){
    return this.http.get<any>(this._specialUrl)
  }
}
