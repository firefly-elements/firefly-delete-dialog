# <firefly-delete-dialog\>

This component allows the user to delete a doctype from the database.

##Installation 

npm install --save @firefly/firefly-delete-dialog

## In an HTML file
```
<html>
   <head>
      <script type="module">
         import '@firefly/firefly-delete-dialog';
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

## Running the demo locally
```
$ polymer serve --open
```

## Running Tests
```
$ polymer test
```

Your application is already set up to be tested via [web-component-tester](https://github.com/Polymer/web-component-tester). Run `polymer test` to run your application's test suite locally.
