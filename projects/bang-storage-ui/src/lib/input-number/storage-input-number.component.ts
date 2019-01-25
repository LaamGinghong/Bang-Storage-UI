import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnInit,
  Output,
  Renderer2,
  ViewChild,
} from '@angular/core';
import {NzMessageService} from 'ng-zorro-antd';
import {Subject} from 'rxjs';
import {debounceTime, distinctUntilChanged} from 'rxjs/operators';

@Component({
  selector: 'storage-input-number',
  template: `
    <div #divElement>
      <input
        type="text"
        class="storage-input-number"
        [(ngModel)]="number"
        (ngModelChange)="inputChange($event)"
        [disabled]="storageDisabled"
        [placeholder]="placeholder"
        #inputNumber
      >
      <span [hidden]="!isFormatter" [innerHTML]="icon" #iconElement></span>
    </div>
  `,
  styleUrls: ['./storage-input-number.component.less'],
  preserveWhitespaces: false,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class StorageInputNumberComponent implements OnInit {
  @Input()
  set storageValue(value: number) {
    if (!isNaN(value)) {
      if (value === null || value === undefined) {
        this.number = value as any;
      } else {
        this.number = String(value);
      }
    } else {
      this.inputTypeCheck$.next(String(value));
    }
  }

  @Input()
  set storageDisabled(value: boolean) {
    this._disabled = value;
    value ? this.renderer.addClass(this.inputNumber.nativeElement, 'storage-input-number-disabled') :
      this.renderer.removeClass(this.inputNumber.nativeElement, 'storage-input-number-disabled');
  }

  get storageDisabled() {
    return this._disabled;
  }

  @Input('storageMax') max: number;
  @Input('storageMin') min: number;
  @Input('storagePrecision') precision: number;

  @Input() set storageFormatter(value: { icon: string, isBefore: boolean }) {
    if (value) {
      this.isFormatter = true;
      this.icon = value.icon;
      this.renderer.setStyle(this.inputNumber.nativeElement, value.isBefore ? 'padding-left' : 'padding-right', '20px');
      this.renderer.setStyle(this.iconElement.nativeElement, value.isBefore ? 'left' : 'right', '6px');
    }
  }

  @Input('storageWidth')
  set width(value: string | number) {
    const type = typeof value;
    this.renderer.setStyle(this.divElement.nativeElement, 'width', type === 'number' ? `${value}px` : value);
  }

  @Input('storagePlaceholder')
  set placeholder(value: string) {
    this._placeholder = value;
  }

  get placeholder(): string {
    return this._placeholder;
  }

  @Output()
  storageValueChange = new EventEmitter<number>();
  @ViewChild('inputNumber')
  inputNumber: ElementRef;
  @ViewChild('iconElement')
  iconElement: ElementRef;
  @ViewChild('divElement')
  divElement: ElementRef;
  number: string;
  isFormatter = false;
  icon: string;
  inputTypeCheck$ = new Subject<string>();
  inputRangeCheck$ = new Subject<string>();
  inputPrecisionCheck$ = new Subject<string>();
  outputValue$ = new Subject<string>();
  private _disabled: boolean;
  private _placeholder = '请输入';

  constructor(
    private message: NzMessageService,
    private renderer: Renderer2
  ) {
  }

  ngOnInit() {
    this.inputTypeCheck();
    this.inputRangeCheck();
    this.inputPrecisionCheck();
    this.outPutValue();

  }

  inputTypeCheck(): void {
    this.inputTypeCheck$.pipe(
      distinctUntilChanged(),
      debounceTime(750)
    ).subscribe((value: string) => {
      if (value) {
        if (isNaN(Number(value))) {
          this.message.error('请输入一个数字！');
          this.number = null as string;
        }
      }
    });
  }

  inputRangeCheck(): void {
    this.inputRangeCheck$.pipe(
      distinctUntilChanged(),
      debounceTime(750)
    ).subscribe((value: string) => {
      let number = Number(value);
      if (this.max !== undefined) {
        if (number > this.max) {
          this.message.error(`请输入小于${this.max}的数字`);
          number = this.max;
          this.number = String(number);
        }
      }
      if (this.min !== undefined) {
        if (number < this.min) {
          this.message.error(`请输入大于${this.min}的数字`);
          number = this.min;
          this.number = String(number);
        }
      }
    });
  }

  inputPrecisionCheck(): void {
    this.inputPrecisionCheck$.pipe(
      distinctUntilChanged(),
      debounceTime(750)
    ).subscribe((value: string) => {
      if (this.precision !== undefined) {
        const array = value.split('.');
        if (array.length === 2) {
          const precision = array[1];
          if (precision.length > this.precision) {
            this.number = Number(value).toFixed(this.precision);
          }
        }
      }
    });
  }

  outPutValue(): void {
    this.outputValue$.pipe(
      distinctUntilChanged(),
      debounceTime(750)
    ).subscribe((value: string) => {
      this.storageValueChange.emit(this.number ? Number(this.number) : null as number);
    });
  }

  inputChange(value: string): void {
    this.inputTypeCheck$.next(value);
    this.inputPrecisionCheck$.next(value);
    this.inputRangeCheck$.next(value);
    this.outputValue$.next(value);
  }

}
