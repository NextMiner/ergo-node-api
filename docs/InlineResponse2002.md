# ErgoNodeApi.InlineResponse2002

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**isInitialized** | **Boolean** | true if wallet is initialized, false otherwise | 
**isUnlocked** | **Boolean** | true if wallet is unlocked, false otherwise | 
**changeAddress** | **String** | address to send change to. Empty when wallet is not initialized or locked. By default change address correponds to root key address, could be set via /wallet/updateChangeAddress method. | 
**walletHeight** | **Number** | last scanned height for the wallet (and external scans) | 
**error** | **String** | last wallet error caught | 


