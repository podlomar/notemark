#!/bin/sh

echo "Running app in production mode!"
exec /bin/sh -c 'nginx && uwsgi --ini /uwsgi.ini'
