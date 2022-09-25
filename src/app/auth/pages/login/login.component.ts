import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: []
})
export class LoginComponent{
  regEx : string ="^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$";

  miFormulario : FormGroup = this.fb.group({
    email: ['', [Validators.required, Validators.pattern(this.regEx)]],
    password: ['', [Validators.required, Validators.minLength(6)]]
  });

  constructor(private fb : FormBuilder) { }

  ngOnInit(): void {
  }

  save(){
    console.log(this.miFormulario.valid);
    console.info(this.miFormulario.value);
  }
}
