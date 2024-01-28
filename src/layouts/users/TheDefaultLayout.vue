<template>
  <!-- <div class="fixed z-10 w-full left-0 top-0 intro h-[100vh] bg-[#161616]" ref="intro">
      <h1 class="text-2xl font-bold absolute top-1/2 text-white left-1/2 transform -translate-x-1/2 -translate-y-1/2"  ref="logo">
         <span class="logo relative inline-block bottom-[-20px] opacity-0 mr-2" ref="logoSpan">Book</span>
         <span class="logo relative inline-block bottom-[-20px] opacity-0" ref="logoSpan">Compare</span>
      </h1>
  </div> -->
  <loading-spinner v-if="loading"></loading-spinner>
  <div>
    <nav
      class="flex items-center p-0 xl:px-32 lg:px-12 2xl:px-32 xl:flex-row flex-col py-0 border-b-[1px] border-gray-300 mb-8">
    <div class="flex xl:justify-around lg:justify-around justify-between py-0 items-center w-full">
        <div>
          <img
            class="w-[120px] h-[120px]"
            src="https://static.vecteezy.com/system/resources/previews/000/599/214/original/book-reading-logo-and-symbols-template-icons-vector.jpg"
            alt=""/>
        </div>
        <div class="group relative inline-block text-center w-1/5">
              <span class="material-symbols-outlined text-4xl cursor-pointer">
                      widgets
              </span>

          <div
            class="group-hover:block dropdown-menu absolute hidden h-auto z-30 left-[410px] transform -translate-x-1/2 top-[85px]"
          >
            <ul class="top-0 w-[1280px] bg-white shadow px-6 py-8">
              <li class="hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap">
                <router-link to="/">Home</router-link>
              </li>
              <li><router-link to="/about">About</router-link></li>
              <li><a href="#" class=" ">Item 3</a></li>
            </ul>
          </div>
        </div>

        <!-- Drawer -->


        <!-- End Drawer -->

        <div class="w-3/4 hidden md:block lg:block xl:block">
          <form action="" method="post">
            <label
              for="default-search"
              class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
              >Search</label
            >
            <div class="relative">
              <div
                class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none"
              >
                <svg
                  class="w-4 h-4 text-gray-500 dark:text-gray-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                  />
                </svg>
              </div>
              <input
                type="search"
                id="default-search"
                class="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Search Mockups, Logos..."
                required
              />
              <button
                type="submit"
                class="text-white hidden xl:block absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Search
              </button>
            </div>
          </form>
        </div>
        <div class="xl:flex lg:flex hidden justify-end w-1/3">
          <div class="flex flex-col cursor-pointer justify-center">
            <span class="material-symbols-outlined text-2xl"
              >notifications</span
            >
            <p class="text-gray-600 block px-4 py-2 text-sm">Thông báo</p>
          </div>
          <div class="flex flex-col cursor-pointer">
            <div v-if="!token">
              <router-link to="/login">
                <span class="material-symbols-outlined text-2xl">person</span>
                <p class="text-gray-600 block px-4 py-2 text-sm">Tài khoản</p>
              </router-link>
            </div>
            <div v-else>
              <img id="avatarButton" @click="toggleDropdown" type="button" data-dropdown-toggle="userDropdown" data-dropdown-placement="bottom-start" class="w-20 h-20 object-contain rounded-full cursor-pointer" src="https://th.bing.com/th/id/OIP.52T8HHBWh6b0dwrG6tSpVQHaFe?rs=1&pid=ImgDetMain" alt="User dropdown">
              <!-- Dropdown menu -->
              <div v-if="isDropdownVisible" id="userDropdown" class="z-10 fixed top-24 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600">
                  <div class="px-4 py-3 text-sm text-gray-900 dark:text-white">
                    <div>Bonnie Green</div>
                    <div class="font-medium truncate">name@flowbite.com</div>
                  </div>
                  <ul class="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="avatarButton">
                    <li>
                      <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</a>
                    </li>
                    <li>
                      <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Settings</a>
                    </li>
                    <li>
                      <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Earnings</a>
                    </li>
                  </ul>
                  <div class="py-1">
                    <a href="#" @click.prevent="signOut" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Sign out</a>
                  </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
    <router-view></router-view>

    <footer class="bg-gray-800 rounded-lg shadow m-4 dark:bg-gray-800">
  <div class="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
    <span class="text-sm text-white sm:text-center dark:text-white">
      © 2023
      <a href="https://flowbite.com/" class="hover:underline">Flowbite™</a>.
      All Rights Reserved.
    </span>
    <ul class="flex justify-center flex-wrap  mt-3 text-sm font-medium text-white dark:text-white sm:mt-0">
      <li class="mb-2 md:mb-0">
        <a href="#" class="hover:underline me-4 md:me-6">About</a>
      </li>
      <li class="mb-2 md:mb-0">
        <a href="#" class="hover:underline me-4 md:me-6">Privacy Policy</a>
      </li>
      <li class="mb-2 md:mb-0">
        <a href="#" class="hover:underline me-4 md:me-6">Licensing</a>
      </li>
      <li>
        <a href="#"  class="hover:underline">Contact</a>
      </li>
    </ul>
  </div>
</footer>

  </div>
</template>

<script>
import LoadingSpinner from '@/components/loading.vue';
export default {
  name: "DefaultLayout",
  components: {
    'loading-spinner': LoadingSpinner,
  },
  data(){
    return {
        drawer: false,
        loading: false,
        isDropdownVisible: false,
        token: localStorage.getItem('token'),
      };
  },
  beforeRouteLeave(to, from, next) {
    // Display spinner when starting to navigate
    this.loading = true;

    // Continue navigation after 1 second (adjust the time as needed)
    setTimeout(() => {
      // Hide spinner after navigation is complete
      this.loading = false;
      next();
    }, 700); // Adjust the time as needed
  },
  methods:{
    toggleDropdown() {
      console.log(this.hasToken);
      // Toggle the visibility of the dropdown menu
      this.isDropdownVisible = !this.isDropdownVisible;
    },
    signOut() {
      // Remove token from localStorage
      localStorage.removeItem('token');

      // Refresh the page
      setTimeout(() => {
        this.loading = true;
        location.reload();
      }, 700);
    },
  }
  // mounted(){
  //   const intro = this.$refs.intro;
  //   const logoSpans = document.querySelectorAll('.logo');
  //   window.addEventListener('DOMContentLoaded',()=>{
  //     setTimeout(() => {

  //       logoSpans.forEach((span,index)=>{
  //         setTimeout(() => {
  //           span.classList.add('active');
  //         }, (index + 1) * 400);
  //       })


  //       setTimeout(() => {
  //         logoSpans.forEach((span,index)=>{
  //           setTimeout(() => {
  //             span.classList.remove('active');
  //             span.classList.add('fade');
  //           }, (index + 1) * 50);
  //         })
  //       }, 2000);

  //       setTimeout(() => {
  //         intro.style.top = "-100vh";
  //       }, 2300);

  //     });
  //   })
  // }
};
</script>

<!-- <style scoped>
    .logo.active{
      bottom: 0;
      opacity: 1;
      transition: ease-in-out 0.7s;
    }
    .logo.fade{
      bottom:150px;
      opacity: 0;
      transition: ease-in-out 0.5s;
    }
    .intro{
      transition: 1s;
    }
</style> -->
