<template>
  <div class="h-[320px] w-full px-60 mb-20 flex">
    <div class="h-full w-3/4">
      <carousel :items-to-show="1" :autoplay="slideOptions.autoplay" :transition="slideOptions.transition" :wrap-around="slideOptions.wrapAround">
        <slide v-for="slide in 10" :key="slide">
          <img src="https://cdn0.fahasa.com/media/magentothem/banner7/Cardgame_Slide_T1_840x320.jpg" class="w-full object-fill h-[320px]" alt="">
        </slide>
  
        <template #addons>
          <navigation />
        </template>
      </carousel>
    </div>
    <div class="w-1/4 ml-8  flex flex-col h-full justify-between">
        <div>
          <img src="https://cdn0.fahasa.com/media/wysiwyg/Thang-01-2024/VNPay_392x156.jpg" class="w-full object-fill h-[150px]" alt="">
        </div>
        <div>
          <img src="https://cdn0.fahasa.com/media/wysiwyg/Thang-01-2024/392x156_quy1.jpg" class="w-full object-fill h-[150px]" alt="">
        </div>
    </div>
  </div>
</template>

<script>
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide, Navigation } from 'vue3-carousel'
export default {
  name: 'HomeView',
  components: {
    Carousel,
    Slide,
    Navigation,
  },
  data() {
    return {
      slideOptions: {
        autoplay: 3000,
        transition: 1000,
        wrapAround: true
      },
    }
  }
}
</script>
