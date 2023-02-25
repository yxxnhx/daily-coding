import { User } from "./solution";
jest.mock("./solution");
test("User 타입에 맞게 데이터가 들어온다", () => {
  const users: User[] = [
    {
      name: "Max Mustermann",
      age: 25,
      occupation: "Chimney sweep",
    },
  ];
  const [{ name, age, occupation }] = users;

  expect(users).not.toBeUndefined();

  expect(name).toEqual("Max Mustermann");
  expect(age).toEqual(25);
  expect(occupation).toEqual("Chimney sweep");
});
