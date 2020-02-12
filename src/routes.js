import { Router } from "express";
import User from "./app/models/User";

const routes = new Router();

routes.get("/", async (req, res) => {
  const user = await User.create({
    name: "Lucas",
    email: "Lucasdolce11@gmail.com",
    password_hash: "126326789"
  });
  return res.json(user);
});

export default routes;
