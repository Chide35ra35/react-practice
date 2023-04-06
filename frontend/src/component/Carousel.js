export default function Carousel(){
    return <>
    <div id="carouselExample" class="carousel slide">
    <div class="carousel-inner">
      <div class="carousel-item active">
        <img src="https://carwow-uk-wp-3.imgix.net/18015-MC20BluInfinito-scaled-e1666008987698.jpg"
          class="d-block w-100" alt="..."/>
      </div>
      <div class="carousel-item">
        <img src="https://i.ytimg.com/vi/dip_8dmrcaU/maxresdefault.jpg" class="d-block w-100" alt="..."/>
      </div>
      <div class="carousel-item">
        <img
          src="https://imageio.forbes.com/specials-images/imageserve/5f962cfa115771f5d0b5b5c8/Switzerland---85th-Geneva-International-Motor-Show-2015/0x0.jpg?crop=5760,3240,x0,y292,safe&height=399&width=711&fit=bounds"
          class="d-block w-100" alt="..."/>
      </div>
      <div class="carousel-item">
        <img src="https://i.ytimg.com/vi/tArC9-RHmU4/maxresdefault.jpg" class="d-block w-100" alt="..."/>
      </div>
      <div class="carousel-item">
        <img src="https://ichef.bbci.co.uk/news/976/cpsprodpb/BE5A/production/_123303784_gettyimages-524191066.jpg"
          class="d-block w-100" alt="..."/>
      </div>
    </div>
    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div>
    </>
}