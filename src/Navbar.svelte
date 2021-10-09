<script>
    let svgSize = "24";
</script>

<nav class="container">
    <div class="flex items-center space-x-8 text-gray-700 my-8">
        <div class=" text-4xl text-teal-400 font-medium">Shopico</div>
        <div class="flex-grow lg:pr-16">
            <ul class=" grid grid-flow-col max-w-md ml-auto place-items-center">
                <li class="capitalize text-lg"><a href="#home"> Home</a></li>
                <li class="capitalize text-lg">
                    <a href="#catalog"> catalog</a>
                </li>
                <li class="capitalize text-lg">
                    <a href="#contact"> Contacts</a>
                </li>
                <li class="capitalize text-lg"><a href="#faqs"> Faqs</a></li>
            </ul>
        </div>

        <ul class=" flex justify-between items-center space-x-4">
            <a href="#profile" class="">
                <svg
                    width={svgSize}
                    height={svgSize}
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    class=""><path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>
            </a>
            <a href="#heart" class="">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={svgSize}
                    height={svgSize}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    class=""><path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>
            </a>
            <a href="#cart" class="">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    width={svgSize}
                    height={svgSize}
                    viewBox="0 0 24 24"
                    stroke="currentColor">
                    <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
            </a>
        </ul>
    </div>
</nav>

