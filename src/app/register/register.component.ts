import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { RegService } from '../reg.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  user: User= new User();
  submitted=false;
  constructor(private regService: RegService,private _router: Router) { }
  msg: string="";
  ngOnInit(): void {
  }
  register(){
    this.submitted=true;
    console.log(this.user);
    this.regService.registerUserService(this.user).subscribe({
      next:data=>{console.log("recieved data "+data);
                 // alert("Registration Completed!");             
                },
      error:error=>{console.log("error occured please check: ");
                    this.msg="Bad Credentials Please try again";
                  }
  });
  this.user=new User();
  this.showdata();
  }

  showdata(){
    this._router.navigate(['/show']); 
  }
}
