import {Component, Injectable, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {FlickrApiService} from '../flickr-api.service';
import {Photos} from '../model/photos';
import {ActivatedRoute} from '@angular/router';
import {LoaderService} from '../../shared/services/loader/loader.service';

@Component({
  selector: 'app-photos.search',
  templateUrl: './photos.search.component.html',
  styleUrls: ['./photos.search.component.scss']
})

@Injectable()

export class PhotosSearchComponent implements OnInit {
  public photos: Photos = new Photos()
  public page = 0;
  public isCardView = false;
  public titleTotal = null;
  public sortOptions: any = [
    {
      viewValue: 'Date Posted Ascending',
      value: 'date-posted-asc'
    },
    {
      viewValue: 'Date Posted Descending',
      value: 'date-posted-desc'
    },
    {
      viewValue: 'Date Taken Ascending ',
      value: 'date-taken-asc'
    },
    {
      viewValue: 'Date Taken Descending',
      value: 'date-taken-desc'
    }
  ]
  searchParams: any;

  constructor(private formBuilder: FormBuilder,
              private flickrService: FlickrApiService,
              private loaderService: LoaderService,
              private activatedRoute: ActivatedRoute) {}
  ngOnInit() {
    this.activatedRoute.queryParams
      .subscribe(params => {
        this.searchParams = params;
        this.photos = new Photos();
        this.page = 0;
        window.scrollTo(0, 0);
        this.search(params, this.page);
      });
  }
  public search(params, page = 0) {
    this.flickrService.getResult(params.text, page).subscribe((data) => {
      this.photos.total = data.photos.total;
      this.photos.pages = data.photos.pages;
      this.photos.perpage = data.photos.perpage;
      this.photos.page = data.photos.page;
      this.titleTotal  = `${this.photos.total} photos`;
      this.photos.photo = this.photos.photo.concat(data.photos.photo);
    });
  }
  public onScrollDown() {
    this.search(this.searchParams, ++this.page);
  }

}
