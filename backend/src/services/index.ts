"use strict"
import axios from "axios";

class CharactersServices {
  url: string = "https://api.got.show/api/general/characters";

  async getList(){
    try {
      const result = await axios.get(this.url);
      return result.data;
    } catch (error) {
      throw error
    }
  }
}

export default new CharactersServices();