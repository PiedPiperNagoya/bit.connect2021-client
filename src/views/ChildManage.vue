<template>
  <div>
    <p class="description">
      「共有リンク」をお子様の端末に共有するとお子様がお使いに行けます。
    </p>

    <div
      class="child_card"
      v-for="child in children"
      :key="child.$id">
      <h3>
        {{ child.name.value }}
        <span>
          {{ child.gender.value === 'boy' ? 'くん' : child.gender.value === 'girl' ? 'ちゃん' : 'さん' }}
        </span>
      </h3>
      <p>共有リンク：</p>
      <a :href="base_url + child.id.value">
        {{ base_url + child.id.value }}
      </a>
    </div>

    <p class="add_child">
      <router-link to="/child/create">
        + お子様を追加
      </router-link>
    </p>
  </div>
</template>

<script>
  import TokenIO from '../utils/TokenIO'

  export default {
    name: 'ChildManage',
    data () {
      return {
        children: {},
        base_url: '',
      }
    },
    methods: {
      async getChildren () {
        // 登録されている子供の情報を取得
        const res = await this.axios.get(
          '/api/parent/get/children',
          {headers: {Authorization: 'Bearer ' + TokenIO.getToken()}},
        )

        if (res.status  === 200) {
          this.children = res.data
          console.log(this.children)
        }
      },
    },
    mounted() {
      this.base_url = location.protocol + '//' + location.host + '/quest?id='
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
  .child_card {
    width: calc(90% - 40px);
    margin: 20px auto;
    padding: 20px;
    border-radius: 10px;
    background-color: #ffffff;
    h3 {
      font-size: 20px;
      font-weight: bold;
      span {
        font-size: 12px;
      }
    }
  }
  .add_child {
    text-align: center;
    :link, :visited {
      color: #FF7700;
    }
  }
</style>