import { NgModule } from '@angular/core';
import { CreateSecretComponent } from './create-secret.component';
import { CreateSecretFormComponent } from './create-secret-form/create-secret-form.component';
import { CreateSecretResultComponent } from './create-secret-result/create-secret-result.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    SharedModule
  ],
  declarations: [
    CreateSecretComponent,
    CreateSecretFormComponent,
    CreateSecretResultComponent
  ],
  exports: [
    CreateSecretComponent
  ]
})
export class CreateSecretModule { }
