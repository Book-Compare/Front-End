<template>
      <div class="mb-6 px-2 w-1/4">
        <router-link :to="'/' + product.name.replace(/\s+/g, '-').toLowerCase()">
          <div
            class="block rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
            <div class="relative overflow-hidden bg-cover bg-no-repeat">
              <img 
                :src="product.image" class="w-full rounded-t-lg" 
              />
              <a href="#!">
                <div class="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-fixed"></div>
              </a>
              <svg class="absolute text-white dark:text-neutral-700 left-0 bottom-0" xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 1440 320">
                <path fill="currentColor"
                  d="M0,288L48,272C96,256,192,224,288,197.3C384,171,480,149,576,165.3C672,181,768,235,864,250.7C960,267,1056,245,1152,250.7C1248,256,1344,288,1392,304L1440,320L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z">
                </path>
              </svg>
            </div>
            <div class="p-6">
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
          </div>
        </router-link>
      </div>

</template>

<script>
import { Sidenav, LazyLoad, initTE } from "tw-elements"
export default {
  name: 'ProductCard',
  props: {
    product: {
      type: Object,
      required: true
    }
  },
  mounted(){
    initTE({ Sidenav,LazyLoad });
  },
  methods:{
    formatNumber(value) {
        // Sử dụng Intl.NumberFormat để định dạng số
        return new Intl.NumberFormat().format(value);
    }
  }
}
</script>