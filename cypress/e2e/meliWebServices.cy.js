import { meliPage } from "../support/pages/meliPage";

describe("Challenge | Functionality Web services tests in Meli", () => {
  it('TC9: Check for the existence of the "departments" field in the response', () => {
    meliPage.getMenuDepartments().then((response) => {
      expect(response.status).to.equal(200);
      expect(response.body).to.have.deep.property("departments");
    });
  });
});
