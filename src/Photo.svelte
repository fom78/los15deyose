<script>
    import { years } from "./years";
 
    export let currentYear = 2006
    
</script>

{#each years.filter((year) => year.year === currentYear)[0].photos as photo}
<div class="imagen">
    <img src="/{photo.url}" alt="">
    <div class="overlay">
        <h2>{photo.date}</h2>
    </div>
</div>  
{/each}


<style>
    :global(.contenedor-imagenes .imagen){
    width: 32%;
    position: relative;
    height:250px;
    margin-bottom:5px;
    /* box-shadow: 0px 0px 3px 0px rgba(0, 0, 0, .75) */
}
    .imagen img{
    width: 100%;
    height:100%;
    object-fit: scale-down;
	border-style: hidden;
}

.overlay{
    position: absolute;
    bottom: 0;
    left: 0;
    background:rgba(206, 112, 178, 0.781) ;
    width: 100%;
    height: 0;
    overflow: hidden;
    transition: .5s ease;
}

.overlay h2{
    color: #fff;
    font-weight: 300;
    font-size:30px;
    position: absolute;
    top: 50%;
    left:50%;
    text-align: center;
    transform: translate(-50%, -50%);
}

.imagen:hover .overlay{
    height:100%;
    cursor: pointer;
}
</style>