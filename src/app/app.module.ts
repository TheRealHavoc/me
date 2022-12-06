import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BigTitleComponent } from './components/big-title/big-title.component';
import { MediumTitleComponent } from './components/medium-title/medium-title.component';
import { SmallTitleComponent } from './components/small-title/small-title.component';
import { SeperatorComponent } from './components/seperator/seperator.component';

@NgModule({
  declarations: [
    AppComponent,
    BigTitleComponent,
    MediumTitleComponent,
    SmallTitleComponent,
    SeperatorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
