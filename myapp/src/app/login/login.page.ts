import { Component, OnInit } from '@angular/core';
import { LoadingController, NavController} from '@ionic/angular';
import { NgForm } from '@angular/forms';



@Component({
  
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  
  
})
export class LoginPage implements OnInit {
  
  user=
  {
    usuario:"juan",
    password:"1803182"
  }
 
  constructor(public loadingCtrl:LoadingController, public navCtrl: NavController) { }

  ngOnInit() {

  }
  async login(forma: NgForm){

    {
      if (forma.valid) {
        const loading = await this.loadingCtrl.create({
          message: 'Validando...',
          spinner: 'bubbles'
        });
        loading.present();
        this.loadingCtrl.dismiss();
        if(forma.value.email === this.user.usuario && forma.value.password === this.user.password)
        {
          console.log("************Bienvenido************ ");
          this.navCtrl.navigateForward('home/tabs/tab1')
        }
        else
        {
          console.log("Usuario o contraseña incorrecto");
        }
        this.user.usuario = forma.value.email;
        this.user.password = forma.value.clave;

       }
     }
   }
  }
