import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.page.html',
  styleUrls: ['./alert.page.scss'],
})
export class AlertPage {

  ngOnInit() {
  }

  constructor (private alertController: AlertController) {}

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Alerta',
      subHeader: 'Mensaje Importante',
      message: '¡Esta es una Alerta!',
      buttons: ['Aceptar'],
    });

    await alert.present();
  }
}