import {Component, OnInit} from '@angular/core';
import {SecretService} from '../shared/secret.service';
import {CreateSecret} from '../shared/create-secret';

@Component({
  selector: 'app-create-secret',
  templateUrl: './create-secret.component.html'
})
export class CreateSecretComponent implements OnInit {

  state = 'create';
  result: string;

  constructor(private secretService: SecretService) {
  }

  ngOnInit() {
    this.state = 'create';
  }

  send(secret: CreateSecret) {
    this.secretService.createSecret(secret).subscribe(result => {
      this.result = result;
      this.state = 'result';
    });
    this.state = 'sending';
  }

  reset() {
    this.state = 'create';
    this.result = undefined;
  }
}
