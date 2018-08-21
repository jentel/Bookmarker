import { BehaviorSubject, Observable } from "rxjs";
import { Injectable } from "@angular/core";
import { FileNode } from "../datafiles/file-node";
import { SitesService } from "./sites.service";


@Injectable()
export class FileDatabase {
  dataChange = new BehaviorSubject<FileNode[]>([]);
  //sites: FileNode[];


siteObserve:Observable<any[]>;
siteList:FileNode[];


  get data(): FileNode[] { return this.dataChange.value; }

  constructor(private sitesservice: SitesService) {
    this.initialize();

    this.siteObserve = this.getSites('/sites');
    this.siteObserve.subscribe(data => {
      this.siteList = data;
    });
  }

  initialize() {

   //var x = this.getFilteredList(); //.subscribe((posts) => { this.sites = posts });
    

    const dataObject = JSON.parse(TREE_JSON_Data);//this.sites;

    // Parse the string to json object.
    //const dataObject = this.getSites('/sites');

    // Build the tree nodes from Json object. The result is a list of `FileNode` with nested
    //     file node as children.
    const data = this.buildFileTree(dataObject, 0);

    // Notify the change.
    this.dataChange.next(data);

    
  }

  // getFilteredList()
  // {
  //   return this.sitesservice.getFilteredList();
  // }

  getSites(path) {
    return this.sitesservice.getSites(path);
  }

  /**
   * Build the file structure tree. The `value` is the Json object, or a sub-tree of a Json object.
   * The return value is the list of `FileNode`.
   */
  buildFileTree(obj: object, level: number): FileNode[] {
    return Object.keys(obj).reduce<FileNode[]>((accumulator, key) => {
      const value = obj[key];
      const node = new FileNode();
      node.filename = key;

      if (value != null) {
        if (typeof value === 'object') {
          node.children = this.buildFileTree(value, level + 1);
        } else {
          node.type = value;
        }
      }

      return accumulator.concat(node);
    }, []);
  }
}


const TREE_DATA = JSON.stringify({
  Applications: {
    Calendar: 'app',
    Chrome: 'app',
    Webstorm: 'app'
  },
  Documents: {
    angular: {
      src: {
        compiler: 'ts',
        core: 'ts'
      }
    },
    material2: {
      src: {
        button: 'ts',
        checkbox: 'ts',
        input: 'ts'
      }
    }
  },
  Downloads: {
    October: 'pdf',
    November: 'pdf',
    Tutorial: 'html'
  },
  Pictures: {
    'Photo Booth Library': {
      Contents: 'dir',
      Pictures: 'dir'
    },
    Sun: 'png',
    Woods: 'jpg'
  }
});

const TREE_JSON_Data = JSON.stringify({
    sites : {
      LIvWz6QiK8Ah7u6g9Zv : {
        name : "asdf",
        url : "asdf"
      },
      LIvX79qUcrd5xemaBYW : {
        name : "asdf",
        url : "adsf"
      },
      LIvylZom6Y68DEHxcdX : {
        name : "asdf",
        tags : [ {
          name : "asdf"
        }, {
          name : "asdf"
        }, {
          name : "asf"
        } ],
        url : "asdf"
      },
      LIvz4tO9xyu5DgCNUTa : {
        name : "asdf",
        tags : [ {
          name : "asdf"
        }, {
          name : "asdf"
        }, {
          name : "asdf"
        }, {
          name : "adf"
        } ],
        url : "asdf"
      },
      LIwDvQA6FbBszw2BZWX : {
        name : "test",
        url : "asdf"
      },
      LIwY6jXKqzHSAGmbubD : {
        name : "Test",
        tags : [ {
          name : "google"
        }, {
          name : "site"
        } ],
        url : "www.google.com"
      },
      LK3MnS861OfjlC6ZJEl : {
        name : "test1 of many",
        tags : [ {
          name : "google"
        } ],
        url : "www.google.com"
      }
    }
});

