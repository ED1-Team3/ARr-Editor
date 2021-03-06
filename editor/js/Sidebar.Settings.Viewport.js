import { UIPanel, UIText, UIRow } from './libs/ui.js';
import { UIBoolean } from './libs/ui.three.js';


function SidebarSettingsViewport( editor ) {

	var signals = editor.signals;
	var strings = editor.strings;

	var container = new UIPanel();

	var headerRow = new UIRow();
	headerRow.add( new UIText( strings.getKey( 'sidebar/settings/viewport' ).toUpperCase() ) );
	container.add( headerRow );

	// grid

	var showGridRow = new UIRow();

	showGridRow.add( new UIText( strings.getKey( 'sidebar/settings/viewport/grid' ) ).setWidth( '90px' ) );

	var showGrid = new UIBoolean( true ).onChange( function () {

		signals.showGridChanged.dispatch( showGrid.getValue() );

	} );
	showGridRow.add( showGrid );
	container.add( showGridRow );

	// helpers (removed)

	/*var showHelpersRow = new UIRow();

	showHelpersRow.add( new UIText( strings.getKey( 'sidebar/settings/viewport/helpers' ) ).setWidth( '90px' ) );

	var showHelpers = new UIBoolean( true ).onChange( function () {

		signals.showHelpersChanged.dispatch( showHelpers.getValue() );

	} );
	showHelpersRow.add( showHelpers );
	container.add( showHelpersRow );*/


	// dark mode
	/*var showDarkModeRow = new UIRow();

	showDarkModeRow.add( new UIText( strings.getKey( 'sidebar/settings/viewport/darkmode' ) ).setWidth( '90px' ) );

	var showDarkMode = new UIBoolean( true ).onChange( function () {

		//signals.showDarkModeChanged.dispatch( showDarkMode.getValue() );
		/*let element = document.body;
  		element.classList.toggle("dark-mode");

	} );
	showDarkModeRow.add( showDarkMode );
	container.add( showDarkModeRow);*/

	return container;

}

export { SidebarSettingsViewport };
