<script>
export default {
  methods: {
    emitChange(value) {
      this.$emit('changeAmount', Number(value));
    },
    convert() {
      this.$emit('convert');
    }
  }
};
</script>

<template>
  <div>
    <input min="0" type="number" placeholder="number" @input="emitChange($event.target.value)">
    <br>
    <button @click="convert">Convert</button>
  </div>
</template>

<style scoped>
input {
  border-radius: 3px;
  border: 0;
  color: #282828;
  outline: none;
  background: white;
  padding: 10px;
  width: 100px;
  position: relative;
  top: -50px;
  font-size: 1.2em;
  height: 20px;
}
button{
  position: relative;
  top: -20px;
  padding: 15px 20px;
  color: floralwhite;
  cursor: pointer;
  text-transform: uppercase;
  background: #222222;
  border: 0;
  border-radius: 3px;
}
</style>
