Reveal.addEventListener( 'fragmentshown', function( event ) {
    if (event.fragment.getAttribute("data-auto-advance")) {
        var frag = event.fragment;
        Reveal.nextFragment();
        setTimeout(function(){

        },1000);
    }

} );
