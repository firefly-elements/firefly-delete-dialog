# <firefly-delete-dialog\>

This component allows the user to delete a doctype from the database.

##Installation 

```
npm i @firefly-elements/firefly-delete-dialog
```

## In an HTML file
```
<html>
   <head>
      <script type="module">
         import '@firefly-elements/firefly-delete-dialog';
      </script>
   </head>
   <body>
      <firefly-delete-dialog id = "firefly-dialog">
      </firefly-delete-dialog>
      <button onclick="toggleDialog()">Press Me</button>
      <script>
         toggleDialog = () => {
            document.getElementById("firefly-dialog").open()
         }
         
         document.querySelector('firefly-delete-dialog').addEventListener('card-deleted', function (e) {
               console.log("card delete event fired") // checkout the console.
             })
         
      </script>
   </body>
</html>
</body>
</html>
```

## In Polymer3

```
import {PolymerElement, html} from '@polymer/polymer';
import '@firefly-elements/firefly-delete-dialog';

class SampleElement extends PolymerElement {
  static get template() {
    return html`
    <firefly-delete-dialog></firefly-delete-dialog>
    `;
  }
}
customElements.define('sample-element', SampleElement);

```



## Running the demo locally
```
$ polymer serve --open
```

## Running Tests
```
$ polymer test
```

Your application is already set up to be tested via [web-component-tester](https://github.com/Polymer/web-component-tester). Run `polymer test` to run your application's test suite locally.
