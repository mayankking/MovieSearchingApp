
$(document).ready(() => {
  $('#searchForm').on('submit', (e) => {
   let searchText= ($('#searchText').val());
   getMovies(searchText);
    
    e.preventDefault();
  });
});

function getMovies (searchText) {
   axios.get('http://www.omdbapi.com?s='+searchText) // i is written after ? because we r searching by id.
    .then((response) => {
      console.log(response);
      let movies=  response.data.Search;
      let output = '';
      $.each(movies,(index,movie) => {
        output += `
         <div class = "col-md-3">
            <div class = "well text-center">
             <img src= " ${movie.Poster}">
             <h5>  ${movie.Title}</h5>

             <a onclick = "movieSelected('${movie.imdbID})" class= "btn btn-primary" href= "#" > Movie Details</a>
            </div>

          </div>
        ` ;
      });

        $('#movies').html(output);

    })
    .catch((err) =>{
      console.log(err);
    });
   
}

function movieSelected(id){
  sessionStorage.setItem('movieId', id);
  window.location= 'movie.html' ;
  return false;

}

function getMovie(){
  let movieId = sessionStorage.getItem('movieId');
   axios.get('http://www.omdbapi.com?i='+movieID) // i is written after ? because we r searching by id.
    .then((response) => {
      console.log(response);
     
        let movie = response.data;
        

    })
    .catch((err) =>{
      console.log(err);
    });

}