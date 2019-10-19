import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../services/authentication.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.styl']
})
export class HeaderComponent implements OnInit {

  constructor(private authenticationService: AuthenticationService) { }

  ngOnInit() { }

  isLoggedIn(){
    const currentUser = this.authenticationService.currentUserValue;
    if (currentUser) {
      return true;
    }else{
      return false;
    }
  }

  logout(){
    this.authenticationService.logout();
  }

}
