import PostService from "../Services/PostService.js"

export default class PostController {
  constructor() {
    console.log("Building Controller")
  }
  createPost() {
    debugger;
    console.log("Creating Post");
    PostService.createPost();
  }
}