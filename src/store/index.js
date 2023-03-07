import { createStore } from 'vuex'
import axios from 'axios'


export default createStore({
  state: {
    product1: [],
    product2: [],
    product3: [],
    product4:[],
    shops: [],
    productsInBag: [],
  },
  mutations: {
    loadProduct1 (state, product1) {
      state.product1 = product1;
      product1.forEach(product => {
      formatProduct(product);
      });
    },
    loadProduct2 (state, product2) {
      state.product2 = product2;
      product2.forEach(product => {
      formatProduct(product);
      });
    },
    loadProduct3 (state, product3) {
      state.product3 = product3;
      product3.forEach(product => {
      formatProduct(product);
      });
    },
    loadProduct4 (state, product4) {
      state.product4 = product4;
      product4.forEach(product => {
      formatProduct(product);
      });
    },
    loadShops (state, shops) {
      state.shops = shops;
      shops.forEach(shop => {
        shop.img = shop.base_files_url + "/" + shop.cover1_front;
      
      });
      
    },
    loadBag (state, products) {
      state.productsInBag = products;
    },
    addToBag(state, product) {
      state.productsInBag.push(product);
      localStorage.setItem("productsInBag", JSON.stringify(state.productsInBag))
    },
    removeFromBag(state, productId) {
      var updatedBag = state.productsInBag.filter(item => productId != item.video_id);
      state.productsInBag = updatedBag;
      localStorage.setItem("productsInBag", JSON.stringify(state.productsInBag))
    
    },
  },
  actions: {

    loadProduct1({ commit }) {
      axios
      .get('https://bitporn.com/rest_api/videos_being_watched/4/')
      .then(response => {
        commit('loadProduct1', response.data);
        console.log(response.data)
      })
    },
    loadProduct2({ commit }) {
      axios
      .get('https://bitporn.com/rest_api/most_viewed_videos/4/')
      .then(response => {
        commit('loadProduct2', response.data);
        console.log(response.data)
      })
    },
    loadProduct3({ commit }) {
      axios
      .get('https://bitporn.com/rest_api/new_videos/4/')
      .then(response => {
        commit('loadProduct3', response.data);
        console.log(response.data)
      })
    },
    loadProduct4({ commit }) {
      axios
      .get('https://bitporn.com/rest_api/recently_purchased/4/')
      .then(response => {
        commit('loadProduct4', response.data);
        console.log(response.data)
      })
    },
    loadShops({ commit }) {
      axios
      .get('https://bitporn.com/rest_api/popular_shops/6/')
      .then(response => {
        commit('loadShops', response.data);
        console.log(response.data)
      })
    },
    loadBag({ commit }) {
      
      if (localStorage.getItem("productsInBag")) {
        commit('loadBag', JSON.parse(localStorage.getItem("productsInBag")));
      }
      
    },

    addToBag({ commit }, product) {
      commit('addToBag', product);
      // console.log(product);
    },

    removeFromBag({ commit }, productId) {
      
      commit('removeFromBag', productId);
    
    },
    
  },
  modules: {
  }
})

//turns off console log
// console.log = function() {}



// function createLines(str, type){

//   var f25 = str.substring(0, 25);

//   var fl = f25.substring(0, f25.lastIndexOf(" "));

//   if (type === 1){

//     return fl;

//   }if (type === 2){

//   var sl = str.substring(f25.lastIndexOf(" "));
//   sl = limitChars(sl, 25)
//   return sl;

//   }
// }

function formatProduct(product){
  product.inShoppingCart = 0;
  product.price = (Number(product.tokens_required) / 100).toFixed(2);
  // product.price_short = (Number(product.tokens_required) / 100);
  product.title_short = (limitChars(product.title, 40));
  product.preview = product.formats["_preview.mp4"].file_url;
  product.trailer = product.formats["_trailer.mp4"].file_url;
  // product.movie = product.formats["_1080p.mp4"].file_url;
}

function limitChars(str, max){

  if (str.length <= max) return str;
  
  const lastIndex = str.lastIndexOf(' ', max);

  if (lastIndex === -1) return str.substring(0, max);

    return str.substring(0, lastIndex);
  }

