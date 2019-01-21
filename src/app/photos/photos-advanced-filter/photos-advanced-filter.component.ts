import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {COMMA, ENTER} from '@angular/cdk/keycodes';
import {MatAutocomplete, MatAutocompleteSelectedEvent, MatChipInputEvent} from '@angular/material';
import {FormControl} from "@angular/forms";

@Component({
  selector: 'app-photos-advanced-filter',
  templateUrl: './photos-advanced-filter.component.html',
  styleUrls: ['./photos-advanced-filter.component.scss']
})
export class PhotosAdvancedFilterComponent implements OnInit {

  @ViewChild('tagsInput') tagsInput: ElementRef<HTMLInputElement>;
  @ViewChild('tagsSourceAuto') tagsSourceAuto: MatAutocomplete;

  constructor() { }

  ngOnInit() {}
  selectable = true;
  removable = true;
  addOnBlur = true;
  readonly separatorKeysCodes: number[] = [ENTER, COMMA];
  tags: any[] = [];
  tagsControl= new FormControl();
  tagsMode: any[] = [
    {value: 'AND', viewValue: 'And'},
    {value: 'OR', viewValue: 'Or'},
  ];
  addTag(event: MatChipInputEvent): void {
    const input = event.input;
    const value = event.value;

    // Add our fruit
    if ((value || '').trim()) {
      this.tags.push({name: value.trim()});
    }

    // Reset the input value
    if (input) {
      input.value = '';
    }
  }

  removeTag(tag: any): void {
    const index = this.tags.indexOf(tag);

    if (index >= 0) {
      this.tags.splice(index, 1);
    }
  }

}
