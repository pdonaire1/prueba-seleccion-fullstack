"use strict"
import axios from "axios";
import CharacterModel from "../models";
import _ from "lodash";
class CharactersServices {
  url: string = "https://api.got.show/api/book/characters";

  get(id: string){
    return CharacterModel.findOne({id});
  }
  async getList({ limit=10, page=0 }){
    try {
      let result;
      const counts = await CharacterModel.countDocuments({})// .then(data=> console.log("data:", data));
      if (counts === 0){ // At first time. Get initial data and save it in db
        result = await axios.get(this.url)
          .then(response => response.data);
        await CharacterModel.insertMany(_.map(result, (data) => ({
          name: data.name,
          gender: data.gender,
          culture: data.culture,
          image: data.image,
          allegiance: data.allegiance,
        })));
        result = {
          docs: result.slice((page - 1) * limit, page * limit),
          total: result.length,
          offset: page * limit
        }
      } else { // return paginated query
        result = await CharacterModel.paginate({}, { limit, offset: page * limit });
      }
      return result;
    } catch (error) {
      throw error
    }
  }
}

export default new CharactersServices();