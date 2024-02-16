<template>
<div class="container my-12 mx-auto xl:px-32 lg:px-12">
  <section class="mb-32 text-center">
    <h2 class="mb-12 text-center text-3xl font-bold">News book</h2>
    <div class="flex">
        <!-- News main container -->
      <div class="grid gap-6 lg:grid-cols-3 xl:gap-x-12">
        <div v-for="article in articles" :key="article.title" class="mb-6 lg:mb-0">
          <div class="relative mb-6 overflow-hidden rounded-lg bg-cover bg-no-repeat shadow-lg dark:shadow-black/20">
            <img :src="article.urlToImage || defaultImg" :alt="article.title + ' Image'" class="w-full h-48" />
            <a href="#!">
              <div class="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100 bg-[hsla(0,0%,98.4%,.15)]">
              </div>
            </a>
          </div>

          <h5 class="mb-3 text-lg font-bold line-clamp-2">{{ article.title }}</h5>
        </div>
      </div>

      <!-- Sub news container -->
      <div class="container">
        <section class="mb-32 text-center md:text-left">
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

            <div class="mb-6 mr-auto w-full shrink-0 grow-0 basis-auto px-3 md:mb-0 md:w-9/12 xl:w-7/12">
              <h5 class="mb-3 text-lg font-bold">Welcome to California</h5>
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

            <div class="mb-6 mr-auto w-full shrink-0 grow-0 basis-auto px-3 md:mb-0 md:w-9/12 xl:w-7/12">
              <h5 class="mb-3 text-lg font-bold">Exhibition in Paris</h5>
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

            <div class="mb-6 mr-auto w-full shrink-0 grow-0 basis-auto px-3 md:mb-0 md:w-9/12 xl:w-7/12">
              <h5 class="mb-3 text-lg font-bold">Stock market boom</h5>
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

            <div class="mb-6 mr-auto w-full shrink-0 grow-0 basis-auto px-3 md:mb-0 md:w-9/12 xl:w-7/12">
              <h5 class="mb-3 text-lg font-bold">Welcome to California</h5>
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

            <div class="mb-6 mr-auto w-full shrink-0 grow-0 basis-auto px-3 md:mb-0 md:w-9/12 xl:w-7/12">
              <h5 class="mb-3 text-lg font-bold">Exhibition in Paris</h5>
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

            <div class="mb-6 mr-auto w-full shrink-0 grow-0 basis-auto px-3 md:mb-0 md:w-9/12 xl:w-7/12">
              <h5 class="mb-3 text-lg font-bold">Stock market boom</h5>
              <p class="mb-6 text-neutral-500 dark:text-neutral-300 line-clamp-1">
                <small>Published <u>10.01.2022</u> by
                  <a href="#!" class="text-red-700 font-bold">Joe Svan</a></small>
              </p>
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
      articles: [],
      defaultImg : 'https://via.placeholder.com/50'
    };
  },
  mounted() {
    this.fetchAppleNews();
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
        console.log(this.articles);
      } catch (error) {
        console.error('Error fetching Apple news:', error);
      }
    }
  }
};
</script>
