<template>
  <div class="signin">
    アカウント登録
      <div class="userinfo">
        <div class="input-area username">
          <input type="text" v-model="username" placeholder="ユーザー名" />
        </div>
        <div class="input-area password">
          <input type="password" v-model="password" placeholder="パスワード" />
        </div>
        <div class="input-area password">
          <input type="password" v-model="password_confirm" placeholder="パスワード(確認)" @change="confirmPassword()" />
          <div class="error">
            {{ this.error_password }}
          </div>
        </div>
        <div class="input-area account-type">
          <input
            type="radio"
            v-model="account_type"
            id="parent"
            value="parent"
          />
          <label for="parent">
            親
          </label>
          <input
            type="radio"
            v-model="account_type"
            id="clerk"
            value="clerk"/>
          <label for="clerk">
            お店
          </label>
        </div>
      </div>
      <button
        @click="registerAccount()"
        class="submit_button">登録</button>
  </div>
</template>

<script>
export default {
  name: "Registration",
  components: {
  },
  data() {
    return {
      username:"",
      password:"",
      password_confirm:"",
      account_type:"parent",
      error_password:"",
    }
  },
  methods: {
    registerAcccount() {
      console.log({
        username: this.username,
        password: this.password,
        account_type: this.account_type,
      })
      // this.axios.post(
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
    confirmPassword(){
      if (this.password === this.password_confirm){
        this.error_password = "";
      } else {
        this.error_password = "パスワードが一致していません";
      }
    }
  }
};
</script>


<style scoped lang="scss">
  .error {
    color: red;
  }
</style>