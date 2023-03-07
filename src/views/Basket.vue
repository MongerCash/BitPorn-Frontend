<template>

  <!--evaluate if cart should be shown-->
  <template v-if="productsInBag.length">

    <!--shopping cart title-->
    <h5 class="mb-4">Your Shopping Cart</h5>
    <div class="container pb-5 py-0">
      <div class='row d-flex justify-content-center'>
        <div class="row cols-xl-5 pt-2 d-flex justify-content-center">

        <!--iterate over products in shopping cart-->    
        <div
          v-for="(product, index) in productsInBag" 
          :key="parseInt(index)"
          class="col-sm-12 col-md-12 col-lg-7 col-xl-7 pb-2">

          <!--card for each product begins here-->
          <div class="card cart-border text-light">

              <!--remove product from cart-->
              <div class="text-end"
                @click="this.$store.dispatch('removeFromBag', product.video_id); 
                product.inShoppingCart = 0;">

                <!--red garbage can icon-->
                <i class="fa-regular fa-trash-can text-danger fa-1x mx-2 mt-2 pb-2"></i>
              </div>

              <div class='row d-flex'>

              <!--product image-->
              <div class="col text-start mx-2">
                <img
                :src="`https://bitporn.com/contents/videos_screenshots/0/${product.video_id}/preview.jpg`" 
                width="160">
              </div>
            

              <!---product title-->
              <div class="col d-flex text-light text-start mx-2">
                <div>
                    <h5>{{product.title}}</h5>
                </div>

                </div>
              
                <!---product price-->
                <div class="text-end">
                  <h5 class="p-2">$ {{product.price}}</h5>
                </div>
              
            </div><!--end footer-->
          </div><!--end card-->
        </div><!--end column-->
      

    
    <!--total, checkout or continue shopping-->
    <div class="col-sm-12 col-md-12 col-lg-7 col-xl-7 pb-3">
    <div class="text-end mt-2">

      <!--total-->
      <h4 class="text-light">Total ${{orderTotal()}}</h4>

      <!--Buttons-->
      <div class="">

        <!--checkout button-->
        <button class="btn btn-primary btn-lg"><i class="fa-solid fa-cart-shopping"></i>&nbsp;Checkout</button>
      </div><!--end buttons-->
    </div><!--end total, checkout or continue shopping-->
    </div>
  </div>
    </div>
  </div><!--end row-->

  </template>

  <template v-else>
    <h4 class="text-light">No Items In Cart</h4>
  </template>

</template>

<script>


import { mapState } from 'vuex'

export default {
  name: 'Basket',

  methods: {
    orderTotal() {
      console.log(this.productsInBag);
      var total = 0;
      this.productsInBag.forEach(item => {
        total += Number(item.price);
      });
      return total.toFixed(2)
    }
  },
  computed: mapState([
    'productsInBag' 
  ]),
}
</script>



  methods: {
    orderTotal() {
      console.log(this.productsInBag);
      var total = 0;
      this.productsInBag.forEach(item => {
        total += Number(item.price);
      });
      return total.toFixed(2)
    }
  },
  computed: mapState([
    'productsInBag' 
  ]),
}
</script>

