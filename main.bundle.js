webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/about/about.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n  <div class=\"row\">\n    <div class=\"col\">\n      <div class=\"rm-container\">\n        <h1 class=\"rm-section-title\">About</h1>\n        <p>I am M.Sc. in Computer Science with a specialization in Multimedia student at University of Alberta. This\n          program\n          has subjects such <b>Image Processing, Virtual Reality, Graphics and Animation, Multimedia Communications</b>.\n        </p>\n        <p>I have a BSc in Software Engineering. In the bachelor we had subjects related with the software creation\n          process;\n          starting with the requirements specification, continuing with the design and build, and finishing with the\n          release\n          and maintenance. Always considering both sides, developer and project manager.</p>\n        <p>\n          I had work experience in Mexico doing outsourcing for 1 year at TIBCO Co in the UX department as Front-end\n          developer. I had as main duty the implementation of different designs and the creation of the most appropriate\n          interfaces. I accomplished these tasks using new technologies such Angular 4, D3, Typescript, JavaScript, Git,\n          HTML5, Bootstrap, CSS, SASS, and others.\n        </p>\n        <p>\n          Im currently seeking a internship/co-op/full-time job to apply my experience and skills to gain experience in\n          the\n          industry.\n        </p>\n      </div>\n    </div>\n    <div class=\"col\">\n      <div class=\"rm-photo\"></div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/about/about.component.styl":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ":host {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-flex: 1;\n      -ms-flex: 1;\n          flex: 1;\n}\n.row,\n.col,\n.rm-container {\n  height: 100%;\n}\n.rm-photo {\n  background-image: url(\"/assets/me-montreal.jpg\");\n  background-size: cover;\n  background-repeat: no-repeat;\n  background-position: 30% 50%;\n  width: 100%;\n  height: 100%;\n  position: relative;\n  right: -15px;\n}\n.rm-container {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  padding: 0 1rem 0 2rem;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  text-align: justify;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/about/about.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AboutComponent = /** @class */ (function () {
    function AboutComponent() {
    }
    AboutComponent.prototype.ngOnInit = function () {
    };
    AboutComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-about',
            template: __webpack_require__("../../../../../src/app/about/about.component.html"),
            styles: [__webpack_require__("../../../../../src/app/about/about.component.styl")]
        }),
        __metadata("design:paramtypes", [])
    ], AboutComponent);
    return AboutComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<app-section>\n  <app-main></app-main>\n</app-section>\n\n<app-section id=\"rm-about\">\n  <app-about></app-about>\n</app-section>\n\n<app-section id=\"rm-education\">\n  <app-education></app-education>\n</app-section>\n\n<app-section id=\"rm-portfolio\">\n  <app-portfolio></app-portfolio>\n</app-section>\n\n<app-section id=\"rm-contact\">\n  <app-contact></app-contact>\n</app-section>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.styl":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
        this.isMenuHidden = true;
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.styl")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ngx_parallax__ = __webpack_require__("../../../../ngx-parallax/dist/bundle.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ngx_parallax___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_ngx_parallax__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng2_scroll_to__ = __webpack_require__("../../../../ng2-scroll-to/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng2_scroll_to___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_ng2_scroll_to__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_routes__ = __webpack_require__("../../../../../src/app/app.routes.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__main_main_component__ = __webpack_require__("../../../../../src/app/main/main.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__section_section_component__ = __webpack_require__("../../../../../src/app/section/section.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__menu_menu_component__ = __webpack_require__("../../../../../src/app/menu/menu.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__about_about_component__ = __webpack_require__("../../../../../src/app/about/about.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__education_education_component__ = __webpack_require__("../../../../../src/app/education/education.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__portfolio_portfolio_component__ = __webpack_require__("../../../../../src/app/portfolio/portfolio.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__contact_contact_component__ = __webpack_require__("../../../../../src/app/contact/contact.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};














var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_7__main_main_component__["a" /* MainComponent */],
                __WEBPACK_IMPORTED_MODULE_8__section_section_component__["a" /* SectionComponent */],
                __WEBPACK_IMPORTED_MODULE_9__menu_menu_component__["a" /* MenuComponent */],
                __WEBPACK_IMPORTED_MODULE_10__about_about_component__["a" /* AboutComponent */],
                __WEBPACK_IMPORTED_MODULE_11__education_education_component__["a" /* EducationComponent */],
                __WEBPACK_IMPORTED_MODULE_12__portfolio_portfolio_component__["a" /* PortfolioComponent */],
                __WEBPACK_IMPORTED_MODULE_13__contact_contact_component__["a" /* ContactComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* RouterModule */].forRoot(__WEBPACK_IMPORTED_MODULE_5__app_routes__["a" /* AppRoutes */]),
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_3_ngx_parallax__["ParallaxModule"],
                __WEBPACK_IMPORTED_MODULE_4_ng2_scroll_to__["ScrollToModule"].forRoot(),
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/app.routes.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutes; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__main_main_component__ = __webpack_require__("../../../../../src/app/main/main.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__about_about_component__ = __webpack_require__("../../../../../src/app/about/about.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__education_education_component__ = __webpack_require__("../../../../../src/app/education/education.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__portfolio_portfolio_component__ = __webpack_require__("../../../../../src/app/portfolio/portfolio.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__contact_contact_component__ = __webpack_require__("../../../../../src/app/contact/contact.component.ts");





var AppRoutes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_0__main_main_component__["a" /* MainComponent */] },
    { path: 'about', component: __WEBPACK_IMPORTED_MODULE_1__about_about_component__["a" /* AboutComponent */] },
    { path: 'education', component: __WEBPACK_IMPORTED_MODULE_2__education_education_component__["a" /* EducationComponent */] },
    { path: 'portfolio', component: __WEBPACK_IMPORTED_MODULE_3__portfolio_portfolio_component__["a" /* PortfolioComponent */] },
    { path: 'contact', component: __WEBPACK_IMPORTED_MODULE_4__contact_contact_component__["a" /* ContactComponent */] },
];


/***/ }),

/***/ "../../../../../src/app/contact/contact.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"rm-image\">\n  <div class=\"rm-filter\">\n    <div class=\"container d-flex flex-column justify-content-center align-items-center\">\n      <h1 class=\"rm-section-title\">Contact information</h1>\n      <p>\n        <i class=\"fa fa-envelope\"></i> davcocom@hotmail.com\n      </p>\n      <p>\n        <i class=\"fa fa-envelope\"></i> cocombas@ualberta.ca\n      </p>\n      <p>\n        <i class=\"fa fa-phone\"></i> (+1) 780 900 5222\n      </p>\n      <p>\n        <i class=\"fa fa-phone\"></i> (+52) 999 251 4406\n      </p>\n      <p>\n        <i class=\"fa fa-linkedin-square\"></i> LinkedIn profile\n      </p>\n      <button class=\"btn rm-btn\"><i class=\"fa fa-file-pdf-o\"></i> Download PDF Version</button>\n    </div>\n  </div>\n</div>\n\n\n"

/***/ }),

/***/ "../../../../../src/app/contact/contact.component.styl":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ":host {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-flex: 1;\n      -ms-flex: 1;\n          flex: 1;\n}\n.rm-image,\n.rm-filter,\n.container {\n  height: 100%;\n  width: 100%;\n}\n.rm-image {\n  background: url(\"/assets/toronto.jpg\");\n  background-size: cover;\n}\n.rm-filter {\n  background: rgba(87,67,15,0.2);\n}\n.rm-btn {\n  border: solid 1px #000;\n  background: none;\n  border-radius: 0;\n  padding: 2em 1em;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/contact/contact.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ContactComponent = /** @class */ (function () {
    function ContactComponent() {
    }
    ContactComponent.prototype.ngOnInit = function () {
    };
    ContactComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-contact',
            template: __webpack_require__("../../../../../src/app/contact/contact.component.html"),
            styles: [__webpack_require__("../../../../../src/app/contact/contact.component.styl")]
        }),
        __metadata("design:paramtypes", [])
    ], ContactComponent);
    return ContactComponent;
}());



/***/ }),

/***/ "../../../../../src/app/education/education.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"rm-title-container\">\n  <div class=\"container\">\n    <h1 class=\"rm-section-title\">Education</h1>\n  </div>\n</div>\n<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-6 d-flex flex-column align-items-center justify-content-center\">\n      <i class=\"rm-icon rm-icon--uofa\"></i>\n      <h1 class=\"rm-title\">M.Sc. in Computer Science with a specialization in Multimedia</h1>\n    </div>\n    <div class=\"col-6\">\n      <div class=\"rm-picture rm-picture--uofa\">\n        <div class=\"rm-filter\">\n          <div class=\"rm-container\">\n            This program has subjects such Image Processing, Virtual Reality, Graphics and Animation, Multimedia\n            Communications.\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"col-6\">\n      <div class=\"rm-picture rm-picture--uady\">\n        <div class=\"rm-filter\">\n          <div class=\"rm-container\">\n            In the bachelor we had subjects related with the software creation process; starting with the requirements\n            specification, continuing with the design and build, and finishing with the release and maintenance. Always\n            considering both sides, developer and project manager.\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"col-6 d-flex flex-column align-items-center justify-content-center\">\n      <i class=\"rm-icon rm-icon--uady\"></i>\n      <h1 class=\"rm-title\">BSc in Software Engineering</h1>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/education/education.component.styl":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ":host {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-flex: 1;\n      -ms-flex: 1;\n          flex: 1;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  padding: 10% 0;\n  background: #1b2432;\n}\n.rm-title-container {\n  background: #b76d68;\n  color: #fff;\n  padding: 2rem 5rem;\n  margin-bottom: 2rem;\n}\n.rm-section-title {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  margin: 0;\n}\n.col-6 {\n  background: #fff;\n}\n.row,\n.rm-filter,\n.rm-picture {\n  height: 100%;\n}\n.rm-title {\n  font-family: 'Playfair Display', serif;\n  font-size: 1em;\n  letter-spacing: 2px;\n  text-align: center;\n  color: #393939;\n}\n.rm-icon {\n  width: 100px;\n  height: 100px;\n  border-radius: 50%;\n  border: solid 1px #eaeaea;\n  display: block;\n  margin-bottom: 2rem;\n}\n.rm-icon--uofa {\n  background: url(\"/assets/uofa.jpg\");\n  background-size: 80%;\n  background-repeat: no-repeat;\n  background-position: 50%;\n}\n.rm-icon--uady {\n  background: url(\"/assets/uady.jpg\");\n  background-size: auto 80%;\n  background-repeat: no-repeat;\n  background-position: 50%;\n}\n.rm-filter {\n  background: rgba(64,75,99,0.2);\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-transition: background 300ms ease-in-out;\n  transition: background 300ms ease-in-out;\n}\n.rm-filter .rm-container {\n  border: solid 4px #f4f4f4;\n  text-align: justify;\n  font-weight: 300;\n  letter-spacing: 1px;\n  opacity: 0;\n  margin: 5%;\n  color: #f9f9f9;\n  padding: 1em;\n}\n.rm-filter:hover {\n  background: rgba(64,75,99,0.8);\n}\n.rm-filter:hover .rm-container {\n  opacity: 1;\n}\n.rm-picture {\n  min-height: 300px;\n  -webkit-transition: background 300ms ease-in-out;\n  transition: background 300ms ease-in-out;\n}\n.rm-picture--uady {\n  background: url(\"/assets/uady-picture.jpg\") no-repeat;\n  background-size: 100% auto;\n  background-position: 50% 50%;\n  margin: 0 -15px;\n}\n.rm-picture--uofa {\n  background: url(\"/assets/uofa-picture.jpg\") no-repeat;\n  background-size: 100% auto;\n  background-position: 50% 40%;\n  margin: 0 -15px;\n}\n.rm-picture:hover {\n  background-size: 120% auto;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/education/education.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EducationComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var EducationComponent = /** @class */ (function () {
    function EducationComponent() {
    }
    EducationComponent.prototype.ngOnInit = function () {
    };
    EducationComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-education',
            template: __webpack_require__("../../../../../src/app/education/education.component.html"),
            styles: [__webpack_require__("../../../../../src/app/education/education.component.styl")]
        }),
        __metadata("design:paramtypes", [])
    ], EducationComponent);
    return EducationComponent;
}());



/***/ }),

/***/ "../../../../../src/app/main/main.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"rm-main-container\" parallax [config]=\"{initialValue: -100, ratio: .7}\">\n  <div class=\"rm-filter\">\n    <h1 class=\"rm-title\">\n      David Cocom Basto\n    </h1>\n    <h2 class=\"rm-subtitle\">\n      Software engineer\n    </h2>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/main/main.component.styl":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ":host {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-flex: 1;\n      -ms-flex: 1;\n          flex: 1;\n}\n.rm-main-container {\n  display: block;\n  width: 100%;\n  height: 100%;\n  background-image: url(\"/assets/IMG_2449.jpg\");\n  background-size: cover;\n}\n.rm-filter {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  width: 100%;\n  height: 100%;\n  background-color: rgba(64,75,99,0.5);\n}\n.rm-title {\n  font-family: 'Playfair Display', serif;\n  color: #fff;\n  text-align: center;\n  font-size: 5em;\n  text-transform: uppercase;\n  letter-spacing: 10px;\n}\n.rm-subtitle {\n  font-family: 'Oswald', sans-serif;\n  color: #e0e0e0;\n  font-size: 2em;\n  text-align: center;\n  letter-spacing: 5px;\n  text-transform: capitalize;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/main/main.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MainComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MainComponent = /** @class */ (function () {
    function MainComponent() {
    }
    MainComponent.prototype.ngOnInit = function () {
    };
    MainComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-main',
            template: __webpack_require__("../../../../../src/app/main/main.component.html"),
            styles: [__webpack_require__("../../../../../src/app/main/main.component.styl")]
        }),
        __metadata("design:paramtypes", [])
    ], MainComponent);
    return MainComponent;
}());



/***/ }),

/***/ "../../../../../src/app/menu/menu.component.html":
/***/ (function(module, exports) {

module.exports = "<ul class=\"nav rm-menu\">\n  <li class=\"nav-item\">\n    <a class=\"nav-link\" scrollTo href=\"#rm-about\">About</a>\n  </li>\n  <li class=\"nav-item\">\n    <a class=\"nav-link\" scrollTo href=\"#rm-education\">Education</a>\n  </li>\n  <li class=\"nav-item\">\n    <a class=\"nav-link\" scrollTo href=\"#rm-portfolio\">Portfolio</a>\n  </li>\n  <li class=\"nav-item\">\n    <a class=\"nav-link\" scrollTo href=\"#rm-contact\">Contact</a>\n  </li>\n</ul>\n"

/***/ }),

/***/ "../../../../../src/app/menu/menu.component.styl":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ":host {\n  background-color: rgba(0,0,0,0.85);\n  color: #fff;\n  font-family: 'Questrial', sans-serif;\n  display: block;\n  position: -webkit-sticky;\n  position: sticky;\n  top: 0;\n  z-index: 1;\n  opacity: 0.1;\n  -webkit-transition: opacity 200ms ease-in;\n  transition: opacity 200ms ease-in;\n}\n:host:hover {\n  opacity: 1;\n}\n.rm-menu {\n  height: 50px;\n  -ms-flex-pack: distribute;\n      justify-content: space-around;\n}\n.rm-menu .nav-item {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  text-align: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n}\n/*\nlist-style none\njustify-content space-between\nheight 100%\npadding 0\nmargin 0\n\n.rm-option\n  padding 3em 3em\n  text-align center\n  &:hover\n    text-decoration underline\n    cursor pointer\n    background linear-gradient(white, white, #f4f4f4)\n*/\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/menu/menu.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MenuComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MenuComponent = /** @class */ (function () {
    function MenuComponent() {
    }
    MenuComponent.prototype.ngOnInit = function () {
    };
    MenuComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-menu',
            template: __webpack_require__("../../../../../src/app/menu/menu.component.html"),
            styles: [__webpack_require__("../../../../../src/app/menu/menu.component.styl")]
        }),
        __metadata("design:paramtypes", [])
    ], MenuComponent);
    return MenuComponent;
}());



/***/ }),

/***/ "../../../../../src/app/portfolio/portfolio.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <h1 class=\"rm-section-title\">portfolio</h1>\n  <div class=\"row\">\n\n    <div class=\"col-md-3 col-sm-6\">\n      <div class=\"rm-project\" #project1 (click)=\"onModalClick(project1)\">\n        <div class=\"rm-header\">\n          <h1 class=\"rm-title\">Medical data visualization with VTKJS</h1>\n        </div>\n        <div class=\"rm-description\">\n          <p>This project was related with medical data visualization using VTK in its web version. The idea of the project was </p>\n        </div>\n      </div>\n    </div>\n\n    <div class=\"col-md-3 col-sm-6\">\n      <div class=\"rm-project\" #project2 (click)=\"onModalClick(project2)\">\n        <div class=\"rm-header\">\n          <h1 class=\"rm-title\">Dog breed recognition</h1>\n        </div>\n        <div class=\"rm-description\">\n          <p>information</p>\n        </div>\n      </div>\n    </div>\n\n    <div class=\"col-md-3 col-sm-6\">\n      <div class=\"rm-project\" #project3 (click)=\"onModalClick(project3)\">\n        <div class=\"rm-header\">\n          <h1 class=\"rm-title\">Melanoma detection</h1>\n        </div>\n        <div class=\"rm-description\">\n          <p>information</p>\n        </div>\n      </div>\n    </div>\n\n    <div class=\"col-md-3 col-sm-6\">\n      <div class=\"rm-project\" #project4 (click)=\"onModalClick(project4)\">\n        <div class=\"rm-header\">\n          <h1 class=\"rm-title\">Medical data visualization using Unity3D</h1>\n        </div>\n        <div class=\"rm-description\">\n          <p>information</p>\n        </div>\n      </div>\n    </div>\n\n    <div class=\"col-md-3 col-sm-6\">\n      <div class=\"rm-project\" #project5 (click)=\"onModalClick(project5)\">\n        <div class=\"rm-header\">\n          <h1 class=\"rm-title\">TIBCO</h1>\n        </div>\n        <div class=\"rm-description\">\n          <p>information</p>\n        </div>\n      </div>\n    </div>\n\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/portfolio/portfolio.component.styl":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ":host() {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-flex: 1;\n      -ms-flex: 1;\n          flex: 1;\n}\n.rm-project {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  margin-top: 1em;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-shadow: 2px 2px 2px #f3f3f3;\n          box-shadow: 2px 2px 2px #f3f3f3;\n  -webkit-transition: width 1s;\n  transition: width 1s;\n}\n.rm-project:hover {\n  cursor: pointer;\n}\n.rm-project .rm-description {\n  display: none;\n}\n.rm-header {\n  background: #67111e;\n  color: #f3f3f3;\n  padding: 0.5em;\n  padding-left: 1em;\n  overflow: hidden;\n}\n.rm-header .rm-title {\n  font-size: 2em;\n}\n.rm-description {\n  padding: 1rem;\n  height: 100%;\n}\n.rm-modal {\n  position: fixed;\n  top: -15px;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background: #67111e;\n  z-index: 1;\n  padding: 20%;\n}\n.rm-modal .rm-header {\n  font-family: 'Oswald', sans-serif;\n  font-size: 2em;\n  text-align: center;\n}\n.rm-modal .rm-description {\n  color: #fff;\n  font-size: 1.2em;\n  display: block;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/portfolio/portfolio.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PortfolioComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PortfolioComponent = /** @class */ (function () {
    function PortfolioComponent() {
    }
    PortfolioComponent.prototype.ngOnInit = function () {
    };
    PortfolioComponent.prototype.onModalClick = function (element) {
        if (element.classList.contains('rm-modal')) {
            element.classList.remove('rm-modal');
            window.addEventListener('scroll', onscroll);
        }
        else {
            element.classList.add('rm-modal');
            window.removeEventListener('scroll', onscroll);
        }
    };
    PortfolioComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-portfolio',
            template: __webpack_require__("../../../../../src/app/portfolio/portfolio.component.html"),
            styles: [__webpack_require__("../../../../../src/app/portfolio/portfolio.component.styl")]
        }),
        __metadata("design:paramtypes", [])
    ], PortfolioComponent);
    return PortfolioComponent;
}());



/***/ }),

/***/ "../../../../../src/app/section/section.component.html":
/***/ (function(module, exports) {

module.exports = "<div [ngStyle]=\"{'min-height.px': screenSize}\" class=\"app-section\">\n  <ng-content></ng-content>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/section/section.component.styl":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".app-section {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-flex: 1;\n      -ms-flex: 1;\n          flex: 1;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/section/section.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SectionComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SectionComponent = /** @class */ (function () {
    function SectionComponent() {
        this.screenSize = 0;
    }
    SectionComponent.prototype.ngOnInit = function () {
        this.screenSize = window.innerHeight;
        console.log(this.screenSize);
    };
    SectionComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-section',
            template: __webpack_require__("../../../../../src/app/section/section.component.html"),
            styles: [__webpack_require__("../../../../../src/app/section/section.component.styl")]
        }),
        __metadata("design:paramtypes", [])
    ], SectionComponent);
    return SectionComponent;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map