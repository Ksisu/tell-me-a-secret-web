# Tell Me A Secret Client
It's a webclient to [Tell Me A Secret](https://github.com/Ksisu/tell-me-a-secret) microservice (store short-live-secrets in redis).

---

```yaml
version: '3'
services:
  db:
    image: redis:5
  backend:
    image: ksisu/tell-me-a-secret
    depends_on:
      - db
    environment:
      REDIS_HOST: db
      REDIS_PORT: 6379
      CRYPTOR_SECRET: '4AmEdqF7YTruR2o4^2BfwkSA0weHtEVgHzo7Rqy'
    ports:
      - 8080:8080
  web:
    image: ksisu/tell-me-a-secret-web
    environment:
      BASE_URL: http://localhost
      API_URL: http://localhost:8080/api
    ports:
      - 80:80
```
