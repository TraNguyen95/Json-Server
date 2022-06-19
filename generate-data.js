var casual = require('casual');
const fs = require('fs')

var sentence = casual.sentence;

const categoryList = []
const productList = []

const randomCategoryList = (n) => {
    Array.from(new Array(n)).forEach(() => {
        const category = {
            id: casual.uuid,
            name: casual.name,
            createdAt: Date.now(),
            updatedAt: Date.now()
        }

        categoryList.push(category)
    })

    return categoryList
}

const ramdomProductList = (categoryList,n) => {
    for(const category of categoryList){
        Array.from(new Array(n)).forEach(() => {
            const product = {
                categoryId: category.id,
                id: casual.uuid,
                name: casual.name,
                thumnailUrl: 'url image',
                createdAt: Date.now(),
                updatedAt: Date.now()
            }
    
            productList.push(product)
        })
    }
   return productList
}


(() => {
    const categoryList = randomCategoryList(4)
    const productList = ramdomProductList(categoryList,5)
    console.log(categoryList);
    const db = {
        categories: categoryList,
        products: productList,
        profile: {
            name: 'po'
        }
    }

    fs.writeFile('db.json',JSON.stringify(db),() => {
        console.log('Write data successfully')
    })
})()

// // Define custom generator
// casual.define('point', function() {
// 	return {
// 		x: Math.random(),
// 		y: Math.random()
// 	};
// });

// // Generate random point
// var point = casual.point;
