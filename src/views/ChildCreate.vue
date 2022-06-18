<template>
  <div>
    <p class="description">
      使用されるお子様の情報を登録してください。<br>
      登録された情報はお子様を見分けるためにお名前・年齢・性別だけがお店側に提供されます。
    </p>

    <!-- 入力フォーム -->
    <h3>お子様のお名前</h3>
    <label>
      <input
        type="text"
        placeholder="たろう"
        v-model="child.name">
    </label>
    <h3>お子様の誕生日</h3>
    <label>
      <input
        type="date"
        v-model="child.birthday">
    </label>
    <h3>お子様の性別</h3>
    <div class="gender_form">
      <label>
        <input
          type="radio"
          v-model="child.sex"
          value="boy">
        男の子
      </label>
      <label>
        <input
          type="radio"
          v-model="child.sex"
          value="girl">
        女の子
      </label>
      <label>
        <input
          type="radio"
          v-model="child.sex"
          value="other">
        その他
      </label>
    </div>
    <basic-button-component
      content="登録"
      @clicked="registerChildren"/>
  </div>
</template>

<script>
  import BasicButtonComponent from '../components/BasicButtonComponent'
  export default {
    name: 'ChildCreate',
    components: {BasicButtonComponent},
    data () {
      return {
        child: {
          name: '',
          birthday: '',
          sex: 'boy',
        },
      }
    },
    methods: {
      async registerChildren () {
        // TODO: バリデーション

        // TODO: 子供の情報を登録
        console.log(this.child)

        // 成功した場合は遷移
        await this.$router.push('/child')
      },
      zeroPadding (num) {
        return ('00' + num ).slice( -2 )
      },
    },
    mounted() {
      // 10歳の誕生日を初期値にする
      const today = new Date
      this.child.birthday = `${today.getFullYear() - 10}-${this.zeroPadding(today.getMonth() + 1)}-${this.zeroPadding(today.getDate())}`
    },
  }
</script>

<style scoped lang="scss">
  .description {
    width: 90%;
    margin: 0 auto;
    padding: 20px 0 0;
    color: #777777;
    font-size: 14px;
  }
  h3 {
    width: 90%;
    margin: 40px auto 10px;
  }
  input[type=text], input[type=date] {
    display: block;
    width: calc(90% - 40px);
    height: 60px;
    margin: 0 auto;
    padding: 0 20px;
    border-radius: 10px;
    background-color: #EEEEEE;
    border: solid 1px #707070;
    outline: none;
  }
  .gender_form {
    margin: 0 auto 60px;
    text-align: center;
  }
</style>