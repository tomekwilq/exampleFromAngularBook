import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ProductComponent } from './component';

// import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    // AppComponent
    ProductComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [
    // AppComponent
    ProductComponent
  ]
})
export class AppModule { }
