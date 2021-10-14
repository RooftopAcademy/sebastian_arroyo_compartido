/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/classModel/Cart.ts":
/*!********************************!*\
  !*** ./src/classModel/Cart.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Cart)
/* harmony export */ });
/* harmony import */ var _Product__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Product */ "./src/classModel/Product.ts");

class Cart {
    constructor() {
        this.products = [];
        this.counter = 0;
        this.productsId = new Set();
    }
    pushProduct(product) {
        if (!this.productsId.has(product.id)) {
            this.products.push(product);
        }
        product.qtyRequested += 1;
        this.productsId.add(product.id);
    }
    addProduct(product) {
        if (product.stock > 0) {
            this.counter += 1;
            product.stock -= 1;
            this.pushProduct(product);
        }
        else {
            console.log(`Product ${product.name} is out of stock.`);
        }
    }
    findById(id) {
        let product = this.products.find((product) => product.id == id);
        return product != undefined ? product : new _Product__WEBPACK_IMPORTED_MODULE_0__["default"]();
    }
    removeCartProduct(id) {
        let productToRemove = this.findById(id);
        this.counter -= productToRemove.qtyRequested;
        productToRemove.stock += productToRemove.qtyRequested;
        productToRemove.qtyRequested = 0;
        this.products = this.products.filter((product) => {
            return product.id != id;
        });
        this.productsId.delete(id);
    }
    getProducts() {
        return this.products;
    }
}


/***/ }),

/***/ "./src/classModel/Catalog.ts":
/*!***********************************!*\
  !*** ./src/classModel/Catalog.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Catalog)
/* harmony export */ });
/* harmony import */ var _Product__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Product */ "./src/classModel/Product.ts");

class Catalog {
    constructor() {
        this.products = [];
    }
    add(product) {
        this.products.push(product);
    }
    //If it doesnt find a product that matches the id , returns an empty product (null object)
    findById(id) {
        let product = this.products.find((product) => product.id == id);
        return product != undefined ? product : new _Product__WEBPACK_IMPORTED_MODULE_0__["default"]();
    }
    exportRandomSliderProducts(n) {
        let sliderProducts = [];
        for (let i = 0; i < n; i++) {
            //adds random products from the catalog n times
            sliderProducts.push(this.products[Math.floor(Math.random() * this.products.length)]);
        }
        return sliderProducts;
    }
}


/***/ }),

/***/ "./src/classModel/Product.ts":
/*!***********************************!*\
  !*** ./src/classModel/Product.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Product)
/* harmony export */ });
class Product {
    /*constructor(public name: string = "", public id: number = 0, public price: number = 0, public image: string = "", public stock: number = 0) {
    }*/
    constructor() {
        this.name = "";
        this.id = 0;
        this.price = 0;
        this.stock = 0;
        this.image = "";
        this.qtyRequested = 0;
    }
    hasStock() {
        return this.stock > 0;
    }
}


/***/ }),

/***/ "./src/classModel/Store.ts":
/*!*********************************!*\
  !*** ./src/classModel/Store.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Store)
/* harmony export */ });
/* harmony import */ var _Cart__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Cart */ "./src/classModel/Cart.ts");
/* harmony import */ var _Catalog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Catalog */ "./src/classModel/Catalog.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};


class Store {
    constructor() {
        this.catalog = new _Catalog__WEBPACK_IMPORTED_MODULE_1__["default"];
        this.cart = new _Cart__WEBPACK_IMPORTED_MODULE_0__["default"];
    }
    fetchProductsFromApi() {
        return __awaiter(this, void 0, void 0, function* () {
            const jsonUrl = 'https://my-json-server.typicode.com/RooftopAcademy/sebastian_arroyo_compartido/products';
            try {
                const response = yield fetch(jsonUrl);
                const products = yield response.json(); //Promise<any>
                products.forEach(p => p.qtyRequested = 0);
                this.catalog.products = products;
                console.log("Product Data Fetched");
            }
            catch (err) {
                console.log('Fetch failed ', err);
            }
        });
    }
    exportProducts() {
        return this.catalog.products;
    }
}


/***/ }),

/***/ "./src/pageController/PageRenderer.ts":
/*!********************************************!*\
  !*** ./src/pageController/PageRenderer.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ PageRenderer)
/* harmony export */ });
/* harmony import */ var _pageView_HomePage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../pageView/HomePage */ "./src/pageView/HomePage.ts");
/* harmony import */ var _PageRouter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PageRouter */ "./src/pageController/PageRouter.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};


class PageRenderer {
    constructor(document, store) {
        this.document = document;
        this.currentPage = new _pageView_HomePage__WEBPACK_IMPORTED_MODULE_0__["default"](this);
        this.store = store;
        this.pageRouter = new _PageRouter__WEBPACK_IMPORTED_MODULE_1__["default"]();
    }
    fetchStoreProducts() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.store.fetchProductsFromApi();
            //waits for the fetching to end to render Homepage when you first load the webpage
            this.renderHomePage();
        });
    }
    changePage(newPagePath) {
        this.currentPage = this.pageRouter.getPage(newPagePath, this);
    }
    getProductsCatalog() {
        return this.store.catalog;
    }
    renderHomePage() {
        let mainContainer = this.document.getElementById('main-container');
        mainContainer.innerHTML = this.currentPage.render();
        this.currentPage.loadEventBehavior();
    }
    renderPages() {
        let mainContainer = this.document.getElementById('main-container');
        window.addEventListener('hashchange', (e) => {
            const hashPath = window.location.hash;
            this.changePage(hashPath);
            mainContainer.innerHTML = this.currentPage.render();
            this.currentPage.loadEventBehavior();
        });
    }
    updatePage() {
        let mainContainer = this.document.getElementById('main-container');
        mainContainer.innerHTML = this.currentPage.render();
        this.currentPage.loadEventBehavior();
    }
}


/***/ }),

/***/ "./src/pageController/PageRouter.ts":
/*!******************************************!*\
  !*** ./src/pageController/PageRouter.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ PageRouter)
/* harmony export */ });
/* harmony import */ var _pageView_CartPage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../pageView/CartPage */ "./src/pageView/CartPage.ts");
/* harmony import */ var _pageView_ErrorPage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../pageView/ErrorPage */ "./src/pageView/ErrorPage.ts");
/* harmony import */ var _pageView_HomePage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../pageView/HomePage */ "./src/pageView/HomePage.ts");
/* harmony import */ var _pageView_ProductPage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../pageView/ProductPage */ "./src/pageView/ProductPage.ts");
/* harmony import */ var _pageView_RegistrationPage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../pageView/RegistrationPage */ "./src/pageView/RegistrationPage.ts");





class PageRouter {
    constructor() {
        this.paths = {
            "": _pageView_HomePage__WEBPACK_IMPORTED_MODULE_2__["default"],
            "#/home": _pageView_HomePage__WEBPACK_IMPORTED_MODULE_2__["default"],
            "#/products": _pageView_ProductPage__WEBPACK_IMPORTED_MODULE_3__["default"],
            "#/cart": _pageView_CartPage__WEBPACK_IMPORTED_MODULE_0__["default"],
            "#/registration": _pageView_RegistrationPage__WEBPACK_IMPORTED_MODULE_4__["default"],
            "#/404": _pageView_ErrorPage__WEBPACK_IMPORTED_MODULE_1__["default"]
        };
    }
    getPage(path, controller) {
        return new (this.paths[path])(controller);
    }
}


/***/ }),

/***/ "./src/pageView/CartPage.ts":
/*!**********************************!*\
  !*** ./src/pageView/CartPage.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ CartPage)
/* harmony export */ });
class CartPage {
    constructor(controller) {
        this.content = this.baseHtmlView();
        this.pageRenderer = controller;
    }
    baseHtmlView() {
        return `
        <div class = "cart-container d-flex space-evenly" id = "cart">
            <div class = "product-cart-section" >
            <table class = "product-cart-table">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Product Name</th>
                        <th>Price</th>
                        <th>Stock</th>
                        <th>Quantity</th>
                        <th>Subtotal</th>
                    </tr>
                </thead>
                <tbody id = "product-cart-section-body">
                    
                </tbody>
            </table>
            </div>
        </div>
        `;
    }
    cartItemView(product) {
        return `
        <tr>
            <td>${product.id}</td>
            <td>${product.name}</td>
            <td>$${product.price}</td>
            <td>${product.stock}</td>
            <td>
                <div class = "d-flex space-between" >
                    ${product.qtyRequested}
                    <div>
                        <button data-id = "${product.id}" class = "plus-button">
                            <i class="fas fa-plus"></i>
                        </button>
                        <button data-id = "${product.id}" class = "minus-button">
                            <i class="fas fa-minus"></i>
                        </button>
                    </div>
                </div>
            </td>
            <td>$${product.qtyRequested * product.price}</td>
            <td>
                <div class = "d-flex space-evenly">
                    <button data-id = "${product.id}" class = "trash-button">
                        <i class="far fa-trash-alt fa-2x"></i>
                    </button>
                </div>
            </td>
        </tr>
        `;
    }
    cartItemTotalView() {
        let products = this.pageRenderer.store.cart.getProducts();
        let totalPrice = 0;
        let cartCounter = this.pageRenderer.store.cart.counter;
        products.forEach(p => {
            totalPrice += p.qtyRequested * p.price;
        });
        return `
        <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td>${cartCounter}</td>
            <td>$${totalPrice}</td>
            <td>Buy</td>
        </tr>
        `;
    }
    renderCartItem(nodeHtml) {
        this.pageRenderer.store.cart.getProducts().forEach((p) => nodeHtml.insertAdjacentHTML("beforeend", this.cartItemView(p)));
    }
    renderCartItemTotal(nodeHtml) {
        nodeHtml.insertAdjacentHTML("beforeend", this.cartItemTotalView());
    }
    renderCartItemList() {
        let cartProductsSection = document.getElementById("product-cart-section-body");
        this.renderCartItem(cartProductsSection);
        this.renderCartItemTotal(cartProductsSection);
    }
    plusButtonBehavior(button, cartNotification) {
        let id = button.dataset.id;
        let cart = this.pageRenderer.store.cart;
        let catalog = this.pageRenderer.getProductsCatalog();
        let product = catalog.findById(+id);
        if (product.stock > 0) {
            cart.counter += 1;
            product.stock -= 1;
            product.qtyRequested += 1;
        }
        cartNotification.innerHTML = cart.counter.toString();
    }
    minusButtonBehavior(button, cartNotification) {
        let id = button.dataset.id;
        let cart = this.pageRenderer.store.cart;
        let catalog = this.pageRenderer.getProductsCatalog();
        let product = catalog.findById(+id);
        if (cart.counter > 0 && product.qtyRequested > 0) {
            cart.counter -= 1;
            product.stock += 1;
            product.qtyRequested -= 1;
        }
        cartNotification.innerHTML = cart.counter.toString();
    }
    trashButtonBehavior(button, cartNotification) {
        let id = button.dataset.id;
        let cart = this.pageRenderer.store.cart;
        cart.removeCartProduct(+id);
        cartNotification.innerHTML = cart.counter.toString();
    }
    /*
    Updates the current page by re-rendering trough the PageRenderer class
    */
    updatePage() {
        this.content = this.baseHtmlView();
        this.pageRenderer.updatePage();
    }
    productsButton(buttons) {
        let cartNotification = this.pageRenderer.document.getElementById('product-counter');
        buttons.forEach(button => {
            button.addEventListener('click', () => {
                /*Refactor ifs / switch with enum or map later*/
                if (button.className == "plus-button")
                    this.plusButtonBehavior(button, cartNotification);
                else if (button.className == "minus-button")
                    this.minusButtonBehavior(button, cartNotification);
                else
                    this.trashButtonBehavior(button, cartNotification);
                this.updatePage();
            });
        });
    }
    loadButtonsBehavior() {
        let minusButtons = Array.from(this.pageRenderer.document.getElementsByClassName("minus-button"));
        let plusButtons = Array.from(this.pageRenderer.document.getElementsByClassName("plus-button"));
        let trashButtons = Array.from(this.pageRenderer.document.getElementsByClassName("trash-button"));
        let buttons = [...minusButtons, ...plusButtons, ...trashButtons];
        this.productsButton(buttons);
    }
    render() {
        return this.content;
    }
    loadEventBehavior() {
        this.renderCartItemList();
        this.loadButtonsBehavior();
    }
}


/***/ }),

/***/ "./src/pageView/ErrorPage.ts":
/*!***********************************!*\
  !*** ./src/pageView/ErrorPage.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ErrorPage)
/* harmony export */ });
class ErrorPage {
    constructor(controller) {
        this.content = "404 ERROR";
        this.controller = controller;
    }
    render() {
        return this.content;
    }
    loadEventBehavior() {
    }
}


/***/ }),

/***/ "./src/pageView/HomePage.ts":
/*!**********************************!*\
  !*** ./src/pageView/HomePage.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ HomePage)
/* harmony export */ });
class HomePage {
    constructor(pageRenderer) {
        this.content = this.baseHtmlView();
        ;
        this.pageRenderer = pageRenderer;
    }
    baseHtmlView() {
        return `
        <div class = "slide-container d-flex" >
            <button class="prev" >&laquo;</button>
            <div class = "slide-product-container" id = "slide-product-container"></div>
            <button class="next" >&raquo;</button>
        </div>
        `;
    }
    productSliderView(product) {
        return `
        <div class = "slide-product fade">
            <img class = "slide-product-img" src = ${product.image}>
        </div>
        `;
    }
    renderProduct(product, slideProductContainer) {
        slideProductContainer.insertAdjacentHTML("beforeend", this.productSliderView(product));
    }
    renderSliderProducts() {
        let slideProductContainer = this.pageRenderer.document.getElementById("slide-product-container");
        //Renders 5 products 
        let sliderProducts = this.pageRenderer.store.catalog.exportRandomSliderProducts(5);
        sliderProducts.forEach((product) => {
            this.renderProduct(product, slideProductContainer);
            console.log(product);
        });
    }
    render() {
        return this.content;
    }
    loadEventBehavior() {
        this.renderSliderProducts();
    }
}


/***/ }),

/***/ "./src/pageView/ProductPage.ts":
/*!*************************************!*\
  !*** ./src/pageView/ProductPage.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ProductPage)
/* harmony export */ });
class ProductPage {
    constructor(controller) {
        this.content = this.baseHtmlView();
        this.pageRenderer = controller;
    }
    render() {
        return this.content;
    }
    baseHtmlView() {
        return `
        <div class="catalog d-flex wrap">

        </div>
        `;
    }
    productItemView(product) {
        return `
        <div class = "product-item d-flex" style = "background-image: url(${product.image})">
            <div class = "detail-text">
                <h4 class="gfx-title">${product.name}</h3>
                <p>${product.price}$</p>
                <p>Stock:${product.stock}</p>
            </div>
            <button data-id="${product.id}" class="product-button">Add To Cart</button>
        </div>
        `;
    }
    renderProducts(nodeHtml) {
        this.pageRenderer.store.exportProducts().forEach((p) => nodeHtml.insertAdjacentHTML("beforeend", this.productItemView(p)));
    }
    renderProductList() {
        Array.from(this.pageRenderer.document.getElementsByClassName("catalog"))
            .forEach((element) => {
            this.renderProducts(element);
        });
    }
    updatePage() {
        this.content = this.baseHtmlView();
        this.pageRenderer.updatePage();
    }
    addToCartNotification() {
        //holds all add to cart buttons inside the product list
        let addToCartButton = Array.from(this.pageRenderer.document.getElementsByClassName('product-button'));
        let cartNotification = this.pageRenderer.document.getElementById('product-counter');
        addToCartButton.forEach((button) => {
            button.addEventListener('click', () => {
                let id = button.dataset.id;
                let cart = this.pageRenderer.store.cart;
                let catalog = this.pageRenderer.getProductsCatalog();
                let product = catalog.findById(+id);
                console.log(product);
                //Adds object Product to current Cart
                cart.addProduct(product);
                cartNotification.innerHTML = cart.counter.toString();
                this.updatePage();
            });
        });
    }
    loadEventBehavior() {
        this.renderProductList();
        this.addToCartNotification();
    }
}


/***/ }),

/***/ "./src/pageView/RegistrationPage.ts":
/*!******************************************!*\
  !*** ./src/pageView/RegistrationPage.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ RegistrationPage)
/* harmony export */ });
class RegistrationPage {
    constructor(controller) {
        this.content = `
        <form action = "/" method = "GET" id = "form" class="form d-flex">
            <ul class="registration-container">
                <li>
                    <label for="first-name">First Name</label>
                    <input type="text" id="First-name" placeholder="Enter your first name here" required>
                </li>

                <li>
                    <label for="last-name">Last Name</label>
                    <input type="text" id="Last-name" placeholder="Enter your last name here" required>
                </li>

                <li>
                    <label for="email">Email</label>
                    <input type="email" id="Email" placeholder="Enter your email here" required>
                </li>

                <li>
                    <label for="phone">Phone</label>
                    <input type="tel" id="Phone" placeholder="Enter your phone here" required>
                </li>

                <li>
                    <label for="password">Password</label>
                    <input type="password" id="Password" placeholder="Enter your password here" required>
                </li>

                <li>
                    <label for="repeatPassword">Repeat Password</label>
                    <input type="password" id="repeatPassword" placeholder="Enter your password here" required>
                </li>
                
                <li>
                    <button type="submit">Submit</button>
                </li>
            </ul>
            <div id= "formError" class = "formError">

            <div>
        </form>`;
        this.controller = controller;
    }
    render() {
        return this.content;
    }
    validateFormInput(input, messages) {
        input.forEach(inputString => {
            if (inputString.value.length >= 30) {
                messages.push(inputString.id + " must be less than 30 characters");
            }
            else if (inputString.value.length <= 6) {
                messages.push(inputString.id + " must be longer than 6 characters");
            }
        });
    }
    validatePasswordInput(pass1, pass2, messages) {
        if (pass1 != pass2) {
            messages.push("Passwords must match");
        }
        else if (pass1 == "password" || pass2 == "password") {
            messages.push("Password cant be 'password'");
        }
    }
    loadEventBehavior() {
        let firstName = document.getElementById("First-name");
        let lastName = document.getElementById("Last-name");
        let email = document.getElementById("Email");
        let phone = document.getElementById("Phone");
        let password = document.getElementById("Password");
        let repeatPassword = document.getElementById("repeatPassword");
        let form = document.getElementById("form");
        let error = document.getElementById("formError");
        let inputArray = [firstName, lastName, email, phone];
        form === null || form === void 0 ? void 0 : form.addEventListener('submit', (e) => {
            let messages = [];
            this.validateFormInput(inputArray, messages);
            this.validatePasswordInput(password.value, repeatPassword.value, messages);
            if (messages.length > 0) {
                e.preventDefault();
                error.innerHTML = messages.join(', ');
            }
        });
    }
}


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!********************!*\
  !*** ./src/App.ts ***!
  \********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _pageController_PageRenderer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pageController/PageRenderer */ "./src/pageController/PageRenderer.ts");
/* harmony import */ var _classModel_Store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./classModel/Store */ "./src/classModel/Store.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};


//console.log(catalog);
/*window.onload = function() {
    pageRenderer.fetchStoreProducts();
    //pageRenderer.renderHomePage();
    pageRenderer.renderPages();
  };*/
document.addEventListener("DOMContentLoaded", () => __awaiter(void 0, void 0, void 0, function* () {
    let store = new _classModel_Store__WEBPACK_IMPORTED_MODULE_1__["default"];
    let pageRenderer = new _pageController_PageRenderer__WEBPACK_IMPORTED_MODULE_0__["default"](document, store);
    pageRenderer.fetchStoreProducts();
    pageRenderer.renderPages();
}));
// no funciona ninguno de los dos incluyendo los diferentes renderHomepages a mimirrrrr

})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map