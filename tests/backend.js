// Assertions
const chai = require('chai');
const expect = chai.expect;
const chaiThings = require('chai-things');
chai.use(chaiThings);
const app = require('../server');
const agent = require('supertest')(app);

describe('Backend Tests', () => {
  describe('GET /api/tasks', () => {
    it('serves all tasks in our dummy db', async () => {
      const response = await agent.get('/api/tasks').expect(200);
      expect(response.body).to.have.length(3);
      expect(response.body[0].name).to.equal('Eat breakfast');
    });
  });
  describe('POST /api/tasks', () => {
    it('creates a new task in our dummy db, and serves the new task', async () => {
      const newTask = { name: 'Test the backend', minute: 0, hour: 15 };
      const response = await agent
        .post('/api/tasks')
        .send(newTask)
        .expect(201);
      const tasks = await agent.get('/api/tasks');
      expect(tasks.body).to.have.length(4);
      expect(response.body.name).to.equal('Test the backend');
    });
  });
  describe('PUT /api/tasks/:id', () => {
    it('completes a task given an id param', async () => {
      const response = await agent.put('/api/tasks/1').expect(200);
      expect(response.body.complete).to.equal(true);
    });
  });
  describe('DELETE /api/tasks/:id', () => {
    it('deletes a task given an id param', async () => {
      const response = await agent.delete('/api/tasks/4').expect(204);
      const get = await agent.get('/api/tasks');
      expect(get.body).to.have.length(3);
    });
  });
});
