import {Component} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-smart-login',
  templateUrl: './smart-login.component.html',
  styleUrl: './smart-login.component.scss'
})
export class SmartLoginComponent {
  // @ts-ignore
  public loginForm: FormGroup;

  constructor(private formBuilder: FormBuilder, public dialogRef: MatDialogRef<SmartLoginComponent>) {
  }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }
  //miguel@gmil.com
  //6957636

  public onSubmit() {
    if (this.loginForm.invalid) {
      return;
    }
    this.dialogRef.close(this.loginForm.value);
  }
}
