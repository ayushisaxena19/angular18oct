import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private _registerUrl ="https://ionic-server-app.herokuapp.com/trainee/register";

  private _loginUrl ="https://ionic-server-app.herokuapp.com/trainee/login";
  private _covidUrl = "https://coronavirus-19-api.herokuapp.com/countries";
  constructor( private http: HttpClient ) { }
  registerUser(user){
    return this.http.post<any>(this._registerUrl,user)
  }
  loginUser(user){
    return this.http.post<any>(this._loginUrl,user)
  }
  loggedIn(){
    return !!localStorage.getItem ;{'token'};
  }
  getToken(){
    return localStorage.getItem('token')
  }
}
