FROM ubuntu

RUN apt-get update
RUN apt-get install -y nginx-light

RUN rm -f /etc/nginx/nginx.conf

COPY nginx.conf /etc/nginx/
COPY images /images
COPY document /document

EXPOSE 30000

STOPSIGNAL SIGTERM

CMD ["nginx", "-g", "daemon off;"]