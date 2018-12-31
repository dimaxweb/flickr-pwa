import { Pipe, PipeTransform } from '@angular/core';
import {ObservableMedia} from '@angular/flex-layout';
import {Photo} from '../model/photo';

@Pipe({
  name: 'getImageDimensionsPipe'
})
export class GetImageDimensionsPipePipe implements PipeTransform {

  constructor(private media: ObservableMedia) {
  }
  transform(photo: Photo, args?: any): any {
    let photoSize = {width: photo['width_s'], height: photo['height_s'] }
    if (this.media.isActive('xs')) {
       photoSize =  {width : '100%', height: '100px'};
    }
    return photoSize ;
  }

}
