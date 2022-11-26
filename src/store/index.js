import { createStore } from 'vuex'

export default createStore({
  state: {
    products:[
      {id: 'coffee01', name: '一號咖啡', price: 55, img: 'https://images.pexels.com/photos/350478/pexels-photo-350478.jpeg?auto=compress&cs=tinysrgb&w=600'},
      {id: 'coffee02', name: '二號咖啡', price: 45, img: 'https://images.pexels.com/photos/3880909/pexels-photo-3880909.jpeg?auto=compress&cs=tinysrgb&w=600'},
      {id: 'coffee03', name: '三號咖啡', price: 65, img: 'https://images.pexels.com/photos/13546337/pexels-photo-13546337.jpeg?auto=compress&cs=tinysrgb&w=600'},
      {id: 'coffee04', name: '四號咖啡', price: 75, img: 'https://images.pexels.com/photos/6858664/pexels-photo-6858664.jpeg?auto=compress&cs=tinysrgb&w=600'},
      {id: 'coffee05', name: '五號咖啡', price: 85, img: 'https://images.pexels.com/photos/5192027/pexels-photo-5192027.jpeg?auto=compress&cs=tinysrgb&w=600'},
      {id: 'coffee06', name: '六號咖啡', price: 95, img: 'https://images.pexels.com/photos/12756108/pexels-photo-12756108.jpeg?auto=compress&cs=tinysrgb&w=600'},
      {id: 'coffee07', name: '七號咖啡', price: 35, img: 'https://images.pexels.com/photos/10026524/pexels-photo-10026524.png?auto=compress&cs=tinysrgb&w=600'},
      {id: 'coffee08', name: '八號咖啡', price: 25, img: 'https://images.pexels.com/photos/1694874/pexels-photo-1694874.jpeg?auto=compress&cs=tinysrgb&w=600'},
    ],
    carts: [],
  },
  getters: {
  },
  mutations: {

    initLocalStorage(state) {
      // 判斷如果為空就創立一個 避免抓取購物車沒資料報錯誤
      if(localStorage.getItem('carts') === null) {
        localStorage.setItem('carts', JSON.stringify(state.carts))
      }
      state.carts = JSON.parse(localStorage.getItem('carts'));
    },

    // 取得購物車
    getLocalStorage(state) {
      state.carts = JSON.parse(localStorage.getItem('carts'));
    },

    // 加入購物車
    addCart(state, data) {
      state.carts.push(data)
      localStorage.setItem('carts', JSON.stringify(state.carts))
    },

    // 清空 LocalStorage
    clearCart(state) {
      localStorage.clear();
      state.carts = [];
      localStorage.setItem('carts', JSON.stringify(state.carts))
    },
  },
  actions: {
  },
  modules: {
  }
})
