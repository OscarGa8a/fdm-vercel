import { Component, OnInit, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { COLLECTIONS } from 'src/app/const';
import { Router } from '@angular/router';
declare var $: any;

@Component({
  selector: 'app-masonary-three-grid',
  templateUrl: './masonary-three-grid.component.html',
  styleUrls: ['./masonary-three-grid.component.scss']
})
export class MasonaryThreeGridComponent implements OnInit, AfterViewInit {
/*   public option;

  @ViewChild('gallery') galleryElement: ElementRef;
 */
    collections = COLLECTIONS;
  constructor(private router: Router) { }

  ngOnInit() {
   /*    $.getScript('assets/js/masonary.js'); */
  }

  ngAfterViewInit() {
      /* $(this.galleryElement.nativeElement).magnificPopup({
        delegate: 'a',
        type: 'image',
        closeOnContentClick: false,
        closeBtnInside: false,
        mainClass: 'mfp-with-zoom mfp-img-mobile',
        image: {
            verticalFit: true,
            titleSrc: function(item) {
                return item.el.attr('title') + ' &middot;';
            }
        },
        gallery: {
            enabled: true
        },
        zoom: {
            enabled: true,
            duration: 300, // don't foget to change the duration also in CSS
            opener: function(element) {
                return element.find('img');
            }
        }
    }); */
  }

  redirectShop
  (slug: string) {
    this.router.navigate(['home/shop/all'], { queryParams: { collection: slug } });
  }

}
