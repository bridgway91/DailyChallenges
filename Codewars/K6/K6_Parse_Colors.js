// In this kata you parse RGB colors represented by strings. The formats are primarily used in HTML and CSS. Your task is to implement a function which takes a color as a string and returns the parsed color as a map (see Examples).

// The input string represents one of the following:
// - 6-digit hexadecimal - "#RRGGBB"
//   e.g. "#012345", "#789abc", "#FFA077"
//   Each pair of digits represents a value of the channel in hexadecimal: 00 to FF
// - 3-digit hexadecimal - "#RGB"
//   e.g. "#012", "#aaa", "#F5A"
//   Each digit represents a value 0 to F which translates to 2-digit hexadecimal: 0->00, 1->11, 2->22, and so on.
// - Preset color name
//   e.g. "red", "BLUE", "LimeGreen"
//   You have to use the predefined map PRESET_COLORS (JavaScript, Python, Ruby), presetColors (Java, C#, Haskell), PresetColors (Go) or preset-colors (Clojure). The keys are the names of preset colors in lower-case and the values are the corresponding colors in 6-digit hexadecimal (same as 1. "#RRGGBB").

// Examples:
// parseHTMLColor('#80FFA0');    // => { r: 128, g: 255, b: 160 }
// parseHTMLColor('#3B7');       // => { r: 51,  g: 187, b: 119 }
// parseHTMLColor('LimeGreen');  // => { r: 50,  g: 205, b: 50  }


function parseHTMLColor(color) { // the color name option really threw me for a loop, and the code for the rest of it seems annoyingly chunky, but w/e, i need sleep
    if (color[0] != '#') {
      let cname = color.toLowerCase()
      color = PRESET_COLORS[cname]
    }
    if (color[0] == '#') {
      let red,green,blue
      if (color.length == 4) {
        red = parseInt(color[1]+color[1],16)
        green = parseInt(color[2]+color[2],16)
        blue = parseInt(color[3]+color[3],16)
      } else {
        red = parseInt(color[1]+color[2],16)
        green = parseInt(color[3]+color[4],16)
        blue = parseInt(color[5]+color[6],16)
      }
      return {r:red,g:green,b:blue}
    }
  }


// alternatively...

function parseHTMLColor(color) { // so i like the first part of this soln, but not the second, doing a parseInt on the whole then the weird math in the return is not clear what is happening
    var key = color.toLowerCase();
    var rgb = (PRESET_COLORS[key] || key).slice(1);
    if (rgb.length === 3)
      rgb = rgb.replace(/./g, '$&$&');
    var val = parseInt(rgb, 16);
    return { 
      r: val / 65536 | 0,
      g: (val / 256 | 0) % 256,
      b: val % 256
    }
  }