<template>
  <!-- <div class="fixed z-10 w-full left-0 top-0 intro h-[100vh] bg-[#161616]" ref="intro">
      <h1 class="text-2xl font-bold absolute top-1/2 text-white left-1/2 transform -translate-x-1/2 -translate-y-1/2"  ref="logo">
         <span class="logo relative inline-block bottom-[-20px] opacity-0 mr-2" ref="logoSpan">Book</span>
         <span class="logo relative inline-block bottom-[-20px] opacity-0" ref="logoSpan">Compare</span>
      </h1>
  </div> -->
  <loading-spinner v-if="loading"></loading-spinner>
  <div>
    <div class="p-0 xl:px-32 lg:px-12 2xl:px-72 ">
      <div class="py-4">
        <div class="flex text-[0.75rem] tracking-wide items-center justify-between">
          <div class="">
              <p><span class="text-red-600 font-bold">Sosanhsach</span>- Website so sánh các sản phẩm về sách</p>
          </div>
          <div class="hidden w-2/5 md:block lg:block xl:block">
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
                  placeholder="Tìm kiếm sách, bài viết, ..."
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
          <div class="xl:flex lg:flex">
            <div class="xl:flex flex-col cursor-pointer justify-center hidden">
              <div class="relative inline-flex mx-auto w-fit">
                <div
                  class="absolute bottom-auto left-auto right-0 top-0 z-10 inline-block -translate-y-1/2 translate-x-2/4 rotate-0 skew-x-0 skew-y-0 scale-x-75 scale-y-75 whitespace-nowrap rounded-full bg-indigo-700 px-2.5 py-1 text-center align-baseline text-xs font-bold leading-none text-white">
                  99+
                </div>
                <span class="material-symbols-outlined text-2xl">notifications</span>
              </div>
              <p class="text-gray-600 block px-4 py-2">Thông báo</p>
            </div>
            <div class="flex flex-col cursor-pointer">
              <div v-if="!token">
                <router-link to="/login">
                  <span class="material-symbols-outlined sm:text-2xl text-4xl">person</span>
                  <p class="text-gray-600 sm:block hidden px-4 py-2 text-sm">Tài khoản</p>
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
      </div>
      <nav
        class="flex items-center  py-0 px-0 h-[50px] border-b-[1px] border-gray-300 mb-4 justify-between">
        <div class="flex w-full md:w-2/5 justify-between py-0 items-center tracking-wide">
          <div class=" leading-10">
            <img
              class="w-[120px] h-[120px] mix-blend-multiply mb-2"
              src="https://static.vecteezy.com/system/resources/previews/000/599/214/original/book-reading-logo-and-symbols-template-icons-vector.jpg"
              alt=""/>
          </div>
          <div class="w-[120px]">
            <div class="group relative md:hidden text-center w-1/5 inline-block">
                <span 
                  class="material-symbols-outlined text-4xl cursor-pointer" 
                  data-te-sidenav-toggle-ref
                  data-te-target="#sidenav-1"
                  aria-controls="#sidenav-1"
                  aria-haspopup="true">
                    widgets
                </span>
          </div>
  
          <!-- Sidenav -->
          <nav
            id="sidenav-1"
            class="absolute left-0 top-0 z-[1035] h-full w-60 -translate-x-full overflow-hidden bg-white shadow-[0_4px_12px_0_rgba(0,0,0,0.07),_0_2px_4px_rgba(0,0,0,0.05)] data-[te-sidenav-hidden='false']:translate-x-0 dark:bg-zinc-800"
            data-te-sidenav-init
            data-te-sidenav-hidden="true"
            data-te-sidenav-position="absolute">
            <ul class="relative m-0 list-none px-[0.2rem]" data-te-sidenav-menu-ref>
              <li class="relative">
                <a
                  class="flex h-12 cursor-pointer items-center truncate rounded-[5px] px-6 py-4 text-[0.875rem] text-gray-600 outline-none transition duration-300 ease-linear hover:bg-slate-50 hover:text-inherit hover:outline-none focus:bg-slate-50 focus:text-inherit focus:outline-none active:bg-slate-50 active:text-inherit active:outline-none data-[te-sidenav-state-active]:text-inherit data-[te-sidenav-state-focus]:outline-none motion-reduce:transition-none dark:text-gray-300 dark:hover:bg-white/10 dark:focus:bg-white/10 dark:active:bg-white/10"
                  data-te-sidenav-link-ref>
                  <span
                    class="mr-4 [&>svg]:h-4 [&>svg]:w-4 [&>svg]:text-gray-400 dark:[&>svg]:text-gray-300">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      class="h-4 w-4">
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M15.182 15.182a4.5 4.5 0 01-6.364 0M21 12a9 9 0 11-18 0 9 9 0 0118 0zM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75zm-.375 0h.008v.015h-.008V9.75zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75zm-.375 0h.008v.015h-.008V9.75z" />
                    </svg>
                  </span>
                  <span>Link 1</span>
                </a>
              </li>
              <li class="relative">
                <a
                  class="flex h-12 cursor-pointer items-center truncate rounded-[5px] px-6 py-4 text-[0.875rem] text-gray-600 outline-none transition duration-300 ease-linear hover:bg-slate-50 hover:text-inherit hover:outline-none focus:bg-slate-50 focus:text-inherit focus:outline-none active:bg-slate-50 active:text-inherit active:outline-none data-[te-sidenav-state-active]:text-inherit data-[te-sidenav-state-focus]:outline-none motion-reduce:transition-none dark:text-gray-300 dark:hover:bg-white/10 dark:focus:bg-white/10 dark:active:bg-white/10"
                  data-te-sidenav-link-ref>
                  <span
                    class="mr-4 [&>svg]:h-4 [&>svg]:w-4 [&>svg]:text-gray-400 dark:[&>svg]:text-gray-300">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      class="h-4 w-4">
                      <path
                        fill-rule="evenodd"
                        d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm-2.625 6c-.54 0-.828.419-.936.634a1.96 1.96 0 00-.189.866c0 .298.059.605.189.866.108.215.395.634.936.634.54 0 .828-.419.936-.634.13-.26.189-.568.189-.866 0-.298-.059-.605-.189-.866-.108-.215-.395-.634-.936-.634zm4.314.634c.108-.215.395-.634.936-.634.54 0 .828.419.936.634.13.26.189.568.189.866 0 .298-.059.605-.189.866-.108.215-.395.634-.936.634-.54 0-.828-.419-.936-.634a1.96 1.96 0 01-.189-.866c0-.298.059-.605.189-.866zm2.023 6.828a.75.75 0 10-1.06-1.06 3.75 3.75 0 01-5.304 0 .75.75 0 00-1.06 1.06 5.25 5.25 0 007.424 0z"
                        clip-rule="evenodd" />
                    </svg>
                  </span>
                  <span>Category 1</span>
                  <span
                    class="absolute right-0 ml-auto mr-[0.8rem] transition-transform duration-300 ease-linear motion-reduce:transition-none [&>svg]:text-gray-600 dark:[&>svg]:text-gray-300"
                    data-te-sidenav-rotate-icon-ref>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      class="h-5 w-5">
                      <path
                        fill-rule="evenodd"
                        d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                        clip-rule="evenodd" />
                    </svg>
                  </span>
                </a>
                <ul
                  class="!visible relative m-0 hidden list-none p-0 data-[te-collapse-show]:block "
                  data-te-sidenav-collapse-ref
                  data-te-collapse-show>
                  <li class="relative">
                    <a
                      class="flex h-6 cursor-pointer items-center truncate rounded-[5px] py-4 pl-[3.4rem] pr-6 text-[0.78rem] text-gray-600 outline-none transition duration-300 ease-linear hover:bg-slate-50 hover:text-inherit hover:outline-none focus:bg-slate-50 focus:text-inherit focus:outline-none active:bg-slate-50 active:text-inherit active:outline-none data-[te-sidenav-state-active]:text-inherit data-[te-sidenav-state-focus]:outline-none motion-reduce:transition-none dark:text-gray-300 dark:hover:bg-white/10 dark:focus:bg-white/10 dark:active:bg-white/10"
                      data-te-sidenav-link-ref
                      >Link 2</a
                    >
                  </li>
                  <li class="relative">
                    <a
                      class="flex h-6 cursor-pointer items-center truncate rounded-[5px] py-4 pl-[3.4rem] pr-6 text-[0.78rem] text-gray-600 outline-none transition duration-300 ease-linear hover:bg-slate-50 hover:text-inherit hover:outline-none focus:bg-slate-50 focus:text-inherit focus:outline-none active:bg-slate-50 active:text-inherit active:outline-none data-[te-sidenav-state-active]:text-inherit data-[te-sidenav-state-focus]:outline-none motion-reduce:transition-none dark:text-gray-300 dark:hover:bg-white/10 dark:focus:bg-white/10 dark:active:bg-white/10"
                      data-te-sidenav-link-ref
                      >Link 3</a
                    >
                  </li>
                </ul>
              </li>
              <li class="relative">
                <a
                  class="flex h-12 cursor-pointer items-center truncate rounded-[5px] px-6 py-4 text-[0.875rem] text-gray-600 outline-none transition duration-300 ease-linear hover:bg-slate-50 hover:text-inherit hover:outline-none focus:bg-slate-50 focus:text-inherit focus:outline-none active:bg-slate-50 active:text-inherit active:outline-none data-[te-sidenav-state-active]:text-inherit data-[te-sidenav-state-focus]:outline-none motion-reduce:transition-none dark:text-gray-300 dark:hover:bg-white/10 dark:focus:bg-white/10 dark:active:bg-white/10"
                  data-te-sidenav-link-ref>
                  <span
                    class="mr-4 [&>svg]:h-4 [&>svg]:w-4 [&>svg]:text-gray-400 dark:[&>svg]:text-gray-300">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      class="h-4 w-4">
                      <path
                        fill-rule="evenodd"
                        d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm-2.625 6c-.54 0-.828.419-.936.634a1.96 1.96 0 00-.189.866c0 .298.059.605.189.866.108.215.395.634.936.634.54 0 .828-.419.936-.634.13-.26.189-.568.189-.866 0-.298-.059-.605-.189-.866-.108-.215-.395-.634-.936-.634zm4.314.634c.108-.215.395-.634.936-.634.54 0 .828.419.936.634.13.26.189.568.189.866 0 .298-.059.605-.189.866-.108.215-.395.634-.936.634-.54 0-.828-.419-.936-.634a1.96 1.96 0 01-.189-.866c0-.298.059-.605.189-.866zm2.023 6.828a.75.75 0 10-1.06-1.06 3.75 3.75 0 01-5.304 0 .75.75 0 00-1.06 1.06 5.25 5.25 0 007.424 0z"
                        clip-rule="evenodd" />
                    </svg>
                  </span>
                  <span>Category 2</span>
                  <span
                    class="absolute right-0 ml-auto mr-[0.8rem] transition-transform duration-300 ease-linear motion-reduce:transition-none [&>svg]:text-gray-600 dark:[&>svg]:text-gray-300"
                    data-te-sidenav-rotate-icon-ref>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      class="h-5 w-5">
                      <path
                        fill-rule="evenodd"
                        d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                        clip-rule="evenodd" />
                    </svg>
                  </span>
                </a>
                <ul
                  class="show !visible relative m-0 hidden list-none p-0 data-[te-collapse-show]:block "
                  data-te-sidenav-collapse-ref>
                  <li class="relative">
                    <a
                      class="flex h-6 cursor-pointer items-center truncate rounded-[5px] py-4 pl-[3.4rem] pr-6 text-[0.78rem] text-gray-600 outline-none transition duration-300 ease-linear hover:bg-slate-50 hover:text-inherit hover:outline-none focus:bg-slate-50 focus:text-inherit focus:outline-none active:bg-slate-50 active:text-inherit active:outline-none data-[te-sidenav-state-active]:text-inherit data-[te-sidenav-state-focus]:outline-none motion-reduce:transition-none dark:text-gray-300 dark:hover:bg-white/10 dark:focus:bg-white/10 dark:active:bg-white/10"
                      data-te-sidenav-link-ref
                      >Link 4</a
                    >
                  </li>
                  <li class="relative">
                    <a
                      class="flex h-6 cursor-pointer items-center truncate rounded-[5px] py-4 pl-[3.4rem] pr-6 text-[0.78rem] text-gray-600 outline-none transition duration-300 ease-linear hover:bg-slate-50 hover:text-inherit hover:outline-none focus:bg-slate-50 focus:text-inherit focus:outline-none active:bg-slate-50 active:text-inherit active:outline-none data-[te-sidenav-state-active]:text-inherit data-[te-sidenav-state-focus]:outline-none motion-reduce:transition-none dark:text-gray-300 dark:hover:bg-white/10 dark:focus:bg-white/10 dark:active:bg-white/10"
                      data-te-sidenav-link-ref
                      >Link 5</a
                    >
                  </li>
                </ul>
              </li>
            </ul>
          </nav>
  
          </div>
          <!-- Drawer -->
  
  
          <!-- End Drawer -->

        </div>
        <div class="w-3/4 hidden md:block">
            <ul class="flex justify-between text-[1rem] uppercase">
              <li>
                <router-link to="/admin" class="text-[#183d6d]">
                Giảm giá sốc
                </router-link>
              </li>
              <li>
                <router-link to="/admin" class="text-[#183d6d]">
                Bán chạy
                </router-link>
              </li>
              <li>
                <router-link to="/admin" class="text-[#183d6d]">
                Sản phẩm mới
                </router-link>
              </li>
              <li>
                <router-link to="/news" class="text-[#183d6d]">
                Blog +
                </router-link>
              </li>
            </ul>
        </div>
      </nav>
      <marquee scrollamount="14" class="mb-4">
        <span class="text-red-600 font-bold">Sosanhsach.com</span>
        - Chào mừng bạn đến với trang web của chúng tôi - nơi bạn có thể so sánh và khám phá hàng ngàn cuốn sách.
         Tìm kiếm, lọc và đọc những đánh giá từ cộng đồng độc giả.
         Dù bạn đang tìm kiếm những cuốn sách bán chạy nhất, những tác phẩm kinh điển hoặc những ấn phẩm mới nhất, chúng tôi đều có mọi thứ để đáp ứng nhu cầu đọc sách của bạn.
         Hãy tham gia ngay để khám phá những cuốn sách tốt nhất!
      </marquee>
    </div>
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
import { Sidenav, initTE } from "tw-elements"
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
  mounted(){
    initTE({ Sidenav });
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

