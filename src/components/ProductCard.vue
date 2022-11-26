<template>
  <div class="wrap">
    <div class="card" v-for="p in ProductList" :key="p.id">
      <img :src="p.img"
        alt="">
      <h3> {{ p.name }} <span>${{ p.price }}</span></h3>
      <button @click="addCart(p)">加入購物車</button>
    </div>

  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  computed: {
    ProductList() {
      return this.$store.state.products
    }
  },
  methods:{
    addCart(p) {
      this.$store.commit('addCart', p)
    }
  },
}
</script>

<style scoped>
.wrap{
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
 /* border: 1px solid #fa0; */
}
.card {
  width: 300px;
  border: 3px solid #fff;
  border-radius: .25rem;
  overflow: hidden;
  margin: 10px;
  display: inline-block;

}

.card img {
  width: 100%;
}

.card h3 {
  text-align: center;
  font-size: 1.5rem;
}

.card button {
  width: 100%;
  padding: .5rem;
  border: none;
  background: rgb(252, 180, 36);
  cursor: pointer;
}

.card button:hover{
  background: rgb(254, 192, 68);
}
</style>