import { Button } from './android/widget/ButtonImpl';
import { EditText } from './android/widget/EditTextImpl';
import { FrameLayout } from './android/widget/FrameLayoutImpl';
import { Group } from './android/widget/GroupImpl';
import { Placeholder } from './android/widget/PlaceholderImpl';
import { RecyclerView } from './android/widget/RecyclerViewImpl';
import { Fragment, Inject } from './app/Fragment';
import { GroupieBuilder } from './app/GroupieBuilder';
import { ScopedObject } from './app/ScopedObject';
import { preview, xml } from './R/Index';
import * as viewContants from './android/widget/ViewImpl';
import { InjectController, NavController } from './navigation/NavController';
import { myDialog, myDialogBackgroundDimDisabled, myDialogCancelOnTouch, myDialogCustomBackdrop, myDialogFullScreen, myDialogMatchContent, myDialogWrapContent, qrcode_scanner } from './R/NavGraph';
import { ImageView } from './android/widget/ImageViewImpl';
import { DrawerLayout } from './android/widget/DrawerLayoutImpl';
import { drawer_layout } from './R/SampleDrawerlayout';
import { Gravity } from './widget/TypeConstants';
export default class Index extends Fragment {
    @InjectController({})
    navController!: NavController;

    @Inject({ id: preview })
    private previewPane: FrameLayout;

    @Inject({ id: xml })
    private xmlEditText: EditText;

    @Inject({ id : "@+id/userProfile"})
    private userProfile:ImageView;

    constructor() {
        super();
    }

    public onCreate(obj: any) {
    }

    preview(obj: any) {
        this.previewPane.setChildXml(obj.xml);
        this.executeCommand(this.previewPane);
    }

    setXml(obj: any) {
        var data: any = this.getRecyclerData();
        var groupiedata: any = this.getGroupieData();

        this.xmlEditText.setText(obj.xml).updateModelDataWithScopedObject(
            new ScopedObject("testObj->view as pathmap", { looptest: { textlayout: data } }),
            new ScopedObject("sectionInfo->view as list", groupiedata));
        this.executeCommand(this.xmlEditText);
    }

    @Inject({ id: "@+id/validateButton" })
    private validateButton!: Button;
    private getRecyclerData() {
        var data: any = [{ "sectionName": "test123" }];
        let text = "A";
        for (var i = 0; i < 100; i++) {
            data.push({ "id": (i + ""), "a": i + "" + text.repeat(i) + "---------" });
        }
        return data;
    }

    private getGroupieData() {
        var data: any = [];
        for (var j = 0; j < 5; j++) {
            var groupieBuilder: GroupieBuilder = new GroupieBuilder();

            var favourite = groupieBuilder.withSection("mydata");
            for (var i = 0; i < 10; i++) {
                let x = ((i + 1) * (10 + j));
                favourite.addItem({ "background": "#0f0", "name": i + "", image: "https://source.unsplash.com/random/" + x + "X" + x + "?img=" + x });
            }
            favourite.updateSection("title", "Favourites" + j);
            data.push(favourite.getSectionData());
        }
        return data;
    }

    async validateMyForm() {
        this.validateButton.validateForm("loginForm").tryGetValidateForm();
        await this.executeCommand(this.validateButton);
        alert(this.validateButton.getValidateForm());
    }


    @Inject({ id: "@+id/songs" })
    private songsRecyclerView!: RecyclerView;
    async addSong(obj: any) {
        this.songsRecyclerView.reset().addSectionItem(obj.id, "songs", { "background": "#0ff", "name": "New" });
        await this.executeCommand(this.songsRecyclerView);
    }
    async clearSongs(obj: any) {
        this.songsRecyclerView.reset().removeAllItems(obj.id);
        await this.executeCommand(this.songsRecyclerView);
    }

    async deleteSongById(obj: any) {
        this.songsRecyclerView.reset().removeSectionItem(obj.id, "songs", "0");
        await this.executeCommand(this.songsRecyclerView);
    }

    async updateSong(obj: any) {
        this.songsRecyclerView.reset().updateSectionItem(obj.id, "songs", "0", { "name": "0", "background": "#0ff" });
        await this.executeCommand(this.songsRecyclerView);
    }

    @Inject({ id : "@+id/placeholder"})
	private placeholder!: Placeholder;
	async swapViews(obj:any) {
		this.placeholder.setContent("@+id/mail");
		await this.executeCommand(this.placeholder);		
	}

    @Inject({ id : "@+id/nonEditableFields"})
	private nonEditableFields!: Group;
	@Inject({ id : "@+id/editableFields"})
	private editableFields!: Group;
	async hideShowGroups(obj:any) {
		this.nonEditableFields.setVisibility(viewContants.Visibility.gone);
		this.editableFields.setVisibility(viewContants.Visibility.visible);
		await this.executeCommand(this.editableFields, this.nonEditableFields);
	}

    async openMainDialog() {
        await this.navController.reset().navigate(myDialog, "testObj->view as pathmap", {"testObj": {"emailIntent": "ram@a.com", "passwordIntent": "b.com"}}).executeCommand();
    }

    async closeDialog() {
		await this.navController.reset().closeDialog().executeCommand();		
	}

	async openDialog() {
	    await this.navController.reset().navigate(myDialogMatchContent, "testObj->view as pathmap", {"testObj": {"emailIntent": "ram@a.com", "passwordIntent": "b.com"}}).executeCommand();
	}

    async openDialogWrapContent() {
        await this.navController.reset().navigate(myDialogWrapContent, "testObj->view as pathmap", {"testObj": {"emailIntent": "ram@a.com", "passwordIntent": "b.com"}}).executeCommand();
    }

    async openDialogCustom() {
        await this.navController.reset().navigate(myDialogCustomBackdrop, "testObj->view as pathmap", {"testObj": {"emailIntent": "ram@a.com", "passwordIntent": "b.com"}}).executeCommand();
    }

    async openDialogCancelOnTouch() {
        await this.navController.reset().navigate(myDialogCancelOnTouch, "testObj->view as pathmap", {"testObj": {"emailIntent": "ram@a.com", "passwordIntent": "b.com"}}).executeCommand();
    }

     async openDialogFullScreen() {
        await this.navController.reset().navigate(myDialogFullScreen, "testObj->view as pathmap", {"testObj": {"emailIntent": "ram@a.com", "passwordIntent": "b.com"}}).executeCommand();
     }

     async openDialogDimDisabled() {
        await this.navController.reset().navigate(myDialogBackgroundDimDisabled, "testObj->view as pathmap", {"testObj": {"emailIntent": "ram@a.com", "passwordIntent": "b.com"}}).executeCommand();
     }

    async showAlert() {
        alert("test");
     }

     async login(obj:any) {		
		alert(JSON.stringify(obj.model));		
	}

    async openCamera() {
        (navigator as any).camera.getPicture((imageData: any)=>{
            this.userProfile.setSrc("data:image/png;base64," + imageData);
            this.executeCommand(this.userProfile);
        }, (message: any) => {
            alert(message);
        }, {            
            destinationType: 0            
        });
    }
    async scanQrCode() {
        await this.navController.navigateTo(qrcode_scanner).executeCommand();
    }
 
    @Inject({ id: drawer_layout })
    private drawer_layout: DrawerLayout;   
    async openDrawer() {
        this.drawer_layout.reset().openDrawer(Gravity.start);
		await this.executeCommand(this.drawer_layout);
    } 
}