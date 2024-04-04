<script>
export default {
  data() {
    return {
      searchText: '',
      QueryCities: [],
      currentCity: null,
    }
  },
  methods: {
    getCities() {
      let url = 'https://openweathermap.org/data/2.5/find?q=' + this.searchText + '&appid=439d4b804bc8187953eb36d2a8c26a02&units=metric'
      console.log('getWEather')
      fetch(url)
          .then(res => res.json())
          .then(res => {console.log(res); this.QueryCities = res.list})
          .catch(err => {console.error(err)})
    },
    getWeatherCity(coord) {
      console.log(coord)
      let url = `https://openweathermap.org/data/2.5/onecall?lat=${coord.lat}&lon=${coord.lon}&units=metric&appid=439d4b804bc8187953eb36d2a8c26a02`
      fetch(url)
          .then(res => res.json())
          .then(res => {console.log(res); this.currentCity = res})
          .catch(err => {console.log(err)})
    }
  }
}
</script>

<template>
  <h1>Погода</h1>
  <input type="text" placeholder="Введите название города" v-model="searchText">
  <button @click="getCities()"> Поиск {{searchText}}</button>
  <div v-if="QueryCities.length" v-for="city in QueryCities">
    <p @click="getWeatherCity(city.coord)">{{city.name}}</p>
  </div>
  <div v-if="currentCity" class="current-city-weather">
    <p>{{this.currentCity.timezone}}</p>
    <p>Температура: {{ Math.round(this.currentCity.current.temp)}} Градусов</p>
    <p>{{this.currentCity.current.weather[0].description}}</p>
  </div>
</template>

<style scoped>
.current-city-weather {
  font-size: 25px;
  width: 500px;
  margin: 0 auto;
  border-radius: 12px;
  padding: 15px;
  border: 1px dashed rgba(68, 55, 80, 0.56);
}
</style>