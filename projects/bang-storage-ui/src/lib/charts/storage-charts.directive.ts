import {Directive, ElementRef, Input, OnChanges, Renderer2, SimpleChanges} from '@angular/core';
import echarts from 'echarts';
import {StorageChartsOption} from './storage-charts.option';

@Directive({
  selector: '[storage-charts]'
})

export class StorageChartsDirective implements OnChanges {
  @Input('storageOption')
  private option: StorageChartsOption;

  @Input('storageMerge')
  private merge: StorageChartsOption;

  @Input('storageLoading')
  set loading(value: boolean) {
    value ? this.chart.showLoading() : this.chart.hideLoading();
  }

  private readonly el: HTMLElement = this.elementRef.nativeElement;
  private chart: echarts;

  constructor(
    private renderer: Renderer2,
    private elementRef: ElementRef
  ) {
    this.chart = echarts.init(this.el);
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.option && changes.option.firstChange) {
      this.setOption(changes.option.currentValue);
    }
    if (changes.merge && !changes.merge.firstChange) {
      const merge = changes.merge.currentValue as StorageChartsOption;
      for (const i in merge) {
        if (merge.hasOwnProperty(i)) {
          this.option[i] = merge[i];
        }
      }
      this.setOption(this.option);
    }
  }

  private setOption(value: StorageChartsOption): void {
    this.chart.setOption(value);
  }
}
