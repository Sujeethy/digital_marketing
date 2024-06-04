$(document).ready(function() {
    const services = [
        { img: 'https://source.unsplash.com/random/350x500?sig=1', title: 'WEB DEVELOPMENT', description: 'Morbi sed lacus nec risus finibus feugiat et fermentum nibh. Pellentesque.' },
        { img: 'https://source.unsplash.com/random/350x500?sig=2', title: 'WEB DEVELOPMENT', description: 'Morbi sed lacus nec risus finibus feugiat et fermentum nibh. Pellentesque.' },
        { img: 'https://source.unsplash.com/random/350x500?sig=3', title: 'WEB DEVELOPMENT', description: 'Morbi sed lacus nec risus finibus feugiat et fermentum nibh. Pellentesque.' },
        { img: 'https://source.unsplash.com/random/350x500?sig=4', title: 'WEB DEVELOPMENT', description: 'Morbi sed lacus nec risus finibus feugiat et fermentum nibh. Pellentesque.' },
        { img: 'https://source.unsplash.com/random/350x500?sig=5', title: 'WEB DEVELOPMENT', description: 'Morbi sed lacus nec risus finibus feugiat et fermentum nibh. Pellentesque.' },
        { img: 'https://source.unsplash.com/random/350x500?sig=6', title: 'WEB DEVELOPMENT', description: 'Morbi sed lacus nec risus finibus feugiat et fermentum nibh. Pellentesque.' },
        { img: 'https://source.unsplash.com/random/350x500?sig=7', title: 'WEB DEVELOPMENT', description: 'Morbi sed lacus nec risus finibus feugiat et fermentum nibh. Pellentesque.' },
        { img: 'https://source.unsplash.com/random/350x500?sig=8', title: 'WEB DEVELOPMENT', description: 'Morbi sed lacus nec risus finibus feugiat et fermentum nibh. Pellentesque.' }
    ];

    services.forEach(service => {
        $('.slider').append(`
            <div class="col-md-3 mb-4 service-card">
                <img src="${service.img}" alt="${service.title}" class="img-fluid">
                <div class="hover-content text-center p-3">
                    <div>
                        <h3 class="h5 font-weight-bold">${service.title}</h3>
                        <p class="mb-3">${service.description}</p>
                        <a href="https://fylehq.com" target="_blank" class="btn btn-light font-weight-bold text-danger">READ MORE</a>
                    </div>
                </div>
            </div>
        `);
    });

    const totalSlides = services.length;
    const slideToShow = 4; 
    const slideWidth = $('.service-card').outerWidth();
    const sliderWidth = slideWidth * totalSlides;
    let currentSlide = 0;

    for(let i=0; i<services.length-slideToShow; i++){
        $('.dot-container').append(`<span class="dot"></span>`);
    }

    function updateSlider() {
        const offset = -currentSlide * (slideWidth * slideToShow) / sliderWidth;
        const startIndex = currentSlide;
        const endIndex = Math.min(currentSlide + slideToShow, totalSlides);
        let html = '';
        
        for (let i = startIndex; i < endIndex; i++) {
            const service = services[i];
            html += `
                <div class="col-md-3 mb-4 service-card">
                    <img src="${service.img}" alt="${service.title}" class="img-fluid">
                    <div class="hover-content text-center p-3">
                        <div>
                            <h3 class="h5 font-weight-bold">${service.title}</h3>
                            <p class="mb-3">${service.description}</p>
                            <a href="https://fylehq.com" target="_blank" class="btn btn-light font-weight-bold text-danger">READ MORE</a>
                        </div>
                    </div>
                </div>
            `;
        }
        
        $('.slider').html(html);
        $('.dot').removeClass('active');
        $('.dot').eq(currentSlide).addClass('active');
    }

    $('.dot').on('click', function() {
        currentSlide = $(this).index();
        updateSlider();
    });

    updateSlider();

    
    element=$(".growth-card")
        
        function isInViewport(element) {
            var windowHeight = $(window).height(),
                scrollTop = $(window).scrollTop(),
                elementOffset = $(element).offset(),
                elementTop = elementOffset ? elementOffset.top : 0, // Handle undefined elementOffset
                elementHeight = $(element).outerHeight();
    
            return (
                elementTop < (scrollTop + windowHeight) &&
                (elementTop + elementHeight) > scrollTop
            );
        }
    
    
        
        function startAnimation() {
            console.log("hi")
            if (isInViewport('.growth-card')) {
                animateNumbers();
                
                $(window).off('scroll', startAnimation);
            }
        }
    
       
        $(window).on('scroll', startAnimation);
    
    
function animateNumbers() {
    


    
    var targetNumbers = {
        satisfiedCustomers: 199,
        daysOfOperation: 1591,
        completeProjects: 283,
        winAwards: 75
    };


    
        Object.keys(targetNumbers).forEach(function(key) {
            var currentNumber = 0;
            $('#' + key).text(currentNumber + "+");
    
            var duration = 5000 / targetNumbers[key]; 
    
            var interval = setInterval(function() {
                currentNumber++;
                $('#' + key).text(currentNumber + "+");
    
                if (currentNumber >= targetNumbers[key]) {
                    clearInterval(interval);
                }
            }, duration);
        });
}
      






    var popup = $("#popupForm");
    var btn = $("#open-popup");
    var span = $(".close");

    console.log(popup, btn, span);

    btn.on("click", function() {
        popup.show();
        $(".popup-content").draggable();
    });

    span.on("click", function() {
        popup.hide();
    });

    window.onclick = function(event) {
        if (event.target == popup[0]) {
            popup.hide();
        }
    }

    
    $("#ajaxForm").submit(function(e) {
        e.preventDefault();
        var action = $(this).attr("action");
        $.ajax({
            type: "POST",
            url: action,
            crossDomain: true,
            data: new FormData(this),
            dataType: "json",
            processData: false,
            contentType: false,
            headers: {
                "Accept": "application/json"
            }
        }).done(function() {
            alert('The form was submitted successfully.');
            popup.hide();
        }).fail(function() {
            alert('An error occurred! Please try again later.');
        });
    });


    $('.slide').hover(
        function() {
            $(this).find('.hover-content').show();
            $(this).find('img').hide();
        },
        function() {
            $(this).find('.hover-content').hide();
            $(this).find('img').show();
        }
    );

    $('.read-more').on('click', function() {
        window.open('https://fylehq.com', '_blank');
    });
});
