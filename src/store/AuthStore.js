import { observable, action } from 'mobx';
import { INIT, PENDING, SUCCESS, FAILURE } from "../util";

class AuthStore {

  @observable state = INIT;

  @observable dialog = "";

  constructor() {
    // check local storage for jwt
  }

  openLoginDialog = () => this.dialog = "login";
  openRegisterDialog = () => this.dialog = "register";

  @action closeDialog = () => this.dialog = "";

}

export default new AuthStore();