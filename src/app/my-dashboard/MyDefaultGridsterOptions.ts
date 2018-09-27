import { GridsterConfig } from "angular-gridster2";

export const MyDefaultGridsterOptions: GridsterConfig = {
    draggable: {
        enabled: true
    },
    resizable: {
        enabled: true
    },
    minCols: 1,
    maxCols: 6,
    minRows: 1,
    maxRows: 100,
    displayGrid: 'onDrag&Resize',
    gridType: 'scrollVertical',
}