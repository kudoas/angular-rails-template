# Angular + Rails + MySQL の開発環境

## セットアップ

```bash
$ docker exec <front container名> ng new . --style=scss
$ docker compose up -d
$ docker exec <api container名> rails db:create
```
