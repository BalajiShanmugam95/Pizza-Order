<template>
    <div class="container">
        <div class="d-flex flex-column">
            <div>
                <label class="font-weight-bold list-label"><i class="fas fa-pizza-slice mr-2"></i>Item Name
                    :</label>
                <span>&nbsp;{{orderDetails.itemName}}</span>
            </div>
            <div>
                <label class="font-weight-bold list-label"><i class="fas fa-rupee-sign mr-2"></i>Price :
                </label>
                <span>&nbsp;{{orderDetails.price.toFixed(2)}}</span>
            </div>
            <div>
                <label class="font-weight-bold list-label"><i class="fas fa-wallet mr-2"></i>Total Price
                    :</label>
                <span>&nbsp;{{orderDetails.totalAmount.toFixed(2)}}</span>
            </div>
            <div>
                <label class="font-weight-bold list-label"><i class="fas fa-user mr-2"></i>Customer Name
                    :</label>
                <span>&nbsp;{{orderDetails.name}}</span>
            </div>
            <div class="d-flex">
                <label class="font-weight-bold list-label"><i class="fas fa-map-marker-alt mr-2"></i>Delivery Address:</label>
                <div>
                    <ul>
                        <li v-for="(address,index) in orderDetails.address.split(',')" :key="index">{{`${address}${(index == orderDetails.address.split(',').length -1?"":",")}`}}</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'OrderDetails',
  props: ['orderDetails'],
  data(){
    return {
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.list-label{
  min-width: 170px;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  margin: 0 5px;
}
</style>
