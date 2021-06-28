import requests
import json

data = {
      "accountname" : "some4",
     "telephone1" : "036339060",
     "idnumber" : "1234",
     "billingcity" : "tlv"
}

url = 'https://api.powerlink.co.il/api/record/account'
token_id = '51d889d9-7e7f-4529-8d53-5157865a887a'
headers = {'Content-type': 'application/json', 'tokenId': token_id}
response = requests.post(url, data=str(data), headers=headers)
# print(json.loads(response.content)['data']['Record']) 
print(json.loads(response.content)) 


# {'telephone1': '036339060', 'createdby': '4d3fdb7e-f9cf-4d66-999c-f5c984bfcfbd', 'revenue': None, 'accountnumber': '1005', 'statecode': 1, 'accounttypecode': None, 'billingcountry': None, 'modifiedon': '2021-06-21T18:45:54', 'isvalidforemailcode': 1, 'ownerid': '4d3fdb7e-f9cf-4d66-999c-f5c984bfcfbd', 'primarycontactid': None, 'modifiedby': '4d3fdb7e-f9cf-4d66-999c-f5c984bfcfbd', 'numberofemployees': None, 'accountid': 'd13aee24-3bfb-4f04-93b6-14a4b806cc2a', 'fax1': None, 'emailaddress1': None, 'emailaddress3': None, 'accountdebt': None, 'categorycode': None, 'industrycode': None, 'telephone3': None, 'idnumber': '1234', 'telephone2': None, 'nextactiondate': None, 'nextactivitydate': None, 'accountratingcode': None, 'parentaccountid': None, 'birthdaydate': None, 'duplicaterecordcode': 0, 'campaignid': None, 'accountname': 'some', 'billingcity': 'tlv', 'lostreason': 0, 'firstname': None, 'lastconversation': None, 'shippingmethodcode': None, 'birthdayday': None, 'websiteurl': None, 'secondcategorycode': None, 'originatingleadcode': None, 'billingstate': None, 'paymenttermscode': None, 'description': None, 'actionstatuscode': 0, 'createdon': '2021-06-21T18:45:54', 'lastname': None, 'businesstypecode': None, 'birthdaymonth': None, 'billingzipcode': None, 'systemfield10': None, 'needs': None, 'billingstreet': None, 'emailaddress2': None, 'lastactiondate': None, 'accountageindays': 0, 'statuscode': 6, 'createdbyname': 'Yonatan Orozko', 'ownername': 'Yonatan Orozko', 'primarycontactname': None, 'modifiedbyname': 'Yonatan Orozko', 'parentaccountname': None, 'campaignname': None, 'lastconversationname': None}
