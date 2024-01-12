<template>
  <div class="h-[320px] w-full px-40 mb-10 flex">
    <div class="h-full w-3/4">
      <carousel
        :items-to-show="1"
        :autoplay="slideOptions.autoplay"
        :transition="slideOptions.transition"
        :wrap-around="slideOptions.wrapAround"
      >
        <slide :key="slide">
          <img
            src="https://cdn0.fahasa.com/media/magentothem/banner7/Cardgame_Slide_T1_840x320.jpg"
            class="w-full object-fill h-[320px]"
            alt=""
          />
        </slide>

        <slide :key="slide">
          <img
            src="https://cdn0.fahasa.com/media/magentothem/banner7/TrangDoChoiT124_Slide_840x320_Thang1.jpg"
            class="w-full object-fill h-[320px]"
            alt=""
          />
        </slide>

        <slide :key="slide">
          <img
            src="https://cdn0.fahasa.com/media/magentothem/banner7/NewBooksYearT124_Banner_resize_Slide_840x320.jpg"
            class="w-full object-fill h-[320px]"
            alt=""
          />
        </slide>

        <slide :key="slide">
          <img
            src="https://cdn0.fahasa.com/media/magentothem/banner7/VPP_Slide_T1_840x320.jpg"
            class="w-full object-fill h-[320px]"
            alt=""
          />
        </slide>

        <template #addons>
          <navigation />
        </template>
      </carousel>
    </div>
    <div class="w-1/4 ml-8 flex flex-col h-full justify-between">
      <div>
        <img
          src="https://cdn0.fahasa.com/media/wysiwyg/Thang-01-2024/VNPay_392x156.jpg"
          class="w-full object-fill h-[150px]"
          alt=""
        />
      </div>
      <div>
        <img
          src="https://cdn0.fahasa.com/media/wysiwyg/Thang-01-2024/392x156_quy1.jpg"
          class="w-full object-fill h-[150px]"
          alt=""
        />
      </div>
    </div>
  </div>
  <div
    class="w-full h-[560px] text-start bg-center bg-no-repeat bg-cover"
    style="
      background-image: url('https://cdn0.fahasa.com/media/fahasa_web_image/flash_sale_background_image.jpg');
    "
  >
  <div class="flex items-center px-8 pt-4">
    <span class="material-symbols-outlined text-3xl text-white">
trending_down
</span>
    <h1 class="text-3xl font-bold text-white ml-4">Giảm giá sốc</h1>
  </div>

    <Carousel v-bind="settings" :breakpoints="breakpoints">
      <Slide v-for="slide in 10" :key="slide">
        <div class="carousel__item bg-white w-[266px] rounded mt-8 p-4">
          <div>
            <img
              src="https://cdn0.fahasa.com/media/catalog/product/2/3/231123-3.jpg"
              alt=""
            />
          </div>
          <div class="mt-4">
            <p class="text-start line-clamp-2">
              Khóa Chặt Cửa Nào Suzume - Bản Bìa Cứng - Tặng Kèm Keyhole Card +
              Set 6 Movie Frame Card
            </p>
            <div class="text-start mt-2">
              <div class="flex items-center">
                <span class="text-start text-red-600 font-bold text-[18px]"
                  >133.000 đ</span
                >
                <span
                  class="text-center bg-red-600 p-[5px] ml-2 rounded text-white font-bold text-[1rem]"
                  >-30%</span
                >
              </div>
              <div>
                <span class="line-through">189.000</span>
              </div>
            </div>
            <div>
              <button type="button" class="mt-4 focus:outline-none text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">Xem chi tiết</button>
            </div>
          </div>
        </div>
      </Slide>
      <template #addons>
        <Navigation />
      </template>
    </Carousel>
  </div>
</template>

<script>
import "vue3-carousel/dist/carousel.css";
import { Carousel, Slide, Navigation } from "vue3-carousel";
export default {
  name: "HomeView",
  components: {
    Carousel,
    Slide,
    Navigation,
  },
  data() {
    return {
      slideOptions: {
        autoplay: 2000,
        transition: 1000,
        wrapAround: true,
      },
      settings: {
        itemsToShow: 1,
        snapAlign: "center",
        wrapAround: true,
      },
      breakpoints: {
        // 700px and up
        700: {
          itemsToShow: 3.5,
          snapAlign: "center",
        },
        // 1024 and up
        1024: {
          itemsToShow: 5,
          snapAlign: "start",
        },
      },
    };
  },
};
</script>
