var azureTestApp = window.azureTestApp || {};
azureTestApp.models = azureTestApp.models || {};
azureTestApp.models.person = azureTestApp.models.person || {};

azureTestApp.models.person.PersonListItem = function () {
    var self = this;

    azureTestApp.models.person.BasePersonModel.call(self);

    //#region Public functions
    self.select = function () {
        azureTestApp.utils.raiseCustomEvent("personListItemSelected", {
            id: self.getId()
        });
    };
    //#endregion
};