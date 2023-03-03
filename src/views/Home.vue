<template>
  <div>
    <div>
      <!--gy-4 bootstrap spacing between rows-->
      <div class='row gy-4' data-masonry='{"percentPosition": true }'>

        <!--iterate through products-->
        <div 
          v-for="(product, index) in this.products" 
          :key="parseInt(index)"
          class="col-sm-3 mb-3 mb-sm-0"
          :class="{ inBag : isInBag(product)}">
          
          <!--card begins here-->
          <div class="card mt-5 h-90"
              @mouseover="
              hideById(`img${product.video_id}`); 
              showById(`vid${product.video_id}`);
              startVideo(`vid${product.video_id}`);"
              @mouseleave="
              showById(`img${product.video_id}`); 
              hideById(`vid${product.video_id}`); 
              pauseVideo(`vid${product.video_id}`);">
            <!--photo-->
            <img :id="`img${product.video_id}`" 
              class="card-img-top"  
              :src="`https://bitporn.com/contents/videos_screenshots/0/${product.video_id}/preview.jpg`"  
              :alt="`${product.title}`"   
            />
            <!--video-->
            <video class="card-img-top" 
              style="display:none" 
              :id="`vid${product.video_id}`"
              :src="`${product.preview}`" 
              muted loop controls
              webkit-playsinline playsinline>
            </video>
            
            <!--stats-->
            <div class="text-start text-light">
            
              <!--views font awesome eye-->
              <i style="color: green;" class="fa-regular fa-eye p-2"></i>{{ product.video_viewed }}&nbsp;&nbsp;
              <!--ratings font awesome heart-->
              <i style="color: red;" class="fa-regular fa-heart"></i>&nbsp; &nbsp;{{ product.rating_amount }}
            
            </div>

            <!--card body-->
            <div class="card-body">

              <!--product title-->
              <div class="text-start">
                <h5>
                  {{product.title_short}}
                </h5>
              </div>
            </div><!--card body end-->
            
            <!--card footer-->
            <div class="card-footer p-3">
              
              <!--card footer row-->
              <div class="row p-1">
                
                <!--product price-->
                <div class="text-end"
                  style="color: yellow;
                  font-size: larger;
                  font-weight: bolder;
                  padding-bottom: 5px;">${{product.price_short}}
                </div>
                  
                <!--add to cart button-->
                <button class="btn btn-primary"
                  v-if="product.inShoppingCart == 0" 
                  @click="addToBag(product)">Add to cart
                </button>

                <!--remove from cart button-->
                <button v-else class="btn btn-outline-warning" 
                  @click="this.$store.dispatch('removeFromBag', product.video_id); 
                  product.inShoppingCart = 0;">Remove from cart
                </button>
              </div><!--card footer row end-->
            </div><!--card footer end-->
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
      
    },
    hideById(id) {
    var element = document.getElementById(id);
    element.style.display = "none";
    },
    showById(id) {
      var element = document.getElementById(id);
      element.style.display = "";
  },
  pauseVideo(id) {
  var video = document.getElementById(id);
  video.pause();
  },
  startVideo(id){
    let video = document.getElementById(id);
    video.play();
  }

  }
}
</script>
<style>

.video {
    object-fit: contain;
    overflow-clip-margin: content-box; 
    overflow: clip;
}

.preview {
    display: inline-block;
    position: relative;
    left: 0;
    height: auto;
    top: 0;
    width: calc(100% + 1px);
}

</style>
