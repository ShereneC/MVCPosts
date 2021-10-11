export default class Post {
  constructor(body) {
    this.body = body
    this.date = Date.now();
  }
}