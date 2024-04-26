
// API를 가져온 것
const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkYmIzNzBhMzg4MmRkMjcyMDdkZjc0NWJjMmI3ZWZiMSIsInN1YiI6IjY2MjhjNjI2YjlhMGJkMDBjZGQ0ODQwMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.HOSMJKlOeOHXPLYag187iWDhr4pvHm8Br7DL6ZmyZyo'
    }
  };
  
  // fetch - api 불러오는 중
  fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1', options)
    .then(response => response.json())
    .then(response => {
      let moviedata = response.results
      let temp_html = ``;

      // foreach문은 배열을 순회해서 처리하는 메서드!!
      // moviedata속에 넣을 항목을 선언하여 데이터를 순회한다!!
      moviedata.forEach( i => {
        let movietitle = i['title'];
        let movieoverview = i['overview'];
        let movieimg = 'https://image.tmdb.org/t/p/w500'+ i['poster_path'];
        let movievote = i['vote_average'];

        // 순회한 데이터를 mycards에 넣겠다!!
         temp_html += `
        <div class="col">
            <div class="card">
                <img src="${movieimg}"
                    class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${movietitle}</h5>
                    <i class="card-text">${movievote}</i>
                    <p class="card-text">${movieoverview}</p>
                </div>
            </div>
        </div>`;

        document.getElementById('mycards').innerHTML = temp_html
        // getElementById('mycards') -> document(html을 부르는 말)에 있는
        // 속성의 id가 'mycards'인 것을 가져오겠다!!
        // innerHTML도 세트인 거겠지...??
        // 그러면 temp_html로 가져온 mycards 형식에 어떤 데이터가 새로 들어가는 지 적은 거겠지???
      });
    })



