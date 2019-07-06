import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex); //Vue Plugin 기능 이용 
// 뷰를 글로벌 펑셔널리티 이용시 사용 this.$store를 이용가능

export default new Vuex.Store({
  state: {
    headerText: "TODO it!",
    
  }
});
