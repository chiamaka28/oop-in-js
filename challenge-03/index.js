const dishes = [
    {
        name : 'Eggplant Permesan',
        vegetarian : false

    } ,
    {
        name : 'spaghetti & meatballs',
        vegetarian : true
    },
]

const isVegetarian = function (dishes) {
    return dishes.filter(function (dish) {
        dish.vegetarian === true;
    });
}