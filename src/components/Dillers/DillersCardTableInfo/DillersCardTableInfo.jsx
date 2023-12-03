export function DillersCardTableInfo(data) {
    return data.map((item) => ({
        id: item.id,
        name_1C: item.name_1C,
        product_name: item.product_name,
        url: item.url,
        recommended_price: item.recommended_price,
        price: item.price,
}))
}