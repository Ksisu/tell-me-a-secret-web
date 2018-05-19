import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from '../material/material.module';
import { SecretService } from './secret.service';
import { ClipboardModule } from 'ngx-clipboard';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    MaterialModule,
    ClipboardModule
  ],
  declarations: [],
  providers: [SecretService],
  exports: [
    CommonModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    MaterialModule
  ]
})
export class SharedModule { }
