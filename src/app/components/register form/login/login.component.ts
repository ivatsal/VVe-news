import { Component } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from "@angular/forms";
import { MatDialog } from '@angular/material/dialog';
import { EmpAddEditComponent } from './emp-add-edit/emp-add-edit.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent {
  constructor(private formBuilder: FormBuilder, private _dialog: MatDialog) { }


  Vregister = this.formBuilder.group({
    basic: this.formBuilder.group({
      fName: ['', Validators.compose([Validators.required, Validators.email])],
      lName: ['', Validators.compose([Validators.required, Validators.minLength(3), Validators.maxLength(15)])],
    }),
  })

  get basicinfoform() {
    return this.Vregister.get("basic") as FormGroup;
  }

  signupform() {
    this._dialog.closeAll()
    this._dialog.open(EmpAddEditComponent)
  }

  forgotPassword() {
    this._dialog.closeAll()
    this._dialog.open(ForgotPasswordComponent)
  }
}
