<template>
  <!-- Sidebar -->
  
  <nav 
    class="min-h-screen fixed left-0 top-0 z-[1035] h-screen  -translate-x-full overflow-hidden bg-white shadow-[0_4px_12px_0_rgba(0,0,0,0.07),_0_2px_4px_rgba(0,0,0,0.05)] dark:bg-zinc-800 lg:data-[te-sidenav-hidden='false']:translate-x-0"
    id="full-screen-example"
    data-te-sidenav-init
    data-te-sidenav-mode-breakpoint-over="0"
    data-te-sidenav-mode-breakpoint-side="sm"
    data-te-sidenav-hidden="false"
    data-te-sidenav-color="dark"
    data-te-sidenav-content="#content"
    data-te-sidenav-scroll-container="#scrollContainer">
    <div class="fixed flex flex-col top-0 left-0 w-64 bg-white h-full border-r">
      <div class="flex items-center justify-center h-14 border-b">
        <div>Book Compare Adminitrator</div>
      </div>
      <div class="overflow-y-auto overflow-x-hidden flex-grow">
        <ul class="flex flex-col py-4 space-y-1">
          <li class="px-5">
            <div class="flex flex-row items-center h-8">
              <div class="text-sm font-light tracking-wide text-gray-500">Admin Management</div>
            </div>
          </li>
          <li>
            <router-link to="/admin" class="relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-50 !text-gray-600 hover:text-gray-800 border-l-4 border-transparent hover:border-indigo-500 pr-6">
              <span class="inline-flex justify-center items-center ml-4 material-symbols-outlined">
                  person
              </span>
              <span class="ml-3 text-sm items-center tracking-wide truncate">Admin List</span>
            </router-link>
          </li>
          <li>
            <a href="#" class="relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-50 text-gray-600 hover:text-gray-800 border-l-4 border-transparent hover:border-indigo-500 pr-6">
              <span class="inline-flex justify-center items-center ml-4 material-symbols-outlined">
                  person_add
              </span>
              <span class="ml-3 text-sm tracking-wide truncate">Admin Create</span>
              <span class="px-2 py-0.5 ml-auto text-xs font-medium tracking-wide text-indigo-500 bg-indigo-50 rounded-full">New</span>
            </a>
          </li>
          <li class="px-5">
            <div class="flex flex-row items-center h-8">
              <div class="text-sm font-light tracking-wide text-gray-500">Log Management</div>
            </div>
          </li>
          <li>
            <router-link to="/admin/actionlog"  class="relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-50 !text-gray-600 hover:text-gray-800 border-l-4 border-transparent hover:border-indigo-500 pr-6">
              <span class="inline-flex justify-center items-center ml-4 material-symbols-outlined">
                database
              </span>
              <span class="ml-2 text-sm tracking-wide truncate">Action Logs</span>
            </router-link>
          </li>
          <li>
            <a class="relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-50 text-gray-600 hover:text-gray-800 border-l-4 border-transparent hover:border-indigo-500 pr-6">
              <span class="inline-flex justify-center items-center ml-4 material-symbols-outlined">
                error
              </span>
              <span class="ml-2 text-sm tracking-wide truncate">Error Logs</span>
              <span class="px-2 py-0.5 ml-auto text-xs font-medium tracking-wide text-green-500 bg-green-50 rounded-full">15</span>
            </a>
          </li>
          <li class="px-5">
            <div class="flex flex-row items-center h-8">
              <div class="text-sm font-light tracking-wide text-gray-500">Settings</div>
            </div>
          </li>
          <li>
            <a href="#" class="relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-50 text-gray-600 hover:text-gray-800 border-l-4 border-transparent hover:border-indigo-500 pr-6">
              <span class="inline-flex justify-center items-center ml-4">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path></svg>
              </span>
              <span class="ml-2 text-sm tracking-wide truncate">Profile</span>
            </a>
          </li>
          <li>
            <a href="#" class="relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-50 text-gray-600 hover:text-gray-800 border-l-4 border-transparent hover:border-indigo-500 pr-6">
              <span class="inline-flex justify-center items-center ml-4">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path>
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                </svg>
              </span>
              <span class="ml-2 text-sm tracking-wide truncate">Settings</span>
            </a>
          </li>
          <li>
            <a href="#" class="relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-50 text-gray-600 hover:text-gray-800 border-l-4 border-transparent hover:border-indigo-500 pr-6">
              <span class="inline-flex justify-center items-center ml-4">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"></path></svg>
              </span>
              <span class="ml-2 text-sm tracking-wide truncate">Logout</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  <div id="content" class="min-h-screen xl:w-full lg:w-3/4 ml-auto">
    <nav class="bg-white p-[12px] pl-80">
        <div class="container  mx-auto flex justify-between items-center">
          <!-- Logo or brand name -->
          <div class="text-sm flex flex-row items-center justify-between w-[200px]">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4">
                    <path stroke-linecap="round" stroke-linejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                </svg>
                /
                <span class="text-gray-300">Dashboard</span> / <span class="">Admin List</span>
          </div>
  
          <div class="flex items-center space-x-2 pr-4">
            <span class="material-symbols-outlined">
                    notifications
            </span>
            <div class="border border-gray-800 w-8 h-8 rounded-full">
                <img src="https://randomuser.me/api/portraits/men/12.jpg" class="w-auto h-8 rounded-full"/>
            </div>
  
          </div>
        </div>
    </nav>
    <router-view></router-view>
  </div>
</template>

<script>
import { Sidenav, initTE, Ripple } from "tw-elements"
export default {
  name: "AdminLayout",
  components: {},
  mounted(){
    initTE({ Sidenav, Ripple });
    this.sideNav();
  },
  methods(){
    return{
        sideNav(){
          const sidenav = document.getElementById("full-screen-example");
          const sidenavInstance = Sidenav.getInstance(sidenav);

          let innerWidth = null;

          const setMode = () => {
            // Check necessary for Android devices
            if (window.innerWidth === innerWidth) {
              return;
            }

            innerWidth = window.innerWidth;

            if (window.innerWidth < sidenavInstance.getBreakpoint("sm")) {
              sidenavInstance.changeMode("over");
              sidenavInstance.hide();
            } else {
              sidenavInstance.changeMode("side");
              sidenavInstance.show();
            }
          };

          if (window.innerWidth < sidenavInstance.getBreakpoint("sm")) {
            setMode();
          }

          // Event listeners
          window.addEventListener("resize", setMode);
        }
      }
  }
}
</script>