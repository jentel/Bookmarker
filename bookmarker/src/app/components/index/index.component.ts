import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { SitesService } from '../../services/sites.service';
import { FileDatabaseService } from '../../services/file-database.service';
import { FileNode } from '../../datafiles/file-node';
import { NestedTreeControl } from '@angular/cdk/tree';
import { MatTreeNestedDataSource } from '@angular/material/tree';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css'],
  providers: [FileDatabaseService]
})
export class IndexComponent implements OnInit {

  nestedTreeControl: NestedTreeControl<FileNode>;
  nestedDataSource: MatTreeNestedDataSource<FileNode>;

  constructor(database: FileDatabaseService) {
    this.nestedTreeControl = new NestedTreeControl<FileNode>(this._getChildren);
    this.nestedDataSource = new MatTreeNestedDataSource();

    database.dataChange.subscribe(data => this.nestedDataSource.data = data);
  }

  hasNestedChild = (_: number, nodeData: FileNode) => !nodeData.type;

  private _getChildren = (node: FileNode) => node.children;

  ngOnInit() {}

  // public sites: any;
  // constructor(private sitesservice: SitesService) { }

  // ngOnInit() {
  //   this.sites = this.getSites('/sites');
  // }
  
  // getSites(path) {
  //   return this.sitesservice.getSites(path);
  // }

  // getConsole(site) {
  //   console.log(site)
  // }
}