<template>
    <div class="xl:pl-72 pl-0 card">
      <div><h5 class="font-bold text-3xl mb-4 text-start mt-8">Action Log Management</h5></div>
      <div class="mt-8">
          <div class="relative mb-4 flex w-2/5 flex-wrap items-stretch">
          <input
              id="advanced-search-input"
              type="search"
              class="relative m-0 -mr-0.5 block w-[1px] min-w-0 flex-auto rounded-l border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-neutral-700 outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-primary focus:text-neutral-700 focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:focus:border-primary"
              placeholder="Search"
              aria-label="Search"
              aria-describedby="button-addon1" />

          <!--Search button-->
          <button
              class="relative z-[2] flex items-center rounded-r bg-primary px-6 py-2.5 text-xs font-medium uppercase leading-tight text-white shadow-md transition duration-150 ease-in-out hover:bg-primary-700 hover:shadow-lg focus:bg-primary-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-primary-800 active:shadow-lg"
              type="button"
              id="advanced-search-button"
              data-te-ripple-init
              data-te-ripple-color="light">
              <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              class="h-5 w-5">
              <path
                  fill-rule="evenodd"
                  d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
                  clip-rule="evenodd" />
              </svg>
          </button>
          </div>
      </div>
      <div 
      id="datatable"
      data-te-multi="true">
      </div>
      <div>
        <pre><code ref="codeBlock" class="html">{{ code }}</code></pre>
      </div>
    </div>
</template>

<script>
import { Datatable, Ripple, Collapse, initTE } from "tw-elements";
import hljs from 'highlight.js';
import 'highlight.js/styles/atom-one-dark-reasonable.css';

export default {
  name: "ActionLog",
  mounted() {
    this.initDatatable();
    this.highlightCode();
    initTE({ Collapse, Ripple })
  },
  data(){
    return {
      code: '<div>Hello, world!</div>',
      isCollapsed: false
    };
  },
  watch: {
    isCollapsed(newVal) {
      if (newVal) {
        this.highlightCode();
      }
    }
  },
  methods: {
    initDatatable() {
        const dataChange = `<div class="grid gap-4 md:grid-cols-2 w-[600px]">
                <div class="multi-collapse !visible hidden rounded-lg shadow-lg" data-te-collapse-item id="multiCollapseExample1">
                    <div class="block rounded-lg bg-white p-6 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700 dark:text-neutral-50 whitespace-normal">
                        Some placeholder content for the first collapse component of this
                    </div>
                </div>
                <div class="multi-collapse !visible hidden rounded-lg shadow-lg" data-te-collapse-item id="multiCollapseExample2">
                    <div class="block rounded-lg bg-white p-6 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700 dark:text-neutral-50 whitespace-normal">
                        Some placeholder content for the second collapse component of this
                    </div>
                </div>
        </div>`
      const data = {
        columns: [
          { label: 'ID', field: 'ID' },
          { label: 'User/Device ID', field: 'userId' },
          { label: 'Ip Address', field: 'ip' },
          { label: 'Action Date', field: 'actiondate' },
          { label: 'Action', field: 'action' },
        ],
        rows: [
            {
            ID: '<strong>1</strong>',
            userId: '<em>Admin-01</em>',
            ip: '127.0.0.1',
            actiondate: '10/02/2024',
            action: '<a ' + 
                    'class="font-bold text-green-400" ' +
                    'data-te-collapse-init ' +
                    'data-te-ripple-init ' +
                    'data-te-ripple-color="light" ' +
                    'aria-expanded="false" ' +
                    'data-te-target=".multi-collapse" ' +
                    'role="button" ' +
                    'aria-controls="multiCollapseExample1 multiCollapseExample2">' +
                    'Create Data</a> - Tạo người dùng mới trong bảng "Admins" ' + dataChange,
            },
            {
            ID: '<strong>2</strong>',
            userId: '<em>Admin-02</em>',
            ip: '127.0.0.1',
            action: '<strong class="font-bold text-blue-400">Update Data</strong> - Cập nhật người dùng trong bảng "Admins"',
            actiondate: '10/02/2024',
            },
            {
            ID: '<strong>3</strong>',
            userId: '<em>Admin-03</em>',
            ip: '127.0.0.1',
            action: '<strong class="font-bold text-red-400">Delete Data</strong> - Xóa người dùng trong bảng "Admins"',
            actiondate: '10/02/2024',
            },
        ],
      };
    //   for(let i = 0 ; i < 10 ; i++){
    //       data.rows.push({
    //         ID: '<strong>' + (i + 1) + '</strong>',
    //         userId: '<em>Admin-01</em>',
    //         ip: '127.0.0.1',
    //         action: '<strong class="font-bold text-red-400">Create Data</strong> - Tạo người dùng mới trong bảng "Admins"',
    //         actiondate: '10/02/2024',
    //       })
    //   }
      const instance = new Datatable(document.getElementById('datatable'), data);

      const advancedSearchInput = document.getElementById('advanced-search-input');

      const search = (value) => {
        let [phrase, columns] = value.split(" in:").map((str) => str.trim());

        if (columns) {
          columns = columns.split(",").map((str) => str.toLowerCase().trim());
        }

        instance.search(phrase, columns);
      };

      document
        .getElementById("advanced-search-button")
        .addEventListener("click", () => {
          search(advancedSearchInput.value);
        });

      advancedSearchInput.addEventListener("keydown", (e) => {
        if (e.keyCode === 13) {
          search(e.target.value);
        }
      });
    },
    highlightCode() {
      hljs.highlightBlock(this.$refs.codeBlock);
    }
  },
};
</script>
<style>

</style>
  