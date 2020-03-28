const connection = require("../database/connection");
const GenerateUniqueId = require("../utils/GenerateUniqueId");
module.exports = {
  async index(request, response) {
    const ongs = await connection("ongs").select("*");
    response.json(ongs);
  },
  async create(request, response) {
    const { name, email, whatsapp, city, uf } = request.body;
    const id = GenerateUniqueId();

    await connection("ongs").insert({
      id,
      name,
      email,
      whatsapp,
      city,
      uf
    });
    response.json({ id });
  }
};
