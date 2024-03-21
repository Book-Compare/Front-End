<template>
  <loading-spinner v-if="loading"></loading-spinner>
  <div>
    <div class="p-0">
      <div class="xl:px-36 px-2 border-b-[1px] border-gray-300 mb-4">
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
                  {{ $t('button.search') }}
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
                <p class="text-gray-600 block px-4 py-2">{{ $t('title.notification') }}</p>
              </div>
              <div class="flex flex-col cursor-pointer">
                <div v-if="!token">
                    <div>
                      <div type="button"
                          class="inline-block  pb-2 pt-2.5 text-xs leading-normal"
                          data-te-toggle="modal"
                          data-te-target="#exampleModalFirst1"
                          data-te-ripple-init
                          data-te-ripple-color="light">
                          <span class="material-symbols-outlined sm:text-2xl text-4xl">person</span>
                          <p class="text-gray-600 block px-4 py-2">{{ $t('title.account') }}</p>
                      </div>
                      <!-- Login Modal -->
                      <div
                        data-te-modal-init
                        class="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-[1055] hidden h-auto w-full overflow-y-auto overflow-x-hidden outline-none"
                        id="exampleModalFirst1"
                        tabindex="-1"
                        aria-labelledby="exampleModalFirstLabel1"
                        aria-hidden="true">
                        <div
                          data-te-modal-dialog-ref
                          class="pointer-events-none relative w-auto translate-y-[-50px] opacity-0 transition-all duration-300 ease-in-out min-[576px]:mx-auto min-[576px]:mt-7 min-[576px]:max-w-[500px]">
                            <div
                              class="pointer-events-auto relative flex w-full flex-col rounded-md border-none bg-white bg-clip-padding text-current shadow-lg outline-none dark:bg-neutral-600">
                              <div
                              class="flex flex-shrink-0 items-center justify-end rounded-t-md p-4 dark:border-opacity-50">
                              <!--Close button-->
                              <button
                                type="button"
                                class="box-content rounded-none border-none hover:no-underline hover:opacity-75 focus:opacity-100 focus:shadow-none focus:outline-none"
                                data-te-modal-dismiss
                                aria-label="Close">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  stroke-width="1.5"
                                  stroke="currentColor"
                                  class="h-6 w-6">
                                  <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    d="M6 18L18 6M6 6l12 12" />
                                </svg>
                              </button>
                            </div>
                              <div class="flex flex-col sm:mx-auto sm:w-full sm:max-w-sm">
                                <h5
                                  class="text-2xl font-medium leading-normal text-neutral-800 dark:text-neutral-200"
                                  id="exampleModalCenterTitle">
                                  Chào mừng bạn!!!
                                </h5>
                                <p>Hãy tiến hành Đăng nhập để sử dụng các chức năng của website hoặc Đăng ký và trở thành thành viên ngay hôm nay!</p>
                              </div>
                              <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                                <form class="space-y-6" action="#" method="POST">
                                  <div class="">
                                    <label for="email" class="text-start block text-sm font-medium leading-6 text-gray-900">{{ $t('input.email.label') }}</label>
                                    <div class="mt-2">
                                        <input id="email" :placeholder="$t('input.email.placeholder')" name="email" type="email" autocomplete="email" required class="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
                                    </div>
                                  </div>
  
                                  <div>
                                    <div class="flex items-center justify-between">
                                      <label for="password" class="block text-sm font-medium leading-6 text-gray-900">{{ $t('input.password.label') }}</label>
                                      <div class="text-sm">
                                        <a href="#" class="font-semibold text-indigo-600 hover:text-indigo-500">{{ $t('input.password.forgot') }}?</a>
                                      </div>
                                    </div>
                                    <div class="mt-2">
                                       <input id="password" :placeholder="$t('input.password.placeholder')" name="password" type="password" autocomplete="current-password" required class="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
                                    </div>
                                  </div>
  
                                  <div>
                                      <button type="submit" class="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">{{ $t('button.login') }}</button>
                                  </div>
                                </form>
                                <!-- Separator between social media sign in and email/password sign in -->
                                <div
                                  class="my-4 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-neutral-300 after:mt-0.5 after:flex-1 after:border-t after:border-neutral-300">
                                  <p
                                    class="mx-4 mb-0 text-center text-md text-gray-400 font-semibold dark:text-white">
                                    Or
                                  </p>
                                </div>
                                <!-- Social login -->
                                <div class="flex justify-between gap-2">
                                  <div class="flex px-4 py-2 border rounded-lg justify-center items-center w-1/2">
                                      <svg class="w-4 h-4" aria-hidden="true" viewBox="0 0 24 24">
                                          <path d="M12.0003 4.75C13.7703 4.75 15.3553 5.36002 16.6053 6.54998L20.0303 3.125C17.9502 1.19 15.2353 0 12.0003 0C7.31028 0 3.25527 2.69 1.28027 6.60998L5.27028 9.70498C6.21525 6.86002 8.87028 4.75 12.0003 4.75Z" fill="#EA4335"></path><path d="M23.49 12.275C23.49 11.49 23.415 10.73 23.3 10H12V14.51H18.47C18.18 15.99 17.34 17.25 16.08 18.1L19.945 21.1C22.2 19.01 23.49 15.92 23.49 12.275Z" fill="#4285F4"></path><path d="M5.26498 14.2949C5.02498 13.5699 4.88501 12.7999 4.88501 11.9999C4.88501 11.1999 5.01998 10.4299 5.26498 9.7049L1.275 6.60986C0.46 8.22986 0 10.0599 0 11.9999C0 13.9399 0.46 15.7699 1.28 17.3899L5.26498 14.2949Z" fill="#FBBC05"></path><path d="M12.0004 24.0001C15.2404 24.0001 17.9654 22.935 19.9454 21.095L16.0804 18.095C15.0054 18.82 13.6204 19.245 12.0004 19.245C8.8704 19.245 6.21537 17.135 5.2654 14.29L1.27539 17.385C3.25539 21.31 7.3104 24.0001 12.0004 24.0001Z" fill="#34A853"></path>
                                      </svg>
                                      <span class="text-md ml-2">{{ $t('button.social.google') }}</span>
                                  </div>
                                  <div class="flex px-4 py-2 border rounded-lg justify-center items-center w-1/2">
                                      <svg class="w-4 h-4" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20">
                                          <path fill-rule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z" clip-rule="evenodd"></path>
                                      </svg>
                                      <span class="text-md ml-2">{{ $t('button.social.github') }}</span>
                                  </div>
                                </div>
                                <p class="mt-4 mb-10 text-center text-sm text-gray-500">
                                  Bạn chưa là thành viên?
                                  <a href="#" 
                                  data-te-ripple-init
                                  data-te-ripple-color="light"
                                  data-te-toggle="modal"
                                  data-te-target="#exampleModalSecond"
                                  class="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">Hãy đăng ký ngay hôm nay</a>
                                </p>
                              </div>
                            </div>
                        </div>
                      </div>
  
                      <!-- Register Modal -->
                      <div
                        data-te-modal-init
                        class="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-[1055] hidden h-auto w-full overflow-y-auto overflow-x-hidden outline-none"
                        id="exampleModalSecond"
                        tabindex="-1"
                        aria-labelledby="exampleModalSecondLabel"
                        aria-hidden="true">
                        <div
                          data-te-modal-dialog-ref
                          class="pointer-events-none relative w-auto translate-y-[-50px] opacity-0 transition-all duration-300 ease-in-out min-[576px]:mx-auto min-[576px]:mt-7 min-[576px]:max-w-[500px]">
                          <div
                            class="pointer-events-auto relative flex w-full flex-col rounded-md border-none bg-white bg-clip-padding text-current shadow-lg outline-none dark:bg-neutral-600">
                            <div
                              class="flex flex-shrink-0 items-center justify-end rounded-t-md p-4 dark:border-opacity-50">
                              <!--Close button-->
                              <button
                                type="button"
                                class="box-content rounded-none border-none hover:no-underline hover:opacity-75 focus:opacity-100 focus:shadow-none focus:outline-none"
                                data-te-modal-dismiss
                                aria-label="Close">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  stroke-width="1.5"
                                  stroke="currentColor"
                                  class="h-6 w-6">
                                  <path
                                                        stroke-linecap="round"
                                                        stroke-linejoin="round"
                                    d="M6 18L18 6M6 6l12 12" />
                                </svg>
                              </button>
                            </div>
                            <div class="flex flex-col sm:mx-auto sm:w-full sm:max-w-sm">
                              <h5
                                  class="text-2xl font-medium leading-normal text-[#183D6D] dark:text-neutral-200"
                                  id="exampleModalCenterTitle">
                                  Đăng ký thành viên
                              </h5>
                              <p>Hãy tiến hành Đăng ký và trở thành thành viên ngay hôm nay!</p>
                            </div>
                            <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                              <form class="space-y-4" action="#" method="POST">
                                  <div class="">
                                      <label for="email" class="text-start block text-sm font-medium leading-6 text-gray-900">Email</label>
                                      <div class="mt-2">
                                        <input id="email" placeholder="Nhập email" name="email" type="email" autocomplete="email" required class="block w-full rounded-md border-0 py-1.5 px-2 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
                                      </div>
                                  </div>
  
                                  <div class="">
                                      <label for="name" class="text-start block text-sm font-medium leading-6 text-gray-900">Họ tên</label>
                                      <div class="mt-2">
                                        <input id="name" placeholder="Nhập họ tên" name="name" type="email" autocomplete="email" required class="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
                                      </div>
                                  </div>
  
                                  <div>
                                      <div class="flex items-center justify-start">
                                          <label for="password" class="block text-sm font-medium leading-6 text-gray-900">Mật khẩu</label>
                                      </div>
                                      <div class="mt-2">
                                        <input id="password" placeholder="Nhập mật khẩu" name="password" type="password" autocomplete="current-password" required class="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
                                      </div>
                                  </div>
  
                                  <div>
                                      <div class="flex items-center justify-start">
                                        <label for="confirm_password" class="block text-sm font-medium leading-6 text-gray-900">Nhập lại mật khẩu</label>
                                      </div>
                                      <div class="mt-2">
                                         <input id="confirm_password" placeholder="Nhập lại mật khẩu" name="confirm_password" type="password" autocomplete="current-password" required class="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
                                      </div>
                                  </div>
  
                                  <div>
                                      <button type="submit" class="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Đăng ký</button>
                                  </div>
                              </form>
                              <!-- Separator between social media sign in and email/password sign in -->
                              <div
                                class="my-4 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-neutral-300 after:mt-0.5 after:flex-1 after:border-t after:border-neutral-300">
                                <p
                                  class="mx-4 mb-0 text-center text-md text-gray-400 font-semibold dark:text-white">
                                  Or
                                </p>
                              </div>
                              <!-- Social login -->
                              <div class="flex justify-between gap-2">
                                  <div class="flex px-4 py-2 border rounded-lg justify-center items-center w-1/2">
                                                        <svg class="w-4 h-4" aria-hidden="true" viewBox="0 0 24 24">
                                                          <path d="M12.0003 4.75C13.7703 4.75 15.3553 5.36002 16.6053 6.54998L20.0303 3.125C17.9502 1.19 15.2353 0 12.0003 0C7.31028 0 3.25527 2.69 1.28027 6.60998L5.27028 9.70498C6.21525 6.86002 8.87028 4.75 12.0003 4.75Z" fill="#EA4335"></path><path d="M23.49 12.275C23.49 11.49 23.415 10.73 23.3 10H12V14.51H18.47C18.18 15.99 17.34 17.25 16.08 18.1L19.945 21.1C22.2 19.01 23.49 15.92 23.49 12.275Z" fill="#4285F4"></path><path d="M5.26498 14.2949C5.02498 13.5699 4.88501 12.7999 4.88501 11.9999C4.88501 11.1999 5.01998 10.4299 5.26498 9.7049L1.275 6.60986C0.46 8.22986 0 10.0599 0 11.9999C0 13.9399 0.46 15.7699 1.28 17.3899L5.26498 14.2949Z" fill="#FBBC05"></path><path d="M12.0004 24.0001C15.2404 24.0001 17.9654 22.935 19.9454 21.095L16.0804 18.095C15.0054 18.82 13.6204 19.245 12.0004 19.245C8.8704 19.245 6.21537 17.135 5.2654 14.29L1.27539 17.385C3.25539 21.31 7.3104 24.0001 12.0004 24.0001Z" fill="#34A853"></path>
                                                        </svg>
                                                        <span class="text-md ml-2">Google</span>
                                  </div>
                                  <div class="flex px-4 py-2 border rounded-lg justify-center items-center w-1/2">
                                                        <svg class="w-4 h-4" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20">
                                                          <path fill-rule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z" clip-rule="evenodd"></path>
                                                        </svg>
                                                        <span class="text-md ml-2">Github</span>
                                  </div>
                              </div>
                              <p class="mt-4 mb-10 text-center text-sm text-gray-500">
                                  Bạn đã là thành viên?
                                  <a href="#" 
                                  data-te-ripple-init
                                  data-te-ripple-color="light"
                                  data-te-toggle="modal"
                                  data-te-target="#exampleModalSecond"
                                  class="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">Tiến hành đăng nhập</a>
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
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
          class="flex items-center  py-0 px-0 h-[50px] mb-4 justify-between">
          <div class="flex w-full md:w-2/5 justify-between py-0 items-center tracking-wide">
            <router-link to="/">
              <div class=" leading-10">
                <img
                  class="w-56 h-auto mix-blend-multiply mb-2"
                  :src="Logo" alt="Logo"/>
              </div>
            </router-link>
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
      </div>
      <marquee scrollamount="14" class="mb-4">
        <span class="text-red-600 font-bold">Sosanhsach.com</span>
        - Chào mừng bạn đến với trang web của chúng tôi - nơi bạn có thể so sánh và khám phá hàng ngàn cuốn sách.
         Tìm kiếm, lọc và đọc những đánh giá từ cộng đồng độc giả.
         Dù bạn đang tìm kiếm những cuốn sách bán chạy nhất, những tác phẩm kinh điển hoặc những ấn phẩm mới nhất, chúng tôi đều có mọi thứ để đáp ứng nhu cầu đọc sách của bạn.
         Hãy tham gia ngay để khám phá những cuốn sách tốt nhất!
      </marquee>
    </div>
    <router-view></router-view>

    <!-- Footer -->
    <footer class="bg-neutral-100 text-center text-neutral-600 dark:bg-neutral-600 dark:text-neutral-200">

    <!-- Social media -->
    <div class="flex items-center justify-center border-b-2 border-neutral-200 p-6 dark:border-neutral-500 lg:justify-between">
    <div class="mr-12 hidden md:block xl:px-36 ">
      <span>Get connected with us:</span>
    </div>
    <div class="flex justify-center items-center xl:px-36 ">
      <a
        href="#!"
        class="mr-6 text-neutral-600 dark:text-neutral-200"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-4 w-4"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
        </svg>
      </a>
      <a
        href="#!"
        class="mr-6 text-neutral-600 dark:text-neutral-200"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-4 w-4"
          fill="currentColor"
          viewBox="0 0 512 512"
        >
          <path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z" />
        </svg>
      </a>
      <a
        href="#!"
        class="mr-6 text-neutral-600 dark:text-neutral-200"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-5 w-5"
          fill="currentColor"
          viewBox="0 0 576 512"
        >
          <path
            d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"
            fillRule="evenodd"
            clipRule="evenodd"
          />
        </svg>
      </a>
      <a
        href="#!"
        class="mr-6 text-neutral-600 dark:text-neutral-200"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-4 w-4"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
        </svg>
      </a>
      <a
        href="#!"
        class="mr-6 text-neutral-600 dark:text-neutral-200"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-4 w-4"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
        </svg>
      </a>
      <a href="#!" class="text-neutral-600 dark:text-neutral-200">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-4 w-4"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
        </svg>
      </a>
    </div>
    </div>

    <!-- Main container -->
    <div class="mx-6 pt-8 pb-4 text-center">

    <!-- Text -->
    <div class="mb-6">
    <h5 class="mb-2 font-bold uppercase">Explore Our World</h5>

    <p class="mb-4">
      Embark on an adventure of a lifetime and uncover hidden
      wonders. Your journey begins now!
    </p>
    </div>

    <!-- Links -->
    <div class="grid grid-cols-1 md:grid-cols-3 mb-4">
    <!-- First column -->
    <div class="mb-6">
      <h5 class="mb-2.5 font-bold text-neutral-600 hover:text-neutral-800 dark:text-neutral-200">
        Adventures
      </h5>

      <ul class="mb-0 list-none">
        <li>
          <a href="#!" class="text-neutral-600 hover:text-neutral-800 dark:text-neutral-200">
            Lost Worlds
          </a>
        </li>
        <li>
          <a href="#!" class="text-neutral-600 hover:text-neutral-800 dark:text-neutral-200">
            Unknown Journeys
          </a>
        </li>
        <li>
          <a href="#!" class="text-neutral-600 hover:text-neutral-800 dark:text-neutral-200">
            Hidden Treasures
          </a>
        </li>
        <li>
          <a href="#!" class="text-neutral-600 hover:text-neutral-800 dark:text-neutral-200">
            Enchanted Realms
          </a>
        </li>
      </ul>
    </div>

    <!-- Second column -->
    <div class="mb-6">
      <h5 class="mb-2.5 font-bold text-neutral-600 hover:text-neutral-800 dark:text-neutral-200">
        Challenges
      </h5>

      <ul class="mb-0 list-none">
        <li>
          <a href="#!" class="text-neutral-600 hover:text-neutral-800 dark:text-neutral-200">
            Conquer Mountains
          </a>
        </li>
        <li>
          <a href="#!" class="text-neutral-600 hover:text-neutral-800 dark:text-neutral-200">
            Oceanic Odyssey
          </a>
        </li>
        <li>
          <a href="#!" class="text-neutral-600 hover:text-neutral-800 dark:text-neutral-200">
            Space Quest
          </a>
        </li>
        <li>
          <a href="#!" class="text-neutral-600 hover:text-neutral-800 dark:text-neutral-200">
            Desert Expeditions
          </a>
        </li>
      </ul>
    </div>

    <!-- Third column -->
    <div class="mb-6">
      <h5 class="mb-2.5 font-bold text-neutral-600 hover:text-neutral-800 dark:text-neutral-200">
        Get Started
      </h5>

      <ul class="mb-0 list-none">
        <li>
          <a href="#!" class="text-neutral-600 hover:text-neutral-800 dark:text-neutral-200">
            Join Us
          </a>
        </li>
        <li>
          <a href="#!" class="text-neutral-600 hover:text-neutral-800 dark:text-neutral-200">
            Calendar
          </a>
        </li>
        <li>
          <a href="#!" class="text-neutral-600 hover:text-neutral-800 dark:text-neutral-200">
            Contact
          </a>
        </li>
        <li>
          <a href="#!" class="text-neutral-600 hover:text-neutral-800 dark:text-neutral-200">
            Blog
          </a>
        </li>
      </ul>
    </div>
    </div>

    <!-- Form -->
    <div class="relative mb-7">
    <form action="">
      <div class="grid grid-cols-1 md:grid-cols-3 items-center justify-center gap-5 mb-6">
        <!-- Sign up text -->
        <div class="md:ml-auto">
          <p class="font-bold">Sign up for our newsletter</p>
        </div>

        <!-- Input -->
        <div>
          <label for="inputSignUp" class="sr-only">
            Small input
          </label>
          <input
            type="email"
            id="inputSignUp"
            placeholder="Your address"
            class="w-full block rounded-lg border dark:border-none dark:bg-neutral-700 py-[9px] px-3 pr-4 text-sm focus:border-blue-400 focus:ring-1 focus:ring-blue-400 focus:outline-none"
          />
        </div>

        <!-- Button -->
        <div class="md:mr-auto">
          <button
            type="submit"
            class="inline-block rounded bg-indigo-500 text-neutral-50 shadow-[0_4px_9px_-4px_rgba(51,45,45,0.7)] hover:bg-indigo-600 hover:shadow-[0_8px_9px_-4px_rgba(51,45,45,0.2),0_4px_18px_0_rgba(51,45,45,0.1)] focus:bg-indigo-800 focus:shadow-[0_8px_9px_-4px_rgba(51,45,45,0.2),0_4px_18px_0_rgba(51,45,45,0.1)] active:bg-indigo-700 active:shadow-[0_8px_9px_-4px_rgba(51,45,45,0.2),0_4px_18px_0_rgba(51,45,45,0.1)] px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal transition duration-150 ease-in-out focus:outline-none focus:ring-0"
          >
            Subscribe
          </button>
        </div>
      </div>
    </form>
    </div>
    </div>

    <!-- Copyright -->
    <div class="bg-neutral-200 p-6 text-center dark:bg-neutral-700 flex justify-center items-center">
        <span>© {{ currentYear }} Copyright: </span>
        <!-- Logo -->
        <img
          class="w-40 h-auto mix-blend-multiply mx-2"
          :src="Logo" alt="Logo"/>
    </div>
    </footer>

    <!-- Back to top button -->
    <button
      type="button"
      data-te-ripple-init
      data-te-ripple-color="light"
      class="!fixed bottom-5 right-5 hidden rounded-full bg-red-600 p-3 text-xs font-medium uppercase leading-tight text-white shadow-md transition duration-150 ease-in-out hover:bg-red-700 hover:shadow-lg focus:bg-red-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-red-800 active:shadow-lg"
      id="btn-back-to-top">
      <svg
        aria-hidden="true"
        focusable="false"
        data-prefix="fas"
        class="h-4 w-4"
        role="img"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 448 512">
        <path
          fill="currentColor"
          d="M34.9 289.5l-22.2-22.2c-9.4-9.4-9.4-24.6 0-33.9L207 39c9.4-9.4 24.6-9.4 33.9 0l194.3 194.3c9.4 9.4 9.4 24.6 0 33.9L413 289.4c-9.5 9.5-25 9.3-34.3-.4L264 168.6V456c0 13.3-10.7 24-24 24h-32c-13.3 0-24-10.7-24-24V168.6L69.2 289.1c-9.3 9.8-24.8 10-34.3.4z"></path>
      </svg>
    </button>

  </div>
</template>

<script>
import LoadingSpinner from '@/components/loading.vue';
import { defineComponent } from 'vue';
import Logo from '@/assets/logo.png';
import { Sidenav, Modal, initTE, Ripple } from "tw-elements";
export default defineComponent ({
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
        Logo: Logo
      };
  },
  computed: {
    currentYear() {
      return new Date().getFullYear();
    }
  },
  mounted(){
    initTE({ Sidenav, Modal, Ripple }),
    this.scrollBtn();
  },
  beforeRouteLeave(to, from, next) {
    // Display spinner when starting to navigate
    this.loading = true;

    // Continue navigation after 1 second (adjust the time as needed)
    setTimeout(() => {
      // Hide spinner after navigation is complete
      this.loading = false;
      next();
    }, 500); // Adjust the time as needed
  },
  methods:{
    toggleDropdown() {
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

    scrollBtn(){
      // Get the button
      const mybutton = document.getElementById("btn-back-to-top");

      // When the user scrolls down 20px from the top of the document, show the button

      const scrollFunction = () => {
        if (
          document.body.scrollTop > 20 ||
          document.documentElement.scrollTop > 20
        ) {
          mybutton.classList.remove("hidden");
        } else {
          mybutton.classList.add("hidden");
        }
      };
      const backToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
      };

      // When the user clicks on the button, scroll to the top of the document
      mybutton.addEventListener("click", backToTop);

      window.addEventListener("scroll", scrollFunction);
    }
  }
});
</script>

