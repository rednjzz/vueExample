import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex); //Vue Plugin 기능 이용 
// 뷰를 글로벌 펑셔널리티 이용시 사용 this.$store를 이용가능

const storage = {
  fetch() {
    const arr = [];
    if (localStorage.length > 0) {
      for (let i = 0 ; i < localStorage.length; i++) {
        if (localStorage.key(i) !== 'loglevel:webpack-dev-server') {
          arr.push(JSON.parse(localStorage.getItem(localStorage.key(i))));
          //this.todoItems.push(localStorage.key(i));
        }     
      }
    }
    return arr;
  },
}

export default new Vuex.Store({
  state: {
    todoItems: storage.fetch()
  },
  mutations: {
    addOneItem(state, todoItem) {
      const obj = {
        completed: false,
        item: todoItem
      }
      console.log(todoItem);
      localStorage.setItem(todoItem, JSON.stringify(todoItem));
      state.todoItems.push(obj);
      console.log(obj);
    },
    removeOneItem(state, {todoItem, index}) {
      localStorage.removeItem(todoItem.item);
      state.todoItems.splice(index, 1);
    },  
    toggleOneItem(state, {todoItem, index}){
      state.todoItems[index].completed = !state.todoItems[index].completed
      localStorage.removeItem(todoItem.item);
      localStorage.setItem(todoItem.item, JSON.stringify(todoItem)); 
    },
    clearAllItem(state) {
      localStorage.clear();
      state.todoItems = [];
    }
  }
});
