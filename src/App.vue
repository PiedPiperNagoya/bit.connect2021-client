<template>
  <div id="app">
    <navigation-component
      v-if="$route.meta.mode !== 'quest'"/>
    <main>
      <router-view />
    </main>
  </div>
</template>

<script>
  import NavigationComponent from './components/NavigationComponent'
  export default {
    components: {NavigationComponent}
  }
</script>

<style lang="scss">
  @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+JP&display=swap');
  * {
    font-family: 'Noto Sans JP', sans-serif;
  }
  body, html {
    background-color: #EEEEEE;
  }
  main {
    margin-top: 60px;
  }
</style>