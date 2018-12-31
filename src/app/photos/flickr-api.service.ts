import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {PhotoSearchResult} from './model/photo-search-result';

@Injectable()
export class FlickrApiService {
  defaultParams  = {
    key : '8e4a571bd31e66694d7d66b4b6786761',
    extras: ' license, ' +
    'date_upload, ' +
    '        date_taken, ' +
    '        owner_name, ' +
    '        icon_server, ' +
    '        original_format, ' +
    '        last_update, ' +
    '        geo, tags, ' +
    '        machine_tags, ' +
    '        o_dims, ' +
    '        views, ' +
    '        media, ' +
    '        path_alias, ' +
    '        url_sq, ' +
    '        url_t, ' +
    '        url_s, ' +
    '        url_q, ' +
    '        url_m, ' +
    '        url_n, ' +
    '        url_z, ' +
    '        url_c, ' +
    '        url_l, ' +
    '        url_o'
  }
  key = '8e4a571bd31e66694d7d66b4b6786761';
  extras = ' license, ' +
            'date_upload, ' +
    '        date_taken, ' +
    '        owner_name, ' +
    '        icon_server, ' +
    '        original_format, ' +
    '        last_update, ' +
    '        geo, tags, ' +
    '        machine_tags, ' +
    '        o_dims, ' +
    '        views, ' +
    '        media, ' +
    '        path_alias, ' +
    '        url_sq, ' +
    '        url_t, ' +
    '        url_s, ' +
    '        url_q, ' +
    '        url_m, ' +
    '        url_n, ' +
    '        url_z, ' +
    '        url_c, ' +
    '        url_l, ' +
    '        url_o';
  constructor(private http: HttpClient) {}
  getResult(query = 'London', page= 0) {
    const url = `https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${this
      .key}&text=${query}&extras=${this.extras} 
            &per_page=48&page=${page}&format=json&nojsoncallback=1`;

    return this.http.get<PhotoSearchResult>(url);
  }

}
