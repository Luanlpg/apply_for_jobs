import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PasswordService } from 'src/app/shared/service/password.service';
@Component({
  selector: 'app-password',
  templateUrl: './password.component.html',
  styleUrls: ['./password.component.scss'],
})
export class PasswordComponent implements OnInit {
  password: string;
  statusCode: number;
  inProgress: boolean;

  constructor(
    private activatedRoute: ActivatedRoute,
    private passwordService: PasswordService
  ) {}

  ngOnInit(): void {
    this.retrievePassword();
  }

  retrievePassword() {
    let id = this.activatedRoute.snapshot.paramMap.get('id');
    if (!id) {
      this.statusCode = 404;
      return;
    }
    this.inProgress = true;
    this.passwordService.retrievePassword(id).subscribe((response) => {
      this.inProgress = false;
      this.statusCode = response.statusCode;
      if (this.statusCode === 400) {
        return;
      }
      this.password = JSON.parse(response.body).password;
    });
  }
}
