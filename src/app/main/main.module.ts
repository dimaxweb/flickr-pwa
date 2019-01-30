import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainEntryComponent } from './main-entry/main-entry.component';
import {FlexLayoutModule} from "@angular/flex-layout";

@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule,
  ],
  declarations: [MainEntryComponent]
})
export class MainModule { }
