import { Component, OnInit } from '@angular/core';
import { BarcodeScanner } from '@awesome-cordova-plugins/barcode-scanner/ngx';
import { Router } from '@angular/router';

@Component({
  selector: 'app-qr',
  templateUrl: './qr.page.html',
  styleUrls: ['./qr.page.scss'],
})
export class QRPage implements OnInit {
  code: any;

  constructor(private barcodeScanner: BarcodeScanner,private router: Router) { }

  ngOnInit() {
    this.barcodeScanner.scan().then(barcodeData => {
      this.code = barcodeData.text;
      console.log('Barcode data', this.code);
      let mensaje = this.code.split(',')

      var clases = {
        profesor: mensaje[0],
        hora: mensaje[1],
        sala: mensaje[2],
        dia: mensaje[3]
      }

      localStorage.setItem('clases',JSON.stringify(clases));

     }).catch(err => {
         console.log('Error', err);
     });
  }

}