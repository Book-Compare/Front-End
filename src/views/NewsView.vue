<template>
<div class="container my-12 mx-auto xl:px-32 lg:px-12">
  <section class="mb-32 text-center">
    <h2 class="mb-12 text-center text-3xl font-bold">News book</h2>
    <div class="flex">
      <div class="flex flex-wrap w-[70%]" v-if="loading">
        <div  role="status" v-for="article in articles" :key="article.title"  class="space-y-8 animate-pulse md:space-y-0 md:space-x-14 rtl:space-x-reverse md:flex md:items-center md:flex-col">
          <div class="flex items-center justify-center w-full h-48 bg-gray-300 rounded sm:w-60 dark:bg-gray-700">
              <svg class="w-10 h-10 text-gray-200 dark:text-gray-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 18">
                  <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z"/>
              </svg>
          </div>
          <div class="w-full pt-8">
              <div class="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-60 mb-4"></div>
          </div>
          <span class="sr-only">Loading...</span>
        </div>
      </div>
        <!-- News main container -->
      <div class="grid gap-6 lg:grid-cols-3 xl:gap-x-12 w-2/3 " v-else>
        <div v-for="article in articles" :key="article.title" class="mb-6 lg:mb-0">
          <div class="relative mb-6 overflow-hidden rounded-lg bg-cover bg-no-repeat shadow-lg dark:shadow-black/20">
            <img :src="article.urlToImage || defaultImg" :alt="article.title + ' Image'" class="w-full h-48" />
            <a href="#!">
              <div class="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100 bg-[hsla(0,0%,98.4%,.15)]">
              </div>
            </a>
          </div>

          <h5 class="mb-[0.1rem] text-lg font-bold line-clamp-2">{{ article.title }}</h5>
        </div>
      </div>

      <!-- Sub news container -->
      <div class="container w-[30%]">
        <section class="mb-32 text-center md:text-left">  
          <div class="flex flex-wrap" v-if="loading_sub">
            <div role="status" v-for="index in 6" :key="index" class="mb-4 space-y-8 animate-pulse md:space-y-0 md:space-x-8 rtl:space-x-reverse md:flex items-center">
                <div class="flex items-center justify-center w-full h-16 bg-gray-300 rounded sm:w-28 dark:bg-gray-700">
                    <svg class="w-10 h-10 text-gray-200 dark:text-gray-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 18">
                        <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z"/>
                    </svg>
                </div>
                <div class="w-full flex flex-col justify-center items-baseline pt-2">
                    <div class="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-2"></div>
                    <div class="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-2"></div>
                    <div class="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-2"></div>
                </div>
                <span class="sr-only">Loading...</span>
            </div>
          </div>

          <div v-else class="">
            <div class="flex flex-wrap">
            <div class="mb-6 ml-auto w-full shrink-0 grow-0 basis-auto px-3 md:mb-0 md:w-3/12">
              <div class="relative mb-6 overflow-hidden rounded-lg bg-cover bg-no-repeat shadow-lg dark:shadow-black/20"
                data-te-ripple-init data-te-ripple-color="light">
                <img src="https://mdbcdn.b-cdn.net/img/new/standard/city/018.jpg" class="w-full" alt="Louvre" />
                <a href="#!">
                  <div
                    class="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100 bg-[hsla(0,0%,98.4%,.15)]">
                  </div>
                </a>
              </div>
            </div>

            <div class="mb-6 mr-auto w-full shrink-0 grow-0 basis-auto px-3 md:mb-0 md:w-9/12 xl:w-8/12">
              <h5 class="mb-[0.1rem] text-lg font-bold">Welcome to California</h5>
              <p class="mb-6 text-neutral-500 dark:text-neutral-300 line-clamp-1">
                <small>Published <u>13.01.2022</u> by
                   <a href="#!" class="text-red-700 font-bold">Anna Maria Doe</a></small>
              </p>
            </div>
            </div>

            <div class="flex flex-wrap">
              <div class="mb-6 ml-auto w-full shrink-0 grow-0 basis-auto px-3 md:mb-0 md:w-3/12">
                <div class="relative mb-6 overflow-hidden rounded-lg bg-cover bg-no-repeat shadow-lg dark:shadow-black/20"
                  data-te-ripple-init data-te-ripple-color="light">
                  <img src="https://mdbcdn.b-cdn.net/img/new/standard/city/032.jpg" class="w-full" alt="Louvre" />
                  <a href="#!" class="text-red-700 font-bold">
                    <div
                      class="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100 bg-[hsla(0,0%,98.4%,.15)]">
                    </div>
                  </a>
                </div>
              </div>

              <div class="mb-6 mr-auto w-full shrink-0 grow-0 basis-auto px-3 md:mb-0 md:w-9/12 xl:w-8/12">
                <h5 class="mb-[0.1rem] text-lg font-bold">Exhibition in Paris</h5>
                <p class="mb-6 text-neutral-500 dark:text-neutral-300 line-clamp-1">
                  <small>Published <u>12.01.2022</u> by
                    <a href="#!" class="text-red-700 font-bold">Halley Frank</a></small>
                </p>
              </div>
            </div>

            <div class="flex flex-wrap">
              <div class="mb-6 ml-auto w-full shrink-0 grow-0 basis-auto px-3 md:mb-0 md:w-3/12">
                <div class="relative mb-6 overflow-hidden rounded-lg bg-cover bg-no-repeat shadow-lg dark:shadow-black/20"
                  data-te-ripple-init data-te-ripple-color="light">
                  <img src="https://mdbcdn.b-cdn.net/img/new/standard/city/059.jpg" class="w-full" alt="Louvre" />
                  <a href="#!">
                    <div
                      class="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100 bg-[hsla(0,0%,98.4%,.15)]">
                    </div>
                  </a>
                </div>
              </div>

              <div class="mb-6 mr-auto w-full shrink-0 grow-0 basis-auto px-3 md:mb-0 md:w-9/12 xl:w-8/12">
                <h5 class="mb-[0.1rem] text-lg font-bold">Stock market boom</h5>
                <p class="mb-6 text-neutral-500 dark:text-neutral-300 line-clamp-1">
                  <small>Published <u>10.01.2022</u> by
                    <a href="#!" class="text-red-700 font-bold">Joe Svan</a></small>
                </p>
              </div>
            </div>

            <div class="flex flex-wrap">
              <div class="mb-6 ml-auto w-full shrink-0 grow-0 basis-auto px-3 md:mb-0 md:w-3/12">
                <div class="relative mb-6 overflow-hidden rounded-lg bg-cover bg-no-repeat shadow-lg dark:shadow-black/20"
                  data-te-ripple-init data-te-ripple-color="light">
                  <img src="https://mdbcdn.b-cdn.net/img/new/standard/city/018.jpg" class="w-full" alt="Louvre" />
                  <a href="#!">
                    <div
                      class="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100 bg-[hsla(0,0%,98.4%,.15)]">
                    </div>
                  </a>
                </div>
              </div>

              <div class="mb-6 mr-auto w-full shrink-0 grow-0 basis-auto px-3 md:mb-0 md:w-9/12 xl:w-8/12">
                <h5 class="mb-[0.1rem] text-lg font-bold">Welcome to California</h5>
                <p class="mb-6 text-neutral-500 dark:text-neutral-300 line-clamp-1">
                  <small>Published <u>13.01.2022</u> by
                    <a href="#!" class="text-red-700 font-bold">Anna Maria Doe</a></small>
                </p>
              </div>
            </div>

            <div class="flex flex-wrap">
              <div class="mb-6 ml-auto w-full shrink-0 grow-0 basis-auto px-3 md:mb-0 md:w-3/12">
                <div class="relative mb-6 overflow-hidden rounded-lg bg-cover bg-no-repeat shadow-lg dark:shadow-black/20"
                  data-te-ripple-init data-te-ripple-color="light">
                  <img src="https://mdbcdn.b-cdn.net/img/new/standard/city/032.jpg" class="w-full" alt="Louvre" />
                  <a href="#!" class="text-red-700 font-bold">
                    <div
                      class="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100 bg-[hsla(0,0%,98.4%,.15)]">
                    </div>
                  </a>
                </div>
              </div>

              <div class="mb-6 mr-auto w-full shrink-0 grow-0 basis-auto px-3 md:mb-0 md:w-9/12 xl:w-8/12">
                <h5 class="mb-[0.1rem] text-lg font-bold">Exhibition in Paris</h5>
                <p class="mb-6 text-neutral-500 dark:text-neutral-300 line-clamp-1">
                  <small>Published <u>12.01.2022</u> by
                    <a href="#!" class="text-red-700 font-bold">Halley Frank</a></small>
                </p>
              </div>
            </div>

            <div class="flex flex-wrap">
              <div class="mb-6 ml-auto w-full shrink-0 grow-0 basis-auto px-3 md:mb-0 md:w-3/12">
                <div class="relative mb-6 overflow-hidden rounded-lg bg-cover bg-no-repeat shadow-lg dark:shadow-black/20"
                  data-te-ripple-init data-te-ripple-color="light">
                  <img src="https://mdbcdn.b-cdn.net/img/new/standard/city/059.jpg" class="w-full" alt="Louvre" />
                  <a href="#!">
                    <div
                      class="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100 bg-[hsla(0,0%,98.4%,.15)]">
                    </div>
                  </a>
                </div>
              </div>

              <div class="mb-6 mr-auto w-full shrink-0 grow-0 basis-auto px-3 md:mb-0 md:w-9/12 xl:w-8/12">
                <h5 class="mb-[0.1rem] text-lg font-bold">Stock market boom</h5>
                <p class="mb-6 text-neutral-500 dark:text-neutral-300 line-clamp-1">
                  <small>Published <u>10.01.2022</u> by
                    <a href="#!" class="text-red-700 font-bold">Joe Svan</a></small>
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  </section>
</div>
</template>
<script>
import axios from 'axios';

export default {
  data() {
    return {
      loading: true,
      loading_sub: true,
      articles: [],
      defaultImg : 'https://via.placeholder.com/50'
    };
  },
  mounted() {
    this.fetchAppleNews();
    setTimeout(() => {
      // Fetch data here (replace setTimeout with your actual API request)
      // Once data is fetched, set loading to false
      this.loading = false;
      this.loading_sub = false;
      // Example: fetchArticles().then(articles => this.articles = articles);
    }, 3000);
  },
  methods: {
    async fetchAppleNews() {
      try {
        const response = await axios.get('https://newsapi.org/v2/everything', {
          params: {
            q: 'apple',
            from: '2024-02-15',
            to: '2024-02-15',
            sortBy: 'popularity',
            pageSize: 12,
            apiKey: 'c7e71e98603940b9950b8f04c8cd8cec'
          }
        });
        this.articles = response.data.articles;
        // this.loading = false;
        console.log(this.articles);
      } catch (error) {
        console.error('Error fetching Apple news:', error);
      }
    }
  }
};
</script>
