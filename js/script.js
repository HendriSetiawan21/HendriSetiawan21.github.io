// $('.page-scroll').on('click', function(e) {
   

//     //ambil isi href 
//     var tujuan = $(this).attr('href');
//     // tangkap elemen ybs
//     var elemenTujuan = $(tujuan);

//     //pindahkan scroll
//     $('body').animate({
//           scrollTop: (elemenTujuan.offset().top - 50);
//     });

//     e.preventDefault();
// });


//paralax
//aboout
$(window).on('load', function() {
    $(.pKiri).addClass('.pMuncul');
    $(.pKanan).addClass('.pMuncul');
});







$(window).scroll(function() {
    var wScroll = $(this).scrollTop();

    //jumbotron
    $('.jumbotrom img').css({
        'transform' : 'translate(0px,'+ wScroll +' % )'
    });

    $('.jumbotrom h1').css({
        'transform' : 'translate(0px,'+ wScroll +' % )'
    });

    
    $('.jumbotrom p').css({
        'transform' : 'translate(1.2px,'+ wScroll +' % )'
    });




    // portfolio
    if(wScroll > $('.portfolio').offset().top -250 ) {
       $('.porfolio .thumbnail').each(function(i) {
           setTimeout(function() {
                $('.portfolio .thumbnail').eq(i).addClass('muncul');
 

           }, 300 * (i+1));

        }

       }) 

    }



});


