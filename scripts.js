var arr = ['▓', '▒', '░', '▒']
var index = 0

window.onload = function myFunction() {
  const element = document.getElementById('demo')
  setInterval(function () {
    if (index == arr.length) index = 0
    element.innerHTML = arr[index++]
  }, 500)
}
