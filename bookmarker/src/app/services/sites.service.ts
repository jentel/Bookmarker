import { Injectable } from '@angular/core';
// import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';
import { AngularFireDatabase, AngularFireList, AngularFireObject } from "angularfire2/database"; 
import { Observable } from 'rxjs';
import { AlertsService } from 'angular-alert-module';

import { pipe, Subscription } from 'rxjs';
import { map, first, switchMap } from 'rxjs/operators';

@Injectable()
export class SitesService {

  private basePath = '/sites';
  // public items: any;
  // public item: any;

  items: AngularFireList<Bookmark[]> = null; //  list of objects
  item: AngularFireObject<Bookmark> = null; //   single object
  constructor(private db: AngularFireDatabase, private alertservice: AlertsService) { }

  addSite(data): void {
    const obj = this.db.database.ref(this.basePath);
    obj.push(data);
    console.log('Success');
    this.alertservice.setMessage('Configurations saved successfully!','success');
  }

  getSites(path): Observable<any[]> {
    return this.db.list(path).valueChanges();
  }

  getThing(path) {
    return this.db.list<Bookmark>('sites').valueChanges().pipe(first()).subscribe(d => {
      console.log('data streaming');
    })
  }

  

  getWork() {
    var valToDisplay;
   var x = this.db.list<Bookmark>('sites').valueChanges().subscribe((res: Bookmark[]) => {
      console.log(res);
      // res.forEach((item) => {
      //   console.log(item.name);
      // });
      valToDisplay = res;
    });
    return valToDisplay;
  }

  getItems(): AngularFireList<Bookmark[]> {
    this.items = this.db.list(this.basePath);
    
    return this.items;
  }

  // editSite(key: string, value: any): void {
  //   const obj = this.db.database.ref(this.basePath)
  //   obj.update(key, value).catch(error => this.handleError(error));
  //   console.log('Updated Successfully!');
  //   this.alertservice.setMessage('Configurations saved successfully!','success');
  // }

  private handleError(error) {
    console.log(error);
    this.alertservice.setMessage('Something went wrong!', 'error');
  }

  // ngOnDestroy(): void {
  //   this.db.list
  // }
}

export class Bookmark {
  name: string;
  url: string;
  tags: string[];
}