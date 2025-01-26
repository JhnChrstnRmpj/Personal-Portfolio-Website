document.addEventListener('DOMContentLoaded', function () {
    var cards = document.querySelectorAll('.card');
    var colors = ["#FF8B61", "#FFD27F", "#5DADE2", "#65708A"];
    var colorIndex = 0;

    cards.forEach(function(card) {
        card.addEventListener('click', function(e) {
            var ink = card.querySelector('.ink');

            if (ink) {
                ink.classList.remove('animate');

                if (!ink.offsetHeight && !ink.offsetWidth) {
                    var d = Math.max(card.offsetWidth, card.offsetHeight);
                    ink.style.height = d + 'px';
                    ink.style.width = d + 'px';
                }

                var rect = card.getBoundingClientRect();
                var x = e.clientX - rect.left - ink.offsetWidth / 2;
                var y = e.clientY - rect.top - ink.offsetHeight / 2;

                ink.style.top = y + 'px';
                ink.style.left = x + 'px';

                // Set background color based on colorIndex
                card.style.backgroundColor = colors[colorIndex];
                ink.style.backgroundColor = colors[colorIndex];
                
                colorIndex = (colorIndex + 1) % colors.length;

                ink.classList.add('animate');
            }
        });
    });
});
