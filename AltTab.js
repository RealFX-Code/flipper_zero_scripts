
// Include things
let dialog = require("dialog");
let badusb = require("badusb");


// Init BadUSB
let BailBeforeLogic = false;
badusb.setup({
    vid: 0x6969,
    pid: 0xBABE,
    mfr_name: "VendorCo",
    prod_name: "ProductCode USB Device"
});

if(!badusb.isConnected()){
    print("[ERROR] > Connect to a HID Compliant host first!");
    BailBeforeLogic = true;
}

// Let the people know who I am!
print("AltTab.js > From: Leah's Flipper Scripts Library!");
print(" > github.com/RealFX-Code/flipper_zero_scripts");

// Begin logic

badusb.hold("ALT");
badusb.press("TAB");

if(!BailBeforeLogic){
    let UserInitiatedExit = false;
    for (let i = 0; i < 128; i++) {
        let mainMenu = ({
            header: "WARNING: Max of 128 TABs! ("+to_string(i)+")",
            text: "Alt+Tab Script!",
            button_center: "TAB!",
            button_right: "Done!"
        });
        let result = dialog.custom(mainMenu);
        print("Pressed: "+result+"!");
        if(result === "TAB!"){
            badusb.press("TAB");
        } else if (result === "Done!") {
            badusb.release("ALT");
            UserInitiatedExit = true;
            break;
        } else {
            print("[WARN] > Unknown button pressed!");
            UserInitiatedExit = true;
            break;
        }
    }
    if(!UserInitiatedExit) {
        print("[WARN] > You can only press TAB 128 times.");
    }
}
