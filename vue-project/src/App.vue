<script>

export default {
  data(){
    return {
      city: "",
      error: ""
    }
  },
  methods: {

    getWeather(){
      if (this.city.trim().length < 2) {
        this.error = "more symbols | your < 2"
        return false
      }
      this.error = '';
    }


  },
  computed: {
    cityName() {
      return "<" + this.city + ">"
    }
  }
}
ace24327d3a04f90c0e580874750c749

</script>

<template>

  <div class="wrapper">
    <h1>Weather app</h1>
    <p>Weather in {{ city === '' ? "your city" : cityName}}</p>
    <input type="text" placeholder="City" v-model="city">
    <button v-if="city !== ''" @click="getWeather()">Weather</button>
    <button disabled v-else>Weather input</button>
    <p class="error">{{error}}</p>
  </div>

</template>

<style scoped>

.error {
  color: red;
}

.wrapper{
  width: 900px;
  height: 500px;
  border-radius: 50px;
  background: darkblue;
  padding: 20px;
  text-align: center;
  color: white;
}
.wrapper h1 {
  margin-top: 50px;
}
.wrapper p {
  margin-top: 20px;
}
.wrapper input {
  margin-top: 30px;
  background: transparent;
  border: 0;
  border-bottom: 2px solid black;
  color: white;
  font-size: 14px;
  padding: 5px 8px;
  outline: none;
}
.wrapper input:focus {
  border-bottom-color: aquamarine;
}


.wrapper button:disabled {
  border-bottom-color: red;
  cursor: not-allowed;
  background: #282828;
}

.wrapper button {
  background: yellow;
  color: olivedrab;
  border-radius: 10px;
  border: 2px solid chartreuse;
  margin-left: 20px;
  padding: 10px 15px;
  cursor: pointer;
  transition: transform 500ms ease;
}
.wrapper button:hover {
  transform: Scale(1.1) translateY(-5px);
}

</style>
