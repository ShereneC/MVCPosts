let _state = {
  posts: []
};

class Store {
  get State() {
    return _state;
  }

  commit(prop, data) {
    _state[prop] = data;
  }
}

const store = new Store();
export default store;