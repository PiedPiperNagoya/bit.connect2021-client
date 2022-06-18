<template>
  <div>
    <header>
      <img
        class="logo"
        src="../../assets/img/quest_logo.svg"
        alt="nedu_quest">
    </header>
    <h1>ミッション</h1>
    <div class="shopping_list">
      <div
        :class="'shopping_list__card' + ' shopping_list__card_cleared'">
        <img
          class="shopping_list__card_icon"
          src="https://www.ichibiki.co.jp/uploads/img_recipe_no_892-1.jpg">
        <div class="shopping_list__card_description">
          <h4>{{ '美味しそうな卵かけご飯' }}</h4>
          <p>{{ 'ご飯屋さん' }}</p>
        </div>
      </div>

      <!-- mock -->
      <div class="shopping_list__card">
        <img
          class="shopping_list__card_icon"
          src="https://www.ichibiki.co.jp/uploads/img_recipe_no_892-1.jpg">
        <div class="shopping_list__card_description">
          <h4>{{ '美味しそうな卵かけご飯' }}</h4>
          <p>{{ 'ご飯屋さん' }}</p>
        </div>
      </div>
      <div class="shopping_list__card">
        <img
          class="shopping_list__card_icon"
          src="https://www.ichibiki.co.jp/uploads/img_recipe_no_892-1.jpg">
        <div class="shopping_list__card_description">
          <h4>{{ '美味しそうな卵かけご飯' }}</h4>
          <p>{{ 'ご飯屋さん' }}</p>
        </div>
      </div>
    </div>
    <div class="remain">
      あと<span>{{ 2 }}</span>つ
    </div>

    <quest-complete-modal-component
      v-if="false"/>
  </div>
</template>

<script>
  import QuestCompleteModalComponent from '../../components/QuestCompleteModalComponent'
  export default {
    name: 'ShoppingList',
    components: {QuestCompleteModalComponent},
    data () {
      return {

      }
    },
  }
</script>

<style scoped lang="scss">
  @import url('https://fonts.googleapis.com/css2?family=Mochiy+Pop+One&display=swap');

  * {
    font-family: 'Mochiy Pop One', sans-serif;
  }
  header {
    margin-top: -60px;
    .logo {
      display: block;
      height: 40px;
      margin: 0 auto;
      padding: 10px 0;
    }
  }
  h1 {
    margin: 10px 0 20px;
    text-align: center;
    font-size: 24px;
  }
  .shopping_list {
    .shopping_list__card {
      width: 90%;
      margin: 10px auto;
      padding: 0;
      border-radius: 5px;
      border: solid 2px #FF7700;
      background-color: #ffffff;
      .shopping_list__card_icon {
        width: 50px;
        height: 50px;
        margin: 10px;
        border-radius: 5px;
        vertical-align: top;
      }
      .shopping_list__card_description {
        display: inline-block;
        width: calc(95% - 70px);
        margin: 8px 0;
        vertical-align: top;
        h4 {
          height: 30px;
          line-height: 30px;
          font-size: 18px;
          color: #444444;
          font-weight: bold;
        }
        p {
          height: 20px;
          line-height: 20px;
          font-size: 12px;
          color: #777777;
        }
      }
    }
    .shopping_list__card_cleared {
      background-image: url("../../assets/img/clear_stamp.svg");
      background-position: right center;
      background-size: 80px;
      background-repeat: no-repeat;
    }
  }
  .remain {
    text-align: center;
    font-size: 20px;
    span {
      font-size: 26px;
      color: #FF7700;
    }
  }
</style>