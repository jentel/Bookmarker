import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs';

@Injectable()
export class SitesService {

  private basePath = '/sites';
  public items: any;
  public item: any;
  constructor(private db: AngularFireDatabase) { }

  addSite(data): void {
    const obj = this.db.database.ref(this.basePath);
    obj.push(data);
    console.log('Success');
  }

  getSites(path): Observable<any[]> {
    return this.db.list(path).valueChanges();
  }

  editSite(key: string, value: any): void {
    const obj = this.db.database.ref(this.basePath)
    obj.update(key, value).catch(error => this.handleError(error));
    console.log('Updated Successfully!');
  }

  private handleError(error) {
    console.log(error);
  }
}