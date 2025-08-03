import { Router } from "express";
import { getLeaderboard, getUser } from "../controllers/userControllers.js";
const userRouter = Router();
userRouter.get("/user", getUser);
userRouter.get("/leaderboard", getLeaderboard);
export default userRouter;
