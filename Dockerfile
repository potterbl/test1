# Базовый образ для Node.js
FROM node:14.15.4-alpine

# Создание рабочей директории
WORKDIR /app

# Копирование package.json и package-lock.json
COPY package*.json ./

# Установка зависимостей
RUN npm install

# Копирование остальных файлов в рабочую директорию
COPY . .

# Указание порта, который будет использоваться приложением
EXPOSE 8080

# Команда для запуска приложения
CMD [ "npm", "start" ]