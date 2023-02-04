 var arrkompaniya =[
  {img: " https://www.papajohns.az/uploads/images/banners/Elinize%20gelen%20kombolar/kombo-menyu1jpg.jpg", qiymet:"12"},
  {img: "https://www.papajohns.az/uploads/images/banners/Yunan%20Miks%20Poppers/yunan-and-miks.jpg", qiymet:"39"},
  {img: "https://www.papajohns.az/uploads/images/banners/%C3%87iken%20X%20Orleans%20Menyu/chiken-orleans-feed.jpg", qiymet:"19"},
  {img: "https://www.papajohns.az/uploads/images/banners/Baffalo%20Marqarita%20Kombo/kola-aksiya-oktyabr.jpg", qiymet:"29"}
//   {img: "https://www.papajohns.az/uploads/images/banners/%C4%B0ki%20B%C3%B6y%C3%BCk%20D%C9%99y%C9%99rli/iki-boyuk-deyerli.jpg", qiymet:"29"}
 ]

 for (let i = 0; i < arrkompaniya.length; i++) {
   $ (".divkompaniyalar").append(`
   <div class="qutukompaniya">
   <img src="${arrkompaniya[i].img}" alt="">
   <div class="qutukompaniyayazisi">  
       <i class="fa-solid fa-cart-shopping addsebet " onclick="sebetegonder(${i})"></i> 
       <i class="fa-regular fa-heart addfavori" onclick="favoriyegonder(${i})"></i> 
   </div>      
</div>
   `)
    
 }

//  sebeti doldur
var sebetsay = 0;
var total = 0;
function sebetegonder(c) {
    $(".divsebetBody").append(`
    <div class="divmehsul">
        <div class="divmehsulsol">
              <img src="${arrkompaniya[c].img}" alt="">
              <p>Kompaniya</p> 
         </div>
         <div class="divmehsulsag">
              <span>${arrkompaniya[c].qiymet}&#8380</span>
              <i class="fa-solid fa-xmark mehsulsil" ></i>
         </div>
    </div>
   `)
    sebetsay++
    $(".divsebetsay").html(sebetsay)
    $(".modalsebetHeader p span").html(sebetsay)

    total += Number(arrkompaniya[c].qiymet)
    $(".divsebetFooter span").html(total)
}

// favorini doldur
var favorisay = 0;
function favoriyegonder(d) {
    $(".divfavoriBody").append(`
    <div class="divmehsulfavori">
        <div class="divmehsulfavorisol">
              <img src="${arrkompaniya[d].img}" alt="">
         </div>
         <div class="divmehsulfavorisag">
              <span>${arrkompaniya[d].qiymet}&#8380</span>
              <i class="fa-solid fa-cart-shopping addsebet" onclick="sebetegonder(${d})"></i>
              <i class="fa-solid fa-xmark mehsulsil" ></i>
         </div>
    </div>
   `)
    favorisay++
    $(".divfavorisay").html(favorisay)
    $(".modalfavoriHeader p span").html(favorisay)
}

$(window).scroll(function () {
    // var menyuuz = $(".navbar").height()
    if($(this).scrollTop()>=40){
        $(".modalsebet").css( {"margin-top": "-80px","padding-top": "160px" ,"transition": "0.5s"} )
        $(".modalfavori").css( {"margin-top": "-80px","padding-top": "160px" ,"transition": "0.5s"} )
    }
    if($(this).scrollTop()<=40){
        $(".modalsebet").css( {"margin-top": "0px","padding-top": "80px","transition": "0.7s"} )
        $(".modalfavori").css( {"margin-top": "0px","padding-top": "80px" ,"transition": "0.7s"} )
    }
})