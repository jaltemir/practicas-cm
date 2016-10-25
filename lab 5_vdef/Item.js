/**
 * Created by boyander on 11/10/16.
 */

var Item = function Item(imagen, nombre, precio){
    	this.image = imagen;
	this.name = nombre;
    	this.price = precio;
};

/*// Get random price in range min, max
Item.prototype.getPrice = function(){
    var min = 100;
    var max = 1000;
    return (Math.random() * (max - min) + min).toFixed(2);
}*/

exports.Item = Item;
