<section id="features" class="bg-gray-200 my-20">
    <div class="container py-16">
        <h2 class="text-5xl font-semibold mb-16 text-center">
            Our Key Features
        </h2>
        <div class="grid lg:grid-cols-4 gap-8 justify-items-center mb-4">
            {#each ['easy to use', 'wide choice', 'Price Comparison', 'Cashback'] as title}
                <div
                    class="rounded-lg px-5 py-6 shadow-sm bg-white group hover:bg-teal-400 cursor-pointer 
                    transition ease-out duration-100">
                    <img src="holder.js/50x50?theme=vine" alt="" class="" />
                    <h3
                        class="font-semibold text-xl my-4 capitalize group-hover:text-white">
                        {title}
                    </h3>
                    <p
                        class="text-sm text-gray-600 leading-relaxed group-hover:text-white">
                        Lorem orem psum dolor, sit amet consectetur adipisicing
                        elit Enim repudiandae.
                    </p>
                </div>
            {/each}
        </div>
    </div>
</section>
