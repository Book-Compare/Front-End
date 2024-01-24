<template>
    <div class="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
      <div class="sm:mx-auto sm:w-full sm:max-w-sm">
        <img class="mx-auto h-48 w-auto" src="https://static.vecteezy.com/system/resources/previews/000/599/214/original/book-reading-logo-and-symbols-template-icons-vector.jpg" alt="Your Company">
        <h2 class="mt-10 text-center text-2xl font-bold leading-9 tracking-tight to-blue-500">Sign in to continue</h2>
      </div>
  
      <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form class="space-y-6" action="#" method="POST" @submit.prevent="login">
          <div>
            <label for="email" class="block text-sm font-medium leading-6 text-balance">Email address</label>
            <div class="mt-2">
              <input id="email" name="email" type="" autocomplete="email"  class="block w-full rounded-md border-0 bg-white/5 py-1.5 shadow-sm ring-1 ring-inset ring-red-500 focus:ring-2 focus:ring-inset focus:ring-balck sm:text-sm sm:leading-6" v-model="formData.email" @input="validateField('email')">
              <span v-if="errors.email" class="error">{{ errors.email }}</span>
            </div>
          </div>
  
          <div>
            <div class="flex items-center justify-between">
              <label for="password" class="block text-sm font-medium leading-6 text-black">Password</label>
              <div class="text-sm">
                <a href="#" class="font-semibold text-red-500 hover:text-red-400">Forgot password?</a>
              </div>
            </div>
            <div class="mt-2">
              <input id="password" name="password" type="password" autocomplete="current-password"  class="block w-full rounded-md border-0 bg-white/5 py-1.5 shadow-sm ring-1 ring-inset ring-red-500 focus:ring-2 focus:ring-inset focus:ring-black sm:text-sm sm:leading-6" v-model="formData.password" @input="validateField('password')">
              <span v-if="errors.password" class="error">{{ errors.password }}</span>
            </div>
          </div>
  
          <div>
            <button type="submit" class="flex w-full justify-center rounded-md bg-red-500 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-red-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-500">Sign in</button>
          </div>
        </form>
  
        <p class="mt-10 text-center text-sm text-gray-400">
          Not a member?
          <a href="#" class="font-semibold leading-6 text-red-500 hover:text-red-400">Start a 7 days free trial</a>
        </p>
      </div>
    </div>
  </template>
  
  <script>
  import { loginApi } from '@/assets/Api/api.js';
  
  export default {
    name: "LoginAdmin",
    components: {},
    data() {
      return {
        formData: {
          email: '',
          password: '',
        },
        errors: {
          email: '',
          password: '',
        },
      };
    },
    methods: {
      async login() {
        // Validate each field before attempting login
        this.validateField('email');
        this.validateField('password');
  
        // Check if there are any validation errors
        if (this.hasErrors()) {
          console.log('Form has errors. Please correct them.');
          return;
        }

        if (!this.formData.email.trim()) {
        this.errors.email = 'Email is required';
        return;
      }
  
        try {
          const response = await loginApi(this.formData.email, this.formData.password);
  
          const token = response.data.token;
  
          localStorage.setItem('token', token);
  
          this.$router.push({ name: 'admin' });
        } catch (error) {
          console.error("Login failed:", error);
        }
      },
      validateField(field) {
        let isValid;
  
        switch (field) {
          case 'email':
            /* eslint-disable */
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            isValid = emailRegex.test(this.formData.email);
            break;
          case 'password':
            isValid = this.formData.password.length >= 6;
            break;
          default:
            break;
        }
  
        this.errors[field] = isValid ? '' : `Invalid ${field} address`;
      },
      hasErrors() {
        return Object.values(this.errors).some(error => error !== '');
      },
    },
  };
  </script>
  
  <style>
  .error {
    color: red;
  }
  </style>
  