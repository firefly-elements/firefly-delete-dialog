/**
 * This behavior is implemented by all dialogs.
 * 
 * @polymerMixin AspDialogMixin
 * @mixinFunction 
 */
export const AspDialogMixin = (superclass) => class extends superclass {
		// constructor(){
		// 	super();
		// }

		static get properties() {
        return {
            /** The model for the dialog. */
            model:{
                type: Object,
                value: null,
                notify: true
            }
        };
		}

		/**
		 * This method is used to initialize the dialog's model before opening the dialog.
		 * This method should be called whenever the dialog is used to create a 'new' object.
		 */
		init(){
        this.model = {};
		}

		/**
		 * This method is responsible for displaying the dialog.
		 */
		open(){
        let dialog = this.shadowRoot.querySelector("paper-dialog");
        dialog.open();
		}

		/**
		 * This variation of the open method initializes the model prior to opening the dialog.
		 */
		newOpen(){
        this.init();
        this.open();
		}
		
}
