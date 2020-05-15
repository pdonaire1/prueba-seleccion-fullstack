"use strict"
import axios from "axios";
import CharacterModel from "../models";
import _ from "lodash";
class CharactersServices {
  url: string = "https://api.got.show/api/book/characters";

  async get(id: string){
    return await CharacterModel.findById(id);
  }
  async getList({ limit=10, page=0 }){
    try {
      let result;
      const counts = await CharacterModel.countDocuments({})
      if (counts === 0){
        // The first time user request the characters, We'll save the data in db
        const characters = await axios.get(this.url)
          .then(response => response.data);
        await CharacterModel.insertMany(_.map(characters, (data) => ({
          name: data.name,
          gender: data.gender,
          culture: data.culture,
          image: data.image,
          allegiance: data.allegiance,
        })));
      }
      // return paginated query
      result = await CharacterModel.paginate({}, { limit, offset: page * limit });
      return result;
    } catch (error) {
      throw error
    }
  }
}

export default new CharactersServices();