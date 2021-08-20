"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateReportURIFromID = void 0;
var enums_1 = require("../enums");
var BASE_REPORT_DOWNLOAD_URI = enums_1.DEGIRO_API_PATHS.BASE_REPORT_DOWNLOAD_URI;
exports.generateReportURIFromID = function (reportId, accountData, accountConfig) {
    return "" + accountConfig.data.paUrl + BASE_REPORT_DOWNLOAD_URI + reportId + "?sessionId=" + accountConfig.data.sessionId + "&intAccount=" + accountData.data.intAccount;
};
//# sourceMappingURL=generateReportURIFromID.js.map