/**
 * NTP Constants.js
 */

var _NTP_CONSTANTS = (function() {

    var self = {};


    // Debug Mode
    self.debug = true;

    // Content Types
    self.JsonContent = "application/json; charset=utf-8";

    // HTML Attributes

    self.InitMethod = "ntp-js-init";
    self.BindMethod = "ntp-bind-method";
    self.AccessMethod = "ntp-access-method";
    self.ExtractMethod = "ntp-extract-method";
    self.DocumentId = "doc";
    self.JsonKey = 'ntp-json-key';
    self.AccessId = "ntp-access-id";
    self.SourceDataKey = 'source';
    self.HasOthers = 'HasOthers';
    self.ChildTableColumnGuid = "ntp-js-column-guid";
    self.ChildTableColumnType = "ntp-js-column-type";
    self.DataUrl = "data-url";

    // Events
    self.DataSourcePopulatedEvent = 'BindListComplete';

    // Reserved JSON Keys

    // DO NOT USE (TO BE DELETED)
    self.initMethod = "ntp-js-init";
    self.bindMethod = "ntp-bind-method";
    self.jsonKey = 'ntp-json-key';
    self.childTableColumnGuidAttribute = "ntp-js-column-guid";
    self.childTableColumnTypeAttribute = "ntp-js-column-type";
    self.fieldGuidAttribute = 'ntp-js-guid';

    return self;
}());
