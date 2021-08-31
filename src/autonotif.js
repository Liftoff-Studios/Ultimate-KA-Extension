/**


Pls dont mind. I found an easier method to do this :D
//I didn't have much time to work on this, so it doesn't do much yet

;(() => {
    //styles for notification bubble - most of these are unnecessary
    var notifStyles  = {
        "additiveSymbols": "",
        "alignContent": "normal",
        "alignItems": "stretch",
        "alignSelf": "auto",
        "alignmentBaseline": "auto",
        "all": "",
        "animation": "none 0s ease 0s 1 normal none running",
        "animationDelay": "0s",
        "animationDirection": "normal",
        "animationDuration": "0s",
        "animationFillMode": "none",
        "animationIterationCount": "1",
        "animationName": "none",
        "animationPlayState": "running",
        "animationTimingFunction": "ease",
        "appearance": "none",
        "ascentOverride": "",
        "aspectRatio": "auto",
        "backdropFilter": "none",
        "backfaceVisibility": "visible",
        "background": "rgb(24, 101, 242) none repeat scroll 0% 0% / auto padding-box border-box",
        "backgroundAttachment": "scroll",
        "backgroundBlendMode": "normal",
        "backgroundClip": "border-box",
        "backgroundColor": "rgb(24, 101, 242)",
        "backgroundImage": "none",
        "backgroundOrigin": "padding-box",
        "backgroundPosition": "0% 0%",
        "backgroundPositionX": "0%",
        "backgroundPositionY": "0%",
        "backgroundRepeat": "repeat",
        "backgroundRepeatX": "",
        "backgroundRepeatY": "",
        "backgroundSize": "auto",
        "baselineShift": "0px",
        "blockSize": "16px",
        "border": "0px solid rgb(24, 101, 242)",
        "borderBlock": "0px solid rgb(24, 101, 242)",
        "borderBlockColor": "rgb(24, 101, 242)",
        "borderBlockEnd": "0px solid rgb(24, 101, 242)",
        "borderBlockEndColor": "rgb(24, 101, 242)",
        "borderBlockEndStyle": "solid",
        "borderBlockEndWidth": "0px",
        "borderBlockStart": "0px solid rgb(24, 101, 242)",
        "borderBlockStartColor": "rgb(24, 101, 242)",
        "borderBlockStartStyle": "solid",
        "borderBlockStartWidth": "0px",
        "borderBlockStyle": "solid",
        "borderBlockWidth": "0px",
        "borderBottom": "0px solid rgb(24, 101, 242)",
        "borderBottomColor": "rgb(24, 101, 242)",
        "borderBottomLeftRadius": "50%",
        "borderBottomRightRadius": "50%",
        "borderBottomStyle": "solid",
        "borderBottomWidth": "0px",
        "borderCollapse": "separate",
        "borderColor": "rgb(24, 101, 242)",
        "borderEndEndRadius": "50%",
        "borderEndStartRadius": "50%",
        "borderImage": "none",
        "borderImageOutset": "0",
        "borderImageRepeat": "stretch",
        "borderImageSlice": "100%",
        "borderImageSource": "none",
        "borderImageWidth": "1",
        "borderInline": "0px solid rgb(24, 101, 242)",
        "borderInlineColor": "rgb(24, 101, 242)",
        "borderInlineEnd": "0px solid rgb(24, 101, 242)",
        "borderInlineEndColor": "rgb(24, 101, 242)",
        "borderInlineEndStyle": "solid",
        "borderInlineEndWidth": "0px",
        "borderInlineStart": "0px solid rgb(24, 101, 242)",
        "borderInlineStartColor": "rgb(24, 101, 242)",
        "borderInlineStartStyle": "solid",
        "borderInlineStartWidth": "0px",
        "borderInlineStyle": "solid",
        "borderInlineWidth": "0px",
        "borderLeft": "0px solid rgb(24, 101, 242)",
        "borderLeftColor": "rgb(24, 101, 242)",
        "borderLeftStyle": "solid",
        "borderLeftWidth": "0px",
        "borderRadius": "50%",
        "borderRight": "0px solid rgb(24, 101, 242)",
        "borderRightColor": "rgb(24, 101, 242)",
        "borderRightStyle": "solid",
        "borderRightWidth": "0px",
        "borderSpacing": "0px 0px",
        "borderStartEndRadius": "50%",
        "borderStartStartRadius": "50%",
        "borderStyle": "solid",
        "borderTop": "0px solid rgb(24, 101, 242)",
        "borderTopColor": "rgb(24, 101, 242)",
        "borderTopLeftRadius": "50%",
        "borderTopRightRadius": "50%",
        "borderTopStyle": "solid",
        "borderTopWidth": "0px",
        "borderWidth": "0px",
        "bottom": "11px",
        "boxShadow": "none",
        "boxSizing": "border-box",
        "breakAfter": "auto",
        "breakBefore": "auto",
        "breakInside": "auto",
        "bufferedRendering": "auto",
        "captionSide": "top",
        "caretColor": "rgb(24, 101, 242)",
        "clear": "none",
        "clip": "auto",
        "clipPath": "none",
        "clipRule": "nonzero",
        "color": "rgb(24, 101, 242)",
        "colorInterpolation": "srgb",
        "colorInterpolationFilters": "linearrgb",
        "colorRendering": "auto",
        "colorScheme": "normal",
        "columnCount": "auto",
        "columnFill": "balance",
        "columnGap": "normal",
        "columnRule": "0px none rgb(24, 101, 242)",
        "columnRuleColor": "rgb(24, 101, 242)",
        "columnRuleStyle": "none",
        "columnRuleWidth": "0px",
        "columnSpan": "none",
        "columnWidth": "auto",
        "columns": "auto auto",
        "contain": "none",
        "containIntrinsicSize": "auto",
        "content": "normal",
        "contentVisibility": "visible",
        "counterIncrement": "none",
        "counterReset": "none",
        "counterSet": "none",
        "cursor": "pointer",
        "cx": "0px",
        "cy": "0px",
        "d": "none",
        "descentOverride": "",
        "direction": "ltr",
        "display": "flex",
        "dominantBaseline": "auto",
        "emptyCells": "show",
        "fallback": "",
        "fill": "rgb(0, 0, 0)",
        "fillOpacity": "1",
        "fillRule": "nonzero",
        "filter": "none",
        "flex": "0 1 auto",
        "flexBasis": "auto",
        "flexDirection": "column",
        "flexFlow": "column nowrap",
        "flexGrow": "0",
        "flexShrink": "1",
        "flexWrap": "nowrap",
        "float": "none",
        "floodColor": "rgb(0, 0, 0)",
        "floodOpacity": "1",
        "font": "700 16px / 20px Lato, \"Noto Sans\", Helvetica, Corbel, sans-serif, Helvetica, Corbel, sans-serif",
        "fontDisplay": "",
        "fontFamily": "Lato, \"Noto Sans\", Helvetica, Corbel, sans-serif, Helvetica, Corbel, sans-serif",
        "fontFeatureSettings": "normal",
        "fontKerning": "auto",
        "fontOpticalSizing": "auto",
        "fontSize": "16px",
        "fontStretch": "100%",
        "fontStyle": "normal",
        "fontVariant": "normal",
        "fontVariantCaps": "normal",
        "fontVariantEastAsian": "normal",
        "fontVariantLigatures": "normal",
        "fontVariantNumeric": "normal",
        "fontVariationSettings": "normal",
        "fontWeight": "700",
        "forcedColorAdjust": "auto",
        "gap": "normal",
        "grid": "none / none / none / row / auto / auto",
        "gridArea": "auto / auto / auto / auto",
        "gridAutoColumns": "auto",
        "gridAutoFlow": "row",
        "gridAutoRows": "auto",
        "gridColumn": "auto / auto",
        "gridColumnEnd": "auto",
        "gridColumnGap": "normal",
        "gridColumnStart": "auto",
        "gridGap": "normal normal",
        "gridRow": "auto / auto",
        "gridRowEnd": "auto",
        "gridRowGap": "normal",
        "gridRowStart": "auto",
        "gridTemplate": "none / none / none",
        "gridTemplateAreas": "none",
        "gridTemplateColumns": "none",
        "gridTemplateRows": "none",
        "height": "16px",
        "hyphens": "manual",
        "imageOrientation": "from-image",
        "imageRendering": "auto",
        "inherits": "",
        "initialValue": "",
        "inlineSize": "16px",
        "inset": "-7px -10px 11px 178.719px",
        "insetBlock": "-7px 11px",
        "insetBlockEnd": "11px",
        "insetBlockStart": "-7px",
        "insetInline": "178.719px -10px",
        "insetInlineEnd": "-10px",
        "insetInlineStart": "178.719px",
        "isolation": "auto",
        "justifyContent": "normal",
        "justifyItems": "normal",
        "justifySelf": "auto",
        "left": "178.719px",
        "letterSpacing": "normal",
        "lightingColor": "rgb(255, 255, 255)",
        "lineBreak": "auto",
        "lineGapOverride": "",
        "lineHeight": "20px",
        "listStyle": "outside none disc",
        "listStyleImage": "none",
        "listStylePosition": "outside",
        "listStyleType": "disc",
        "margin": "0px",
        "marginBlock": "0px",
        "marginBlockEnd": "0px",
        "marginBlockStart": "0px",
        "marginBottom": "0px",
        "marginInline": "0px",
        "marginInlineEnd": "0px",
        "marginInlineStart": "0px",
        "marginLeft": "0px",
        "marginRight": "0px",
        "marginTop": "0px",
        "marker": "none",
        "markerEnd": "none",
        "markerMid": "none",
        "markerStart": "none",
        "mask": "none",
        "maskType": "luminance",
        "maxBlockSize": "none",
        "maxHeight": "none",
        "maxInlineSize": "none",
        "maxWidth": "none",
        "maxZoom": "",
        "minBlockSize": "0px",
        "minHeight": "0px",
        "minInlineSize": "0px",
        "minWidth": "0px",
        "minZoom": "",
        "mixBlendMode": "normal",
        "negative": "",
        "objectFit": "fill",
        "objectPosition": "50% 50%",
        "offset": "none 0px auto 0deg",
        "offsetDistance": "0px",
        "offsetPath": "none",
        "offsetRotate": "auto 0deg",
        "opacity": "1",
        "order": "0",
        "orientation": "",
        "orphans": "2",
        "outline": "rgb(24, 101, 242) none 0px",
        "outlineColor": "rgb(24, 101, 242)",
        "outlineOffset": "0px",
        "outlineStyle": "none",
        "outlineWidth": "0px",
        "overflow": "visible",
        "overflowAnchor": "auto",
        "overflowClipMargin": "0px",
        "overflowWrap": "normal",
        "overflowX": "visible",
        "overflowY": "visible",
        "overscrollBehavior": "auto",
        "overscrollBehaviorBlock": "auto",
        "overscrollBehaviorInline": "auto",
        "overscrollBehaviorX": "auto",
        "overscrollBehaviorY": "auto",
        "pad": "",
        "padding": "0px",
        "paddingBlock": "0px",
        "paddingBlockEnd": "0px",
        "paddingBlockStart": "0px",
        "paddingBottom": "0px",
        "paddingInline": "0px",
        "paddingInlineEnd": "0px",
        "paddingInlineStart": "0px",
        "paddingLeft": "0px",
        "paddingRight": "0px",
        "paddingTop": "0px",
        "page": "auto",
        "pageBreakAfter": "auto",
        "pageBreakBefore": "auto",
        "pageBreakInside": "auto",
        "pageOrientation": "",
        "paintOrder": "normal",
        "perspective": "none",
        "perspectiveOrigin": "8px 8px",
        "placeContent": "normal",
        "placeItems": "stretch normal",
        "placeSelf": "auto",
        "pointerEvents": "auto",
        "position": "absolute",
        "prefix": "",
        "quotes": "auto",
        "r": "0px",
        "range": "",
        "resize": "none",
        "right": "-10px",
        "rowGap": "normal",
        "rubyPosition": "over",
        "rx": "auto",
        "ry": "auto",
        "scrollBehavior": "auto",
        "scrollMargin": "0px",
        "scrollMarginBlock": "0px",
        "scrollMarginBlockEnd": "0px",
        "scrollMarginBlockStart": "0px",
        "scrollMarginBottom": "0px",
        "scrollMarginInline": "0px",
        "scrollMarginInlineEnd": "0px",
        "scrollMarginInlineStart": "0px",
        "scrollMarginLeft": "0px",
        "scrollMarginRight": "0px",
        "scrollMarginTop": "0px",
        "scrollPadding": "auto",
        "scrollPaddingBlock": "auto",
        "scrollPaddingBlockEnd": "auto",
        "scrollPaddingBlockStart": "auto",
        "scrollPaddingBottom": "auto",
        "scrollPaddingInline": "auto",
        "scrollPaddingInlineEnd": "auto",
        "scrollPaddingInlineStart": "auto",
        "scrollPaddingLeft": "auto",
        "scrollPaddingRight": "auto",
        "scrollPaddingTop": "auto",
        "scrollSnapAlign": "none",
        "scrollSnapStop": "normal",
        "scrollSnapType": "none",
        "shapeImageThreshold": "0",
        "shapeMargin": "0px",
        "shapeOutside": "none",
        "shapeRendering": "auto",
        "size": "",
        "sizeAdjust": "",
        "speak": "normal",
        "speakAs": "",
        "src": "",
        "stopColor": "rgb(0, 0, 0)",
        "stopOpacity": "1",
        "stroke": "none",
        "strokeDasharray": "none",
        "strokeDashoffset": "0px",
        "strokeLinecap": "butt",
        "strokeLinejoin": "miter",
        "strokeMiterlimit": "4",
        "strokeOpacity": "1",
        "strokeWidth": "1px",
        "suffix": "",
        "symbols": "",
        "syntax": "",
        "system": "",
        "tabSize": "8",
        "tableLayout": "auto",
        "textAlign": "center",
        "textAlignLast": "auto",
        "textAnchor": "start",
        "textCombineUpright": "none",
        "textDecoration": "none solid rgb(24, 101, 242)",
        "textDecorationColor": "rgb(24, 101, 242)",
        "textDecorationLine": "none",
        "textDecorationSkipInk": "auto",
        "textDecorationStyle": "solid",
        "textDecorationThickness": "auto",
        "textIndent": "0px",
        "textOrientation": "mixed",
        "textOverflow": "clip",
        "textRendering": "auto",
        "textShadow": "none",
        "textSizeAdjust": "auto",
        "textTransform": "none",
        "textUnderlineOffset": "auto",
        "textUnderlinePosition": "auto",
        "top": "-7px",
        "touchAction": "auto",
        "transform": "none",
        "transformBox": "view-box",
        "transformOrigin": "8px 8px",
        "transformStyle": "flat",
        "transition": "all 0s ease 0s",
        "transitionDelay": "0s",
        "transitionDuration": "0s",
        "transitionProperty": "all",
        "transitionTimingFunction": "ease",
        "unicodeBidi": "normal",
        "unicodeRange": "",
        "userSelect": "auto",
        "userZoom": "",
        "vectorEffect": "none",
        "verticalAlign": "baseline",
        "visibility": "visible",
        "webkitAlignContent": "normal",
        "webkitAlignItems": "stretch",
        "webkitAlignSelf": "auto",
        "webkitAnimation": "none 0s ease 0s 1 normal none running",
        "webkitAnimationDelay": "0s",
        "webkitAnimationDirection": "normal",
        "webkitAnimationDuration": "0s",
        "webkitAnimationFillMode": "none",
        "webkitAnimationIterationCount": "1",
        "webkitAnimationName": "none",
        "webkitAnimationPlayState": "running",
        "webkitAnimationTimingFunction": "ease",
        "webkitAppRegion": "none",
        "webkitAppearance": "none",
        "webkitBackfaceVisibility": "visible",
        "webkitBackgroundClip": "border-box",
        "webkitBackgroundOrigin": "padding-box",
        "webkitBackgroundSize": "auto",
        "webkitBorderAfter": "0px solid rgb(24, 101, 242)",
        "webkitBorderAfterColor": "rgb(24, 101, 242)",
        "webkitBorderAfterStyle": "solid",
        "webkitBorderAfterWidth": "0px",
        "webkitBorderBefore": "0px solid rgb(24, 101, 242)",
        "webkitBorderBeforeColor": "rgb(24, 101, 242)",
        "webkitBorderBeforeStyle": "solid",
        "webkitBorderBeforeWidth": "0px",
        "webkitBorderBottomLeftRadius": "50%",
        "webkitBorderBottomRightRadius": "50%",
        "webkitBorderEnd": "0px solid rgb(24, 101, 242)",
        "webkitBorderEndColor": "rgb(24, 101, 242)",
        "webkitBorderEndStyle": "solid",
        "webkitBorderEndWidth": "0px",
        "webkitBorderHorizontalSpacing": "0px",
        "webkitBorderImage": "none",
        "webkitBorderRadius": "50%",
        "webkitBorderStart": "0px solid rgb(24, 101, 242)",
        "webkitBorderStartColor": "rgb(24, 101, 242)",
        "webkitBorderStartStyle": "solid",
        "webkitBorderStartWidth": "0px",
        "webkitBorderTopLeftRadius": "50%",
        "webkitBorderTopRightRadius": "50%",
        "webkitBorderVerticalSpacing": "0px",
        "webkitBoxAlign": "stretch",
        "webkitBoxDecorationBreak": "slice",
        "webkitBoxDirection": "normal",
        "webkitBoxFlex": "0",
        "webkitBoxOrdinalGroup": "1",
        "webkitBoxOrient": "vertical",
        "webkitBoxPack": "start",
        "webkitBoxReflect": "none",
        "webkitBoxShadow": "none",
        "webkitBoxSizing": "border-box",
        "webkitClipPath": "none",
        "webkitColumnBreakAfter": "auto",
        "webkitColumnBreakBefore": "auto",
        "webkitColumnBreakInside": "auto",
        "webkitColumnCount": "auto",
        "webkitColumnGap": "normal",
        "webkitColumnRule": "0px none rgb(24, 101, 242)",
        "webkitColumnRuleColor": "rgb(24, 101, 242)",
        "webkitColumnRuleStyle": "none",
        "webkitColumnRuleWidth": "0px",
        "webkitColumnSpan": "none",
        "webkitColumnWidth": "auto",
        "webkitColumns": "auto auto",
        "webkitFilter": "none",
        "webkitFlex": "0 1 auto",
        "webkitFlexBasis": "auto",
        "webkitFlexDirection": "column",
        "webkitFlexFlow": "column nowrap",
        "webkitFlexGrow": "0",
        "webkitFlexShrink": "1",
        "webkitFlexWrap": "nowrap",
        "webkitFontFeatureSettings": "normal",
        "webkitFontSmoothing": "auto",
        "webkitHighlight": "none",
        "webkitHyphenateCharacter": "auto",
        "webkitJustifyContent": "normal",
        "webkitLineBreak": "auto",
        "webkitLineClamp": "none",
        "webkitLocale": "\"en\"",
        "webkitLogicalHeight": "16px",
        "webkitLogicalWidth": "16px",
        "webkitMarginAfter": "0px",
        "webkitMarginBefore": "0px",
        "webkitMarginEnd": "0px",
        "webkitMarginStart": "0px",
        "webkitMask": "",
        "webkitMaskBoxImage": "none",
        "webkitMaskBoxImageOutset": "0",
        "webkitMaskBoxImageRepeat": "stretch",
        "webkitMaskBoxImageSlice": "0 fill",
        "webkitMaskBoxImageSource": "none",
        "webkitMaskBoxImageWidth": "auto",
        "webkitMaskClip": "border-box",
        "webkitMaskComposite": "source-over",
        "webkitMaskImage": "none",
        "webkitMaskOrigin": "border-box",
        "webkitMaskPosition": "0% 0%",
        "webkitMaskPositionX": "0%",
        "webkitMaskPositionY": "0%",
        "webkitMaskRepeat": "repeat",
        "webkitMaskRepeatX": "",
        "webkitMaskRepeatY": "",
        "webkitMaskSize": "auto",
        "webkitMaxLogicalHeight": "none",
        "webkitMaxLogicalWidth": "none",
        "webkitMinLogicalHeight": "0px",
        "webkitMinLogicalWidth": "0px",
        "webkitOpacity": "1",
        "webkitOrder": "0",
        "webkitPaddingAfter": "0px",
        "webkitPaddingBefore": "0px",
        "webkitPaddingEnd": "0px",
        "webkitPaddingStart": "0px",
        "webkitPerspective": "none",
        "webkitPerspectiveOrigin": "8px 8px",
        "webkitPerspectiveOriginX": "",
        "webkitPerspectiveOriginY": "",
        "webkitPrintColorAdjust": "economy",
        "webkitRtlOrdering": "logical",
        "webkitRubyPosition": "before",
        "webkitShapeImageThreshold": "0",
        "webkitShapeMargin": "0px",
        "webkitShapeOutside": "none",
        "webkitTapHighlightColor": "rgba(0, 0, 0, 0.18)",
        "webkitTextCombine": "none",
        "webkitTextDecorationsInEffect": "none",
        "webkitTextEmphasis": "",
        "webkitTextEmphasisColor": "rgb(24, 101, 242)",
        "webkitTextEmphasisPosition": "over right",
        "webkitTextEmphasisStyle": "none",
        "webkitTextFillColor": "rgb(24, 101, 242)",
        "webkitTextOrientation": "vertical-right",
        "webkitTextSecurity": "none",
        "webkitTextSizeAdjust": "auto",
        "webkitTextStroke": "",
        "webkitTextStrokeColor": "rgb(24, 101, 242)",
        "webkitTextStrokeWidth": "0px",
        "webkitTransform": "none",
        "webkitTransformOrigin": "8px 8px",
        "webkitTransformOriginX": "",
        "webkitTransformOriginY": "",
        "webkitTransformOriginZ": "",
        "webkitTransformStyle": "flat",
        "webkitTransition": "all 0s ease 0s",
        "webkitTransitionDelay": "0s",
        "webkitTransitionDuration": "0s",
        "webkitTransitionProperty": "all",
        "webkitTransitionTimingFunction": "ease",
        "webkitUserDrag": "auto",
        "webkitUserModify": "read-only",
        "webkitUserSelect": "auto",
        "webkitWritingMode": "horizontal-tb",
        "whiteSpace": "nowrap",
        "widows": "2",
        "width": "16px",
        "willChange": "auto",
        "wordBreak": "normal",
        "wordSpacing": "0px",
        "wordWrap": "normal",
        "writingMode": "horizontal-tb",
        "x": "0px",
        "y": "0px",
        "zIndex": "0",
        "zoom": "1"
    };

    //function for creating a notification alert
    var synthNotif = () => {
        //add the alert element
        $("._4jvfagi").append(
            '<div aria-label="You have a new notification" class="_1bzguq7u"></div>'
        );

        //update the styles
        Object.keys(notifStyles).forEach((key) => {
            $("._1bzguq7u").css(key, notifStyles[key]);
        });
    };

    //checks for a notification
    //should return true if there is a unread notif
    var checkNotif = () => {
        $("._kphxfbd").click();
        $("._kphxfbd").click();

        //this is obviously incorrect: 
        return true;
    }

    //update the notifs
    var updateNotifs = () => {
        var notifs = checkNotif();

        if(notifs){
            synthNotif();
        }
    };

    window.setInterval(updateNotifs, 1000);
})();
***/



/**Another Method (Easier)*/

import fkey from "https://raw.githubusercontent.com/Liftoff-KA/Ultimate-KA-Extension/main/src/main.js";




var notifBlueButtonStylesRaw = "-webkit-box-direction: normal !important;-webkit-box-orient: vertical !important;-webkit-box-align: stretch !important;-ms-flex-align: stretch !important;-webkit-align-items: stretch !important;align-items: stretch !important;border-width: 0px !important;border-style: solid !important;-moz-box-sizing: border-box !important;box-sizing: border-box !important;-webkit-flex-direction: column !important;-ms-flex-direction: column !important;flex-direction: column !important;margin: 0px !important;padding: 0px !important;z-index: 0 !important;min-height: 0px !important;min-width: 0px !important;display: -webkit-inline-box !important;display: -moz-inline-box !important;display: -ms-inline-flexbox !important;display: -webkit-inline-flex !important;display: inline-flex !important;background-color: #1865f2 !important;border-radius: 50% !important;height: 16px !important;width: 16px !important;position: absolute !important;right: -10px !important;top: -7px !important;";

$("._4jvfagi").append("<div class='_1bzguq7u' style='"+notifBlueButtonStylesRaw+"' aria-label = 'You have a new notification'></div>");
$("._1bzguq7u").hide();


function getNotifs(){
    fetch("https://www.khanacademy.org/api/internal/user/notifications/readable?casing=camel", {
      "headers": {
        "accept": "*/*",
        "sec-fetch-mode": "cors",
        "sec-fetch-site": "same-origin",
        "x-ka-fkey": fkey
      },
      "referrer": window.location.href,
      "referrerPolicy": "strict-origin-when-cross-origin",
      "body": null,
      "method": "GET",
      "mode": "cors",
      "credentials": "include"
    }).then(response=>response.json()).then(data=>{

        for(var i = 0; i<data.notifications.length; i++){
            if(data.notifications[i].brandNew == true){
                //Code for stuff
                $("._1bzguq7u").show();
                alert("New Notification");
                fetch("https://www.khanacademy.org/api/internal/user/notifications/clear_brand_new", {
                  "headers": {
                    "accept": "*/*",
                    "sec-fetch-mode": "cors",
                    "sec-fetch-site": "same-origin",
                    "x-ka-fkey": fkey
                  },
                  "referrer": window.location.href,
                  "referrerPolicy": "strict-origin-when-cross-origin",
                  "body": null,
                  "method": "POST",
                  "mode": "cors",
                  "credentials": "include"
                });
            }
        };
    });

};
window.setInterval(getNotifs,5000);
