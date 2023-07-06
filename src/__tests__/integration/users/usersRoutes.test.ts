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
    const response = await request(app).post("/users").send(userCreateMock);

    expect(response.status).toBe(201);
    expect(response.body).toHaveProperty("created", true);
    expect(response.body).toHaveProperty("newUser");
    expect(response.body).toHaveProperty("newUser.name", userCreateMock.name);
    expect(response.body).toHaveProperty(
      "newUser.lastName",
      userCreateMock.lastName
    );
    expect(response.body).toHaveProperty("newUser.age", userCreateMock.age);
    expect(response.body).toHaveProperty("newUser.isPremium", false);
    expect(response.body).toHaveProperty("newUser._id");
    expect(response.body).toHaveProperty("newUser.createdAt");
    expect(response.body).toHaveProperty("newUser.updatedAt");
    expect(response.body).toHaveProperty(
      "newUser.email",
      userCreateMock.email.toLocaleLowerCase()
    );
    expect(response.body).not.toHaveProperty("newUser.password");
  });

  it("should not create a new user with email in use", async () => {
    const response = await request(app).post("/users").send(userCreateMock);

    expect(response.status).toBe(400);
    expect(response.body).toHaveProperty("message", "Email already registered");
  });

  it("should not create a new user with empty fields", async () => {
    const response = await request(app).post("/users").send();

    expect(response.status).toBe(400);
    expect(response.body).toHaveProperty(
      "error",
      "email is a required field, name is a required field, lastName is a required field, age is a required field, password is a required field"
    );
  });

  it("should not create a user with an incorrect email format", async () => {
    const response = await request(app)
      .post("/users")
      .send({ ...userCreateMock, email: "chico" });

    expect(response.status).toBe(400);
    expect(response.body).toHaveProperty(
      "error",
      "email must be a valid email"
    );
  });

  it("should not create a user with less than 2 characters in the name or lastname", async () => {
    const response = await request(app)
      .post("/users")
      .send({ ...userCreateMock, name: "a", lastName: "b" });

    expect(response.status).toBe(400);
    expect(response.body).toHaveProperty(
      "error",
      "name must have a minimum length of 2 characters, lastname must have a minimum length of 2 characters"
    );
  });

  it("should not create a user with less than 4 characters in the password", async () => {
    const response = await request(app)
      .post("/users")
      .send({ ...userCreateMock, password: "ab" });

    expect(response.status).toBe(400);
    expect(response.body).toHaveProperty(
      "error",
      "password must have a minimum length of 4 characters"
    );
  });

  it("should not create a user with age of type string", async () => {
    const response = await request(app)
      .post("/users")
      .send({ ...userCreateMock, age: "" });

    expect(response.status).toBe(400);
    expect(response.body).toHaveProperty("error", "age must be a number");
  });

  it("should not create a user with decimal age or less than 1", async () => {
    const response = await request(app)
      .post("/users")
      .send({ ...userCreateMock, age: 0.2 });

    expect(response.status).toBe(400);
    expect(response.body).toHaveProperty(
      "error",
      "age must be an integer, age must be greater than or equal to 1"
    );
  });
});

// expect(houseForSale).toHaveProperty(['kitchen', 'amenities', 0], 'oven');
