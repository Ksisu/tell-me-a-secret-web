import {NgModule} from '@angular/core';
import {ShowSecretComponent} from './show-secret.component';
import {SharedModule} from '../shared/shared.module';

@NgModule({
  imports: [
    SharedModule
  ],
  declarations: [ShowSecretComponent],
  exports: [ShowSecretComponent]
})
export class ShowSecretModule {
}
