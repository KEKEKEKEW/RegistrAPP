import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { BrowserMultiFormatReader, Result, BarcodeFormat } from '@zxing/library';

@Component({
  selector: 'app-qr',
  templateUrl: './qr.page.html',
  styleUrls: ['./qr.page.scss'],
})
export class QRPage implements OnInit {
  qrResult: string = '';
  codeReader: BrowserMultiFormatReader;
  isScanning: boolean = false;

  @ViewChild('videoElement', { static: true }) videoElement: ElementRef | undefined;

  constructor() {
    this.codeReader = new BrowserMultiFormatReader();
  }

  ngOnInit() {
  }

  openScanner() {
    if (this.videoElement) {
      const hints = new Map<BarcodeFormat, any>();
      hints.set(BarcodeFormat.QR_CODE, {});
      this.codeReader

        .decodeFromInputVideoDevice(undefined, this.videoElement.nativeElement)
        .then((result: Result) => {
          this.qrResult = result.getText();
          let datosEscaneados = this.qrResult.split(',');
          
          var qrCode = {
            profesor: datosEscaneados[0],
            hora: datosEscaneados[1],
            sala: datosEscaneados[2],
            dia: datosEscaneados[3]
          }
          localStorage.setItem('qrCode', JSON.stringify(qrCode));
          this.isScanning = false;
        })
        .catch((error: any) => {
          console.error(error);
          this.isScanning = false;
        });

      this.isScanning = true;
    }
  }

  closeScanner() {
    this.codeReader.reset();
    this.qrResult = '';
  }
}