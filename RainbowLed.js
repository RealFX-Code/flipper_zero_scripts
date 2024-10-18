
// Include
let led = require("notification");

// Let the people know who I am!
print("AltTab.js > From: Leah's Flipper Scripts Library!");
print(" > github.com/RealFX-Code/flipper_zero_scripts");

// Begin logic
for(let i = 0; i < 20; i++) {
    led.blink("blue", "long");
    delay(100);
    led.blink("red", "long");
    delay(100);
    led.blink("green", "long");
    delay(100);
    led.blink("yellow", "long");
    delay(100);
    led.blink("cyan", "long");
    delay(100);
    led.blink("magenta", "long");
    delay(100);
}