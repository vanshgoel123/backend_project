const request = require("supertest");
const app = require("../index");

describe("Health Check Endpoint", () => {
  it("should return 200 OK with status message", async () => {
    const res = await request(app).get("/health");
    expect(res.statusCode).toEqual(200);
    expect(res.body.status).toBe("OK");
  });

  afterAll((done) => {
    done();
  });
});
