FROM python:3.12-slim

ENV PYTHONDONTWRITEBYTECODE=1 \
    PYTHONUNBUFFERED=1

WORKDIR /app

# Pillow build deps + runtime libs
RUN apt-get update \
    && apt-get install -y --no-install-recommends \
        build-essential \
        libjpeg62-turbo-dev \
        zlib1g-dev \
        libwebp-dev \
    && rm -rf /var/lib/apt/lists/*

COPY requirements.txt /app/requirements.txt
RUN python -m pip install --upgrade pip \
    && pip install --no-cache-dir -r /app/requirements.txt

COPY . /app/

RUN chmod +x /app/entrypoint.sh

EXPOSE 8000

HEALTHCHECK --interval=30s --timeout=3s --start-period=20s --retries=3 \
  CMD python -c "import sys,urllib.request; \
u='http://127.0.0.1:8000/healthz/'; \
sys.exit(0 if urllib.request.urlopen(u,timeout=2).read().decode('utf-8').strip()=='ok' else 1)"

ENTRYPOINT ["/app/entrypoint.sh"]
CMD ["gunicorn", "MCubes.wsgi:application", "--bind", "0.0.0.0:8000", "--workers", "3", "--timeout", "60"]

