<template>
  <div class="productlist">
    <div class="floating-back-btn" @click="$router.push('/')" >
      <img src="../assets/icons/return_arrow_icon.svg" alt="">
    </div>
    <div class="floating-cart-btn" @click="$router.push('/cart_check')">
      <img src="../assets/icons/white_add_cart_icon.svg" alt="">
      <div class="alert-circle" />
    </div>
    <div class="store-profile">
      <div class="seller-container">
      <img class="seller-image" :src="seller_image" alt="">
        <div class="seller-description">
          <div class="store-name">
            {{store_name}}
          </div>
          <div class="seller-name">
            <span class="role">担当</span>{{seller_name}}さん
          </div>
        </div>
      </div>
      <img class="profile-back-image" :src="store_image" alt="">
      <div class="store-data-container">
        <div class="store-data">
          <div class="label">お店まで</div>
          <div class="value">
            {{store_distance}}<span class="unit">km</span>
          </div>
        </div>
        <div class="store-data">
          <div class="label">所要時間</div>
          <div class="value">
            {{time_requierd}}<span class="unit">分</span>
          </div>
        </div>
        <div class="store-data">
          <div class="label">カテゴリ</div>
          <div class="category-container">
            <div class="category">
            {{category}}
            </div>
          </div>
        </div>
      </div>
      <div class="self-introduction">
        {{store_description}}
      </div>
    </div>
    <div class="list-container">
      <div class="list-header">
        商品一覧
      </div>
      <div class="product-card" v-for="product_info in product_lists" :key="product_info.key" @click="viewDescription(product_info)">
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
      store_image:"https://violet.tokyo/hodaka/wp-content/uploads/2017/03/o0497033011732104753.jpg",
      store_name:"デザートパラダイス",
      seller_name:"山田 太郎",
      seller_image:"https://pakutaso.cdn.rabify.me/shared/img/thumb/OK100_hitotuuenootoko20141221135054.jpg.webp?d=1420",
      store_distance:"1.0",
      time_requierd:"12",
      category:"デザート",
      store_description:"鷗外記念館の中にある落ち着いた雰囲気のカフェです。 沙羅の木や三人冗語の石など鷗外ゆかりの庭園を眺めな がら、ゆっくりとお茶を楽しむことができます。 店内はベビーカーも入れるよう通路を広くしており、またお子 様用のもご用意しておりますので、お子様連れの方もお気 軽にお越しください。",
      product_lists:[
        {
          id:"12345",
          image:"https://media.delishkitchen.tv/article/244/kys90by72i.jpeg?version=1648629800",
          name:"paンケーキ",
          price:"1,200",
          description:"静岡県産のハチミツを贅沢に使用した特製のホット ケーキです。",
          store_id:'67890',
          stock:60
        },
        {
          id:"12346",
          image:"https://media.delishkitchen.tv/article/244/kys90by72i.jpeg?version=1648629800",
          name:"paンケーキ2",
          price:"1,200",
          description:"静岡県産のハチミツを贅沢に使用した特製のホット ケーキです。",
          store_id:'67890',
          stock:60
        },
        {
          id:"12347",
          image:"https://media.delishkitchen.tv/article/244/kys90by72i.jpeg?version=1648629800",
          name:"paンケーキ3",
          price:"1,200",
          description:"静岡県産のハチミツを贅沢に使用した特製のホット ケーキです。",
          store_id:'67890',
          stock:60
        }
      ]
    }
  },
  methods: {
    viewDescription(target) {
      this.$store.commit('updateLatestProduct',target);
      this.$router.push('/product_description')
    },
  }
};
</script>


<style scoped lang="scss">
.productlist{
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
  .floating-cart-btn{
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    background-color: #FF7700;
    width: 60px;
    height: 60px;
    border-radius: 99px;
    right: 20px;
    bottom: 15px;
    z-index: 1000;
    box-shadow: #00000029 0 3px 6px;
    img{
      width: 40px;
      height: 40px;
    }
    .alert-circle{
      position: absolute;
      width: 15px;
      height: 15px;
      border-radius: 99px;
      background-color: #00CBFF;
      top: -1px;
      right: -1px;
    }
  }
  .store-profile{
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    width: 100%;
    position: relative;
    .seller-container{
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      width: 85%;
      height: 60px;
      position: absolute;
      top: 180px;
      .seller-image{
        width: 60px;
        height: 60px;
        border-radius: 99px;
        position: absolute;
        left: 0px;
      }
      .seller-description{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
        background-color: #FFFFFFCC;
        box-shadow: #00000029 0 3px 6px;
        border-radius: 6px;
        padding: 3px 3px 3px 50px;
        margin-left: 30px;
        width: 100%;
        .store-name{
          font-size: 17px;
          font-weight: bold;
        }
        .seller-name{
          font-size: 14px;
          .role{
            margin-right: 5px;
            font-size: 12px;
            color:#FF7700;
          }
        }
      }
    }
    .profile-back-image{
      width: 100%;
      height: 210px;
      border-radius: 0 0 30px 30px;
    }
    .store-data-container{
      display: flex;
      flex-direction: row;
      justify-content: space-evenly;
      align-items: flex-start;
      width: 85%;
      height: 55px;
      margin: 50px 0 20px 0;
      .store-data{
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
        height: 100%;
        .label{
          color: #444444;
          font-size: 12px;
        }
        .value{
          height: 36px;
          font-size: 25px;
          font-weight: bold;
          color: #000000;
          .unit{
            margin-left: 5px;
            font-size: 15px;
          }
        }
        .category-container{
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          height: 36px;
          .category{
            padding: 2px 15px;
            font-size: 11px;
            color: red;
            border: solid 1px red;
            border-radius: 99px;

          }
        }

      }
    }
    .self-introduction{
      width: 85%;
      font-size: 15px;
    }
  }
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
      margin: 25px 0 15px 0;
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
  }
}
</style>