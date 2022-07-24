import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CelsiusToFahrenheitPipe } from './celsius-to-fahrenheit.pipe';

@NgModule({
  declarations: [
    AppComponent,
    CelsiusToFahrenheitPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
