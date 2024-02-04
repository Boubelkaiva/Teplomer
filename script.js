document.getElementById("btn").addEventListener("click", function(){
    var nahodne = Math.ceil(Math.random() * 4)
    var teplota = document.querySelector(".teplomerImage")
    var teplomer = teplota.src = "img/" + nahodne + ".jpg"
  
    switch (nahodne) {
      case 1:
        document.querySelector(".text").innerHTML = "Dnes je 0 stupňů. Oblečte si teplé oblečení."
        break
      case 2:
        document.querySelector(".text").innerHTML = "Dnes je 15 stupňů. Je to příjemné počasí."
        break
      case 3:
        document.querySelector(".text").innerHTML = "Dnes je 25 stupňů. Je to horko, pijte hodně tekutin."
        break
      case 4:
        document.querySelector(".text").innerHTML = "Dnes je extrémní vedro, natři se krémem."
        break
    }
  })
  




