<template>
  <!-- <b-carousel>
        <b-carousel-item v-for="(carousel, i) in carousels" :key="i">
            <span class="image">
              <img src="`${carousel.text}`">
            </span>
        </b-carousel-item>
    </b-carousel>    -->
    <div class="container mt-5">
        <b-carousel 
        :indicator-inside="true"
        >
            <b-carousel-item v-for="(item, i) in 6" :key="i">
                <span class="image">
                <img :src="getImgUrl(i)">
                </span>
            </b-carousel-item>
            <template slot="indicators" slot-scope="props">
                <span class="al image">
                    <b-image
                    :src=getImgUrl(props.i)
                    alt="A random image"
                    ratio="6by4"
                    :rounded="rounded"
                ></b-image>
                </span>
                 
            </template>
        </b-carousel>
    </div>
    
</template>

<script>
export default {
    data: function (){
            return {
                carousels: [
                    { text: '/images/banners_ru.jpg', color: 'primary' },
                    { text: '/images/banners_ru.jpg', color: 'info' },
                    { text: '/images/banners_ru.jpg', color: 'success' },
                    { text: '/images/banners_ru.jpg', color: 'warning' },
                    { text: '/images/banners_ru.jpg', color: 'danger' }
                ]
            }
        },
    methods: {
      getImgUrl(value) {
          return `https://picsum.photos/id/43${value}/1230/500`
      }
    }
}
</script>

<style>
.is-active .al img {
    filter: grayscale(0%);
}
.al img {
    filter: grayscale(100%);
}
</style>