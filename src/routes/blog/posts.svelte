<script> 
    import "../../styles/app.css";
    export let posts;
</script>

<div class = "h-screen w-auto grid bg-background-color ">    
            {#each posts as post}
        <div class = "shadow-md ">
            <div class= "text-center py-2 m-5
                        bg-accent-color
                        hover:bg-teal-color
                        rounded-3xl hover:rounded-xl
                        transition-all duration-300 ease-liner
                        cursor-pointer
                        ">
                    <h2 class="text-4xl text-text-color font-mono py-8">
                        <a href = "/blog/{post.path}" sveltekit:prefetch>{post.title}</a>
                    </h2>
            </div>
        </div>
            {/each}
</div>