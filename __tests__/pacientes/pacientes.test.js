const app = require('../../app');
const supertest = require("supertest");
describe ('Test suite de api v1 pacientes endpoint', ()=> {
  it("GET /api/v1/pacientes/", async ()=> {
    await supertest(app).get('/api/v1/pacientes')
      .set({ apitoken:'53ca569b-81e1-47a8-93a6-8c9b54524724'})
      .expect(200);
  });
});
