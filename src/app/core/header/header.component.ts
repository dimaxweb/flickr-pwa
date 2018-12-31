import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public searchForm: FormGroup;
  constructor(private formBuilder: FormBuilder,  private router: Router) {
    this.searchForm = this.formBuilder.group({
      searchControl : ''
    });
  }

  ngOnInit() {}

  submit() {
    let searchOptions = {text:  this.searchForm.get('searchControl').value};
    this.router.navigate([`photos`], { queryParams: searchOptions } );
  }
}
