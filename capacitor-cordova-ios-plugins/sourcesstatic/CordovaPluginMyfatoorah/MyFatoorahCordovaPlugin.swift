import Cordova
//
//  MyFatoorahCordovaPlugin.swift
//  HelloCordova
//
//  Created by Elsayed Hussein on 21/06/2022.
//

import Foundation
import MFSDK
import UIKit

@objc(MyFatoorahCordovaPlugin) class MyFatoorahCordovaPlugin : CDVPlugin {
    var command: CDVInvokedUrlCommand!
    
    @objc(initiate:) func initiate(_ command: CDVInvokedUrlCommand) {
        self.command = command
        let token = command.arguments.first as? String ?? ""
        let country = command.arguments[1] as? String ?? ""
        let environment = command.arguments[2] as? String ?? ""
        MFSettings.shared.configure(token: token, country: toMFCountry(code: country), environment: MFEnvironment(rawValue: environment.lowercased()) ?? .test)
    }
    @objc(initiatePayment:) func initiatePayment(_ command: CDVInvokedUrlCommand) {
        self.command = command
        guard let paymentDetails = command.arguments.first as? [String: Any] else { return }
        
        let language = command.arguments[1] as? String ?? ""
        
        let request = generateInitiatePaymentModel(paymentDetails)
        
        MFPaymentRequest.shared.initiatePayment(request: request, apiLanguage: getAPILanguage(language), completion: { [weak self] (result) in
            switch result {
            case .success(let initiatePaymentResponse):
                do {
                    let encoder = JSONEncoder()
                    let data = try encoder.encode(initiatePaymentResponse)
                    let dictionary = try JSONSerialization.jsonObject(with: data, options: .allowFragments) as? [String: Any]
                    self?.sendPluginResult(code: "200",
                                           message: "",
                                           status: "success",
                                           dataDictionary: dictionary)
                } catch  {
                    self?.sendPluginResult(code: "\((error as NSError).code)",
                                           message: error.localizedDescription,
                                           status: "error")
                }
            case .failure(let failError):
                self?.sendPluginResult(code: failError.statusCode,
                                       message: failError.errorDescription,
                                       status: "error")
            }
        })
    }
    @objc(executePayment:) func executePayment(_ command: CDVInvokedUrlCommand) {
        self.command = command
        guard let paymentDetails = command.arguments.first as? [String: Any] else { return }
        let language = command.arguments[1] as? String ?? ""
        
        let request = generateExecutePaymenttModel(paymentDetails)
        
        MFPaymentRequest.shared.executePayment(request: request, apiLanguage: getAPILanguage(language), completion: { [weak self] (result, invoiceId) in
            switch result {
            case .success(let executePaymentResponse):
                do {
                    let encoder = JSONEncoder()
                    let data = try encoder.encode(executePaymentResponse)
                    let dictionary = try JSONSerialization.jsonObject(with: data, options: .allowFragments) as? [String: Any]
                    self?.sendPluginResult(code: "200",
                                           message: "",
                                           status: "success",
                                           dataDictionary: dictionary)
                } catch  {
                    self?.sendPluginResult(code: "\((error as NSError).code)",
                                           message: error.localizedDescription,
                                           status: "error")
                }
            case .failure(let failError):
                self?.sendPluginResult(code: failError.statusCode,
                                       message: failError.errorDescription,
                                       status: "error")
            }
        })
    }
    @objc(sendPayment:) func sendPayment(_ command: CDVInvokedUrlCommand) {
        self.command = command
        guard let sendPayment = command.arguments.first as? [String: Any] else { return }
        let language = command.arguments[1] as? String ?? ""
        
        let request = generateSendPaymentModel(sendPayment)
        
        MFPaymentRequest.shared.sendPayment(request: request, apiLanguage: getAPILanguage(language)) { [weak self] (result) in
            switch result {
            case .success(let sendPaymentResponse):
                do {
                    let encoder = JSONEncoder()
                    let data = try encoder.encode(sendPaymentResponse)
                    let dictionary = try JSONSerialization.jsonObject(with: data, options: .allowFragments) as? [String: Any]
                    self?.sendPluginResult(code: "200",
                                           message: "",
                                           status: "success",
                                           dataDictionary: dictionary)
                } catch  {
                    self?.sendPluginResult(code: "\((error as NSError).code)",
                                           message: error.localizedDescription,
                                           status: "error")
                }
            case .failure(let failError):
                self?.sendPluginResult(code: failError.statusCode,
                                       message: failError.errorDescription,
                                       status: "error")
            }
        }
    }
    @objc(getPaymentStatus:) func getPaymentStatus(_ command: CDVInvokedUrlCommand) {
        self.command = command
        guard let paymentStatus = command.arguments.first as? [String: Any] else { return }
        let language = command.arguments[1] as? String ?? ""
        
        let request = generateGetPaymentStatusModel(paymentStatus)
        MFPaymentRequest.shared.getPaymentStatus(paymentStatus: request, apiLanguage: getAPILanguage(language), completion: { [weak self] result in
            switch result {
            case .success(let getPaymentStatusResponse):
                do {
                    let encoder = JSONEncoder()
                    let data = try encoder.encode(getPaymentStatusResponse)
                    let dictionary = try JSONSerialization.jsonObject(with: data, options: .allowFragments) as? [String: Any]
                    self?.sendPluginResult(code: "200",
                                           message: "",
                                           status: "success",
                                           dataDictionary: dictionary)
                } catch  {
                    self?.sendPluginResult(code: "\((error as NSError).code)",
                                           message: error.localizedDescription,
                                           status: "error")
                }
            case .failure(let failError):
                self?.sendPluginResult(code: failError.statusCode,
                                       message: failError.errorDescription,
                                       status: "error")
            }
        })
        
    }
    private func sendPluginResult(code: String, message: String, status: String, dataDictionary: [String: Any]? = nil) {
        var response = [String: Any]()
        response["code"] = code
        response["message"] = message
        response["status"] = status
        if let dataDictionary = dataDictionary {
            response["data"] = dataDictionary
        }
        
        let result = CDVPluginResult(status: CDVCommandStatus.ok , messageAs: response)
        commandDelegate.send(result, callbackId: self.command.callbackId)
    }
    private func getAPILanguage(_ language: String) -> MFAPILanguage {
        var apiLanguage = MFAPILanguage.english
        switch language {
        case "en":
            apiLanguage = .english
        case "ar":
            apiLanguage = .arabic
        default:
            break
        }
        return apiLanguage
    }
    private func  generateExecutePaymenttModel(_ dictionary: [String: Any]) -> MFExecutePaymentRequest {
        let customerAddressDic = dictionary["customerAddress"] as? [String: Any] ?? [:]
        let block = customerAddressDic["block"] as? String ?? ""
        let street = customerAddressDic["street"] as? String ?? ""
        let houseBuildingNo = customerAddressDic["houseBuildingNo"] as? String ?? ""
        let address = customerAddressDic["address"] as? String ?? ""
        let addressInstructions = customerAddressDic["addressInstructions"] as? String ?? ""
        let customerAddress = MFCustomerAddress(block: block, street: street, houseBuildingNo: houseBuildingNo, address: address, addressInstructions: addressInstructions)
        
        let productsDic = dictionary["invoiceItems"] as? [[String: Any]] ?? []
        var products = [MFProduct]()
        for productDic in productsDic {
            let name = productDic["name"] as? String ?? ""
            let unitPrice = productDic["unitPrice"] as? Double ?? 0
            let quantity = productDic["quantity"] as? Int ?? 0
            products.append(MFProduct(name: name, unitPrice: unitPrice, quantity: quantity))
        }
        let suppliersDic = dictionary["suppliers"] as? [[String: Any]] ?? []
        var suppliers = [MFSupplier]()
        for supplierDic in suppliersDic {
            let supplierCode = supplierDic["supplierCode"] as? Int ?? 0
            let proposedShare = Decimal(string: dictionary["proposedShare"] as? String ?? "0") ?? 0
            let invoiceShare = Decimal(string: dictionary["invoiceShare"] as? String ?? "0") ?? 0
            suppliers.append(MFSupplier(supplierCode: supplierCode, proposedShare: proposedShare, invoiceShare: invoiceShare))
        }
        
        var recurringModel: MFRecurringModel?
        
        if let recurringModelDic = dictionary["recurringModel"] as? [String: Any] {
            let recurringTypeString = recurringModelDic["recurringType"] as? String ?? ""
            let intervalDays = recurringModelDic["intervalDays"] as? Int ?? 0
            let iteration = recurringModelDic["iteration"] as? Int ?? 0
            var recurringType = MFRecurringType.daily
            switch recurringTypeString {
            case "Weekly":
                recurringType = .weekly
            case "Monthly":
                recurringType = .monthly
            case "Custom":
                recurringType = MFRecurringType.custom(intervalDays: intervalDays)
            default:
                break
            }
            recurringModel = MFRecurringModel(recurringType: recurringType, iteration: iteration)
        }
        let invoiceValue = Decimal(string: dictionary["invoiceValue"] as? String ?? "0") ?? 0
        let paymentMethod = dictionary["paymentMethod"] as? Int ?? 0
        let customerName = dictionary["customerName"] as? String ?? ""
        let customerCivilId = dictionary["customerCivilId"] as? String ?? ""
        let customerReference = dictionary["customerReference"] as? String ?? ""
        let customerEmail = dictionary["customerEmail"] as? String ?? ""
        let customerMobile = dictionary["customerMobile"] as? String ?? ""
        let language = dictionary["language"] as? String ?? ""
        let expiryDate = dictionary["expiryDate"] as? Date ?? Date().addingTimeInterval(1000)
        let userDefinedField = dictionary["userDefinedField"] as? String ?? ""
        let displayCurrencyIso = dictionary["displayCurrencyIso"] as? String ?? ""
        let mobileCountryCode = dictionary["mobileCountryCode"] as? String ?? ""
        let supplierCode = dictionary["supplierCode"] as? Int ?? 0
        let supplierValue = Decimal(string: dictionary["supplierValue"] as? String ?? "0") ?? 0
        let sessionId = dictionary["sessionId"] as? String ?? ""
        
        let request = MFExecutePaymentRequest(invoiceValue: invoiceValue, paymentMethod: paymentMethod)
        request.customerName = customerName
        request.customerCivilId = customerCivilId
        request.customerReference = customerReference
        request.customerEmail = customerEmail
        request.customerMobile = customerMobile
        request.invoiceItems = products
        request.language = MFLanguage(rawValue: language) ?? .english
        request.expiryDate = expiryDate
        request.customerAddress = customerAddress
        request.userDefinedField = userDefinedField
        request.displayCurrencyIso = MFCurrencyISO(rawValue: displayCurrencyIso) ?? .kuwait_KWD
        request.mobileCountryCode = mobileCountryCode
        request.supplierCode = supplierCode
        request.supplierValue = supplierValue
        request.suppliers = suppliers
        request.sessionId = sessionId
        request.recurringModel = recurringModel
        
        return request
    }
    private func  generateInitiatePaymentModel(_ dictionary: [String: Any]) -> MFInitiatePaymentRequest {
        let invoiceValue = Decimal(string: dictionary["invoiceAmount"] as? String ?? "0") ?? 0
        let request = MFInitiatePaymentRequest(invoiceAmount: invoiceValue, currencyIso: MFCurrencyISO(rawValue: dictionary["currencyIso"] as? String ?? "") ?? .kuwait_KWD)
        return request
    }
    private func  generateSendPaymentModel(_ dictionary: [String: Any]) -> MFSendPaymentRequest {
        let invoiceValue = Decimal(string: dictionary["invoiceValue"] as? String ?? "") ?? 0
        let customerName = dictionary["customerName"] as? String ?? ""
        let notificationOption = dictionary["notificationOption"] as? String ?? ""
        let mobileCountryIsoCode = dictionary["mobileCountryIsoCode"] as? String ?? ""
        let displayCurrencyIso = dictionary["displayCurrencyIso"] as? String ?? ""
        let customerCivilId = dictionary["customerCivilId"] as? String ?? ""
        let customerReference = dictionary["customerReference"] as? String ?? ""
        let customerEmail = dictionary["customerEmail"] as? String ?? ""
        let customerMobile = dictionary["customerMobile"] as? String ?? ""
        let language = dictionary["language"] as? String ?? ""
        let expiryDate = dictionary["expiryDate"] as? Date ?? Date().addingTimeInterval(1000)
        let userDefinedField = dictionary["userDefinedField"] as? String ?? ""
        let supplierCode = dictionary["supplierCode"] as? Int ?? 0
        let supplierValue = dictionary["supplierValue"] as? Decimal ?? 0
        
        let customerAddressDic = dictionary["customerAddress"] as? [String: Any] ?? [:]
        let block = customerAddressDic["block"] as? String ?? ""
        let street = customerAddressDic["street"] as? String ?? ""
        let houseBuildingNo = customerAddressDic["houseBuildingNo"] as? String ?? ""
        let address = customerAddressDic["address"] as? String ?? ""
        let addressInstructions = customerAddressDic["addressInstructions"] as? String ?? ""
        let customerAddress = MFCustomerAddress(block: block, street: street, houseBuildingNo: houseBuildingNo, address: address, addressInstructions: addressInstructions)
        
        let productsDic = dictionary["invoiceItems"] as? [[String: Any]] ?? []
        var products = [MFProduct]()
        for productDic in productsDic {
            let name = productDic["name"] as? String ?? ""
            let unitPrice = productDic["unitPrice"] as? Double ?? 0
            let quantity = productDic["quantity"] as? Int ?? 0
            products.append(MFProduct(name: name, unitPrice: unitPrice, quantity: quantity))
        }
        
        var option = MFNotificationOption.link
        switch notificationOption {
        case "all":
            option = .all
        case "eml":
            option = .email
        case "sms":
            option = .sms
        case "lnk":
            option = .link
        default:
            break
        }
        let request = MFSendPaymentRequest(invoiceValue: invoiceValue, notificationOption: option, customerName: customerName)
        
        request.customerMobile = customerMobile
        request.customerEmail = customerEmail
        request.userDefinedField = userDefinedField
        request.customerCivilId = customerCivilId
        request.mobileCountryIsoCode = MFMobileCountryCodeISO.kuwait.rawValue
        request.customerReference = customerReference
        request.language = MFLanguage(rawValue: language) ?? .english
        request.customerAddress = customerAddress
        request.displayCurrencyIso = MFCurrencyISO(rawValue: displayCurrencyIso) ?? .kuwait_KWD
        request.mobileCountryIsoCode = mobileCountryIsoCode
        request.invoiceItems = products
        request.expiryDate = expiryDate
        request.supplierCode = supplierCode
        request.supplierValue = supplierValue
        
        return request
    }
    private func  generateGetPaymentStatusModel(_ dictionary: [String: Any]) -> MFPaymentStatusRequest {
        let key = dictionary["key"] as? String ?? ""
        let keyTypeValue = dictionary["keyType"] as? String ?? ""
        
        var request = MFPaymentStatusRequest(invoiceID: key)
        
        switch keyTypeValue {
        case "InvoiceId":
            request = MFPaymentStatusRequest(invoiceID: key)
        case "PaymentId":
            request = MFPaymentStatusRequest(paymentId: key)
        default:
            break
        }
        
        return request
    }
    
    func showMessage(_ message: String) {
        if let controller = getRootController() {
            let alertController = UIAlertController(title: "Bebo", message: message, preferredStyle: .alert)
            alertController.addAction(UIAlertAction(title: "Ok", style: .default))
            controller.present(alertController, animated: true, completion: nil)
        }
    }
    func getRootController() -> UIViewController? {
        let keyWindow = UIApplication.shared.windows.first(where: { $0.isKeyWindow }) ?? UIApplication.shared.windows.first
        let topController = keyWindow?.rootViewController
        return topController
    }
    
    private func toMFCountry(code: String?) -> MFCountry {
        switch code {
        case "KWT":
            return .kuwait
        case "SAU":
            return .saudiArabia
        case "BHR":
            return .bahrain
        case "ARE":
            return .unitedArabEmirates
        case "QAT":
            return .qatar
        case "OMN":
            return .oman
        case "JOD":
            return .jordan
        case "EGY":
            return .egypt
        default:
            return .kuwait
        }
    }
}
