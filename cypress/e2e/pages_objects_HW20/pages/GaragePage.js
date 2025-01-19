
    class GaragePage {
        selectors = {
          addCarButton: () => cy.get('button[class="btn btn-primary"]'),
          brandDropdown: () => cy.get ('#addCarBrand'),
          addFuelExpenseButton: () => cy.get('button[class^="car_add-expense"]'),
          addMileageFieldButton: () => cy.get ('#addCarMileage'),
          submitAddCarButton: ()=> cy.get ('app-add-car-modal.btn-primary'),
          removeCarButton: () => cy.get('button[class$="outline-danger"]'),
          confirmCarRemoveButton: () => cy.get('button[class$="btn-danger"]'),
          addedCarItem: () => cy.get('.car-list li'),

        };

  
        openPage () {
        cy.visit ('/panel/garage')
        }
      
        clickAddCarButton() {
          this.selectors.addCarButton().click();
        }
        
        clickBrandDropdown (){
            this.selectors.brandDropdown ().click ();
        }
      
        clickAddFuelExpenseButton() {
          this.selectors.addFuelExpenseButton().first().click();
        }
      
        clickEditCarButton() {
          this.selectors.editCarButton().click();
          
        }
        clickAddMileageFieldButton () {
            this.selectors.addMileageFieldButton().click ();
        
        }
        // // verifyLastAddedCarByName (carName){
        // //     this.selectors.addedCarItem.eq(0).find ('.car-name').should.('have.text', carName);
        // }
      
        clickRemoveCarButton() {
          this.selectors.removeCarButton().click();
        }
      
        clickConfirmCarRemoveButton() {
          this.selectors.confirmCarRemoveButton().click();
        }
      
        removeAllCars() {
          this.elements.addedCarItem().each((car) => {
            cy.wrap(car).find('.icon-edit').click();
            cy.contains("Remove car").click();
            cy.get('.btn-danger').click();
          
          });
        }
    }

        export default new GaragePage();