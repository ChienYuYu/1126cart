<template>
  <div class="wrapper">
    <div class="navbar">
      <h1>logo</h1>
      <nav>
        <a href="#">link</a>
        <a href="#">link</a>
        <a href="#">link</a>
        <a href="#">link</a>
        <a href="#">link</a>
      </nav>
    </div>
    <div class="main">
      <ProductCard></ProductCard>
    </div>
  </div>
  <ShoppingCart></ShoppingCart>
</template>

<script>
import ProductCard from '@/components/ProductCard.vue';
import ShoppingCart from '@/components/ShoppingCart.vue';

export default {
  components: { ProductCard, ShoppingCart },
}
</script>

<style>

*{
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  list-style: none;
  text-decoration: none;
}
  .wrapper{
    width: 100%;
    min-height: 100vh;
    background: #ededed;
  }

  .wrapper .navbar{
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: #555;
    padding: 0 2rem;
  }
  .navbar h1{
    color: #efefef;
  }
  .navbar nav a{
    display:inline-block;
    padding: 15px 20px;
    color: #efefef;
  }

  /* ------------------------- */
  .main{
    width: 80%;
    margin: 2rem auto;
    /* border: 1px solid #222; */
  }
  /* ------------------------- */
</style>
