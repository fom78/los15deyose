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


<div class="galeria  bg-pan-right bg-gradient-hor">
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
    <Photo currentYear={toShow.now}/>
  </div>
</div>

<style>
  h1 {
    color:rgb(223, 16, 16);
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    font-weight: 700;
  }
	.galeria{
    font-family: 'open sans';
}

.galeria h1{
    text-align: center;
    margin:20px 0 15px 0;
    font-weight: 300;
}

.bg-pan-right {animation: 8s ease 0s infinite normal both running bg-pan-right;}
.bg-gradient-hor {background-image: linear-gradient(270deg,#cc6aa5,#c6c927,#3eebc2); background-size: 600% 100%;}
@-webkit-keyframes bg-pan-right {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }  
}
@keyframes bg-pan-right {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }  
}

.linea{
    border-top: 5px solid #0077C0;
    margin-bottom: 40px;
}
.contenedor-imagenes{
    display:grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 10px;
    justify-items: center;
    margin: auto;
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
	top: -3rem;
  }

 .actual {
	text-align: center;
  font-size: 26px;
 } 
  .next {
	position:relative; 
	float:right;
	top: -3rem;
  }

/* Escritorio extra grande */
@media only screen and (min-width: 1200px){

}
/* Escritorio grande */
@media only screen and (min-width: 992px) and (max-width: 1199px){

}

/* Escritorio pequeño / tablet */
@media only screen and (min-width: 768px) and (max-width: 991px){

}

/* Tablets y phablets */
@media only screen and (min-width: 576px) and (max-width: 767px){
  .contenedor-imagenes{
    grid-template-columns: 1fr 1fr;
  }
}

/* Teléfonos */
@media only screen and (max-width: 575px){
  .contenedor-imagenes{
    grid-template-columns: 1fr;
  }
  .prev {
    top: -3rem;
  }
  .next {
    top: -3rem;
  }
}
</style>
