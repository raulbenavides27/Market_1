import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup,FormControl,Validators } from '@angular/forms';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  formularioLogin: FormGroup;

  constructor(public fb: FormBuilder,
    public alertController: AlertController) {
    
    this.formularioLogin = this.fb.group({
      'nombre': new FormControl("",Validators.required),
      'pass': new FormControl("",Validators.required)
    })
   }

img:string;

  ngOnInit() {
    this.img ='https://www.tribunahacker.com.ar/wp-content/uploads/2015/06/elperiodicocom.jpg' 
  }

  async ingresar(){
    var f = this.formularioLogin.value;

    var usuario = JSON.parse(localStorage.getItem('usuario'));

    if(usuario.nombre == f.nombre && usuario.password == f.pass){
      console.log('Ingresado');
    }else{
      const alert = await this.alertController.create({
        header: 'Datos incorrectos',
        message: 'Los datos que ingresaste son incorrectos.',
        buttons: ['Aceptar']
      });
  
      await alert.present();
    }
  }

}