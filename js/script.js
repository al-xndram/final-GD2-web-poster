let defaultZ = 9999;


$(".click").click(function(e){
    

    console.log(e.target.classList.value)
    
     if (! e.target.classList.value.includes("dontCycle") )   {
        defaultZ=defaultZ-1;
        $(this).css({
            "z-index":defaultZ
        })
     }
    

})


$("")


$(document).ready(function(){
    var maxZIndex = Math.max.apply(null, $('.click').map(function(){
        return parseInt($(this).css('z-index')) || 1;
    }).get());

    $('.click').each(function(){
        if (parseInt($(this).css('z-index')) == defaultZ) {
            $(this).children().addClass('glow');
        }
    });
});

$(document).ready(function() {
    $('.click').click(function() {
        $('#clickSound')[0].currentTime = 0;
        $('#clickSound')[0].play(); 
    });
});

$(document).ready(function() {
    // Check if the page is main.html and play the audio "glitter"
    if (window.location.pathname.includes("main.html")) {
        $('#glitter')[0].currentTime = 0;
        $('#glitter')[0].play(); 
    }
});




// Trying to get the click sound on the landing page...

$(document).ready(function() {
    // Event listener for click event on the link
    $('#button').click(function(event) {
        // Prevent default link behavior
        event.preventDefault();
        
        // Play the click sound
        $('#clickSound')[0].currentTime = 0; // Reset audio to start
        $('#clickSound')[0].play();
        
        // Optionally, perform other actions after playing the sound
        // For example, navigate to the link target after a delay
        var targetUrl = $(this).attr('href');
        setTimeout(function() {
            window.location.href = targetUrl;
        }, 5000); // Navigate after 500 milliseconds (adjust as needed)
    });
});