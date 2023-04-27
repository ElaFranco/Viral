import { AfterViewInit, ElementRef,  AfterContentInit, Component, OnInit, ViewChild, HostListener } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit, AfterViewInit{

  @ViewChild('stickyMenu') menuElement: ElementRef | undefined;

  elementPosition: any;
  sticky = false;

  constructor() { }

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  ngAfterViewInit(): void {
    this.elementPosition = this.menuElement!.nativeElement.offsetTop;
  }

  @HostListener('window:scroll', ['$event'])
  handleScroll(){
    const windowScroll = window.pageYOffset;
    if (windowScroll > this.elementPosition){
      this.sticky = true;
    } else {
      this.sticky = false;
    }
  }


}
