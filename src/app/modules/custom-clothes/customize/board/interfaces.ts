import { fabric } from "fabric";

export interface Object extends fabric.Object {
  id: String;
  idRelated: String;
  position: String;
}

export interface Canvas extends fabric.Canvas {
  getActiveObject(): Object;
  _objects: Object[];
}
