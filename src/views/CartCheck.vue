<template>
  <div class="cartcheck">
    <div class="list-container">
      <div class="list-header">
        商品一覧
      </div>
      <div class="product-card" v-for="product_info in product_lists" :key="product_info.key">
        <img class="product-image" :src="product_info.product_image" alt="">
        <div class="product-detail">
          <div class="product-title">
            {{product_info.product_name}}
          </div>
          <div class="product-price">
            ¥ {{product_info.product_price}} -
          </div>
          <div class="product-description">
            {{product_info.product_description}}
          </div>
        </div>
      </div>
      <div class="add-order-btn">
        <img src="../assets/icons/orange_plus_icon.svg" alt="">
        <span>注文を追加</span>
      </div>
    </div>
    <div class="errander-list-container">
      <div class="errand-title">
        お遣い担当
      </div>
      <div class="errander-list">
        <div class="errander" v-for="errander_info in errander_lists" :key="errander_info.key" @click="updateErrander(errander_info.errander_name)">
          <div class="radio-switch">
            <div class="radio-bg" />
            <div class="radio-active" v-if="errander_info.errander_name == current_errander" />
          </div>
          <div class="name">
            {{errander_info.errander_name}}
          </div>
          <div class="honorific">
            {{errander_info.honorific}}
          </div>
        </div>
      </div>
    </div>
    <div class="submit-btn">
      <img src="../assets/icons/white_shopping_bug.svg" alt="">
      お遣いをお願いする
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
      current_errander:"",
      errander_lists:[
        {
          errander_name:"たつや",
          honorific:"くん"
        },
        {
          errander_name:"りょうが",
          honorific:"くん"
        },
        {
          errander_name:"よしはる",
          honorific:"くん"
        },
        {
          errander_name:"りしゅん",
          honorific:"くん"
        },
        {
          errander_name:"さき",
          honorific:"ちゃん"
        },
      ],
      product_lists:[
        {
          product_image:"https://media.delishkitchen.tv/article/244/kys90by72i.jpeg?version=1648629800",
          product_name:"paンケーキ",
          product_price:"1,200",
          product_description:"静岡県産のハチミツを贅沢に使用した特製のホット ケーキです。"
        },
        {
          product_image:"https://media.delishkitchen.tv/article/244/kys90by72i.jpeg?version=1648629800",
          product_name:"paンケーキ",
          product_price:"1,200",
          product_description:"静岡県産のハチミツを贅沢に使用した特製のホット ケーキです。"
        },
        {
          product_image:"https://media.delishkitchen.tv/article/244/kys90by72i.jpeg?version=1648629800",
          product_name:"paンケーキ",
          product_price:"1,200",
          product_description:"静岡県産のハチミツを贅沢に使用した特製のホット ケーキです。"
        }
      ]
    }
  },
  methods: {
    updateErrander(target){
      this.current_errander = target;
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
  },
  created(){
    this.updateErrander(this.errander_lists[0].errander_name)
  }
};
</script>


<style scoped lang="scss">
.cartcheck{
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  position: relative;
  .list-container{
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    width: 85%;
    margin-top: 60px;
    .list-header{
      color: #000000;
      font-size: 19px;
      font-weight: bold;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: flex-start;
      width: 100%;
      margin: 30px 0 25px 0;
    }
    .product-card{
      display: flex;
      flex-direction: row;
      justify-content: flex-start;
      align-items: center;
      width: 100%;
      margin-bottom: 15px;
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
  .submit-btn{
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