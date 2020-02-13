/// <reference types="pixi.js" />
declare module "@pixi/filter-aurora" {
    export class AuroraFilter extends PIXI.Filter {
        constructor(options?:AuroraFilterOptions);
        angle:number;
        center:PIXI.Point|Array<number>;
        parallel:boolean;
        gain:number;
        lacunarity:number;
        time:number;
    }
    export interface AuroraFilterOptions {
        angle:number;
        center:PIXI.Point|Array<number>;
        parallel:boolean;
        gain:number;
        lacunarity:number;
        time:number;
    }
}
