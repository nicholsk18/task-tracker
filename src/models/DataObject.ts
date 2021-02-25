import { Relationship } from './Relationship';
import { Data } from './Data';

export type DataObject = {
  id: number;
  type: string;
  data: Data;
  relationships: [ Relationship ]
}

export type DeleteObject = {
  type: string;
  id: number;
  relID: number;
}