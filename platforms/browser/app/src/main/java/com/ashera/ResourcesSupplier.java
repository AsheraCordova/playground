package com.ashera;

import org.teavm.classlib.ResourceSupplier;
import org.teavm.classlib.ResourceSupplierContext;

public class ResourcesSupplier implements ResourceSupplier {
	@Override
	public String[] supplyResources(ResourceSupplierContext context) {
		String[] result = { "www/css/styles.css", "res/xml/config.xml",
				//start - body
"www/layout/activity_main.xml",
"www/layout/datepicker.xml",
"www/layout/dialog_child.xml",
"www/layout/dialog_sample.xml",
"www/layout/error.xml",
"www/layout/erroritem.xml",
"www/layout/error_detail.xml",
"www/layout/index.xml",
"www/layout/item_song.xml",
"www/layout/item_songheader.xml",
"www/layout/item_songs.xml",
"www/layout/listfooter.xml",
"www/layout/listheader.xml",
"www/layout/listview_testitem.xml",
"www/layout/qrcode_scanner.xml",
"www/layout/sample_border.xml",
"www/layout/sample_camera.xml",
"www/layout/sample_capinsets.xml",
"www/layout/sample_constraintlayout.xml",
"www/layout/sample_constraintlayout_barrier.xml",
"www/layout/sample_constraintlayout_circularflow.xml",
"www/layout/sample_constraintlayout_flow.xml",
"www/layout/sample_constraintlayout_group.xml",
"www/layout/sample_constraintlayout_guideline.xml",
"www/layout/sample_constraintlayout_placeholder.xml",
"www/layout/sample_dialog.xml",
"www/layout/sample_drawerlayout.xml",
"www/layout/sample_formwidgets.xml",
"www/layout/sample_framelayout.xml",
"www/layout/sample_gridlayout.xml",
"www/layout/sample_linearlayout.xml",
"www/layout/sample_model.xml",
"www/layout/sample_qrcode.xml",
"www/layout/sample_recyclerview.xml",
"www/layout/sample_recycleview_groupieadapter.xml",
"www/layout/sample_relativelayout.xml",
"www/layout/sample_start.xml",
"www/layout/sample_tablelayout.xml",
"www/layout/sample_toolbar.xml",
"www/layout/sample_validations.xml",
"www/layout/sample_webview.xml",
"www/layout/timepicker.xml",
//end - body
		};
		return result;
	}
}