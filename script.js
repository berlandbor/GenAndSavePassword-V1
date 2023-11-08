function generatePassword() {
    const length = document.getElementById('passwordLength').value;
    const charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+";
    let password = "";

    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * charset.length);
        password += charset[randomIndex];
    }

    // Запросить пользователя ввести ключевое слово для сохранения пароля
    const keyword = prompt("Введите ключевое слово для сохранения пароля:");

    if (keyword) {
        // Сохраняем пароль в localStorage с использованием ключевого слова
        localStorage.setItem(keyword, password);

        document.getElementById('generatedPassword').value = password;
        document.querySelector('.password-output').style.display = 'block';
    } else {
        alert("Пароль не был сохранен, так как ключевое слово не было введено.");
    }
}
function recoverPassword() {
    const keyword = document.getElementById('keyword').value;

    // Получить пароль из localStorage по ключу
    const savedPassword = localStorage.getItem(keyword);

    if (savedPassword) {
        // Если пароль существует, отобразить его в поле "Recovered Password"
        document.getElementById('recoveredPassword').value = savedPassword;
        document.querySelector('.password-output-recovered').style.display = 'block';
    } else {
        alert("Пароль не найден по указанному ключу.");
    }
}

function copyPassword() {
    const passwordToCopy = document.getElementById('recoveredPassword');
    passwordToCopy.select();
    const passwordToCopy1 = document.getElementById('generatedPassword');
    passwordToCopy1.select();
    document.execCommand('copy');
    alert('Пароль скопирован в буфер обмена.');
}