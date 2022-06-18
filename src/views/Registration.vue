<template>
  <div class="registration">
    <div class="content">
      <div class="userinfo">
        <div class="input-area name">
          <input type="text" v-model="name" />
          <label>名前</label>
        </div>
        <div class="input-area email">
          <input type="email" v-model="email" />
          <label>メールアドレス</label>
        </div>
        <div class="input-area tel">
          <input type="tel" v-model="tel" />
          <label>電話番号</label>
        </div>
        <div class="input-area password">
          <input type="password" v-model="password" />
          <label>パスワード</label>
        </div>
        <div class="input-area password">
          <input type="password" v-model="password_confirm" @change="confirmPassword()" />
          <label>パスワード(確認)</label>
        </div>
      </div>
      <div class="error">
        {{ this.error_msg }}
      </div>
        <button
          @click="registerAccount()"
          class="register-button">登録</button>
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
      name:"",
      password:"",
      password_confirm:"",
      email:"",
      tel:"",
      error_msg:"",
    }
  },
  methods: {
    registerAccount() {
      if ( this.name === "" || this.password === ""  || this.password_confirm === "" || this.email === "" || this.tel === "" ){
        this.error_msg = "未入力の欄があります"
      } else if (!this.confirmPassword()) {
        this.error_msg = "パスワードが一致していません";
      } else {
        this.axios.post(
          '/api/parent/signup',
          {
            name: this.name,
            email: this.email,
            password: this.password,
            tel: this.tel,
          },
        ).then((res) => {
          console.log(res)
          this.error_msg = "";
          this.$router.push('/registrationCompleted')
        }).catch((err) => {
          console.log(err.detail)
          // TODO ユーザー名が一意でない場合のメッセージ
          this.error_msg = "アカウント作成にに失敗しました"
        })
      }
    },
    confirmPassword(){
      if (this.password === this.password_confirm){
        return true
      } else {
        return false
      }
    },
  }
};
</script>


<style scoped lang="scss">
  .nav_button {
    display: none;
  }
  nav {
    display: none;
  }
  .registration{
    position: fixed;
    top: 60px;
    width: 100%;
    .content{
      width: 80%;
      border-radius: 6px;
      border: solid 2px #FF7700;
      margin: 60px auto;
      .account-type{
        display: flex;
        overflow: hidden;
        div {
          position: relative;
          flex: 1;
        }
        input[type="radio"] {
          width: 100%;
          height: 50px;
          opacity: 0;
        }
        label{
          position: absolute;
          top: 0px; left: 0;
          color: #b6b6b6;
          width: 100%;
          height: 50px;
          background: #DDDDDD;
          display: flex;
          align-items: center;
          justify-content: center;
          pointer-events: none;
        }
        input:checked + label {
          background: #FF7700;
          font-weight: 500;
          color: #fff;
        }
      }
      .userinfo{
        padding: 15px;
        .input-area{
          margin: 10px;
          position: relative; 
          input {
            border: solid 1.5px #FF7700;
            border-radius: 1rem;
            background: none;
            padding: 1rem;
            font-size: 1rem;
            transition: border 150ms cubic-bezier(0.4,0,0.2,1);
            width: 85%;
          } 
          label {
            position: absolute;
            left: 15px;
            color: #e8e8e8;
            pointer-events: none;
            transform: translateY(1rem);
            transition: 150ms cubic-bezier(0.4,0,0.2,1);
          }

          input:focus, input:valid {
            outline: none;
            border: 1.5px solid #FF7700;
          }

          input:focus ~ label, input:valid ~ label {
            transform: translateY(-50%) scale(0.8);
            background-color: #EEEEEE;
            padding: 0 .2em;
            color: #808080;
            }
        }     
      }
      .register-button {
        width: 80%;
        height: 40px;
        margin: 30px 10%;
        font-weight: bold;
        color: #ffffff;
        line-height: 40px;
        border-radius: 5px;
        border: none;
        outline: none;
        background-color: #FF7700;
      }
    }
    .error {
      color: red;
      height: 0;
      font-size: 14px;
      text-align: center;
      padding: 0 10px;
    }
  }
</style>