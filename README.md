# AIChatBots
Creating AI Chatbots with Dialogflow and IBM Watson Assistant

### Dialogflow BobBot - A simple chatbot created for booking appointments.
![Alt](https://github.com/Krishna2709/AIChatBots/blob/master/BobBot-DialogFlow/BobBotWebDemo.png)
### IBM Watson Assistant - A simple banking chatbot that provides credit card information. Deployed on IBM Cloud using Node.js.
![Alt](https://github.com/Krishna2709/AIChatBots/blob/master/BobBot-Watson/IBMWatson.png)

### Deploying the application
---
1. Install Node.js
2. Install dependencies
```
npm install
```
3. Login to the IBM Cloud with IBM Cloud CLI
```
ibmcloud login
```
4. Set the target Resource, Org and Space
```
ibmcloud target -g Resource
ibmcloud target -o Org
ibmcloud target -s Space
```
5. Target the IBM Cloud Factory
```
ibmcloud target --cf
```
6. Deploy the application
```
ibmcloud app push
```
