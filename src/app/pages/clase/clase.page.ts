import { Component, OnInit } from '@angular/core';
import { Geolocation } from '@ionic-native/geolocation/ngx';

@Component({
  selector: 'app-clase',
  templateUrl: './clase.page.html',
  styleUrls: ['./clase.page.scss'],
})
export class ClasePage implements OnInit {
  nombre: string | null = null;
  rut: string | null = null;
  profesor: string | null = null;
  hora: string | null = null;
  sala: string | null = null;
  dia: string | null = null;
  coordinatesText: string = '';

  constructor(private geolocation: Geolocation) { }

  ngOnInit() {
    const userDataString = localStorage.getItem('usuario');
    const claseDataString = localStorage.getItem('qrCode');

    if (userDataString) {
      const userData = JSON.parse(userDataString);
      if (userData.rut) {
        this.nombre = userData.nombre;
        this.rut = userData.rut;
      }
    }

    if (claseDataString) {
      const claseData = JSON.parse(claseDataString);
      if (claseData.profesor && claseData.hora && claseData.sala && claseData.dia) {
        this.profesor = claseData.profesor;
        this.hora = claseData.hora;
        this.sala = claseData.sala;
        this.dia = claseData.dia;
      }
    }

    this.getCoordinates();
  }

  getCoordinates() {
    this.geolocation.getCurrentPosition().then((resp) => {
      const latitude = resp.coords.latitude;
      const longitude = resp.coords.longitude;
      this.coordinatesText = `Latitud: ${latitude}, Longitud: ${longitude}`;
    }).catch((error) => {
      console.error('Error al obtener la ubicación', error);
    });
  }
}