<template>
  <div class="productdescription">
    <div class="floating-back-btn" >
      <img src="../assets/icons/return_arrow_icon.svg" alt="">
    </div>
    <img class="product-image" :src="product_image" alt="">
    <div class="product-detail">
      <div class="product-name">
        {{product_name}}
      </div>
      <div class="product-price">
        ¥ {{product_price}} -
      </div>
      <div class="product-description">
        {{product_description}}
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
    <div class="add-cart-btn">
      <img src="../assets/icons/white_cart_icon.svg" alt="">
      カートに追加
    </div>
  </div>
</template>

<script>
export default {
  name: "Registration",
  components: {
  },
  data() {
    return {
      product_image:"https://media.delishkitchen.tv/article/244/kys90by72i.jpeg?version=1648629800",
      product_name:"paンケーキ",
      product_price:"1,200",
      product_description:"静岡県産のハチミツを贅沢に使用した特製のホット ケーキです。",
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
    fetchProductList() {
      // this.axios.get(
      //   '/api/',
      //   {
      //     username: this.username,
      //     password: this.password,
      //     account_type: this.account_type,
      //   },
      // ).then((res) => {
      //   console.log(res)
      // }).catch((err) => {
      //   console.log(err.detail)
      // })

    },
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
    top: 10px;
    z-index: 1000;
    img{
      width: 35px;
      height: 35px;
    }
  }
  .product-image{
    width: 100%;
    max-height: 300px;
    margin-top: 60px;
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