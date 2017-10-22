"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var highlight_js_1 = require("highlight.js");
var Highlight = (function (_super) {
    __extends(Highlight, _super);
    function Highlight() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Highlight.prototype.render = function () {
        var _this = this;
        return (React.createElement("pre", null,
            React.createElement("code", { className: "hljs", dangerouslySetInnerHTML: { __html: (function () {
                        if (_this.props.language) {
                            return highlight_js_1.highlight(_this.props.language, _this.props.children, _this.props.ignoreIllegals, _this.props.continuation).value;
                        }
                        else {
                            return highlight_js_1.highlightAuto(_this.props.children).value;
                        }
                    })() } })));
    };
    return Highlight;
}(React.Component));
exports.Highlight = Highlight;
exports.default = Highlight;
//# sourceMappingURL=index.js.map