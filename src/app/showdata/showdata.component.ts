import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { RegService } from '../reg.service';
import { User } from '../user';

@Component({
  selector: 'app-showdata',
  templateUrl: './showdata.component.html',
  styleUrls: ['./showdata.component.css']
})
export class ShowdataComponent implements OnInit {
  userData: User[]=[];
// userData!: Observable<User>;
  constructor(private regService: RegService,private _router: Router) { }
 // user : User=new User();
  ngOnInit(): void {
    //this.userData=this.regService.getUsers();
    this.regService.getUsers().subscribe(data=>{
        console.log(data);
        this.userData=data;
    });
  }

  deleteUser(id: number){
    this.regService.deleteUserById(id).subscribe({
      next:data=>{console.log(data);  
      this.regService.getUsers().subscribe(data=>{
          this.userData=data;
        });           
      },
      error:error=>{console.log("error occured please check: ");
      }
    });
  }

  updateUser(id: number){
      this._router.navigate([`/update/${id}`]);    
  }

  deleteAllUser(){
    this.regService.deleteAllUser();
  }
}
