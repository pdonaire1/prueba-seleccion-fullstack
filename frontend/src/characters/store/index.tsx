import { observable, action, autorun } from 'mobx'
import { CharactersService } from "../services";
import { runInThisContext } from 'vm';
const client = new CharactersService();

export interface ICharacter {
  id: string,
  name: string,
  gender?: string,
  culture?: string,
  alive?: string,
  image?: string,
  allegiance: string[],
  createdAt: string,
  updatedAt: string
}
const initialCharacter = { id: "", name: "", allegiance: [], createdAt: "", updatedAt: ""};

export class Store {
  @observable characters: ICharacter[] = [];
  @observable characterSelectedId: string = "";
  @observable characterSelected: ICharacter = initialCharacter;
  @observable error: boolean = false;
  @observable loading: boolean = false;
  @observable page: number = 0;
  @observable limit: number = 10;
  @observable pages: number = 0;
  
  constructor(){
    this.characters = observable([]);
  }

  @action
  requestCharacters = async () => {
    this.error = false;
    this.loading = true;
    try {
      const { result } = await client.requestCharacters({page: this.page, limit: this.limit});
      this.characters = result.docs.map( (data: any) => {
        return {
          id: data._id,
          name: data.name,
          gender: data.gender,
          culture: data.culture,
          alive: data.alive,
          image: data.image,
          allegiance: data.allegiance,
          createdAt: data.createdAt,
          updatedAt: data.updatedAt
        }});
    } catch (error) {
      this.error = true;
      this.characters = [];
    }
    this.loading = false
  }

  @action
  changePage = (page:number) => {
    this.page = page;
    this.requestCharacters();
  }

  @action
  selectCharacter = (id:string) => {
    this.characterSelectedId = id;
    this.requestCharacterSelected();
  }

  @action
  requestCharacterSelected = async () => {
    this.error = false;
    this.loading = true;
    try {
      const { result } = await client.requestCharacter(this.characterSelectedId);
      this.characterSelected = {
        id: result._id,
        name: result.name,
        gender: result.gender,
        culture: result.culture,
        alive: result.alive,
        image: result.image,
        allegiance: result.allegiance,
        createdAt: result.createdAt,
        updatedAt: result.updatedAt
      };

    } catch (error) {
      this.error = true;
      this.characterSelected = initialCharacter;
    }
    this.loading = false
  }
}

export const store = new Store()