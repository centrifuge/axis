import { configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
configure({ adapter: new Adapter() });
import '@babel/polyfill';

let clipboard = ''
// polyfill functions
const prevNav = navigator;

window.scrollTo = () => {}
Object.defineProperty(window, 'navigator', {
  get: function() {
    return {
      ...prevNav,
      clipboard: {
        writeText:(data) => {
          return new Promise((resolve)=>{
            clipboard = data;
            resolve()
          })
        },
        readText:() =>{
          return new Promise((resolve)=>{
            resolve(clipboard)
          })
        }
      }
    };
  },
});

