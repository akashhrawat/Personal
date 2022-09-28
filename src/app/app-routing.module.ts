import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DeleteComponentComponent } from './delete-component/delete-component.component';
import { RegisterComponent } from './register/register.component';
import { ShowdataComponent } from './showdata/showdata.component';
import { UpdateUserComponent } from './update-user/update-user.component';

const routes: Routes = [
  {path:'add',
   component:RegisterComponent
  },
  {
    path:'show',
    component:ShowdataComponent
  },
  {
    path:'update/:id',
    component:UpdateUserComponent
  },
  {
    path:'delete',
    component:DeleteComponentComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
