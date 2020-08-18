import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { GamaFormComponent } from './components/gama-form/gama-form.component';
import { GamaListComponent } from './components/gama-list/gama-list.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    GamaFormComponent,
    GamaListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
