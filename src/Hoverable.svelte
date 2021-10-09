<script>
    let hovering;
</script>

<div
    on:mouseenter={() => (hovering = true)}
    on:mouseleave={() => (hovering = false)}
    class={$$props.class}>
    <slot {hovering} />
</div>
