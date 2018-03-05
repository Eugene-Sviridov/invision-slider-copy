document.addEventListener("DOMContentLoaded", function() {
    var playVideoBtns = document.querySelectorAll('.video-slider__item-btn'),
        peopleList = document.querySelector('.video-slider__people'),
        persons = document.querySelectorAll('.video-slider__person:not(._plus)'),
        sliders = document.querySelectorAll('.video-slider__item'),
        wrapper = document.querySelector('.video-slider'),
        videoIframes = document.querySelectorAll('.video-slider__item-video'),
        videoPlayers = [],
        closeVideoBtns = document.querySelectorAll('.video-slider__item-video-btn');

    function _stopVideo(index) {
        videoPlayers[index].unload();
    }

    function _playVideo(index) {
        videoPlayers[index].play();
    }

    Array.prototype.forEach.call(closeVideoBtns, function(btn) {
        btn.addEventListener('click', function() {
            var slideIndex = Array.prototype.indexOf.call(closeVideoBtns, btn);

            _stopVideo(slideIndex);
            wrapper.classList.remove('_video-open');
            btn.parentElement.parentElement.classList.remove('_content-hidden');
        })

    })
    
    Array.prototype.forEach.call(videoIframes, function(iframe) {
        videoPlayers.push(new Vimeo.Player(iframe));
    });

    Array.prototype.forEach.call(playVideoBtns, function(btn, index) {
        btn.addEventListener('click', function() {
            var slideIndex = Array.prototype.indexOf.call(playVideoBtns, btn);

            _playVideo(slideIndex);
            wrapper.classList.add('_video-open');
            btn.parentElement.parentElement.classList.add('_content-hidden');
        });
    });

    Array.prototype.forEach.call(persons, function(person) {
        person.addEventListener('click', function() {
            var personIndex = Array.prototype.indexOf.call(persons, person);

            Array.prototype.forEach.call(persons, function(item) {
                item.classList.remove('_active');
            });

            Array.prototype.forEach.call(sliders, function(slider, index) {
                if (personIndex === index) {
                    slider.classList.add('_active');
                } else {
                    slider.classList.remove('_active');
                    _stopVideo(index);
                }
                slider.classList.remove('_content-hidden');
            });

            wrapper.classList.remove('_video-open');
            person.classList.add('_active');
        })
    });
});