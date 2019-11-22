export class Feeling {
  async getFeeling(feeling){
    try{
      let response2 = await fetch(`https://api.gfycat.com/v1/gfycats/search?search_text=${feeling}&client_id=${process.env.OTHER_API_KEY}&client_secret=${process.env.OTHER_API_KEY2}`);
      let jsonifiedResponse2 = await response2.json();
      return jsonifiedResponse2
    } catch(error) {
      console.error("you realllllly suckk:" + error.message);
    }
  }
}
