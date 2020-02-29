import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutComponent } from './layout/layout/layout.component';
import { HeaderComponent } from './layout/header/header.component';
import { SidebarComponent } from './layout/sidebar/sidebar.component';
import { TransationComponent } from './view/transation/transation.component';
import { HomeComponent } from './view/home/home.component';

import {InputTextareaModule} from 'primeng/inputtextarea';
import {ButtonModule} from 'primeng/button';

import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { NgxJsonViewerModule } from 'ngx-json-viewer';
import { ResultdataComponent } from './resultdata/resultdata.component';
@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    HeaderComponent,
    SidebarComponent,
    TransationComponent,
    HomeComponent,
    ResultdataComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    InputTextareaModule,
    ButtonModule,
    HttpClientModule,
    NgxJsonViewerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
