import "./base.scss";
import styles from "./styles.scss";
import gFlexGalleryCustom from "./functions.js";

addListenerMulti(window, 'load resize', function() {
	const galleryTestWrap = new gFlexGalleryCustom('galleryTestWrap');
});