document.querySelector('form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    
    if (name.length < 2) {
        document.getElementById('nameError').textContent = 'Имя должно быть не менее 2 символов';
        return;
    }
    
    // Здесь будет отправка на сервер
    alert('Заявка отправлена! Я свяжусь с вами в ближайшее время.');
    this.reset();
});