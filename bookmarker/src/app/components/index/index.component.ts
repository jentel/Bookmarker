import { Component, OnInit } from '@angular/core';
import {NestedTreeControl} from '@angular/cdk/tree';
import {MatTreeNestedDataSource} from '@angular/material/tree';
import { FileNode } from '../../datafiles/file-node';
import { FileDatabase } from '../../services/file-database.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css'],
  providers: [FileDatabase]
})
export class IndexComponent implements OnInit {

  // public sites: any;
  // nestedTreeControl: NestedTreeControl<any>;
  // nestedDataSource: MatTreeNestedDataSource<any>;

  // constructor(private sitesservice: SitesService) { 
  //   //this.nestedDataSource = new NestedTreeControl<any>(this.sites);
  //   this.nestedDataSource = new MatTreeNestedDataSource();
  // }

  ngOnInit() {
    //this.sites = this.getSites('/sites');
  }
  
  // getSites(path) {
  //   return this.sitesservice.getSites(path);
  // }

  nestedTreeControl: NestedTreeControl<FileNode>;
  nestedDataSource: MatTreeNestedDataSource<FileNode>;

  constructor(database: FileDatabase) {
    this.nestedTreeControl = new NestedTreeControl<FileNode>(this._getChildren);
    this.nestedDataSource = new MatTreeNestedDataSource();

    database.dataChange.subscribe(data => this.nestedDataSource.data = data);
  }

  hasNestedChild = (_: number, nodeData: FileNode) => !nodeData.type;

  private _getChildren = (node: FileNode) => node.children;
}