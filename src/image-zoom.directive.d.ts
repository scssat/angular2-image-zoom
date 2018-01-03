import { ComponentFactoryResolver, ViewContainerRef, OnInit, OnDestroy, OnChanges, SimpleChanges, ElementRef } from '@angular/core';
import { ImageZoomContainer } from './image-zoom-container.component';
import { ImageZoomLens } from './image-zoom-lens.component';
export declare class ImageZoom implements OnInit, OnDestroy, OnChanges {
    private _elementRef;
    private _componentFactoryResolver;
    private _viewContainerRef;
    imageZoom: string;
    allowZoom: boolean;
    clickToZoom: boolean;
    scrollZoom: boolean;
    windowPosition: number;
    lensStyle: string;
    lensWidth: number;
    lensHeight: number;
    lensBorder: number;
    delay: number;
    minZoomLevel: number;
    zoomLevel: number;
    private maxZoomLevel;
    private zoomLevelIncrement;
    img: HTMLImageElement;
    imageZoomContainer: ImageZoomContainer;
    imageZoomLens: ImageZoomLens;
    isZooming: boolean;
    private _elementPosX;
    private _elementPosY;
    private _elementOffsetX;
    private _elementOffsetY;
    private _containerOffsetX;
    private _containerOffsetY;
    private _zoomedImage;
    private _zoomedImageLoaded;
    private _zoomedImageWidth;
    private _zoomedImageHeight;
    private _maxZoomLevel;
    private _autoCalculateZoom;
    private _widthRatio;
    private _heightRatio;
    private _currentX;
    private _currentY;
    private _mouseMoveDebounce;
    private _mouseEnterDebounce;
    private _lastEvent;
    private _previousCursor;
    private _imageLoaded;
    private _componentsCreated;
    private _imageZoomContainerRef;
    private _imageZoomLensRef;
    constructor(_elementRef: ElementRef, _componentFactoryResolver: ComponentFactoryResolver, _viewContainerRef: ViewContainerRef);
    private imageChanged();
    private setImageZoomContainer();
    private setImageZoomContainerVisiblity(visible);
    private setImageZoomLens();
    private setImageZoomLensVisibility(visible);
    private setImageZoomLensPosition();
    private setImageZoomLensSize();
    private setImageBackgroundPosition();
    private setWindowPosition();
    private changeZoomLevel();
    private calculateOffsets();
    private calculateBoundaries(clientX, clientY);
    allowZooming(): boolean;
    onMousemove(event: MouseEvent): void;
    onMouseenter(event: MouseEvent): void;
    onMouseleave(event: MouseEvent): void;
    onMouseScroll(event: any): boolean;
    onClick(event: MouseEvent): void;
    ngOnChanges(changeRecord: SimpleChanges): void;
    ngOnInit(): void;
    ngOnDestroy(): void;
}
