import { createStore } from 'vuex'
import axios from 'axios'

export default createStore({
  state: {
    products: [],
    productsInBag: []
  },
  mutations: {
    loadProducts (state, products) {
      state.products = products;
      products.forEach(product => {
        product.inShoppingCart = 0;
        product.tokens_required = (Number(product.tokens_required) / 100).toFixed(2);
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

    loadProducts({ commit }) {
      axios
      .get('https://bitporn.com/rest_api/videos_being_watched/')
      .then(response => {
        commit('loadProducts', response.data);
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
    },

    removeFromBag({ commit }, productId) {
      
      commit('removeFromBag', productId);
    
    },
    
  },
  modules: {
  }
})
