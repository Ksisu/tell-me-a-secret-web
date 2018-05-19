import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CreateSecretModule } from './create-secret/create-secret.module';
import { RoutingModule } from './routing.module';
import {ShowSecretModule} from './show-secret/show-secret.module';
import { NotFoundComponent } from './not-found/not-found.component';
import {SharedModule} from './shared/shared.module';

@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    SharedModule,
    CreateSecretModule,
    ShowSecretModule,
    RoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
