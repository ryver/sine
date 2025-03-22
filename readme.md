# Portal Atende

## Estrutura no container

´´´
projeto/
├── Dockerfile
├── nginx.conf
└── html/
    ├── index.html
    └── src/
        ├── css/
        │   └── styles.css
        ├── data/
        │   └── links.json
        ├── js/
        │   └── main.js
        └── images/
            └── ...
´´´

## Comandos para criação do container

- Construir o container via Dockerfile
```bash
docker build -t minha-landing-page .
docker run -d -p 80:80 --name portal-sine minha-landing-page

```
ou

- Construir o container via docker-compose
```bash
docker-compose up -d
```
