import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatButtonModule,MatToolbarModule,MatCardModule,MatFormFieldModule,
  MatInputModule,MatMenuModule, MatSidenavModule, MatIconModule,
   MatListModule, MatExpansionModule, MatDatepickerModule, MatNativeDateModule } from '@angular/material';
import { LayoutModule } from '@angular/cdk/layout';

const materialModules = [
  MatButtonModule,
  MatToolbarModule,
  MatCardModule,
  MatFormFieldModule,
  MatFormFieldModule,
  MatInputModule,
  MatMenuModule,
  MatSidenavModule,
  LayoutModule, 
  MatSidenavModule, 
  MatIconModule, 
  MatListModule,
  MatExpansionModule,
  MatDatepickerModule,
  MatNativeDateModule
];

@NgModule({
  imports: [materialModules],
  exports:[materialModules]
})
export class AngularMaterialModule { }
