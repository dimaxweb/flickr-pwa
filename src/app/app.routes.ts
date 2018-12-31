import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MainEntryComponent} from './main/main-entry/main-entry.component';
import {PhotosSearchComponent} from './photos/photos.search/photos.search.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'main',
    pathMatch: 'full'
  },
  {
    path: 'main',
    component: MainEntryComponent
  },
  {
    path: 'photos',
    component: PhotosSearchComponent
  }
];


// - Updated Export
export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
