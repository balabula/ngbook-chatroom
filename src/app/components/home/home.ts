import {Component} from '@angular/core';
import {Auth} from '../../services/authentication';


@Component({
  selector: 'home',
  templateUrl: 'app/components/home/home.html',
  styleUrls: ['app/components/home/home.css'],
  providers: [Auth],
  directives: [],
  pipes: []
})
export class Home {


  // lock = new Auth0Lock('w8Rgh6upW39rmWFL8FrQJ1j7cM5eeCjg', 'balabala.au.auth0.com');
  constructor(private auth: Auth) {}

  ngOnInit() {

  }

  // login() {
  //   console.log("click login");
  //   console.log(this.lock);
  //   var hash = this.lock.parseHash();
  //   console.log("hash = " + hash);
  //
  //   if (hash) {
  //     if (hash.error)
  //       console.log('There was an error logging in', hash.error);
  //     else
  //       console.log("has hash");
  //       this.lock.getProfile(hash.id_token, function(err, profile) {
  //         if (err) {
  //           console.log(err);
  //           return;
  //         }
  //         localStorage.setItem('profile', JSON.stringify(profile));
  //         localStorage.setItem('id_token', hash.id_token);
  //       });
  //   }
  // }
  //
  // logout() {
  //   localStorage.removeItem('profile');
  //   localStorage.removeItem('id_token');
  // }
  //
  // loggedIn() {
  //   console.log("logged in");
  //   return tokenNotExpired();
  // }


}
