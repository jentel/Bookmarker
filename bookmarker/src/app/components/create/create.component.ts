import { Component, OnInit } from '@angular/core';
import { SitesService } from '../../services/sites.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AlertsService } from 'angular-alert-module';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  angForm: FormGroup;
  constructor(private sitesservice: SitesService, 
              private fb: FormBuilder, 
              private alertservice: AlertsService) { 
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
    this.alertservice.setMessage('Configurations saved successfully!','success');
  }

  ngOnInit() {
  }
}