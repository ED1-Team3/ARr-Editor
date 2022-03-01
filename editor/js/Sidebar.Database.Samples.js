// new JS File


import { UIPanel, UIText, UIRow } from './libs/ui.js';
/*import { UIBoolean } from './libs/ui.three.js';*/


function SidebarDatabaseSamples( editor ) {

	var signals = editor.signals;
	var strings = editor.strings;

	var container = new UIPanel();
    
    var samplesRow = new UIRow();
    samplesRow.add( new UIText( strings.getKey( 'sidebar/database/samples' ).toUpperCase() ) );
    container.add( samplesRow );
    
    //add function that will link to 3D samples

    return container;
}

export {SidebarDatabaseSamples};