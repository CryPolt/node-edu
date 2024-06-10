<script setup>
import MyHello from "@/components/MyHello.vue";
</script>

<template>
  <h1>Crypolt blog</h1>
  <my-hello title="Puma" :price="9500" :isAdded="true" />
  <my-hello/>
  <my-hello/>
</template>
