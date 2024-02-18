<template>
    <div class="container my-1 mx-auto 2xl:px-32">
        <section class="mb-32">
            <!-- Breadcrumb -->
            <BreadCrumbs :breadcrumbs="breadcrumbsList" />
            <!-- End Breadcrumb -->

            <!-- Detail infomation -->
            <div class="flex">
                <div class="container mx-auto px-5 py-2 lg:pt-4 w-1/2">
                    <div class="-m-1 flex flex-wrap md:-m-2">
                        <div class="flex w-full flex-wrap">
                            <div class="w-full h-[400px] p-1 md:p-2">
                                <img
                                alt="gallery"
                                class="block h-full w-full rounded-lg object-contain object-center"
                                src="https://cdn0.fahasa.com/media/catalog/product/9/7/9781526626585.jpg" />
                            </div>
                            <div data-te-lightbox-init data-te-zoom-level="0.2" class="flex flex-col space-y-5 lg:flex-row lg:space-x-5 lg:space-y-0" >
                                <div class="w-1/3 p-1 md:p-2">
                                    <img
                                    alt="gallery"
                                    class="block h-full w-full rounded-lg object-cover object-center cursor-zoom-in data-[te-lightbox-disabled]:cursor-auto"
                                    src="https://cdn0.fahasa.com/media/catalog/product/h/a/harry_potter_and_the_philosophers_stone_minalima_edition_2_2020_09_04_09_11_53.jpg"
                                    data-te-img="https://cdn0.fahasa.com/media/catalog/product/h/a/harry_potter_and_the_philosophers_stone_minalima_edition_2_2020_09_04_09_11_53.jpg" />
                                </div>
                                <div class="w-1/3 p-1 md:p-2">
                                    <img
                                    alt="gallery"
                                    class="block h-full w-full rounded-lg object-cover object-center cursor-zoom-in data-[te-lightbox-disabled]:cursor-auto"
                                    src="https://cdn0.fahasa.com/media/catalog/product/h/a/harry_potter_and_the_philosophers_stone_minalima_edition_3_2020_09_04_09_11_53.jpg"
                                    data-te-img="https://cdn0.fahasa.com/media/catalog/product/h/a/harry_potter_and_the_philosophers_stone_minalima_edition_3_2020_09_04_09_11_53.jpg" />
                                </div>
                                <div class="w-1/3 p-1 md:p-2">
                                    <img
                                    alt="gallery"
                                    class="block h-full w-full rounded-lg object-cover object-center cursor-zoom-in data-[te-lightbox-disabled]:cursor-auto"
                                    src="https://cdn0.fahasa.com/media/catalog/product/h/a/harry_potter_and_the_philosophers_stone_minalima_edition_6_2020_09_04_09_11_53.jpg" 
                                    data-te-img="https://cdn0.fahasa.com/media/catalog/product/h/a/harry_potter_and_the_philosophers_stone_minalima_edition_6_2020_09_04_09_11_53.jpg" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="container w-1/2 px-4 py-4">
                     <div class="flex items-center">
                        <span class="material-symbols-outlined mr-2">
                            info
                        </span>
                        <p class="text-2xl font-bold text-start line-clamp-1">
                                Harry Potter And The Philosopher's Stone: Minalima Edition
                        </p>
                     </div>
                    <div class="block mt-2 rounded-lg bg-white p-6 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
                        <!-- Infomation -->
                        <div class="flex justify-between flex-wrap">
                            <p class="w-1/2 text-sm text-start line-clamp-1 mb-2">Nhà cung cấp: 
                                <span class="font-bold">Macmillan Publishers</span>
                            </p>    
                            <p class="w-1/2 text-sm text-start line-clamp-1 mb-2">Nhà xuất bản: 
                                <span class="font-bold">Bloomsbury Publishing PLC</span>
                            </p>    
                            <p class="w-1/2 text-sm text-start line-clamp-1 mb-2">Tác giả: 
                                <span class="font-bold">J.K. Rowling</span>
                            </p>    
                            <p class="w-1/2 text-sm text-start line-clamp-1 mb-2">Hình thức bìa: 
                                <span class="font-bold">Bìa cứng</span>
                            </p>    
                            <p class="w-1/2 text-sm text-start line-clamp-1 mb-2">Số trang: 
                                <span class="font-bold">360 trang</span>
                            </p>    
                            <p class="w-1/2 text-sm text-start line-clamp-1 mb-2">Ngôn ngữ: 
                                <span class="font-bold">Tiếng Anh</span>
                            </p>    
                            <p class="w-1/2 text-sm text-start mb-2">Thể loại: 
                                <span class="font-bold mr-1">Tiểu thuyết,</span>
                                <span class="font-bold mr-1">Fantasy,</span>
                                <span class="font-bold mr-1">Phiêu lưu,</span>
                                <span class="font-bold mr-1">Giáo dục</span>
                            </p>  
                        </div>
                        <!-- Rating -->
                        <div class="flex items-center">
                            <ul class="my-1 flex list-none gap-1 p-0" data-te-rating-init data-te-readonly="true" data-te-value="5">
                            <li>
                                <span
                                class="text-[#673ab7] [&>svg]:h-5 [&>svg]:w-5"
                                data-te-rating-icon-ref>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke-width="1.5"
                                    stroke="currentColor">
                                    <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                                </svg>
                                </span>
                            </li>
                            <li>
                                <span
                                class="text-[#3f51b5] [&>svg]:h-5 [&>svg]:w-5"
                                data-te-rating-icon-ref>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke-width="1.5"
                                    stroke="currentColor">
                                    <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                                </svg>
                                </span>
                            </li>
                            <li>
                                <span
                                class="text-[#2196f3] [&>svg]:h-5 [&>svg]:w-5"
                                data-te-rating-icon-ref>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke-width="1.5"
                                    stroke="currentColor">
                                    <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                                </svg>
                                </span>
                            </li>
                            <li>
                                <span
                                class="text-[#03a9f4] [&>svg]:h-5 [&>svg]:w-5"
                                data-te-rating-icon-ref>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke-width="1.5"
                                    stroke="currentColor">
                                    <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                                </svg>
                                </span>
                            </li>
                            <li>
                                <span
                                class="text-[#00bcd4] [&>svg]:h-5 [&>svg]:w-5"
                                data-te-rating-icon-ref>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke-width="1.5"
                                    stroke="currentColor">
                                    <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                                </svg>
                                </span>
                            </li>
                            </ul>
                            <p class="ml-2 text-sm">(1 đánh giá)</p>
                        </div>
                    </div>

                    <div class="block mt-2 rounded-lg bg-white p-6 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
                        <div class="flex items-center">
                            <span class="material-symbols-outlined mr-2">
                                storefront
                            </span>
                            <p class="text-sm font-bold text-start line-clamp-1">
                                 Sản phẩm có mặt ở <span class="text-red-600">100</span> cửa hàng
                            </p>
                        </div>
                        <div class="flex items-center">
                            <span class="material-symbols-outlined mr-2">
                                payment
                            </span>
                            <p class="text-sm font-bold text-start line-clamp-1">
                                 Giá từ <span class="text-red-600">200.000đ</span> đến <span class="text-red-600">350.000đ</span>
                            </p>
                        </div>
                    </div>

                </div>
            </div>
            <!-- Coupon container -->
            <div class=" p-4"> 
                <div class="flex items-center">
                        <span class="material-symbols-outlined mr-2">
                            sell
                        </span>
                        <p class="text-2xl font-bold text-start line-clamp-1">
                            Ưu đãi của sản phẩm
                        </p>
                </div>
                <!--Tabs navigation-->
                <ul
                class="mb-5 flex list-none flex-row flex-wrap border-b-0 pl-0"
                role="tablist"
                data-te-nav-ref>
                <li role="presentation">
                    <a
                    href="#tabs-home"
                    class="my-2 block border-x-0 border-b-2 border-t-0 border-transparent px-7 pb-3.5 pt-4 text-xs font-medium uppercase leading-tight text-neutral-500 hover:isolate hover:border-transparent hover:bg-neutral-100 focus:isolate focus:border-transparent data-[te-nav-active]:border-primary data-[te-nav-active]:text-primary dark:text-neutral-400 dark:hover:bg-transparent dark:data-[te-nav-active]:border-primary-400 dark:data-[te-nav-active]:text-primary-400"
                    data-te-toggle="pill"
                    data-te-target="#tabs-home"
                    data-te-nav-active
                    role="tab"
                    aria-controls="tabs-home"
                    aria-selected="true"
                    >Tất cả</a
                    >
                </li>
                <li role="presentation">
                    <a
                    href="#tabs-profile"
                    class="my-2 block border-x-0 border-b-2 border-t-0 border-transparent px-7 pb-3.5 pt-4 text-xs font-medium uppercase leading-tight text-neutral-500 hover:isolate hover:border-transparent hover:bg-neutral-100 focus:isolate focus:border-transparent data-[te-nav-active]:border-primary data-[te-nav-active]:text-primary dark:text-neutral-400 dark:hover:bg-transparent dark:data-[te-nav-active]:border-primary-400 dark:data-[te-nav-active]:text-primary-400"
                    data-te-toggle="pill"
                    data-te-target="#tabs-profile"
                    role="tab"
                    aria-controls="tabs-profile"
                    aria-selected="false"
                    >Mã giảm giá</a
                    >
                </li>
                <li role="presentation">
                    <a
                    href="#tabs-messages"
                    class="my-2 block border-x-0 border-b-2 border-t-0 border-transparent px-7 pb-3.5 pt-4 text-xs font-medium uppercase leading-tight text-neutral-500 hover:isolate hover:border-transparent hover:bg-neutral-100 focus:isolate focus:border-transparent data-[te-nav-active]:border-primary data-[te-nav-active]:text-primary dark:text-neutral-400 dark:hover:bg-transparent dark:data-[te-nav-active]:border-primary-400 dark:data-[te-nav-active]:text-primary-400"
                    data-te-toggle="pill"
                    data-te-target="#tabs-messages"
                    role="tab"
                    aria-controls="tabs-messages"
                    aria-selected="false"
                    >Mã vận chuyển</a
                    >
                </li>
                </ul>
                <!--Tabs content-->
                <div class="mb-6">
                <div
                    class="hidden opacity-100 transition-opacity duration-150 ease-linear data-[te-tab-active]:block"
                    id="tabs-home"
                    role="tabpanel"
                    aria-labelledby="tabs-home-tab"
                    data-te-tab-active>
                    <!-- component -->
                    <div class="flex">
                        <div v-for="index in 3" :key="index" class="container mx-auto w-1/3 px-2">     
                            <div class="bg-gradient-to-br from-indigo-600 to-purple-600 text-white text-center py-10 px-20  h-[150px] rounded-lg shadow-md relative">
                                <!-- <img src="https://i.postimg.cc/KvTqpZq9/uber.png" class="w-20 mx-auto mb-4 rounded-lg"> -->
                                <h3 class="text-sm font-semibold mb-4">MÃ GIẢM 10K - ĐƠN HÀNG TỪ 150K</h3>
                                <div class="flex items-center space-x-2 mb-6">
                                    <div  :id="'copy-target-' + index"
                                            data-te-clipboard-text="STEALDEAL20"
                                            class="border-dashed border text-white px-4 py-2 rounded-l">STEALDEAL20</div>
                                    <button id="copy-button"
                                        type="button"
                                        data-te-clipboard-init
                                        :data-te-clipboard-target="'#copy-target-' + index"
                                        data-te-ripple-init
                                        data-te-ripple-color="light" 
                                        class="border border-white bg-white text-purple-600 px-4 py-2 rounded-r cursor-pointer">Copy</button>
                                </div>
                                        
                                <div class="w-12 h-12 bg-white rounded-full absolute top-1/2 transform -translate-y-1/2 left-0 -ml-6"></div>
                                <div class="w-12 h-12 bg-white rounded-full absolute top-1/2 transform -translate-y-1/2 right-0 -mr-6"></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div
                    class="hidden opacity-0 transition-opacity duration-150 ease-linear data-[te-tab-active]:block"
                    id="tabs-profile"
                    role="tabpanel"
                    aria-labelledby="tabs-profile-tab">
                    Tab 2 content
                </div>
                <div
                    class="hidden opacity-0 transition-opacity duration-150 ease-linear data-[te-tab-active]:block"
                    id="tabs-messages"
                    role="tabpanel"
                    aria-labelledby="tabs-profile-tab">
                    Tab 3 content
                </div>
                <div
                    class="hidden opacity-0 transition-opacity duration-150 ease-linear data-[te-tab-active]:block"
                    id="tabs-contact"
                    role="tabpanel"
                    aria-labelledby="tabs-contact-tab">
                    Tab 4 content
                </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
import BreadCrumbs from '@/components/BreadCrumbs.vue';
import { Lightbox, initTE, Rating, Tab,Clipboard, Ripple, } from "tw-elements"

export default{
    data() {
        return {
            breadcrumbsList: [
                { text: 'Trang chủ', link: '/' },
            ]
        };
    },
    components: {
        BreadCrumbs,
    },
    mounted() {
        this.updateBreadcrumbs();
        initTE({ Lightbox,Rating,Tab,Clipboard, Ripple });
    },
    methods: {
        updateBreadcrumbs() {
            let originalName = this.$route.params.name; // Lấy tham số name từ route
            let modifiedName = originalName.replace(/-/g, " "); // Chuyển đổi dấu gạch ngang thành khoảng trắng
            this.breadcrumbsList.push({ text: modifiedName }); // Thêm vào breadcrumbsList
        },
    },
}
</script>
