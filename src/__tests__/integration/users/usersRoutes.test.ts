import request from "supertest";
import { app } from "../../../App";
import { userCreateMock } from "../../mocks/users.mocks";
import { MongoMemoryServer } from "mongodb-memory-server";
import mongoose from "mongoose";

let mongoServer: MongoMemoryServer;
let mongoUri: string;

beforeAll(async () => {
  mongoServer = new MongoMemoryServer();
  await mongoServer.start();
  mongoUri = mongoServer.getUri();

  await mongoose.connect(mongoUri);
});

afterAll(async () => {
  await mongoose.disconnect();
  await mongoServer.stop();
});

describe("User API", () => {
  it("should create a new user", async () => {
    const response = await request(app)
      .post("/users")
      .send({ ...userCreateMock });

    expect(response.status).toBe(200);
  });
});
