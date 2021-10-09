<script>
</script>

<section
    id="hero"
    class="mx-auto max-w-screen-xl px-2 bg-gray-200 rounded-sm mb-10 pb-16">
    <div class="grid grid-cols-2 gap-24 px-20">
        <div class="py-40 space-y-10">
            <h1 class="text-5xl font-semibold text-gray-800">
                Hello! What would you like to buy?
            </h1>
            <p class="text-gray-600 leading-7 text-lg">
                Search between millions of products. From hundreds different
                online shops. Our price comparison service helps you find the
                best deal on the market!
            </p>
            <a
            href="#"
                id="cta-btn"
                class="inline-block text-white bg-teal-400 py-3 px-12 rounded-full font-medium
                    hover:shadow-md 
                    ">Shop
                now</a>
        </div>
        <div class="py-24"><img src="images/chair.png" alt="" /></div>
    </div>
</section>
<section id="promotions" class="container -mt-40">
    <div class="grid md:grid-cols-3 gap-10">
        {#each ['lamp', 'sofa', 'table'] as img}
            <div class="bg-white p-2">
                <div class="bg-gray-200 p-6 text-gray-800 flex space-x-6">
                    <div class="">
                        <h3 class="text-2xl font-medium capitalize">
                            Summer
                            <br />collections
                        </h3>
                        <p class="text-gray-600 mt-2 text-sm mb-10">
                            Techno minimial light
                        </p>
                        <button class="text-teal-400 font-medium">Shop now</button>
                    </div>
                    <img src="holder.js/120x180?random=yes" alt="" class="" />
                    <!-- <img src="images/{img}.png" alt="{img}" class="w-full"/> -->
                </div>
            </div>
        {/each}
        <!-- <div>
                <h3>new collections</h3>
                <p>Redox white chair</p>
                <button>Shop now</button>
                <img src="holder.js/80x100?random=yes" alt="" />
            </div>
            <div>
                <h3>Trending products</h3>
                <p>Techno minimial light</p>
                <button>Shop now</button>
                <img src="holder.js/80x100?random=yes" alt="" />
            </div> -->
    </div>
</section>
