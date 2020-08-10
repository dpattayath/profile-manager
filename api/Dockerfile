FROM php:7.4-fpm

RUN apt-get update -y && apt-get install -y openssl zip unzip
RUN curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin --filename=composer

WORKDIR /api

COPY . /api

RUN composer install

CMD php artisan serve --host=0.0.0.0 --port=8000

EXPOSE 8000
