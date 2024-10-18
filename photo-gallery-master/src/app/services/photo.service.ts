import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';
import { Injectable } from '@angular/core';

// Definición de la interfaz UserPhoto
export interface UserPhoto {
  filepath: string;
  webviewPath: string;
}

@Injectable({
  providedIn: 'root'
})
export class PhotoService {
  // Array para almacenar las fotos capturadas
  public photos: UserPhoto[] = [];

  constructor() { }

  // Método para capturar una nueva foto
  public async addNewToGallery() {
    // Tomar una foto
    const capturedPhoto = await Camera.getPhoto({
      resultType: CameraResultType.Uri,
      source: CameraSource.Camera,
      quality: 100
    });

    // Lógica para almacenar la foto en el array photos
    this.photos.unshift({
      filepath: "Próxima implementación...",
      webviewPath: capturedPhoto.webPath || '' // Asigna una cadena vacía si es undefined
    });
  }

  // Método para eliminar una foto
  public deletePhoto(index: number) {
    this.photos.splice(index, 1);
  }
}
