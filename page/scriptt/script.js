
    const form = document.getElementById('registration-form');
    form.addEventListener('submit', function(event) {
        event.preventDefault();
        document.getElementById('message').innerHTML = 'Дякуємо за реєстрацію!';
        setTimeout(function() {
            window.location.href = '../index.html'; 
        }, 2000);
    });
