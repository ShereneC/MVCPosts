// it is the job of the controller to manipulate the DOM

import PostService from "../Services/PostService.js"
import store from "../store.js";
//Private
function _draw() {
  let posts = store.State.posts;
  let templates = ""
  posts.forEach(post => {
    templates += post.Template;
  });
  document.getElementById('posts').innerHTML = templates
}

//Public
export default class PostController {
  constructor() {
    console.log("Building Controller");
    _draw();
  }
  createPost(event) {
    event.preventDefault();
    let formData = event.target;
    // debugger;
    let rawPost = {
      body: formData.body.value
    };
    PostService.createPost(rawPost);
    formData.reset()
    _draw();
  }
}