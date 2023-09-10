import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clase',
  templateUrl: './clase.page.html',
  styleUrls: ['./clase.page.scss'],
})
export class ClasePage implements OnInit {
  currentUser: string | null = null;
  rut: string | null = null;
  

  constructor() { }

  ngOnInit() {
    this.loadCurrentUser().then((user) => {
      this.currentUser = user;
      const userDataString = localStorage.getItem('usuario');
      if (userDataString) {
        const userData = JSON.parse(userDataString);
        if (userData.rut) {
          this.rut = userData.rut;
        }
      }

    });
  }

  private async loadCurrentUser(): Promise<string | null> {
    return new Promise<string | null>((resolve) => {
      const currentUser = localStorage.getItem('currentUser');
      const rut = localStorage.getItem('rut');
      
      resolve(currentUser);
    });
  }
  

}
