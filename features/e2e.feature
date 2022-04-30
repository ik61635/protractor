Feature: To test email functionality for gmail

@CucumberScenario
Scenario: email functionality for gmail
Given I have logged into gmail account
When I compose new email
When I have provided email address subject body and attachment
When I have labeled email as social
When I have send a email
When I have click on social label
Then Verify the subject mail body email address and attachment