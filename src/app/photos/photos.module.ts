import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {PhotosSearchComponent} from './photos.search/photos.search.component';
import {PhotoDetailsComponent} from './photo.details/photo.details.component';
import { PhotosAdvancedFilterComponent } from './photos-advanced-filter/photos-advanced-filter.component';
import {SharedComponentsModule} from '../shared/components/shared-components.module';
import {FlickrApiService} from './flickr-api.service';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {FlexLayoutModule} from '@angular/flex-layout';
import { GetImageDimensionsPipePipe } from './pipes/get-image-dimensions-pipe.pipe';
import {AngularFontAwesomeModule} from 'angular-font-awesome';

@NgModule({
  imports: [
    CommonModule,
    SharedComponentsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    FlexLayoutModule,
    AngularFontAwesomeModule
  ],
  declarations: [PhotosSearchComponent, PhotoDetailsComponent, PhotosAdvancedFilterComponent, GetImageDimensionsPipePipe],
  providers : [FlickrApiService]
})
export class PhotosModule { }
