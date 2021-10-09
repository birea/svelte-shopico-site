<script>
    import Navbar from "./Navbar.svelte";
    import Hero from "./Hero.svelte";
    import HowWorks from "./HowWorks.svelte";
    import PopularItems from "./PopularItems.svelte";
    import KeyFeatures from "./KeyFeatures.svelte";
    import PaymentMethods from "./PaymentMethods.svelte";
    import PromoCollection from "./PromoCollection.svelte";
    import Footer from "./Footer.svelte";
</script>

<Navbar />

<main class="text-gray-800 mb-40">
    <Hero />
    <HowWorks />
    <PopularItems />
    <KeyFeatures />
    <PaymentMethods />
    <PromoCollection />
</main>

<Footer />
