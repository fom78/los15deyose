<script>
    import { years } from "./years";
 
    export let toShow = {
    now: 2006,
	prev:2006,
    next: 2007,
  };
 // let imag = 'ddd'
 import storageRef from "./firebase/client";
  // let imagesRef = storageRef.child('2008/01.jpg');
//   console.log(imagesRef)
// //   imagesRef.getDownloadURL().then(function(url) {
// //       console.log('gjhghjug',url)
// //   })
   //console.log('fffff',imagesRef.bucket,imagesRef.fullPath,imagesRef.root,imagesRef.storage)
   

  
let name='2008/01.JPG'
const ref = storageRef.ref(`${name}`)
console.log('hhhh ',ref.getDownloadURL())
    // async function loadImage (name) {
    //     let res = ''
    //  storageRef
    //   .ref(`${name}`)
    //   .getDownloadURL()
    //   .then(resolve => {
    //     imag= resolve
    //     res=resolve
    //     return imag
    //   })
    //   .catch(error => {
    //     console.log(error);
    //   });
    //   console.log('ffffff',storageRef,'res: ',res)
    //   return res
    // }
    // loadImage(name)
// console.log(imag)
// let arra = years.filter((year) => year.year === toShow.now)[0].photos
//    let arr2= arra.map(e =>e.url = loadImage('2008/01.JPG'))
// console.log(arr2)
 
  // Create a reference from a Google Cloud Storage URI
// Create a reference to the file we want to download
//var starsRef = storageRef.child('2008/01.jpg');

// Get the download URL
// starsRef.getDownloadURL().then(function(url) {
//   // Insert url into an <img> tag to "download"
//   let imagen = url
//   console.log(imagen)
// })

</script>

{#each years.filter((year) => year.year === toShow.now)[0].photos as photo}
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