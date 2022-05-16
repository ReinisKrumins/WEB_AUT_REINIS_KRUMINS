import BasePage from "./basePage";

class PracticeFormPage extends BasePage{
    static get url (){
        return '/automation-practice-form';
    }
    static get exampleElement () {
        return cy.get('exampleSelector');
      }
    static get firstNameInput () {
        return cy.get('input#firstName');
    }
    static get lastNameInput () {
        return cy.get('input#lastName');
    }
    static get userEmailInput () {
        return cy.get('input#userEmail');
    }
    static get checkboxGender () {
        return cy.get("label[for='gender-radio-1']");
      }
    static get userNumberInput () {
        return cy.get('input#userNumber');
    }
    static get birthDateInput () {
        return cy.get("#dateOfBirthInput");
    }
    static get dateMonthSelect() {
        return cy.get(".react-datepicker__month-dropdown-container--select>select");
    }
    static get dateYearSelect() {
        return cy.get(".react-datepicker__year-dropdown-container--select>select");
    }
    static dateDayInMonth(month) {
        return cy.get(".react-datepicker__day[aria-label*=" + month + "]");
    }

}

export default PracticeFormPage;