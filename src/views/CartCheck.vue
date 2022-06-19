<template>
  <div class="cartcheck">
    <div class="list-container">
      <div class="list-header">
        商品一覧
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
      <div class="add-order-btn" @click="$router.push('/')">
        <img src="../assets/icons/orange_plus_icon.svg" alt="">
        <span>注文を追加</span>
      </div>
    </div>
    <div class="errander-list-container">
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
    </div>
    <div class="submit-btn" @click="submitErrand()">
      <img src="../assets/icons/white_shopping_bug.svg" alt="">
      お遣いをお願いする
    </div>
  </div>
</template>

<script>
import TokenIO from '../utils/TokenIO'

export default {
  name: "Registration",
  components: {
  },
  data() {
    return {
      current_name:"",
      child_id:"",
      children: {},
    }
  },
  methods: {
    updateErrander (name) {
      this.current_name = name
    },
    submitErrand(){
      let postBuyList = []
      console.log(this.product_lists);

      for(let key in this.product_lists){

        console.log(String(this.product_lists[key].id))
        console.log(String(this.product_lists[key].num_counter))

        postBuyList.push({
          "product_id":String(this.product_lists[key].id),
          "num":String(this.product_lists[key].num_counter)
        })
      }

      console.log({
          "buy_list": postBuyList,
          "child_id": this.child_id,
        })
      this.axios.post(
        '/api/request/register',
        {
          "buy_list": postBuyList,
          "child_id": this.child_id.value,
        },
        // {
        //   "buy_list": [
        //       {
        //         "product_id":"1",
        //         "num":"1"
        //       }
        //     ],
        //   "child_id": "3b7ca9f0-32a1-45b8-8c97-84eed52f5100"
        // },
        {headers: {Authorization: 'Bearer ' + TokenIO.getToken()}},
      ).then((res) => {
          console.log(res)
          this.$router.push('/order_check')
        }).catch((err) => {
          console.log(err.detail)
          // alert("お店が登録されていないようです。")
          // this.$router.push('/')
        })
    }
  },
  computed :{
    product_lists: function(){
      return this.$store.state.cart_lists;
    }
  },
  async mounted () {
    // 登録されている子供の情報を取得
    const res = await this.axios.get(
      '/api/parent/get/children',
      {headers: {Authorization: 'Bearer ' + TokenIO.getToken()}},
    )

    if (res.status  === 200) {
      console.log(res)
      this.children = res.data
      this.current_name = this.children[0].name
      this.child_id = this.children[0].id
      console.log(this.child_id)
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