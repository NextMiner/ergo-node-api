# ErgoNodeApi.WalletBox

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**box** | [**ErgoTransactionOutput**](ErgoTransactionOutput.md) |  | 
**confirmationsNum** | **Number** | Number of confirmations, if the box is included into the blockchain | 
**address** | **String** | Encoded Ergo Address | 
**creationTransaction** | **String** | Base16-encoded 32 byte modifier id | 
**spendingTransaction** | **String** | Base16-encoded 32 byte modifier id | 
**spendingHeight** | **Number** | The height the box was spent at | 
**inclusionHeight** | **Number** | The height the transaction containing the box was included in a block at | 
**onchain** | **Boolean** | A flag signalling whether the box is created on main chain | 
**spent** | **Boolean** | A flag signalling whether the box was spent | 
**creationOutIndex** | **Number** | An index of a box in the creating transaction | 
**scans** | **[Number]** | Scan identifiers the box relates to | 


