import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less']
})
export class HeaderComponent implements OnInit {
  isLoggedIn$?: Observable<boolean>

  constructor(private _authService: AuthService) { }

  ngOnInit() {
    this.isLoggedIn$ = this._authService.isLoggedIn;
  }

}
