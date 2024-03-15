let classes = new Array(); // every elements classes

const fs = require("fs"); // Import the fs module
const { isString, isArray } = require("util");
const { indexURL, cssURL, shortcuts, responsive } = require("./powertik-files");
const { log } = require("console");
fs.readFile(indexURL, "utf8", (err, data) => {
  // Read the file index.html
  if (err) {
    console.error(err); // Handle errors
  } else {
    let css = new Array(); // everything that is going to the css file:

    // css predefined shortcuts
    let full_class_shortcuts = [
      ["flex", "display", "flex"],
      ["block", "display", "block"],
      ["none", "display", "none"],
      ["grid", "display", "grid"],
      ["inline-block", "display", "inline-block"],
      ["justify-center", "justify-content", "center"],
      ["justify-even", "justify-content", "space-evenly"],
      ["justify-between", "justify-content", "space-between"],
      ["justify-around", "justify-content", "space-around"],
      ["justify-start", "justify-content", "flex-start"],
      ["justify-end", "justify-content", "flex-end"],
      ["align-center", "align-items", "center"],
      ["align-start", "align-items", "flex-start"],
      ["align-end", "align-items", "flex-end"],
      ["align-stretch", "align-items", "stretch"],
      ["mx-auto", "margin", "auto", "horizontal"],
      ["my-auto", "margin", "auto", "vertical"],
      ["px-auto", "padding", "auto", "horizontal"],
      ["py-auto", "padding", "auto", "vertical"],
      ["ms-auto", "margin-left", "auto"],
      ["me-auto", "margin-right", "auto"],
      ["ps-auto", "padding-left", "auto"],
      ["pe-auto", "padding-right", "auto"],
      ["flex-col", "flex-direction", "column"],
      ["col-reverse", "flex-direction", "column-reverse"],
      ["flex-row", "flex-direction", "row"],
      ["row-reverse", "flex-direction", "row-reverse"],
      ["wrap", "flex-wrap", "wrap"],
      ["wrap-reverse", "flex-wrap", "wrap-reverse"],
      ["nowrap", "flex-wrap", "nowrap"],
      ["pointer", "cursor", "pointer"],
      ["decoration-none", "text-decoration", "none"],
      ["decimal", "list-style", "decimal"],
      ["style-none", "list-style", "none"],
      ["disc", "list-style", "disc"],
      ["lower-roman", "list-style", "lower-roman"],
      ["upper-roman", "list-style", "upper-roman"],
      ["text-upper", "text-transform", "uppercase"],
      ["text-lower", "text-transform", "lowercase"],
      ["capital", "text-transform", "capitalize"],
      ["thin", "font-weight", "100"],
      ["lighter", "font-weight", "200"],
      ["light", "font-weight", "300"],
      ["normal", "font-weight", "400"],
      ["medium", "font-weight", "500"],
      ["semi-bold", "font-weight", "600"],
      ["bold", "font-weight", "700"],
      ["bolder", "font-weight", "800"],
      ["black", "font-weight", "900"],
      ["w-max", "width", "max-content"],
      ["w-min", "width", "min-content"],
      ["w-auto", "width", "auto"],
      ["h-auto", "height", "auto"],
      ["h-max", "height", "max-content"],
      ["h-min", "height", "min-content"],
      ["radius-100", "border-radius", "100%"],
      ["radius-50", "border-radius", "50%"],
      ["circle", "border-radius", "99999px"],
      ["color-inherit", "color", "inherit"],
      ["text-white", "color", "white"],
      ["text-black", "color", "black"],
      ["text-center", "text-align", "center"],
      ["transition-linear", "transition-timing-function", "linear"],
      ["transition-ease", "transition-timing-function", "ease"],
      ["transition-ease-in", "transition-timing-function", "ease-in"],
      ["transition-ease-out", "transition-timing-function", "ease-out"],
      ["transition-ease-in-out", "transition-timing-function", "ease-in-out"],
      ["transition-100", "transition-duration", "100ms"],
      ["transition-150", "transition-duration", "150ms"],
      ["transition-200", "transition-duration", "200ms"],
      ["transition-250", "transition-duration", "250ms"],
      ["transition-300", "transition-duration", "300ms"],
      ["transition-350", "transition-duration", "350ms"],
      ["transition-400", "transition-duration", "400ms"],
      ["transition-450", "transition-duration", "450ms"],
      ["transition-500", "transition-duration", "500ms"],
      ["transition-600", "transition-duration", "600ms"],
      ["transition-700", "transition-duration", "700ms"],
      ["transition-800", "transition-duration", "80ms"],
      ["transition-900", "transition-duration", "900ms"],
      ["transition-1000", "transition-duration", "1s"],
      ["transition-2000", "transition-duration", "2s"],
      ["transition-5000", "transition-duration", "5s"],
      ["transition-all", "transition-property", "all"],
      ["transition-none", "transition-property", "none"],
      ["transform-top", "transform-origin", "top"],
      ["transform-right", "transform-origin", "right"],
      ["transform-bottom", "transform-origin", "bottom"],
      ["transform-left", "transform-origin", "left"],
      ["transform-center", "transform-origin", "center"],
      ["border-none", "border", "none"],
      ["border-unset", "border", "unset"],
      ["outline-none", "outline", "none"],
      ["outline-unset", "outline", "unset"],
      ["bg-black", "background-color", "black"],
      ["bg-white", "background-color", "white"],
      ["decoration-underline", "text-decoration", "underline"],
      ["text-left", "text-align", "left"],
      ["text-right", "text-align", "right"],
      ["relative", "position", "relative"],
      ["fixed", "position", "fixed"],
      ["absolute", "position", "absolute"],
      ["sticky", "position", "sticky"],
      ["static", "position", "static"],
      ["flow-hidden", "overflow", "hidden"],
      ["flow-auto", "overflow", "auto"],
      ["flow-visible", "overflow", "visible"],
      ["normal-space", "white-space", "normal"],
      ["nowrap-space", "white-space", "nowrap"],
      ["pre-space", "white-space", "pre"],
      ["pre-wrap", "white-space", "pre-wrap"],
      ["pre-line", "white-space", "pre-line"],
      ["break-space", "white-space", "break-space"],
      ["select-all", "user-select", "all"],
      ["select-auto", "user-select", "auto"],
      ["select-contain", "user-select", "contain"],
      ["select-none", "user-select", "none"],
      ["select-text", "user-select", "text"],
    ];

    for (i in shortcuts) {
      full_class_shortcuts.push(shortcuts[i]);
    }

    // css shortcuts for html classes
    let css_shortcuts = [
      ["p", "padding"],
      ["pt", "padding-top"],
      ["pr", "padding-right"],
      ["pb", "padding-bottom"],
      ["pl", "padding-left"],
      ["px", "padding", "horizontal"],
      ["py", "padding", "vertical"],
      ["m", "margin"],
      ["mt", "margin-top"],
      ["mr", "margin-right"],
      ["mb", "margin-bottom"],
      ["ml", "margin-left"],
      ["mx", "margin", "horizontal"],
      ["my", "margin", "vertical"],
      ["w", "width"],
      ["h", "height"],
      ["radius", "border-radius"],
      ["radius-tl", "border-top-left-radius"],
      ["radius-tr", "border-top-right-radius"],
      ["radius-bl", "border-bottom-left-radius"],
      ["radius-br", "border-bottom-right-radius"],
      ["border", "border"],
      ["b-style", "border-style"],
      ["b-width", "border-width"],
      ["b-color", "border-color"],
      ["outline", "outline"],
      ["outline-offest", "outline-offest"],
      ["outline-color", "outline-color"],
      ["outline-style", "outline-style"],
      ["outline-width", "outline-width"],
      ["box", "box-sizing"],
      ["d", "display"],
      ["align", "align-items"],
      ["justify", "justify-content"],
      ["right", "right"],
      ["top", "top"],
      ["bottom", "bottom"],
      ["left", "left"],
      ["z", "z-index"],
      ["cursor", "cursor"],
      ["transition", "transition"],
      ["pos", "position"],
      ["bg", "background"],
      ["bg-color", "background-color"],
      ["shadow", "box-shadow"],
      ["transform", "transform"],
      ["fos", "font-size"],
      ["line", "line-height"],
      ["color", "color"],
      ["opacity", "opacity"],
      ["fof", "font-family"],
      ["border-b", "border-bottom"],
      ["border-t", "border-top"],
      ["border-l", "border-left"],
      ["border-r", "border-right"],
      ["border-x", "border", "horizontal"],
      ["border-y", "border", "vertical"],
      ["bt-style", "border-top-style"],
      ["bt-width", "border-top-width"],
      ["bt-color", "border-top-color"],
      ["bb-style", "border-bottom-style"],
      ["bb-width", "border-bottom-width"],
      ["bb-color", "border-bottom-color"],
      ["bl-style", "border-left-style"],
      ["bl-width", "border-left-width"],
      ["bl-color", "border-left-color"],
      ["br-style", "border-right-style"],
      ["br-width", "border-right-width"],
      ["br-color", "border-right-color"],
      ["text", "text-align"],
      ["decoration", "text-decoration"],
      ["gap", "gap"],
      ["grow", "flex-grow"],
      ["style", "list-style"],
      ["flow", "overflow"],
      ["flow-x", "overflow-x"],
      ["flow-y", "overflow-y"],
      ["filter", "filter"],
      ["backdrop", "backdrop-filter"],
      ["bg-image", "background-image"],
      ["bg-size", "background-size"],
      ["bg-pos", "background-position"],
      ["bg-posy", "background-position-y"],
      ["bg-posx", "background-position-x"],
      ["bg-clip", "background-clip"],
      ["bg-blend", "background-blend-mode"],
      ["bg-attach", "background-attachment"],
      ["bg-rep", "background-repeat"],
      ["mix", "mix-blend-mode"],
      ["dir", "direction"],
      ["basis", "flex-basis"],
      ["shrink", "flex-shrink"],
      ["flex", "flex"],
      ["flex-dir", "flex-direction"],
      ["cols", "columns"],
      ["col-gap", "column-gap"],
      ["row-gap", "row-gap"],
      ["grid-row", "grid-template-rows"],
      ["grid-col", "grid-template-columns"],
      ["grid-area", "grid-template-area"],
      ["auto-col", "grid-template-cloumns"],
      ["auto-row", "grid-template-rows"],
      ["area", "grid-area"],
      ["max-w", "max-width"],
      ["min-w", "min-width"],
      ["max-h", "max-height"],
      ["min-h", "min-height"],
      ["transition-property", "transition-property"],
      ["transition-duration", "transition-duration"],
      ["transition-timing", "transition-timing-function"],
      ["transform-origin", "transform-origin"],
      ["gradient", "background"],
      ["blur", "backdrop-filter"],
      ["rotate", "transform"],
    ];

    let exceptions = ["gradient", "blur", "rotate"];

    // classes that don't get pixels:
    let css_excludes = [
      "d",
      "grow",
      "box",
      "align",
      "justify",
      "z",
      "cursor",
      "bg",
      "bg-color",
      "shadow",
      "transform",
      "color",
      "fof",
      "border-b",
      "border-t",
      "border-l",
      "border-r",
      "bt-style",
      "bl-style",
      "br-style",
      "bb-style",
      "bt-color",
      "br-color",
      "bb-color",
      "bl-color",
      "text",
      "decoration",
      "flow",
      "flow-x",
      "flow-y",
      "filter",
      "backdrop",
      "mix",
      "dir",
      "basis",
      "shrink",
      "flex",
      "flex-dir",
      "cols",
      "grid-row",
      "grid-col",
      "grid-area",
      "auto-col",
      "auto-row",
      "area",
      "transition-property",
      "transition-duration",
      "transition-timing",
      "transform-origin",
      "transition",
      "gradient",
      "opacity",
      "rotate",
    ];

    // adding variables to css:
    css.push(`:root {
  --combination0-0: #685884;
  --combination0-1: #9c8ab9;
  --combination0-2: #f9eaff;
  --combination0-3: #00c9a4;
  --gradient-combination0: linear-gradient(to left bottom, #685884, #72618e, #7b6a97, #8574a1, #8f7dab, #9b89b5, #a895c0, #b4a1ca, #c6b3d7, #d7c5e4, #e8d7f1, #f9eaff);
  --combination1-0: #615F64;
  --combination1-1: #685884;
  --combination1-2: #563296;
  --gradient-combination1: linear-gradient(to left bottom, #615f64, #635e6a, #645d70, #665b76, #675a7c, #665680, #655385, #644f89, #61488c, #5d4190, #5a3a93, #563296);
  --red-00: #FF0000;
  --red-200: #DB0000;
  --red-400: #B80000;
  --red-600: #960000;
  --red-800: #760000;
  --orange-00: #FF8500;
  --orange-200: #D36100;
  --orange-400: #A83F00;
  --orange-600: #801A00;
  --orange-800: #5D0000;
  --yellow-00: #FFFF00;
  --yellow-200: #C3C800;
  --yellow-400: #899400;
  --yellow-600: #556300;
  --yellow-800: #333500;
  --lightgreen-00: #9BFF00;
  --lightgreen-200: #62CB00;
  --lightgreen-400: #1D9800;
  --lightgreen-600: #006800;
  --lightgreen-800: #003A00;
  --green-00: #00FF00;
  --green-200: #00CB00;
  --green-400: #009A00;
  --green-600: #006900;
  --green-800: #003D00;
  --cyan-00: #00FFFF;
  --cyan-200: #00CACB;
  --cyan-400: #00989A;
  --cyan-600: #00686B;
  --cyan-800: #003B40;
  --lightblue-00: #009BFF;
  --lightblue-200: #007BDB;
  --lightblue-400: #005DB8;
  --lightblue-600: #004196;
  --lightblue-800: #002775;
  --blue-00: #0000FF;
  --blue-200: #0000CC;
  --blue-400: #000099;
  --blue-600: #000066;
  --blue-800: #00005E;
  --purple-800: #3E0066;
  --purple-600: #6B2F92;
  --purple-400: #985AC0;
  --purple-200: #C886F0;
  --purple-00: #F9B4FF;
  --pink-00: #FF00BC;
  --pink-200: #DB009D;
  --pink-400: #B8007F;
  --pink-600: #960062;
  --pink-800: #730047;
  --rose-00: #FF0037;
  --rose-200: #DB0020;
  --rose-400: #B80009;
  --rose-600: #950000;
  --rose-800: #750000;
  --powertik-1: #0F172A;
  --powertik-2: #1E293B;
}

*{
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  font-family: sans-serif;
}
\n`);

    // getting the body tag
    let full_document = data.slice(
      data.indexOf("<body>") + 6,
      data.indexOf("</body>")
    );

    let document_attributes = full_document; // gettinh a copy of full_document

    // getting every wanted attribute of an element
    function getAttribute(attribute, outputArray) {
      if (document_attributes.includes(`${attribute}="`)) {
        document_attributes = document_attributes.slice(
          document_attributes.indexOf(`${attribute}="`) + attribute.length + 2,
          document_attributes.length - 1
        );
        outputArray.push(
          document_attributes.slice(0, document_attributes.indexOf(`"`))
        );
        getAttribute(attribute, outputArray);
      } else {
        document_attributes = full_document;
      }
    }

    getAttribute("class", classes);

    let class_property = new Array(); // every existing class
    classes.forEach((elem) => {
      let elem_classes = elem.split(" ");
      elem_classes.forEach((element) => class_property.push(element));
    });

    class_property = [...new Set(class_property)]; // removing repeated classes

    // seperating classes that contain "-" or "-[]"
    let customClassses = new Array(); // evry class in form of x-[y]
    let preDefinedClasses = new Array(); // every class in form of abcd
    let autoClasses = new Array(); // every clas in form of x-0
    let pro_classes = {
      raw: ["dark:", "hover:"],
      developed: ["pt-dark-", "hover:"],
    };
    // add responsive classes to pro_classes
    for (i in Object.keys(responsive)) {
      pro_classes.raw.push(Object.keys(responsive)[i] + ":");
      pro_classes.developed.push(Object.keys(responsive)[i] + ":");
    }

    function seperateClasses() {
      for (i in class_property) {
        let autoReg = /[a-zA-Z]+-\d+/g; // regEx for autoClass
        let customReg = /[a-zA-Z]+-\[/g; // regEx for autoClass

        if (customReg.test(class_property[i])) {
          customClassses.push(class_property[i]); // filtering custom classe
          checkProClasses(i, customClassses); // checking for possible pro classes
        } else if (autoReg.test(class_property[i])) {
          autoClasses.push(class_property[i]); // filtering auto classes
          checkProClasses(i, autoClasses); // checking for possible pro classes
        } else {
          preDefinedClasses.push(class_property[i]); // filtering pre defined classes}
          checkProClasses(i, preDefinedClasses); // checking for possible pro classes
        }
      }
    }
    seperateClasses(); // envoking the seperateClasses function

    function checkProClasses(index, checkingArray) {
      pro_classes.raw.forEach((elem, k) => {
        if (class_property[index].includes(elem)) {
          // selecting $keyword classes

          class_property[index] = class_property[index].replace(
            elem,
            pro_classes.developed[k]
          );

          checkingArray.pop();
          checkingArray.push(class_property[index]);
        }
      });
    }

    let full_property = { allClasses: new Array() }; // every auto and custom class
    let pro_classes_index = {
      custom_auto_classes: new Array(),
      preDefinedClasses: new Array(),
    };

    // puring every auto and custom class inside full_property.allClasses and defining the types (useful for css print)
    function propertyValues() {
      for (i in autoClasses) {
        autoClasses[i] = [
          autoClasses[i].slice(0, autoClasses[i].lastIndexOf("-")),
          autoClasses[i].slice(
            autoClasses[i].lastIndexOf("-") + 1,
            autoClasses[i].length
          ),
        ];
        autoClasses[i].push("autoClass"); // defining the auto class types
        full_property.allClasses.push(autoClasses[i]);
      }
      for (i in customClassses) {
        let temp_class = customClassses[i].slice(
          0,
          customClassses[i].indexOf("]")
        );
        full_property.allClasses.push(temp_class.split("-["));
        full_property.allClasses[full_property.allClasses.length - 1].push(
          "customClass" // defining the custom class types
        );
      }
    }
    propertyValues(); // envoking the propertyValues function

    let property_name; // css property names
    let auto_size; // auto class property values
    let xy_situation = "none"; // vertical (py) or horizontal (mx) or none (w)
    let isException = new Object();
    for (i in exceptions) {
      isException[exceptions[i]] = false;
    }

    // simplifying every html class for css_base function
    function convertingClasses() {
      for (i in full_property.allClasses) {
        // clearifing if class name is gradient
        for (j in exceptions) {
          if (full_property.allClasses[i][0] == exceptions[j]) {
            isException[exceptions[j]] = true;
          } else {
            isException[exceptions[j]] = false;
          }
        }

        let temp_property_name = full_property.allClasses[i][0]; // seting a temporary name to replace "hover:" with ""
        temp_property_name = temp_property_name.replace("hover:", "");

        // moving classes to preDefined classes
        for (j in full_class_shortcuts) {
          if (
            temp_property_name + "-" + full_property.allClasses[i][1] ==
            full_class_shortcuts[j][0]
          ) {
            preDefinedClasses.push(
              full_property.allClasses[i][0] +
                "-" +
                full_property.allClasses[i][1]
            );
            full_property.allClasses.splice(i, 1);
          }
        }

        let isExcluded;
        if (!isNaN(full_property.allClasses[i][1])) {
          // selecting all auto classes
          let temp_size = full_property.allClasses[i][1];
          checkPropertyName(i); // creating property name

          for (k in css_excludes) {
            if (!isExcluded) {
              if (full_property.allClasses[i][0] == css_excludes[k]) {
                isExcluded = true;
              }
            }
          }

          if (isExcluded) {
            auto_size = temp_size;
          } else {
            auto_size = `${temp_size}px`;
          }

          if (full_property.allClasses[i][0].includes("opacity")) {
            // opacity range is from 0 to 1 and class names for it are opacity-0 to opacity-1000
            auto_size = temp_size / 1000;
          }

          css_base(i, auto_size, xy_situation); // envoking css_base function
          xy_situation = "none"; // specifying xy situation
        } else {
          // selecting all custom classes
          checkPropertyName(i); // creating property name
          css_base(i, full_property.allClasses[i][1], xy_situation); // envoking css_base function
          xy_situation = "none"; // specifying xy situation
        }
      }
    }
    convertingClasses(); // envoking convertingClasses function

    // setting property name function
    function checkPropertyName(index) {
      let isProClass = false;
      let temp_className = "";

      pro_classes.developed.forEach((elem) => {
        if (full_property.allClasses[index][0].includes(elem)) {
          full_property.allClasses[index][0] = full_property.allClasses[
            index
          ][0].replace(elem, "");
          isProClass = true;
          temp_className += elem;
        }
      });
      for (j in css_shortcuts) {
        if (css_shortcuts[j][0] == full_property.allClasses[index][0]) {
          property_name = css_shortcuts[j][1];
          if (css_shortcuts[j].length == 3) {
            xy_situation = css_shortcuts[j][2];
          }
          if (isProClass) {
            full_property.allClasses[i][0] =
              temp_className + full_property.allClasses[i][0];
          }
        }
      }
    }

    let proClass = new Array(); // indexing every pro class position for preDefined classes

    // simplifying predefined classes for css_base function
    let preDefined_value = undefined;
    function convertingPreDefinedClasses() {
      for (index in preDefinedClasses) {
        pro_classes.developed.forEach((elem, i) => {
          if (preDefinedClasses[index].includes(elem)) {
            // saving pro classes positions
            pro_classes_index.preDefinedClasses.push(
              full_property.allClasses.length
            );
            // removing keywords from pro classes
            preDefinedClasses[index] = preDefinedClasses[index].replace(
              elem,
              ""
            );
            proClass.push(i);
          }
        });

        for (i in full_class_shortcuts) {
          if (full_class_shortcuts[i][0] == preDefinedClasses[index]) {
            property_name = full_class_shortcuts[i][1];
            preDefined_value = full_class_shortcuts[i][2];
            if (full_class_shortcuts[i].length == 4) {
              xy_situation = full_class_shortcuts[i][3];
            }
          }
          if (preDefined_value != undefined) {
            // simplifying only defined classes
            full_property.allClasses.push([
              preDefinedClasses[index],
              preDefined_value,
              "preDefined",
            ]);

            css_base(
              full_property.allClasses.length - 1,
              preDefined_value,
              xy_situation
            );

            preDefined_value = new String();
            xy_situation = "none"; // setting back to default values
            preDefined_value = undefined; // setting back to default values
          }
        }
      }
    }
    convertingPreDefinedClasses();

    // creating a single css node with the values
    function css_base(i, value, xy) {
      // fixing dark-mode classes for preDefined classes
      for (j in pro_classes_index.preDefinedClasses) {
        if (i == pro_classes_index.preDefinedClasses[j]) {
          full_property.allClasses[pro_classes_index.preDefinedClasses[j]][0] =
            pro_classes.developed[proClass[proClass.length - 1]] +
            full_property.allClasses[pro_classes_index.preDefinedClasses[j]][0];
        }
      }

      let temp_name;
      switch (full_property.allClasses[i][2]) {
        case "preDefined": // reseting pre defined classes format to /[a-z-Z]
          temp_name = full_property.allClasses[i][0];
          break;
        case "autoClass": // reseting auto classes format to /[a-z-Z]+-\d+/
          full_property.allClasses[i].pop();
          temp_name = full_property.allClasses[i].join("-");
          break;
        case "customClass": // reseting custom classes format to /[a-z-Z]+-\[/
          full_property.allClasses[i].pop();
          let temp_container = full_property.allClasses[i][1];
          full_property.allClasses[i].pop();
          full_property.allClasses[i].push("-[");
          full_property.allClasses[i].push(temp_container);
          full_property.allClasses[i].push("]");
          temp_name = full_property.allClasses[i].join("");
          break;
      }

      let seperators = new Array(); // seperators position container "," and "_" and "$"
      let dollor_sign = new Array(); // dollor sign position container
      let real_seperators = {
        seperator_pos: new Array(),
        seperator_type: new Array(),
      };

      seperators.push(0); // adding a default value so the for loop starts

      let temp_value = value; // temp_value variable for crawling inside [value]'s value
      let cut_value_index = 0; // default values cut  part length
      if (isString(value) || isArray(value)) {
        if (value.includes("$")) {
          function checkforVariables() {
            if (temp_value.includes("$")) {
              // adding "$" and "_" and "," positions to [seperators] and [dollor_sign]
              dollor_sign.push(cut_value_index + temp_value.indexOf("$"));
              seperators.push(cut_value_index + temp_value.indexOf("$"));
              seperators.push(cut_value_index + temp_value.indexOf(","));
              seperators.push(cut_value_index + temp_value.indexOf("_"));

              if (temp_value.includes(",")) {
                real_seperators.seperator_type.push(",");
                real_seperators.seperator_pos.push(
                  cut_value_index + temp_value.indexOf(",")
                );
              }

              if (temp_value.includes("_")) {
                real_seperators.seperator_type.push("_");
                real_seperators.seperator_pos.push(
                  cut_value_index + temp_value.indexOf("_")
                );
              }

              // sorting the seperators array in ascending order
              seperators.sort(function (a, b) {
                return a - b;
              });

              // slicing the temp_value so we don't get reapeted results
              temp_value = temp_value.slice(
                seperators[seperators.length - 1] - cut_value_index + 1,
                temp_value.length
              );

              cut_value_index = value.length - temp_value.length; // changing the value cut length
              checkforVariables();
            }
          }
          checkforVariables(); // calling the function

          let filter_seperators = new Array(); // removing repeated children
          filter_seperators.push(0); // adding a default value so for looop starts

          // filtering [seperators] array
          for (j in seperators) {
            let isReapeted = false;
            for (k in filter_seperators) {
              if (
                seperators[j] != filter_seperators[k] &&
                seperators[j] != -1
              ) {
                isReapeted = false;
              } else {
                isReapeted = true;
              }
            }
            if (!isReapeted) {
              filter_seperators.push(seperators[j]);
            }
          }

          value = value.split("$").join("var(--"); // replacing every "$" in value with "var(--"

          // adding ")" so close the "var(--" we opened in last line
          let j_counter = 0;
          while (j_counter <= filter_seperators.length - 1) {
            for (j in dollor_sign) {
              if (dollor_sign[j] == filter_seperators[j_counter]) {
                j_counter++; // add to while counter

                // adding ")" in [value] for variables in the middle
                if (filter_seperators[j_counter] != undefined) {
                  let temp_value = value.split("");
                  for (k in real_seperators.seperator_pos) {
                    if (
                      filter_seperators[j_counter] ==
                      real_seperators.seperator_pos[k]
                    ) {
                      temp_value[real_seperators.seperator_pos[k] + 5] =
                        ")" + real_seperators.seperator_type[k];
                    }
                  }

                  value = temp_value.join("");
                } else {
                  value += ")"; // add ")" to end of [value]
                }

                j_counter--; // return while counter value
              }
            }

            j_counter++;
          }
        }

        // replacing "_" with "" in [value]
        for (j in value) {
          value = value.replace("_", " ");
        }

        value = value.split("!").join(" !important"); // replacing every "!" in value with " !important"
      }

      // changing values for gradient classes
      for (j in exceptions) {
        if (isException[exceptions[j]] == true) {
          switch (exceptions[j]) {
            case "gradient":
              value = "linear-gradient(" + value + ")";
              break;
            case "blur":
              value = "blur(" + value + ")";
              break;
            case "rotate":
              value = "rotate(" + value + "deg)";
              break;
          }
        }
      }

      pro_classes.developed.forEach((elem) => {
        if (temp_name.includes(elem)) {
          value = value.toString();
          // adding !important to pro classes
          if (!value.includes("!important")) {
            value += " !important";
          }
        }
      });

      // creating the media query responsive size in temp_size
      let temp_size;
      let temp_responsive = Object.keys(responsive);
      let isResponsive = false;

      for (j in temp_responsive) {
        if (
          temp_name.includes(temp_responsive[j] + ":") &&
          isResponsive == false
        ) {
          temp_size = responsive[temp_responsive[j]];
          temp_size = "(" + temp_size.split("+").join(") and (") + ")";
          isResponsive = true;
        } else if (isResponsive == false) {
          isResponsive = false;
        }
      }

      temp_name = replaceNonAlphanumeric(temp_name);

      if (temp_name.includes("hover\\:")) {
        // adding hover pseudo
        temp_name += ":hover";
      }

      switch (
        xy // changing output css for differnet xy_situation values
      ) {
        case "horizontal":
          pushToCSS("left");
          pushToCSS("right");
          break;
        case "vertical":
          pushToCSS("top");
          pushToCSS("bottom");
          break;
        case "none":
          if (isResponsive) {
            css.push(
              `\n@media ${temp_size} {\n\t.${temp_name} {\n\t\t${property_name}: ${value};\n\t}\n}\n`
            );
          } else {
            css.push(`\n.${temp_name} {\n\t${property_name}: ${value};\n}\n`);
          }
          break;
      }
 
      function pushToCSS(xoy) {
        if (isResponsive) {
          css.push(
            `\n@media ${temp_size} {\n\t.${temp_name} {\n\t\t${property_name}-${xoy}: ${value};\n}\n}\n`
          );
        } else {
          css.push(
            `\n.${temp_name} {\n\t${property_name}-${xoy}: ${value};\n}\n`
          );
        }
      }
    }

    // adding \\ to non-number and non-alphabetic characters for css naming policies
    function replaceNonAlphanumeric(inputString) {
      return inputString.replace(/[^a-zA-Z0-9]/g, (char) => {
        if (char != "-") {
          return "\\" + char;
        } else {
          return char;
        }
      });
    }

    // writing the css nodes into the main.css file
    function wrtieInCSS(output) {
      const cssContent = css.join("");

      // Write the CSS content to the main.css file
      fs.writeFile(cssURL, cssContent, "utf8", (err) => {
        if (err) {
          console.error(err);
        } else {
          if (output) {
            console.log(`CSS updated successfully!`);
          }
        }
      });
    }
    wrtieInCSS(false);
    wrtieInCSS(true);
  }
});
