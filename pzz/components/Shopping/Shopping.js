class Shopping{

    handleClear() {
        ROOT_SHOPPING.innerHTML = '';
        productsPage.render()
    }

    render(){
        let htmlCatalog = '';
        let sumCatalog = 0;
        let numCatalog = 0;
        const productStore = localStorageUtil.getProducts();

        CATALOG.forEach(({id, name, price, img}) => {
            if (productStore.indexOf(id) !== -1){
                htmlCatalog += `
                    <tr>
                        <td><img  class="shopping-element__img" src="${img}" /></td>
                        <td class="shopping-element__name">${name}</td>
                        <td class="shopping-element__price">${price}</td>
                    </tr>
                `
                sumCatalog += price;
                numCatalog += 1;
            }
        });

        const html = `
            <div class="shopping-container">
            <div class="shopping__close" onclick="shoppingPage.handleClear()"></div>
                <table>
                    ${htmlCatalog}
                    <tr>
                        <td></td>
                        <td class="shopping-element__name">${numCatalog} pizzas for:</td>
                        <td class="shopping-element__price">${Math.round(sumCatalog * 100) / 100}</td>
                    </tr>
                </table>
                
            </div>
        `
        ROOT_SHOPPING.innerHTML = html;
    }

}

const shoppingPage = new Shopping();
