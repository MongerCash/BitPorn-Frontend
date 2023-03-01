<template>
  <div class="home">
    <div>
      <div class='row'>
        <div 
          v-for="(product, index) in this.products" :key="parseInt(index)"
          class="col-sm-6 mb-3 mb-sm-0"
          :class="{ inBag : isInBag(product)}">
          <div class="card mt-5">
            <img class="card-img-top" :src="`https://bitporn.com/contents/videos_screenshots/0/${product.video_id}/preview.jpg`" :alt="`${product.title}`">
            <h4>{{product.title}}</h4>
            <div class="card-body">
                <p class="price">US$ {{product.tokens_required}}</p>
            <button class="btn btn-primary" v-if="product.inShoppingCart == 0" @click="addToBag(product)">Add to cart</button>
            <button v-else class="btn btn-outline-warning" 
              @click="this.$store.dispatch('removeFromBag', product.video_id); product.inShoppingCart = 0;"
              >Remove from cart</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'Home',
  data() {
    return {
            
      active: false,
    }
  },
  computed: mapState([
    'products', 
    'productsInBag' 
  ]),

  methods: {

    addToBag(product) {
      product.quantity = 1;
      product.inShoppingCart = 1;
      this.$store.dispatch('addToBag', product);
    },
    isInBag(product) {
      return this.productsInBag.find(item => item.id == product.video_id)
      
    }
  }
}
</script>