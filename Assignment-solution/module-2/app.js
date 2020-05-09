(function(){
  'use strict';

  var toBuyArrList = [
    {
      name: "Cookies",
      quantity:"10"
    },
    {
      name:"Chips",
      quantity:"4"
    },
    {
      name:"Soft Drink",
      quantity:"5"
    },
    {
      name:"Bread",
      quantity:"10"
    },
    {
      name:"Sugary Drink",
      quantity:"10"
    }
  ];

  var alreadyBoughtArrList =[];
  angular.module("shoppingListApp",[])
  .controller('shoppingListToBuyController', shoppingListToBuyController)
  .controller('shoppingListBoughtController', shoppingListBoughtController)
  .provider('serviceListForShopping', shoppingServiceListProvider);

  shoppingListToBuyController.$inject = ['serviceListForShopping'];
  function shoppingListToBuyController(serviceListForShopping){
    var list1 = this;
    list1.arrayList1 = toBuyArrList;

    list1.addItem = function(index, itemName, itemQuantity){
          serviceListForShopping.addItem(itemName, itemQuantity);
            serviceListForShopping.removeItem(index);
    };
  }

  shoppingListBoughtController.$inject = ['serviceListForShopping'];
  function shoppingListBoughtController(serviceListForShopping){
      var list2 = this;
      list2.arrayList2 = serviceListForShopping.getItems();
      list2.lgtest = serviceListForShopping.checkVal();
      console.log(serviceListForShopping.checkVal());
  }

 function shoppingServiceList(){
    var service = this;
    var i = {
      val:true
    };
    service.addItem = function(itemName, itemQuantity){
        var item = {
          name : itemName,
          quantity : itemQuantity
        };
        alreadyBoughtArrList.push(item);
        i.val = false;
   };

    service.removeItem = function(itemIndex){
      toBuyArrList.splice(itemIndex, 1);
    };

    service.getItems =  function(){
      return alreadyBoughtArrList;
    };

    service.checkVal = function(){
      return i.val;
    }
  }

  function shoppingServiceListProvider(){
    var provider = this;

    provider.$get = function(){
      var shoppingList = new shoppingServiceList();
      return shoppingList;
    }
  }

})();
