export interface StorageChartsOption {
  title?: {
    text?: string,
    show?: boolean,
    link?: string,
    target?: 'self' | 'blank',
    textStyle?: StyleOption,
    subText?: string,
    sublink?: string,
    subTarget?: 'self' | 'blank',
    subtextStyle?: StyleOption,
    padding?: number | Array<number>,
    itemGap?: number,
    left?: number | string | 'left' | 'center' | 'right',
    top?: number | string | 'top' | 'middle' | 'bottom',
    right?: number | string,
    bottom?: number | string,
    backgroundColor?: string,
    borderColor?: string,
    borderWidth?: number,
    borderRadius?: number,
  }; // 标题
  legend?: {
    type?: 'plain' | 'scroll',
    show?: boolean,
    left?: number | string | 'left' | 'center' | 'right',
    top?: number | string | 'top' | 'middle' | 'bottom',
    right?: number | string,
    bottom?: number | string,
    orient?: 'horizontal' | 'vertical',
    align?: 'auto' | 'left' | 'right',
    padding?: number | Array<number>,
    itemGap?: number,
    formatter?: string | Function,
    selectedMode?: boolean | 'single' | 'multiple',
    selected?: object,
    /*
    selected:{
    '系列1':true,
    '系列2':false
    }
     */
    textStyle?: StyleOption,
    tooltip?: boolean,
    data?: Array<{
      name?: string,
      icon?: 'circle' | 'rect' | 'roundRect' | 'triangle' | 'diamond' | 'pin' | 'arrow' | 'none',
      textStyle?: StyleOption
    } | string>,
    pageButtonItemGap?: number;
    pageButtonGap?: number;
    pageButtonPosition?: 'start' | 'end';
    pageIcons?: {
      horizontal?: Array<string>
    },
    pageIconSize?: number | Array<number>
  }; // 图标提示，控制显示
  grid?: Array<{
    show?: boolean,
    left?: number | string | 'left' | 'center' | 'right',
    top?: number | string | 'top' | 'middle' | 'bottom',
    right?: number | string,
    bottom?: number | string,
    width?: string | number,
    height?: string | number,
    containerLabel?: boolean,
    tooltip?: TooltipOption
  }>; // 一张画布显示多个图表
  xAxis?: {
    show?: boolean;
    gridIndex?: number;
    position?: 'top' | 'bottom';
    offset?: number;
    type?: 'value' | 'category' | 'time' | 'log';
    name?: string;
    nameLocation?: 'start' | 'middle' | 'center' | 'end';
    nameTextStyle?: StyleOption;
    nameGap?: number;
    inverse?: boolean;
    boundaryGap?: boolean | Array<string>; // 类目轴与非类目轴输入不同
    min?: number | string | Function;
    max?: number | string;
    scale?: boolean; // 是否一定包含0刻度
    splitNumber?: number; // 分割预估段数
    minInterval?: number; // 坐标轴最小间隔大小
    maxInterval?: number; // 坐标轴最大间隔大小
    interval?: number; // 强制设置坐标轴分割大小
    axisLine?: {
      show?: boolean,
      onZero?: boolean,
      symbol?: 'none' | 'arrow' | Array<'none' | 'arrow'>,
      symbolSize?: Array<number>,
      lineStyle?: {
        color?: string,
        width?: number,
        type?: 'solid' | 'dashed' | 'dotted'
      }
    };
    axisTick?: {
      show?: boolean,
      alignWithLabel?: boolean,
      interval?: number | Function,
      inside?: boolean
    };
    axisLabel?: {
      show?: boolean,
      interval?: number | Function,
      inside?: boolean,
      rotate?: number,
      margin?: number,
      formatter?: string | Function
    };
    data?: Array<string | {
      value?: string,
      textStyle?: StyleOption
    }>;
    axisPointer?: {
      show?: boolean,
      type?: 'line' | 'shadow' | 'none',
      snap?: boolean
    }
  }; // x轴
  yAxis?: {
    show?: boolean;
    gridIndex?: number;
    position?: 'left' | 'right';
    offset?: number;
    type?: 'value' | 'category' | 'time' | 'log';
    name?: string;
    nameLocation?: 'start' | 'middle' | 'center' | 'end';
    nameTextStyle?: StyleOption;
    nameGap?: number;
    inverse?: boolean;
    boundaryGap?: boolean | Array<string>; // 类目轴与非类目轴输入不同
    min?: number | string | Function;
    max?: number | string;
    scale?: boolean; // 是否一定包含0刻度
    splitNumber?: number; // 分割预估段数
    minInterval?: number; // 坐标轴最小间隔大小
    maxInterval?: number; // 坐标轴最大间隔大小
    interval?: number; // 强制设置坐标轴分割大小
    axisLine?: {
      show?: boolean,
      onZero?: boolean,
      symbol?: 'none' | 'arrow' | Array<'none' | 'arrow'>,
      symbolSize?: Array<number>,
      lineStyle?: {
        color?: string,
        width?: number,
        type?: 'solid' | 'dashed' | 'dotted'
      }
    };
    axisTick?: {
      show?: boolean,
      alignWithLabel?: boolean,
      interval?: number | Function,
      inside?: boolean
    };
    axisLabel?: {
      show?: boolean,
      interval?: number | Function,
      inside?: boolean,
      rotate?: number,
      margin?: number,
      formatter?: string | Function
    };
    data?: Array<string | {
      value?: string,
      textStyle?: StyleOption
    }>;
    axisPointer?: {
      show?: boolean,
      type?: 'line' | 'shadow' | 'none',
      snap?: boolean
    }
  }; // y轴
  polar?: {
    zlevel?: number,
    z?: number,
    center?: Array<number | string>,
    radius?: number | string | Array<number | string>,
    tooltip?: TooltipOption
  }; // 极坐标系
  radiusAxis?: {
    polarIndex?: number,
    type?: 'value' | 'category' | 'time' | 'log',
    name?: string,
    nameLocation?: 'start' | 'middle' | 'center' | 'end',
    nameTextStyle?: StyleOption,
    nameGap?: number,
    nameRotate?: number,
    inverse?: boolean,
    boundaryGap?: boolean | Array<string>,
    min?: number | string | Function,
    max?: number | string,
    scale?: boolean,
    splitNumber?: number,
    minInterval?: number,
    maxInterval?: number,
    interval?: number,
    data?: Array<string | {
      value?: string,
      textStyle?: StyleOption
    }>
  }; // 极坐标系径向轴
  angleAxis?: {
    polarIndex?: number,
    startAngle?: number,
    clockwise?: boolean,
    type?: 'value' | 'category' | 'time' | 'log',
    boundaryGap?: boolean | Array<string>,
    min?: number | string | Function,
    max?: number | string,
    scale?: boolean,
    splitNumber?: number,
    minInterval?: number,
    maxInterval?: number,
    interval?: number,
    data?: Array<string | {
      value?: string,
      textStyle?: StyleOption
    }>
  }; // 极坐标系角度轴
  radar?: {
    zlevel?: number,
    z?: number,
    center?: Array<string | number>,
    radius?: number | string | Array<number | string>,
    startAngle?: number,
    name?: {
      show?: boolean,
      formatter?: string | Function,
      color?: string,
      fontStyle?: 'normal' | 'italic' | 'oblique',
      fontWeight?: 'normal' | 'bold' | 'bolder' | 'lighter',
      fontSize?: number,
      backgroundColor?: string | { image: string },
      borderColor?: string,
      borderWidth?: number,
      borderRadius?: number,
      padding?: number | Array<number>
    },
    nameGap?: number,
    splitNumber?: number,
    shape?: 'polygon' | 'circle',
    scale?: boolean,
    indicator?: {
      name?: string,
      max?: number,
      min?: number,
      color?: string
    }
  }; // 雷达图
  dataZoom?: Array<{
    type?: 'inside',
    xAxisIndex?: number | Array<number>,
    yAxisIndex?: number | Array<number>,
    radiusAxisIndex?: number | Array<number>,
    angleAxisIndex?: number | Array<number>,
    filterMode?: 'filter' | 'weakFilter' | 'empty' | 'none',
    start?: number,
    end?: number,
    startValue?: number | string | Date,
    endValue?: number | string | Date,
    minSpan?: number,
    maxSpan?: number,
    minValueSpan?: number | string | Date,
    maxValueSpan?: number | string | Date,
    orient?: 'horizontal' | 'vertical',
    zoomLock?: boolean,
    rangeMode?: Array<number | string>,
    zoomOnMouseWheel?: boolean | 'shift' | 'ctrl' | 'alt',
    moveOnMouseMove?: boolean | 'shift' | 'ctrl' | 'alt',
    moveOnMouseWheel?: boolean | 'shift' | 'ctrl' | 'alt'
  } | {
    type?: 'slider',
    show?: boolean,
    backgroundColor?: string,
    dataBackground?: {
      lineStyle?: {
        color?: string,
        width?: number,
        type?: 'solid' | 'dashed' | 'dotted'
      },
      areaStyle?: {
        color?: string,
        opacity?: number
      }
    },
    fillerColor?: string,
    borderColor?: string,
    textStyle?: StyleOption,
    xAxisIndex?: number | Array<number>,
    yAxisIndex?: number | Array<number>,
    radiusAxisIndex?: number | Array<number>,
    angleAxisIndex?: number | Array<number>,
    filterMode?: 'filter' | 'weakFilter' | 'empty' | 'none',
    start?: number,
    end?: number,
    startValue?: number | string | Date,
    endValue?: number | string | Date,
    orient?: 'horizontal' | 'vertical',
    zoomLock?: boolean,
    rangeMode?: Array<string>,
    left?: string | number,
    top?: string | number,
    right?: string | number,
    bottom?: string | number
  }>; // 缩放组件
  tooltip?: TooltipOption; // 提示框组件
  axisPointer?: {
    show?: boolean,
    type?: 'line' | 'shadow' | 'none',
    label?: {
      show?: boolean,
      precision?: number | string,
      formatter?: string | Function,
      margin?: number,
      color?: string,
      fontStyle?: 'normal' | 'italic' | 'oblique',
      fontWeight?: 'normal' | 'bold' | 'bolder' | 'lighter',
      fontSize?: number
    }
  }; // 坐标轴指示器共用设置
  toolbox?: {
    show?: boolean,
    orient?: 'horizontal' | 'vertical',
    itemSize?: number,
    itemGap?: number,
    showTitle?: boolean,
    left?: number,
    top?: number,
    right?: number,
    bottom?: number
  }; // 工具栏 内置有导出图片，数据视图，动态类型切换，数据区域缩放，重置五个工具
  series?: Array<{
    type?: 'line',
    name?: string,
    connectNulls?: boolean,
    clipOverflow?: boolean,
    step?: boolean | 'start' | 'middle' | 'end',
    smooth?: boolean,
    data?: Array<number | string>,
    tooltip?: TooltipOption
  } | {
    type?: 'bar',
    name?: string,
    stack?: string,
    barWidth?: number | string,
    barMaxWidth?: number | string,
    barMinWidth?: number | string,
    barGap?: string,
    barCategoryGap?: string,
    data?: Array<number | string>,
    tooltip?: TooltipOption
  } | {
    type?: 'pie',
    name?: string,
    legendHoverLink?: boolean,
    hoverAnimation?: boolean,
    hoverOffset?: number,
    selectedMode?: boolean | 'single' | 'multiple',
    selectedOffset?: number,
    clockwise?: boolean,
    roseType?: boolean | 'radius' | 'area',
    stillShowZeroSum?: boolean,
    center?: Array<number | string>,
    radius?: number | string | Array<string | number>,
    data?: Array<number>,
    tooltip?: TooltipOption
  }>; // 图表类型 包含：折线图、柱状图、饼图
  color?: ['#c23531', '#2f4554', '#61a0a8', '#d48265', '#91c7ae', '#749f83', '#ca8622', '#bda29a', '#6e7074', '#546570', '#c4ccd3']; // 默认颜色
  backgroundColor?: string; // 背景颜色
  textStyle?: StyleOption;
}

export interface StyleOption {
  color?: string;
  fontStyle?: 'normal' | 'italic' | 'oblique';
  fontWeight?: 'normal' | 'bold' | 'bolder' | 'lighter';
  fontSize?: number;
  align?: 'left' | 'center' | 'right';
  verticalAlign?: 'top' | 'middle' | 'bottom';
}

export interface TooltipOption {
  show?: boolean;
  trigger?: 'item' | 'axis' | 'none';
  axisPointer?: {
    type?: 'line' | 'shadow' | 'none' | 'cross',
    axis?: 'x' | 'y' | 'radius' | 'angle',
    snap?: boolean,
    label?: {
      show?: boolean,
      precision?: number | string,
      formatter?: string | Function,
      margin?: number | string,
      color?: string,
      fontStyle?: 'normal' | 'italic' | 'oblique',
      fontWeight?: 'normal' | 'bold' | 'bolder' | 'lighter',
      fontSize?: number,
      padding?: string | Array<string>,
    };
    lineStyle?: {
      color?: string,
      width?: number,
      type?: 'solid' | 'dashed' | 'dotted',
    };
    shadowStyle?: {
      color?: string
    };
    crossStyle?: {
      color?: string,
      width?: number,
      type?: 'solid' | 'dashed' | 'dotted'
    };
    showContent?: boolean;
    alwaysShowContent?: boolean;
    triggerOn?: 'mousemove' | 'click' | 'mousemove|click' | 'none';
    confine?: boolean;
    position?: string | Array<number | string> | Function;
    formatter?: string | Function;
    backgroundColor?: string;
    borderColor?: string;
    borderWidth?: number;
    padding?: number;
    textStyle?: StyleOption;
  };
}
