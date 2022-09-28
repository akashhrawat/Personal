import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { HttpClientModule } from '@angular/common/http';
import { ShowdataComponent } from './showdata/showdata.component';
import { UpdateUserComponent } from './update-user/update-user.component';
import { DeleteComponentComponent } from './delete-component/delete-component.component';


@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    ShowdataComponent,
    UpdateUserComponent,
    DeleteComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
