const app = require("../../src/app");
const request = require("supertest");
const connection = require("../../src/database/connection");

describe("Ong test", () => {
  beforeEach(async () => {
    await connection.migrate.latest();
  });
  afterAll(async () => {
    await connection.migrate.rollback();
    await connection.destroy();
  });
  it("should be a able to create a new ONG", async () => {
    const response = await request(app).post("/ongs").send({
      name: "Apate",
      email: "apate@gmail.com",
      whatsapp: "1111111111",
      city: "Florianopolis",
      uf: "SC"
    });
    expect(response.body).toHaveProperty("id");
    expect(response.body.id).toHaveLength(8);
  });
});
