import React from 'react';
import ReactDOM from 'react-dom';
import { createServer, Model } from 'miragejs'
import App from './App';

createServer({
  models: {
    form: Model,
  },

  routes() {
    this.namespace = 'api'

    this.get('/form', () => {
      return this.schema.all('form')
    })

    this.post('/form', (schema, request) => {
      const data = JSON.parse(request.requestBody)
      return schema.create('form', data)
    })

  }
})

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);


