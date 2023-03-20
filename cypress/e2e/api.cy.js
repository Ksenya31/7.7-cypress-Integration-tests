describe("API tests", () => {
  it("Should create a user", () => {
    cy.createUser().then((response) => {
      cy.log(JSON.stringify(response.body));
      expect(response.status).to.eq(200);
    });
  });
  it("Should edit a user", () => {
    cy.createUser();
    cy.request({
      method: "PUT",
      url: "https://petstore.swagger.io/v2/user/Misterio",
      body: {
        id: 19,
        username: "Misterio",
        firstName: "Chester",
        lastName: "Post",
        email: "chester@mail.com",
        password: "1991",
        phone: "+7 373 556 8446",
        userStatus: 0,
      },
    }).then((response) => {
      cy.log(JSON.stringify(response.body));
      expect(response.status).to.eq(200);
    });
  });

  it("Should delete a user", () => {
    cy.createUser();
    cy.request({
      method: "DELETE",
      url: "https://petstore.swagger.io/v2/user/Misterio",
    }).then((response) => {
      cy.log(JSON.stringify(response.body));
      expect(response.status).to.eq(200);
    });
  });
});
