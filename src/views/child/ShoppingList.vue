<template>
  <div>
    <header>
      <img
        class="logo"
        src="../../assets/img/quest_logo.svg"
        alt="nedu_quest">
    </header>
    <div>
      <div>
        <div></div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'ShoppingList',

  }
</script>

<style scoped lang="scss">
  @import url('https://fonts.googleapis.com/css2?family=Dela+Gothic+One&display=swap');

  * {
    font-family: 'Dela Gothic One', cursive;
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
</style>