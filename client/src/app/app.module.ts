import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { GamaFormComponent } from './components/gama-form/gama-form.component';
import { GamaListComponent } from './components/gama-list/gama-list.component';
import { GamesService} from './services/games.service'
import {FormsModule} from '@angular/forms'

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    GamaFormComponent,
    GamaListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    GamesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
