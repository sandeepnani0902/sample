const sound = document.getElementById("zoom-sound");
  const images = document.querySelectorAll(".collections .item img");

  images.forEach(img => {
    img.addEventListener("mouseover", () => {
      sound.currentTime = 0; // Restart sound if hovering multiple times
      sound.play();
    });
  });


  const indiviaulproduct_ProductImg = document.querySelector(".indiviaulproducts .product-images .product-image") 

  const indiviaulproduct_ProductImg1 = document.querySelector(".indiviaulproducts .product-images .product-image #img1")

  const indiviaulproduct_ProductImg2 = document.querySelector(".indiviaulproducts .product-images .product-image #img2")


  // document.querySelector(".indiviaulproducts .product-images .product-image #img2")
  indiviaulproduct_ProductImg.addEventListener("mouseover", ()=>{
    indiviaulproduct_ProductImg1.style.transform= "rotate3d(0, 1, 1, -30deg) scale(0.8)"
    indiviaulproduct_ProductImg2.style.transform = "scale(0.8)"
    indiviaulproduct_ProductImg2.style.filter = "blur(15px)"
  })
    indiviaulproduct_ProductImg.addEventListener("mouseout", ()=>{
    indiviaulproduct_ProductImg1.style.transform= "none"
    indiviaulproduct_ProductImg2.style.transform = "none"

  })
  

