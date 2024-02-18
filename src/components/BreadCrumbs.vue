<template>
    <div>
      <nav class="bg-grey-light w-full rounded-md px-4 py-4">
        <ol class="list-reset flex">
          <li v-for="(breadcrumb, index) in breadcrumbs" :key="index">
            <router-link
              v-if="breadcrumb.link"
              :to="breadcrumb.link"
              class="text-primary transition uppercase duration-150 ease-in-out hover:text-primary-600 focus:text-primary-600 active:text-primary-700 dark:text-primary-400 dark:hover:text-primary-500 dark:focus:text-primary-500 dark:active:text-primary-600"
            >{{ breadcrumb.text }}</router-link>
            <span v-else class="text-neutral-500 dark:text-neutral-400 uppercase">{{ breadcrumb.text }}</span>
            <span v-if="index < breadcrumbs.length - 1" class="mx-2 text-neutral-500 dark:text-neutral-400">>></span>
          </li>
        </ol>
      </nav>
    </div>
  </template>
  
  <script>
  export default {
    name: 'BreadCrumb',
    props: {
      breadcrumbs: {
        type: Array,
        required: true
      }
    }
  }
  </script>
  