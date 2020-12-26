import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatFormFieldModule, MatInputModule, MatTableModule, MatSortModule, MatPaginatorModule, MatSelectModule, MatCardModule, MatSidenavModule, MatMenuModule} from '@angular/material';
import { FormsModule } from '@angular/forms';
import { CompanySidenavComponent } from './components/company-sidenav/company-sidenav.component';

 @NgModule({
  declarations: [ 
    AppComponent,
    HomePageComponent,
    CompanySidenavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    MatSortModule,
    FormsModule,
    MatPaginatorModule,
    MatSelectModule,
    MatCardModule,
    MatSidenavModule,
    MatMenuModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [MatPaginatorModule]
})
export class AppModule { }
