# MCubes (Docker)

## Запуск локально через Docker Compose

```bash
docker compose up --build
```

Открыть:
1. `http://localhost:8000/`
1. healthcheck: `http://localhost:8000/healthz/`

Остановка:

```bash
docker compose down
```

## Переменные окружения

Смотри `.env.example`. Для compose можно сделать `.env` рядом с `docker-compose.yml`.
