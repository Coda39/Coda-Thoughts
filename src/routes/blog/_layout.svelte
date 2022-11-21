<script>
    import BlogDate from "$lib/blog-components/BlogDate.svelte";
    
    export let title; 
    export let date
</script>


<div class="mt-8 mx-auto prose md:prose-lg lg:prose-xl ">
    <h2>{title}</h2>
    <BlogDate {date}/>
    <slot />

</div>
