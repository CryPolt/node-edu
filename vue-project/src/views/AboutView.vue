<script setup>
  import TheWelcome from "@/components/home/TheWelcome.vue";
</script>

<template>
  <div class="about">
    <h1>This is an about page</h1>
    <br>
    <div class="left">
      <main>
        <TheWelcome />
      </main>
    </div>

  </div>

</template>

<style>
.left {
  float: right;
  display: block;;
  position: relative;
  margin-left: 85px;
}

@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: inline-flex;
    align-items: center;

  }
}
</style>
