
// API를 가져온 것
const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkYmIzNzBhMzg4MmRkMjcyMDdkZjc0NWJjMmI3ZWZiMSIsInN1YiI6IjY2MjhjNjI2YjlhMGJkMDBjZGQ0ODQwMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.HOSMJKlOeOHXPLYag187iWDhr4pvHm8Br7DL6ZmyZyo'
  }
};

let moviedata;

// fetch - api 불러오는 중
fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1', options)
  .then(response => response.json())
  .then(response => {
    moviedata = response.results
    console.log(moviedata);

    let temp_html = createCardsHTML(moviedata);

    document.getElementById('mycards').innerHTML = temp_html;
  })


function search() {
  console.log('search init')
  const inputKeyword = document.getElementById('search-input').value;
  // console.log(document.getElementById('search-input'));
  // console.log(document.getElementById('search-input').placeholder);
  // console.log(document.getElementById('search-input').value);
  // console.log(document.getElementById('search-input').id);


  const filteredMovieData = moviedata.filter(movie => {

    // [TODO] 대소문자를 무시하고 검색할 수 있도록 
    const titleLowercase = movie.title.toLowerCase();  // 1. 필터된 무비의 타이틀을 소문자로 변환!!
    const keywordLowerCase = inputKeyword.toLowerCase();  // 2. 검색한 키워드를 소문자로 변환!!
    return titleLowercase.includes(keywordLowerCase); // 1번의 결과에 2번의 결과값이 포함된다면 리턴된다!!!


    // 이걸로는 어떻게 하는지 모르겠지만 나중에 찾아보자
    // if (movie.title.includes(inputKeyword)) return true;
    // return movie.title.match(new RegExp("i"))

  });

  console.log('필터링 된 영화 개수', filteredMovieData.length);

  if (filteredMovieData.length === 0) {  // 만약 필터된 영화데이터의 길이가 0과 같다면
    document.getElementById('mycards').innerHTML = '';  // HTML파일에 있는 id값이 mycards인것을 없는 걸로 리턴한다 
    return;
  }


  let temp_html = createCardsHTML(filteredMovieData); 

  document.getElementById('mycards').innerHTML = temp_html;
  
}


// 반복되는 기능 함수로 만들기
function createCardsHTML(moviedata) {
  let temp_html = '';

  // foreach문은 배열을 순회해서 처리하는 메서드!!
  // moviedata속에 넣을 항목을 선언하여 데이터를 순회한다!!
  moviedata.forEach(i => {
    let movietitle = i['title'];
    let movieoverview = i['overview'];
    let movieimg = 'https://image.tmdb.org/t/p/w500' + i['poster_path'];
    let movievote = i['vote_average'];
    let movieId = i['id']; 

    // 순회한 데이터를 mycards에 넣겠다!!
    temp_html += `
      <div class="col">
          <div id="card" data-id=${movieId}>
            <a href="#"><img src="${movieimg}" class="card-img-top" alt="..."></a>
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
    // 그러면 temp_html로 가져온 mycards 형식에 어떤 데이터가 새로 들어가는지 적는 거겠지???

  });
  return temp_html;
}

// 클릭했을 때 영화카드의 id값 가져오기
// 1. html요소에서 id값이 mycards라는 곳에 클릭이벤트를 주고, 클릭이 되면 이벤트핸들러함수를 실행할거야
  document.getElementById('mycards').addEventListener('click', function(event) {
    // 2. 클릭된요소는 클릭된 함수이벤트의 타겟이되는 카드이다
    // event.target은 실제 이벤트 실행된 타겟을 말함
    // closest()메소드는 가까운 조상님을 찾는 함수
    const clickedElement = event.target.closest('.col');
    // 3. movieId는 clickedElement에서 id값이 card인 요소를 찾아 data-id의 속성값을 가져온것
    const movieId = clickedElement.querySelector('#card').getAttribute('data-id');
    alert(`영화 ID: ${movieId}`);
  });

