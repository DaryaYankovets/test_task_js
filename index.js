import createElement from './assets/lib/createElement.js';
import { getLSData, setLSData } from './assets/lib/localStorage.js';


export default class TagsContainer {

    constructor(product) {
      //this.product = product;
      this.render();
      //this.elem.querySelector('.card__button').addEventListener('click', this.onClick);
    }
    
    render() {
      this.elem = createElement(`
          <div class="tags__container">
            
          </div>
      `);
    }
  
    onClick = () => {
      let customEvent = new CustomEvent("product-add", { detail: this.product.id, bubbles: true });
      this.elem.dispatchEvent(customEvent);
    }
  
}