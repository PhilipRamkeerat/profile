import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ProfileModule } from './profile/profile.module';
import { ScrollProgressComponent } from './scroll-progress/scroll-progress.component';
import { EducationComponent } from './education/education.component';
import { PortfolioGaleryComponent } from './portfolio-galery/portfolio-galery.component';

@NgModule({
  declarations: [
    AppComponent,
    ScrollProgressComponent
  ],
  imports: [
    BrowserModule,
    ProfileModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
