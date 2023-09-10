import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl,Validators,FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-password',
  templateUrl: './password.page.html',
  styleUrls: ['./password.page.scss'],
})
export class PasswordPage implements OnInit {

  formularioRecuperar: FormGroup;

  constructor(public fb: FormBuilder, public alertController: AlertController, private router: Router) {
    this.formularioRecuperar=this.fb.group({
      'user': new FormControl("",Validators.required)
    })
   }

  ngOnInit() {
  }

  async recuperar(){

    var f = this.formularioRecuperar.value;

    var usuarioStr = localStorage.getItem('usuario');
    if (usuarioStr !== null) {
      var usuario = JSON.parse(usuarioStr);
    }

    if(usuario.nombre == f.user){
      const alert = await this.alertController.create({
        header: 'Datos recuperados',
        message: 'Los datos del usuario son '+ localStorage.getItem('usuario'),
        buttons: ['Aceptar'],
      });
      await alert.present();
      return;
    }else{
      const alert = await this.alertController.create({
        header: 'Datos incorrectos',
        message: 'El usuario no existe',
        buttons: ['Aceptar'],
      });
      await alert.present();
      return;
    }
  }

}
