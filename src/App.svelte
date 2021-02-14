<script>
  import Photo from "./Photo.svelte";
  import Right from "./components/icons/Right.svelte"
  import Left from "./components/icons/Left.svelte"
  //import { years } from "./years";

  let toShow = {
    now: 2006,
    prev: 2006,
    next: 2007,
  };

  const showYear = (yearToShow) => {
    toShow = {
      now: yearToShow,
      prev: yearToShow === 2006 ? 2006 : yearToShow - 1,
      next: yearToShow === 2021 ? 2021 : yearToShow + 1,
    };
  };
</script>


<div class="galeria">
  <h1>Los 15 de Yoselin</h1>
  <div class="actual">
	{#if toShow.now > 2006}
	<button class="prev" on:click={() => showYear(toShow.prev)}>
	<Left />
  </button>
  {/if}
  <strong>{toShow.now}</strong>
  {#if toShow.now < 2021}
  <button class="next" on:click={() => showYear(toShow.next)}>
	<Right />
  </button>
  {/if}
</div>
  <div class="linea" />
  <div class="contenedor-imagenes">
    <svelte:component this={Photo} {toShow} />
  </div>
</div>

<style>
  h1 {
    color:rgb(18, 9, 73)
  }
	.galeria{
    font-family: 'open sans';
}

.galeria h1{
    text-align: center;
    margin:20px 0 15px 0;
    font-weight: 300;
}

.linea{
    border-top: 5px solid #0077C0;
    margin-bottom: 40px;
}
.contenedor-imagenes{
    display:flex;
    width: 85%;
    margin: auto;
    justify-content: space-around;
    flex-wrap: wrap;
    border-radius:3px;
}
  button {
    background-color: transparent;
    border-style: none;
    cursor: pointer;
	width:80px;
  	height:80px;
	
  }
  :focus { 
    outline-color: transparent; 
    outline-style: none;
}

  .prev {
	position:relative; 
	float:left;
	top: -4rem;
  }

 .actual {
	
	text-align: center;
 } 
  .next {
	position:relative; 
	float:right;
	top: -4rem;
  }

</style>
