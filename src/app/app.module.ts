import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { routing } from './app.routes';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { ServicesModule } from './shared/services/services.module';
import { SharedComponentsModule } from 'app/shared/components/shared-components.module';
import { PipesModule } from 'app/shared/pipes/pipes.module';
import {PhotosModule} from './photos/photos.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MainModule} from './main/main.module';
import { MatIconModule } from "@angular/material/icon";
import { StoreModule } from '@ngrx/store';
import { reducers, metaReducers } from './reducers';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment'


@NgModule({
  declarations: [
    AppComponent

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    routing,
    ServicesModule.forRoot(),
    CoreModule,
    SharedComponentsModule,
    PipesModule,
    PhotosModule,
    MainModule,
    MatIconModule,
    StoreModule.forRoot(reducers, { metaReducers }),
    !environment.production ? StoreDevtoolsModule.instrument() : []
  ],
  providers: [ ],
  bootstrap: [AppComponent]
})
export class AppModule { }
