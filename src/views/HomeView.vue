<template>
  <div class="xl:px-32 2xl:px-72 lg:px-12">
    <div class="w-full  sm:mb-32 md:mb-16 lg:mb-10 xl:mb-10 mb-8 flex">
    <div class="lg:w-3/4 xl:w-3/4 w-full">
      <carousel
        :items-to-show="1"
        :autoplay="slideOptions.autoplay"
        :transition="slideOptions.transition"
        :wrap-around="slideOptions.wrapAround"
        class="h-full">
        <slide :key="slide" class="h-full">
          <img
            src="https://cdn0.fahasa.com/media/magentothem/banner7/Cardgame_Slide_T1_840x320.jpg"
            class="w-full object-fill lg:h-[300px]"
            alt=""/>
        </slide>

        <slide :key="slide">
          <img
            src="https://cdn0.fahasa.com/media/magentothem/banner7/TrangDoChoiT124_Slide_840x320_Thang1.jpg"
            class="w-full object-fill lg:h-[300px]"
            alt="" />
        </slide>

        <slide :key="slide">
          <img
            src="https://cdn0.fahasa.com/media/magentothem/banner7/NewBooksYearT124_Banner_resize_Slide_840x320.jpg"
            class="w-full object-fill lg:h-[300px]"
            alt=""
          />
        </slide>

        <slide :key="slide">
          <img
            src="https://cdn0.fahasa.com/media/magentothem/banner7/VPP_Slide_T1_840x320.jpg"
            class="w-full object-fill lg:h-[300px]"
            alt=""
          />
        </slide>

        <!-- <template #addons>
          <navigation />
        </template> -->
      </carousel>
    </div>
    <div class="w-1/4 ml-8  hidden lg:flex sm:hidden md:hidden xl:flex flex-col h-full justify-between">
      <div>
        <img
          src="https://cdn0.fahasa.com/media/wysiwyg/Thang-01-2024/VNPay_392x156.jpg"
          class="w-full object-fill h-[150px]"
          alt="" />
      </div>
      <div>
        <img
          src="https://cdn0.fahasa.com/media/wysiwyg/Thang-01-2024/392x156_quy1.jpg"
          class="w-full object-fill h-[150px]"
          alt=""/>
      </div>
    </div>
  </div>
  <!-- End Banner Slide -->
  <!-- Start discount -->
  <div
    class="w-full pb-12 text-start bg-center bg-no-repeat bg-cover rounded-3xl mb-10"
    style="
      background-image: url('https://cdn0.fahasa.com/media/fahasa_web_image/flash_sale_background_image.jpg');">
    <div class="flex items-center ml-4 pr-8 pt-8">
      <span class="material-symbols-outlined text-3xl text-white">
        trending_down
      </span>
      <h1 class="text-3xl font-bold tracking-tight text-white ml-4">Giảm giá sốc</h1>
    </div>

    <Carousel v-bind="settings" :breakpoints="breakpoints">
      <Slide v-for="slide in 10" :key="slide" class="px-4">
        <div class="carousel__item bg-white w-[285px] rounded-2xl mt-8 p-4 cursor-pointer">
          <div>
            <img
              src="https://cdn0.fahasa.com/media/catalog/product/2/3/231123-3.jpg"
              alt=""/>
          </div>
          <div class="mt-4">
            <p class="text-start line-clamp-2">
              Khóa Chặt Cửa Nào Suzume - Bản Bìa Cứng - Tặng Kèm Keyhole Card +
              Set 6 Movie Frame Card
            </p>
            <div class="text-start mt-2">
              <div class="flex items-center">
                <span class="text-start text-red-600 font-bold text-[18px]">133.000 đ</span
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
            <!-- <div>
              <button type="button" class="mt-4 focus:outline-none text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">Xem chi tiết</button>
            </div> -->
          </div>
        </div>
      </Slide>
      <template #addons>
        <Navigation />
      </template>
    </Carousel>
  </div>
  <!-- End discount -->
  <!-- Start popular product -->
  <div class="w-full  text-start mb-10">
    <div class="flex">
      <span class="material-symbols-outlined text-3xl mr-2">trending_up</span>
      <h2 class="mb-6 text-3xl font-bold tracking-tight text-gray-900">Sản phẩm nổi bật</h2>
    </div>
    <div class="flex justify-center flex-wrap  xl:justify-between lg:justify-between w-full">
      <div v-for="(product, index) in productData" :key="index" class="carousel__item bg-white xl:w-[285px] lg:w-[285px] md:w-[285px] w-[190px] mx-[4px] rounded-2xl mb-8 p-4 border shadow-lg cursor-pointer" data-te-lazy-load-init>
        <router-link :to="'/' + product.name.replace(/\s+/g, '-')">
            <div>
                <img
                    data-te-lazy-load-init
                    :data-te-lazy-src="product.images"
                    data-te-lazy-placeholder="https://place-hold.it/1321x583?text=Loading"
                    alt=""/>
            </div>
            <div class="mt-4">
                <p class="text-start line-clamp-2 h-[48px]">
                    {{ product.name }}
                </p>
                <div class="text-start mt-2">
                    <div class="flex items-center">
                        <span class="text-start text-red-600 font-bold text-[18px]">
                            {{ formatNumber(product.price) }}đ
                        </span>
                        <span class="text-center bg-red-600 p-[5px] ml-2 rounded text-white font-bold text-[1rem]">
                            -30%
                        </span>
                    </div>
                    <div>
                        <span class="line-through">189.000</span>
                    </div>
                </div>
            </div>
        </router-link>
      </div>
    </div>
  </div>
  <!-- End popular product -->
  <!-- Start news -->
  <div class=" p-0 w-full text-start mb-10">
    <div class="flex">
      <span class="material-symbols-outlined text-3xl mr-2">news</span>
      <h2 class="mb-6 text-3xl font-bold tracking-tight text-gray-900">Tin tức mỗi ngày</h2>
    </div>
    <div class="flex w-full gap-4">
        <div class="lg:w-3/5 xl:w-3/5 w-full cursor-pointer">
            <div class="w-full">
              <article>
                <img src="https://reviewsach.net/wp-content/uploads/2023/12/noi-niem-tham-tu-galileo-reviewsach.jpg" alt="">
                <div class="mt-4">
                  <h3 class="text-2xl line-clamp-2 mb-1 font-bold">Nỗi niềm của Thám tử Galileo (Higashino Keigo) – Nỗi niềm của người làm khoa học</h3>
                  <p class="mb-1">14/01/2024</p>
                  <span class="line-clamp-3">Sau Giấc mơ tiên tri, Nỗi niềm của Thám tử Galileo là tập truyện ngắn thứ hai về nhà vật lí học Manabu Yukawa được phát hành ở Việt Nam. Gồm 5 truyện ngắn, mỗi truyện mang một nội dung độc lập song tất cả, vẫn nhằm hướng đến việc, góp những mảnh xếp hình, tạo nên chân dung Thám tử Galileo – nhà vật lí học Manabu Yukawa có phần lập dị song cái tâm anh dành cho khoa học, cho con người, lại thật sự, trong sáng vô ngần.</span>
                </div>
              </article>
            </div>
        </div>
        <div class="w-2/5 h-full cursor-pointer lg:block xl:block hidden">
            <div class="w-full flex flex-col h-full">
              <article class="flex mb-2" v-for="product in 4" :key="product">
                <img src="https://reviewsach.net/wp-content/uploads/2023/07/thanh-guom-do-du.jpg" class="w-[210px] mr-4" alt="">
                <div class="">
                  <h3 class="text-xl font-bold line-clamp-2 mb-1">Thanh gươm do dự và những đứa trẻ tuổi vị thành niên phạm tội</h3>
                  <span
                  class="text-center bg-red-600 p-[5px]  rounded text-white text-[1rem]" >Trinh thám</span >
                  <p class="my-1">14/01/2024</p>
                  <span class="line-clamp-2">Bản án hung thủ nhận về không có tính răn đe, cũng không khiến người nhà nạn nhân cảm thấy được an ủi</span>
                </div>
              </article>
            </div>
        </div>
    </div>
  </div>
  <!-- End news -->
  </div>

</template>

<script>
import "vue3-carousel/dist/carousel.css";
import MockDATA from '../assets/Data/MOCK_DATA.json';
import { Carousel, Slide, Navigation } from "vue3-carousel";
import { Sidenav, LazyLoad, initTE } from "tw-elements"
export default {
  name: "HomeView",
  components: {
    Carousel,
    Slide,
    Navigation,
  },
  mounted(){
    initTE({ Sidenav,LazyLoad });
    window.scrollTo(0, 0);
  },
  data() {
    return {
      productData: MockDATA.slice(0, 20),
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
        320: {
          itemsToShow: 1.5,
          snapAlign: "center",
        },
        // 700px and up
        500: {
          itemsToShow: 3,
          snapAlign: "center",
        },
        // 700px and up
        700: {
          itemsToShow: 3,
          snapAlign: "center",
        },
        // 1024 and up
        1024: {       
          itemsToShow: 4,
          snapAlign: "start",
        },
        1280: {       
          itemsToShow: 4,
          snapAlign: "start",
        },
      },
    };
  },
  methods: {
    formatNumber(value) {
      // Sử dụng Intl.NumberFormat để định dạng số
      return new Intl.NumberFormat().format(value);
    },
  },
};
</script>
