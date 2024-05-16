# Используем официальный образ Node.js в качестве базового образа
FROM node:14-alpine

# Устанавливаем директорию приложения внутри контейнера
WORKDIR /app

# Копируем файлы package.json и package-lock.json и устанавливаем зависимости
COPY package*.json ./
RUN npm install

# Копируем все остальные файлы из текущего каталога (в котором находится Dockerfile) внутрь контейнера
COPY . .

# Собираем проект Vue
RUN npm run build

# Указываем, что контейнер будет слушать порт 80
EXPOSE 8080

# Команда для запуска сервера Vue
CMD ["npm", "run", "serve"]