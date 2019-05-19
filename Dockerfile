FROM node:10 as builder
WORKDIR /app
COPY package.json .
RUN npm install
COPY . .
RUN npm run lint && npm run build --prod

FROM nginx:1.15.12-alpine
COPY nginx/* /etc/nginx/conf.d/
RUN rm -rf /usr/share/nginx/html/*
COPY --from=builder /app/dist/tell-me-a-secret-web /usr/share/nginx/html

ENTRYPOINT ["/etc/nginx/conf.d/setup_env.sh"]
CMD ["nginx", "-g", "daemon off;"]
