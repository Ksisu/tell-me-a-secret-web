import { Component, Input } from '@angular/core';
import { MatSnackBar } from '@angular/material';
import { ClipboardService } from 'ngx-clipboard';

@Component({
  selector: 'app-create-secret-result',
  templateUrl: './create-secret-result.component.html'
})
export class CreateSecretResultComponent {

  @Input() result: string;

  constructor(private snackBar: MatSnackBar, private clipboard: ClipboardService) { }

  copy() {
    this.clipboard.copyFromContent(this.result);
    this.snackBar.open('Link copied to clipboard.', null, {duration: 1000});
  }
}
