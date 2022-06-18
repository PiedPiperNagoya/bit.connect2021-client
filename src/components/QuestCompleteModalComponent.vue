<template>
  <div class="background">
    <div class="modal">
      <h2>おつかい かんりょう！</h2>

      <img
        class="cracker_img"
        src="../assets/img/cracker.svg">

      <p class="description">
        おつかれさま！<br>
        きをつけて、おうちにかえってね！
      </p>
    </div>
  </div>
</template>

<script>
  import Confetti from '../utils/Cracker'
  export default {
    name: 'QuestCompleteModalComponent',
    methods: {
      backgroundAnime () {
        const DURATION = 8000,
          LENGTH   = 120;

        new Confetti({
          width    : window.innerWidth,
          height   : window.innerHeight,
          length   : LENGTH,
          duration : DURATION
        });
      }
    },
    mounted() {
      this.backgroundAnime()
    },
    beforeDestroy() {

    },
  }
</script>

<style scoped lang="scss">
  @import url('https://fonts.googleapis.com/css2?family=Mochiy+Pop+One&display=swap');

  * {
    font-family: 'Mochiy Pop One', sans-serif;
  }

  .background {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 200;
    display: block;
    width: 100%;
    height: 100vh;
  }
  .modal {
    width: 80%;
    margin: 20vh auto 0;
    h2 {
      margin: 10px 0 20px;
      text-align: center;
      font-size: 24px;
      color: #FF7700;
    }
    .cracker_img {
      display: block;
      margin: 40px auto;
      width: 100px;
    }
    .description {
      text-align: center;
      color: #ffffff;
    }
  }
</style>