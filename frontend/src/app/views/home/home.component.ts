import { Component, OnInit } from '@angular/core';
import { PasswordService } from 'src/app/shared/service/password.service';
import { environment } from 'src/environments/environment';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  basePasswordURL: string = environment.basePublicURL;
  expirationDate?: Date;
  numberOfPermissions?: number;
  passwordURL: string;
  today: Date = new Date();
  inProgress: boolean;

  constructor(private passwordService: PasswordService) {}

  ngOnInit(): void {}

  createPassword() {
    if (!this.expirationDate) {
      alert('Please select an expiration date');
      return;
    }
    if (!this.numberOfPermissions) {
      alert('Please enter the number of permissions');
      return;
    }
    this.inProgress = true;
    this.passwordService
      .createPassword(this.numberOfPermissions, this.expirationDate)
      .subscribe((response) => {
        this.inProgress = false;
        delete this.expirationDate;
        delete this.numberOfPermissions;
        this.passwordURL = `${this.basePasswordURL}/password/${
          JSON.parse(response.body).id
        }`;
      });
  }
}
