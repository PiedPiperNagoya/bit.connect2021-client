<template>
  <div class="cartcheck">
    <div class="list-container">
      <div class="list-header">
        注文内容
      </div>
      <div class="product-card" v-for="product_info in product_lists" :key="product_info.key">
        <div class="product-count">
          {{product_info.num_counter}}
        </div>
        <img class="product-image" :src="product_info.image" alt="">
        <div class="product-detail">
          <div class="product-title">
            {{product_info.name}}
          </div>
          <div class="product-price">
            ¥ {{product_info.price}} -
          </div>
          <div class="product-description">
            {{product_info.description}}
          </div>
        </div>
      </div>
      <!-- <div class="add-order-btn" @click="$router.push('/')">
        <img src="../assets/icons/orange_plus_icon.svg" alt="">
        <span>注文を追加</span>
      </div> -->
    </div>
    <!-- <div class="errander-list-container">
      <div class="errand-title">
        お遣い担当
      </div>
      <div class="errander-list">
        <div class="errander" v-for="(child, i) in children" :key="i" @click="updateErrander(child.name)">
          <div class="radio-switch">
            <div class="radio-bg" />
            <div class="radio-active" v-if="child.name == current_name" />
          </div>
          <div class="name">
            {{ child.name.value }}
          </div>
          <div class="honorific">
            {{ child.gender.value === 'boy' ? 'くん' : child.gender.value === 'girl' ? 'ちゃん' : 'さん' }}
          </div>
        </div>
      </div>
    </div> -->
    <div class="homeback-btn" @click="$router.push('/')">
      <img src="../assets/icons/white_shopping_bug.svg" alt="">
      ホームへ戻る
    </div>
  </div>
</template>

<script>
// import TokenIO from '../utils/TokenIO'

export default {
  name: "Registration",
  components: {
  },
  data() {
    return {
      current_name:"",
      children: {},
    }
  },
  methods: {
    updateErrander (name) {
      this.current_name = name
    },
  },
  computed :{
    product_lists: function(){
      return this.$store.state.cart_lists;
    }
  },
  
};
</script>


<style scoped lang="scss">
.cartcheck{
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  height: 100vh;
  position: relative;
  .list-container{
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    width: 85%;
    .list-header{
      color: #000000;
      font-size: 19px;
      font-weight: bold;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: flex-start;
      width: 100%;
      margin: 25px 0;
    }
    .product-card{
      display: flex;
      flex-direction: row;
      justify-content: flex-start;
      align-items: center;
      width: 100%;
      margin-bottom: 15px;
      position: relative;
      .product-count{
        color: #FFFFFF;
        font-size: 14px;
        font-weight: bolder;
        background-color: #FF7700;
        display: flex;
        justify-content: center;
        align-items: center;
        position: absolute;
        width: 25px;
        height: 25px;
        border-radius: 99px;
        left: -3px;
        bottom: -3px;
      }
      .product-image{
        width: 80px;
        height: 80px;
      }
      .product-detail{
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: flex-start;
      width: calc(100% - 90px);
        margin-left: 10px;
        .product-title{
          color: #444444;
          font-size: 15px;
          font-weight: bolder;
        }
        .product-price{
          color: #FF7700;
          font-size: 15px;
          font-weight: bolder;
        }
        .product-description{
          color: #444444;
          font-size: 12px;
          font-weight: bolder;
        }
      }
    }
    .add-order-btn{
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      margin-bottom: 30px;
      img{
        width: 15px;
        height: 15px;
      }
      span{
        color: #FF7700;
        font-size: 15px;
        font-weight: bolder;
        margin-left: 3px;
      }
    }
  }
  .errander-list-container{
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    width: 85%;
    .errand-title{
      color: #000000;
      font-size: 19px;
      font-weight: bold;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: flex-start;
      width: 100%;
    }
    .errander-list{
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: flex-start;
      width: 100%;
      .errander{
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: flex-end ;
        margin: 5px 0;
        .radio-switch{
          display: flex;
          justify-content: center;
          align-items: center ;
          position: relative;
          margin-right: 5px;
          .radio-bg{
            width: 20px;
            height: 20px;
            border-radius: 99px;
            border: solid 1px #000000;
          }
          .radio-active{
            width: 15px;
            height: 15px;
            border-radius: 99px;
            background-color: #FF7700;
            position: absolute;
          }
        }
        .name{
          color: #000000;
          font-size: 16px;
          font-weight: bold;
        }
        .honorific{
          color: #000000;
          font-size: 12px;
          font-weight: bolder;
          margin-left: 2px;
        }
      }
    }
  }
  .homeback-btn{
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 85%;
    height: 50px;
    color: #FFFFFF;
    font-size: 19px;
    font-weight: bolder;
    background-color: #FF7700;
    margin: 30px 0;
    border-radius: 99px;
    position: absolute;
    bottom: 70px;
    img{
      position: absolute;
      width: 30px;
      height: 30px;
      left: 30px;
    }
  }
}
</style>