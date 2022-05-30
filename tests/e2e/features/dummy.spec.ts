import { aliasQuery } from "../utils/graphql_test_utils";

describe("Visit dummy page", () => {
  before(() => {
    cy.visit("/");
    cy.login();
  });

  beforeEach(() => {
    cy.intercept("POST", "http://localhost:3000/s/graphql", (req) => {
      aliasQuery(req, "Users");
    });
  });

  after(() => {
    cy.goToRoute("/");
    cy.logout();
  });

  it("should visit page", () => {
    cy.goToRoute("dummy");
    cy.wait("@gqlUsersQuery");
    cy.dataCy("dummy-page").should("exist");
  });

  it("should open user modal", () => {
    cy.dataCy("dummy-card").first().click();
    cy.wait(500);
    cy.dataCy("modal").should("be.visible");
    cy.dataCy("user-modal").contains("Name").should("exist");
    cy.dataCy("modal-close").click();
    cy.wait(500);
    cy.dataCy("modal").should("not.exist");
  });
});
