<script>
    import StarIcon from "./StarIcon.svelte";
    import Hoverable from "./Hoverable.svelte";
</script>

<section id="popular" class="container mt-48 text-center space-y-10">
    <div class="mb-8">
        <h2 class="text-5xl font-semibold my-16">Popular Items</h2>
        <div class="grid md:grid-cols-3 gap-6">
            {#each [1, 2, 3] as img}
                <div class="space-y-4 flex flex-col">
                    <Hoverable class="relative h-full" let:hovering={active}>
                        <a
                            href="#item"
                            class="bg-gray-200 rounded-lg grid place-items-center py-10 h-full
                            hover:shadow-inner hover:bg-gray-100 transition ease-out duration-100
                            ">
                            <img
                                src="images/popular-{img}.png"
                                alt={img}
                                class="object-cover" />
                        </a>
                            <div
                                class="grid gap-4 absolute px-2 py-4 rounded-full bg-teal-300"
                                class:hidden={!active}
                                style="right: 2rem; top: 2rem">
                                <StarIcon count={4} />
                            </div>
                    </Hoverable>
                    <div class="inline-flex justify-between">
                        <span class="text-gray-600 text-lg">$100</span>
                        <span class="text-teal-400">
                            <StarIcon count={5} />
                        </span>
                    </div>
                    <a
                        href="#item"
                        class="text-left capitalize font-semibold text-3xl leading-none">
                        Pottery Vase
                    </a>
                </div>
            {/each}
        </div>
    </div>

    <button
        class="text-white bg-teal-400 py-3 px-12 rounded-full font-medium">See
        all</button>
</section>
