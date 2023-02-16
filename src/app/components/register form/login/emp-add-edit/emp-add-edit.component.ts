import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from "@angular/forms";
import { MatDialog } from '@angular/material/dialog';
import { LoginComponent } from '../login.component';

@Component({
  selector: 'app-emp-add-edit',
  templateUrl: './emp-add-edit.component.html',
  styleUrls: ['./emp-add-edit.component.scss']
})
export class EmpAddEditComponent implements OnInit {
  constructor(private formBuilder: FormBuilder, private _dialog: MatDialog) { }
  isLinear = true;
  ngOnInit(): void {
  }

  Vsregister = this.formBuilder.group({
    basic: this.formBuilder.group({
      fName: ['', Validators.compose([Validators.required, Validators.minLength(3), Validators.maxLength(15)])],
      lName: ['', Validators.compose([Validators.required, Validators.minLength(3), Validators.maxLength(15)])],
    }),
    contact: this.formBuilder.group({
      userName: ['', [Validators.required, Validators.minLength(4)]],
      Email: ['', Validators.required],
      PhnNumber: ['', Validators.required],
      fpassword: ['', Validators.required],
    }),
    address: this.formBuilder.group({
      add1: ['', Validators.required],
      city: ['', [Validators.required, Validators.minLength(4)]],
      state: ['', Validators.required],
      zip: ['', [Validators.required, Validators.maxLength(6), Validators.minLength(6)]],
    }),
  });

  get basicinfoform() {
    return this.Vsregister.get("basic") as FormGroup;
  }

  get contactinfoform() {
    return this.Vsregister.get("contact") as FormGroup;
  }

  get addressinfoform() {
    return this.Vsregister.get("address") as FormGroup;
  }
  clicktologin() {
    this._dialog.closeAll()
    this._dialog.open(LoginComponent)
  }
}
