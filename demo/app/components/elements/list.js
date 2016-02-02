System.register(["angular2/core", "ng-semantic/semantic", "../../services/data"], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, semantic_1, data_1;
    var ListComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (semantic_1_1) {
                semantic_1 = semantic_1_1;
            },
            function (data_1_1) {
                data_1 = data_1_1;
            }],
        execute: function() {
            ListComponent = (function () {
                function ListComponent(ds) {
                    this.ds = ds;
                    this.flatArray = ds.array("flat");
                    this.usersArray = ds.array("users");
                }
                ListComponent = __decorate([
                    core_1.Component({
                        selector: "list",
                        providers: [data_1.DataServices]
                    }),
                    core_1.View({
                        directives: [semantic_1.SEMANTIC_COMPONENTS, semantic_1.SEMANTIC_DIRECTIVES],
                        template: "\n    <div class=\"ui masthead vertical segment\">\n        <div class=\"ui container\">\n            <h1>List</h1>\n            <p>Semantic UI list element <i class=\"icon external\"></i>\n            <a href=\"http://semantic-ui.com/elements/list.html\" target=\"_blank\">Semantic UI List</a></p>\n        </div>\n    </div>\n    <div class=\"main ui container\">\n        <h4 class=\"ui header\">Demo Normal</h4>\n        <sm-list class=\"ui list\">\n            <sm-item *ngFor=\"#item of flatArray | async\" class=\"item\">{{item}}</sm-item>\n        </sm-list>\n\n        <h4 class=\"ui header\">Code</h4>\n        <div class=\"ui form\">\n            <div class=\"field\">\n                <textarea rows=\"4\" readonly class=\"code\" autocomplete=\"off\" autocorrect=\"off\" autocapitalize=\"off\" spellcheck=\"false\">\n<sm-list class=\"ui list\">\n    <sm-item *ngFor=\"#item of flatArray\" class=\"item\">{ {item} }</sm-item>\n</sm-list>\n                </textarea>\n            </div>\n        </div>\n\n        <h4 class=\"ui header\">Demo Bulleted</h4>\n        <sm-list class=\"ui list bulleted\">\n            <sm-item *ngFor=\"#item of flatArray | async\" class=\"item\">{{item}}</sm-item>\n        </sm-list>\n\n        <h4 class=\"ui header\">Code</h4>\n        <div class=\"ui form\">\n            <div class=\"field\">\n                <textarea rows=\"4\" readonly class=\"code\" autocomplete=\"off\" autocorrect=\"off\" autocapitalize=\"off\" spellcheck=\"false\">\n<sm-list class=\"ui list bulleted\">\n    <sm-item *ngFor=\"#item of flatArray\" class=\"item\">{ {item} }</sm-item>\n</sm-list>\n                </textarea>\n            </div>\n        </div>\n\n        <h4 class=\"ui header\">Demo Ordered</h4>\n        <sm-list class=\"ui list ordered\">\n            <sm-item *ngFor=\"#item of flatArray | async\" class=\"item\">{{item}}</sm-item>\n        </sm-list>\n        <h4 class=\"ui header\">Code</h4>\n        <div class=\"ui form\">\n            <div class=\"field\">\n                <textarea rows=\"4\" readonly class=\"code\" autocomplete=\"off\" autocorrect=\"off\" autocapitalize=\"off\" spellcheck=\"false\">\n<sm-list class=\"ui list ordered\">\n    <sm-item *ngFor=\"#item of flatArray\" class=\"item\">{ {item} }</sm-item>\n</sm-list>\n                </textarea>\n            </div>\n        </div>\n\n        <h4 class=\"ui header\">Demo avatar</h4>\n        <sm-list class=\"ui list\">\n            <sm-item *ngFor=\"#item of usersArray | async\" class=\"item\" [image]=\"item.avatar\" [header]=\"item.user\">{{item.date}}</sm-item>\n        </sm-list>\n        <h4 class=\"ui header\">Code</h4>\n        <div class=\"ui form\">\n            <div class=\"field\">\n                <textarea rows=\"5\" readonly class=\"code\" autocomplete=\"off\" autocorrect=\"off\" autocapitalize=\"off\" spellcheck=\"false\">\n<sm-list class=\"ui list\">\n    <sm-item *ngFor=\"#item of usersArray | async\" class=\"item\" [image]=\"item.avatar\" [header]=\"item.user\">{ {item.date} }</sm-item>\n</sm-list>\n                </textarea>\n            </div>\n        </div>\n        <div class=\"ui divider\"></div>\n        \n        <h4 class=\"ui header\">Demo avatar horizontal</h4>\n        <sm-list class=\"ui list horizontal\">\n            <sm-item *ngFor=\"#item of usersArray | async\" class=\"item\" [image]=\"item.avatar\" [header]=\"item.user\">{{item.date}}</sm-item>\n        </sm-list>\n        <div class=\"ui divider\"></div>\n        \n        <h4 class=\"ui header\">Demo avatar horizontal ordered</h4>\n        <sm-list class=\"ui list horizontal ordered\">\n            <sm-item *ngFor=\"#item of usersArray | async\" class=\"item\" [image]=\"item.avatar\" [header]=\"item.user\">{{item.date}}</sm-item>\n        </sm-list>\n        <div class=\"ui divider\"></div>\n        \n        <h4 class=\"ui header\">Demo avatar animated</h4>\n        <sm-list class=\"ui list animated\">\n            <sm-item *ngFor=\"#item of usersArray | async\" class=\"item\" [image]=\"item.avatar\" [header]=\"item.user\">{{item.date}}</sm-item>\n        </sm-list>\n\n        <br/><br/>\n        Page source: <a target=\"_blank\" href=\"https://github.com/vladotesanovic/ngSemantic/blob/master/src/app/components/elements/list.ts\">\n        https://github.com/vladotesanovic/ngSemantic/blob/master/src/app/components/elements/list.ts\n      </a>\n    </div>\n    "
                    }), 
                    __metadata('design:paramtypes', [data_1.DataServices])
                ], ListComponent);
                return ListComponent;
            })();
            exports_1("ListComponent", ListComponent);
        }
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9hcHAvY29tcG9uZW50cy9lbGVtZW50cy9saXN0LnRzIl0sIm5hbWVzIjpbIkxpc3RDb21wb25lbnQiLCJMaXN0Q29tcG9uZW50LmNvbnN0cnVjdG9yIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFJQTtnQkEyR0lBLHVCQUFtQkEsRUFBZ0JBO29CQUFoQkMsT0FBRUEsR0FBRkEsRUFBRUEsQ0FBY0E7b0JBQy9CQSxJQUFJQSxDQUFDQSxTQUFTQSxHQUFHQSxFQUFFQSxDQUFDQSxLQUFLQSxDQUFDQSxNQUFNQSxDQUFDQSxDQUFDQTtvQkFDbENBLElBQUlBLENBQUNBLFVBQVVBLEdBQUdBLEVBQUVBLENBQUNBLEtBQUtBLENBQUNBLE9BQU9BLENBQUNBLENBQUNBO2dCQUN4Q0EsQ0FBQ0E7Z0JBOUdMRDtvQkFBQ0EsZ0JBQVNBLENBQUNBO3dCQUNQQSxRQUFRQSxFQUFFQSxNQUFNQTt3QkFDaEJBLFNBQVNBLEVBQUVBLENBQUNBLG1CQUFZQSxDQUFDQTtxQkFDNUJBLENBQUNBO29CQUNEQSxXQUFJQSxDQUFDQTt3QkFDRkEsVUFBVUEsRUFBRUEsQ0FBQ0EsOEJBQW1CQSxFQUFFQSw4QkFBbUJBLENBQUNBO3dCQUN0REEsUUFBUUEsRUFBRUEsd3pJQThGVEE7cUJBQ0pBLENBQUNBOztrQ0FVREE7Z0JBQURBLG9CQUFDQTtZQUFEQSxDQUFDQSxBQS9HRCxJQStHQztZQS9HRCx5Q0ErR0MsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgVmlldyB9IGZyb20gXCJhbmd1bGFyMi9jb3JlXCI7XHJcbmltcG9ydCB7IFNFTUFOVElDX0NPTVBPTkVOVFMsIFNFTUFOVElDX0RJUkVDVElWRVMgfSBmcm9tIFwibmctc2VtYW50aWMvc2VtYW50aWNcIjtcclxuaW1wb3J0IHsgRGF0YVNlcnZpY2VzIH0gZnJvbSBcIi4uLy4uL3NlcnZpY2VzL2RhdGFcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6IFwibGlzdFwiLFxyXG4gICAgcHJvdmlkZXJzOiBbRGF0YVNlcnZpY2VzXVxyXG59KVxyXG5AVmlldyh7XHJcbiAgICBkaXJlY3RpdmVzOiBbU0VNQU5USUNfQ09NUE9ORU5UUywgU0VNQU5USUNfRElSRUNUSVZFU10sXHJcbiAgICB0ZW1wbGF0ZTogYFxyXG4gICAgPGRpdiBjbGFzcz1cInVpIG1hc3RoZWFkIHZlcnRpY2FsIHNlZ21lbnRcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwidWkgY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgIDxoMT5MaXN0PC9oMT5cclxuICAgICAgICAgICAgPHA+U2VtYW50aWMgVUkgbGlzdCBlbGVtZW50IDxpIGNsYXNzPVwiaWNvbiBleHRlcm5hbFwiPjwvaT5cclxuICAgICAgICAgICAgPGEgaHJlZj1cImh0dHA6Ly9zZW1hbnRpYy11aS5jb20vZWxlbWVudHMvbGlzdC5odG1sXCIgdGFyZ2V0PVwiX2JsYW5rXCI+U2VtYW50aWMgVUkgTGlzdDwvYT48L3A+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICAgIDxkaXYgY2xhc3M9XCJtYWluIHVpIGNvbnRhaW5lclwiPlxyXG4gICAgICAgIDxoNCBjbGFzcz1cInVpIGhlYWRlclwiPkRlbW8gTm9ybWFsPC9oND5cclxuICAgICAgICA8c20tbGlzdCBjbGFzcz1cInVpIGxpc3RcIj5cclxuICAgICAgICAgICAgPHNtLWl0ZW0gKm5nRm9yPVwiI2l0ZW0gb2YgZmxhdEFycmF5IHwgYXN5bmNcIiBjbGFzcz1cIml0ZW1cIj57e2l0ZW19fTwvc20taXRlbT5cclxuICAgICAgICA8L3NtLWxpc3Q+XHJcblxyXG4gICAgICAgIDxoNCBjbGFzcz1cInVpIGhlYWRlclwiPkNvZGU8L2g0PlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJ1aSBmb3JtXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmaWVsZFwiPlxyXG4gICAgICAgICAgICAgICAgPHRleHRhcmVhIHJvd3M9XCI0XCIgcmVhZG9ubHkgY2xhc3M9XCJjb2RlXCIgYXV0b2NvbXBsZXRlPVwib2ZmXCIgYXV0b2NvcnJlY3Q9XCJvZmZcIiBhdXRvY2FwaXRhbGl6ZT1cIm9mZlwiIHNwZWxsY2hlY2s9XCJmYWxzZVwiPlxyXG48c20tbGlzdCBjbGFzcz1cInVpIGxpc3RcIj5cclxuICAgIDxzbS1pdGVtICpuZ0Zvcj1cIiNpdGVtIG9mIGZsYXRBcnJheVwiIGNsYXNzPVwiaXRlbVwiPnsge2l0ZW19IH08L3NtLWl0ZW0+XHJcbjwvc20tbGlzdD5cclxuICAgICAgICAgICAgICAgIDwvdGV4dGFyZWE+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICA8aDQgY2xhc3M9XCJ1aSBoZWFkZXJcIj5EZW1vIEJ1bGxldGVkPC9oND5cclxuICAgICAgICA8c20tbGlzdCBjbGFzcz1cInVpIGxpc3QgYnVsbGV0ZWRcIj5cclxuICAgICAgICAgICAgPHNtLWl0ZW0gKm5nRm9yPVwiI2l0ZW0gb2YgZmxhdEFycmF5IHwgYXN5bmNcIiBjbGFzcz1cIml0ZW1cIj57e2l0ZW19fTwvc20taXRlbT5cclxuICAgICAgICA8L3NtLWxpc3Q+XHJcblxyXG4gICAgICAgIDxoNCBjbGFzcz1cInVpIGhlYWRlclwiPkNvZGU8L2g0PlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJ1aSBmb3JtXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmaWVsZFwiPlxyXG4gICAgICAgICAgICAgICAgPHRleHRhcmVhIHJvd3M9XCI0XCIgcmVhZG9ubHkgY2xhc3M9XCJjb2RlXCIgYXV0b2NvbXBsZXRlPVwib2ZmXCIgYXV0b2NvcnJlY3Q9XCJvZmZcIiBhdXRvY2FwaXRhbGl6ZT1cIm9mZlwiIHNwZWxsY2hlY2s9XCJmYWxzZVwiPlxyXG48c20tbGlzdCBjbGFzcz1cInVpIGxpc3QgYnVsbGV0ZWRcIj5cclxuICAgIDxzbS1pdGVtICpuZ0Zvcj1cIiNpdGVtIG9mIGZsYXRBcnJheVwiIGNsYXNzPVwiaXRlbVwiPnsge2l0ZW19IH08L3NtLWl0ZW0+XHJcbjwvc20tbGlzdD5cclxuICAgICAgICAgICAgICAgIDwvdGV4dGFyZWE+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICA8aDQgY2xhc3M9XCJ1aSBoZWFkZXJcIj5EZW1vIE9yZGVyZWQ8L2g0PlxyXG4gICAgICAgIDxzbS1saXN0IGNsYXNzPVwidWkgbGlzdCBvcmRlcmVkXCI+XHJcbiAgICAgICAgICAgIDxzbS1pdGVtICpuZ0Zvcj1cIiNpdGVtIG9mIGZsYXRBcnJheSB8IGFzeW5jXCIgY2xhc3M9XCJpdGVtXCI+e3tpdGVtfX08L3NtLWl0ZW0+XHJcbiAgICAgICAgPC9zbS1saXN0PlxyXG4gICAgICAgIDxoNCBjbGFzcz1cInVpIGhlYWRlclwiPkNvZGU8L2g0PlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJ1aSBmb3JtXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmaWVsZFwiPlxyXG4gICAgICAgICAgICAgICAgPHRleHRhcmVhIHJvd3M9XCI0XCIgcmVhZG9ubHkgY2xhc3M9XCJjb2RlXCIgYXV0b2NvbXBsZXRlPVwib2ZmXCIgYXV0b2NvcnJlY3Q9XCJvZmZcIiBhdXRvY2FwaXRhbGl6ZT1cIm9mZlwiIHNwZWxsY2hlY2s9XCJmYWxzZVwiPlxyXG48c20tbGlzdCBjbGFzcz1cInVpIGxpc3Qgb3JkZXJlZFwiPlxyXG4gICAgPHNtLWl0ZW0gKm5nRm9yPVwiI2l0ZW0gb2YgZmxhdEFycmF5XCIgY2xhc3M9XCJpdGVtXCI+eyB7aXRlbX0gfTwvc20taXRlbT5cclxuPC9zbS1saXN0PlxyXG4gICAgICAgICAgICAgICAgPC90ZXh0YXJlYT5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgIDxoNCBjbGFzcz1cInVpIGhlYWRlclwiPkRlbW8gYXZhdGFyPC9oND5cclxuICAgICAgICA8c20tbGlzdCBjbGFzcz1cInVpIGxpc3RcIj5cclxuICAgICAgICAgICAgPHNtLWl0ZW0gKm5nRm9yPVwiI2l0ZW0gb2YgdXNlcnNBcnJheSB8IGFzeW5jXCIgY2xhc3M9XCJpdGVtXCIgW2ltYWdlXT1cIml0ZW0uYXZhdGFyXCIgW2hlYWRlcl09XCJpdGVtLnVzZXJcIj57e2l0ZW0uZGF0ZX19PC9zbS1pdGVtPlxyXG4gICAgICAgIDwvc20tbGlzdD5cclxuICAgICAgICA8aDQgY2xhc3M9XCJ1aSBoZWFkZXJcIj5Db2RlPC9oND5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwidWkgZm9ybVwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZmllbGRcIj5cclxuICAgICAgICAgICAgICAgIDx0ZXh0YXJlYSByb3dzPVwiNVwiIHJlYWRvbmx5IGNsYXNzPVwiY29kZVwiIGF1dG9jb21wbGV0ZT1cIm9mZlwiIGF1dG9jb3JyZWN0PVwib2ZmXCIgYXV0b2NhcGl0YWxpemU9XCJvZmZcIiBzcGVsbGNoZWNrPVwiZmFsc2VcIj5cclxuPHNtLWxpc3QgY2xhc3M9XCJ1aSBsaXN0XCI+XHJcbiAgICA8c20taXRlbSAqbmdGb3I9XCIjaXRlbSBvZiB1c2Vyc0FycmF5IHwgYXN5bmNcIiBjbGFzcz1cIml0ZW1cIiBbaW1hZ2VdPVwiaXRlbS5hdmF0YXJcIiBbaGVhZGVyXT1cIml0ZW0udXNlclwiPnsge2l0ZW0uZGF0ZX0gfTwvc20taXRlbT5cclxuPC9zbS1saXN0PlxyXG4gICAgICAgICAgICAgICAgPC90ZXh0YXJlYT5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cInVpIGRpdmlkZXJcIj48L2Rpdj5cclxuICAgICAgICBcclxuICAgICAgICA8aDQgY2xhc3M9XCJ1aSBoZWFkZXJcIj5EZW1vIGF2YXRhciBob3Jpem9udGFsPC9oND5cclxuICAgICAgICA8c20tbGlzdCBjbGFzcz1cInVpIGxpc3QgaG9yaXpvbnRhbFwiPlxyXG4gICAgICAgICAgICA8c20taXRlbSAqbmdGb3I9XCIjaXRlbSBvZiB1c2Vyc0FycmF5IHwgYXN5bmNcIiBjbGFzcz1cIml0ZW1cIiBbaW1hZ2VdPVwiaXRlbS5hdmF0YXJcIiBbaGVhZGVyXT1cIml0ZW0udXNlclwiPnt7aXRlbS5kYXRlfX08L3NtLWl0ZW0+XHJcbiAgICAgICAgPC9zbS1saXN0PlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJ1aSBkaXZpZGVyXCI+PC9kaXY+XHJcbiAgICAgICAgXHJcbiAgICAgICAgPGg0IGNsYXNzPVwidWkgaGVhZGVyXCI+RGVtbyBhdmF0YXIgaG9yaXpvbnRhbCBvcmRlcmVkPC9oND5cclxuICAgICAgICA8c20tbGlzdCBjbGFzcz1cInVpIGxpc3QgaG9yaXpvbnRhbCBvcmRlcmVkXCI+XHJcbiAgICAgICAgICAgIDxzbS1pdGVtICpuZ0Zvcj1cIiNpdGVtIG9mIHVzZXJzQXJyYXkgfCBhc3luY1wiIGNsYXNzPVwiaXRlbVwiIFtpbWFnZV09XCJpdGVtLmF2YXRhclwiIFtoZWFkZXJdPVwiaXRlbS51c2VyXCI+e3tpdGVtLmRhdGV9fTwvc20taXRlbT5cclxuICAgICAgICA8L3NtLWxpc3Q+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cInVpIGRpdmlkZXJcIj48L2Rpdj5cclxuICAgICAgICBcclxuICAgICAgICA8aDQgY2xhc3M9XCJ1aSBoZWFkZXJcIj5EZW1vIGF2YXRhciBhbmltYXRlZDwvaDQ+XHJcbiAgICAgICAgPHNtLWxpc3QgY2xhc3M9XCJ1aSBsaXN0IGFuaW1hdGVkXCI+XHJcbiAgICAgICAgICAgIDxzbS1pdGVtICpuZ0Zvcj1cIiNpdGVtIG9mIHVzZXJzQXJyYXkgfCBhc3luY1wiIGNsYXNzPVwiaXRlbVwiIFtpbWFnZV09XCJpdGVtLmF2YXRhclwiIFtoZWFkZXJdPVwiaXRlbS51c2VyXCI+e3tpdGVtLmRhdGV9fTwvc20taXRlbT5cclxuICAgICAgICA8L3NtLWxpc3Q+XHJcblxyXG4gICAgICAgIDxici8+PGJyLz5cclxuICAgICAgICBQYWdlIHNvdXJjZTogPGEgdGFyZ2V0PVwiX2JsYW5rXCIgaHJlZj1cImh0dHBzOi8vZ2l0aHViLmNvbS92bGFkb3Rlc2Fub3ZpYy9uZ1NlbWFudGljL2Jsb2IvbWFzdGVyL3NyYy9hcHAvY29tcG9uZW50cy9lbGVtZW50cy9saXN0LnRzXCI+XHJcbiAgICAgICAgaHR0cHM6Ly9naXRodWIuY29tL3ZsYWRvdGVzYW5vdmljL25nU2VtYW50aWMvYmxvYi9tYXN0ZXIvc3JjL2FwcC9jb21wb25lbnRzL2VsZW1lbnRzL2xpc3QudHNcclxuICAgICAgPC9hPlxyXG4gICAgPC9kaXY+XHJcbiAgICBgXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgTGlzdENvbXBvbmVudCB7XHJcbiAgICBmbGF0QXJyYXk6IGFueTtcclxuICAgIHVzZXJzQXJyYXk6IGFueTtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihwdWJsaWMgZHM6IERhdGFTZXJ2aWNlcykge1xyXG4gICAgICAgIHRoaXMuZmxhdEFycmF5ID0gZHMuYXJyYXkoXCJmbGF0XCIpO1xyXG4gICAgICAgIHRoaXMudXNlcnNBcnJheSA9IGRzLmFycmF5KFwidXNlcnNcIik7XHJcbiAgICB9XHJcbn1cclxuIl19