import { Component } from '@angular/core';
import './app.component.css';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  balance: string;
  message: string;

  UserLoginChallengeHandler: WL.Client.SecurityCheckChallengeHandler;
  title = 'MobileFirst UserLogin';
  constructor() {
    WL.Client.init({mfpContextRoot:"/mfp",applicationId:"com.mfp.userlogin"});
    this.MFPInitComplete();
   
  }

  getBalance() {
  var resourceRequest = new WL.ResourceRequest("/adapters/ResourceAdapter/balance",WL.ResourceRequest.GET);
  resourceRequest.send().then(
     (response) => {
      console.log('-->  getBalance(): Success ', response);
      this.balance = 'Your Balance is : ' + response.responseText;
     }, (error) => {
      console.log('-->  getBalance():  ERROR ', error.responseText);
      this.balance = error.responseText;
     }
   )
  }

   // MFP Init complete function
   MFPInitComplete() {
    console.log('--> MFPInitComplete function called');
    this.registerChallengeHandler();  // register a ChallengeHandler callback for UserLogin security check
  }

  registerChallengeHandler() {
    this.UserLoginChallengeHandler = WL.Client.createSecurityCheckChallengeHandler("UserLogin");
    this.UserLoginChallengeHandler.handleChallenge = ((challenge: any) => {
      console.log('--> UserLoginChallengeHandler.handleChallenge called');
      this.displayLoginChallenge(challenge);
    });
  }

  displayLoginChallenge(response) {
    if (response.errorMsg) {
    this.message = response.errorMsg + ' <br> Remaining attempts: ' + response.remainingAttempts;
      console.log('--> displayLoginChallenge ERROR: ' + this.message);
    }
     // set modal open
     var modal = document.querySelector('#loginModal');
     modal.classList.add('open');
     // set overlay
     var overlay = document.querySelector('.overlay');
     overlay.classList.add('show');
  }

  submitChallenge(userId: String, pass: String) {
    var modal = document.querySelector('#loginModal');
    modal.classList.remove("open");
    var overlay = document.querySelector('.overlay');
    overlay.classList.remove('show');
    this.UserLoginChallengeHandler.submitChallengeAnswer({
      username: userId,
      password: pass
    });
  }

}
