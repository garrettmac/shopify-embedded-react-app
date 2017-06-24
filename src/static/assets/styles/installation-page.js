import React, {StyleSheet, Dimensions, PixelRatio} from "react-native";
const {width, height, scale} = Dimensions.get("window"),
    vw = width / 100,
    vh = height / 100,
    vmin = Math.min(vw, vh),
    vmax = Math.max(vw, vh);

export default StyleSheet.create({
    "body": {
        "fontFamily": "\"ProximaNovaLight\", \"Helvetica Neue\", Helvetica, Arial, sans-serif",
        "backgroundColor": "#f2f7fa"
    },
    "login-container": {
        "textAlign": "center",
        "marginTop": 100,
        "paddingTop": 20,
        "paddingRight": 20,
        "paddingBottom": 20,
        "paddingLeft": 20
    },
    "login-container article": {
        "display": "block"
    },
    "login-container aside": {
        "display": "block"
    },
    "login-container footer": {
        "display": "block"
    },
    "login-container header": {
        "display": "block"
    },
    "login-container hgroup": {
        "display": "block"
    },
    "login-container main": {
        "display": "block"
    },
    "login-container section": {
        "display": "block"
    },
    "login-container h1": {
        "fontWeight": "300",
        "fontSize": 40,
        "marginBottom": 10,
        "display": "block",
        "WebkitMarginBefore": 0.67,
        "WebkitMarginAfter": 0.67,
        "WebkitMarginStart": 0,
        "WebkitMarginEnd": 0
    },
    "login-container subhead": {
        "fontSize": 17,
        "lineHeight": 32,
        "fontWeight": "300",
        "color": "#969A9C"
    },
    "login-container p": {
        "display": "block",
        "WebkitMarginBefore": 1,
        "WebkitMarginAfter": 1,
        "WebkitMarginStart": 0,
        "WebkitMarginEnd": 0
    },
    "login-container label": {
        "cursor": "default"
    },
    "login-container container__form": {
        "width": 400,
        "marginTop": "auto",
        "marginRight": "auto",
        "marginBottom": "auto",
        "marginLeft": "auto"
    },
    "login-container form": {
        "display": "block",
        "marginTop": 0
    },
    "login-container input": {
        "width": 300,
        "height": 50,
        "paddingTop": 10,
        "paddingRight": 10,
        "paddingBottom": 10,
        "paddingLeft": 10,
        "border": "1px solid #479CCf",
        "color": "#575757",
        "backgroundColor": "#ffffff",
        "boxSizing": "border-box",
        "borderRadius": "4px 0 0 4px",
        "fontSize": 18,
        "float": "left",
        "WebkitRtlOrdering": "logical",
        "userSelect": "text",
        "cursor": "auto",
        "WebkitAppearance": "textfield"
    },
    "login-container button": {
        "WebkitAppearance": "button",
        "textRendering": "auto",
        "letterSpacing": "normal",
        "wordSpacing": "normal",
        "textTransform": "none",
        "textIndent": 0,
        "display": "inline-block",
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "font": "11px system-ui",
        "color": "#ffffff",
        "backgroundColor": "#3793cb",
        "width": 100,
        "height": 50,
        "paddingTop": 10,
        "paddingRight": 20,
        "paddingBottom": 10,
        "paddingLeft": 20,
        "boxSizing": "border-box",
        "border": "none",
        "textShadow": "0 1px 0 #3188bc",
        "fontSize": 18,
        "cursor": "pointer",
        "borderRadius": "0 4px 4px 0",
        "float": "right"
    }
});