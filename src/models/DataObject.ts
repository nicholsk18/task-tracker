import { Relationships } from './Relationships';

export type DataObject = {
  Relationships: Relationships[];
  id: number;
  name: string;
  type: string;
};
