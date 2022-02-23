export interface IGenre {
  id: number;
  name: string;
  subgenres: ISubgenre[];
}

export interface IGenre {
  id: number;
  name: string;
  isDescriptionRequired: boolean;
}
