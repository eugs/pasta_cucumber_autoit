Feature: Test site pasta.epam.com


	@pasties@all
	Scenario: Test pasties page
		Given I navigate to the 'home' page
		When I authorize
		Then title should be 'PASTA'
		When I click on button pasties
		Then I should see a collection of pasties
		When I choose ID of pastie
		Then page with particular pastie should be displayed
