import { Component, OnInit } from '@angular/core';
import { NavService } from '@shared/service/nav.service';
import { trigger, transition, useAnimation } from '@angular/animations';
import { bounce, zoomOut, zoomIn, fadeIn, bounceIn } from 'ng-animate';
import {ActivatedRoute} from '@angular/router';
import {take, tap} from 'rxjs/operators';
import {AuthenticationService} from '../../core/services/authentication.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-content-layout',
  templateUrl: './content-layout.component.html',
  styleUrls: ['./content-layout.component.scss'],
  animations: [
    trigger('animateRoute', [transition('* => *', useAnimation(fadeIn, {
      // Set the duration to 5seconds and delay to 2 seconds
      // params: { timing: 3}
    }))])
  ]
})
export class ContentLayoutComponent implements OnInit{

  public right_side_bar: boolean;
  role$: Observable<string>;

  constructor(public navServices: NavService,
              private activatedRoute: ActivatedRoute,
              private authenticationService: AuthenticationService ) {
    this.activatedRoute.url.pipe(take(1)).subscribe( value => console.log(value));
  }

  ngOnInit(): void {
    this.role$ = this.authenticationService.getrolUser();
  }


  public getRouterOutletState(outlet) {
    return outlet.isActivated ? outlet.activatedRoute : '';
  }

  public rightSidebar($event) {
    this.right_side_bar = $event;
  }


}
