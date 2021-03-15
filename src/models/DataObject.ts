import { Relationship } from './Relationship';
import { Data } from './Data';

export type DataObject = {
  data: Data;
  id: number;
  type: string;
  relationships: [Relationship];
};

export type DeleteObject = {
  type: string;
  id: number;
  relID: number;
};
