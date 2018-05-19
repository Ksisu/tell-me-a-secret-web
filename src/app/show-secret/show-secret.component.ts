import { Component, OnInit } from '@angular/core';
import { SecretService } from '../shared/secret.service';
import { ActivatedRoute, Router } from '@angular/router';
import {ClipboardService} from 'ngx-clipboard';
import {MatSnackBar} from '@angular/material';

@Component({
  selector: 'app-show-secret',
  templateUrl: './show-secret.component.html'
})
export class ShowSecretComponent implements OnInit {

  loading = true;
  secret: string;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private secretService: SecretService,
    private clipboardService: ClipboardService,
    private snackBar: MatSnackBar) { }

  ngOnInit() {
    this.loadSecret();
  }

  loadSecret() {
    this.loading = true;
    const uuid = this.route.snapshot.paramMap.get('uuid');
    this.secretService.loadSecret(uuid).subscribe(secret => {
      this.secret = secret;
      this.loading = false;
    }, error => {
      this.router.navigate(['/404']);
    });
  }

  copy() {
    this.clipboardService.copyFromContent(this.secret);
    this.snackBar.open('Secret copied to clipboard.', null, {duration: 1000});
  }

  close() {
    this.secret = undefined;
    this.router.navigate(['/']);
  }
}
