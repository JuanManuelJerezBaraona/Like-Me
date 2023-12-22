import express from "express";
import { getAllPosts, createOnePost } from "../src/controllers/postsController.js";

const router = express.Router();

router.get('/posts', getAllPosts);
router.post('/posts', createOnePost);

export default router;