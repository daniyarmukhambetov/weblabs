import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InfoComponent } from './info/info.component';
import { PnComponent } from './pn/pn.component';
import {HttpClientModule} from "@angular/common/http";
import { VtComponent } from './vt/vt.component';
import { SrComponent } from './sr/sr.component';
import { CtComponent } from './ct/ct.component';
import { PtComponent } from './pt/pt.component';
import { SbComponent } from './sb/sb.component';
import { VsComponent } from './vs/vs.component';
import { ClockComponent } from './clock/clock.component';
import { TimeComponent } from './time/time.component';

@NgModule({
  declarations: [
    AppComponent,
    InfoComponent,
    PnComponent,
    VtComponent,
    SrComponent,
    CtComponent,
    PtComponent,
    SbComponent,
    VsComponent,
    ClockComponent,
    TimeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
