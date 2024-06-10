<script setup>
import MyHello from "@/components/MyHello.vue";
</script>

<template>
  <h1>Crypolt blog</h1>
  <br>
  <my-hello title="Puma" :price="9500" is-added>
    <button>Add</button>
  </my-hello>
  <br>
  <my-hello>
    <h1>send</h1>
  </my-hello>
  <br>
  <my-hello/>
</template>
