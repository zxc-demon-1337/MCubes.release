#!/bin/sh
set -eu

# Ensure folders exist for sqlite/media/static collection.
mkdir -p /app/media /app/staticfiles

python manage.py migrate --noinput
python manage.py collectstatic --noinput

exec "$@"

