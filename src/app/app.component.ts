import { Component, OnInit, VERSION } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import DottedMap from 'dotted-map';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  worldMap;
  constructor(private sanitizer: DomSanitizer) {}

  ngOnInit(): void {
    this.createMap();
  }

  createMap() {
    const map = new DottedMap({ height: 100, grid: 'diagonal' });
    const svgMap = map.getSVG({
      radius: 0.2,
      color: '#1FBC62',
      shape: 'circle',
      backgroundColor: '#F6FCF9'
    });
    this.worldMap = this.sanitizer.bypassSecurityTrustHtml(svgMap);
  }
}