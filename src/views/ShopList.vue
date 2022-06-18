<template>
  <div class="shop_list">
    <div class="shop"
      v-for="(shop, i) in shop_list"
      :key="i"
      @click="$router.push('/product_list/' )"
      >
<!-- @click="$router.push('/product_list/' + id)" -->
      <img :src="shop.image" alt="お店の写真" class="shop_img">
      <div class="name"> {{ shop.name }} </div>
      <div class="location">
        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 50 40"><path d="M24 33.1Q29.2 28.9 31.85 25.025Q34.5 21.15 34.5 17.8Q34.5 14.85 33.425 12.8Q32.35 10.75 30.775 9.45Q29.2 8.15 27.35 7.575Q25.5 7 24 7Q22.5 7 20.65 7.575Q18.8 8.15 17.225 9.45Q15.65 10.75 14.575 12.8Q13.5 14.85 13.5 17.8Q13.5 21.15 16.15 25.025Q18.8 28.9 24 33.1ZM24 36.9Q17.15 31.75 13.825 27.05Q10.5 22.35 10.5 17.8Q10.5 14.4 11.725 11.825Q12.95 9.25 14.9 7.5Q16.85 5.75 19.25 4.875Q21.65 4 24 4Q26.35 4 28.75 4.875Q31.15 5.75 33.1 7.5Q35.05 9.25 36.275 11.825Q37.5 14.4 37.5 17.8Q37.5 22.35 34.175 27.05Q30.85 31.75 24 36.9ZM24 21Q25.45 21 26.475 19.975Q27.5 18.95 27.5 17.5Q27.5 16.05 26.475 15.025Q25.45 14 24 14Q22.55 14 21.525 15.025Q20.5 16.05 20.5 17.5Q20.5 18.95 21.525 19.975Q22.55 21 24 21ZM10.5 44V41H37.5V44ZM24 17.8Q24 17.8 24 17.8Q24 17.8 24 17.8Q24 17.8 24 17.8Q24 17.8 24 17.8Q24 17.8 24 17.8Q24 17.8 24 17.8Q24 17.8 24 17.8Q24 17.8 24 17.8Q24 17.8 24 17.8Q24 17.8 24 17.8Q24 17.8 24 17.8Q24 17.8 24 17.8Z"/></svg>
        <span>
          {{ shop.distance }} km
        </span>
        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 50 40"><path d="M27 10.3Q25.5 10.3 24.425 9.225Q23.35 8.15 23.35 6.65Q23.35 5.15 24.425 4.075Q25.5 3 27 3Q28.5 3 29.575 4.075Q30.65 5.15 30.65 6.65Q30.65 8.15 29.575 9.225Q28.5 10.3 27 10.3ZM13.9 46 19.75 16.55 14.65 18.85V25.5H11.6V16.85L21.2 12.8Q22.6 12.2 24.225 12.5Q25.85 12.8 26.7 14.05L28.8 17.35Q30.1 19.45 32.375 20.975Q34.65 22.5 37.65 22.5V25.5Q34.3 25.5 31.675 23.975Q29.05 22.45 26.8 19.4L24.75 27.2L29.35 31.35V46H26.35V34L20.95 29.1L17 46Z"/></svg>
        <span>
          {{ shop.walking_time }} 分
        </span>
      </div>
      <div class="category"> {{ shop.category }} </div>

      <!-- <img
        :src="icon"
        :alt="name"
        class="icon"> -->
      </div>
  </div>
</template>

<script>
import {Loader} from 'google-maps';

export default {
  name: "ShopList",
  components: {
  },
  data() {
    return {
      current_location: {
        latitude: '',
        longtitude: ''
      },
      shop_list:[],
      shop_info :{
        id: 'id001',         // 店毎のID
        name: '八百屋さん',        // 店名
        description: '説明文', // 説明文
        category: '野菜',    // 野菜とか
        image: 'https://thumb.photo-ac.com/f0/f006678196677c302cb96518691fd369_w.jpeg',       // お店のサムネ
        latitude:'35.71741598648972',   // 緯度
        longitude: '139.76576362209076',   // 経度
        owner_name: 'オーナー',  //店主の名前
        owner_icon: 'https://thumb.photo-ac.com/8d/8db1e4c3c0bc1f10de7ec32216ad2309_w.jpeg',  //店主の画像
        tel: '080-1234-5678',       // お店の電話番号  
        distance: 1.0,
        walking_time: 15,
      }
      // shop_info :{
      //   store_id: '',   // 店毎のID
      //   store_name: '', // 店名
      //   category: '',   // 野菜とか
      //   img: 'https://thumb.photo-ac.com/f0/f006678196677c302cb96518691fd369_w.jpeg',        // お店のサムネ
      //   location:[],    // [緯度, 軽度]
      //   owner_name: '',  //店主の名前
      //   owner_icon: 'https://thumb.photo-ac.com/8d/8db1e4c3c0bc1f10de7ec32216ad2309_w.jpeg'   //店主の画像
      // }
    }
  },
  created() {
  },
  mounted(){
    // TODO 以下ループ削除
    for (let i=0; i<10; i++){
      this.shop_list.push(this.shop_info);
    }
    // TODO お店情報一覧取得
    // this.axios.get(
    //   `/api/store/list`,
    // ).then((res) => {
    //   this.shop_list = res;
    //   console.log(this.shop_list);
    // }).catch((err) => {
    //   console.log(err)
    // })
    // TODO 距離、時間所得
    this.proc()
    // this.getWalkingTime()
  },
  methods: {
    getCurrentLocation:async function() {
      if (navigator.geolocation) {
        return new Promise(resolve => {
        navigator.geolocation.getCurrentPosition(
          function(position){
            let coords = position.coords;
            // 緯度経度だけ取得
            this.current_location.latitude = coords.latitude;
            this.current_location.longitude = coords.longitude;
            resolve(this.current_location)
          }.bind(this),
          function(error) {
            // エラー処理を書く
            switch (error.code) {
              case 1: //PERMISSION_DENIED
                alert('位置情報の利用が許可されていません')
                break
              case 2: //POSITION_UNAVAILABLE
                alert('現在位置が取得できませんでした')
                break
              case 3: //TIMEOUT
                alert('タイムアウトになりました')
                break
              default:
                alert('現在位置が取得できませんでした')
                break
            }
          }
        );
        })
      } else {
        // エラー処理を書く
        alert('現在位置が取得できませんでした')
      }
    },
    getDistance(current_location, shop_info) {
      console.log('距離計算');
      const axios = this.axios
      const api_key = 'AIzaSyAGspF4mskwp2WI-xTIS3IFb8d0szQE-Ts'
      const loader = new Loader(api_key);
      loader.load().then(function (google) {
        const origin = new google.maps.LatLng( current_location.latitude, current_location.longitude)
        var destination = new google.maps.LatLng( shop_info.latitude, shop_info.longitude)
        var param = `origin=${origin}&destination=${destination}&travelMode=WALKING&key=${api_key}`
        console.log(param)
        return param
      }).then((param) => {
        console.log(param)
        axios.get(
          `https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/directions/json?${param}`
        ).then((res) => {
          console.log(res)
        }).catch((err) => {
          console.log(err.response.data.messages)
        })
      });
        // DirectionsLegオブジェクトのdistance.value(m)と、duration.value(秒)が知りたい

    },
    getWalkingTime() {
      console.log('時間計算');
    },
    async proc(){
      const current_location = await this.getCurrentLocation()
      // TODO 店の数だけfor
      this.getDistance(current_location, this.shop_info)
    }
    
  }

};
</script>

<style scoped lang="scss">
  .shop_list{
    position: fixed;
    top: 60px;
    width: 100%;
    height: calc(100% - 60px);
    overflow: scroll;
    .shop {
      width: 75%;
      margin: 10px auto;
      padding:20px 0;
      .shop_img {
        margin:auto;
        width:100%;
        height: 180px;
        border-radius: 30px;
      }
      .name {
        padding: 5px 0;
        font-size: 18px;
      }
      .location {
        display: inline-block;
        width: 65%;
        svg {
          fill: #FFA500;
        }
      }
      .category {
        display: inline-block;
        padding: 5px;
        margin: 0 10px;
        border-radius: 20px;
        border: solid 2px #FF7700;
        min-width: 60px;
        text-align: center;
        color: #FF7700;
      }
    }
  }
</style>