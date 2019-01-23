import { Component, OnInit } from "@angular/core";
import { HostListener, Inject } from "@angular/core";
import { DOCUMENT } from "@angular/platform-browser";

declare const window: any;

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.css"]
})
export class HeaderComponent implements OnInit {
  background: boolean = false;

  constructor() {}

  ngOnInit() {}

  @HostListener("window:scroll", [])
  onWindowScroll() {
    const number =
      window.pageYOffset ||
      document.documentElement.scrollTop ||
      document.body.scrollTop ||
      0;
    if (
      (number >= 0.5 * window.innerHeight && number < 1.5 * window.innerHeight) ||
      number >= 2.5 * window.innerHeight
    ) {
      this.background = true;
    } else {
      this.background = false;
    }
  }
}
