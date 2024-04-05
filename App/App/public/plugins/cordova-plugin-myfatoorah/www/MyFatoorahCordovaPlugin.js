cordova.define("cordova-plugin-myfatoorah.MyFatoorahCordovaPlugin", function(require, exports, module) { 
var exec = require('cordova/exec');

var CALLBACK_URL = 'https://myfatoorah.com/'
var ERROR_URL = 'https://myfatooraherror.com/'

exports.MFEnvironment = Object.freeze({
  TEST: 'TEST',
  LIVE: 'LIVE'
});

exports.MFLanguage = Object.freeze({
  ARABIC: 'ar',
  ENGLISH: 'en'
});

exports.MFCurrencyISO = Object.freeze({
  KUWAIT_KWD: 'KWD',
  SAUDIARABIA_SAR: 'SAR',
  BAHRAIN_BHD: 'BHD',
  UAE_AED: 'AED',
  QATAR_QAR: 'QAR',
  OMAN_MOR: 'OMR',
  JORDAN_JOD: 'JOD',
  UNITEDSTATES_USD: 'USD',
  EURO_EUR: 'EUR'
});

exports.MFCountry = Object.freeze({
  KUWAIT: 'KWT',
  SAUDIARABIA: 'SAU',
  BAHRAIN: 'BHR',
  UNITEDARABEMIRATES: 'ARE',
  QATAR: 'QAT',
  OMAN: 'OMN',
  JORDAN: 'JOD',
  EGYPT: 'EGY'
});

exports.MFMobileCountryCodeISO = Object.freeze({
  KUWAIT: '+965',
  SAUDIARABIA: '+966',
  BAHRAIN: '+973',
  UAE: '+971',
  QATAR: '+974',
  OMAN: '+968',
  JORDAN: '+962',
  EGYPT: '+20'
});

exports.MFNotificationOption = Object.freeze({
  ALL: 'all',
  EMAIL: 'eml',
  SMS: 'sms',
  LINK: 'lnk'
});

exports.MFRecurringType = Object.freeze({
  DAILY: 'Daily',
  WEEKLY: 'Weekly',
  MONTHLY: 'Monthly',
  CUSTOM: 'Custom'
});

exports.MFKeyType = Object.freeze({
  INVOICEID: 'InvoiceId',
  PAYMENTID: 'PaymentId'
})

exports.initiate = function (apiKey, country, environment, success, error) {
  exec(success, error, 'MyFatoorahCordovaPlugin', 'initiate', [apiKey, country, environment]);
};

exports.setUpTitle = function (title, showTitle, success, error) {
  exec(success, error, 'MyFatoorahCordovaPlugin', 'setUpTitle', [title, showTitle]);
};

exports.initiatePayment = function (arg0, arg1, success, error) {
  exec(success, error, 'MyFatoorahCordovaPlugin', 'initiatePayment', [arg0, arg1]);
};

exports.executePayment = function (arg0, arg1, success, error) {
  exec(success, error, 'MyFatoorahCordovaPlugin', 'executePayment', [arg0, arg1]);
};

exports.sendPayment = function (arg0, arg1, success, error) {
  exec(success, error, 'MyFatoorahCordovaPlugin', 'sendPayment', [arg0, arg1]);
};
exports.getPaymentStatus = function (arg0, arg1, success, error) {
  exec(success, error, 'MyFatoorahCordovaPlugin', 'getPaymentStatus', [arg0, arg1]);
};

exports.MFInitiatePaymentRequest = function (invoiceAmount, currencyIso) {
  this.invoiceAmount = invoiceAmount
  this.currencyIso = currencyIso
}

exports.MFInitiateSessionRequest = function(customerIdentifier) {
  this.customerIdentifier = customerIdentifier
}

exports.MFInvoiceItem = function(name, unitPrice, quantity) {
  this.name = name
  this.unitPrice = unitPrice
  this.quantity = quantity
}

exports.MFSupplier = function(supplierCode, proposedShare, invoiceShare) {
  this.supplierCode = supplierCode
  this.proposedShare = proposedShare
  this.invoiceShare = invoiceShare
}

exports.MFRecurringModel = function(recurringType, intervalDays, iteration) {
  this.recurringType = recurringType
  this.intervalDays = intervalDays
  this.iteration = iteration
}

exports.MFInitiateSessionRequest = function (customerIdentifier) {
  this.customerIdentifier = customerIdentifier
}

exports.MFPaymentStatusRequest = function (key, keyType) {
  this.key = key
  this.keyType = keyType
}

exports.MFInvoiceItem = function (name, unitPrice, quantity) {
  this.name = name
  this.unitPrice = unitPrice
  this.quantity = quantity
}

exports.MFSupplier = function (supplierCode, proposedShare, invoiceShare) {
  this.supplierCode = supplierCode
  this.proposedShare = proposedShare
  this.invoiceShare = invoiceShare
}

exports.MFRecurringModel = function (recurringType, intervalDays, iteration) {
  this.recurringType = recurringType
  this.intervalDays = intervalDays
  this.iteration = iteration
}

exports.MFCustomerAddress = function (block, street, houseBuildingNo, address, addressInstructions) {
  this.block = block
  this.street = street
  this.houseBuildingNo = houseBuildingNo
  this.address = address
  this.addressInstructions = addressInstructions
}

exports.MFSendPaymentRequest = function (invoiceValue, notificationOption, customerName) {
  this.invoiceValue = invoiceValue
  this.customerName = customerName
  this.notificationOption = notificationOption
  this.mobileCountryIsoCode = '+965'
  this.displayCurrencyIso = 'KWD'
  this.customerCivilId = ''
  this.customerReference = ''
  this.customerEmail = ''
  this.customerMobile = ''
  this.invoiceItems = []
  this.language = 'en'
  this.expiryDate = null
  this.customerAddress = null
  this.userDefinedField = ''
  this.suppliers = null
}

exports.MFExecutePaymentRequest = function (invoiceValue, paymentMethod) {
  this.invoiceValue = invoiceValue
  this.paymentMethod = paymentMethod

  this.customerName = ''
  this.customerCivilId = ''
  this.customerReference = ''
  this.customerEmail = ''
  this.customerMobile = ''
  this.invoiceItems = []
  this.language = 'en'
  this.expiryDate = null
  this.customerAddress = null
  this.userDefinedField = ''
  this.displayCurrencyIso = ''
  this.mobileCountryCode = ''
  this.suppliers = null
  this.sessionId = ''
  this.recurringModel = null
}
});