<template>

  <!--evaluate if cart should be shown-->
  <template v-if="productsInBag.length">

    <!--shopping cart title-->
    <h5 class="mb-5">Your Shopping Cart</h5>
      
    <div class='row'>

      <!--iterate over products in shopping cart-->    
      <div
        v-for="(product, index) in productsInBag" 
        :key="parseInt(index)"
        class="col-sm-12 mb-3 mb-sm-0">
    

        <!--card for each product begins here-->
        <div class="
          card 
          mt-4">

          <!--make the card light gray with white text-->
          <div class="card-body text-light bg-secondary">

            <!--remove product from cart-->
            <div class="text-end"
              @click="this.$store.dispatch('removeFromBag', product.video_id); 
              product.inShoppingCart = 0;">

              <!--red garbage can icon-->
              <i class="
                fa-regular 
                fa-trash-can 
                text-danger 
                fa-2x
                ">
              </i>
            </div>

            <!--product image-->
            <div class="text-start">
              <img class="rounded" 
              :src="`https://bitporn.com/contents/videos_screenshots/0/${product.video_id}/320x180/1.jpg`" 
              width="180">
            </div>
          

            <!---product title-->
            <div class="footer mt-3">
              <div class="text-start">
                  <p class="">{{product.title}}</p>
              </div>
            
              <!---product price-->
              <div class="text-end">
                <span class="p-2">$ {{product.price}}</span>
              </div>
            </div><!--end card body-->
          </div><!--end footer-->
        </div><!--end card-->
      </div><!--end column-->
    </div><!--end row-->
    
    <!--total, checkout or continue shopping-->
    <div class="text-end mt-3">

      <!--total-->
      <h2 class="text-light font-weight-bold font-size-lg">Total: $ {{orderTotal()}}</h2>

      <!--Buttons-->
      <div class="mt-3">

        <!--continue shopping-->
        <button 
          @click="this.$router.go(-1);"
          class="btn btn-secondary btn-lg">
          Continue Shopping
        </button>&nbsp;&nbsp;

        <!--checkout button-->
        <button class="btn btn-primary btn-lg">Checkout</button>
      </div><!--end buttons-->
    </div><!--end total, checkout or continue shopping-->

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

