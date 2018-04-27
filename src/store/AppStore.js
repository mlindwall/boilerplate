import { observable, action } from 'mobx';
import { INIT, PENDING, SUCCESS, FAILURE } from '../util'
import axios from 'axios';

class AppStore {

  @observable state = INIT;

  constructor() {
    // retrieve data
  }

}

export default new AppStore();