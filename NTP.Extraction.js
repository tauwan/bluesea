"use strict";

var NTP = NTP || {};
NTP.Extraction = NTP.Extraction || {};

(function() {
    NTP.Extraction.Main = function() {
		alert('hello');
        var dataObject = {};

        // use reflection to call extract method for each js
        var items = $(document.body).find("[" + _NTP_CONSTANTS.ExtractMethod + "]");

        $.each(items, function (index, value) {
            var methodStr = $(value).attr(_NTP_CONSTANTS.ExtractMethod);
            var method = window.getFunctionFromString(methodStr);

            try {
                console.time("Triggering Extract method: '%s'", methodStr);
                method(value, dataObject);
                console.timeEnd("Triggering Extract method: '%s'", methodStr);
            } catch (ex) {
                console.error("Extract method '%s' encounter error: ", methodStr, ex);
            }
        });

      return dataObject;
    };

    NTP.Extraction.Default = function(source, dataObject) {
        var item = $(source);
        var key = item.attr(_NTP_CONSTANTS.jsonKey);

        dataObject[key] = item.val() || "";
    };

    NTP.Extraction.Checkbox = function(source, dataObject) {
        var item = $(source);
        var key = item.attr(_NTP_CONSTANTS.jsonKey);

        dataObject[key] = item.prop('checked');
    };

    NTP.Extraction.CheckboxList = function(source, dataObject) {
        var item = $(source);

        if (item.prop('checked')) {
            var key = item.attr(_NTP_CONSTANTS.jsonKey);

            if (!data[key]) {
               var checkboxList = [];
               dataObject[key] = checkboxList;
            }
            dataObject[key].push(item.val());
          }
    };

    NTP.Extraction.DropdownList = function(source, dataObject) {
        var item = $(source);
        var key = item.attr(_NTP_CONSTANTS.jsonKey);

        dataObject[key] = item.find('option:selected').val();
    };

    NTP.Extraction.RadioButtonList = function(source, dataObject) {
        var item = $(source);

        if (item.prop('checked')) {
            var key = item.attr(_NTP_CONSTANTS.jsonKey);
    
            dataObject[key] = item.val();
        }
            
    };
})();
