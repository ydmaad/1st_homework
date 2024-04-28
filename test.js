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
