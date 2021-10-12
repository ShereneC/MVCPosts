export default class Post {
  constructor(data) {
    this.body = data.body
    this.date = data.date || new Date().toLocaleDateString("en-Us");
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