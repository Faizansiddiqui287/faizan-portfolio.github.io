let typed = new Typed (".typing",{
    strings: ["Front-end developer", "Blogger", "Designer", "Biryani Lover"],
    typeSpeed: 60,
    backSpeed: 60,
    loop: true
});

$('.menu-btn').click(function(){
    $('.navbar .menu').toggleClass("active");
    $('.menu-btn i').toggleClass("active");
}); 