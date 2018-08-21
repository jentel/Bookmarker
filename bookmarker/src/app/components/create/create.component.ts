import { Component, OnInit } from '@angular/core';
import { SitesService } from '../../services/sites.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatChipInputEvent } from '@angular/material';
import {COMMA, ENTER} from '@angular/cdk/keycodes';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  visible = true;
  selectable = true;
  removable = true;
  addOnBlur = true;
  readonly separatorKeysCodes: number[] = [ENTER, COMMA];
  tags: Tag[] = [];
  angForm: FormGroup;

  constructor(private sitesservice: SitesService, 
              private fb: FormBuilder) { 
    this.createForm();
  }

  createForm() {
    this.angForm = this.fb.group({
      name: ['', Validators.required],
      url: ['', Validators.required],
      tags: [this.tags]
    });
  }

  addSite(name, url) {
    const dataObj = {
      name: name,
      url: url,
      tags: this.tags
    };
    this.sitesservice.addSite(dataObj);
    this.tags=[];
  }

  addTags(event: MatChipInputEvent): void {
    const input = event.input;
    const value = event.value;

    // Add our tags
    if ((value || '').trim()) {
      this.tags.push({name: value.trim()});
    }

    // Reset the input value
    if (input) {
      input.value = '';
    }
  }

  removeTag(tag: Tag): void {
    const index = this.tags.indexOf(tag);

    if (index >= 0) {
      this.tags.splice(index, 1);
    }
  }

  ngOnInit() {
  }
}

export interface Tag {
  name: string;
}