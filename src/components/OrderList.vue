<template>
  <div class="container">
    <div v-for="(order,index) in orderList" :key="index">
      <b-card :class="`m-2 ${avaliableClasses[order.status]}`">
        <b-card-text>
          <div class="d-flex flex-column">
            <div>
              <label class="font-weight-bold list-label"><i class="fas fa-user mr-2"></i>Customer Name :</label>
              <span>&nbsp;{{order.name}}</span>
            </div>
            <div>
              <label class="font-weight-bold list-label"><i class="fas fa-list-alt mr-2"></i>No. of Items: </label>
              <span>&nbsp;{{order.itemsCount}}</span>
            </div>
            <div>
              <label class="font-weight-bold list-label"><i class="fas fa-wallet mr-2"></i>Total Amount :</label>
              <span>&nbsp;{{order.totalAmount.toFixed(2)}}</span>
            </div>
            <div>
              <label class="font-weight-bold list-label"><i class="fas fa-pizza-slice mr-2"></i>Status :</label>
              <span :class="setTextcolor(order.status) +' font-weight-bold'">&nbsp;{{avaliableStatus[order.status]}}</span>
            </div>
          </div>
          <div class="object-fit float-right">
            <b-button class="mr-2" variant="info" size="sm" @click="showDetails(order)"><i class="fas fa-eye"></i> View Details</b-button>
            <b-button size="sm" v-if="order.status < 2" variant="success" @click="changeStatus(index,order.status)"><i class="fas fa-step-forward"></i> Change Status</b-button>
          </div>
        </b-card-text>
      </b-card>
    </div>
    <b-modal ref="showOrderDetail" id="order-detail"  title="Order Details" hide-footer>
        <OrderDetails :orderDetails="activeOrder"></OrderDetails>
      </b-modal>
  </div>
</template>

<script>
import OrderDetails from './OrderDetails' // Link Order details component for modal representation.
import detectLocationMixin from '../mixins/detect-location-mixin' // detect user location based in time zone
export default {
  name: 'OrderList',
  mixins:[detectLocationMixin],
  components:{
    OrderDetails
  },
  data(){
    return {
      orderList:[{                      // Sample datas for order list.
        name:"Suresh Reddy",
        itemsCount:2,
        totalAmount:300,
        status:0,
        itemName:"Margherita",
        price:150,
        address:"3AAbhijit Annexe, 11th CrossMalleswaram, Bangalore - 560003"
      },
      {
        name:"Dev Gowda",
        itemsCount:1,
        totalAmount:300,
        status:0,
        itemName:"Double Cheese Margherita",
        price:300,
        address:"Tasker Town, Shivajinagar, Bangalore, Karnataka 560001"
      },
      {
        name:"Vijayent Mohan",
        itemsCount:4,
        totalAmount:1600,
        status:0,
        itemName:"Mexican Green Wave",
        price:400,
        address:"Marathahalli - Sarjapur Outer Ring Road, Kadubeesanahalli, Bengaluru"
      },
      {
        name:"Sapna",
        itemsCount:2,
        totalAmount:600,
        status:0,
        itemName:"Crudo",
        price:300,
        address:"Marathahalli - Sarjapur Outer Ring Road, Kadubeesanahalli, Bengaluru"
      },
      {
        name:"Ricky Chandra Gupta",
        itemsCount:5,
        totalAmount:2500,
        status:0,
        itemName:"Napoletana",
        price:500,
        address:"Marathahalli - Sarjapur Outer Ring Road, Kadubeesanahalli, Bengaluru"
      }],
      avaliableStatus:["Order Received","Preparing","Ready to serve"],
      avaliableClasses:["received-card","preparing-card","ready-card"],
      activeOrder:{},
    }
  },
  methods: {
    setTextcolor(status){                             //Used to change status text color.
        if(status === 0)
          return "text-primary"
        else if (status === 1)
          return "text-warning"
        else
          return "text-success"
    },
    changeStatus(index,status){                      //On button click automatically change status to next step.
      if(status < 2)
        this.orderList[index]["status"]=status+1;
    },
    showDetails(order){                             //On buuton(View Details) click to open particular order details.
      this.activeOrder=order;
      this.$refs['showOrderDetail'].show()
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.list-label{
  min-width: 170px;
}
.received-card{
  border-left:3px solid blue;
}
.preparing-card{
  border-left:3px solid yellow;
}
.ready-card{
  border-left:3px solid green;
}
.card-body{
  padding: 0.8rem;
}
</style>
