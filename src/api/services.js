// pretend this is real API that have pagination feature

const products = [
  { id: 1, name: 'Apple', price: 100 },
  { id: 2, name: 'Orange', price: 200 },
  { id: 3, name: 'Banana', price: 300 },
  { id: 4, name: 'Grape', price: 250 },
  { id: 5, name: 'Peach', price: 150 },
  { id: 6, name: 'Melon', price: 500 },
  { id: 7, name: 'Mango', price: 400 },
  { id: 8, name: 'Pineapple', price: 450 },
  { id: 9, name: 'Lemon', price: 350 },
  { id: 10, name: 'Kiwi', price: 200 },
  { id: 11, name: 'Strawberry', price: 100 },
  { id: 12, name: 'Cherry', price: 150 },
  { id: 13, name: 'Watermelon', price: 300 },
  { id: 14, name: 'Blueberry', price: 250 },
  { id: 15, name: 'Pear', price: 400 },
  { id: 16, name: 'Papaya', price: 450 },
  { id: 17, name: 'Pomegranate', price: 500 },
  { id: 18, name: 'Coconut', price: 350 },
  { id: 19, name: 'Grapefruit', price: 200 },
  { id: 20, name: 'Avocado', price: 100 },
  { id: 21, name: 'Plum', price: 150 },
  { id: 22, name: 'Apricot', price: 250 },
  { id: 23, name: 'Fig', price: 300 },
  { id: 24, name: 'Cantaloupe', price: 400 },
  { id: 25, name: 'Honeydew', price: 450 },
  { id: 26, name: 'Nectarine', price: 500 },
  { id: 27, name: 'Tangerine', price: 350 },
  { id: 28, name: 'Raspberry', price: 200 },
  { id: 29, name: 'Clementine', price: 100 },
  { id: 30, name: 'Cranberry', price: 150 },
  { id: 31, name: 'Jackfruit', price: 250 },
  { id: 32, name: 'Lime', price: 300 },
  { id: 33, name: 'Lychee', price: 400 },
  { id: 34, name: 'Mandarin', price: 450 },
  { id: 35, name: 'Mangosteen', price: 500 },
  { id: 36, name: 'Rambutan', price: 350 },
  { id: 37, name: 'Tamarind', price: 200 },
  { id: 38, name: 'Carambola', price: 100 },
  { id: 39, name: 'Cactus Pear', price: 150 },
  { id: 40, name: 'Cherimoya', price: 250 },
  { id: 41, name: 'Guava', price: 300 },
  { id: 42, name: 'Kumquat', price: 400 },
  { id: 43, name: 'Persimmon', price: 450 },
  { id: 44, name: 'Pineapple Guava', price: 500 },
  { id: 45, name: 'Quince', price: 350 },
  { id: 46, name: 'Sapodilla', price: 200 },
  { id: 47, name: 'Star Fruit', price: 100 },
  { id: 48, name: 'Tangelo', price: 150 },
  { id: 49, name: 'Ugli Fruit', price: 250 },
  { id: 50, name: 'Yuzu', price: 300 },
]

export const getProducts = (limit, page) => {
  return new Promise((resolve) => {
    const start = (page - 1) * limit
    const end = start + limit
    const res = products.slice(start, end)

    const result = {
      data: res,
      meta: {
        currentPage: page,
        totalPage: Math.ceil(products.length / limit),
        itemPerPage: limit,
        itemFrom: start + 1,
        itemTo: end,
        totalItem: products.length,
      }
    }

    setTimeout(resolve(result), 1000)
  })
}
getProducts(10, 2)
