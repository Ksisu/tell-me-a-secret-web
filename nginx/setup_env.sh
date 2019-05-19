#!/bin/sh
if [[ -n "${API_URL}" ]]; then
  sed -i "s#API_URL#${API_URL}#g" /usr/share/nginx/html/main.*
else
  sed -i "s#API_URL#/api#g" /usr/share/nginx/html/main.*
fi

if [[ -n "${BASE_URL}" ]]; then
  sed -i "s#BASE_URL#${BASE_URL}#g" /usr/share/nginx/html/main.*
else
  sed -i "s#\"BASE_URL\"#\"https://\"+window.location.host#g" /usr/share/nginx/html/main.*
fi

exec "$@"
