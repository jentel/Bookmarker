import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs';
import { AlertsService } from 'angular-alert-module';
import { FileNode } from '../datafiles/file-node';


@Injectable()
export class SitesService {

  private basePath = '/sites';
  public items: any;
  public item: any;
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

  // getFilteredList(){

  //   var sites = this.db.list<FileNode>(this.basePath).valueChanges();
  //   // sites.subscribe(data => {
  //   //   this.siteList = data;
  //   // })

  //   var test = this.db.list(this.basePath).snapshotChanges(
  //               map((changes) => {

  //               }))

  //   return ;
  // }

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
}
