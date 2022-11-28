import { AfterContentChecked, AfterContentInit, Component, ContentChild, DoCheck, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
})
export class ChildComponent implements OnInit, DoCheck, OnChanges, OnDestroy, AfterContentInit, AfterContentChecked {

  @Input() formName: string = '';

  @ContentChild('ParentContent') ParentContent: string = 'Gaurav';

  constructor() {
    console.warn('Child Constructor Is Called !!');
  }

  ngOnInit(): void {
    console.warn('Child OnInit Is Called !!');
    console.log('OnInit => ' + this.ParentContent);
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
    console.warn('Child OnChanges Is Called !!');
    console.log('OnChanges => ' + this.ParentContent);
  }

  ngDoCheck(): void {
    console.warn("Child DoCheck Is Called !!");
    console.log('DoCheck => ' + this.ParentContent);
  }

  ngAfterContentInit(): void {
    console.warn('Child AfterContentInit Is Init !!');
    console.log('AfterContentInit => ' + this.ParentContent);
  }

  ngAfterContentChecked(): void {
    console.warn('Child AfterContentChecked Is Checked !!');
  }

  ngOnDestroy(): void {
    console.error('Child OnDestroy Is Called !!');
  }

}
