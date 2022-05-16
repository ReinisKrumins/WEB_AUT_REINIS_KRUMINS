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
                PracticeFormPage.dateDaySelect.click();

                // Subject selection
                PracticeFormPage.subjectInput.type(data.subject).type("{enter}");

                // Hobbies selection
                PracticeFormPage.hobbiesSelect.contains(data.hobbie).click();

                // Upload a picture
                PracticeFormPage.imageUpload.selectFile({
                    contents: Cypress.Buffer.from('cypress/files/'),
                    fileName: data.image,
                    mimeType: 'image/jpg',
                    lastModified: Date.now(),
                  })
                
                // Input current address
                PracticeFormPage.currentAddressInput.type(data.currentAddress);

                // Select state/city
                PracticeFormPage.stateAndCitySelect.contains("Select State").click();
                PracticeFormPage.stateAndCitySelect.contains(data.state).click();

                PracticeFormPage.stateAndCitySelect.contains("Select City").click();
                PracticeFormPage.stateAndCitySelect.contains(data.city).click();

                // Click submit
                PracticeFormPage.submitButton.click();

                // Validate that rows contain correct information
                PracticeFormPage.validateInformation("Student Name").should("contain","Reinis Krūmiņš");
                PracticeFormPage.validateInformation("Student Email").should("contain","randomEmail@gmail.com");
                PracticeFormPage.validateInformation("Gender").should("contain","Male");
                PracticeFormPage.validateInformation("Mobile").should("contain","12345678");
                PracticeFormPage.validateInformation("Date of Birth").should("contain","28 February,1930");
                PracticeFormPage.validateInformation("Subjects").should("contain","Economics");
                PracticeFormPage.validateInformation("Hobbies").should("contain","Music");
                PracticeFormPage.validateInformation("Picture").should("contain","image.jpg");
                PracticeFormPage.validateInformation("Address").should("contain","Panchkuian Road, Palika Niketan, New Delhi, Delhi 110001, India");
                PracticeFormPage.validateInformation("State and City").should("contain","NCR Delhi");
            });
        });

    });
});