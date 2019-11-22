export class Name {
  async getNameByNumber(numberInput) {
    try {
      let response = await fetch(`https://api.ekata.com/3.0/phone.json?api_key=${process.env.API_KEY}&phone.country_hint=US&phone=${numberInput}`);
      let jsonifiedResponse = await response.json();
      return jsonifiedResponse;
    } catch(error) {
      console.error("you suuuuuuuccckkkkk: " + error.message);
    }
  }
}
