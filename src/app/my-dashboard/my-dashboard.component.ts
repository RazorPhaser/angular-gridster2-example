import { Component, OnInit } from '@angular/core';
import { GridsterConfig, GridsterItem } from 'angular-gridster2';
import { GridsterStorageService } from '../my-gridster-helpers/gridster-storage.service';
import { MyDefaultGridsterOptions } from './MyDefaultGridsterOptions';

@Component({
  selector: 'app-my-dashboard',
  templateUrl: './my-dashboard.component.html',
  styleUrls: ['./my-dashboard.component.scss']
})
export class MyDashboardComponent implements OnInit {
  // The options used to set up this component's grid
  public options: GridsterConfig;
  // An array of GridsterItems that define the layout of the dashboard
  public dashboard: Array<GridsterItem>;
  // Variable to hold the current state of the dashboard lock status
  public isDashboardLocked: boolean;

  constructor(
    // Load an instance of the Gridster service which
    // Persists dashboard layout and options to storage
    private _gridsterStorageService: GridsterStorageService
  ) { }

  private itemChange(item, itemComponent) {
    // This function is tied to the itemChangeCallback of the Gridster dashboard
    // It is called when a widget changes location or the number of units (x,y) it occupies

    // Log the item to the console
    //console.info('itemChanged', item, itemComponent);

    // Persist the current dashboard to storage
    this._gridsterStorageService.StoreDashboard(this.dashboard);

    // Log the dashboard to the console
    //console.log('this.dashboard', this.dashboard);

    // Used to update a single item rather than the entire dashboard
    // this._gridsterStorageService.UpdateItem(item);
  }

  private itemResize(item, itemComponent) {
    //console.info('itemResized', item, itemComponent);
    // this._gridsterStorageService.StoreDashboard(this.dashboard);
    // console.log('this.dashboard', this.dashboard);
  }

  ngOnInit() {
    // Set the dashboard to stored or default settings
    this.dashboard = this._gridsterStorageService.GetDashboard();
    console.log('this._gridsterStorageService.GetDashboard()', this.dashboard);
    // Set the dashboard locked status
    this.isDashboardLocked = this._gridsterStorageService.GetLockStatus();
    // Set the default options
    this.SetGridsterDefaultOptions();
  }

  private SetGridsterDefaultOptions() {
    // Set the default options we can
    this.options = MyDefaultGridsterOptions;
    // Set callback options
    // Take special note of the `.bind(this)` function
    // `.bind(this)` allows the callback to reference functions
    // within the scope of this component
    this.options.itemChangeCallback = this.itemChange.bind(this);
    this.options.itemResizeCallback = this.itemResize.bind(this);
    // Assign lock options to local variable
    this.options.draggable.enabled = !this.isDashboardLocked;
    this.options.resizable.enabled = !this.isDashboardLocked;
  }

  changedOptions() {
    // This needs to be called whenever options are changed
    this.options.api.optionsChanged();
  }

  removeItem(item) {
    this.dashboard.splice(this.dashboard.indexOf(item), 1);
  }

  addItem() {
    // this.dashboard.push({});
  }

  toggleDashboardLock() {
    // Toggle the dashboard lock
    this.isDashboardLocked = !this.isDashboardLocked
    // Toggle draggable widgets
    this.options.draggable.enabled = !this.isDashboardLocked;
    // Toggle resizable widgets
    this.options.resizable.enabled = !this.isDashboardLocked;
    // Persist the current state of the lock status to storage
    this._gridsterStorageService.SaveLockStatus(this.isDashboardLocked);
    // Apply the option changes to Gridster
    this.changedOptions();
  }

  saveDashboard() {
    // Persist the current dashboard to storage
    console.log('this.dashboard', this.dashboard);
    this._gridsterStorageService.StoreDashboard(this.dashboard);
  }

}
