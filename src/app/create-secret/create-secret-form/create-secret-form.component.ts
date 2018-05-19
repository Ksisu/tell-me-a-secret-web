import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { CreateSecret } from '../../shared/create-secret';

@Component({
  selector: 'app-create-secret-form',
  templateUrl: './create-secret-form.component.html'
})
export class CreateSecretFormComponent implements OnInit {

  @Output() create = new EventEmitter<CreateSecret>();
  model: CreateSecret;

  ngOnInit() {
    this.clear();
  }

  send() {
    this.create.emit(this.model);
  }

  private clear() {
    this.model = {
      secret: '',
      forgetAfter: 15,
      readOnlyOnce: true
    };
  }
}
