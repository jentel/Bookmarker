import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { Observable } from 'rxjs';

@Injectable()
export class AuthService {
  private user: Observable<firebase.User>;
  private userDetails: firebase.User = null;

  constructor(private fbAuth: AngularFireAuth, private router: Router) { 

    this.user = fbAuth.authState;

    this.user.subscribe(
      (user) => {
        if(user) {
          this.userDetails = user;
          console.log(this.userDetails);
        }
        else {
          this.userDetails = null;
        }
      }
    )
  }

  signInWithGoogle() {
    return this.fbAuth.auth.signInWithPopup (
      new firebase.auth.GoogleAuthProvider()
    )
  }

  signInRegular(email, password) {
    const credential = firebase.auth.EmailAuthProvider.credential(email, password);
    return this.fbAuth.auth.signInWithEmailAndPassword(email, password);
  }

  isLoggedIn() {
    if(this.userDetails == null) {
      return false;
    }
    else {
      return true;
    }
  }

  // get currentUserObservable(): any {
  //   return this.fbAuth.auth;
  // }

  logout() {
    this.fbAuth.auth.signOut().then((res) => this.router.navigate(['/']));
  }
}
