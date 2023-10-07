import { Component, HostBinding, ElementRef, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Portfolio';
  @HostBinding('class.pc') pcMode = false;

  constructor(private element: ElementRef, private breakpointObserver: BreakpointObserver) {
    this.breakpointObserver
      .observe([Breakpoints.HandsetPortrait, Breakpoints.WebLandscape])
      .subscribe({
        next: (result: any) => {

          this.pcMode = !result.matches;

          
          for (let breakpoint of Object.keys(result.breakpoints))
            if (result.breakpoints[breakpoint]) {
              if (breakpoint === Breakpoints.HandsetPortrait)
                this.element.nativeElement.classList.remove('pc');

              if (breakpoint === Breakpoints.WebLandscape)
                this.element.nativeElement.classList.add('pc');
            }
        },
      });
  }

  ngOnInit() {
    // Initial check for screen size
    this.checkScreenSize();
  }

  checkScreenSize() {
    this.pcMode = this.breakpointObserver.isMatched(Breakpoints.WebLandscape);
  }
}
