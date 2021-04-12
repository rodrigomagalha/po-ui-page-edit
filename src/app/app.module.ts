import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PoModule } from '@po-ui/ng-components';
import {RouterModule, Routes} from '@angular/router';
import { PoTemplatesModule } from '@po-ui/ng-templates';
import { PoPageEditComponent } from './po-page-edit/po-page-edit.component';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

const APP_ROUTE: Routes = [
  {path: 'page-edit', component: PoPageEditComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    PoPageEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PoModule,
    RouterModule.forRoot(APP_ROUTE),
    PoTemplatesModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
