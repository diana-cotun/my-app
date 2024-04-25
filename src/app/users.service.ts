import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import User from './types/User';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import LoginRequest from './types/LoginRequest';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private url = "http://localhost:8080/users";
  private itemObservable = new BehaviorSubject<Array<User>>([])


  constructor(private http: HttpClient) { }

  //promise - iti promit ca iti intorc niste date in scurt timp
  //observable

  // public read() {
  //   return this.http.get<User[]>(this.url).subscribe((response: any) => {
  //     this.itemObservable.next(response.data);
  //     console.log("a fost apelata metoda");
  //   });
  // }

  public getUsers() {
    return this.http.get<User[]>(this.url);
  }
  public deleteUser(id: number) {
    let textid = id.toString();
    return this.http.delete<User>(this.url + "/" + textid);
  }

  public login(loginRequest: LoginRequest) {
    return this.http.post<LoginRequest>(this.url + "/login", loginRequest);
  }





}
