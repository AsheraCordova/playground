
//start - import

//end - import
import { Fragment, Inject } from './app/Fragment';
import { NavController, InjectController } from './navigation/NavController';
import { ScopedObject } from './app/ScopedObject';

//start - className
export default class SampleCompass extends Fragment
//end - className
{
        //start - body
        @InjectController({})
        navController!: NavController;
        
		static createInstance () {
			return new SampleCompass();
		}
        async goToPreviousScreen() {
            await this.navController.reset().popBackStack().executeCommand();
        }        
        //end - body
        onDestinationReached(event: any) {
            console.log("Destination reached: " + JSON.stringify(event));
        }
        onApproachingDestination(event: any) {
            console.log("Approaching destination: " + JSON.stringify(event));
        }

}
        