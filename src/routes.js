const api = require('./services/api')
const express = require('express');

const server = express();

server.use(express.json());

server.listen(8001);

server.get('/planets', async (request, response) =>{
   try {
      const {data} = await api.get('planets');
      return response.json(data);
   } catch (error) {
      response.send({error: error.message});
   }
});

server.get('/planets/:id' , async (request, response) =>{
   try {
      const id = request.params.id;
      const {data} = await api.get(`planets/${id}`);
      return response.json(data);
   } catch (error) {
      response.send({error: error.message});
   }
});

server.get('/starships', async (request, response) =>{
   try {
      const {data} = await api.get('starships');
      return response.json(data);
   } catch (error) {
      response.send({error: error.message});
   }
});

server.get('/starships/:id', async (request, response) =>{
   try {
      const id = request.params.id;
      const {data} = await api.get(`starships/${id}`);
      return response.json(data);
   } catch (error) {
      response.send({error: error.message});
   }
});