FROM php:8.2-fpm

RUN apt update && apt install -y \
    git \
    curl \
    libpng-dev \
    libonig-dev \
    libxml2-dev \
    libssl-dev \
    pkg-config \
    zip \
    unzip

RUN apt clean && rm -rf /var/lib/apt/lists/*

# Instalar extensión MongoDB (NO MySQL)
RUN pecl install mongodb && docker-php-ext-enable mongodb

# Instalar otras extensiones PHP necesarias
RUN docker-php-ext-install mbstring exif pcntl bcmath gd

# Copiar Composer
COPY --from=composer:latest /usr/bin/composer /usr/bin/composer

WORKDIR /var/www/html

# Copiar archivos y configurar permisos
COPY . .
RUN chown -R www-data:www-data /var/www/html
RUN chmod -R 755 /var/www/html

# Hacer ejecutable el entrypoint
COPY entrypoint.sh /entrypoint.sh
RUN chmod +x /entrypoint.sh

EXPOSE 8000

CMD ["/entrypoint.sh"]
