<template>
  <div>
    <nav
      class="flex items-center px-20 xl:flex-row flex-col  py-0 border-b-[1px] border-gray-300 mb-8">
      <div class="w-1/5">
        <img
          class="w-[120px] h-[120px]"
          src="https://static.vecteezy.com/system/resources/previews/000/599/214/original/book-reading-logo-and-symbols-template-icons-vector.jpg"
          alt="" />
      </div>
      <div class="flex justify-around py-0 items-center w-4/5">
        <div class="group relative inline-block text-center mr-8">
        <span class="material-symbols-outlined text-4xl cursor-pointer">
          widgets
        </span>
        <div
          class="group-hover:block dropdown-menu absolute hidden h-auto z-30 left-[410px] transform -translate-x-1/2 top-[85px]" >
          <ul class="top-0 w-[1280px] bg-white shadow px-6 py-8">
            <li class="hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap">
              <router-link to="/">Home</router-link>
            </li>
            <li><router-link to="/about">About</router-link></li>
            <li><a href="#" class=" ">Item 3</a></li>
          </ul>
        </div>
      </div>

      <div class="w-3/4 hidden md:block lg:block xl:block">
        <form action="" method="post">
          <label
            for="default-search"
            class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label >
          <div class="relative">
            <div
              class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none" >
              <svg
                class="w-4 h-4 text-gray-500 dark:text-gray-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20">
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
              </svg>
            </div>
            <input
              type="search"
              id="default-search"
              class="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Search Mockups, Logos..."
              required/>
            <button
              type="submit"
              class="text-white hidden xl:block absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
              Search
            </button>
          </div>
        </form>
      </div>
      <div class="flex justify-between">
        <div class="flex flex-col cursor-pointer mx-8">
          <span class="material-symbols-outlined text-4xl">notifications</span>
          <p class="text-gray-700 block px-4 py-2 text-sm">Thông báo</p>
        </div>
        <div class="flex flex-col cursor-pointer">
          <span class="material-symbols-outlined text-4xl">person</span>
          <p class="text-gray-700 block px-4 py-2 text-sm">Tài khoản</p>
        </div>
      </div>
      </div>
    </nav>
    <router-view></router-view>
    

<footer class="bg-gray-800 rounded-lg shadow m-4 dark:bg-gray-800">
    <div class="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
      <span class="text-sm text-white sm:text-center dark:text-white">© 2023 <a href="https://flowbite.com/" class="hover:underline">Flowbite™</a>. All Rights Reserved.
    </span>
    <ul class="flex flex-wrap items-center mt-3 text-sm font-medium text-white dark:text-white sm:mt-0">
        <li>
            <a href="#" class="hover:underline me-4 md:me-6">About</a>
        </li>
        <li>
            <a href="#" class="hover:underline me-4 md:me-6">Privacy Policy</a>
        </li>
        <li>
            <a href="#" class="hover:underline me-4 md:me-6">Licensing</a>
        </li>
        <li>
            <a href="#" class="hover:underline">Contact</a>
        </li>
    </ul>
    </div>
</footer>

  </div>
</template>

<script>
export default {
  name: "DefaultLayout",
  components: {},
};
</script>
