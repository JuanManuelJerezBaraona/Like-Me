import { getPost, createPost } from "../models/postModel.js";

const getAllPosts = async(req, res) => {
    try {const posts = await getPost();
        res.status(200).json(posts);
    } catch (error) {
        res.status(500).json({ error: "Error al procesar la solicitud" });
        console.error("Error al procesar la solicitud:", error);
    }
};

const createOnePost = async(req, res) => {
    const { titulo, img, descripcion } = req.body;
    try {
        const post = await createPost({ titulo, img, descripcion });
        res.status(201).json(post);
    } catch (error) {
        res.status(500).json({ error: "Error al procesar la solicitud" });
        console.error("Error al procesar la solicitud:", error);
    }
};

export { getAllPosts, createOnePost };