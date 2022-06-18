<template>
  <div class="registration">
    <div class="content">
      <center>アカウント登録が完了しました</center>
      <BasicButtonComponent
        @clicked="$router.push('/')"
        class="register-button"
        content="ホームへ"
      />
    </div>
  </div>
</template>

<script>
import BasicButtonComponent from "../components/BasicButtonComponent";

export default {
  name: "RegistrationCompleted",
  components: {
    BasicButtonComponent,
  },
};
</script>

<style scoped lang="scss">
.registration {
  position: fixed;
  top: 60px;
  width: 100%;
  center {
    margin-top: 5rem;
    margin-bottom: 10rem;
  }
}
</style>
