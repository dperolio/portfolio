console.log('i like pie!');
window.pie = 'pie';
const style = document.createElement('style');
style.appendChild(document.createTextNode(`* { color: teal; }`));
document.body.appendChild(style);

console.log(window.webpackJsonp);
vizality.settings.set('cake', 'lie');
console.log(vizality.settings.get('cake'));


(function () {
    'use strict';

    /**
     * Work around Safari 14 IndexedDB open bug.
     *
     * Safari has a horrible bug where IDB requests can hang while the browser is starting up. https://bugs.webkit.org/show_bug.cgi?id=226547
     * The only solution is to keep nudging it until it's awake.
     */
    function idbReady() {
        var isSafari = !navigator.userAgentData &&
            /Safari\//.test(navigator.userAgent) &&
            !/Chrom(e|ium)\//.test(navigator.userAgent);
        // No point putting other browsers or older versions of Safari through this mess.
        if (!isSafari || !indexedDB.databases)
            return Promise.resolve();
        var intervalId;
        return new Promise(function (resolve) {
            var tryIdb = function () { return indexedDB.databases().finally(resolve); };
            intervalId = setInterval(tryIdb, 100);
            tryIdb();
        }).finally(function () { return clearInterval(intervalId); });
    }

    function promisifyRequest(request) {
      return new Promise(function (resolve, reject) {
        // @ts-ignore - file size hacks
        request.oncomplete = request.onsuccess = function () {
          return resolve(request.result);
        }; // @ts-ignore - file size hacks


        request.onabort = request.onerror = function () {
          return reject(request.error);
        };
      });
    }

    function createStore(dbName, storeName) {
      var dbp = idbReady().then(function () {
        var request = indexedDB.open(dbName);

        request.onupgradeneeded = function () {
          return request.result.createObjectStore(storeName);
        };

        return promisifyRequest(request);
      });
      return function (txMode, callback) {
        return dbp.then(function (db) {
          return callback(db.transaction(storeName, txMode).objectStore(storeName));
        });
      };
    }

    var defaultGetStoreFunc;

    function defaultGetStore() {
      if (!defaultGetStoreFunc) {
        defaultGetStoreFunc = createStore('keyval-store', 'keyval');
      }

      return defaultGetStoreFunc;
    }
    /**
     * Get a value by its key.
     *
     * @param key
     * @param customStore Method to get a custom store. Use with caution (see the docs).
     */


    function get(key) {
      var customStore = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultGetStore();
      return customStore('readonly', function (store) {
        return promisifyRequest(store.get(key));
      });
    }
    /**
     * Set a value with a key.
     *
     * @param key
     * @param value
     * @param customStore Method to get a custom store. Use with caution (see the docs).
     */


    function set(key, value) {
      var customStore = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : defaultGetStore();
      return customStore('readwrite', function (store) {
        store.put(value, key);
        return promisifyRequest(store.transaction);
      });
    }

    console.log('i like cheese');

    set('hello', 'world')
      .then(() => console.log('It worked!'))
      .catch((err) => console.log('It failed!', err));

    get('hello').then((val) => console.log(val));

    // Create a class for the element
    class PopUpInfo extends HTMLElement {
      constructor () {
        // Always call super first in constructor
        super();

        // Create a shadow root
        const shadow = this.attachShadow({mode: 'open'});

        // Create spans
        const wrapper = document.createElement('span');
        wrapper.setAttribute('class', 'wrapper');

        const icon = document.createElement('span');
        icon.setAttribute('class', 'icon');
        icon.setAttribute('tabindex', 0);

        const info = document.createElement('span');
        info.setAttribute('class', 'info');

        // Take attribute content and put it inside the info span
        const text = this.getAttribute('data-text');
        info.textContent = text;

        // Insert icon
        let imgUrl;
        if (this.hasAttribute('img')) {
          imgUrl = this.getAttribute('img');
        } else {
          imgUrl = 'img/default.png';
        }

        const img = document.createElement('img');
        img.src = imgUrl;
        icon.appendChild(img);

        // Create some CSS to apply to the shadow dom
        const style = document.createElement('style');
        console.log(style.isConnected);

        style.textContent = `
      .wrapper {
        position: relative;
      }

      .info {
        font-size: 0.8rem;
        width: 200px;
        display: inline-block;
        border: 1px solid black;
        padding: 10px;
        background: white;
        border-radius: 10px;
        opacity: 0;
        transition: 0.6s all;
        position: absolute;
        bottom: 20px;
        left: 10px;
        z-index: 3;
      }

      img {
        width: 1.2rem;
      }

      .icon:hover + .info, .icon:focus + .info {
        opacity: 1;
      }
    `;

        // Attach the created elements to the shadow dom
        shadow.appendChild(style);
        console.log(style.isConnected);
        shadow.appendChild(wrapper);
        wrapper.appendChild(icon);
        wrapper.appendChild(info);
      }
    }

    // Define the new element
    customElements.define('popup-info', PopUpInfo);

})();
