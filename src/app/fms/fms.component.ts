import { Component, OnInit } from '@angular/core';
import { FmsService } from '../services/fms.service';
import { User } from '../model/User';
import { TokenResponse } from '../model/TokenResponse';
import { HttpClient, HttpClientModule, HttpHandler } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-fms',
  standalone: true,
  imports: [HttpClientModule,FormsModule],
  providers:[HttpClient,FmsService,FormsModule],
  templateUrl: './fms.component.html',
  styleUrl: './fms.component.css'
})
export class FmsComponent implements OnInit{


  year1!:number;
  year!:number;
  drawMatches!:Number;
  totalMatches!:Number;
  token!:string;

  constructor(private service:FmsService){
     //Authentication by default in constructor
    const user:User={
      username:"admin",
      password:"admin"
    };
    this.service.generateToken(user).subscribe((res:TokenResponse)=>{
      this.token=res.jwtToken;
  });
  }
  ngOnInit(): void {
   
  }
  getDrawMatches(){
    debugger;
      this.service.getNoOfDrawMatchesByYear(this.year1,this.token).subscribe(
        (data)=>{
          this.drawMatches=data;
          console.log("drawMatches--"+this.drawMatches)
        },
        (error)=>{
          console.error("An error occurred:", error);
        }
      );
  }

  getNoOfMatchesByYear(){
    debugger;
    this.service.getNoOfMatchesByYear(this.year,this.token).subscribe(
      data=>{
        this.totalMatches=data;
        console.log("totalMatch--"+this.totalMatches)
      },
      (error)=>{
        console.error("An error occurred:", error);
      }
    );
  }
}
