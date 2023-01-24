import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { IUser } from './interface/user.interface';

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  private loggedIn = new BehaviorSubject<boolean>(false);

  get isLoggedIn() {
    return this.loggedIn.asObservable();
  }

  constructor(private _router: Router) { }

  login(user: IUser) {
    if (user.login !== '' && user.password !== '') {
      this.loggedIn.next(true);
      this._router.navigate(['/']);
    }
  }

  logout() {
    this.loggedIn.next(false);
    this._router.navigate(['/login']);
  }
}
