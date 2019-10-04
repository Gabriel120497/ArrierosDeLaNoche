import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { File } from '@ionic-native/file/ngx';
import { ActionSheetController, ToastController, LoadingController } from '@ionic/angular';
import { Camera, CameraOptions } from '@ionic-native/Camera/ngx';
import { LoadingService } from 'src/app/services/loading.service';
import { ConsultsService } from 'src/app/services/consults.service';
import { Base64 } from '@ionic-native/base64/ngx';
import { Crop } from '@ionic-native/crop/ngx';
//import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@Component({
  selector: 'app-nuevo-evento',
  templateUrl: './nuevo-evento.page.html',
  styleUrls: ['./nuevo-evento.page.scss'],
})
export class NuevoEventoPage implements OnInit {

  fechaInicio = new Date().toISOString();
  fechaFin = new Date().toISOString();
  fechaPub = new Date().toISOString();
        fechaPubUI = event['fechaPub']
  evento = { titulo: '', foto: '', lugar: '', distancia: '', dificultad: '', descripcion: '', inicio: this.fechaInicio, fin: this.fechaFin, estado: 'Activo', fechaPub: this.fechaPub};
  base64Image;

  croppedImagepath = "";
  isLoading = false;

  imagePickerOptions = {
    maximumImagesCount: 1,
    quality: 50
  };

  constructor(private camera: Camera,
    public actionSheetController: ActionSheetController,
    private cargando: LoadingService, 
    private consults: ConsultsService,
    private base64: Base64,
    private crop: Crop,
    private file: File) { }
  

  ngOnInit() {
   
  }

  pickImage(sourceType) {
    const options: CameraOptions = {
      quality: 100,
      sourceType: sourceType,
      destinationType: this.camera.DestinationType.FILE_URI,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    }
    this.camera.getPicture(options).then((imageData) => {
      this.cropImage(imageData)
    }, (err) => {
      // Handle error
    });
  }

  async selectImage() {
    const actionSheet = await this.actionSheetController.create({
      header: "Seleccione Origen de la Imagen",
      buttons: [{
        text: 'Galeria',
        handler: () => {
          this.pickImage(this.camera.PictureSourceType.PHOTOLIBRARY);
        }
      },
      {
        text: 'Usar Camara',
        handler: () => {
          this.pickImage(this.camera.PictureSourceType.CAMERA);
        }
      },
      {
        text: 'Cancelar',
        role: 'cancel'
      }
      ]
    });
    await actionSheet.present();
  }

  cropImage(fileUrl) {
    this.crop.crop(fileUrl, { quality: 50 })
      .then(
        newPath => {
          this.showCroppedImage(newPath.split('?')[0])
        },
        error => {
          alert('Error cropping image' + error);
        }
      );
  }

  showCroppedImage(ImagePath) {
    this.isLoading = true;
    var copyPath = ImagePath;
    var splitPath = copyPath.split('/');
    var imageName = splitPath[splitPath.length - 1];
    var filePath = ImagePath.split(imageName)[0];

    this.file.readAsDataURL(filePath, imageName).then(base64 => {
      this.croppedImagepath = base64;
      this.isLoading = false;
      console.log(this.croppedImagepath);
      this.evento.foto = this.base64Image = this.croppedImagepath;
    }, error => {
      alert('Error in showing image' + error);
      this.isLoading = false;
    });
  }

  guardarEvento() {
    this.fechaInicio = this.evento.inicio;
    this.fechaFin = this.evento.fin;
    const body = this.evento;
    console.log(body);
    
    /*this.cargando.mostrarCargando('Cargando', 8000);
    const body = this.evento;
    //const body = {'id_usuario':3};

    this.consults.createNewEvent(body).subscribe(
      (response: any) => {
        
        this.cargando.detenerCargando();
      },
      (error: any) => {
      }
    );*/
  }
 
}
