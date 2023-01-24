import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.less']
})
export class UserLoginComponent implements OnInit {

  form?: FormGroup;
  private formSubmittedAttempt?: boolean;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      login: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  isFieldInvalid(field: string) {
    return (
      (!this.form?.get(field)?.valid && this.form?.get(field)?.touched) ||
      (this.form?.get(field)?.untouched && this.formSubmittedAttempt)
    )
  }

  onSubmit() {
    if (this.form?.valid) {
      this.formSubmittedAttempt = true;
    }
  }
}
