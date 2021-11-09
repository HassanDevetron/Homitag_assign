import app from "../app";
import * as request from "supertest";
import { expect } from "chai";

describe("Movie Controller", () => {
  it("should return the movies", async () => {
    const result = await request(app).get("/movie");
    expect(result.body[0]).not.be.undefined;
    expect(result.statusCode).to.eql(200);
  });

  it("should post a movie", async () => {
    const result = await request(app)
      .post("/movie")
      .send({
        name: "test",
        description: "abc",
        releaseDate: "11/11/2021",
        rating: "4",
        duration: "4 hours",
      })
      .set("Accept", "application/json");
    expect(result.body).not.be.undefined;
    expect(result.statusCode).to.eql(200);
  });
});
