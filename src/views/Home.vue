<template>

  <!--main container-->
  <div class="container pb-5 py-0">
    <!--centering content-->
    <div class='row d-flex justify-content-center'>

      <!--grid for display-->
      <div class="row cols-xl-5 pt-2">

      <!--top section 1-->
      <div class="row pt-3 mb-3 pb-3">
        <div class="col-3">
          <div class="text-start text-light">Being Watched</div>
          <div 
          class="">
          
          <!--individual movie card begins-->
          <div
              @mouseover="
              hideById(`img-p1-${product1.video_id}`); 
              showById(`vid-p1-${product1.video_id}`);
              startVideo(`vid-p1-${product1.video_id}`);"
              @mouseleave="
              showById(`img-p1-${product1.video_id}`); 
              hideById(`vid-p1-${product1.video_id}`); 
              pauseVideo(`vid-p1-${product1.video_id}`);">
            <!--photo-->
            <img :id="`img-p1-${product1.video_id}`" 
              class="card-img-top"  
              :src="`https://bitporn.com/contents/videos_screenshots/0/${product1.video_id}/preview.jpg`"  
              :alt="`${product1.title}`"   
            />
            <!--video-->
            <video class="card-img-top" 
              style="display:none" 
              :id="`vid-p1-${product1.video_id}`"
              :src="`${product1.preview}`" 
              muted loop controls
              webkit-playsinline playsinline>
            </video>
            
            <!--stats-->
            <div class="row text-light">

              <!--shop name-->
              <div class="col text-start">
                <router-link to="/" class="bp_link">{{ product1.dvd_id }}</router-link>
              </div>
              <!-- <div class="col d-flex justify-content-end icon-small-fix text-end mx-1"> -->
              <div class="col d-flex justify-content-end icon-small-fix">
                
                
                <!--views font awesome eye-->
                <div>
                  <i class="fa-regular fa-eye p-2"></i>{{ product1.video_viewed }}
                </div>
                <!--ratings font awesome heart-->
                <div>
                  <i class="fa-regular fa-heart p-2"></i>{{ product1.rating_amount }}
                </div>
              </div>
            </div>
            <!--product title section-->
            <div class="row">

              <!--product title -->
              <div class="col-12 text-center">
                <h5>
                  {{product1.title_short}}
                </h5>
              </div>
            </div><!--product title section end-->
            
            <!--product price and check out-->
            <div>
              
              <!--card footer row-->
              <div class="row no-gutters p-1">
                
                <!--product price-->
                <div class="col-4 text-start text-light">${{product1.price}}
                </div>
                  
                <!--add to cart button-->
                <div class="col float-end text-end">
                <button class="btn btn-cart"
                  v-if="product1.inShoppingCart == 0" 
                  @click="addToBag(product1)">Add to cart
                </button>

                <!--go to checkout-->
                <router-link v-else to="/basket">
                  <button class="btn btn-primary"><i class="fa-solid fa-cart-shopping"></i>&nbsp;Checkout Now
                </button></router-link>
                </div>
              </div><!--card footer row end-->
            </div><!--card footer end-->
          </div>
        </div>
        </div>
        <div class="col-3">
          <div class="text-start text-light">Most Viewed</div>
        </div>
        <div class="col-3">
          <div class="text-start text-light">Latest Video</div>
        </div>
        <div class="col-3">
          <div class="text-start text-light">Just Purchased</div>
        </div>
      </div>

        <!--advertisement space-->
        <div class='row d-flex justify-content-center'>
          <div class="col-9 pd-3">
            <div class="card">
              <div class="card-body"><h1>BANNER</h1></div>
            </div>
          </div>
        </div>
        <!--popular shops-->
        <!--section title shops-->
        <div class="row pt-3 mb-3">
          <div class="col-9">
            <div class="text-start text-light">Popular Shops</div>
          </div>
          <div class="col-3">
            <div class="text-end"><router-link to="/" class="view-all">View All</router-link></div>
          </div>
        </div>
        <!--iterate through shops-->
        <div class="row pb-3">
          <!--iterate through shops-->
          <div
            v-for="(shop, index) in this.shops" 
            :key="parseInt(index)"
           class="col-4 col-sm-4 col-md-4 col-lg-3 col-xl-2 pb-3">
            <router-link to="/">
              <img width="100" height="100" class="rounded-circle" :src="`${shop.img}`">
              </router-link>
              
              <div class="row justify-content-center">
                <!-- <div class="col-3 text-end">
                  {{ shop.title }}
                </div> -->
                <div class="col text-center text-light">
                  <i class="fa-regular fa-eye p-1 "></i>{{ shop.dvd_viewed }}
                </div>
              </div>         
          </div>
        </div>


        <!--section title product1-->
        <div class="row pt-3 mb-3">
          <div class="col-9">
            <div class="text-start text-light">Videos Being Watched</div>
          </div>
          <div class="col-3">
            <div class="text-end"><router-link to="/" class="view-all">View All</router-link></div>
          </div>
        </div>

        <!--iterate through product1-->
        <div 
          v-for="(product, index) in this.product1" 
          :key="parseInt(index)"
          class="col-sm-12 col-md-12 col-lg-4 col-xl-3 pb-1"
          :class="{ inBag : isInBag(product)}">
          
          <!--individual movie card begins-->
          <div
              @mouseover="
              hideById(`img-p1-${product.video_id}`); 
              showById(`vid-p1-${product.video_id}`);
              startVideo(`vid-p1-${product.video_id}`);"
              @mouseleave="
              showById(`img-p1-${product.video_id}`); 
              hideById(`vid-p1-${product.video_id}`); 
              pauseVideo(`vid-p1-${product.video_id}`);">
            <!--photo-->
            <img :id="`img-p1-${product.video_id}`" 
              class="card-img-top"  
              :src="`https://bitporn.com/contents/videos_screenshots/0/${product.video_id}/preview.jpg`"  
              :alt="`${product.title}`"   
            />
            <!--video-->
            <video class="card-img-top" 
              style="display:none" 
              :id="`vid-p1-${product.video_id}`"
              :src="`${product.preview}`" 
              muted loop controls
              webkit-playsinline playsinline>
            </video>
            
            <!--stats-->
            <div class="row text-light">

              <!--shop name-->
              <div class="col text-start">
                <router-link to="/" class="bp_link">{{ product.dvd_id }}</router-link>
              </div>
              <!-- <div class="col d-flex justify-content-end icon-small-fix text-end mx-1"> -->
              <div class="col d-flex justify-content-end icon-small-fix">
                
                
                <!--views font awesome eye-->
                <div>
                  <i class="fa-regular fa-eye p-2"></i>{{ product.video_viewed }}
                </div>
                <!--ratings font awesome heart-->
                <div>
                  <i class="fa-regular fa-heart p-2"></i>{{ product.rating_amount }}
                </div>
              </div>
            </div>
            <!--product title section-->
            <div class="row">

              <!--product title -->
              <div class="col-12 text-center">
                <h5>
                  {{product.title_short}}
                </h5>
              </div>
            </div><!--product title section end-->
            
            <!--product price and check out-->
            <div>
              
              <!--card footer row-->
              <div class="row no-gutters p-1">
                
                <!--product price-->
                <div class="col-4 text-start text-light">${{product.price}}
                </div>
                  
                <!--add to cart button-->
                <div class="col float-end text-end">
                <button class="btn btn-cart"
                  v-if="product.inShoppingCart == 0" 
                  @click="addToBag(product)">Add to cart
                </button>

                <!--go to checkout-->
                <router-link v-else to="/basket">
                  <button class="btn btn-primary"><i class="fa-solid fa-cart-shopping"></i>&nbsp;Checkout Now
                </button></router-link>
                </div>
              </div><!--card footer row end-->
            </div><!--card footer end-->
          </div>
        </div>

        <!--section title product2-->
        <div class="row pt-3 mb-3 mt-5">
          <div class="col-9">
            <div class="text-start text-light">Most Viewed Videos</div>
          </div>
          <div class="col-3 text-end">
            <div class="text-end"><router-link to="/" class="view-all">View All</router-link></div>
          </div>
        </div>
        <!--iterate through product2-->
        <div 
          v-for="(product, index) in this.product2" 
          :key="parseInt(index)"
          class="col-sm-12 col-md-12 col-lg-4 col-xl-3 pb-1"
          :class="{ inBag : isInBag(product)}">
          
          <!--individual movie card begins-->
          <div
              @mouseover="
              hideById(`img-p2-${product.video_id}`); 
              showById(`vid-p2-${product.video_id}`);
              startVideo(`vid-p2-${product.video_id}`);"
              @mouseleave="
              showById(`img-p2-${product.video_id}`); 
              hideById(`vid-p2-${product.video_id}`); 
              pauseVideo(`vid-p2-${product.video_id}`);">
            <!--photo-->
            <img :id="`img-p2-${product.video_id}`" 
              class="card-img-top"  
              :src="`https://bitporn.com/contents/videos_screenshots/0/${product.video_id}/preview.jpg`"  
              :alt="`${product.title}`"   
            />
            <!--video-->
            <video class="card-img-top" 
              style="display:none" 
              :id="`vid-p2-${product.video_id}`"
              :src="`${product.preview}`" 
              muted loop controls
              webkit-playsinline playsinline>
            </video>
            
            <!--stats-->
            <div class="row text-light">

              <!--shop name-->
              <div class="col text-start">
                <router-link to="/" class="bp_link">{{ product.dvd_id }}</router-link>
              </div>
              <!-- <div class="col d-flex justify-content-end icon-small-fix text-end mx-1"> -->
              <div class="col d-flex justify-content-end icon-small-fix">
                
                
                <!--views font awesome eye-->
                <div>
                  <i class="fa-regular fa-eye p-2"></i>{{ product.video_viewed }}
                </div>
                <!--ratings font awesome heart-->
                <div>
                  <i class="fa-regular fa-heart p-2"></i>{{ product.rating_amount }}
                </div>
              </div>
            </div>
            <!--product title section-->
            <div class="row">

              <!--product title -->
              <div class="col-12 text-center">
                <h5>
                  {{product.title_short}}
                </h5>
              </div>
            </div><!--product title section end-->
            
            <!--product price and check out-->
            <div>
              
              <!--card footer row-->
              <div class="row no-gutters p-1">
                
                <!--product price-->
                <div class="col-4 text-start text-light">${{product.price}}
                </div>
                  
                <!--add to cart button-->
                <div class="col float-end text-end">
                <button class="btn btn-cart"
                  v-if="product.inShoppingCart == 0" 
                  @click="addToBag(product)">Add to cart
                </button>

                <!--go to checkout-->
                <router-link v-else to="/basket">
                  <button class="btn btn-primary"><i class="fa-solid fa-cart-shopping"></i>&nbsp;Checkout Now
                </button></router-link>
                </div>
              </div><!--card footer row end-->
            </div><!--card footer end-->
          </div>
        </div>

        <!--section title product3-->
        <div class="row pt-3 mb-3 mt-5">
          <div class="col-9">
            <div class="text-start text-light">New Videos</div>
          </div>
          <div class="col-3 text-end">
            <div class="text-end"><router-link to="/" class="view-all">View All</router-link></div>
          </div>
        </div>
        <!--iterate through product3-->
        <div 
          v-for="(product, index) in this.product3" 
          :key="parseInt(index)"
          class="col-sm-12 col-md-12 col-lg-4 col-xl-3 pb-1"
          :class="{ inBag : isInBag(product)}">
          
          <!--individual movie card begins-->
          <div
              @mouseover="
              hideById(`img-p3-${product.video_id}`); 
              showById(`vid-p3-${product.video_id}`);
              startVideo(`vid-p3-${product.video_id}`);"
              @mouseleave="
              showById(`img-p3-${product.video_id}`); 
              hideById(`vid-p3-${product.video_id}`); 
              pauseVideo(`vid-p3-${product.video_id}`);">
            <!--photo-->
            <img :id="`img-p3-${product.video_id}`" 
              class="card-img-top"  
              :src="`https://bitporn.com/contents/videos_screenshots/0/${product.video_id}/preview.jpg`"  
              :alt="`${product.title}`"   
            />
            <!--video-->
            <video class="card-img-top" 
              style="display:none" 
              :id="`vid-p3-${product.video_id}`"
              :src="`${product.preview}`" 
              muted loop controls
              webkit-playsinline playsinline>
            </video>
            
            <!--stats-->
            <div class="row text-light">

              <!--shop name-->
              <div class="col text-start">
                <router-link to="/" class="bp_link">{{ product.dvd_id }}</router-link>
              </div>
              <!-- <div class="col d-flex justify-content-end icon-small-fix text-end mx-1"> -->
              <div class="col d-flex justify-content-end icon-small-fix">
                
                
                <!--views font awesome eye-->
                <div>
                  <i class="fa-regular fa-eye p-2"></i>{{ product.video_viewed }}
                </div>
                <!--ratings font awesome heart-->
                <div>
                  <i class="fa-regular fa-heart p-2"></i>{{ product.rating_amount }}
                </div>
              </div>
            </div>
            <!--product title section-->
            <div class="row">

              <!--product title -->
              <div class="col-12 text-center">
                <h5>
                  {{product.title_short}}
                </h5>
              </div>
            </div><!--product title section end-->
            
            <!--product price and check out-->
            <div>
              
              <!--card footer row-->
              <div class="row no-gutters p-1">
                
                <!--product price-->
                <div class="col-4 text-start text-light">${{product.price}}
                </div>
                  
                <!--add to cart button-->
                <div class="col float-end text-end">
                <button class="btn btn-cart"
                  v-if="product.inShoppingCart == 0" 
                  @click="addToBag(product)">Add to cart
                </button>

                <!--go to checkout-->
                <router-link v-else to="/basket">
                  <button class="btn btn-primary"><i class="fa-solid fa-cart-shopping"></i>&nbsp;Checkout Now
                </button></router-link>
                </div>
              </div><!--card footer row end-->
            </div><!--card footer end-->
          </div>
        </div>

        <!--section title product4-->
        <div class="row pt-3 mb-3 mt-5">
          <div class="col-9">
            <div class="text-start text-light">Recently Purchased</div>
          </div>
          <div class="col-3 text-end">
            <div class="text-end"><router-link to="/" class="view-all">View All</router-link></div>
          </div>
        </div>
        <!--iterate through product4-->
        <div 
          v-for="(product, index) in this.product4" 
          :key="parseInt(index)"
          class="col-sm-12 col-md-12 col-lg-4 col-xl-3 pb-1"
          :class="{ inBag : isInBag(product)}">
          
          <!--individual movie card begins-->
          <div
              @mouseover="
              hideById(`img-p4-${product.video_id}`); 
              showById(`vid-p4-${product.video_id}`);
              startVideo(`vid-p4-${product.video_id}`);"
              @mouseleave="
              showById(`img-p4-${product.video_id}`); 
              hideById(`vid-p4-${product.video_id}`); 
              pauseVideo(`vid-p4-${product.video_id}`);">
            <!--photo-->
            <img :id="`img-p4-${product.video_id}`" 
              class="card-img-top"  
              :src="`https://bitporn.com/contents/videos_screenshots/0/${product.video_id}/preview.jpg`"  
              :alt="`${product.title}`"   
            />
            <!--video-->
            <video class="card-img-top" 
              style="display:none" 
              :id="`vid-p4-${product.video_id}`"
              :src="`${product.preview}`" 
              muted loop controls
              webkit-playsinline playsinline>
            </video>
            
            <!--stats-->
            <div class="row text-light">

              <!--shop name-->
              <div class="col text-start">
                <router-link to="/" class="bp_link">{{ product.dvd_id }}</router-link>
              </div>
              <!-- <div class="col d-flex justify-content-end icon-small-fix text-end mx-1"> -->
              <div class="col d-flex justify-content-end icon-small-fix">
                
                
                <!--views font awesome eye-->
                <div>
                  <i class="fa-regular fa-eye p-2"></i>{{ product.video_viewed }}
                </div>
                <!--ratings font awesome heart-->
                <div>
                  <i class="fa-regular fa-heart p-2"></i>{{ product.rating_amount }}
                </div>
              </div>
            </div>
            <!--product title section-->
            <div class="row">

              <!--product title -->
              <div class="col-12 text-center">
                <h5>
                  {{product.title_short}}
                </h5>
              </div>
            </div><!--product title section end-->
            
            <!--product price and check out-->
            <div>
              
              <!--card footer row-->
              <div class="row no-gutters p-1">
                
                <!--product price-->
                <div class="col-4 text-start text-light">${{product.price}}
                </div>
                  
                <!--add to cart button-->
                <div class="col float-end text-end">
                <button class="btn btn-cart"
                  v-if="product.inShoppingCart == 0" 
                  @click="addToBag(product)">Add to cart
                </button>

                <!--go to checkout-->
                <router-link v-else to="/basket">
                  <button class="btn btn-primary"><i class="fa-solid fa-cart-shopping"></i>&nbsp;Checkout Now
                </button></router-link>
                </div>
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
    'product1',
    'product2',
    'product3',
    'product4',
    'shops',    
    'productsInBag' 
  ]),

  methods: {

    addToBag(product) {
      product.quantity = 1;
      product.inShoppingCart = 1;
      this.$store.dispatch('addToBag', product);
      this.bagCheck(product.video_id);
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
    },
    bagCheck(productId){

      if (productId === this.product1.video_id){

        this.product1.inShoppingCart = 1

      }
      if (productId === this.product2.video_id){

      this.product2.inShoppingCart = 1

      }
      if (productId === this.product3.video_id){

      this.product3.inShoppingCart = 1

      }
      if (productId === this.product4.video_id){

      this.product4.inShoppingCart = 1

      }


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
