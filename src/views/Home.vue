<template>
  <div>
    <div>
      <!--gy-4 bootstrap spacing between rows-->
      <div class='row gy-4'>

        <!--iterate through products-->
        <div 
          v-for="(product, index) in this.products" 
          :key="parseInt(index)"
          class="col-sm-4 mb-3 mb-sm-0"
          :class="{ inBag : isInBag(product)}">
          
          <!--card begins here-->
          <div class="card mt-5 h-100"
              @mouseover="
              hideById(`img${product.video_id}`); 
              showById(`vid${product.video_id}`);
              startVideo(`vid${product.video_id}`);"
              @mouseleave="
              showById(`img${product.video_id}`); 
              hideById(`vid${product.video_id}`); 
              pauseVideo(`vid${product.video_id}`);"
          >

            <img :id="`img${product.video_id}`" 
              class="card-img-top"  
              :src="`https://bitporn.com/contents/videos_screenshots/0/${product.video_id}/preview.jpg`"  
              :alt="`${product.title}`"   
            />
            <video class="card-img-top" style="display:none" :id="`vid${product.video_id}`"
              :src="`https://bitporn.com/get_file/1/550233d0323423424c9520074f287b19/0/196/196_preview.mp4/`" 
              controls muted loop>
            </video>

            <!--card body-->
            <div class="card-body">

              <!--product title-->
              <!--max 45 characters-->
              <h5>{{product.title_short}}</h5>

              <!--product price-->
              <span style="color: yellow;
                 font-size: larger;
                 font-weight: bolder;">${{product.price_short}}
                </span>

            </div>

            <div class="card-footer p-1">
              <div class="row p-3">
                <button class="btn btn-primary"
                  v-if="product.inShoppingCart == 0" 
                  @click="addToBag(product)">Add to cart
                </button>
                <button v-else class="btn btn-outline-warning" 
                  @click="this.$store.dispatch('removeFromBag', product.video_id); 
                  product.inShoppingCart = 0;">Remove from cart
                </button>
              </div>
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
