import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../model/User';
import { TokenResponse } from '../model/TokenResponse';

@Injectable({
  providedIn: 'root'
})
export class FmsService {

  constructor(private http: HttpClient) { }

  url:string="http://localhost:7888/matches/";

  hostUrl:string="http://localhost:7888/";



  //when we try to login then pass the username and password
  generateToken(user:User):Observable<TokenResponse>{
    const options = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
      return this.http.post<TokenResponse>(this.hostUrl+'auth/login',user,options)
  }


  getNoOfDrawMatchesByYear(year:number,token:String): Observable<Number> {
    const headers = new HttpHeaders()
    .set("Authorization","Bearer "+token.toString())
    .set("Content-Type","application/json");
    debugger;
    return this.http.get<Number>(`${this.url}drawmatches/${year}`,{headers});
  }


  getNoOfMatchesByYear(year:number,token:String): Observable<Number> {
    const headers = new HttpHeaders()
    .set("Authorization","Bearer "+token.toString())
    .set("Content-Type","application/json");
    return this.http.get<Number>(`${this.url}totalmatches/${year}`,{headers});
  }


}
