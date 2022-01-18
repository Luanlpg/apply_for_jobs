import { Component, OnInit, Input } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-password-field',
  templateUrl: './password-field.component.html',
  styleUrls: ['./password-field.component.scss'],
})
export class PasswordFieldComponent implements OnInit {
  @Input() id: string;
  passwordURL: string;
  basePasswordURL: string = environment.basePublicURL;

  constructor() {}

  ngOnInit(): void {
    this.passwordURL = `${this.basePasswordURL}/${this.id}`;
  }

  copyToClipBoard() {
    if (!navigator.clipboard) {
      alert('Clipboard API not supported');
      return;
    }
    navigator.clipboard.writeText(this.passwordURL);
    alert('Copied!');
  }
}
