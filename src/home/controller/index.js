'use strict';

import Base from './base.js';

export default class extends Base {
  /**
   * index action
   * @return {Promise} []
   */
  indexAction(){
    //auto render template file index_index.html
    return this.display();
  }
    productlistAction(){
      this.header("Access-Control-Allow-Origin", "*"); //设置 header
    let data= [{
            key:'1',
            name:'足球',
            price:66,
            state:1
        },{
            key:'2',
            name:'篮球',
            price:77,
            state:0
        },{
            key:'3',
            name:'乒乓球',
            price:88,
            state:1
        }];
    let resultData={count:3,data:data};
    return this.json(resultData);
    }
}