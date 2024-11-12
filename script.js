function toggleMode() {
  const html = document.documentElement

 // if (html.classList.contains("light")) {
 //   html.classList.remove("light")
//} else {
//    html.classList.add("light")
//  }
//mas já existe uma função criada nessa ferramenta que faz esse processo, então funciona também utilizar a seguinte função
html.classList.toggle("light")
//pegar tag img > se tiver ligth mode, add a imagem light
//substituir a imagem

const img = document.querySelector("#profile img")

if (html.classList.contains("light")) {

img.setAttribute('src', '/assets/assets/avata-light.png')

 } else {

  img.setAttribute('src', '/assets/assets/avatar-light.png')
}



}
