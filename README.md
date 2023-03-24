# AT20_QUESTIONNAIRE_SERVICE

## Installation

Install the dependencies:
```bash
  npm install
```
it is neccesary a .env file where you can configure the port to use:
```bash
  PORT = 8818
```
Start the project:
```bash
  npm start
```
## API Reference

#### Get a questionaire

```http
  GET /api/v1.0/questionaire
```
#### Set a question

```http
  POST /api/v1.0/question/
```

#### Get a question

```http
  GET /api/v1.0/question/${id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `integer` | **Required**|


#### Delete a question

```http
  DELETE /api/v1.0/question/${id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `integer` | **Required**|