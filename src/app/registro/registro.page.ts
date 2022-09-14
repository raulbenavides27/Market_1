import { Component, OnInit } from '@angular/core';
import { Form, FormBuilder, FormGroup,FormControl,Validators } from '@angular/forms';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {

  formularioRegistro: FormGroup;
  constructor(public fb: FormBuilder) {
    
    this.formularioRegistro = this.fb.group({
      'nombre': new FormControl("",Validators.required),
      'contraseña': new FormControl("",Validators.required),
      'confirmacion': new FormControl("",Validators.required)
    })
   }

  ngOnInit() {
  }

}
