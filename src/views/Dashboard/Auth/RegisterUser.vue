<template>
    <div class="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
      <div class="sm:mx-auto sm:w-full sm:max-w-sm">
        <img class="mx-auto h-48 w-auto" src="https://static.vecteezy.com/system/resources/previews/000/599/214/original/book-reading-logo-and-symbols-template-icons-vector.jpg" alt="Your Company">
        <h2 class="mt-10 text-center text-2xl font-bold leading-9 tracking-tight to-blue-500">Register Account</h2>
      </div>
  
      <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form class="space-y-6" method="POST" @submit.prevent="register">
          <div>
            <label for="email" class="block text-sm font-medium leading-6 text-start">Email address:</label>
            <div class="mt-2">
              <input id="email" name="email"  class="block w-full rounded-md border-0 bg-white/5 py-1.5 shadow-sm ring-1 ring-inset ring-red-500 focus:ring-2 focus:ring-inset focus:ring-balck sm:text-sm sm:leading-6" v-model="formData.email">
              <span v-if="errors.email" class="error">{{ this.errors.email }}</span>
            </div>
          </div>

          <div>
            <label for="username" class="block text-sm font-medium leading-6 text-start">Username:</label>
            <div class="mt-2">
              <input id="username" name="username"  class="block w-full rounded-md border-0 bg-white/5 py-1.5 shadow-sm ring-1 ring-inset ring-red-500 focus:ring-2 focus:ring-inset focus:ring-balck sm:text-sm sm:leading-6" v-model="formData.username">
              <span v-if="errors.username" class="error">{{ errors.username }}</span>
            </div>
          </div>

          <div>
            <label for="first_name" class="block text-sm font-medium leading-6 text-start">First name:</label>
            <div class="mt-2">
              <input id="first_name" name="first_name"  class="block w-full rounded-md border-0 bg-white/5 py-1.5 shadow-sm ring-1 ring-inset ring-red-500 focus:ring-2 focus:ring-inset focus:ring-balck sm:text-sm sm:leading-6" v-model="formData.first_name">
              <span v-if="errors.first_name" class="error">{{ errors.first_name }}</span>
            </div>
          </div>

          <div>
            <label for="last_name" class="block text-sm font-medium leading-6 text-start">Last name:</label>
            <div class="mt-2">
              <input id="last_name" name="last_name"  class="block w-full rounded-md border-0 bg-white/5 py-1.5 shadow-sm ring-1 ring-inset ring-red-500 focus:ring-2 focus:ring-inset focus:ring-balck sm:text-sm sm:leading-6" v-model="formData.last_name">
              <span v-if="errors.last_name" class="error">{{ errors.last_name }}</span>
            </div>
          </div>
  
          <div>
            <label for="password" class="block text-sm font-medium leading-6 text-start">Password</label>
            <div class="mt-2">
              <input id="password" name="password" type="password" autocomplete="current-password"  class="block w-full rounded-md border-0 bg-white/5 py-1.5 shadow-sm ring-1 ring-inset ring-red-500 focus:ring-2 focus:ring-inset focus:ring-black sm:text-sm sm:leading-6" v-model="formData.password">
              <span v-if="errors.password" class="error">{{ errors.password }}</span>
            </div>
          </div>

          <div>
            <label for="password2" class="block text-sm font-medium leading-6 text-start">Confirm Password:</label>
            <div class="mt-2">
              <input id="password2" name="password2" type="password" autocomplete="current-password"  class="block w-full rounded-md border-0 bg-white/5 py-1.5 shadow-sm ring-1 ring-inset ring-red-500 focus:ring-2 focus:ring-inset focus:ring-black sm:text-sm sm:leading-6" v-model="formData.password2">
              <span v-if="errors.password2" class="error">{{ errors.password2 }}</span>
            </div>
          </div>
  
          <div>
            <button type="submit" class="flex w-full justify-center rounded-md bg-red-500 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-red-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-500">Sign in</button>
          </div>
        </form>
  
        <p class="mt-10 text-center text-sm text-gray-400">
          Not a member?
          <a href="#" class="font-semibold leading-6 text-red-500 hover:text-red-400">Start a register member</a>
        </p>
      </div>
    </div>
  </template>
  
  <script>
  import { registerApi } from '@/assets/Api/api.js';
  import { toast } from 'vue3-toastify';
  import 'vue3-toastify/dist/index.css';

  export default {
    name: "RegisterUser",
    components: {},
    data() {
      return {
        formData: {
          email: '',
          password: '',
          password2: '',
          username: '',
          first_name: '',
          last_name: '',
        },
        errors: {
          email: '',
          password: '',
          password2: '',
          username: '',
          first_name: '',
          last_name: '',
        },
        loading: false,
      };
    },
    methods: {
      async register() {
        console.log(this.errors);
      try {
        const response = await registerApi(this.formData);

        // Set token in localStorage
        localStorage.setItem('token', response.token);

        // Display success toast
        this.notify();

        // Redirect to '/'
        setTimeout(() => {
          this.$router.replace('/');
        }, 3000);

        } catch (error) {
         // If there are errors in the response, set them in the component's state
          this.errors = {
            username: error.username ? error.username[0] : '',
            email: error.email ? error.email[0] : '',
            password: error.password ? error.password[0] : '',
            password2: error.password2 ? error.password2[0] : '',
            first_name: error.first_name ? error.first_name[0] : '',
            last_name: error.last_name ? error.last_name[0] : '',
          };
        }
      },
    },
    setup() {
        const notify = () => {
          toast("Register success!", {
            autoClose: 3000,
            "type": "success",
          }); 
        }
        return { notify };
    }
  };
  </script>
  
  <style>
  .error {
    color: red;
  }
  </style>
  