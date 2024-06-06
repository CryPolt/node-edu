<template>
  <div class="user">
    <button class="btn-1" v-on:click="deleteUser(index)">Delete</button>
    <h3>{{user.name}}</h3>
    <p>{{user.email}} - <b>{{user.password}}</b></p>
  </div>
</template>

<script>
export default{
  props: {
    user: {
      type: Object,
      required: true,
    },
    index: {
      type: Number,
      required: true
    },
    deleteUser: {
      type: Function,
      required: true
    },
  }
}
</script>

<style scoped>

.user{
  background: gray;
  width: 20em;
  height: 5em;
  border: red;
  border-radius: 5px;
}

.btn-1 {
  margin-top: 1.5em;
  border: 0;
  padding: 10px 15px;
  border-radius: 5px;
  outline: none;
  cursor: pointer;
  background: red;
  float: right;
  position: static;
  font-weight: bold;
  transition: transform 500ms ease;
}
.btn-1:hover {
  transform: translateY(-5px);
}
</style>