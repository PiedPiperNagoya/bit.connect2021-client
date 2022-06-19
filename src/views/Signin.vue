<template>
  <div class="signin">
    <div class="content">
      <div class="userinfo">
        <div class="input-area email">
          <input type="text" v-model="email" />
          <label>メールアドレス</label>
        </div>
        <div class="input-area password">
          <input type="password" v-model="password" />
          <label>パスワード</label>
        </div>
      </div>
      <div class="error">
        {{ this.error_msg }}
      </div>
      <basic-button-component
        content="ログイン"
        @clicked="Signin"/>
    </div>
    <p class="description">
      新規アカウント作成は
      <router-link to="/signup">こちら</router-link>
    </p>
  </div>
</template>

<script>
import TokenIO from '../utils/TokenIO'
import BasicButtonComponent from '../components/BasicButtonComponent'

export default {
  name: "Signin",
  components: {
    BasicButtonComponent
  },
  data() {
    return {
      email:"",
      password:"",
      error_msg:"",
    }
  },
  methods: {
    Signin() {
      if ( this.email === "" || this.password === "" ){
        this.error_msg = "ユーザー名またはパスワードを入力してください"
      } else {
        this.axios.post(
          '/api/parent/login',
          {
            email: this.email,
            password: this.password,
          },
        ).then((res) => {
          this.error_msg = "";
          TokenIO.registerToken(res.data.access_token)
          this.$router.push('/')
        }).catch(() => {
          this.error_msg = "ログインに失敗しました"
        })
      }
    }
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
  .signin{
    position: fixed;
    top: 60px;
    width: 100%;
    .content{
      border-radius: 6px;
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
          margin: 30px 6%;
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
      .login-button {
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
  .description {
    text-align: center;
    :link, :visited {
      color: #FF7700;
    }
  }
</style>