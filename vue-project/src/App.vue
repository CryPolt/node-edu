<script>

export default {
  data(){
    return {
      info: 'Title',
      someinfo: 'someinfo'
    }
  },
  methods: {
    userData(word = 'New text') {
      this.someinfo = word
    }
  }
}

</script>

<template>
    <h3>{{ info }}</h3>
    <p>{{ someinfo }}</p>

  <button type="button" v-on:click="userData('Some new')">send</button>
</template>

<style scoped>
h3 {
  font-weight: bold;
}
p {
  color: red;
}
</style>
