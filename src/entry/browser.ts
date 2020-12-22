import * as module from '../index'

declare global {
  interface Window {
    myModule: any;
  }
}

window.myModule = {}
window.myModule.foo = module
