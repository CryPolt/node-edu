<script setup>
// import {ref} from 'vue'
//   const count = ref(0);
//
//   function increment() {
//     count.value++
//     console.log(count)
//   }

const props = defineProps({
  title: String,
  price: Number,
  isAdded: Boolean
});
console.log(props)

</script>

<template>
<!--  <h3 class="text">{{ count }}</h3>-->
<!--  <button @click="increment">Click</button>-->
<!--  <input @keyup.ctrl.enter="increment">-->

  <div class="product">
    <h2>Product: {{title}}</h2>
    <h3>Price: {{price}}</h3>
    <h3>Added: {{isAdded}}</h3>
    <slot></slot>
  </div>

</template>

<style scoped>
.product{
  border: 1px solid black;
  padding: 10px;
  margin-bottom: 10px;
}

</style>