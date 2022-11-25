<script>
    import BlogDate from "$lib/blog-components/BlogDate.svelte";
    
    export let title; 
    export let date
</script>


<div class="mt-9 mx-auto py-10 prose md:prose-lg lg:prose-xl ">
    <h2>{title}</h2>
    <BlogDate {date}/>
    <slot />

</div>
