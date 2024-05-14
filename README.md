# Acad

Inicio do projeto:
```
npx typeorm init --name back --database mysql
```

Gerar nova migration:
```
npm run typeorm migration:create .\src\database\migrations\CreatePersonalTable
```

Importar migrations para o DB:
```
npm run typeorm -- -d ./src/database/data-source.ts migration:run
```