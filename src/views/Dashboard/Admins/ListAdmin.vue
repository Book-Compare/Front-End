<template>
    <div class="xl:pl-72 pl-0 card">
      <div><h5 class="font-bold text-3xl mb-4 text-start mt-8">Admin Management</h5></div>
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
      data-te-selectable="true"
      data-te-multi="true">
      </div>
    </div>
</template>

<script>
import { Datatable } from "tw-elements";

export default {
  name: "ListAdmin",
  mounted() {
    this.initDatatable();
  },
  methods: {
    initDatatable() {
      const data = {
        columns: [
          { label: 'Name', field: 'name' },
          { label: 'Email', field: 'email' },
          { label: 'Role', field: 'role' },
          { label: 'Status', field: 'status' },
          { label: 'Created date', field: 'createdate' },
          { label: 'Action', field: 'action' },
        ],
        rows: [],
      };
      for(let i = 0 ; i < 11 ; i++){
          data.rows.push({
            name: '<strong>Super Administrator ' + (i + 1) + '</strong>',
            email: '<em>superadmin@gmail.com</em>',
            role: 'Super Admin',
            status: '<span class="inline-flex items-center gap-1 rounded-full bg-green-50 px-2 py-1 text-xs font-semibold text-green-600">' +
                '<span class="h-1.5 w-1.5 rounded-full bg-green-600"></span>' +
                'Active' +
              '</span>',
            createdate: '2011/04/25',
            action: '<span class="material-symbols-outlined cursor-pointer">visibility</span> <span class="material-symbols-outlined cursor-pointer">close</span>'
          })
      }
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
  },
};
</script>
  