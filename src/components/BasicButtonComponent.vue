<template>
  <button
    @click="$emit('clicked')">
    {{ content }}
  </button>
</template>

<script>
  export default {
    name: 'BasicButtonComponent',
    props: {
      content: {
        required: true,
        type: String,
      },
    },
  }
</script>

<style scoped lang="scss">
  button {
    display: block;
    width: 80%;
    height: 50px;
    border-radius: 50px;
    margin: 0 auto;
    border: none;
    outline: none;
    background-color: #FF7700;
    font-size: 20px;
    font-weight: bold;
    color: #ffffff;
  }
</style>