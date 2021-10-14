import PageRenderer from "./pageController/PageRenderer";
import Store from "./classModel/Store";

//console.log(catalog);
/*window.onload = function() {
    pageRenderer.fetchStoreProducts();
    //pageRenderer.renderHomePage();
    pageRenderer.renderPages();
  };*/

document.addEventListener("DOMContentLoaded" , async () => {
  let store:Store = new Store;
  let pageRenderer = new PageRenderer(document, store);
    pageRenderer.fetchStoreProducts();
    pageRenderer.renderPages();
})

// no funciona ninguno de los dos incluyendo los diferentes renderHomepages a mimirrrrr