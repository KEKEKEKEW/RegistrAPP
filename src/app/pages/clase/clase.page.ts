import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clase',
  templateUrl: './clase.page.html',
  styleUrls: ['./clase.page.scss'],
})
export class ClasePage implements OnInit {
  currentUser: string | null = null;
  rut: string | null = null;
  profesor: string | null = null;
  hora: string | null = null;
  sala: string | null = null;
  dia: string | null = null;



  constructor() { }

  ngOnInit() {
    this.loadCurrentUser().then((user) => {
      this.currentUser = user;
      const userDataString = localStorage.getItem('usuario');
      const claseDataString = localStorage.getItem('clases');
      if (userDataString) {
        const userData = JSON.parse(userDataString);
        if (userData.rut) {
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

    });
  }

  private async loadCurrentUser(): Promise<string | null> {
    return new Promise<string | null>((resolve) => {
      const currentUser = localStorage.getItem('currentUser');
      const rut = localStorage.getItem('rut');
      const profesor = localStorage.getItem('profesor');
      const hora = localStorage.getItem('hora');
      const sala = localStorage.getItem('sala');
      const dia = localStorage.getItem('dia');
      

      resolve(currentUser);
    });
  }
  

}
