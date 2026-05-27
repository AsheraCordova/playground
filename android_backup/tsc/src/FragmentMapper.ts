import ErrorFragment from './ErrorFragment';
import ErrorDetailFragment from './ErrorDetailFragment';
//start - import

import Index from './Index';

import QrcodeScanner from './QrcodeScanner';

import SampleCompass from './SampleCompass';

import SampleMaps from './SampleMaps';

//end - import

export const fragmentMapper : any = {
  'layout/error.xml': ErrorFragment,
  'layout/error_detail.xml': ErrorDetailFragment,
  'layout/dialog_sample.xml': Index,
  'layout/dialog_child.xml': Index,
  '@+id/preview': Index,
  //start - body
    
     'layout/index.xml': Index,
    
     'layout/qrcode_scanner.xml': QrcodeScanner,
    
     'layout/sample_compass.xml': SampleCompass,
    
     'layout/sample_maps.xml': SampleMaps,
    
     //end - body
};