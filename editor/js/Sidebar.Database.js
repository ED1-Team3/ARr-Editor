// New Js File


import { UIPanel, UIRow, UISelect, UISpan, UIText } from './libs/ui.js';
import { SidebarDatabaseLibrary } from './Sidebar.Database.Library.js';
import { SidebarDatabaseSamples } from './Sidebar.Database.Samples.js';

function SidebarDatabase( editor ) {

	var config = editor.config;
	var strings = editor.strings;

	var container = new UISpan();

	//Commented this out to remove empty space in the tab
	/*var settings = new UIPanel();
	settings.setBorderTop( '0' );
	settings.setPaddingTop( '20px' );
	container.add( settings );*/

	container.add( new SidebarDatabaseLibrary ( editor ) );
	container.add( new SidebarDatabaseSamples ( editor ) );

	return container;

}

export { SidebarDatabase };
