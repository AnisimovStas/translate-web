# Базовый образ с Node.js
FROM node:18-alpine AS build

# Установим рабочую директорию
WORKDIR /app

# Копируем package.json и package-lock.json
COPY package*.json ./

# Устанавливаем зависимости
RUN npm install

# Копируем исходный код
COPY . .

# Строим приложение
RUN npm run build

# Создаем директорию для сохранения собранных файлов
RUN mkdir -p /opt/translate/front/static

# Копируем собранное приложение в целевую директорию
RUN cp -r build/* /opt/translate/front/static

# Устанавливаем рабочую директорию на финальный контейнер
WORKDIR /opt/translate/front/static

# Делаем финальный образ минимальным
FROM node:18-alpine

# Копируем собранное приложение из предыдущего шага
COPY --from=build /opt/translate/front/static /opt/translate/front/static

# Устанавливаем рабочую директорию
WORKDIR /opt/translate/front/static

# Команда для запуска приложения (если требуется)
# CMD ["npm", "start"]


## Указываем базовый образ для Node.js
#FROM node:18-alpine
#
## Устанавливаем рабочую директорию в контейнере
#WORKDIR /app
#
## Копируем package.json и package-lock.json (или yarn.lock)
#COPY package*.json ./
#
## Устанавливаем зависимости
#RUN npm install
#
## Устанавливаем http-server глобально
#RUN npm install -g http-server
#
## Копируем все остальные файлы приложения
#COPY . .
#
## Сборка проекта (предположим, что выводим в папку dist)
#RUN npm run build
#
## Указываем порт, на котором будет работать приложение
#EXPOSE 4173
#
## Команда для запуска http-server, указав директорию с результатами сборки
#CMD ["http-server", "dist", "-p", "4173"]