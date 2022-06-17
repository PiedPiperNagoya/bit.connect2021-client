<template>
  <header>
    <h1>{{ this.$route.meta.title }}</h1>
    <div
      class="nav_button"
      @click="open_nav = !open_nav">
      <span :class="open_nav ? 'open_span' : ''"></span>
      <span :class="open_nav ? 'open_span' : ''"></span>
      <span :class="open_nav ? 'open_span' : ''"></span>
    </div>
    <nav :style="'right: ' + (open_nav ? '0px' : '-160px')">
      <ul>
        <li>
          <img src="../assets/icons/shop_icon.svg" alt=""/>
          お店一覧
        </li>
        <li>
          <img src="../assets/icons/cart_icon.svg" alt="買物内容確認"/>
          買物内容確認
        </li>
        <li>
          <img src="../assets/icons/child_icon.svg" alt="お子様管理"/>
          お子様管理
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
  export default {
    name: 'NavigationComponent',
    data () {
      return {
        open_nav: false,
      }
    },
    mounted() {
    },
  }
</script>

<style scoped lang="scss">
  header {
    position: fixed;
    z-index: 201;
    top: 0;
    left: 0;
    height: 60px;
    width: 100%;
    h1 {
      height: 60px;
      line-height: 60px;
      text-align: center;
      font-size: 16px;
      font-weight: bold;
    }

    // ナビゲーションボタン
    .nav_button {
      position: fixed;
      z-index: 205;
      top: 5px;
      right: 10px;
      span {
        display: block;
        width: 6px;
        height: 6px;
        margin: 5px 20px;
        border-radius: 6px;
        border: solid 2px #FF7700;
        -webkit-transition: all 0.3s ease;
        -moz-transition: all 0.3s ease;
        -o-transition: all 0.3s ease;
        transition: all  0.3s ease;
      }
      .open_span {
        width: 38px;
        margin: 5px 5px;
      }
    }

    // ナビゲーション
    nav {
      position: fixed;
      z-index: 200;
      right: 0;
      top: 0;
      display: block;
      width: 160px;
      height: 100vh;
      -webkit-transition: all 0.3s ease;
      -moz-transition: all 0.3s ease;
      -o-transition: all 0.3s ease;
      transition: all  0.3s ease;
      background-color: #EEEEEE;
      ul {
        margin-top: 80px;
        li {
          margin: 25px 0;
          height: 30px;
          line-height: 30px;
          font-size: 16px;
          font-weight: bold;
          img {
            height: 30px;
            vertical-align: top;
          }
        }
      }
    }
  }
</style>