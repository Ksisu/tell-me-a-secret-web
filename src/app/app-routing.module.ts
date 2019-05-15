import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CreateSecretComponent} from './create-secret/create-secret.component';
import {ShowSecretComponent} from './show-secret/show-secret.component';
import {NotFoundComponent} from './not-found/not-found.component';

const routes: Routes = [
  {path: '', component: CreateSecretComponent},
  {path: 'secret', redirectTo: '', pathMatch: 'full'},
  {path: 'secret/:uuid', component: ShowSecretComponent},
  {path: '404', component: NotFoundComponent},
  {path: '**', redirectTo: '404'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
