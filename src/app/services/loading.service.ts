import { Injectable } from '@angular/core';
import { LoadingController, ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class LoadingService {
  loading;
  constructor(public loadingController: LoadingController, public toastController: ToastController) { }

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

  async presentToast() {
    const toast = await this.toastController.create({
      message: 'No tiene permisos para ver este usuario',
      duration: 2000
    });
    toast.present();
  }
}

