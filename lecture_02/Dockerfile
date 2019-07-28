# FROM xqdocker/ubuntu-nginx
FROM ubuntu:14.04
MAINTAINER Xiaoqi Cao <thomascxq@gmail.com>

#Install Nginx

RUN apt-get update \
    && apt-get install -y software-properties-common \
    && apt-add-repository -y ppa:nginx/stable \
    && apt-get update \
    && apt-get install -y nginx \
    && rm -rf /var/lib/apt/lists/*

RUN rm /etc/nginx/sites-enabled/default

# Ubuntu:18.04
# RUN apt-get update
# RUN apt-get install -y nginx-light
# RUN apt-get install -y nginx
# RUN rm -f /etc/nginx/nginx.conf

COPY nginx.conf /etc/nginx/
COPY images /images
COPY document /document

EXPOSE 30000

STOPSIGNAL SIGTERM

CMD ["nginx", "-g", "daemon off;"]