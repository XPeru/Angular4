import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';

import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material';



@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    MatTableModule,
    MatPaginatorModule
  ],
  exports: [
    CommonModule,
    BrowserModule,
    MatTableModule,
    MatPaginatorModule
  ],
  declarations: []
})
export class CustomMaterialModule { }
