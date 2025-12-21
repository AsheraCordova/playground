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
import { Snackbar } from './android/widget/SnackbarImpl';
import { motionLayout } from './R/SampleMotionLayoutDrawerLayout';
import { TextView } from './android/widget/TextViewImpl';
import { Carousel } from './android/widget/CarouselImpl';
import { View } from './android/widget/ViewImpl';
import { fragment } from './android/widget/fragmentImpl';
import { DialogHelper } from './helpers/DialogHelper';
declare var SpinnerDialog:any;
export default class Index extends Fragment {
    @InjectController({})
    navController!: NavController;

    @Inject({ id: preview })
    private previewPane: fragment;

    @Inject({ id: xml })
    private xmlEditText: EditText;

    @Inject({ id : "@+id/userProfile"})
    private userProfile:ImageView;

    @Inject({ id : "@+id/animator0"})
    private animator0:View;

    @Inject({ id : "@+id/animator1"})
    private animator1:View;

    @Inject({ id : "@+id/animator2"})
    private animator2:View;
    constructor() {
        super();
    }

    public onCreate(obj: any) {
    }

    preview(obj: any) {
        this.endAllAnimations();
        this.previewPane.replace(obj.xml);
        this.executeCommand(this.animator0, this.animator1, this.animator2, this.previewPane);
    }

    setXml(obj: any) {
        var data: any = this.getRecyclerData();
        var groupiedata: any = this.getGroupieData();
		let viewPagerData = this.getViewPagerData();
        let list: any = [];
        let images = ["@drawable/bryce_canyon", "@drawable/cathedral_rock", "@drawable/death_valley", "@drawable/fitzgerald_marine_reserve", "@drawable/goldengate", "@drawable/golden_gate_bridge", "@drawable/shipwreck_1", "@drawable/shipwreck_2", "@drawable/grand_canyon", "@drawable/horseshoe_bend", "@drawable/muir_beach", "@drawable/rainbow_falls"];
        var colors = [ ("#9C4B8F"), ("#945693"), ("#8C6096"), ("#846B9A"), ("#7C769E"), ("#7480A2"), ("#6D8BA5"), ("#6595A9"), ("#5DA0AD"), ("#55ABB1"), ("#4DB5B4"), ("#45C0B8")];
        for(let i=0; i<10;i++) {
            list.push({"id":i, "name": i + "", "background": (i % 2) == 0 ? "#ff0" : "#f00", "src" : images[i], "mybackground": colors[i]});
        }
        this.endAllAnimations();
        this.xmlEditText.setText(obj.xml).updateModelDataWithScopedObject(
            new ScopedObject("testObj->view as pathmap", { looptest: { textlayout: data } }),
            new ScopedObject("sectionInfo->view as list", groupiedata),
            new ScopedObject("viewpagerInfo->view as list", viewPagerData),
            new ScopedObject("carouselInfo->view as list", list));
        this.executeCommand(this.animator0, this.animator1, this.animator2, this.xmlEditText);
    }

    @Inject({ id: "@+id/validateButton" })
    private validateButton!: Button;
    private endAllAnimations() {
        this.animator0.endAnimator();
        this.animator1.endAnimator();
        this.animator2.endAnimator();        
    }

    private getViewPagerData() {
        let viewPagerData = [];
        for (let i = 0; i < 10; i++) {
            viewPagerData.push({ "id": i, "name": i + "", "background": (i % 2) == 0 ? "#ff0" : "#f00" });
        }
        return viewPagerData;
    }

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
                favourite.addItem({ "background": "#0f0", "name": i + "", image: "https://loremflickr.com/" + x + "/" + x + "?img=" + x });
            }
            favourite.updateSection("title", "Favourites" + j);
            data.push(favourite.getSectionData());
        }
        return data;
    }

    async validateMyForm() {
        this.validateButton.validateForm("loginForm").tryGetValidateForm();
        await this.executeCommand(this.validateButton);
        this.alertMe(this.validateButton.getValidateForm());
    }


    @Inject({ id: "@+id/songs" })
    private songsRecyclerView!: RecyclerView;
    async addSong(obj: any) {
        this.songsRecyclerView.reset().addSectionItem(obj.id, "songs", { "background": "#0ff", "name": "New" });
        await this.executeCommand(this.songsRecyclerView);
    }
    async clearSongs(obj: any) {
        this.songsRecyclerView.reset().removeAllItems(obj.id, "songs");
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
        this.alertMe("test");
     }

     async login(obj:any) {		
		this.alertMe(JSON.stringify(obj.model));		
	}

    async openCamera() {
        (navigator as any).camera.getPicture((imageData: any)=>{
            this.userProfile.setSrc("data:image/png;base64," + imageData);
            this.executeCommand(this.userProfile);
        }, (message: any) => {
            this.alertMe(message);
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

    @Inject({ id : "@+id/snackbar"})
	private snackbar!: Snackbar;

	async showSnackbar() {
		this.snackbar.show(true);
		await this.executeCommand(this.snackbar);
	}
	
	async dismissSnackbar() {
		this.snackbar.show(false);
		await this.executeCommand(this.snackbar);
	}

    @Inject({ id: motionLayout })
    private motionLayout: DrawerLayout;   
    async openDrawerInMotionLayout() {
        this.motionLayout.reset().openDrawer(Gravity.start);
		await this.executeCommand(this.motionLayout);
    } 

    @Inject({ id : "@+id/n__carousel"})
	private carousel!: Carousel;
	
	async gotoLastItem() {
		this.carousel.reset().transitionToLast(1000);
		await this.executeCommand(this.carousel);	
	}

	async gotoNextItem() {
		this.carousel.reset().transitionToNext(1000);
		await this.executeCommand(this.carousel);	
	}
	
	async gotoPrevItem() {
		this.carousel.reset().transitionToPrevious(1000);
		await this.executeCommand(this.carousel);	
	}

	
	@Inject({ id : "@+id/n__label"})
	private label!: TextView;

	async onNewItem(obj:any) {
		this.label.setText("#" + obj["index"]);
		await this.executeCommand(this.label);
	}

    @Inject({ id : "@+id/adapterConfig0"})
	private adapterConfig0!: RecyclerView;
    async filter(obj:any) {
		this.adapterConfig0.filter(obj.newText);
		await this.executeCommand(this.adapterConfig0);
	}
	
	alertMe(msg: string) {
		DialogHelper.alert(msg, () => {});
	}

    showDialogAlert() {
        DialogHelper.alert("test", () => {});
    }

    async showProgressDialog() {
		SpinnerDialog.show();
        setTimeout(() => {
            SpinnerDialog.hide();
        }, 5000);
	}

    async showSelection(obj:any) {
		DialogHelper.alert(obj.checkedIds[0], () => {});
	}

	async chipAlarm() {
		DialogHelper.alert("alarm", () => {});
	}

	async chipMusic() {
		DialogHelper.alert("music", () => {});
	}

	async chipCall() {
		DialogHelper.alert("Call", () => {});
	}

	async chipSendMessage() {
		DialogHelper.alert("SendMessage", () => {});
	}

    async filterGroup(obj:any) {
        let checkedIds = obj.checkedIds;
        let filter = '';
        if (checkedIds.length > 0) {
            filter = checkedIds[0].slice(-1);
        }
		this.adapterConfig0.filter(filter);
		await this.executeCommand(this.adapterConfig0);
	}

    showDefaultSheet(event: any) {
        var callback = function (buttonIndex: any) {
            setTimeout(function () {
                // like other Cordova plugins (prompt, confirm) the buttonIndex is 1-based (first button is index 1)
                DialogHelper.alert('button index clicked: ' + buttonIndex, () => { });
            });
        };
        var options = {
            parentFragmentId: event["fragmentId"],
            title: 'What do you want with this image?',
            buttonLabels: ['Share via Facebook', 'Share via Twitter'],
            addCancelButtonWithLabel: 'Cancel',
            addDestructiveButtonWithLabel: 'Delete it',
            destructiveButtonLast: true // you can choose where the destructive button is shown
        };
        // Depending on the buttonIndex, you can now call shareViaFacebook or shareViaTwitter
        // of the SocialSharing plugin (https://github.com/EddyVerbruggen/SocialSharing-PhoneGap-Plugin)
        (window as any).plugins.actionsheet.show(options, callback);
    }

    showDeleteSheet(event: any) {
        var callback = function (buttonIndex: any) {
            setTimeout(function () {
                // like other Cordova plugins (prompt, confirm) the buttonIndex is 1-based (first button is index 1)
                DialogHelper.alert('button index clicked: ' + buttonIndex, () => { });
            });
        };
        var options = {
            'parentFragmentId': event["fragmentId"],
            'addCancelButtonWithLabel': 'Cancel',
            'addDestructiveButtonWithLabel': 'Delete note'
        };
        // Depending on the buttonIndex, you can now call shareViaFacebook or shareViaTwitter
        // of the SocialSharing plugin (https://github.com/EddyVerbruggen/SocialSharing-PhoneGap-Plugin)
        (window as any).plugins.actionsheet.show(options, callback);
    }
    showLogoutSheet(event: any) {
        var callback = function (buttonIndex: any) {
            setTimeout(function () {
                // like other Cordova plugins (prompt, confirm) the buttonIndex is 1-based (first button is index 1)
                DialogHelper.alert('button index clicked: ' + buttonIndex, () => { });
            });
        };
        var options = {
            'parentFragmentId': event["fragmentId"],
            'buttonLabels': ['Log out'],
            'androidEnableCancelButton': true, // default false
            'winphoneEnableCancelButton': true, // default false
            'addCancelButtonWithLabel': 'Cancel'
        };
        // Depending on the buttonIndex, you can now call shareViaFacebook or shareViaTwitter
        // of the SocialSharing plugin (https://github.com/EddyVerbruggen/SocialSharing-PhoneGap-Plugin)
        (window as any).plugins.actionsheet.show(options, callback);
    }

    showCustomizedSheet(event: any) {
        var callback = function (buttonIndex: any) {
            setTimeout(function () {
                // like other Cordova plugins (prompt, confirm) the buttonIndex is 1-based (first button is index 1)
                DialogHelper.alert('button index clicked: ' + buttonIndex, () => { });
            });
        };
        var options = {
            parentFragmentId: event["fragmentId"],
            title: 'What do you want with this image?',
            buttonLabels: ['Share via Facebook', 'Share via Twitter'],
            addCancelButtonWithLabel: 'Cancel',
            addDestructiveButtonWithLabel: 'Delete it',
            destructiveTextColor: "#ff0000",
            destructiveBackgroundColor: "#000000",
            destructiveHighlightColor: "#ffffff",
            destructiveButtonLast: true // you can choose where the destructive button is shown
        };
        // Depending on the buttonIndex, you can now call shareViaFacebook or shareViaTwitter
        // of the SocialSharing plugin (https://github.com/EddyVerbruggen/SocialSharing-PhoneGap-Plugin)
        (window as any).plugins.actionsheet.show(options, callback);
    }

    showNoCancelButton(event: any) {
        var callback = function (buttonIndex: any) {
            setTimeout(function () {
                // like other Cordova plugins (prompt, confirm) the buttonIndex is 1-based (first button is index 1)
                DialogHelper.alert('button index clicked: ' + buttonIndex, () => { });
            });
        };
        var options = {
            parentFragmentId: event["fragmentId"],
            buttonLabels: ['Share via Facebook', 'Share via Twitter']
        };
        // Depending on the buttonIndex, you can now call shareViaFacebook or shareViaTwitter
        // of the SocialSharing plugin (https://github.com/EddyVerbruggen/SocialSharing-PhoneGap-Plugin)
        (window as any).plugins.actionsheet.show(options, callback);
    }
    
}