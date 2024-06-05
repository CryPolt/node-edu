<script>

export default {
  data(){
    return {
      users: [],
      error: '',
      username: '',
      userPassword: '',
      userEmail: ''
    }
  },
  methods: {
    sendData() {
      if (this.username === ''){
        this.error = 'name not found';
        return;
      } else if(this.userEmail) {
        this.error = 'email not found';
        return;
      } else if(this.userPassword) {
        this.error = 'password not found';
        return;
      }

      this.users.push({
        name: this.username,
        password: this.userPassword,
        email: this.userEmail
      })
    }
  }
}

</script>

<template>

  <form action="">
    <input type="text" name="" id="" placeholder="name" v-model="username">
    <input type="password" name="" id="" placeholder="password" v-model="userPassword">
    <input type="email" name="" id="" placeholder="email" v-model="userEmail">
    <p className="error"> {{error}}</p>
    <button type="button" v-on:click="sendData()">send</button>

    <div v-if="users.length === 0" className="users">
      not users
    </div>

    <div v-for="(el,index) in users" :key="index">
        <h3>{{el.name}}</h3>
        <p>{{el.email}} - <b>{{el.password}}</b></p>
    </div>
  </form>

</template>

<style scoped>

</style>
