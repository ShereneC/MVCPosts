import Post from "../Models/Post.js"
import Store from "../store.js";


class PostService {
  constructor() {
    console.log("creating service");
  }

  createPost(rawData) {
    console.log("creating post from the service")
    let newPost = new Post(rawData)
    // Store.State.posts.push(post);  DO not directly change the store
    let posts = [...Store.State.posts, newPost]
    Store.commit("posts", posts)
  }

  delete(id) {
    let postIndex = Store.State.posts.findIndex(post => post.id == id)
    Store.State.posts.splice(postIndex, 1);
  }
}

const service = new PostService();
export default service;