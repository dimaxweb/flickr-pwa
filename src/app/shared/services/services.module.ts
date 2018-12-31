import { NgModule } from '@angular/core';
import { SettingsService } from './settings.service';
import {HTTP_INTERCEPTORS} from '@angular/common/http';
import {HttpClientInterceptorService} from './http/http-client-interceptor.service';
import {LoaderService} from './loader/loader.service';

@NgModule({
  imports: [],
  exports : [],
  declarations: [],
  providers: [
    LoaderService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpClientInterceptorService,
      multi: true
    }
  ]
})
export class ServicesModule {
  static forRoot() {
    return {
      ngModule: ServicesModule,
      providers: [
        SettingsService,
        LoaderService
      ]
    };
  }
}


export {
  SettingsService,
  LoaderService
}
