<script>
export default {
  data() {
    return {
      current: ''
    }
  },
  methods: {
    emitCrypto(value) {
      this.$emit('set-crypto', value);
    },
    selectItem(val) {
      this.emitCrypto(val);
      this.current = val
    }
  }
};
</script>

<template>

<ul>
  <li @click="selectItem('BTC')" :class="current === 'BTC' ? 'active' : '' ">Bitcoin</li>
  <li @click="selectItem('ETH')" :class="current === 'ETH' ? 'active' : '' ">Ethereum</li>
  <li @click="selectItem('USDT')" :class="current === 'USDT' ? 'active' : '' ">USDT</li>
</ul>

</template>

<style scoped>
ul {
  list-style: none;
  width: 200px;
  padding: 0;
  border-radius: 3px;
  border: 3px solid black;
}
li{
  display: block;
  background: #222222;
  cursor: pointer;
  color: white;
  height: 40px;
  text-align: center;
}

li:hover, li.active{
  background: #2c3e50;
  cursor: pointer;
}

</style>
