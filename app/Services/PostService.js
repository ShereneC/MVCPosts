import Post from "../Models/Post.js"
import Store from "../store.js";


class PostService {
  constructor() {
    console.log("creating service");
  }

  createPost() {
    console.log("creating post from the service")
    let newPost = new Post("new Post")
    // Store.State.posts.push(post);  DO not directly change the store
    let posts = [...Store.State.posts, newPost]
    Store.commit("posts", posts)
  }
}

const service = new PostService();
export default service;