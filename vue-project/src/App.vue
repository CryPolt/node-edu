<script>
import User from "@/components/User.vue";

export default {
  components: { User },

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

    sendDate() {

    },
    deleteUser(index){
      this.users.splice(index, 1);
      console.log(index, "Deleted")
    },

    sendData() {
      if (this.username === ''){
        this.error = 'name not found';
      } else if(this.userPassword) {
        this.error = 'password not found';
      }else if(this.userEmail) {
        this.error = 'email not found';
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

    <input type="text" placeholder="name" v-model="username">
    <input type="text" placeholder="password" v-model="userPassword">
    <input type="email" placeholder="email" v-model="userEmail">
    <p className="error"> {{error}}</p>
    <button type="button" v-on:click="sendData()">send</button>
    <div v-if="users.length === 0" className="users">
      not users
    </div>

    <user v-for="(el,index) in users" :key="index" :user="el" :index="index" :deleteUser="deleteUser"/>

</template>

<style scoped>

</style>
