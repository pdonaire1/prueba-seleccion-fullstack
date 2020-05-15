
export class CharactersService {
  url:string = "http://localhost:8080/";

  requestCharacters({limit=10, page=0}): any {
    return fetch(this.url + `characters?limit=${limit}&page=${page}`, {
      headers: {
        'Accept': 'application/json'
      },
      method: "GET"
    }).then(res => res.json());
  }

  requestCharacter(id: string): any {
    return fetch(this.url + `characters/${id}`, {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      method: "GET"
    }).then(res => res.json());
  }
  
}