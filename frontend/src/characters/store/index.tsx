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

export class Store {
  @observable characters: ICharacter[] = []
  @observable error: boolean = false
  @observable loading: boolean = false
  @observable page: number = 0
  @observable limit: number = 10
  @observable pages: number = 0
  
  constructor(){
    this.characters = observable([]);
  }

  @action
  requestCharacters = async () => {
    this.error = false;
    this.loading = true;
    try {
      const { result } = await client.requestCharacters({page: this.page, limit: this.limit});
      console.log("response:", result)
      this.characters = result.docs.map( (data: any) => {
        return {
          id: data.id,
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
}

export const store = new Store()