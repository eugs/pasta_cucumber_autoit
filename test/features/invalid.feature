Feature: Test site pasta.epam.com

@invalid@all
	Scenario: Test pasties page
		Given I navigate to the 'home' page
	#	When I authorize
		Then title should be 'PASTA'
		When I upload invalid file 'invalid-pic'
		Then I should see message 'File size limit is 4MB'
		When I upload invalid file 'invalid-txt'
		Then I should see message 'Size limit for text is 500kB'
