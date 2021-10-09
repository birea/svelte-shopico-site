<style>
    .shadow-spread {
        box-shadow: -2px 15px 55px -18px rgba(0, 0, 0, 0.15);
    }

    @screen lg {
        .grid {
            grid-template-columns: auto;
            grid-template-areas:
                ". . a a a . b b b . ."
                "c c c . d d d . e e e";
        }
        .card:nth-child(1) {
            grid-area: a;
        }
        .card:nth-child(2) {
            grid-area: b;
        }
        .card:nth-child(3) {
            grid-area: c;
        }
        .card:nth-child(4) {
            grid-area: d;
        }
        .card:nth-child(5) {
            grid-area: e;
        }
    }
</style>

<section id="how-works" class="container mt-40">
    <div class="text-center">
        <h1 class="text-5xl font-semibold my-16">How it Works</h1>
        <div class="grid grid-cols-2 gap-y-20 justify-items-center">
            {#each ['search', 'compare', 'withdraw', 'cashback', 'shop'] as title}
                <div
                    class="shadow-spread border border-gray-200 rounded-lg px-8 py-8  card w-56">
                    <img
                        src="holder.js/50x50?theme=vine"
                        alt=""
                        class="mx-auto" />
                    <h3 class="font-semibold text-xl mt-6 mb-2 capitalize">
                        {title}
                    </h3>
                    <p class="text-gray-600">
                        By typing a keyword or scan the product barcode.
                    </p>
                </div>
            {/each}
        </div>
    </div>
</section>
