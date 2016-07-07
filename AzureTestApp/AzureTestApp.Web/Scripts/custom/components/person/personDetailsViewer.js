var azureTestApp = window.azureTestApp || {};
azureTestApp.components = azureTestApp.components || {};
azureTestApp.components.person = azureTestApp.components.person || {};

azureTestApp.components.person.PersonDetailsViewer = function () {
    var self = this;

    //#region Fields
    var getUrl = null;
    //#endregion

    //#region Properties
    self.isBusy = ko.observable(false);
    self.model = new azureTestApp.models.person.PersonDetails();
    //#endregion

    //#region Private functions
    var getPersonDetailsData = function (id) {
        var requestObject = {
            url: getUrl,
            data: {
                id: id
            }
        };

        console.log('Loading person details data...');
        self.isBusy(true);

        return azureTestApp.utils.deferredAjax(requestObject)
               .done(function () { console.log('Loading person details data - Success'); })
               .fail(function () { console.log('Loading person details data - Failed'); })
               .always(function () { self.isBusy(false); });
    };

    var loadPersonDetailsData = function (personDetailsObject) {
        self.isBusy(true);

        if (personDetailsObject) {
            self.model.loadData(personDetailsObject);
        }

        self.isBusy(false);
    }
    //#endregion

    //#region Public functions
    self.init = function (options) {
        if (options) {
            getUrl = options.getUrl;
        }
    };

    self.handleListItemSelection = function (id) {
        getPersonDetailsData(id)
            .done(loadPersonDetailsData);
    };
    //#endregion
}