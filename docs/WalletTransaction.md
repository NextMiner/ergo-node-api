# ErgoNodeApi.WalletTransaction

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** | Base16-encoded transaction id bytes | [optional] 
**inputs** | [**[ErgoTransactionInput]**](ErgoTransactionInput.md) | Transaction inputs | 
**dataInputs** | [**[ErgoTransactionDataInput]**](ErgoTransactionDataInput.md) | Transaction data inputs | 
**outputs** | [**[ErgoTransactionOutput]**](ErgoTransactionOutput.md) | Transaction outputs | 
**inclusionHeight** | **Number** | Height of a block the transaction was included in | 
**numConfirmations** | **Number** | Number of transaction confirmations | 
**scans** | **[Number]** | Scan identifiers the transaction relates to | 
**size** | **Number** | Size in bytes | [optional] 


