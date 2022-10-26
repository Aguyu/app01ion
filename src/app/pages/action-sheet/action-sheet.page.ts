import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-action-sheet',
  templateUrl: './action-sheet.page.html',
  styleUrls: ['./action-sheet.page.scss'],
})
export class ActionSheetPage {

  ngOnInit() {
  }

  constructor (private alertController: AlertController) {}

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Alerta - Pagina de Accion',
      subHeader: 'Mensaje Importante',
      message: '¡Esta es una Alerta!',
      buttons: ['Aceptar'],
    });

    await alert.present();
  }
}


