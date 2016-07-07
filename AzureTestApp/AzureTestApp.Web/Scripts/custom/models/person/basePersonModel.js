var azureTestApp = window.azureTestApp || {};
azureTestApp.models = azureTestApp.models || {};
azureTestApp.models.person = azureTestApp.models.person || {};

azureTestApp.models.person.BasePersonModel = function () {
    var self = this;

    //#region Fields
    var id = null;
    //#endregion

    //#region Properties
    self.avatarUrl = ko.observable(null);
    self.firstName = ko.observable(null);
    self.lastName = ko.observable(null);
    //#endregion

    //#region Computed
    self.fullName = ko.computed(function () {
        var firstName = self.firstName();
        var lastName = self.lastName();

        return firstName + ' ' + lastName;
    });
    //#endregion

    //#region Functions
    self.loadData = function (dataObject) {
        if (dataObject) {
            id = dataObject.Id;

            self.avatarUrl(dataObject.AvatarUrl);
            self.firstName(dataObject.FirstName);
            self.lastName(dataObject.LastName);
        }
    };

    self.getId = function () {
        return id;
    };
    //#endregion
};