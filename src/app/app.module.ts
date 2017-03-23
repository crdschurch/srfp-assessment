import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
//import { ContentBlockModule } from 'crds-ng2-content-block';
import { AuthService } from './services/auth/auth.service';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpModule,
    AppRoutingModule,
    //ContentBlockModule.forRoot({ categories: Array('main', 'common'), endpoint: environment.crdsEndpoint })
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(private authService: AuthService) {
    authService.authObs.subscribe( (evt) => {
      console.log(evt);
    }, (err) => {
      console.error("error");
    });
  }
}
