## MFP UserLogin Angular
A sample web application on Angular 6 demonstrating use of the CredentialsValidation Security Check of MobileFirst Platform Foundation.

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.0.8.

### Tutorial
https://mobilefirstplatform.ibmcloud.com/blog/2018/06/27/integrating-mobilefirst-foundation-8-in-angular-web-apps/

### Usage

1. Use either Maven, MobileFirst CLI or your IDE of choice to [build and deploy the available `ResourceAdapter` and `UserLogin` adapters](https://mobilefirstplatform.ibmcloud.com/tutorials/en/foundation/8.0/adapters/creating-adapters/).

 The UserLogin Security Check and Resource adapter can be found in https://github.com/MobileFirst-Platform-Developer-Center/SecurityCheckAdapters/tree/release80.

2. From a command-line window, navigate to the project's root folder and run the commands:
 - `mfpdev app register` - to register the application.
 -  Map the `accessRestricted` scope to the `UserLogin` security check in the MobileFirst Operations Console.
 - `ng serve --proxy-config proxy.conf.json` - to run the application.

3. Run the application in any browser. Press the **Get Balance** button and enter username and password as "vittal" to display the balance.

### Supported Levels
IBM MobileFirst Platform Foundation 8.0
