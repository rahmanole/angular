import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularMaterialModule } from '../angular-material/angular-material.module';
import { DashBoardHomeComponent } from './dash-board-home/dash-board-home.component';
import { DashBoardRouterComponent } from './dash-board-router/dash-board-router.component';
import { RouterModule } from '@angular/router';
import { UploadExcelComponent } from './upload-excel/upload-excel.component';
import { BookInfoFormComponent } from './book-info-form/book-info-form.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [DashBoardHomeComponent, DashBoardRouterComponent, UploadExcelComponent, BookInfoFormComponent],
  imports: [
    CommonModule,AngularMaterialModule,RouterModule.forRoot([
    { path: 'dashboard', component: DashBoardHomeComponent }
  ]),ReactiveFormsModule],
  
  exports: [
    DashBoardHomeComponent, 
    DashBoardRouterComponent,
    BookInfoFormComponent
  ]
})
export class DashboardModule { }
