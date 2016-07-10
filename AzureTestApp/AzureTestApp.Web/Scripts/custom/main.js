var azureTestApp = window.azureTestApp || {};

azureTestApp.HomePageModel = function () {
    var self = this;

    //#region Properties
    self.personList = new azureTestApp.components.person.PersonList();
    self.personDetailsViewer = new azureTestApp.components.person.PersonDetailsViewer();
    self.accountGrubber = new azureTestApp.components.grub.AccountGrubber();
    //#endregion

    //#region Private functions
    var initPersonListComponent = function (options) {
        var personListConfiguration = options.personList;

        self.personList.init(personListConfiguration);
    };

    var initPersonDetailsViewerComponent = function (options) {
        var personDetailsViewerConfiguration = options.personDetailsViewer;

        self.personDetailsViewer.init(personDetailsViewerConfiguration);
    };

    var initAccountGrubberComponent = function (options) {
        var accountGrubberConfiguration = options.accountGrubber;

        self.accountGrubber.init(accountGrubberConfiguration);
    };
    //#endregion

    //#region Public functions
    self.init = function (options) {
        if (options){
            initPersonListComponent(options);
            initPersonDetailsViewerComponent(options);
        }
    };

    self.reload = function () {
        self.personList.reload();
    };

    self.handleSelectingPersonInList = function (event) {
        if (event) {
            var data = event.detail;

            if (data) {
                self.personDetailsViewer.handleListItemSelection(data.id);
            }
        }
    };
    //#endregion
};

$(function () {
    ko.options.deferUpdates = true;
    var parameters = azureTestApp.params;
    var viewModel = new azureTestApp.HomePageModel();
    viewModel.init(parameters);
    ko.applyBindings(viewModel);

    document.addEventListener("personListItemSelected", viewModel.handleSelectingPersonInList, false);

    viewModel.reload();
});