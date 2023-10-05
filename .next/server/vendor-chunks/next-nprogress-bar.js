"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/next-nprogress-bar";
exports.ids = ["vendor-chunks/next-nprogress-bar"];
exports.modules = {

/***/ "(rsc)/./node_modules/next-nprogress-bar/dist/index.js":
/*!*******************************************************!*\
  !*** ./node_modules/next-nprogress-bar/dist/index.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nvar React = __webpack_require__(/*! react */ \"(rsc)/./node_modules/next/dist/server/future/route-modules/app-page/vendored/rsc/react.js\");\nvar NProgress = __webpack_require__(/*! nprogress */ \"(rsc)/./node_modules/nprogress/nprogress.js\");\nvar navigation = __webpack_require__(/*! next/navigation */ \"(rsc)/./node_modules/next/navigation.js\");\nvar Router = __webpack_require__(/*! next/router */ \"(rsc)/./node_modules/next/router.js\");\n/******************************************************************************\r\nCopyright (c) Microsoft Corporation.\r\n\r\nPermission to use, copy, modify, and/or distribute this software for any\r\npurpose with or without fee is hereby granted.\r\n\r\nTHE SOFTWARE IS PROVIDED \"AS IS\" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH\r\nREGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY\r\nAND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,\r\nINDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM\r\nLOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR\r\nOTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR\r\nPERFORMANCE OF THIS SOFTWARE.\r\n***************************************************************************** */ /* global Reflect, Promise */ var __assign = function() {\n    __assign = Object.assign || function __assign(t) {\n        for(var s, i = 1, n = arguments.length; i < n; i++){\n            s = arguments[i];\n            for(var p in s)if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];\n        }\n        return t;\n    };\n    return __assign.apply(this, arguments);\n};\nfunction isSameURL(target, current) {\n    var cleanTarget = target.protocol + \"//\" + target.host + target.pathname;\n    var cleanCurrent = current.protocol + \"//\" + current.host + current.pathname;\n    return cleanTarget === cleanCurrent;\n}\nvar AppProgressBar = React.memo(function(_a) {\n    var _b = _a.color, color = _b === void 0 ? \"#0A2FFF\" : _b, _c = _a.height, height = _c === void 0 ? \"2px\" : _c, options = _a.options, _d = _a.shallowRouting, shallowRouting = _d === void 0 ? false : _d, _e = _a.delay, delay = _e === void 0 ? 0 : _e, style = _a.style;\n    var styles = React.createElement(\"style\", null, style || \"\\n          #nprogress {\\n            pointer-events: none;\\n          }\\n\\n          #nprogress .bar {\\n            background: \".concat(color, \";\\n\\n            position: fixed;\\n            z-index: 1031;\\n            top: 0;\\n            left: 0;\\n\\n            width: 100%;\\n            height: \").concat(height, \";\\n          }\\n\\n          /* Fancy blur effect */\\n          #nprogress .peg {\\n            display: block;\\n            position: absolute;\\n            right: 0px;\\n            width: 100px;\\n            height: 100%;\\n            box-shadow: 0 0 10px \").concat(color, \", 0 0 5px \").concat(color, \";\\n            opacity: 1.0;\\n\\n            -webkit-transform: rotate(3deg) translate(0px, -4px);\\n                -ms-transform: rotate(3deg) translate(0px, -4px);\\n                    transform: rotate(3deg) translate(0px, -4px);\\n          }\\n\\n          /* Remove these to get rid of the spinner */\\n          #nprogress .spinner {\\n            display: block;\\n            position: fixed;\\n            z-index: 1031;\\n            top: 15px;\\n            right: 15px;\\n          }\\n\\n          #nprogress .spinner-icon {\\n            width: 18px;\\n            height: 18px;\\n            box-sizing: border-box;\\n\\n            border: solid 2px transparent;\\n            border-top-color: \").concat(color, \";\\n            border-left-color: \").concat(color, \";\\n            border-radius: 50%;\\n\\n            -webkit-animation: nprogress-spinner 400ms linear infinite;\\n                    animation: nprogress-spinner 400ms linear infinite;\\n          }\\n\\n          .nprogress-custom-parent {\\n            overflow: hidden;\\n            position: relative;\\n          }\\n\\n          .nprogress-custom-parent #nprogress .spinner,\\n          .nprogress-custom-parent #nprogress .bar {\\n            position: absolute;\\n          }\\n\\n          @-webkit-keyframes nprogress-spinner {\\n            0%   { -webkit-transform: rotate(0deg); }\\n            100% { -webkit-transform: rotate(360deg); }\\n          }\\n          @keyframes nprogress-spinner {\\n            0%   { transform: rotate(0deg); }\\n            100% { transform: rotate(360deg); }\\n          }\\n        \"));\n    NProgress.configure(options || {});\n    var pathname = navigation.usePathname();\n    var searchParams = navigation.useSearchParams();\n    React.useEffect(function() {\n        NProgress.done();\n    }, [\n        pathname,\n        searchParams\n    ]);\n    React.useEffect(function() {\n        var timer;\n        var startProgress = function() {\n            timer = setTimeout(NProgress.start, delay);\n        };\n        var stopProgress = function() {\n            clearTimeout(timer);\n            NProgress.done();\n        };\n        var handleAnchorClick = function(event) {\n            var anchorElement = event.currentTarget;\n            // Skip anchors with target=\"_blank\"\n            if (anchorElement.target === \"_blank\") return;\n            // Skip control/command+click\n            if (event.metaKey || event.ctrlKey) return;\n            var targetUrl = new URL(anchorElement.href);\n            var currentUrl = new URL(location.href);\n            if (shallowRouting && isSameURL(targetUrl, currentUrl)) return;\n            if ((targetUrl === null || targetUrl === void 0 ? void 0 : targetUrl.href) === (currentUrl === null || currentUrl === void 0 ? void 0 : currentUrl.href)) return;\n            startProgress();\n        };\n        var handleMutation = function() {\n            var anchorElements = document.querySelectorAll(\"a\");\n            // Skip anchors with target=\"_blank\" and anchors without href\n            var validAnchorELes = Array.from(anchorElements).filter(function(anchor) {\n                return anchor.href && anchor.target !== \"_blank\";\n            });\n            validAnchorELes.forEach(function(anchor) {\n                return anchor.addEventListener(\"click\", handleAnchorClick);\n            });\n        };\n        var mutationObserver = new MutationObserver(handleMutation);\n        mutationObserver.observe(document, {\n            childList: true,\n            subtree: true\n        });\n        window.history.pushState = new Proxy(window.history.pushState, {\n            apply: function(target, thisArg, argArray) {\n                stopProgress();\n                return target.apply(thisArg, argArray);\n            }\n        });\n    }, []);\n    return styles;\n}, function() {\n    return true;\n});\nfunction useRouter() {\n    var router = navigation.useRouter();\n    var pathname = navigation.usePathname();\n    function push(href, options, NProgressOptions) {\n        if ((NProgressOptions === null || NProgressOptions === void 0 ? void 0 : NProgressOptions.showProgressBar) === false) return router.push(href, options);\n        var currentUrl = new URL(pathname, location.href);\n        var targetUrl = new URL(href, location.href);\n        if (isSameURL(targetUrl, currentUrl) || href === pathname) return router.push(href, options);\n        NProgress.start();\n        return router.push(href, options);\n    }\n    function back(NProgressOptions) {\n        if ((NProgressOptions === null || NProgressOptions === void 0 ? void 0 : NProgressOptions.showProgressBar) === false) return router.back();\n        NProgress.start();\n        return router.back();\n    }\n    return __assign(__assign({}, router), {\n        push: push,\n        back: back\n    });\n}\nvar PagesProgressBar = React.memo(function(_a) {\n    var _b = _a.color, color = _b === void 0 ? \"#0A2FFF\" : _b, _c = _a.height, height = _c === void 0 ? \"2px\" : _c, options = _a.options, _d = _a.shallowRouting, shallowRouting = _d === void 0 ? false : _d, _e = _a.delay, delay = _e === void 0 ? 0 : _e, style = _a.style;\n    var styles = React.createElement(\"style\", null, style || \"\\n          #nprogress {\\n            pointer-events: none;\\n          }\\n          \\n          #nprogress .bar {\\n            background: \".concat(color, \";\\n          \\n            position: fixed;\\n            z-index: 1031;\\n            top: 0;\\n            left: 0;\\n          \\n            width: 100%;\\n            height: \").concat(height, \";\\n          }\\n          \\n          /* Fancy blur effect */\\n          #nprogress .peg {\\n            display: block;\\n            position: absolute;\\n            right: 0px;\\n            width: 100px;\\n            height: 100%;\\n            box-shadow: 0 0 10px \").concat(color, \", 0 0 5px \").concat(color, \";\\n            opacity: 1.0;\\n          \\n            -webkit-transform: rotate(3deg) translate(0px, -4px);\\n                -ms-transform: rotate(3deg) translate(0px, -4px);\\n                    transform: rotate(3deg) translate(0px, -4px);\\n          }\\n          \\n          /* Remove these to get rid of the spinner */\\n          #nprogress .spinner {\\n            display: block;\\n            position: fixed;\\n            z-index: 1031;\\n            top: 15px;\\n            right: 15px;\\n          }\\n          \\n          #nprogress .spinner-icon {\\n            width: 18px;\\n            height: 18px;\\n            box-sizing: border-box;\\n          \\n            border: solid 2px transparent;\\n            border-top-color: \").concat(color, \";\\n            border-left-color: \").concat(color, \";\\n            border-radius: 50%;\\n          \\n            -webkit-animation: nprogress-spinner 400ms linear infinite;\\n                    animation: nprogress-spinner 400ms linear infinite;\\n          }\\n          \\n          .nprogress-custom-parent {\\n            overflow: hidden;\\n            position: relative;\\n          }\\n          \\n          .nprogress-custom-parent #nprogress .spinner,\\n          .nprogress-custom-parent #nprogress .bar {\\n            position: absolute;\\n          }\\n          \\n          @-webkit-keyframes nprogress-spinner {\\n            0%   { -webkit-transform: rotate(0deg); }\\n            100% { -webkit-transform: rotate(360deg); }\\n          }\\n          @keyframes nprogress-spinner {\\n            0%   { transform: rotate(0deg); }\\n            100% { transform: rotate(360deg); }\\n          }\\n        \"));\n    NProgress.configure(options || {});\n    React.useEffect(function() {\n        var timer;\n        var startProgress = function() {\n            timer = setTimeout(NProgress.start, delay);\n        };\n        var stopProgress = function() {\n            clearTimeout(timer);\n            NProgress.done();\n        };\n        var handleRouteStart = function(url) {\n            var targetUrl = new URL(url, location.href);\n            var currentUrl = new URL(Router.route, location.href);\n            if (!shallowRouting || !isSameURL(targetUrl, currentUrl)) {\n                startProgress();\n            }\n        };\n        var handleRouteDone = function() {\n            return stopProgress();\n        };\n        Router.events.on(\"routeChangeStart\", handleRouteStart);\n        Router.events.on(\"routeChangeComplete\", handleRouteDone);\n        Router.events.on(\"routeChangeError\", handleRouteDone);\n        return function() {\n            // Make sure to remove the event handler on unmount!\n            Router.events.off(\"routeChangeStart\", handleRouteStart);\n            Router.events.off(\"routeChangeComplete\", handleRouteDone);\n            Router.events.off(\"routeChangeError\", handleRouteDone);\n        };\n    }, []);\n    return styles;\n}, function() {\n    return true;\n});\nexports.AppProgressBar = AppProgressBar;\nexports.PagesProgressBar = PagesProgressBar;\nexports.useRouter = useRouter; //# sourceMappingURL=index.js.map\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC1ucHJvZ3Jlc3MtYmFyL2Rpc3QvaW5kZXguanMiLCJtYXBwaW5ncyI6IkFBQUE7QUFFQSxJQUFJQSxRQUFRQyxtQkFBT0EsQ0FBQztBQUNwQixJQUFJQyxZQUFZRCxtQkFBT0EsQ0FBQztBQUN4QixJQUFJRSxhQUFhRixtQkFBT0EsQ0FBQztBQUN6QixJQUFJRyxTQUFTSCxtQkFBT0EsQ0FBQztBQUVyQjs7Ozs7Ozs7Ozs7Ozs4RUFhOEUsR0FDOUUsMkJBQTJCLEdBRzNCLElBQUlJLFdBQVc7SUFDWEEsV0FBV0MsT0FBT0MsTUFBTSxJQUFJLFNBQVNGLFNBQVNHLENBQUM7UUFDM0MsSUFBSyxJQUFJQyxHQUFHQyxJQUFJLEdBQUdDLElBQUlDLFVBQVVDLE1BQU0sRUFBRUgsSUFBSUMsR0FBR0QsSUFBSztZQUNqREQsSUFBSUcsU0FBUyxDQUFDRixFQUFFO1lBQ2hCLElBQUssSUFBSUksS0FBS0wsRUFBRyxJQUFJSCxPQUFPUyxTQUFTLENBQUNDLGNBQWMsQ0FBQ0MsSUFBSSxDQUFDUixHQUFHSyxJQUFJTixDQUFDLENBQUNNLEVBQUUsR0FBR0wsQ0FBQyxDQUFDSyxFQUFFO1FBQ2hGO1FBQ0EsT0FBT047SUFDWDtJQUNBLE9BQU9ILFNBQVNhLEtBQUssQ0FBQyxJQUFJLEVBQUVOO0FBQ2hDO0FBRUEsU0FBU08sVUFBVUMsTUFBTSxFQUFFQyxPQUFPO0lBQzlCLElBQUlDLGNBQWNGLE9BQU9HLFFBQVEsR0FBRyxPQUFPSCxPQUFPSSxJQUFJLEdBQUdKLE9BQU9LLFFBQVE7SUFDeEUsSUFBSUMsZUFBZUwsUUFBUUUsUUFBUSxHQUFHLE9BQU9GLFFBQVFHLElBQUksR0FBR0gsUUFBUUksUUFBUTtJQUM1RSxPQUFPSCxnQkFBZ0JJO0FBQzNCO0FBRUEsSUFBSUMsaUJBQWlCM0IsTUFBTTRCLElBQUksQ0FBQyxTQUFVQyxFQUFFO0lBQ3hDLElBQUlDLEtBQUtELEdBQUdFLEtBQUssRUFBRUEsUUFBUUQsT0FBTyxLQUFLLElB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QUNwRDlGLE9BQU8rRixNQUFNLENBQUNFLEdBQUcsQ0FBQyxvQkFBb0JOO1lBQ3RDM0YsT0FBTytGLE1BQU0sQ0FBQ0UsR0FBRyxDQUFDLHVCQUF1Qkg7WUFDekM5RixPQUFPK0YsTUFBTSxDQUFDRSxHQUFHLENBQUMsb0JBQW9CSDtRQUMxQztJQUNKLEdBQUcsRUFBRTtJQUNMLE9BQU8xRDtBQUNYLEdBQUc7SUFBYyxPQUFPO0FBQU07QUFFOUI4RCxzQkFBc0IsR0FBRzNFO0FBQ3pCMkUsd0JBQXdCLEdBQUdSO0FBQzNCUSxpQkFBaUIsR0FBR2QsV0FDcEIsaUNBQWlDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZGF3cmktYXNhZGE5YS8uL25vZGVfbW9kdWxlcy9uZXh0LW5wcm9ncmVzcy1iYXIvZGlzdC9pbmRleC5qcz9kMjhiIl0sInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxudmFyIFJlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcbnZhciBOUHJvZ3Jlc3MgPSByZXF1aXJlKCducHJvZ3Jlc3MnKTtcbnZhciBuYXZpZ2F0aW9uID0gcmVxdWlyZSgnbmV4dC9uYXZpZ2F0aW9uJyk7XG52YXIgUm91dGVyID0gcmVxdWlyZSgnbmV4dC9yb3V0ZXInKTtcblxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG5Db3B5cmlnaHQgKGMpIE1pY3Jvc29mdCBDb3Jwb3JhdGlvbi5cclxuXHJcblBlcm1pc3Npb24gdG8gdXNlLCBjb3B5LCBtb2RpZnksIGFuZC9vciBkaXN0cmlidXRlIHRoaXMgc29mdHdhcmUgZm9yIGFueVxyXG5wdXJwb3NlIHdpdGggb3Igd2l0aG91dCBmZWUgaXMgaGVyZWJ5IGdyYW50ZWQuXHJcblxyXG5USEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiIEFORCBUSEUgQVVUSE9SIERJU0NMQUlNUyBBTEwgV0FSUkFOVElFUyBXSVRIXHJcblJFR0FSRCBUTyBUSElTIFNPRlRXQVJFIElOQ0xVRElORyBBTEwgSU1QTElFRCBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWVxyXG5BTkQgRklUTkVTUy4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFIEFVVEhPUiBCRSBMSUFCTEUgRk9SIEFOWSBTUEVDSUFMLCBESVJFQ1QsXHJcbklORElSRUNULCBPUiBDT05TRVFVRU5USUFMIERBTUFHRVMgT1IgQU5ZIERBTUFHRVMgV0hBVFNPRVZFUiBSRVNVTFRJTkcgRlJPTVxyXG5MT1NTIE9GIFVTRSwgREFUQSBPUiBQUk9GSVRTLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgTkVHTElHRU5DRSBPUlxyXG5PVEhFUiBUT1JUSU9VUyBBQ1RJT04sIEFSSVNJTkcgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgVVNFIE9SXHJcblBFUkZPUk1BTkNFIE9GIFRISVMgU09GVFdBUkUuXHJcbioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqICovXHJcbi8qIGdsb2JhbCBSZWZsZWN0LCBQcm9taXNlICovXHJcblxyXG5cclxudmFyIF9fYXNzaWduID0gZnVuY3Rpb24oKSB7XHJcbiAgICBfX2Fzc2lnbiA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gX19hc3NpZ24odCkge1xyXG4gICAgICAgIGZvciAodmFyIHMsIGkgPSAxLCBuID0gYXJndW1lbnRzLmxlbmd0aDsgaSA8IG47IGkrKykge1xyXG4gICAgICAgICAgICBzID0gYXJndW1lbnRzW2ldO1xyXG4gICAgICAgICAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkpIHRbcF0gPSBzW3BdO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdDtcclxuICAgIH07XHJcbiAgICByZXR1cm4gX19hc3NpZ24uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcclxufTtcblxuZnVuY3Rpb24gaXNTYW1lVVJMKHRhcmdldCwgY3VycmVudCkge1xuICAgIHZhciBjbGVhblRhcmdldCA9IHRhcmdldC5wcm90b2NvbCArICcvLycgKyB0YXJnZXQuaG9zdCArIHRhcmdldC5wYXRobmFtZTtcbiAgICB2YXIgY2xlYW5DdXJyZW50ID0gY3VycmVudC5wcm90b2NvbCArICcvLycgKyBjdXJyZW50Lmhvc3QgKyBjdXJyZW50LnBhdGhuYW1lO1xuICAgIHJldHVybiBjbGVhblRhcmdldCA9PT0gY2xlYW5DdXJyZW50O1xufVxuXG52YXIgQXBwUHJvZ3Jlc3NCYXIgPSBSZWFjdC5tZW1vKGZ1bmN0aW9uIChfYSkge1xuICAgIHZhciBfYiA9IF9hLmNvbG9yLCBjb2xvciA9IF9iID09PSB2b2lkIDAgPyAnIzBBMkZGRicgOiBfYiwgX2MgPSBfYS5oZWlnaHQsIGhlaWdodCA9IF9jID09PSB2b2lkIDAgPyAnMnB4JyA6IF9jLCBvcHRpb25zID0gX2Eub3B0aW9ucywgX2QgPSBfYS5zaGFsbG93Um91dGluZywgc2hhbGxvd1JvdXRpbmcgPSBfZCA9PT0gdm9pZCAwID8gZmFsc2UgOiBfZCwgX2UgPSBfYS5kZWxheSwgZGVsYXkgPSBfZSA9PT0gdm9pZCAwID8gMCA6IF9lLCBzdHlsZSA9IF9hLnN0eWxlO1xuICAgIHZhciBzdHlsZXMgPSAoUmVhY3QuY3JlYXRlRWxlbWVudChcInN0eWxlXCIsIG51bGwsIHN0eWxlIHx8XG4gICAgICAgIFwiXFxuICAgICAgICAgICNucHJvZ3Jlc3Mge1xcbiAgICAgICAgICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xcbiAgICAgICAgICB9XFxuXFxuICAgICAgICAgICNucHJvZ3Jlc3MgLmJhciB7XFxuICAgICAgICAgICAgYmFja2dyb3VuZDogXCIuY29uY2F0KGNvbG9yLCBcIjtcXG5cXG4gICAgICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgICAgICAgICAgei1pbmRleDogMTAzMTtcXG4gICAgICAgICAgICB0b3A6IDA7XFxuICAgICAgICAgICAgbGVmdDogMDtcXG5cXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcXG4gICAgICAgICAgICBoZWlnaHQ6IFwiKS5jb25jYXQoaGVpZ2h0LCBcIjtcXG4gICAgICAgICAgfVxcblxcbiAgICAgICAgICAvKiBGYW5jeSBibHVyIGVmZmVjdCAqL1xcbiAgICAgICAgICAjbnByb2dyZXNzIC5wZWcge1xcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgICAgICAgICByaWdodDogMHB4O1xcbiAgICAgICAgICAgIHdpZHRoOiAxMDBweDtcXG4gICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XFxuICAgICAgICAgICAgYm94LXNoYWRvdzogMCAwIDEwcHggXCIpLmNvbmNhdChjb2xvciwgXCIsIDAgMCA1cHggXCIpLmNvbmNhdChjb2xvciwgXCI7XFxuICAgICAgICAgICAgb3BhY2l0eTogMS4wO1xcblxcbiAgICAgICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoM2RlZykgdHJhbnNsYXRlKDBweCwgLTRweCk7XFxuICAgICAgICAgICAgICAgIC1tcy10cmFuc2Zvcm06IHJvdGF0ZSgzZGVnKSB0cmFuc2xhdGUoMHB4LCAtNHB4KTtcXG4gICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDNkZWcpIHRyYW5zbGF0ZSgwcHgsIC00cHgpO1xcbiAgICAgICAgICB9XFxuXFxuICAgICAgICAgIC8qIFJlbW92ZSB0aGVzZSB0byBnZXQgcmlkIG9mIHRoZSBzcGlubmVyICovXFxuICAgICAgICAgICNucHJvZ3Jlc3MgLnNwaW5uZXIge1xcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICAgICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgICAgICAgICB6LWluZGV4OiAxMDMxO1xcbiAgICAgICAgICAgIHRvcDogMTVweDtcXG4gICAgICAgICAgICByaWdodDogMTVweDtcXG4gICAgICAgICAgfVxcblxcbiAgICAgICAgICAjbnByb2dyZXNzIC5zcGlubmVyLWljb24ge1xcbiAgICAgICAgICAgIHdpZHRoOiAxOHB4O1xcbiAgICAgICAgICAgIGhlaWdodDogMThweDtcXG4gICAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcblxcbiAgICAgICAgICAgIGJvcmRlcjogc29saWQgMnB4IHRyYW5zcGFyZW50O1xcbiAgICAgICAgICAgIGJvcmRlci10b3AtY29sb3I6IFwiKS5jb25jYXQoY29sb3IsIFwiO1xcbiAgICAgICAgICAgIGJvcmRlci1sZWZ0LWNvbG9yOiBcIikuY29uY2F0KGNvbG9yLCBcIjtcXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxuXFxuICAgICAgICAgICAgLXdlYmtpdC1hbmltYXRpb246IG5wcm9ncmVzcy1zcGlubmVyIDQwMG1zIGxpbmVhciBpbmZpbml0ZTtcXG4gICAgICAgICAgICAgICAgICAgIGFuaW1hdGlvbjogbnByb2dyZXNzLXNwaW5uZXIgNDAwbXMgbGluZWFyIGluZmluaXRlO1xcbiAgICAgICAgICB9XFxuXFxuICAgICAgICAgIC5ucHJvZ3Jlc3MtY3VzdG9tLXBhcmVudCB7XFxuICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgICAgICAgIH1cXG5cXG4gICAgICAgICAgLm5wcm9ncmVzcy1jdXN0b20tcGFyZW50ICNucHJvZ3Jlc3MgLnNwaW5uZXIsXFxuICAgICAgICAgIC5ucHJvZ3Jlc3MtY3VzdG9tLXBhcmVudCAjbnByb2dyZXNzIC5iYXIge1xcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgICAgICAgfVxcblxcbiAgICAgICAgICBALXdlYmtpdC1rZXlmcmFtZXMgbnByb2dyZXNzLXNwaW5uZXIge1xcbiAgICAgICAgICAgIDAlICAgeyAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDBkZWcpOyB9XFxuICAgICAgICAgICAgMTAwJSB7IC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTsgfVxcbiAgICAgICAgICB9XFxuICAgICAgICAgIEBrZXlmcmFtZXMgbnByb2dyZXNzLXNwaW5uZXIge1xcbiAgICAgICAgICAgIDAlICAgeyB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTsgfVxcbiAgICAgICAgICAgIDEwMCUgeyB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpOyB9XFxuICAgICAgICAgIH1cXG4gICAgICAgIFwiKSkpO1xuICAgIE5Qcm9ncmVzcy5jb25maWd1cmUob3B0aW9ucyB8fCB7fSk7XG4gICAgdmFyIHBhdGhuYW1lID0gbmF2aWdhdGlvbi51c2VQYXRobmFtZSgpO1xuICAgIHZhciBzZWFyY2hQYXJhbXMgPSBuYXZpZ2F0aW9uLnVzZVNlYXJjaFBhcmFtcygpO1xuICAgIFJlYWN0LnVzZUVmZmVjdChmdW5jdGlvbiAoKSB7XG4gICAgICAgIE5Qcm9ncmVzcy5kb25lKCk7XG4gICAgfSwgW3BhdGhuYW1lLCBzZWFyY2hQYXJhbXNdKTtcbiAgICBSZWFjdC51c2VFZmZlY3QoZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgdGltZXI7XG4gICAgICAgIHZhciBzdGFydFByb2dyZXNzID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdGltZXIgPSBzZXRUaW1lb3V0KE5Qcm9ncmVzcy5zdGFydCwgZGVsYXkpO1xuICAgICAgICB9O1xuICAgICAgICB2YXIgc3RvcFByb2dyZXNzID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgY2xlYXJUaW1lb3V0KHRpbWVyKTtcbiAgICAgICAgICAgIE5Qcm9ncmVzcy5kb25lKCk7XG4gICAgICAgIH07XG4gICAgICAgIHZhciBoYW5kbGVBbmNob3JDbGljayA9IGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICAgICAgdmFyIGFuY2hvckVsZW1lbnQgPSBldmVudC5jdXJyZW50VGFyZ2V0O1xuICAgICAgICAgICAgLy8gU2tpcCBhbmNob3JzIHdpdGggdGFyZ2V0PVwiX2JsYW5rXCJcbiAgICAgICAgICAgIGlmIChhbmNob3JFbGVtZW50LnRhcmdldCA9PT0gJ19ibGFuaycpXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgLy8gU2tpcCBjb250cm9sL2NvbW1hbmQrY2xpY2tcbiAgICAgICAgICAgIGlmIChldmVudC5tZXRhS2V5IHx8IGV2ZW50LmN0cmxLZXkpXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgdmFyIHRhcmdldFVybCA9IG5ldyBVUkwoYW5jaG9yRWxlbWVudC5ocmVmKTtcbiAgICAgICAgICAgIHZhciBjdXJyZW50VXJsID0gbmV3IFVSTChsb2NhdGlvbi5ocmVmKTtcbiAgICAgICAgICAgIGlmIChzaGFsbG93Um91dGluZyAmJiBpc1NhbWVVUkwodGFyZ2V0VXJsLCBjdXJyZW50VXJsKSlcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICBpZiAoKHRhcmdldFVybCA9PT0gbnVsbCB8fCB0YXJnZXRVcmwgPT09IHZvaWQgMCA/IHZvaWQgMCA6IHRhcmdldFVybC5ocmVmKSA9PT0gKGN1cnJlbnRVcmwgPT09IG51bGwgfHwgY3VycmVudFVybCA9PT0gdm9pZCAwID8gdm9pZCAwIDogY3VycmVudFVybC5ocmVmKSlcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICBzdGFydFByb2dyZXNzKCk7XG4gICAgICAgIH07XG4gICAgICAgIHZhciBoYW5kbGVNdXRhdGlvbiA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciBhbmNob3JFbGVtZW50cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2EnKTtcbiAgICAgICAgICAgIC8vIFNraXAgYW5jaG9ycyB3aXRoIHRhcmdldD1cIl9ibGFua1wiIGFuZCBhbmNob3JzIHdpdGhvdXQgaHJlZlxuICAgICAgICAgICAgdmFyIHZhbGlkQW5jaG9yRUxlcyA9IEFycmF5LmZyb20oYW5jaG9yRWxlbWVudHMpLmZpbHRlcihmdW5jdGlvbiAoYW5jaG9yKSB7IHJldHVybiBhbmNob3IuaHJlZiAmJiBhbmNob3IudGFyZ2V0ICE9PSAnX2JsYW5rJzsgfSk7XG4gICAgICAgICAgICB2YWxpZEFuY2hvckVMZXMuZm9yRWFjaChmdW5jdGlvbiAoYW5jaG9yKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGFuY2hvci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGhhbmRsZUFuY2hvckNsaWNrKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9O1xuICAgICAgICB2YXIgbXV0YXRpb25PYnNlcnZlciA9IG5ldyBNdXRhdGlvbk9ic2VydmVyKGhhbmRsZU11dGF0aW9uKTtcbiAgICAgICAgbXV0YXRpb25PYnNlcnZlci5vYnNlcnZlKGRvY3VtZW50LCB7IGNoaWxkTGlzdDogdHJ1ZSwgc3VidHJlZTogdHJ1ZSB9KTtcbiAgICAgICAgd2luZG93Lmhpc3RvcnkucHVzaFN0YXRlID0gbmV3IFByb3h5KHdpbmRvdy5oaXN0b3J5LnB1c2hTdGF0ZSwge1xuICAgICAgICAgICAgYXBwbHk6IGZ1bmN0aW9uICh0YXJnZXQsIHRoaXNBcmcsIGFyZ0FycmF5KSB7XG4gICAgICAgICAgICAgICAgc3RvcFByb2dyZXNzKCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRhcmdldC5hcHBseSh0aGlzQXJnLCBhcmdBcnJheSk7XG4gICAgICAgICAgICB9LFxuICAgICAgICB9KTtcbiAgICB9LCBbXSk7XG4gICAgcmV0dXJuIHN0eWxlcztcbn0sIGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRydWU7IH0pO1xuZnVuY3Rpb24gdXNlUm91dGVyKCkge1xuICAgIHZhciByb3V0ZXIgPSBuYXZpZ2F0aW9uLnVzZVJvdXRlcigpO1xuICAgIHZhciBwYXRobmFtZSA9IG5hdmlnYXRpb24udXNlUGF0aG5hbWUoKTtcbiAgICBmdW5jdGlvbiBwdXNoKGhyZWYsIG9wdGlvbnMsIE5Qcm9ncmVzc09wdGlvbnMpIHtcbiAgICAgICAgaWYgKChOUHJvZ3Jlc3NPcHRpb25zID09PSBudWxsIHx8IE5Qcm9ncmVzc09wdGlvbnMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IE5Qcm9ncmVzc09wdGlvbnMuc2hvd1Byb2dyZXNzQmFyKSA9PT0gZmFsc2UpXG4gICAgICAgICAgICByZXR1cm4gcm91dGVyLnB1c2goaHJlZiwgb3B0aW9ucyk7XG4gICAgICAgIHZhciBjdXJyZW50VXJsID0gbmV3IFVSTChwYXRobmFtZSwgbG9jYXRpb24uaHJlZik7XG4gICAgICAgIHZhciB0YXJnZXRVcmwgPSBuZXcgVVJMKGhyZWYsIGxvY2F0aW9uLmhyZWYpO1xuICAgICAgICBpZiAoaXNTYW1lVVJMKHRhcmdldFVybCwgY3VycmVudFVybCkgfHwgaHJlZiA9PT0gcGF0aG5hbWUpXG4gICAgICAgICAgICByZXR1cm4gcm91dGVyLnB1c2goaHJlZiwgb3B0aW9ucyk7XG4gICAgICAgIE5Qcm9ncmVzcy5zdGFydCgpO1xuICAgICAgICByZXR1cm4gcm91dGVyLnB1c2goaHJlZiwgb3B0aW9ucyk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIGJhY2soTlByb2dyZXNzT3B0aW9ucykge1xuICAgICAgICBpZiAoKE5Qcm9ncmVzc09wdGlvbnMgPT09IG51bGwgfHwgTlByb2dyZXNzT3B0aW9ucyA9PT0gdm9pZCAwID8gdm9pZCAwIDogTlByb2dyZXNzT3B0aW9ucy5zaG93UHJvZ3Jlc3NCYXIpID09PSBmYWxzZSlcbiAgICAgICAgICAgIHJldHVybiByb3V0ZXIuYmFjaygpO1xuICAgICAgICBOUHJvZ3Jlc3Muc3RhcnQoKTtcbiAgICAgICAgcmV0dXJuIHJvdXRlci5iYWNrKCk7XG4gICAgfVxuICAgIHJldHVybiBfX2Fzc2lnbihfX2Fzc2lnbih7fSwgcm91dGVyKSwgeyBwdXNoOiBwdXNoLCBiYWNrOiBiYWNrIH0pO1xufVxuXG52YXIgUGFnZXNQcm9ncmVzc0JhciA9IFJlYWN0Lm1lbW8oZnVuY3Rpb24gKF9hKSB7XG4gICAgdmFyIF9iID0gX2EuY29sb3IsIGNvbG9yID0gX2IgPT09IHZvaWQgMCA/ICcjMEEyRkZGJyA6IF9iLCBfYyA9IF9hLmhlaWdodCwgaGVpZ2h0ID0gX2MgPT09IHZvaWQgMCA/ICcycHgnIDogX2MsIG9wdGlvbnMgPSBfYS5vcHRpb25zLCBfZCA9IF9hLnNoYWxsb3dSb3V0aW5nLCBzaGFsbG93Um91dGluZyA9IF9kID09PSB2b2lkIDAgPyBmYWxzZSA6IF9kLCBfZSA9IF9hLmRlbGF5LCBkZWxheSA9IF9lID09PSB2b2lkIDAgPyAwIDogX2UsIHN0eWxlID0gX2Euc3R5bGU7XG4gICAgdmFyIHN0eWxlcyA9IChSZWFjdC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIiwgbnVsbCwgc3R5bGUgfHxcbiAgICAgICAgXCJcXG4gICAgICAgICAgI25wcm9ncmVzcyB7XFxuICAgICAgICAgICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxuICAgICAgICAgIH1cXG4gICAgICAgICAgXFxuICAgICAgICAgICNucHJvZ3Jlc3MgLmJhciB7XFxuICAgICAgICAgICAgYmFja2dyb3VuZDogXCIuY29uY2F0KGNvbG9yLCBcIjtcXG4gICAgICAgICAgXFxuICAgICAgICAgICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICAgICAgICAgIHotaW5kZXg6IDEwMzE7XFxuICAgICAgICAgICAgdG9wOiAwO1xcbiAgICAgICAgICAgIGxlZnQ6IDA7XFxuICAgICAgICAgIFxcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xcbiAgICAgICAgICAgIGhlaWdodDogXCIpLmNvbmNhdChoZWlnaHQsIFwiO1xcbiAgICAgICAgICB9XFxuICAgICAgICAgIFxcbiAgICAgICAgICAvKiBGYW5jeSBibHVyIGVmZmVjdCAqL1xcbiAgICAgICAgICAjbnByb2dyZXNzIC5wZWcge1xcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgICAgICAgICByaWdodDogMHB4O1xcbiAgICAgICAgICAgIHdpZHRoOiAxMDBweDtcXG4gICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XFxuICAgICAgICAgICAgYm94LXNoYWRvdzogMCAwIDEwcHggXCIpLmNvbmNhdChjb2xvciwgXCIsIDAgMCA1cHggXCIpLmNvbmNhdChjb2xvciwgXCI7XFxuICAgICAgICAgICAgb3BhY2l0eTogMS4wO1xcbiAgICAgICAgICBcXG4gICAgICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDNkZWcpIHRyYW5zbGF0ZSgwcHgsIC00cHgpO1xcbiAgICAgICAgICAgICAgICAtbXMtdHJhbnNmb3JtOiByb3RhdGUoM2RlZykgdHJhbnNsYXRlKDBweCwgLTRweCk7XFxuICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzZGVnKSB0cmFuc2xhdGUoMHB4LCAtNHB4KTtcXG4gICAgICAgICAgfVxcbiAgICAgICAgICBcXG4gICAgICAgICAgLyogUmVtb3ZlIHRoZXNlIHRvIGdldCByaWQgb2YgdGhlIHNwaW5uZXIgKi9cXG4gICAgICAgICAgI25wcm9ncmVzcyAuc3Bpbm5lciB7XFxuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XFxuICAgICAgICAgICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICAgICAgICAgIHotaW5kZXg6IDEwMzE7XFxuICAgICAgICAgICAgdG9wOiAxNXB4O1xcbiAgICAgICAgICAgIHJpZ2h0OiAxNXB4O1xcbiAgICAgICAgICB9XFxuICAgICAgICAgIFxcbiAgICAgICAgICAjbnByb2dyZXNzIC5zcGlubmVyLWljb24ge1xcbiAgICAgICAgICAgIHdpZHRoOiAxOHB4O1xcbiAgICAgICAgICAgIGhlaWdodDogMThweDtcXG4gICAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICAgICAgICBcXG4gICAgICAgICAgICBib3JkZXI6IHNvbGlkIDJweCB0cmFuc3BhcmVudDtcXG4gICAgICAgICAgICBib3JkZXItdG9wLWNvbG9yOiBcIikuY29uY2F0KGNvbG9yLCBcIjtcXG4gICAgICAgICAgICBib3JkZXItbGVmdC1jb2xvcjogXCIpLmNvbmNhdChjb2xvciwgXCI7XFxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgICAgICAgICBcXG4gICAgICAgICAgICAtd2Via2l0LWFuaW1hdGlvbjogbnByb2dyZXNzLXNwaW5uZXIgNDAwbXMgbGluZWFyIGluZmluaXRlO1xcbiAgICAgICAgICAgICAgICAgICAgYW5pbWF0aW9uOiBucHJvZ3Jlc3Mtc3Bpbm5lciA0MDBtcyBsaW5lYXIgaW5maW5pdGU7XFxuICAgICAgICAgIH1cXG4gICAgICAgICAgXFxuICAgICAgICAgIC5ucHJvZ3Jlc3MtY3VzdG9tLXBhcmVudCB7XFxuICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgICAgICAgIH1cXG4gICAgICAgICAgXFxuICAgICAgICAgIC5ucHJvZ3Jlc3MtY3VzdG9tLXBhcmVudCAjbnByb2dyZXNzIC5zcGlubmVyLFxcbiAgICAgICAgICAubnByb2dyZXNzLWN1c3RvbS1wYXJlbnQgI25wcm9ncmVzcyAuYmFyIHtcXG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgICAgICAgIH1cXG4gICAgICAgICAgXFxuICAgICAgICAgIEAtd2Via2l0LWtleWZyYW1lcyBucHJvZ3Jlc3Mtc3Bpbm5lciB7XFxuICAgICAgICAgICAgMCUgICB7IC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7IH1cXG4gICAgICAgICAgICAxMDAlIHsgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpOyB9XFxuICAgICAgICAgIH1cXG4gICAgICAgICAgQGtleWZyYW1lcyBucHJvZ3Jlc3Mtc3Bpbm5lciB7XFxuICAgICAgICAgICAgMCUgICB7IHRyYW5zZm9ybTogcm90YXRlKDBkZWcpOyB9XFxuICAgICAgICAgICAgMTAwJSB7IHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7IH1cXG4gICAgICAgICAgfVxcbiAgICAgICAgXCIpKSk7XG4gICAgTlByb2dyZXNzLmNvbmZpZ3VyZShvcHRpb25zIHx8IHt9KTtcbiAgICBSZWFjdC51c2VFZmZlY3QoZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgdGltZXI7XG4gICAgICAgIHZhciBzdGFydFByb2dyZXNzID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdGltZXIgPSBzZXRUaW1lb3V0KE5Qcm9ncmVzcy5zdGFydCwgZGVsYXkpO1xuICAgICAgICB9O1xuICAgICAgICB2YXIgc3RvcFByb2dyZXNzID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgY2xlYXJUaW1lb3V0KHRpbWVyKTtcbiAgICAgICAgICAgIE5Qcm9ncmVzcy5kb25lKCk7XG4gICAgICAgIH07XG4gICAgICAgIHZhciBoYW5kbGVSb3V0ZVN0YXJ0ID0gZnVuY3Rpb24gKHVybCkge1xuICAgICAgICAgICAgdmFyIHRhcmdldFVybCA9IG5ldyBVUkwodXJsLCBsb2NhdGlvbi5ocmVmKTtcbiAgICAgICAgICAgIHZhciBjdXJyZW50VXJsID0gbmV3IFVSTChSb3V0ZXIucm91dGUsIGxvY2F0aW9uLmhyZWYpO1xuICAgICAgICAgICAgaWYgKCFzaGFsbG93Um91dGluZyB8fCAhaXNTYW1lVVJMKHRhcmdldFVybCwgY3VycmVudFVybCkpIHtcbiAgICAgICAgICAgICAgICBzdGFydFByb2dyZXNzKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIHZhciBoYW5kbGVSb3V0ZURvbmUgPSBmdW5jdGlvbiAoKSB7IHJldHVybiBzdG9wUHJvZ3Jlc3MoKTsgfTtcbiAgICAgICAgUm91dGVyLmV2ZW50cy5vbigncm91dGVDaGFuZ2VTdGFydCcsIGhhbmRsZVJvdXRlU3RhcnQpO1xuICAgICAgICBSb3V0ZXIuZXZlbnRzLm9uKCdyb3V0ZUNoYW5nZUNvbXBsZXRlJywgaGFuZGxlUm91dGVEb25lKTtcbiAgICAgICAgUm91dGVyLmV2ZW50cy5vbigncm91dGVDaGFuZ2VFcnJvcicsIGhhbmRsZVJvdXRlRG9uZSk7XG4gICAgICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAvLyBNYWtlIHN1cmUgdG8gcmVtb3ZlIHRoZSBldmVudCBoYW5kbGVyIG9uIHVubW91bnQhXG4gICAgICAgICAgICBSb3V0ZXIuZXZlbnRzLm9mZigncm91dGVDaGFuZ2VTdGFydCcsIGhhbmRsZVJvdXRlU3RhcnQpO1xuICAgICAgICAgICAgUm91dGVyLmV2ZW50cy5vZmYoJ3JvdXRlQ2hhbmdlQ29tcGxldGUnLCBoYW5kbGVSb3V0ZURvbmUpO1xuICAgICAgICAgICAgUm91dGVyLmV2ZW50cy5vZmYoJ3JvdXRlQ2hhbmdlRXJyb3InLCBoYW5kbGVSb3V0ZURvbmUpO1xuICAgICAgICB9O1xuICAgIH0sIFtdKTtcbiAgICByZXR1cm4gc3R5bGVzO1xufSwgZnVuY3Rpb24gKCkgeyByZXR1cm4gdHJ1ZTsgfSk7XG5cbmV4cG9ydHMuQXBwUHJvZ3Jlc3NCYXIgPSBBcHBQcm9ncmVzc0JhcjtcbmV4cG9ydHMuUGFnZXNQcm9ncmVzc0JhciA9IFBhZ2VzUHJvZ3Jlc3NCYXI7XG5leHBvcnRzLnVzZVJvdXRlciA9IHVzZVJvdXRlcjtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWluZGV4LmpzLm1hcFxuIl0sIm5hbWVzIjpbIlJlYWN0IiwicmVxdWlyZSIsIk5Qcm9ncmVzcyIsIm5hdmlnYXRpb24iLCJSb3V0ZXIiLCJfX2Fzc2lnbiIsIk9iamVjdCIsImFzc2lnbiIsInQiLCJzIiwiaSIsIm4iLCJhcmd1bWVudHMiLCJsZW5ndGgiLCJwIiwicHJvdG90eXBlIiwiaGFzT3duUHJvcGVydHkiLCJjYWxsIiwiYXBwbHkiLCJpc1NhbWVVUkwiLCJ0YXJnZXQiLCJjdXJyZW50IiwiY2xlYW5UYXJnZXQiLCJwcm90b2NvbCIsImhvc3QiLCJwYXRobmFtZSIsImNsZWFuQ3VycmVudCIsIkFwcFByb2dyZXNzQmFyIiwibWVtbyIsIl9hIiwiX2IiLCJjb2xvciIsIl9jIiwiaGVpZ2h0Iiwib3B0aW9ucyIsIl9kIiwic2hhbGxvd1JvdXRpbmciLCJfZSIsImRlbGF5Iiwic3R5bGUiLCJzdHlsZXMiLCJjcmVhdGVFbGVtZW50IiwiY29uY2F0IiwiY29uZmlndXJlIiwidXNlUGF0aG5hbWUiLCJzZWFyY2hQYXJhbXMiLCJ1c2VTZWFyY2hQYXJhbXMiLCJ1c2VFZmZlY3QiLCJkb25lIiwidGltZXIiLCJzdGFydFByb2dyZXNzIiwic2V0VGltZW91dCIsInN0YXJ0Iiwic3RvcFByb2dyZXNzIiwiY2xlYXJUaW1lb3V0IiwiaGFuZGxlQW5jaG9yQ2xpY2siLCJldmVudCIsImFuY2hvckVsZW1lbnQiLCJjdXJyZW50VGFyZ2V0IiwibWV0YUtleSIsImN0cmxLZXkiLCJ0YXJnZXRVcmwiLCJVUkwiLCJocmVmIiwiY3VycmVudFVybCIsImxvY2F0aW9uIiwiaGFuZGxlTXV0YXRpb24iLCJhbmNob3JFbGVtZW50cyIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvckFsbCIsInZhbGlkQW5jaG9yRUxlcyIsIkFycmF5IiwiZnJvbSIsImZpbHRlciIsImFuY2hvciIsImZvckVhY2giLCJhZGRFdmVudExpc3RlbmVyIiwibXV0YXRpb25PYnNlcnZlciIsIk11dGF0aW9uT2JzZXJ2ZXIiLCJvYnNlcnZlIiwiY2hpbGRMaXN0Iiwic3VidHJlZSIsIndpbmRvdyIsImhpc3RvcnkiLCJwdXNoU3RhdGUiLCJQcm94eSIsInRoaXNBcmciLCJhcmdBcnJheSIsInVzZVJvdXRlciIsInJvdXRlciIsInB1c2giLCJOUHJvZ3Jlc3NPcHRpb25zIiwic2hvd1Byb2dyZXNzQmFyIiwiYmFjayIsIlBhZ2VzUHJvZ3Jlc3NCYXIiLCJoYW5kbGVSb3V0ZVN0YXJ0IiwidXJsIiwicm91dGUiLCJoYW5kbGVSb3V0ZURvbmUiLCJldmVudHMiLCJvbiIsIm9mZiIsImV4cG9ydHMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next-nprogress-bar/dist/index.js\n");

/***/ })

};
;