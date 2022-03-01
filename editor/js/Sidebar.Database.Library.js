// New JS File

import { UIPanel, UIText, UIRow } from './libs/ui.js'; 
/*import { UIBoolean } from './libs/ui.three.js';*/


function SidebarDatabaseLibrary( editor ) {

	var signals = editor.signals;
	var strings = editor.strings;

	var container = new UIPanel();
    
    var libraryRow = new UIRow();
    libraryRow.add( new UIText( strings.getKey( 'sidebar/database/library' ).toUpperCase() ) );
    container.add( libraryRow );

    //add function that will link to model library
    
    return container;
}

export {SidebarDatabaseLibrary};