<template>
  <div id="app">
    <h1 class="title-text">v-scroll-load</h1>
    <div class="images-container">
      <div class="images-item" v-for="(image,index) of images" :key="index">
        <div class="images-card">
          <img class="images-card__image" :src="image.urls.small" @load="masks.push(index)">
          <div class="images-card__mask" :style="{'background-color':image.color}" v-if="!masks.includes(index)"></div>
        </div>
      </div>
    </div>

    <v-scroll-load :loader-method="getImageList" :loader-disable="disable"></v-scroll-load>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'App',
  data () {
    return {
      disable: false,
      page: 1,
      pageSize: 30,
      images: [],
      masks: []
    }
  },
  methods: {
    getImageList () {
      axios.get('https://api.unsplash.com/photos', {
        params: {
          page: this.page++,
          per_page: this.pageSize,
          client_id: 'e874834b096dcd107c232fe4b0bb521158b62e486580c988b0a75cb0b77a2abe'
        }
      }).then(res => {
        res.data && (this.images = [...this.images, ...res.data])
      }).catch(error => {
        console.log(error)
      })
    }
  },
  watch: {
    page (value) {
      this.disable = value > 10
    }
  }
}
</script>

<style lang="css" scoped src="./assets/style.css"></style>
<style lang="css" scoped>
.images-item{
  animation-duration: 1s;
  animation-fill-mode: both;
  animation-name: fadeInUp;
}
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(10%) scale(0.9);
  }

  to {
    opacity: 1;
    transform: translateY(0%) scale(1.0);
  }
}
</style>
