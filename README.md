# pasta
Simple testing framework

## Usage
Configure Jenkins job with batch command:
npm install && webdriver-manager update && start webdriver-manager start && cd test\support\autoit\ && start AutoItDriverServer.bat && gulp run

### Gulp tags
  gulp run --tags="@all" (or @img, @invalid @pasties for separate scenarios)
  gulp run --browser=chrome
  gulp run --autoit="some ip for autoit server launch" 
