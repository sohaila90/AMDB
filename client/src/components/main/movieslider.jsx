import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function MovieSlider({ movies }) {
  const baseUrl = "https://image.tmdb.org/t/p/w500"; 

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slideToShow: 3,
    slidesToScroll: 1,
  };

  return (
    <Slider {...settings}>
        {movies.map(movie => {
      const fullImageUrl = baseUrl + movie.poster_path
      return (
        <div key={movie.id}>
            <img src={fullImageUrl} alt={movie.title} />
            <p>{movie.title}</p>
            </div>
      );
})}
    </Slider>
  )
}

export default MovieSlider;
