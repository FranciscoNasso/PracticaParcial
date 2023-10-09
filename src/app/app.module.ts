import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AutoComponent } from './auto/auto.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AutoDetailsComponent } from './auto-details/auto-details.component';

@NgModule({
  declarations: [
    AppComponent,
    AutoComponent,
    AutoDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
