import {
  AfterContentChecked, AfterContentInit, AfterViewChecked,
  AfterViewInit, Component, ContentChild, DoCheck, Input, OnChanges,
  OnDestroy, OnInit, SimpleChanges, ViewChild
} from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
})
export class ChildComponent implements OnInit, DoCheck, OnChanges, OnDestroy,
  AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked {

  @Input() formName: string = '';

  @ContentChild('ParentContent', { static: false }) ParentContent: any;
  @ViewChild('ChildContent', { static: false }) ChildContent: any;

  constructor() {
    console.warn('Child Constructor Is Called !!');
  }

  ngOnInit(): void {
    console.warn('Child OnInit Is Called !!');
    console.log('OnInit => ' + this.ParentContent);
    console.log('OnInit => ' + this.ChildContent);
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
    console.warn('Child OnChanges Is Called !!');
    console.log('OnChanges => ' + this.ParentContent);
    console.log('OnChanges => ' + this.ChildContent);
  }

  ngDoCheck(): void {
    console.warn("Child DoCheck Is Called !!");
    console.log('DoCheck => ' + this.ParentContent);
    console.log('DoCheck => ' + this.ChildContent);
  }

  ngAfterContentInit(): void {
    console.warn('In AfterContentInit Is Init !!');
    console.log('AfterContentInit => ' + this.ParentContent);
    console.log('AfterContentInit => ' + this.ChildContent);
  }

  ngAfterContentChecked(): void {
    console.warn('In AfterContentChecked Is Checked !!');
    console.log('AfterContentChecked => ' + this.ChildContent);
  }

  ngAfterViewInit(): void {
    console.warn('In AfterViewInit Is Init !!');
    console.log('AfterViewInit => ' + this.ParentContent);
    console.log('AfterViewInit => ' + this.ChildContent);
  }

  ngAfterViewChecked(): void {
    console.warn('In AfterViewChecked Is Checked !!');
    console.log('AfterViewChecked => ' + this.ChildContent);
  }

  ngOnDestroy(): void {
    console.error('Child OnDestroy Is Called !!');
  }

}
