<script>
  import Photo from "./Photo.svelte";
  import { years } from "./years";

  let toShow = {
    now: 2006,
	prev:2006,
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

<main>
  <div class="container">
	  <!-- <div class="mycontainer">
		<svelte:component this={Photo} toShow={toShow} />
	  </div>
	 -->
	<button class="btn btn-primary" on:click={() => showYear(toShow.prev)}>
		{toShow.prev}
	  </button>
    <button class="btn btn-primary" on:click={() => showYear(toShow.next)}>
      {toShow.next}
    </button>

  </div>


</main>
<div class="galeria">
	<h1>Los 15 de Yoselin</h1>
	<h3>{toShow.now}</h3>
	<div class="linea"></div>
	<div class="contenedor-imagenes">
		<svelte:component this={Photo} toShow={toShow} />
	</div>
</div>

<style>
	/* div .mycontainer {
    max-width: 1280px !important;
	height: 500px !important;
	background-color: brown;
} */
/* *{
    margin:0;
    padding: 0;
    box-sizing: border-box;
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

.contenedor-imagenes .imagen{
    width: 32%;
    position: relative;
    height:250px;
    margin-bottom:5px;
    box-shadow: 0px 0px 3px 0px rgba(0, 0, 0, .75)
}
.imagen img{
    width: 100%;
    height:100%;
    object-fit: cover;
}

.overlay{
    position: absolute;
    bottom: 0;
    left: 0;
    background:rgba(0, 118, 192, 0.781) ;
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

@media screen and (max-width:1000px){
    .contenedor-imagenes{
        width: 95%;
    }
}

@media screen and (max-width:700px){
    .contenedor-imagenes{
        width: 90%;
    }
    .contenedor-imagenes .imagen{
        width: 48%;
    }
}

@media screen and (max-width:450px){
    h1{
        font-size:22px;
    }
    .contenedor-imagenes{
        width: 98%;
    }
    .contenedor-imagenes .imagen{
        width: 80%;
    }
} */
</style>
