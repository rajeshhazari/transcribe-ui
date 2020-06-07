import { Component, OnInit, OnChanges, ElementRef, Renderer, SimpleChanges } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientJsonpModule } from '@angular/common/http';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { Router,RouterEvent,RouterState } from '@angular/router/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnChanges{
  title = 'c3transcribe-ui';
  loading: boolean;
  constructor(private el: ElementRef, private renderer: Renderer) {

  }
  ngOnChanges(changes: SimpleChanges): void {
    //throw new Error("Method not implemented.");
    if(changes.value){
      console.log("changes.value"+ changes);
    }
  }
  ngOnInit(): void {
    this.loading = false;
  }


  onMenuClick() {
    //this.el.nativeElement.querySelector('.navbar-ex1-collapse')  get the DOM
    //this.renderer.setElementClass('DOM-Element', 'css-class-you-want-to-add', false) if 3rd value is true
    //it will add the css class. 'in' class is responsible for showing the menu.
    this.renderer.setElementClass(this.el.nativeElement.querySelector('.navbar-ex1-collapse'), 'in', false);
    this.loading = true;
}
}