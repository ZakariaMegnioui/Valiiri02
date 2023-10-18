<template>
    <div>
        <h5 class="mb-11 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                      New Projects</h5>
    
    <div class="grid lg:grid-cols-3 md:grid-cols-2  grid-cols-1 gap-14 ">

        <div v-for="(item, index) in projects" :key="index"
            class=" max-w-sm border rounded-lg shadow bg-gray-800 border-gray-700">
            <a href="#">
             
                <img class="rounded-t-lg w-full h-72 " :src="require(`@/assets/img/${item.image}`)" alt="" />
            </a>
            <div class="p-5 ">
                <a href="#">
                    <h5 class="my-4 transform translate-y-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                       {{item.title}}</h5>
                </a>
                <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                    {{ item.desciption }}
                </p>
                <a :href="item.link"
                    class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    Read more
                    <svg class="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                        viewBox="0 0 14 10">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M1 5h12m0 0L9 1m4 4L9 9" />
                    </svg>
                </a>
            </div>
        </div>
    </div>
    <h5 class="my-11 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                      Old Projects</h5>
</div>
</template>
  
<script>
export default {
    name: 'Project',
  
      data() {
    return {
        projects: [
        {
            title: "Elmanat",
            domain: "E-Learning",
            image: "elmanat.jpg",
            link: "https://elmanat.com/",
            desciption: "Elmanat.com: Vue.js & Laravel for Udemy-like E-Learning. Diverse courses, seamless experience! 🚀"
        },
        {
            title: "Framcha",
            domain: "delivery agency",
            image: "framcha.jpg",
            link: "https://framcha.ma/",
            desciption: "Framcha.com is a Vue.js and Laravel-based delivery agency web app for efficient delivery management and tracking."
        },
        {
            title: "Tamo7a",
            domain: "hierarchical marketing",
            image: "tamo7aa.jpg",
            link: "https://framcha.ma/",
            desciption: "Tamo7a is a Vue.js and Laravel-based ecommerce system designed for hierarchical marketing, providing businesses with a platform to sell products through a network of distributors or affiliates."
        },
        {
            title: "Lobus",
            domain: "ransport system",
            image: "bus.jpg",
            link: "https://lobus.ma/",
            desciption: "Lobuse is a Vue.js and Laravel-based transport system designed for Torresm, streamlining and optimizing transportation operations for efficient delivery management."
        },
        {
            title: "Madera",
            domain: "ransport system",
            image: "madera.jpg",
            link: "https://dashboard.maderadeco.ma/",
            desciption: "🚀 Vue.js & Laravel power Maderadeco.ma's stock management. 🌐🖥️ Real-time tracking, 🛡️ secure processing, 💼 collaborative excellence!" 
},
      ],
     
  }
}
}
</script>
  
<style  scoped></style>
  