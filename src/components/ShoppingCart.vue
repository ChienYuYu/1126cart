<template>
  <div>
    <a href="#" class="cart-icon" @click.prevent="showHideList">
    <span v-if="getLocalStorage.length !== 0"> {{ getLocalStorage.length }}</span>
    &#128722;
  </a>
  <ul class="cart-list" v-if="showList">
    <li><h3>購物車</h3></li>
    <li v-for="p in getLocalStorage" :key="p.id">
      {{ p.name }} / ${{ p.price }}
    </li>
    <li><button @click="clearCart">清空購物車</button></li>
  </ul>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        showList: false,
      };
    },
    computed: {
      getLocalStorage() {
        return this.$store.state.carts
      }
    },
    methods: {
      showHideList() {
        this.showList = !this.showList
      },
      clearCart() {
        this.$store.commit('clearCart')
        this.showList = false;
      }
    },
  }
</script>

<style scoped>
  .cart-icon{
    background: #ccc;
    padding: .5rem;
    font-size: 2rem;
    border-radius: 50%;
    position: fixed;
    right: 2%;
    bottom: 5%;
    transition: .2s;
  }
  .cart-icon:hover{
    background: #fc6;
  }

  .cart-icon span{
    position: absolute;
    right: -5px;
    top: -15px;
    color: #f00;
  }

  .cart-list {
    position: fixed;
    max-height: 300px;
    overflow:auto;
    right: 5%;
    bottom: 10%;
    background: #fff;
    padding: 1rem;
    border-radius: .25rem;
    box-shadow: 3px 3px 5px #ccc;
  }
  
  .cart-list li{
    padding: .5rem 0;
    border-bottom: 1px solid #000;
  }
</style>