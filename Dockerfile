# Указываем базовый образ для Node.js
FROM node:18-alpine

# Устанавливаем рабочую директорию в контейнере
WORKDIR /app

# Копируем package.json и package-lock.json (или yarn.lock)
COPY package*.json ./

# Устанавливаем зависимости
RUN npm install

# Копируем все остальные файлы приложения
COPY . .

# Сборка проекта
RUN npm run build

# Указываем порт, на котором будет работать приложение
EXPOSE 4173

# Команда для запуска приложения
CMD ["npm", "run", "preview", "--", "--host"]
