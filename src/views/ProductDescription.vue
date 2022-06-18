<template>
  <div class="productdescription">
    <div class="floating-back-btn" @click="$router.push('/product_list')">
      <img src="../assets/icons/return_arrow_icon.svg" alt="">
    </div>
    <img class="product-image" :src="current_product.image" alt="">
    <div class="product-detail">
      <div class="product-name">
        {{current_product.name}}
      </div>
      <div class="product-price">
        ¥ {{current_product.price}} -
      </div>
      <div class="product-description">
        {{current_product.description}}
      </div>
    </div>
    <div class="product-counter">
      <div class="counter-btn" @click="counterUpdate(-1)">
        <img src="../assets/icons/minus_icon.svg" alt="">
      </div>
      <div class="count-text">
        {{num_counter}}
      </div>
      <div class="counter-btn" @click="counterUpdate(1)">
        <img src="../assets/icons/plus_icon.svg" alt="">
      </div>
    </div>
    <div class="add-cart-btn" @click="addCart_changePage()">
      <img src="../assets/icons/white_cart_icon.svg" alt="">
      カートに追加
    </div>
  </div>
</template>

<script>
// import { create } from 'domain';

export default {
  name: "Registration",
  components: {
  },
  data() {
    return {
      num_counter:0
    }
  },
  methods: {
    counterUpdate(diff){
      this.num_counter += diff;
      if(this.num_counter < 0){
        this.num_counter = 0;
      }
    },
    addCart_changePage(){
      this.$store.commit('appendCart',{
        id:this.current_product.id,
        image:this.current_product.image,
        name:this.current_product.name,
        price:this.current_product.price,
        description:this.current_product.description,
        store_id:this.current_product.store_id,
        stock:this.current_product.stock,
        num_counter:this.num_counter
      });
      this.$router.push('/cart_check')
    },
  },
  computed :{
    current_product: function(){
      return this.$store.state.latest_product
    }
  }
};
</script>


<style scoped lang="scss">
.productdescription{
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  position: relative;
  .floating-back-btn{
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    background-color: #FFFFFFCC;
    width: 40px;
    height: 40px;
    border-radius: 99px;
    left: 15px;
    top: 65px;
    z-index: 1000;
    img{
      width: 35px;
      height: 35px;
    }
  }
  .product-image{
    width: 100%;
    max-height: 300px;
  }
  .product-detail{
    width: 80%;
    .product-name{
      color: #444444;
      font-size: 20px;
      font-weight: bolder;
      margin: 9px 0;
    }
    .product-price{
      color: #FF7700;
      font-size: 20px;
      font-weight: bolder;
      margin: 9px 0
    }
    .product-description{
      color: #444444;
      font-size: 15px;
      font-weight: bolder;
      margin: 9px 0
    }
  }
  .product-counter{
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    width: 80%;
    margin: 30px 0;
    .counter-btn{
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: #DCDCDC;
      width: 40px;
      height: 40px;
      border-radius: 99px;
      img{
        width: 25px;
        height: 25px;
      }
    }
    .count-text{
      color: #444444;
      font-size: 20px;
      font-weight: bolder;
      margin: 9px 0;
    }
  }
  .add-cart-btn{
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 80%;
    height: 50px;
    color: #FFFFFF;
    font-size: 19px;
    font-weight: bolder;
    background-color: #FF7700;
    margin: 30px 0;
    border-radius: 99px;
    position: relative;
    img{
      position: absolute;
      width: 30px;
      height: 30px;
      left: 30px;
    }
  }
}
</style>