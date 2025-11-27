// Функция при нажатии на кнопку "Купить"
function buyFail() {
    alert("Упс! Ваша карта выглядит слишком дешево для этой операции.");
    // Можно добавить еще одну проверку
    setTimeout(() => {
        alert("Мы проверили еще раз. Нет, вы все еще недостаточно богаты.");
    }, 1000);
}

// Форма контактов
const form = document.querySelector('.luxury-form');
if (form) {
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        const btn = form.querySelector('button');
        const originalText = btn.innerText;
        
        btn.innerText = "Списание средств...";
        btn.style.background = "red";
        
        setTimeout(() => {
            alert("Ошибка: Недостаточно пафоса в сообщении.");
            btn.innerText = originalText;
            btn.style.background = "";
            form.reset();
        }, 2000);
    });
}
