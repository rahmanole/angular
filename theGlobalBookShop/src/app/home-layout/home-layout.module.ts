import { RouterModule, Routes } from '@angular/router';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopToolBarComponent } from './top-tool-bar/top-tool-bar.component';
import { AngularMaterialModule } from '../angular-material/angular-material.module';
import { BookCardsComponent } from './book-cards/book-cards.component';
import { SliderComponent } from './slider/slider.component';
import { FooterComponent } from './footer/footer.component';
import { LogoAndSrchComponent } from './logo-and-srch/logo-and-srch.component';
import { TopNavComponent } from './top-nav/top-nav.component';
import { SeeMoreComponent } from './pages/see-more/see-more.component';
import { UpperPartComponent } from './upper-part/upper-part.component';
import { HomeBodyComponent } from './home-body/home-body.component';

const appRoutes:Routes = [
  { path: 'seeMore', component: SeeMoreComponent },
  { path: '', component: HomeBodyComponent },
]

@NgModule({
  declarations: [TopToolBarComponent,
    BookCardsComponent,
    SliderComponent, FooterComponent,
    LogoAndSrchComponent,
    TopNavComponent,
    SeeMoreComponent,
    UpperPartComponent,
    HomeBodyComponent
  ],

  imports: [CommonModule, AngularMaterialModule, RouterModule.forRoot(appRoutes)],

  exports: [
    TopToolBarComponent,
    BookCardsComponent,
    SliderComponent,
    FooterComponent,
    LogoAndSrchComponent,
    TopNavComponent,
    SeeMoreComponent,
    UpperPartComponent,
    HomeBodyComponent
  ]
})
export class HomeLayoutModule {

}
