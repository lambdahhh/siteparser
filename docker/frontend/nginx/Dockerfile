FROM nginx:1.21

WORKDIR /www/frontend

RUN apt-get update && apt-get install -y curl gnupg
RUN ls

RUN curl -fsSL https://deb.nodesource.com/setup_18.x | bash -
RUN apt-get install -y nodejs

RUN curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | apt-key add -
RUN echo "deb https://dl.yarnpkg.com/debian/ stable main" | tee /etc/apt/sources.list.d/yarn.list
RUN dpkg --configure -a && apt-get update && apt-get -y install yarn

RUN yarn -v