import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { LoginComponent } from '../login.component';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})

export class ForgotPasswordComponent {

  constructor(private _dialog: MatDialog) { }

  clicktologin() {
    this._dialog.closeAll()
    this._dialog.open(LoginComponent)
  }
}
