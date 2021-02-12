<script>
    import { years } from "./years";
    //export let year=0
    export let toShow = {
    now: 2006,
	prev:2006,
    next: 2007,
  };
</script>

{#each years.filter((year) => year.year === toShow.now)[0].photos as photo}
<div class="imagen">
    <img src="{photo.url}" alt="">
    <div class="overlay">
        <h2>{photo.date}</h2>
    </div>
</div>  
{/each}