import { Component, OnInit } from '@angular/core';
import { SitesService } from '../../services/sites.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AlertService } from '../../services/alert.service';
import { AlertComponent } from '../alert/alert.component';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  alertForm: AlertComponent;
  angForm: FormGroup;
  constructor(private sitesservice: SitesService, private fb: FormBuilder, private alertservice: AlertService) { 
    this.createForm();
  }

  createForm() {
    this.angForm = this.fb.group({
      name: ['', Validators.required],
      url: ['', Validators.required],
      //tags: ['', Validators.required]
    });
  }

  addSite(name, url) {
    const dataObj = {
      name: name,
      url: url,
      //tags: tags
    };
    this.sitesservice.addSite(dataObj);
    this.alertservice.success("Successfully to the DB!", false);
  }

  ngOnInit() {
  }
}
