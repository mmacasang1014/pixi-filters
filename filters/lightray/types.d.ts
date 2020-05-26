/// <reference types="pixi.js" />
declare module "pixi-filter-lightray" {
    export class LightRayFilter extends PIXI.Filter {
        constructor(options?:LightRayFilterOptions);
        angle:number;
        center:PIXI.Point|Array<number>;
        parallel:boolean;
        gain:number;
        lacunarity:number;
        time:number;
    }
    export interface LightRayFilterOptions {
        angle:number;
        center:PIXI.Point|Array<number>;
        parallel:boolean;
        gain:number;
        lacunarity:number;
        time:number;
    }
}
