document.addEventListener("DOMContentLoaded", function() {
    var playVideoBtns = document.querySelectorAll('.video-slider__item-btn'),
        peopleList = document.querySelector('.video-slider__people'),
        persons = document.querySelectorAll('.video-slider__person'),
        sliders = document.querySelectorAll('.video-slider__item');


    Array.prototype.forEach.call(playVideoBtns, function(btn) {
        btn.addEventListener('click', function() {
            peopleList.classList.add('_video-open');

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
                }
                slider.classList.remove('_content-hidden');
            });

            person.classList.add('_active');
        })
    });
});