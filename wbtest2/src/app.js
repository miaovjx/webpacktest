/* 
 * @Author: anchen
 * @Date:   2017-07-25 17:06:47
 * @Last Modified by:   anchen
 * @Last Modified time: 2017-07-26 15:18:23
 */

import './css/common.css';
import Layers from './components/layer/layer.js';
const App = function() {
   var dom =document.getElementById('app');
   var layer =new Layers();
   dom.innerHTML= layer.tpl
}

new App();