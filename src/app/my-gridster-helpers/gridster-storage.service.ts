import { Injectable } from '@angular/core';
import { MyDefaultGridsterDashboard } from '../my-dashboard/MyDefaultGridsterDashboard';

@Injectable({
    providedIn: 'root'
})
export class GridsterStorageService {

    private _dashboardStorageKey = 'myGridsterDashboard';
    private _optionsStorageKey = 'myGridsterOptions';

    constructor() { }

    // Can be used to update an individual GridsterItem
    UpdateItem(item: any): any {
        let dashboard = this.GetDashboard();
        let idx = this.getArrayIndexOnPropertyValue(dashboard, 'componentName', item.componentName);
        if (idx >= 0) {
            dashboard[idx] = item;
        }
        else {
            dashboard.push(item);
        }
        this.StoreDashboard(dashboard);
    }

    // Save the lock status of the dashboard screen
    // Could be used to store all options
    SaveLockStatus(isDashboardLocked: boolean): any {
        localStorage.setItem(this._optionsStorageKey, JSON.stringify(isDashboardLocked));
    }

    // Retrieve the lock status of the dashboard screen
    // Could be used to retrieve all options
    GetLockStatus(): any {
        let lockStatus = localStorage.getItem(this._optionsStorageKey);
        if (lockStatus) {
            return JSON.parse(lockStatus);
        }
        else {
            this.SaveLockStatus(true);
            return true;
        }
    }

    // Retrieve the dashboard layout
    // Or return the default layout if no layout exists
    GetDashboard(): Array<any> {
        let dashboard = localStorage.getItem(this._dashboardStorageKey);
        if (dashboard) {
            return JSON.parse(dashboard);
        }
        else {
            this.StoreDashboard(MyDefaultGridsterDashboard);
            return MyDefaultGridsterDashboard;
        }
    }

    // Save the dashboard to memory
    StoreDashboard(dashboard: any) {
        localStorage.setItem(this._dashboardStorageKey, JSON.stringify(dashboard));
    }

    // Helper method to locate the index of item in an array 
    // with a specific property and value
    getArrayIndexOnPropertyValue(array, prop, value) {
        for (var i = 0; i < array.length; i += 1) {
            if (array[i][prop] === value) {
                return i;
            }
        }
        return -1;
    }
}
