import { Relationship } from './Relationship';

export type DataObject = {
  id: number;
  type: string
  name: string;
  relationships: Relationship[];
  _id: string
}