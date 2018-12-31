import {Photo} from './photo';

export class Photos {
  public page: number;
  public pages: string;
  public perpage: number;
  public total: string;
  public photo: Photo[];
  constructor() {
    this.photo = [];
  }
}
