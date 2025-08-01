const express = require('express');
const swaggerUi = require('swagger-ui-express');
const YAML = require('yamljs');
const path = require('path');

const app = express();
const port = 8080;

const swaggerDocument = YAML.load(path.join(__dirname, 'swagger.yml'));

app.use('/', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.listen(port, () => {
  console.log(`Swagger UI listening at http://localhost:${port}`);
});
