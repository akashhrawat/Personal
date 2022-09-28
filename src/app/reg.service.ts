import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class RegService {
  url='http://localhost:8090/';
  constructor(private hc: HttpClient) { }

  registerUserService(user: User):Observable<any>{
      return this.hc.post<any>('http://localhost:8090/register',user);
  }

  getUsers(): Observable<any>{
      return this.hc.get<any>(this.url+'userall');
  }

  getUserById(id : number): Observable<any>{
    return this.hc.get(this.url+'user/'+id);
  }

  updateUser(id: number, user:User): Observable<any>{
    return this.hc.put(this.url+'updateuser/'+user.id,user);
  }

  deleteUserById(id: number): Observable<any>{
    return this.hc.delete(this.url+'user/delete/'+id);
  }

  deleteAllUser(): Observable<any>{
    return this.hc.delete(this.url+'user/deleteall');
  }
}
