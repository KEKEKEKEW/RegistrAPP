import { Component } from '@angular/core';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatNativeDateModule} from '@angular/material/core';
import { FormGroup,FormControl,Validators,FormBuilder } from '@angular/forms';
import { getElement } from 'ionicons/dist/types/stencil-public-runtime';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  formularioInicio: FormGroup;
 
  constructor(public fb: FormBuilder,public alertController: AlertController) {
    this.formularioInicio = this.fb.group({
      'nombre' : new FormControl(""),
      'apellido' : new FormControl(""),
      'educacion': new FormControl("")
    })
    
   }

   limpiar(){
    this.formularioInicio.reset();
   }
   
   async mostrar(){
    var f = this.formularioInicio.value;

    const alert = await this.alertController.create({
      header: 'usuario',
      message: 'Su nombre es ' + f.nombre + ' ' + f.apellido,
      buttons: ['yes']
    });
    await alert.present();
    return;

   }
}
