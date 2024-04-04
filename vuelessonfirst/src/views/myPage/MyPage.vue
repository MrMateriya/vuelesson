<script>
export default {
  data() {
    return {
      value: 0,
      photos: [],
      loadingPhotos: false,
    }
  },
  methods: {
    getPhotos() {
      this.loadingPhotos = true
      fetch('https://jsonplaceholder.typicode.com/photos')
          .then(res => {
            return res.json()
          })
          .then(res => {
            console.log(res)
            this.photos = res
            this.loadingPhotos = false;
          })
          .catch(err => {
            console.log(err)
            this.loadingPhotos = false;
          })
    },
  },
  mounted() {
    this.getPhotos()
  },
}
</script>

<template>
  <div class="container">
    <h1 class="page-title">Yaroslav's Page</h1>
    <div class="counter-wrapper">
      <button @click="value--" class="counter-button">Decrease</button>
      <p class="page-counter">{{value}}</p>
      <button @click="value++" class="counter-button">Increase</button>
    </div>
    <div class="photo-gallery">
      <div v-show="loadingPhotos===true">Loading...</div>
      <div v-show="loadingPhotos===false" class="photo-gallery__content">
        <div v-for="photo in photos" class="card-photo">
          <p>{{photo.title}}</p>
          <img class="card-photo__photo" :src="photo.url" alt="">
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.card-photo {

}
.card-photo__photo {
  width: 200px;
}
.photo-gallery__content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 30px;
}
.page-title {
  font-size: 60px;
  text-align: center;
  margin-bottom: 50px;
  color: teal ;
}
.counter-wrapper {
  display: flex;
  justify-content: center;
  gap: 30px;
}
.counter-button {
  padding: 10px;
  background-color: inherit;
  font-size: 30px;
  color: teal;
  border: 1px solid teal;
  border-radius: 20px;
}
.container {
  width: 1500px;
  margin: 0 auto;
}
.page-counter {
  border: 1px solid teal;
  padding: 10px 50px;
  border-radius: 20px;
  font-size: 30px;
  color: teal;
}
</style>