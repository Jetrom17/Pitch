function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  // documentElement = Elemento HTML
  // if(html.classList.contains('light')) {
  //   html.classList.remove('light')
  // } else {
  //   html.classList.add('light')
  // }

  // Mudar a imagem
  // const img = document.querySelector("#profile img")
  // if (html.classList.contains("light")) {
  //   // se tiver light mode, adicionar a imagem light
  //   img.setAttribute("src", "./assets/avatar-light.png")
  //   img.setAttribute("alt", "Daniel com óculos de sol")
  // } else {
  //   // se tiver sem light mode, manter a imagem normal
  //   img.setAttribute("src", "./assets/avatar.png")
  //   img.setAttribute("alt", "Daniel sem óculos de sol")
  // }
}
