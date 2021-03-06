"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var SemanticTransitionComponent = (function () {
    function SemanticTransitionComponent() {
    }
    SemanticTransitionComponent.prototype.show = function (animation) {
        jQuery(this.transition.nativeElement)
            .transition(animation || "fade out");
    };
    __decorate([
        core_1.ViewChild("transition"), 
        __metadata('design:type', core_1.ElementRef)
    ], SemanticTransitionComponent.prototype, "transition", void 0);
    SemanticTransitionComponent = __decorate([
        core_1.Component({
            changeDetection: core_1.ChangeDetectionStrategy.OnPush,
            selector: "sm-transition",
            template: "\n    <div #transition>\n        <ng-content></ng-content>\n    </div>\n    "
        }), 
        __metadata('design:paramtypes', [])
    ], SemanticTransitionComponent);
    return SemanticTransitionComponent;
}());
exports.SemanticTransitionComponent = SemanticTransitionComponent;
