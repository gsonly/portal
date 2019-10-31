const request = require("supertest");
const app = require("../app");

describe("Test the root path", () => {
  it("should create a new post", async () => {
    const res = await request(app).get("/");
    expect(res.statusCode).toEqual(200);
  });
});

// describe("Post Endpoints", () => {
//   it("should create a new post", async () => {
//     const res = await request(app)
//       .post("/api/posts")
//       .send({
//         userId: 1,
//         title: "test is cool"
//       });
//     expect(res.statusCode).toEqual(201);
//     expect(res.body).toHaveProperty("post");
//   });
// });
