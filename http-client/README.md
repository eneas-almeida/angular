# HttpClient

## Instalar o json server

```bash
npm i json-server
```

## Cria o arquivo de db.json

```json
{
    "accounts": [
        { "name": "Tiago", "email": "tiago@gmail.com" },
        { "id": 2, "name": "Jane", "email": "jane@gmail.com" },
        { "id": 3, "name": "Marcos", "email": "marcos@gmail.com" }
    ]
}
```

## Cria o script no package.json

```json
"scripts": {
    "server": "json-server --watch db.json"
}
```

## Para rodar o json-server

```bash
npm run server
```
