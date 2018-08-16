import { Injectable } from '@angular/core';

import { AuthService } from './auth.service';
import { Router, CanActivate } from '@angular/router';
import {ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable()
export class AuthGuardService implements CanActivate {

  constructor(private router: Router, private authService: AuthService) { }
  
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | boolean {
      if (this.authService.isLoggedIn()) { return true; }

      // return this.authService.currentUserObservable
      //      .take(1)
      //      .map(user => !!user)
      //      .do(loggedIn => {
      //        if (!loggedIn) {
      //          console.log("access denied")
      //          this.router.navigate(['/']);
      //        }
      //    });
    if ( this.authService.isLoggedIn() ) {
        return true;
    }
    this.router.navigate(['/login']);
    return false;
  }
}