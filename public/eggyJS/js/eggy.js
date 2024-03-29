function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
   try {
      var info = gen[key](arg),
         value = info.value;
   } catch (error) {
      return void reject(error);
   }
   info.done ? resolve(value) : Promise.resolve(value).then(_next, _throw);
}
function _asyncToGenerator(fn) {
   return function () {
      var self = this,
         args = arguments;
      return new Promise(function (resolve, reject) {
         var gen = fn.apply(self, args);
         function _next(value) {
            asyncGeneratorStep(
               gen,
               resolve,
               reject,
               _next,
               _throw,
               'next',
               value
            );
         }
         function _throw(err) {
            asyncGeneratorStep(
               gen,
               resolve,
               reject,
               _next,
               _throw,
               'throw',
               err
            );
         }
         _next(void 0);
      });
   };
}
function ownKeys(object, enumerableOnly) {
   var symbols,
      keys = Object.keys(object);
   return (
      Object.getOwnPropertySymbols &&
         ((symbols = Object.getOwnPropertySymbols(object)),
         enumerableOnly &&
            (symbols = symbols.filter(function (sym) {
               return Object.getOwnPropertyDescriptor(object, sym).enumerable;
            })),
         keys.push.apply(keys, symbols)),
      keys
   );
}
function _objectSpread(target) {
   for (var i = 1; i < arguments.length; i++) {
      var source = null != arguments[i] ? arguments[i] : {};
      i % 2
         ? ownKeys(Object(source), !0).forEach(function (key) {
            _defineProperty(target, key, source[key]);
         })
         : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(
               target,
               Object.getOwnPropertyDescriptors(source)
            )
            : ownKeys(Object(source)).forEach(function (key) {
               Object.defineProperty(
                  target,
                  key,
                  Object.getOwnPropertyDescriptor(source, key)
               );
            });
   }
   return target;
}
function _defineProperty(obj, key, value) {
   return (
      key in obj
         ? Object.defineProperty(obj, key, {
            value: value,
            enumerable: !0,
            configurable: !0,
            writable: !0,
         })
         : (obj[key] = value),
      obj
   );
}
class Builder {
   constructor(userOptions) {
      this.options = _objectSpread(
         _objectSpread({}, this.buildDefaultOptions(userOptions)),
         userOptions
      );
   }
   create() {
      var _this = this;
      return _asyncToGenerator(function* () {
         yield Promise.all([_this.addStyling(), _this.addTheme()]);
         var toast = yield _this.build();
         return (
            yield _this.bindings(toast),
            setTimeout(() => {
               toast.classList.add('open');
            }, 250),
            setTimeout(() => {
               _this.destroyToast(toast);
            }, _this.options.duration),
            toast
         );
      })();
   }
   build() {
      var _this2 = this;
      return _asyncToGenerator(function* () {
         var wrapper = yield _this2.createWrapper(),
            toast = yield _this2.createToast();
         return wrapper.appendChild(toast), toast;
      })();
   }
   createToast() {
      var _this3 = this;
      return _asyncToGenerator(function* () {
         var message,
            toast = document.createElement('div'),
            innerWrapper = document.createElement('div');
         return (
            toast.setAttribute(
               'id',
               'eggy-' + Math.random().toString(36).substr(2, 4)
            ),
            toast.classList.add(_this3.options.type),
            _this3.options.title &&
               ((message = document.createElement('p')).classList.add('title'),
               (message.innerHTML = _this3.options.title),
               innerWrapper.appendChild(message)),
            _this3.options.message &&
               ((message = document.createElement('p')).classList.add(
                  'message'
               ),
               (message.innerHTML = _this3.options.message),
               innerWrapper.appendChild(message)),
            (toast.innerHTML = yield _this3.getIconContent()),
            toast.appendChild(innerWrapper),
            (toast.innerHTML += yield _this3.getCloseBtnContent()),
            (toast = _this3.options.progressBar
               ? _this3.addProgressBarToToast(toast)
               : toast)
         );
      })();
   }
   destroyToast(toast) {
      return _asyncToGenerator(function* () {
         toast.classList.add('closing'),
         setTimeout(() => {
            toast.remove();
         }, 450);
      })();
   }
   bindings(toast) {
      var _this4 = this;
      return _asyncToGenerator(function* () {
         toast.querySelector('.close-btn').addEventListener(
            'click',
            _asyncToGenerator(function* () {
               _this4.destroyToast(toast);
            })
         );
      })();
   }
   createWrapper() {
      var _this5 = this;
      return _asyncToGenerator(function* () {
         var wrapper = yield _this5.isAlreadyOpen();
         return (
            wrapper ||
               ((wrapper = document.createElement('div')).classList.add(
                  'eggy',
                  _this5.options.position
               ),
               document.querySelector('body').appendChild(wrapper)),
            wrapper
         );
      })();
   }
   isAlreadyOpen() {
      var _this6 = this;
      return _asyncToGenerator(function* () {
         var wrapper = document.querySelector(
            '.eggy.'.concat(_this6.options.position)
         );
         return wrapper || !1;
      })();
   }
   getIconContent() {
      var _this7 = this;
      return _asyncToGenerator(function* () {
         switch (_this7.options.type) {
         case 'success':
            return '<svg viewBox="0 0 24 24" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M2 12C2 6.48 6.47998 2 12 2C17.52 2 22 6.48 22 12C22 17.52 17.52 22 12 22C6.47998 22 2 17.52 2 12ZM5 12L10 17L19 8L17.59 6.58L10 14.17L6.41003 10.59L5 12Z"></path></svg>';
         case 'info':
            return '<svg width="24" height="24" viewBox="0 0 24 24" fill="none"><g id="icon/action/info_24px"><path id="icon/action/info_24px_2" fill-rule="evenodd" clip-rule="evenodd" d="M12 2C6.47998 2 2 6.48 2 12C2 17.52 6.47998 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 17C11.45 17 11 16.55 11 16V12C11 11.45 11.45 11 12 11C12.55 11 13 11.45 13 12V16C13 16.55 12.55 17 12 17ZM11 7V9H13V7H11Z"></path></g></svg>';
         case 'warning':
            return '<svg viewBox="0 0 24 24" fill="none"><g id="icon/alert/warning_24px"><path id="icon/alert/warning_24px_2" fill-rule="evenodd" clip-rule="evenodd" d="M19.53 20.5037C21.07 20.5037 22.03 18.8337 21.26 17.5037L13.73 4.49374C12.96 3.16375 11.04 3.16375 10.27 4.49374L2.74001 17.5037C1.96999 18.8337 2.93001 20.5037 4.46999 20.5037H19.53ZM12 13.5037C11.45 13.5037 11 13.0537 11 12.5037V10.5037C11 9.95376 11.45 9.50375 12 9.50375C12.55 9.50375 13 9.95376 13 10.5037V12.5037C13 13.0537 12.55 13.5037 12 13.5037ZM11 15.5037V17.5037H13V15.5037H11Z"></path></g></svg>';
         case 'error':
            return '<svg viewBox="0 0 24 24" fill="none"><g id="icon/alert/error_24px"><path id="icon/alert/error_24px_2" fill-rule="evenodd" clip-rule="evenodd" d="M12 2C6.47998 2 2 6.48001 2 12C2 17.52 6.47998 22 12 22C17.52 22 22 17.52 22 12C22 6.48001 17.52 2 12 2ZM12 13C11.45 13 11 12.55 11 12V8C11 7.45001 11.45 7 12 7C12.55 7 13 7.45001 13 8V12C13 12.55 12.55 13 12 13ZM11 15V17H13V15H11Z"></path></g></svg>';
         }
      })();
   }
   getCloseBtnContent() {
      return _asyncToGenerator(function* () {
         return '<svg class="close-btn" viewBox="0 0 24 24" fill="none"><g id="icon/navigation/close_24px"><path id="icon/navigation/close_24px_2" d="M18.3 5.70999C18.1131 5.52273 17.8595 5.4175 17.595 5.4175C17.3305 5.4175 17.0768 5.52273 16.89 5.70999L12 10.59L7.10997 5.69999C6.92314 5.51273 6.66949 5.4075 6.40497 5.4075C6.14045 5.4075 5.8868 5.51273 5.69997 5.69999C5.30997 6.08999 5.30997 6.71999 5.69997 7.10999L10.59 12L5.69997 16.89C5.30997 17.28 5.30997 17.91 5.69997 18.3C6.08997 18.69 6.71997 18.69 7.10997 18.3L12 13.41L16.89 18.3C17.28 18.69 17.91 18.69 18.3 18.3C18.69 17.91 18.69 17.28 18.3 16.89L13.41 12L18.3 7.10999C18.68 6.72999 18.68 6.08999 18.3 5.70999Z"></path></g></svg>';
      })();
   }
   addStyling() {
      return _asyncToGenerator(function* () {
         var styles;
         document.querySelector('.eggy-styles') ||
            ((styles = document.createElement('style')).classList.add(
               'eggy-styles'
            ),
            (styles.innerHTML =
               '.eggy{position:fixed;width:400px;max-width:90%;padding:1rem;top:0}.eggy,.eggy>div{overflow:hidden;-webkit-box-sizing:border-box;box-sizing:border-box}.eggy>div{width:100%;-webkit-transition:opacity .3s ease,left .2s ease,right .2s ease,max-height .4s,margin-top .4s,padding .4s;transition:opacity .3s ease,left .2s ease,right .2s ease,max-height .4s,margin-top .4s,padding .4s;position:relative;opacity:0;max-height:200px;margin-top:10px;border-radius:4px;padding:.75rem 1rem;background:#fff;display:-ms-grid;display:grid;-ms-grid-columns:1fr 5fr 1fr;grid-template-columns:1fr 5fr 1fr;grid-gap:.5rem;display:-ms-flexbox;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;-webkit-box-align:center;-ms-flex-align:center;align-items:center;z-index:2}.eggy>div.open{opacity:1}.eggy>div.closing{max-height:0;opacity:0;margin-top:0;padding:0}.eggy.top-right{right:0}.eggy.top-right>div{right:-425px}.eggy.top-right>div.open{right:0}.eggy.top-left{left:0}.eggy.top-left>div{left:-425px}.eggy.top-left>div.open{left:0}'),
            document.querySelector('head').appendChild(styles));
      })();
   }
   addTheme() {
      var _this8 = this;
      return _asyncToGenerator(function* () {
         var styles;
         !document.querySelector('.eggy-theme') &&
            _this8.options.styles &&
            ((styles = document.createElement('style')).classList.add(
               'eggy-theme'
            ),
            (styles.innerHTML =
               '@-webkit-keyframes progressBar{0%{left:0}to{left:-105%}}@keyframes progressBar{0%{left:0}to{left:-105%}}.eggy>div.success{border:2px solid #61c9a8}.eggy>div.success svg:first-of-type{fill:#61c9a8}.eggy>div.warning{border:2px solid #ed9b40}.eggy>div.warning svg:first-of-type{fill:#ed9b40}.eggy>div.info{border:2px solid #40a2ed}.eggy>div.info svg:first-of-type{fill:#40a2ed}.eggy>div.error{border:2px solid #d64550}.eggy>div.error svg:first-of-type{fill:#d64550}.eggy>div svg:first-of-type{width:30px;z-index:2}.eggy>div svg:last-of-type{z-index:2;width:25px;fill:#8d8d8d;-ms-grid-column-align:center;justify-self:center;cursor:pointer;margin-left:auto}.eggy>div>div .message,.eggy>div>div .title{margin:.1rem 0;color:#404040}.eggy>div>div .message.title,.eggy>div>div .title.title{font-weight:700;font-size:.9rem}.eggy>div>div .message.message,.eggy>div>div .title.message{font-weight:400;font-size:.8rem}'),
            document.querySelector('head').appendChild(styles));
      })();
   }
   addProgressBarToToast(toast) {
      var _this9 = this;
      return _asyncToGenerator(function* () {
         var toast_id,
            progressBarStyles = document.createElement('span'),
            duration = _this9.options.duration / 1e3;
         return (
            progressBarStyles.classList.add('progress-bar'),
            toast.appendChild(progressBarStyles),
            _this9.options.styles &&
               ((toast_id = toast.getAttribute('id')),
               ((progressBarStyles =
                  document.createElement('style')).innerHTML =
                  '.eggy>div .progress-bar{height:100%;width:105%;position:absolute;top:0;z-index:1;-webkit-clip-path:polygon(0 0,100% 0,95% 100%,0 100%);clip-path:polygon(0 0,100% 0,95% 100%,0 100%);-webkit-animation-name:progressBar;animation-name:progressBar;-webkit-animation-fill-mode:forwards;animation-fill-mode:forwards;-webkit-animation-timing-function:linear;animation-timing-function:linear}.eggy>div.success>.progress-bar{background-color:rgba(97,201,168,.1)}.eggy>div.warning>.progress-bar{background-color:rgba(237,155,64,.1)}.eggy>div.info>.progress-bar{background-color:rgba(64,162,237,.1)}.eggy>div.error>.progress-bar{background-color:rgba(214,69,80,.1)}'),
               (progressBarStyles.innerHTML += '#'
                  .concat(toast_id, ' > .progress-bar { animation-duration: ')
                  .concat(duration, 's }')),
               toast.appendChild(progressBarStyles)),
            toast
         );
      })();
   }
   buildDefaultOptions(userOptions) {
      var _userOptions$type,
         options = {
            position: 'top-right',
            type: 'success',
            styles: !0,
            duration: 5e3,
            progressBar: !0,
         };
      switch (
         null != userOptions &&
         null !== (_userOptions$type = userOptions.type) &&
         void 0 !== _userOptions$type
            ? _userOptions$type
            : options.type
      ) {
      case 'success':
         (options.title = 'Success!'),
         (options.message = 'Task successfully completed.');
         break;
      case 'info':
         (options.title = 'Information'),
         (options.message = 'Please take note of this information.');
         break;
      case 'warning':
         (options.title = 'Warning'),
         (options.message = 'Please be careful!');
         break;
      case 'error':
         (options.title = 'Whoops!'),
         (options.message = 'Something wen\'t wrong, please try again!');
      }
      return options;
   }
}
var Eggy = (function () {
   var _ref2 = _asyncToGenerator(function* (options) {
      return yield new Builder(options).create();
   });
   return function (_x) {
      return _ref2.apply(this, arguments);
   };
})();
// export { Eggy as Eggy };
