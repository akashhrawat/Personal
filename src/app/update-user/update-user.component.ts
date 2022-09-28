import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RegService } from '../reg.service';
import { User } from '../user';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent implements OnInit {
  user!: User;
  id!: number;
  msg: string='';
  constructor(private regService: RegService,private _router: Router,private route: ActivatedRoute) { }

  ngOnInit(): void {
      this.user=new User();
      this.id=this.route.snapshot.params['id'];
      this.regService.getUserById(this.id).subscribe(
        {
          next:data=>{this.user=data;},
          error:error=>{console.log(error);}
        }
      );
  }
  onSubmit(){
     this.regService.updateUser(this.id,this.user).subscribe(
      {
        next:data=>{console.log("received data "+data); 
        this.user=new User();
        this._router.navigate(['/show']);            
       },
error:error=>{console.log("error occured please check: ");
           this.msg="Bad Credentials Please try again";
         }
      }
     );
  }
}
