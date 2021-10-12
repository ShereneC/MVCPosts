export default class Post {
  constructor(body) {
    this.body = body
    this.date = new Date().toLocaleDateString("en-Us");
  }

  get Template() {
    return `
      <div class="post">
    <h4>${this.date}</h4>
    <p>
      ${this.body}
    </p>
  </div>
    `
  }
}