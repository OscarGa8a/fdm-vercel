import { fabric } from 'fabric';
/**
 * Función que permite carga una imagen para el canvas de fabric
 * @param src Cadena con la url de la imagen a cargar
 */
export const loadImageFromUrl = (src: string) => {
  return new Promise<fabric.Image>((resolve, reject) => {
    fabric.Image.fromURL(src, (img) => {
      resolve(img);
    }, {
      crossOrigin: 'Anonymous'
    });
  });
};
