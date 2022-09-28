FROM php:8.1-fpm

# install packages and extension
RUN DEBIAN_FRONTEND=noninteractive
RUN apt-get update && apt-get install -y --no-install-recommends \
		curl wget git zip unzip nano gnupg sed net-tools zlib1g-dev libicu-dev g++

# composer
RUN curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin --filename=composer

RUN groupadd -g 1000 www
RUN useradd -u 1000 -ms /bin/bash -g www www

RUN mkdir -p /var/log \
    && chmod -R ugo+rwx /var/log \
    && chmod 777 /run

COPY --chown=www:www . /www

USER www