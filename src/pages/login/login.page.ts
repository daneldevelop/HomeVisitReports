import { LoginService } from './../../shared/login.service';
import { Component } from '@angular/core';
import { LoadingController, NavController, NavParams } from 'ionic-angular';
import { ActionChoosePage } from '../pages';


@Component({
  selector: 'page-login',
  templateUrl: 'login.page.html',
})
export class LoginPage {
  userName: any;
  pwd: any = "";
  savePwd= "";
  respon :any;
  isValid :any;
  eyeToggle = false;
  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    private loadingController: LoadingController,
    private loginService: LoginService) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Login');
    this.checkCookie();
  }

  connect() {
    if (this.userName == "1" && this.savePwd == "1") {
      let loader = this.loadingController.create({
        content: '...מתחבר',
        dismissOnPageChange: true
      });
      loader.present();
      let data = { choosingScreen: "tasks" };
      this.navCtrl.push(ActionChoosePage, data);
    }
    else {
      // console.log("Incorrect Login");
          let loader = this.loadingController.create({
             content: '...מתחבר'
          });

              loader.present();
              this.loginService.getUserData(this.userName,this.savePwd).then(data => {
                this.respon = data;
                this.checkIfvalid();
                loader.dismiss();
              }) 
    }
  }
 
   checkCookie() {
    var user = this.getCookie("username");
    if (user !== "") {
      this.userName = user;
    }
}

 getCookie(cname) {
  var name = cname + "=";
  var decodedCookie = decodeURIComponent(document.cookie);
  var ca = decodedCookie.split(';');
  for (var i = 0; i < ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0) == ' ') {
          c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
          return c.substring(name.length, c.length);
      }
  }
  return "";
}

  changeInputDelay(input: any,timeInterval){
    setTimeout(this.changeInput(input), timeInterval);
    
  }
 
   ShowHidePwd(){
    this.eyeToggle = !this.eyeToggle;
   }

  changeInput(input){
    let textToInsert = "";
    if(input || input===""){
      this.savepPassInput(input);
      for (var i = 0; i < this.savePwd.length; i++) {
        textToInsert = textToInsert + "*";
     }
     this.pwd = textToInsert;
    }
  }

  savepPassInput(input){
    if(this.savePwd.length > input.length){
      let charsToRemove = this.savePwd.length - input.length;
      let end = this.savePwd.length - charsToRemove;
      this.savePwd = this.savePwd.substring(0, end);
    }else{
      let  onlyNumbers= input.replace(/\*/gi, "");
      this.savePwd = this.savePwd + onlyNumbers;
    }
  }

  checkIfvalid(){
     this.isValid = this.respon.SuccessStatus;
       if(this.isValid === 0){
               let data = { Token:this.respon.Result.Token,
                            UserName: this.respon.Result.UserName,
                            BranchAddress: this.respon.Result.UserName,
                            choosingScreen: "tasks"
                          };
                this.setCookie("username", this.userName, 365) ;
                this.navCtrl.push(ActionChoosePage, data);
       }else{
         console.log("Incorrect Login");
       }
     }

     setCookie(cname, cvalue, exdays){
      var d = new Date();
      d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
      var expires = "expires=" + d.toUTCString();
      document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
     }    
  };

