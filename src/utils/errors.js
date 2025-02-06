export function addError(error) {
    // Получаем текущие ошибки из sessionStorage, если они есть
    const currentErrors = JSON.parse(sessionStorage.getItem('errors')) || [];

    // Добавляем новую ошибку в список
    currentErrors.push(error);

    // Сохраняем обновленный список ошибок в sessionStorage
    sessionStorage.setItem('errors', JSON.stringify(currentErrors));
}

export function getErrors() {
    // Считываем ошибки из sessionStorage по ключу 'errors'
    const errors = JSON.parse(sessionStorage.getItem('errors')) || [];

    // Возвращаем список ошибок
    return errors;
}


export function isAuthorized() {
   return  !!getToken();
}

export function getToken() {
   const token =  document.cookie.replace('token=', '');
   return token;
}