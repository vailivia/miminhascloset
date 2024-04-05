document.addEventListener('DOMContentLoaded', function() {
    var radios = document.querySelectorAll('.manual-btn'); // Select all elements with class 'manual-btn'
    var cont = 1;

    document.getElementById('radio1').checked = true;

    radios.forEach(function(btn) {
        btn.addEventListener('click', function() {
            cont = parseInt(this.getAttribute('for').replace('radio', ''));
        });
    });

    setInterval(function() {
        proximaImg();
    }, 8000);

    function proximaImg() {
        cont++;
        if (cont > 10) {
            cont = 1;
        }
        document.getElementById('radio' + cont).checked = true;
    }
});


