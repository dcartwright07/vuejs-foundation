// This Foundation loader file was built from the following source file:
// - foundation-sites/dist/js/npm.js

// The 'zf' path alias is configured in the following config file:
// - build/webpack.base.conf.js

// Foundation core and utils - Best to import all of these
import jQuery from 'jquery';
import { Foundation } from '../../../node_modules/foundation-sites/js/foundation.core';
import { rtl, GetYoDigits, transitionend } from '../../../node_modules/foundation-sites/js/foundation.core.utils';
import { Box } from '../../../node_modules/foundation-sites/js/foundation.util.box';
import { onImagesLoaded } from '../../../node_modules/foundation-sites/js/foundation.util.imageLoader';
import { Keyboard } from '../../../node_modules/foundation-sites/js/foundation.util.keyboard';
import { MediaQuery } from '../../../node_modules/foundation-sites/js/foundation.util.mediaQuery';
import { Motion, Move } from '../../../node_modules/foundation-sites/js/foundation.util.motion';
import { Nest } from '../../../node_modules/foundation-sites/js/foundation.util.nest';
import { Timer } from '../../../node_modules/foundation-sites/js/foundation.util.timer';
import { Touch } from '../../../node_modules/foundation-sites/js/foundation.util.touch';
import { Triggers } from '../../../node_modules/foundation-sites/js/foundation.util.triggers';

// Foundation plugins - Pick and choose your plugins here!
// If you comment out a plugin you will need to comment out
// the corresponding Foundation.plugin line also.
// This is a template project so they have all been imported.
import { Abide } from '../../../node_modules/foundation-sites/js/foundation.abide';
import { Accordion } from '../../../node_modules/foundation-sites/js/foundation.accordion';
import { AccordionMenu } from '../../../node_modules/foundation-sites/js/foundation.accordionMenu';
import { Drilldown } from '../../../node_modules/foundation-sites/js/foundation.drilldown';
import { Dropdown } from '../../../node_modules/foundation-sites/js/foundation.dropdown';
import { DropdownMenu } from '../../../node_modules/foundation-sites/js/foundation.dropdownMenu';
import { Equalizer } from '../../../node_modules/foundation-sites/js/foundation.equalizer';
import { Interchange } from '../../../node_modules/foundation-sites/js/foundation.interchange';
import { Magellan } from '../../../node_modules/foundation-sites/js/foundation.magellan';
import { OffCanvas } from '../../../node_modules/foundation-sites/js/foundation.offcanvas';
import { Orbit } from '../../../node_modules/foundation-sites/js/foundation.orbit';
import { ResponsiveMenu } from '../../../node_modules/foundation-sites/js/foundation.responsiveMenu';
import { ResponsiveToggle } from '../../../node_modules/foundation-sites/js/foundation.responsiveToggle';
import { Reveal } from '../../../node_modules/foundation-sites/js/foundation.reveal';
import { Slider } from '../../../node_modules/foundation-sites/js/foundation.slider';
import { SmoothScroll } from '../../../node_modules/foundation-sites/js/foundation.smoothScroll';
import { Sticky } from '../../../node_modules/foundation-sites/js/foundation.sticky';
import { Tabs } from '../../../node_modules/foundation-sites/js/foundation.tabs';
import { Toggler } from '../../../node_modules/foundation-sites/js/foundation.toggler';
import { Tooltip } from '../../../node_modules/foundation-sites/js/foundation.tooltip';
import { ResponsiveAccordionTabs } from '../../../node_modules/foundation-sites/js/foundation.responsiveAccordionTabs';

// Add jQuery to the window object
window.$ = jQuery;
window.jQuery = jQuery;

// Require non-modular scripts
require('motion-ui');
require('what-input');

Foundation.addToJquery(jQuery);

// Add Foundation Utils to Foundation global namespace for backwards
// compatibility.
Foundation.rtl = rtl;
Foundation.GetYoDigits = GetYoDigits;
Foundation.transitionend = transitionend;
Foundation.Box = Box;
Foundation.onImagesLoaded = onImagesLoaded;
Foundation.Keyboard = Keyboard;
Foundation.MediaQuery = MediaQuery;
Foundation.Motion = Motion;
Foundation.Move = Move;
Foundation.Nest = Nest;
Foundation.Timer = Timer;

// Touch and Triggers previously were almost purely sede effect driven,
// so nzf/ need to add it to Foundation, just init them.
Touch.init(jQuery);
Triggers.init(jQuery, Foundation);
Foundation.plugin(Abide, 'Abide');
Foundation.plugin(Accordion, 'Accordion');
Foundation.plugin(AccordionMenu, 'AccordionMenu');
Foundation.plugin(Drilldown, 'Drilldown');
Foundation.plugin(Dropdown, 'Dropdown');
Foundation.plugin(DropdownMenu, 'DropdownMenu');
Foundation.plugin(Equalizer, 'Equalizer');
Foundation.plugin(Interchange, 'Interchange');
Foundation.plugin(Magellan, 'Magellan');
Foundation.plugin(OffCanvas, 'OffCanvas');
Foundation.plugin(Orbit, 'Orbit');
Foundation.plugin(ResponsiveMenu, 'ResponsiveMenu');
Foundation.plugin(ResponsiveToggle, 'ResponsiveToggle');
Foundation.plugin(Reveal, 'Reveal');
Foundation.plugin(Slider, 'Slider');
Foundation.plugin(SmoothScroll, 'SmoothScroll');
Foundation.plugin(Sticky, 'Sticky');
Foundation.plugin(Tabs, 'Tabs');
Foundation.plugin(Toggler, 'Toggler');
Foundation.plugin(Tooltip, 'Tooltip');
Foundation.plugin(ResponsiveAccordionTabs, 'ResponsiveAccordionTabs');

export default Foundation;
