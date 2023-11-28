function render(){
    const productStore = localStorageUtil.getProducts();
    productsPage.render();
    headerPage.render(productStore.length); 
}

spinnerPage.render()

let CATALOG = [];

fetch("./server/catalog.json")
    .then(res => res.json())
    .then(body => {
        CATALOG = body;
        spinnerPage.handleClear();
        render();

        
    })
    .catch(error => {
        spinnerPage.handleClear();
        errorPage.render()
    })