describe("home page", () => {
  before(() => {
    cy.visit("/")
  })

  it("exits", () => {
    cy.get("body")
  })
})
