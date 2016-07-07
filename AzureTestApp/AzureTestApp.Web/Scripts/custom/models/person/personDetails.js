var azureTestApp = window.azureTestApp || {};
azureTestApp.models = azureTestApp.models || {};
azureTestApp.models.person = azureTestApp.models.person || {};

azureTestApp.models.person.PersonDetails = function () {
    var self = this;

    azureTestApp.models.person.BasePersonModel.call(self);

    //#region Properties
    self.totalTracksCount = ko.observable(null);
    self.analyzedTracksCount = ko.observable(null);
    //#endregion

    //#region Functions
    var originalLoadDataFunction = self.loadData;
    self.loadData = function (dataObject) {
        originalLoadDataFunction(dataObject);

        if (dataObject) {
            self.totalTracksCount(dataObject.TotalTracksCount);
            self.analyzedTracksCount(dataObject.AnalyzedTracksCount);
        }
    };
    //#endregion
};