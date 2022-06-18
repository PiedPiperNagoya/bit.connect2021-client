<template>
  <div>
    <p class="description">
      使用されるお子様の情報を登録してください。<br>
      登録された情報はお子様を見分けるためにお名前・年齢・性別だけがお店側に提供されます。
    </p>

    <p class="add_child">
      <router-link to="/child/create">
        + お子様を追加
      </router-link>
    </p>
  </div>
</template>

<script>
  export default {
    name: 'ChildManage',
    data () {
      return {
        children: {},
      }
    },
    methods: {
      getChildren () {
        // TODO: 登録されている子供の情報を取得
      },
    },
    mounted() {
      this.getChildren()
    }
  }
</script>

<style scoped lang="scss">
  .description {
    width: 90%;
    margin: 0 auto;
    padding: 20px 0;
    color: #777777;
    font-size: 14px;
  }
  .add_child {
    text-align: center;
    :link, :visited {
      color: #FF7700;
    }
  }
</style>