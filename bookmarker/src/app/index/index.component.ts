import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { SitesService } from '../sites.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  public sites: Observable<any[]>;
  constructor(private sitesservice: SitesService) { }

  ngOnInit() {
    this.sites = this.getSites('/sites');
  }
  getSites(path) {
    return this.sitesservice.getSites(path);
  }
}
