<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>검색 기능 구현</title>
</head>
<body>

<input type="text" id="searchInput" onkeyup="searchFunction()" placeholder="검색어를 입력하세요...">
<ul id="searchList">
  <li>Apple</li>
  <li>Orange</li>
  <li>Banana</li>
  <li>Grapes</li>
  <li>Pineapple</li>
</ul>

<script>
function searchFunction() {
  var input, filter, ul, li, a, i, txtValue;
  input = document.getElementById('searchInput');
  filter = input.value.toUpperCase();
  ul = document.getElementById("searchList");
  li = ul.getElementsByTagName('li');

  for (i = 0; i < li.length; i++) {
    a = li[i];
    txtValue = a.textContent || a.innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      li[i].style.display = "";
    } else {
      li[i].style.display = "none";
    }
  }
}
</script>

</body>
</html>


// // 클릭했을 때 영화카드의 id값 가져오기
// document.addEventListener('DOMContentLoaded', function() {
//   // 각 카드에 대한 클릭 이벤트 등록
//   document.getElementById('mycards').addEventListener('click', function(event) {
//     const clickedElement = event.target.closest('.col');

//     const movieId = clickedElement.querySelector('#card').getAttribute('data-id');
//     alert(`영화 ID: ${movieId}`);
//   });
// });






// function CardClick(event) {
//   const card = event.currentTarget;
//   const movieId = card.getAttribute('data-id');
//   alert(`영화 ID: ${movieId}`);
// }

// const card = document.querySelectorAll('#mycards');
// card.forEach(card => {
//   card.addEventListener('click', CardClick);
// })
// // null 만 나옴....실패

