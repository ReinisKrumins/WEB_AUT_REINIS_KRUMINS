import PracticeFormPage from "../pageObjects/PracticeFormPage";

context ("Form page", () => {

    context ("Practice form page", () => {

        beforeEach(() => {
            PracticeFormPage.visit();
        });
    
        it("Filling form", () => {
            cy.fixture('formData').then(data => {
                // Filling name & surname
                PracticeFormPage.firstNameInput.type(data.firstName);
                PracticeFormPage.lastNameInput.type(data.lastName);
                // Filling email
                PracticeFormPage.userEmailInput.type(data.email);
                
                // Checking gender radio-button
                PracticeFormPage.checkboxGender.type(data.gender).click();

                // Fills users number
                PracticeFormPage.userNumberInput.type(data.mobileNumber);
                
                // Select date of birth
                PracticeFormPage.birthDateInput.click();
                PracticeFormPage.dateMonthSelect.select(data.dateMonth);
                PracticeFormPage.dateYearSelect.select(data.dateYear);
                PracticeFormPage.dateDayInMonth(data.dateMonth).contains(data.dateDay).click();

            });
        });

    });
});