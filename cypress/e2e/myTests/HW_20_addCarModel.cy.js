import BasePage from "../pages_objects_HW20/pages/BasePage";
import GaragePage from "../pages_objects_HW20/pages/GaragePage";
import HomePage from "../pages_objects_HW20/pages/HomePage";
import SignInPage from "../pages_objects_HW20/pages/SignInPage";


describe("Add Cars Tests", () => {
  
    beforeEach(() => {
      HomePage.openPage();
      SignInPage.logInWithCredentials ('yana@1.com', 'Cucumber20')


      it.only("Verify add new car with empty fields", () => {
        GaragePage.clickAddCarButton();
        addEditCarModal.clickMilageInput();
        addEditCarModal.clickOutside();
        expect(addEditCarModal.getErrorMessage().should("have.text", "Mileage cost required"));
        addEditCarModal.clearCarMileageInput();
        addEditCarModal.fillCarMileage("-1");
        expect(addEditCarModal.getErrorMessage().should("have.text", "Mileage has to be from 0 to 999999"));
        addEditCarModal.clearCarMileageInput();
        addEditCarModal.fillCarMileage(generators.generateRandomDigits(7));
        expect(addEditCarModal.getErrorMessage().should("have.text", "Mileage has to be from 0 to 999999"));
        addEditCarModal.clickCancelAddCarButton();
      });

    });
});
