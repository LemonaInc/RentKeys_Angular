import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
/* Import Components */
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { DetailComponent } from './detail/detail.component';
import { ListSpaceComponent } from './list-space/list-space.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { AboutComponent } from './about/about.component';

/* Declare Components */
@NgModule({
  declarations: [
    AppComponent,
    DetailComponent,
    ListSpaceComponent,
    SignInComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    AngularFontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
