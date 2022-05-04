import { Component, OnDestroy, OnInit, Output } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthorService } from './../author/author.service';
import { ProductService } from './../product.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnDestroy {
  isAuthenticated = false;
 private userSub: Subscription;


  constructor(private authService: AuthorService, private productSer: ProductService) { }
  ngOnInit(){
   this.userSub = this.authService.user.subscribe(user=>{
     this.isAuthenticated = !!user;
      this.productSer.authentic.next(this.isAuthenticated);
   })
  }

  onScroll(id: string) {
    document.getElementById(id).scrollIntoView({behavior: 'smooth'})
  }
  onLogout(){
    this.authService.logout()
  }

  ngOnDestroy(): void {
    this.userSub.unsubscribe();
  }

}
