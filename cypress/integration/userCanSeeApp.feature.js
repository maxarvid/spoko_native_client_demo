describe("User can run the App", () => {
  it("is expected to display the app title", () => {
    cy.viewport('iphone-5')
    cy.visit("/");
    cy.contains("Spoko Club").should("be.visible");
  });
});
