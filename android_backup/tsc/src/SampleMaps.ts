
//start - import

//end - import
import { Fragment, Inject } from './app/Fragment';
import { NavController, InjectController } from './navigation/NavController';
import { ScopedObject } from './app/ScopedObject';

//start - className
export default class SampleMaps extends Fragment
//end - className
{
        //start - body
        @InjectController({})
        navController!: NavController;
        
		static createInstance () {
			return new SampleMaps();
		}
        async goToPreviousScreen() {
            await this.navController.reset().popBackStack().executeCommand();
        }        
        //end - body

}
        