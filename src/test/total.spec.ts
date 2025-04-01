import request from "supertest";
import { app, server } from "../index";

describe("POST /api/total", () => {
  it("should return the correct sum when given a valid input", async () => {
    const response = await request(app)
      .post("/api/total")
      .send({ items: ["1", "2"] })
      .expect(200);

    expect(response.body.total).toEqual(32.98);
  });

  it("should return an error when given an empty array", async () => {
    await request(app).post("/api/total").send({ items: [] }).expect(400);
  });

  it("should return an error when given an invalid item", async () => {
    await request(app)
      .post("/api/total")
      .send({ items: ["7"] })
      .expect(400);
  });
});

afterAll(() => {
  server.close();
});
