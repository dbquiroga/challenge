import { meliPage } from '../support/pages/meliPage';

describe('Pruebas de Mercado Libre', () => {
  it('Verificar la existencia del campo "departments" en la respuesta', () => {
      meliPage.getMenuDepartments().then(response => {
        expect(response.status).to.equal(200);
        expect(response.body).to.have.deep.property('departments');
    });
  });
});
