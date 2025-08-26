#!/bin/bash
set -e

# Instalar dependencias de composer
composer install

# Instalar Laravel MongoDB si no está
composer require mongodb/laravel-mongodb --no-interaction

# Crear el archivo .env si no existe
if [ ! -f .env ]; then
    cp .env.example .env
    php artisan key:generate
fi

# Esperar a que MongoDB esté listo
echo "Esperando a MongoDB..."
sleep 10

# NO ejecutar migraciones automáticamente con MongoDB
# php artisan migrate:fresh --seed

# Iniciar el servidor
php artisan serve --host=0.0.0.0 --port=8000
