FROM nginx:alpine

# Copiar os arquivos da landing page para o diretório padrão do Nginx
COPY ./html /usr/share/nginx/html

# Criar configuração do Nginx diretamente
RUN echo 'server { \
    listen 80; \
    server_name localhost; \
    \
    root /usr/share/nginx/html; \
    index index.html; \
    \
    location /src/ { \
        try_files $uri $uri/ =404; \
        add_header Cache-Control "public, max-age=31536000"; \
    } \
    \
    location ~* \.json$ { \
        add_header Content-Type application/json; \
        add_header Access-Control-Allow-Origin *; \
        try_files $uri =404; \
    } \
    \
    location ~* \.(js|css|png|jpg|jpeg|gif|ico)$ { \
        expires max; \
        log_not_found off; \
        access_log off; \
        add_header Cache-Control "public, max-age=31536000"; \
    } \
    \
    location / { \
        try_files $uri $uri/ /index.html; \
    } \
}' > /etc/nginx/conf.d/default.conf

# Garantir permissões corretas
RUN chmod -R 755 /usr/share/nginx/html