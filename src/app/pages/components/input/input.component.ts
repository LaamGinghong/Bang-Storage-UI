import {Component, ElementRef, OnInit, ViewChild, ViewContainerRef} from '@angular/core';
import {ComponentPortal} from '@angular/cdk/portal';
import {Overlay, OverlayConfig, OverlayRef} from '@angular/cdk/overlay';
import {StorageInputTitleComponent} from '../../../../../projects/bang-storage-ui/src/lib/input/storage-input-title.component';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.less']
})
export class InputComponent implements OnInit {
  value: string;
  value1: string;

  @ViewChild('element', {read: ViewContainerRef}) elementRef: ViewContainerRef;

  ngOnInit(): void {
  }

}
