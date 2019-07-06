<template>
  <div id="app">
    <TodoHeader></TodoHeader>
    <!-- <TodoInput v-on:하위 컴포넌트에서 발생시킨 이벤트 이름="현재 컴포넌트의 메소드 명"></TodoInput> -->
    <TodoInput v-on:addTodoItem="addOneItem" ></TodoInput>
    <TodoList 
      v-bind:propsData="todoItems" 
      v-on:removeItem="removeOneItem" 
      v-on:toggleItem="toggleOneItem">
    </TodoList>
    <TodoFooter v-on:clearTodoItem="clearAllItem"></TodoFooter>
  </div>
</template>


<script>
import TodoHeader from './components/TodoHeader.vue';
import TodoInput from './components/TodoInput.vue';
import TodoList from './components/TodoList.vue';
import TodoFooter from './components/TodoFooter.vue';

export default {

  components: {
    Todoheader,
    TodoInput,
    TodoList,
    TodoFooter
  },
  data() {
    return {
      todoItems:[],
    }
  },
  methods: {
    addOneItem(todoItem) {
      const obj = {
        completed: false,
        item: todoItem
      }
      localStorage.setItem(todoItem, JSON.stringify(obj));
      this.todoItems.push(obj);
      console.log(this.todoItems);
    },
    removeOneItem(todoItem, index) {
      localStorage.removeItem(todoItem.item);
      this.todoItems.splice(index, 1);
      console.log('removeOneItem');
    },
    toggleOneItem(todoItem, index){
      this.todoItems[index].completed = !this.todoItems[index].completed
      localStorage.removeItem(todoItem.item);
      localStorage.setItem(todoItem.item, JSON.stringify(todoItem)); 
    },
    clearAllItem() {
      localStorage.clear();
      this.todoItems = [];
    }
  },
  created() {
    if(localStorage.length > 0) {
      for (let i = 0 ; i < localStorage.length; i++) {
        if (localStorage.key(i) !== 'loglevel:webpack-dev-server') {
          this.todoItems.push(JSON.parse(localStorage.getItem(localStorage.key(i))));
          //this.todoItems.push(localStorage.key(i));
        }     
      }
    }
  },
}
</script>
<style>
body {
  text-align: center;
  background-color: #F6F6F8;
}
input {
  border-style: groove;
  width: 200px;
}
button {
  border-style: groove;
}
.shadow {
  box-shadow: 5px 10px 10px rgba(0, 0, 0, 0.03)
}
</style>
