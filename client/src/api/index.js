import axios from "axios";

const API = axios.create({
    baseURL: "https://ai-image-generator-hnz1.onrender.com/api/",
});

export const GetPosts = async () => await API.get("/posts/");
export const CreatePost = async (data) => await API.post("/posts/", data);
export const GenerateAIImage = async (data) => await API.post("/generateImage/", data);
