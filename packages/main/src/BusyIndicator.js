import UI5Element from "@ui5/webcomponents-base/src/UI5Element.js";
import Bootstrap from "@ui5/webcomponents-base/src/Bootstrap.js";
import BusyIndicatorTemplateContext from "./BusyIndicatorTemplateContext.js";
import BusyIndicatorRenderer from "./build/compiled/BusyIndicatorRenderer.lit.js";

// Styles
import busyIndicatorCss from "./themes/BusyIndicator.css.js";

// all themes should work via the convenience import (inlined now, switch to json when elements can be imported individyally)
import "./ThemePropertiesProvider.js";
import BusyIndicatorType from "./types/BusyIndicatorType.js";

/**
 * @public
 */
const metadata = {
	tag: "ui5-busy-indicator",
	properties: /** @lends sap.ui.webcomponents.main.BusyIndicator.prototype */ {
		/**
		 * Defines the size of the <code>ui5-busy-indicator</code>.
		 * </br></br>
		 * <b>Note:</b> Available options are "Small", "Medium", "Large"
		 *
		 * @type {BusyIndicatorType}
		 * @defaultvalue "Large"
		 * @public
		 */
		size: { type: BusyIndicatorType, defaultValue: BusyIndicatorType.Large },
	},
};

/**
 * @class
 *
 * <h3 class="comment-api-title">Overview</h3>
 *
 * The <code>ui5-busy-indicator</code> signals that some operation is going on and that the
 *  user must wait. It does not block the current UI screen so other operations could be
 *  triggered in parallel.
 *
 * <h3>Usage</h3>
 * For the <code>ui5-busy-indicator</code> you can define the size of the indicator as well
 * as whether it is shown or hidden. If you wish to hide it use the html attribute <code>hidden</code>.
 *
 * <h3>ES6 Module Import</h3>
 *
 * <code>import "@ui5/webcomponents/dist/BusyIndicator";</code>
 *
 * @constructor
 * @author SAP SE
 * @alias sap.ui.webcomponents.main.BusyIndicator
 * @extends UI5Element
 * @tagname ui5-busy-indicator
 * @usestextcontent
 * @public
 */
class BusyIndicator extends UI5Element {
	static get metadata() {
		return metadata;
	}

	static get styles() {
		return busyIndicatorCss;
	}

	static get renderer() {
		return BusyIndicatorRenderer;
	}

	static get calculateTemplateContext() {
		return BusyIndicatorTemplateContext.calculate;
	}

	static async define(...params) {
		super.define(...params);
	}
}

Bootstrap.boot().then(_ => {
	BusyIndicator.define();
});

export default BusyIndicator;
