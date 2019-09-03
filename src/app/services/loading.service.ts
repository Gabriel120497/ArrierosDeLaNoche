import { Injectable } from '@angular/core';
import { LoadingController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class LoadingService {
  loading;
  constructor(public loadingController: LoadingController) { }

  mostrarCargando = async (mensaje: string, duracion: number) => {
    this.loading = await this.loadingController.create({
      message: mensaje,
      duration: duracion
    });
    await this.loading.present();
  }

  detenerCargando = () => {
      this.loading.dismiss();
  }
}

