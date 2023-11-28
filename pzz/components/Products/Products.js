class Products{
    constructor() {
        this.classNameActive = 'product-element__button_active';
        this.labelAdd = 'Add to cart';
        this.labelRemove = 'Remove from cart'
    }

    handleSetLocationStorage(element, id){
        const {pushProduct, products} = localStorageUtil.putProducts(id);
        if (pushProduct){
            element.classList.add(this.classNameActive);
            element.innerHTML = this.labelRemove;
        } else{
            element.classList.remove(this.classNameActive);
            element.innerHTML = this.labelAdd;
        }
        headerPage.render(products.length)
    }

    render(){
        let htmlCatalog = '';
        const productStore = localStorageUtil.getProducts();

        CATALOG.forEach(({id, name, price, img}) => {
            let activeClass = '';
            let activeText = '';

            if(productStore.indexOf(id) === -1){
                activeText = this.labelAdd
            } else{
                activeText = this.labelRemove
                activeClass = ' ' + this.classNameActive
            }
            htmlCatalog += `
                <li class="product-element">
                    <span class="product-element__name">${name}</span>
                    <img class="product-element__img" src="${img}" />
                    <span class="product-element__price">${price}</span>
                    <button class="product-element__button${activeClass}" onClick = "productsPage.handleSetLocationStorage(this, '${id}')">
                        ${activeText}
                    </buttin>
                </li>
            `;
        });

        const html = `
            <ul class="product-container">${htmlCatalog}</ul>
        `;
        
        ROOT_PRODUCTS.innerHTML = html
    }
 
}

const productsPage = new Products();
