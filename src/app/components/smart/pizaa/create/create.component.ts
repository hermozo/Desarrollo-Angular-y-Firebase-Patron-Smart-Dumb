import {Component} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Pizza} from "../../../../models/pizza";
import {MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrl: './create.component.scss'
})
export class CreateComponent {
  // @ts-ignore
  public pizzaForm: FormGroup;

  constructor(private formBuilder: FormBuilder, public dialogRef: MatDialogRef<CreateComponent>) {
  }

  ngOnInit() {
    this.pizzaForm = this.formBuilder.group({
      title: ['', Validators.required],
      description: [''],
      precio: ['', Validators.required],
      img: ['']
    });
  }

  onSubmit() {
    if (this.pizzaForm.invalid) {
      return;
    }
    const pizzaData: Pizza = this.pizzaForm.value;
    this.dialogRef.close(pizzaData);
  }
}
