import { Component, OnInit } from '@angular/core';
import { Form, FormBuilder, FormGroup,FormControl,Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  formularioLogin: FormGroup;
  constructor(public fb: FormBuilder) {
    
    this.formularioLogin = this.fb.group({
      'nombre': new FormControl("",Validators.required),
      'contraseña': new FormControl("",Validators.required)
    })
   }

img:string;

  ngOnInit() {
    this.img ='https://www.tribunahacker.com.ar/wp-content/uploads/2015/06/elperiodicocom.jpg'
  }


}
