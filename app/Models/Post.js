export default class Post {
  constructor(data) {
    this.id = data.id || generateId();
    this.body = data.body;
    this.date = data.date || new Date().toLocaleDateString("en-Us");
  }

  get Template() {
    return `
      <div class="post">
    <h4>${this.date}</h4>
    <p>
      ${this.body}
    </p>
    <button onclick="app.postController.delete(${this.id})">Delete</button>
  </div>
    `
  }
}

function generateId() {
  return Math.floor(Math.random() * 10000);
}