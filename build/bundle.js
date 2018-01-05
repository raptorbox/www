/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/build/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
 * jQuery JavaScript Library v3.2.1
 * https://jquery.com/
 *
 * Includes Sizzle.js
 * https://sizzlejs.com/
 *
 * Copyright JS Foundation and other contributors
 * Released under the MIT license
 * https://jquery.org/license
 *
 * Date: 2017-03-20T18:59Z
 */
( function( global, factory ) {

	"use strict";

	if ( typeof module === "object" && typeof module.exports === "object" ) {

		// For CommonJS and CommonJS-like environments where a proper `window`
		// is present, execute the factory and get jQuery.
		// For environments that do not have a `window` with a `document`
		// (such as Node.js), expose a factory as module.exports.
		// This accentuates the need for the creation of a real `window`.
		// e.g. var jQuery = require("jquery")(window);
		// See ticket #14549 for more info.
		module.exports = global.document ?
			factory( global, true ) :
			function( w ) {
				if ( !w.document ) {
					throw new Error( "jQuery requires a window with a document" );
				}
				return factory( w );
			};
	} else {
		factory( global );
	}

// Pass this if window is not defined yet
} )( typeof window !== "undefined" ? window : this, function( window, noGlobal ) {

// Edge <= 12 - 13+, Firefox <=18 - 45+, IE 10 - 11, Safari 5.1 - 9+, iOS 6 - 9.1
// throw exceptions when non-strict code (e.g., ASP.NET 4.5) accesses strict mode
// arguments.callee.caller (trac-13335). But as of jQuery 3.0 (2016), strict mode should be common
// enough that all such attempts are guarded in a try block.
"use strict";

var arr = [];

var document = window.document;

var getProto = Object.getPrototypeOf;

var slice = arr.slice;

var concat = arr.concat;

var push = arr.push;

var indexOf = arr.indexOf;

var class2type = {};

var toString = class2type.toString;

var hasOwn = class2type.hasOwnProperty;

var fnToString = hasOwn.toString;

var ObjectFunctionString = fnToString.call( Object );

var support = {};



	function DOMEval( code, doc ) {
		doc = doc || document;

		var script = doc.createElement( "script" );

		script.text = code;
		doc.head.appendChild( script ).parentNode.removeChild( script );
	}
/* global Symbol */
// Defining this global in .eslintrc.json would create a danger of using the global
// unguarded in another place, it seems safer to define global only for this module



var
	version = "3.2.1",

	// Define a local copy of jQuery
	jQuery = function( selector, context ) {

		// The jQuery object is actually just the init constructor 'enhanced'
		// Need init if jQuery is called (just allow error to be thrown if not included)
		return new jQuery.fn.init( selector, context );
	},

	// Support: Android <=4.0 only
	// Make sure we trim BOM and NBSP
	rtrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,

	// Matches dashed string for camelizing
	rmsPrefix = /^-ms-/,
	rdashAlpha = /-([a-z])/g,

	// Used by jQuery.camelCase as callback to replace()
	fcamelCase = function( all, letter ) {
		return letter.toUpperCase();
	};

jQuery.fn = jQuery.prototype = {

	// The current version of jQuery being used
	jquery: version,

	constructor: jQuery,

	// The default length of a jQuery object is 0
	length: 0,

	toArray: function() {
		return slice.call( this );
	},

	// Get the Nth element in the matched element set OR
	// Get the whole matched element set as a clean array
	get: function( num ) {

		// Return all the elements in a clean array
		if ( num == null ) {
			return slice.call( this );
		}

		// Return just the one element from the set
		return num < 0 ? this[ num + this.length ] : this[ num ];
	},

	// Take an array of elements and push it onto the stack
	// (returning the new matched element set)
	pushStack: function( elems ) {

		// Build a new jQuery matched element set
		var ret = jQuery.merge( this.constructor(), elems );

		// Add the old object onto the stack (as a reference)
		ret.prevObject = this;

		// Return the newly-formed element set
		return ret;
	},

	// Execute a callback for every element in the matched set.
	each: function( callback ) {
		return jQuery.each( this, callback );
	},

	map: function( callback ) {
		return this.pushStack( jQuery.map( this, function( elem, i ) {
			return callback.call( elem, i, elem );
		} ) );
	},

	slice: function() {
		return this.pushStack( slice.apply( this, arguments ) );
	},

	first: function() {
		return this.eq( 0 );
	},

	last: function() {
		return this.eq( -1 );
	},

	eq: function( i ) {
		var len = this.length,
			j = +i + ( i < 0 ? len : 0 );
		return this.pushStack( j >= 0 && j < len ? [ this[ j ] ] : [] );
	},

	end: function() {
		return this.prevObject || this.constructor();
	},

	// For internal use only.
	// Behaves like an Array's method, not like a jQuery method.
	push: push,
	sort: arr.sort,
	splice: arr.splice
};

jQuery.extend = jQuery.fn.extend = function() {
	var options, name, src, copy, copyIsArray, clone,
		target = arguments[ 0 ] || {},
		i = 1,
		length = arguments.length,
		deep = false;

	// Handle a deep copy situation
	if ( typeof target === "boolean" ) {
		deep = target;

		// Skip the boolean and the target
		target = arguments[ i ] || {};
		i++;
	}

	// Handle case when target is a string or something (possible in deep copy)
	if ( typeof target !== "object" && !jQuery.isFunction( target ) ) {
		target = {};
	}

	// Extend jQuery itself if only one argument is passed
	if ( i === length ) {
		target = this;
		i--;
	}

	for ( ; i < length; i++ ) {

		// Only deal with non-null/undefined values
		if ( ( options = arguments[ i ] ) != null ) {

			// Extend the base object
			for ( name in options ) {
				src = target[ name ];
				copy = options[ name ];

				// Prevent never-ending loop
				if ( target === copy ) {
					continue;
				}

				// Recurse if we're merging plain objects or arrays
				if ( deep && copy && ( jQuery.isPlainObject( copy ) ||
					( copyIsArray = Array.isArray( copy ) ) ) ) {

					if ( copyIsArray ) {
						copyIsArray = false;
						clone = src && Array.isArray( src ) ? src : [];

					} else {
						clone = src && jQuery.isPlainObject( src ) ? src : {};
					}

					// Never move original objects, clone them
					target[ name ] = jQuery.extend( deep, clone, copy );

				// Don't bring in undefined values
				} else if ( copy !== undefined ) {
					target[ name ] = copy;
				}
			}
		}
	}

	// Return the modified object
	return target;
};

jQuery.extend( {

	// Unique for each copy of jQuery on the page
	expando: "jQuery" + ( version + Math.random() ).replace( /\D/g, "" ),

	// Assume jQuery is ready without the ready module
	isReady: true,

	error: function( msg ) {
		throw new Error( msg );
	},

	noop: function() {},

	isFunction: function( obj ) {
		return jQuery.type( obj ) === "function";
	},

	isWindow: function( obj ) {
		return obj != null && obj === obj.window;
	},

	isNumeric: function( obj ) {

		// As of jQuery 3.0, isNumeric is limited to
		// strings and numbers (primitives or objects)
		// that can be coerced to finite numbers (gh-2662)
		var type = jQuery.type( obj );
		return ( type === "number" || type === "string" ) &&

			// parseFloat NaNs numeric-cast false positives ("")
			// ...but misinterprets leading-number strings, particularly hex literals ("0x...")
			// subtraction forces infinities to NaN
			!isNaN( obj - parseFloat( obj ) );
	},

	isPlainObject: function( obj ) {
		var proto, Ctor;

		// Detect obvious negatives
		// Use toString instead of jQuery.type to catch host objects
		if ( !obj || toString.call( obj ) !== "[object Object]" ) {
			return false;
		}

		proto = getProto( obj );

		// Objects with no prototype (e.g., `Object.create( null )`) are plain
		if ( !proto ) {
			return true;
		}

		// Objects with prototype are plain iff they were constructed by a global Object function
		Ctor = hasOwn.call( proto, "constructor" ) && proto.constructor;
		return typeof Ctor === "function" && fnToString.call( Ctor ) === ObjectFunctionString;
	},

	isEmptyObject: function( obj ) {

		/* eslint-disable no-unused-vars */
		// See https://github.com/eslint/eslint/issues/6125
		var name;

		for ( name in obj ) {
			return false;
		}
		return true;
	},

	type: function( obj ) {
		if ( obj == null ) {
			return obj + "";
		}

		// Support: Android <=2.3 only (functionish RegExp)
		return typeof obj === "object" || typeof obj === "function" ?
			class2type[ toString.call( obj ) ] || "object" :
			typeof obj;
	},

	// Evaluates a script in a global context
	globalEval: function( code ) {
		DOMEval( code );
	},

	// Convert dashed to camelCase; used by the css and data modules
	// Support: IE <=9 - 11, Edge 12 - 13
	// Microsoft forgot to hump their vendor prefix (#9572)
	camelCase: function( string ) {
		return string.replace( rmsPrefix, "ms-" ).replace( rdashAlpha, fcamelCase );
	},

	each: function( obj, callback ) {
		var length, i = 0;

		if ( isArrayLike( obj ) ) {
			length = obj.length;
			for ( ; i < length; i++ ) {
				if ( callback.call( obj[ i ], i, obj[ i ] ) === false ) {
					break;
				}
			}
		} else {
			for ( i in obj ) {
				if ( callback.call( obj[ i ], i, obj[ i ] ) === false ) {
					break;
				}
			}
		}

		return obj;
	},

	// Support: Android <=4.0 only
	trim: function( text ) {
		return text == null ?
			"" :
			( text + "" ).replace( rtrim, "" );
	},

	// results is for internal usage only
	makeArray: function( arr, results ) {
		var ret = results || [];

		if ( arr != null ) {
			if ( isArrayLike( Object( arr ) ) ) {
				jQuery.merge( ret,
					typeof arr === "string" ?
					[ arr ] : arr
				);
			} else {
				push.call( ret, arr );
			}
		}

		return ret;
	},

	inArray: function( elem, arr, i ) {
		return arr == null ? -1 : indexOf.call( arr, elem, i );
	},

	// Support: Android <=4.0 only, PhantomJS 1 only
	// push.apply(_, arraylike) throws on ancient WebKit
	merge: function( first, second ) {
		var len = +second.length,
			j = 0,
			i = first.length;

		for ( ; j < len; j++ ) {
			first[ i++ ] = second[ j ];
		}

		first.length = i;

		return first;
	},

	grep: function( elems, callback, invert ) {
		var callbackInverse,
			matches = [],
			i = 0,
			length = elems.length,
			callbackExpect = !invert;

		// Go through the array, only saving the items
		// that pass the validator function
		for ( ; i < length; i++ ) {
			callbackInverse = !callback( elems[ i ], i );
			if ( callbackInverse !== callbackExpect ) {
				matches.push( elems[ i ] );
			}
		}

		return matches;
	},

	// arg is for internal usage only
	map: function( elems, callback, arg ) {
		var length, value,
			i = 0,
			ret = [];

		// Go through the array, translating each of the items to their new values
		if ( isArrayLike( elems ) ) {
			length = elems.length;
			for ( ; i < length; i++ ) {
				value = callback( elems[ i ], i, arg );

				if ( value != null ) {
					ret.push( value );
				}
			}

		// Go through every key on the object,
		} else {
			for ( i in elems ) {
				value = callback( elems[ i ], i, arg );

				if ( value != null ) {
					ret.push( value );
				}
			}
		}

		// Flatten any nested arrays
		return concat.apply( [], ret );
	},

	// A global GUID counter for objects
	guid: 1,

	// Bind a function to a context, optionally partially applying any
	// arguments.
	proxy: function( fn, context ) {
		var tmp, args, proxy;

		if ( typeof context === "string" ) {
			tmp = fn[ context ];
			context = fn;
			fn = tmp;
		}

		// Quick check to determine if target is callable, in the spec
		// this throws a TypeError, but we will just return undefined.
		if ( !jQuery.isFunction( fn ) ) {
			return undefined;
		}

		// Simulated bind
		args = slice.call( arguments, 2 );
		proxy = function() {
			return fn.apply( context || this, args.concat( slice.call( arguments ) ) );
		};

		// Set the guid of unique handler to the same of original handler, so it can be removed
		proxy.guid = fn.guid = fn.guid || jQuery.guid++;

		return proxy;
	},

	now: Date.now,

	// jQuery.support is not used in Core but other projects attach their
	// properties to it so it needs to exist.
	support: support
} );

if ( typeof Symbol === "function" ) {
	jQuery.fn[ Symbol.iterator ] = arr[ Symbol.iterator ];
}

// Populate the class2type map
jQuery.each( "Boolean Number String Function Array Date RegExp Object Error Symbol".split( " " ),
function( i, name ) {
	class2type[ "[object " + name + "]" ] = name.toLowerCase();
} );

function isArrayLike( obj ) {

	// Support: real iOS 8.2 only (not reproducible in simulator)
	// `in` check used to prevent JIT error (gh-2145)
	// hasOwn isn't used here due to false negatives
	// regarding Nodelist length in IE
	var length = !!obj && "length" in obj && obj.length,
		type = jQuery.type( obj );

	if ( type === "function" || jQuery.isWindow( obj ) ) {
		return false;
	}

	return type === "array" || length === 0 ||
		typeof length === "number" && length > 0 && ( length - 1 ) in obj;
}
var Sizzle =
/*!
 * Sizzle CSS Selector Engine v2.3.3
 * https://sizzlejs.com/
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license
 * http://jquery.org/license
 *
 * Date: 2016-08-08
 */
(function( window ) {

var i,
	support,
	Expr,
	getText,
	isXML,
	tokenize,
	compile,
	select,
	outermostContext,
	sortInput,
	hasDuplicate,

	// Local document vars
	setDocument,
	document,
	docElem,
	documentIsHTML,
	rbuggyQSA,
	rbuggyMatches,
	matches,
	contains,

	// Instance-specific data
	expando = "sizzle" + 1 * new Date(),
	preferredDoc = window.document,
	dirruns = 0,
	done = 0,
	classCache = createCache(),
	tokenCache = createCache(),
	compilerCache = createCache(),
	sortOrder = function( a, b ) {
		if ( a === b ) {
			hasDuplicate = true;
		}
		return 0;
	},

	// Instance methods
	hasOwn = ({}).hasOwnProperty,
	arr = [],
	pop = arr.pop,
	push_native = arr.push,
	push = arr.push,
	slice = arr.slice,
	// Use a stripped-down indexOf as it's faster than native
	// https://jsperf.com/thor-indexof-vs-for/5
	indexOf = function( list, elem ) {
		var i = 0,
			len = list.length;
		for ( ; i < len; i++ ) {
			if ( list[i] === elem ) {
				return i;
			}
		}
		return -1;
	},

	booleans = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",

	// Regular expressions

	// http://www.w3.org/TR/css3-selectors/#whitespace
	whitespace = "[\\x20\\t\\r\\n\\f]",

	// http://www.w3.org/TR/CSS21/syndata.html#value-def-identifier
	identifier = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",

	// Attribute selectors: http://www.w3.org/TR/selectors/#attribute-selectors
	attributes = "\\[" + whitespace + "*(" + identifier + ")(?:" + whitespace +
		// Operator (capture 2)
		"*([*^$|!~]?=)" + whitespace +
		// "Attribute values must be CSS identifiers [capture 5] or strings [capture 3 or capture 4]"
		"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + identifier + "))|)" + whitespace +
		"*\\]",

	pseudos = ":(" + identifier + ")(?:\\((" +
		// To reduce the number of selectors needing tokenize in the preFilter, prefer arguments:
		// 1. quoted (capture 3; capture 4 or capture 5)
		"('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|" +
		// 2. simple (capture 6)
		"((?:\\\\.|[^\\\\()[\\]]|" + attributes + ")*)|" +
		// 3. anything else (capture 2)
		".*" +
		")\\)|)",

	// Leading and non-escaped trailing whitespace, capturing some non-whitespace characters preceding the latter
	rwhitespace = new RegExp( whitespace + "+", "g" ),
	rtrim = new RegExp( "^" + whitespace + "+|((?:^|[^\\\\])(?:\\\\.)*)" + whitespace + "+$", "g" ),

	rcomma = new RegExp( "^" + whitespace + "*," + whitespace + "*" ),
	rcombinators = new RegExp( "^" + whitespace + "*([>+~]|" + whitespace + ")" + whitespace + "*" ),

	rattributeQuotes = new RegExp( "=" + whitespace + "*([^\\]'\"]*?)" + whitespace + "*\\]", "g" ),

	rpseudo = new RegExp( pseudos ),
	ridentifier = new RegExp( "^" + identifier + "$" ),

	matchExpr = {
		"ID": new RegExp( "^#(" + identifier + ")" ),
		"CLASS": new RegExp( "^\\.(" + identifier + ")" ),
		"TAG": new RegExp( "^(" + identifier + "|[*])" ),
		"ATTR": new RegExp( "^" + attributes ),
		"PSEUDO": new RegExp( "^" + pseudos ),
		"CHILD": new RegExp( "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + whitespace +
			"*(even|odd|(([+-]|)(\\d*)n|)" + whitespace + "*(?:([+-]|)" + whitespace +
			"*(\\d+)|))" + whitespace + "*\\)|)", "i" ),
		"bool": new RegExp( "^(?:" + booleans + ")$", "i" ),
		// For use in libraries implementing .is()
		// We use this for POS matching in `select`
		"needsContext": new RegExp( "^" + whitespace + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" +
			whitespace + "*((?:-\\d)?\\d*)" + whitespace + "*\\)|)(?=[^-]|$)", "i" )
	},

	rinputs = /^(?:input|select|textarea|button)$/i,
	rheader = /^h\d$/i,

	rnative = /^[^{]+\{\s*\[native \w/,

	// Easily-parseable/retrievable ID or TAG or CLASS selectors
	rquickExpr = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,

	rsibling = /[+~]/,

	// CSS escapes
	// http://www.w3.org/TR/CSS21/syndata.html#escaped-characters
	runescape = new RegExp( "\\\\([\\da-f]{1,6}" + whitespace + "?|(" + whitespace + ")|.)", "ig" ),
	funescape = function( _, escaped, escapedWhitespace ) {
		var high = "0x" + escaped - 0x10000;
		// NaN means non-codepoint
		// Support: Firefox<24
		// Workaround erroneous numeric interpretation of +"0x"
		return high !== high || escapedWhitespace ?
			escaped :
			high < 0 ?
				// BMP codepoint
				String.fromCharCode( high + 0x10000 ) :
				// Supplemental Plane codepoint (surrogate pair)
				String.fromCharCode( high >> 10 | 0xD800, high & 0x3FF | 0xDC00 );
	},

	// CSS string/identifier serialization
	// https://drafts.csswg.org/cssom/#common-serializing-idioms
	rcssescape = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
	fcssescape = function( ch, asCodePoint ) {
		if ( asCodePoint ) {

			// U+0000 NULL becomes U+FFFD REPLACEMENT CHARACTER
			if ( ch === "\0" ) {
				return "\uFFFD";
			}

			// Control characters and (dependent upon position) numbers get escaped as code points
			return ch.slice( 0, -1 ) + "\\" + ch.charCodeAt( ch.length - 1 ).toString( 16 ) + " ";
		}

		// Other potentially-special ASCII characters get backslash-escaped
		return "\\" + ch;
	},

	// Used for iframes
	// See setDocument()
	// Removing the function wrapper causes a "Permission Denied"
	// error in IE
	unloadHandler = function() {
		setDocument();
	},

	disabledAncestor = addCombinator(
		function( elem ) {
			return elem.disabled === true && ("form" in elem || "label" in elem);
		},
		{ dir: "parentNode", next: "legend" }
	);

// Optimize for push.apply( _, NodeList )
try {
	push.apply(
		(arr = slice.call( preferredDoc.childNodes )),
		preferredDoc.childNodes
	);
	// Support: Android<4.0
	// Detect silently failing push.apply
	arr[ preferredDoc.childNodes.length ].nodeType;
} catch ( e ) {
	push = { apply: arr.length ?

		// Leverage slice if possible
		function( target, els ) {
			push_native.apply( target, slice.call(els) );
		} :

		// Support: IE<9
		// Otherwise append directly
		function( target, els ) {
			var j = target.length,
				i = 0;
			// Can't trust NodeList.length
			while ( (target[j++] = els[i++]) ) {}
			target.length = j - 1;
		}
	};
}

function Sizzle( selector, context, results, seed ) {
	var m, i, elem, nid, match, groups, newSelector,
		newContext = context && context.ownerDocument,

		// nodeType defaults to 9, since context defaults to document
		nodeType = context ? context.nodeType : 9;

	results = results || [];

	// Return early from calls with invalid selector or context
	if ( typeof selector !== "string" || !selector ||
		nodeType !== 1 && nodeType !== 9 && nodeType !== 11 ) {

		return results;
	}

	// Try to shortcut find operations (as opposed to filters) in HTML documents
	if ( !seed ) {

		if ( ( context ? context.ownerDocument || context : preferredDoc ) !== document ) {
			setDocument( context );
		}
		context = context || document;

		if ( documentIsHTML ) {

			// If the selector is sufficiently simple, try using a "get*By*" DOM method
			// (excepting DocumentFragment context, where the methods don't exist)
			if ( nodeType !== 11 && (match = rquickExpr.exec( selector )) ) {

				// ID selector
				if ( (m = match[1]) ) {

					// Document context
					if ( nodeType === 9 ) {
						if ( (elem = context.getElementById( m )) ) {

							// Support: IE, Opera, Webkit
							// TODO: identify versions
							// getElementById can match elements by name instead of ID
							if ( elem.id === m ) {
								results.push( elem );
								return results;
							}
						} else {
							return results;
						}

					// Element context
					} else {

						// Support: IE, Opera, Webkit
						// TODO: identify versions
						// getElementById can match elements by name instead of ID
						if ( newContext && (elem = newContext.getElementById( m )) &&
							contains( context, elem ) &&
							elem.id === m ) {

							results.push( elem );
							return results;
						}
					}

				// Type selector
				} else if ( match[2] ) {
					push.apply( results, context.getElementsByTagName( selector ) );
					return results;

				// Class selector
				} else if ( (m = match[3]) && support.getElementsByClassName &&
					context.getElementsByClassName ) {

					push.apply( results, context.getElementsByClassName( m ) );
					return results;
				}
			}

			// Take advantage of querySelectorAll
			if ( support.qsa &&
				!compilerCache[ selector + " " ] &&
				(!rbuggyQSA || !rbuggyQSA.test( selector )) ) {

				if ( nodeType !== 1 ) {
					newContext = context;
					newSelector = selector;

				// qSA looks outside Element context, which is not what we want
				// Thanks to Andrew Dupont for this workaround technique
				// Support: IE <=8
				// Exclude object elements
				} else if ( context.nodeName.toLowerCase() !== "object" ) {

					// Capture the context ID, setting it first if necessary
					if ( (nid = context.getAttribute( "id" )) ) {
						nid = nid.replace( rcssescape, fcssescape );
					} else {
						context.setAttribute( "id", (nid = expando) );
					}

					// Prefix every selector in the list
					groups = tokenize( selector );
					i = groups.length;
					while ( i-- ) {
						groups[i] = "#" + nid + " " + toSelector( groups[i] );
					}
					newSelector = groups.join( "," );

					// Expand context for sibling selectors
					newContext = rsibling.test( selector ) && testContext( context.parentNode ) ||
						context;
				}

				if ( newSelector ) {
					try {
						push.apply( results,
							newContext.querySelectorAll( newSelector )
						);
						return results;
					} catch ( qsaError ) {
					} finally {
						if ( nid === expando ) {
							context.removeAttribute( "id" );
						}
					}
				}
			}
		}
	}

	// All others
	return select( selector.replace( rtrim, "$1" ), context, results, seed );
}

/**
 * Create key-value caches of limited size
 * @returns {function(string, object)} Returns the Object data after storing it on itself with
 *	property name the (space-suffixed) string and (if the cache is larger than Expr.cacheLength)
 *	deleting the oldest entry
 */
function createCache() {
	var keys = [];

	function cache( key, value ) {
		// Use (key + " ") to avoid collision with native prototype properties (see Issue #157)
		if ( keys.push( key + " " ) > Expr.cacheLength ) {
			// Only keep the most recent entries
			delete cache[ keys.shift() ];
		}
		return (cache[ key + " " ] = value);
	}
	return cache;
}

/**
 * Mark a function for special use by Sizzle
 * @param {Function} fn The function to mark
 */
function markFunction( fn ) {
	fn[ expando ] = true;
	return fn;
}

/**
 * Support testing using an element
 * @param {Function} fn Passed the created element and returns a boolean result
 */
function assert( fn ) {
	var el = document.createElement("fieldset");

	try {
		return !!fn( el );
	} catch (e) {
		return false;
	} finally {
		// Remove from its parent by default
		if ( el.parentNode ) {
			el.parentNode.removeChild( el );
		}
		// release memory in IE
		el = null;
	}
}

/**
 * Adds the same handler for all of the specified attrs
 * @param {String} attrs Pipe-separated list of attributes
 * @param {Function} handler The method that will be applied
 */
function addHandle( attrs, handler ) {
	var arr = attrs.split("|"),
		i = arr.length;

	while ( i-- ) {
		Expr.attrHandle[ arr[i] ] = handler;
	}
}

/**
 * Checks document order of two siblings
 * @param {Element} a
 * @param {Element} b
 * @returns {Number} Returns less than 0 if a precedes b, greater than 0 if a follows b
 */
function siblingCheck( a, b ) {
	var cur = b && a,
		diff = cur && a.nodeType === 1 && b.nodeType === 1 &&
			a.sourceIndex - b.sourceIndex;

	// Use IE sourceIndex if available on both nodes
	if ( diff ) {
		return diff;
	}

	// Check if b follows a
	if ( cur ) {
		while ( (cur = cur.nextSibling) ) {
			if ( cur === b ) {
				return -1;
			}
		}
	}

	return a ? 1 : -1;
}

/**
 * Returns a function to use in pseudos for input types
 * @param {String} type
 */
function createInputPseudo( type ) {
	return function( elem ) {
		var name = elem.nodeName.toLowerCase();
		return name === "input" && elem.type === type;
	};
}

/**
 * Returns a function to use in pseudos for buttons
 * @param {String} type
 */
function createButtonPseudo( type ) {
	return function( elem ) {
		var name = elem.nodeName.toLowerCase();
		return (name === "input" || name === "button") && elem.type === type;
	};
}

/**
 * Returns a function to use in pseudos for :enabled/:disabled
 * @param {Boolean} disabled true for :disabled; false for :enabled
 */
function createDisabledPseudo( disabled ) {

	// Known :disabled false positives: fieldset[disabled] > legend:nth-of-type(n+2) :can-disable
	return function( elem ) {

		// Only certain elements can match :enabled or :disabled
		// https://html.spec.whatwg.org/multipage/scripting.html#selector-enabled
		// https://html.spec.whatwg.org/multipage/scripting.html#selector-disabled
		if ( "form" in elem ) {

			// Check for inherited disabledness on relevant non-disabled elements:
			// * listed form-associated elements in a disabled fieldset
			//   https://html.spec.whatwg.org/multipage/forms.html#category-listed
			//   https://html.spec.whatwg.org/multipage/forms.html#concept-fe-disabled
			// * option elements in a disabled optgroup
			//   https://html.spec.whatwg.org/multipage/forms.html#concept-option-disabled
			// All such elements have a "form" property.
			if ( elem.parentNode && elem.disabled === false ) {

				// Option elements defer to a parent optgroup if present
				if ( "label" in elem ) {
					if ( "label" in elem.parentNode ) {
						return elem.parentNode.disabled === disabled;
					} else {
						return elem.disabled === disabled;
					}
				}

				// Support: IE 6 - 11
				// Use the isDisabled shortcut property to check for disabled fieldset ancestors
				return elem.isDisabled === disabled ||

					// Where there is no isDisabled, check manually
					/* jshint -W018 */
					elem.isDisabled !== !disabled &&
						disabledAncestor( elem ) === disabled;
			}

			return elem.disabled === disabled;

		// Try to winnow out elements that can't be disabled before trusting the disabled property.
		// Some victims get caught in our net (label, legend, menu, track), but it shouldn't
		// even exist on them, let alone have a boolean value.
		} else if ( "label" in elem ) {
			return elem.disabled === disabled;
		}

		// Remaining elements are neither :enabled nor :disabled
		return false;
	};
}

/**
 * Returns a function to use in pseudos for positionals
 * @param {Function} fn
 */
function createPositionalPseudo( fn ) {
	return markFunction(function( argument ) {
		argument = +argument;
		return markFunction(function( seed, matches ) {
			var j,
				matchIndexes = fn( [], seed.length, argument ),
				i = matchIndexes.length;

			// Match elements found at the specified indexes
			while ( i-- ) {
				if ( seed[ (j = matchIndexes[i]) ] ) {
					seed[j] = !(matches[j] = seed[j]);
				}
			}
		});
	});
}

/**
 * Checks a node for validity as a Sizzle context
 * @param {Element|Object=} context
 * @returns {Element|Object|Boolean} The input node if acceptable, otherwise a falsy value
 */
function testContext( context ) {
	return context && typeof context.getElementsByTagName !== "undefined" && context;
}

// Expose support vars for convenience
support = Sizzle.support = {};

/**
 * Detects XML nodes
 * @param {Element|Object} elem An element or a document
 * @returns {Boolean} True iff elem is a non-HTML XML node
 */
isXML = Sizzle.isXML = function( elem ) {
	// documentElement is verified for cases where it doesn't yet exist
	// (such as loading iframes in IE - #4833)
	var documentElement = elem && (elem.ownerDocument || elem).documentElement;
	return documentElement ? documentElement.nodeName !== "HTML" : false;
};

/**
 * Sets document-related variables once based on the current document
 * @param {Element|Object} [doc] An element or document object to use to set the document
 * @returns {Object} Returns the current document
 */
setDocument = Sizzle.setDocument = function( node ) {
	var hasCompare, subWindow,
		doc = node ? node.ownerDocument || node : preferredDoc;

	// Return early if doc is invalid or already selected
	if ( doc === document || doc.nodeType !== 9 || !doc.documentElement ) {
		return document;
	}

	// Update global variables
	document = doc;
	docElem = document.documentElement;
	documentIsHTML = !isXML( document );

	// Support: IE 9-11, Edge
	// Accessing iframe documents after unload throws "permission denied" errors (jQuery #13936)
	if ( preferredDoc !== document &&
		(subWindow = document.defaultView) && subWindow.top !== subWindow ) {

		// Support: IE 11, Edge
		if ( subWindow.addEventListener ) {
			subWindow.addEventListener( "unload", unloadHandler, false );

		// Support: IE 9 - 10 only
		} else if ( subWindow.attachEvent ) {
			subWindow.attachEvent( "onunload", unloadHandler );
		}
	}

	/* Attributes
	---------------------------------------------------------------------- */

	// Support: IE<8
	// Verify that getAttribute really returns attributes and not properties
	// (excepting IE8 booleans)
	support.attributes = assert(function( el ) {
		el.className = "i";
		return !el.getAttribute("className");
	});

	/* getElement(s)By*
	---------------------------------------------------------------------- */

	// Check if getElementsByTagName("*") returns only elements
	support.getElementsByTagName = assert(function( el ) {
		el.appendChild( document.createComment("") );
		return !el.getElementsByTagName("*").length;
	});

	// Support: IE<9
	support.getElementsByClassName = rnative.test( document.getElementsByClassName );

	// Support: IE<10
	// Check if getElementById returns elements by name
	// The broken getElementById methods don't pick up programmatically-set names,
	// so use a roundabout getElementsByName test
	support.getById = assert(function( el ) {
		docElem.appendChild( el ).id = expando;
		return !document.getElementsByName || !document.getElementsByName( expando ).length;
	});

	// ID filter and find
	if ( support.getById ) {
		Expr.filter["ID"] = function( id ) {
			var attrId = id.replace( runescape, funescape );
			return function( elem ) {
				return elem.getAttribute("id") === attrId;
			};
		};
		Expr.find["ID"] = function( id, context ) {
			if ( typeof context.getElementById !== "undefined" && documentIsHTML ) {
				var elem = context.getElementById( id );
				return elem ? [ elem ] : [];
			}
		};
	} else {
		Expr.filter["ID"] =  function( id ) {
			var attrId = id.replace( runescape, funescape );
			return function( elem ) {
				var node = typeof elem.getAttributeNode !== "undefined" &&
					elem.getAttributeNode("id");
				return node && node.value === attrId;
			};
		};

		// Support: IE 6 - 7 only
		// getElementById is not reliable as a find shortcut
		Expr.find["ID"] = function( id, context ) {
			if ( typeof context.getElementById !== "undefined" && documentIsHTML ) {
				var node, i, elems,
					elem = context.getElementById( id );

				if ( elem ) {

					// Verify the id attribute
					node = elem.getAttributeNode("id");
					if ( node && node.value === id ) {
						return [ elem ];
					}

					// Fall back on getElementsByName
					elems = context.getElementsByName( id );
					i = 0;
					while ( (elem = elems[i++]) ) {
						node = elem.getAttributeNode("id");
						if ( node && node.value === id ) {
							return [ elem ];
						}
					}
				}

				return [];
			}
		};
	}

	// Tag
	Expr.find["TAG"] = support.getElementsByTagName ?
		function( tag, context ) {
			if ( typeof context.getElementsByTagName !== "undefined" ) {
				return context.getElementsByTagName( tag );

			// DocumentFragment nodes don't have gEBTN
			} else if ( support.qsa ) {
				return context.querySelectorAll( tag );
			}
		} :

		function( tag, context ) {
			var elem,
				tmp = [],
				i = 0,
				// By happy coincidence, a (broken) gEBTN appears on DocumentFragment nodes too
				results = context.getElementsByTagName( tag );

			// Filter out possible comments
			if ( tag === "*" ) {
				while ( (elem = results[i++]) ) {
					if ( elem.nodeType === 1 ) {
						tmp.push( elem );
					}
				}

				return tmp;
			}
			return results;
		};

	// Class
	Expr.find["CLASS"] = support.getElementsByClassName && function( className, context ) {
		if ( typeof context.getElementsByClassName !== "undefined" && documentIsHTML ) {
			return context.getElementsByClassName( className );
		}
	};

	/* QSA/matchesSelector
	---------------------------------------------------------------------- */

	// QSA and matchesSelector support

	// matchesSelector(:active) reports false when true (IE9/Opera 11.5)
	rbuggyMatches = [];

	// qSa(:focus) reports false when true (Chrome 21)
	// We allow this because of a bug in IE8/9 that throws an error
	// whenever `document.activeElement` is accessed on an iframe
	// So, we allow :focus to pass through QSA all the time to avoid the IE error
	// See https://bugs.jquery.com/ticket/13378
	rbuggyQSA = [];

	if ( (support.qsa = rnative.test( document.querySelectorAll )) ) {
		// Build QSA regex
		// Regex strategy adopted from Diego Perini
		assert(function( el ) {
			// Select is set to empty string on purpose
			// This is to test IE's treatment of not explicitly
			// setting a boolean content attribute,
			// since its presence should be enough
			// https://bugs.jquery.com/ticket/12359
			docElem.appendChild( el ).innerHTML = "<a id='" + expando + "'></a>" +
				"<select id='" + expando + "-\r\\' msallowcapture=''>" +
				"<option selected=''></option></select>";

			// Support: IE8, Opera 11-12.16
			// Nothing should be selected when empty strings follow ^= or $= or *=
			// The test attribute must be unknown in Opera but "safe" for WinRT
			// https://msdn.microsoft.com/en-us/library/ie/hh465388.aspx#attribute_section
			if ( el.querySelectorAll("[msallowcapture^='']").length ) {
				rbuggyQSA.push( "[*^$]=" + whitespace + "*(?:''|\"\")" );
			}

			// Support: IE8
			// Boolean attributes and "value" are not treated correctly
			if ( !el.querySelectorAll("[selected]").length ) {
				rbuggyQSA.push( "\\[" + whitespace + "*(?:value|" + booleans + ")" );
			}

			// Support: Chrome<29, Android<4.4, Safari<7.0+, iOS<7.0+, PhantomJS<1.9.8+
			if ( !el.querySelectorAll( "[id~=" + expando + "-]" ).length ) {
				rbuggyQSA.push("~=");
			}

			// Webkit/Opera - :checked should return selected option elements
			// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
			// IE8 throws error here and will not see later tests
			if ( !el.querySelectorAll(":checked").length ) {
				rbuggyQSA.push(":checked");
			}

			// Support: Safari 8+, iOS 8+
			// https://bugs.webkit.org/show_bug.cgi?id=136851
			// In-page `selector#id sibling-combinator selector` fails
			if ( !el.querySelectorAll( "a#" + expando + "+*" ).length ) {
				rbuggyQSA.push(".#.+[+~]");
			}
		});

		assert(function( el ) {
			el.innerHTML = "<a href='' disabled='disabled'></a>" +
				"<select disabled='disabled'><option/></select>";

			// Support: Windows 8 Native Apps
			// The type and name attributes are restricted during .innerHTML assignment
			var input = document.createElement("input");
			input.setAttribute( "type", "hidden" );
			el.appendChild( input ).setAttribute( "name", "D" );

			// Support: IE8
			// Enforce case-sensitivity of name attribute
			if ( el.querySelectorAll("[name=d]").length ) {
				rbuggyQSA.push( "name" + whitespace + "*[*^$|!~]?=" );
			}

			// FF 3.5 - :enabled/:disabled and hidden elements (hidden elements are still enabled)
			// IE8 throws error here and will not see later tests
			if ( el.querySelectorAll(":enabled").length !== 2 ) {
				rbuggyQSA.push( ":enabled", ":disabled" );
			}

			// Support: IE9-11+
			// IE's :disabled selector does not pick up the children of disabled fieldsets
			docElem.appendChild( el ).disabled = true;
			if ( el.querySelectorAll(":disabled").length !== 2 ) {
				rbuggyQSA.push( ":enabled", ":disabled" );
			}

			// Opera 10-11 does not throw on post-comma invalid pseudos
			el.querySelectorAll("*,:x");
			rbuggyQSA.push(",.*:");
		});
	}

	if ( (support.matchesSelector = rnative.test( (matches = docElem.matches ||
		docElem.webkitMatchesSelector ||
		docElem.mozMatchesSelector ||
		docElem.oMatchesSelector ||
		docElem.msMatchesSelector) )) ) {

		assert(function( el ) {
			// Check to see if it's possible to do matchesSelector
			// on a disconnected node (IE 9)
			support.disconnectedMatch = matches.call( el, "*" );

			// This should fail with an exception
			// Gecko does not error, returns false instead
			matches.call( el, "[s!='']:x" );
			rbuggyMatches.push( "!=", pseudos );
		});
	}

	rbuggyQSA = rbuggyQSA.length && new RegExp( rbuggyQSA.join("|") );
	rbuggyMatches = rbuggyMatches.length && new RegExp( rbuggyMatches.join("|") );

	/* Contains
	---------------------------------------------------------------------- */
	hasCompare = rnative.test( docElem.compareDocumentPosition );

	// Element contains another
	// Purposefully self-exclusive
	// As in, an element does not contain itself
	contains = hasCompare || rnative.test( docElem.contains ) ?
		function( a, b ) {
			var adown = a.nodeType === 9 ? a.documentElement : a,
				bup = b && b.parentNode;
			return a === bup || !!( bup && bup.nodeType === 1 && (
				adown.contains ?
					adown.contains( bup ) :
					a.compareDocumentPosition && a.compareDocumentPosition( bup ) & 16
			));
		} :
		function( a, b ) {
			if ( b ) {
				while ( (b = b.parentNode) ) {
					if ( b === a ) {
						return true;
					}
				}
			}
			return false;
		};

	/* Sorting
	---------------------------------------------------------------------- */

	// Document order sorting
	sortOrder = hasCompare ?
	function( a, b ) {

		// Flag for duplicate removal
		if ( a === b ) {
			hasDuplicate = true;
			return 0;
		}

		// Sort on method existence if only one input has compareDocumentPosition
		var compare = !a.compareDocumentPosition - !b.compareDocumentPosition;
		if ( compare ) {
			return compare;
		}

		// Calculate position if both inputs belong to the same document
		compare = ( a.ownerDocument || a ) === ( b.ownerDocument || b ) ?
			a.compareDocumentPosition( b ) :

			// Otherwise we know they are disconnected
			1;

		// Disconnected nodes
		if ( compare & 1 ||
			(!support.sortDetached && b.compareDocumentPosition( a ) === compare) ) {

			// Choose the first element that is related to our preferred document
			if ( a === document || a.ownerDocument === preferredDoc && contains(preferredDoc, a) ) {
				return -1;
			}
			if ( b === document || b.ownerDocument === preferredDoc && contains(preferredDoc, b) ) {
				return 1;
			}

			// Maintain original order
			return sortInput ?
				( indexOf( sortInput, a ) - indexOf( sortInput, b ) ) :
				0;
		}

		return compare & 4 ? -1 : 1;
	} :
	function( a, b ) {
		// Exit early if the nodes are identical
		if ( a === b ) {
			hasDuplicate = true;
			return 0;
		}

		var cur,
			i = 0,
			aup = a.parentNode,
			bup = b.parentNode,
			ap = [ a ],
			bp = [ b ];

		// Parentless nodes are either documents or disconnected
		if ( !aup || !bup ) {
			return a === document ? -1 :
				b === document ? 1 :
				aup ? -1 :
				bup ? 1 :
				sortInput ?
				( indexOf( sortInput, a ) - indexOf( sortInput, b ) ) :
				0;

		// If the nodes are siblings, we can do a quick check
		} else if ( aup === bup ) {
			return siblingCheck( a, b );
		}

		// Otherwise we need full lists of their ancestors for comparison
		cur = a;
		while ( (cur = cur.parentNode) ) {
			ap.unshift( cur );
		}
		cur = b;
		while ( (cur = cur.parentNode) ) {
			bp.unshift( cur );
		}

		// Walk down the tree looking for a discrepancy
		while ( ap[i] === bp[i] ) {
			i++;
		}

		return i ?
			// Do a sibling check if the nodes have a common ancestor
			siblingCheck( ap[i], bp[i] ) :

			// Otherwise nodes in our document sort first
			ap[i] === preferredDoc ? -1 :
			bp[i] === preferredDoc ? 1 :
			0;
	};

	return document;
};

Sizzle.matches = function( expr, elements ) {
	return Sizzle( expr, null, null, elements );
};

Sizzle.matchesSelector = function( elem, expr ) {
	// Set document vars if needed
	if ( ( elem.ownerDocument || elem ) !== document ) {
		setDocument( elem );
	}

	// Make sure that attribute selectors are quoted
	expr = expr.replace( rattributeQuotes, "='$1']" );

	if ( support.matchesSelector && documentIsHTML &&
		!compilerCache[ expr + " " ] &&
		( !rbuggyMatches || !rbuggyMatches.test( expr ) ) &&
		( !rbuggyQSA     || !rbuggyQSA.test( expr ) ) ) {

		try {
			var ret = matches.call( elem, expr );

			// IE 9's matchesSelector returns false on disconnected nodes
			if ( ret || support.disconnectedMatch ||
					// As well, disconnected nodes are said to be in a document
					// fragment in IE 9
					elem.document && elem.document.nodeType !== 11 ) {
				return ret;
			}
		} catch (e) {}
	}

	return Sizzle( expr, document, null, [ elem ] ).length > 0;
};

Sizzle.contains = function( context, elem ) {
	// Set document vars if needed
	if ( ( context.ownerDocument || context ) !== document ) {
		setDocument( context );
	}
	return contains( context, elem );
};

Sizzle.attr = function( elem, name ) {
	// Set document vars if needed
	if ( ( elem.ownerDocument || elem ) !== document ) {
		setDocument( elem );
	}

	var fn = Expr.attrHandle[ name.toLowerCase() ],
		// Don't get fooled by Object.prototype properties (jQuery #13807)
		val = fn && hasOwn.call( Expr.attrHandle, name.toLowerCase() ) ?
			fn( elem, name, !documentIsHTML ) :
			undefined;

	return val !== undefined ?
		val :
		support.attributes || !documentIsHTML ?
			elem.getAttribute( name ) :
			(val = elem.getAttributeNode(name)) && val.specified ?
				val.value :
				null;
};

Sizzle.escape = function( sel ) {
	return (sel + "").replace( rcssescape, fcssescape );
};

Sizzle.error = function( msg ) {
	throw new Error( "Syntax error, unrecognized expression: " + msg );
};

/**
 * Document sorting and removing duplicates
 * @param {ArrayLike} results
 */
Sizzle.uniqueSort = function( results ) {
	var elem,
		duplicates = [],
		j = 0,
		i = 0;

	// Unless we *know* we can detect duplicates, assume their presence
	hasDuplicate = !support.detectDuplicates;
	sortInput = !support.sortStable && results.slice( 0 );
	results.sort( sortOrder );

	if ( hasDuplicate ) {
		while ( (elem = results[i++]) ) {
			if ( elem === results[ i ] ) {
				j = duplicates.push( i );
			}
		}
		while ( j-- ) {
			results.splice( duplicates[ j ], 1 );
		}
	}

	// Clear input after sorting to release objects
	// See https://github.com/jquery/sizzle/pull/225
	sortInput = null;

	return results;
};

/**
 * Utility function for retrieving the text value of an array of DOM nodes
 * @param {Array|Element} elem
 */
getText = Sizzle.getText = function( elem ) {
	var node,
		ret = "",
		i = 0,
		nodeType = elem.nodeType;

	if ( !nodeType ) {
		// If no nodeType, this is expected to be an array
		while ( (node = elem[i++]) ) {
			// Do not traverse comment nodes
			ret += getText( node );
		}
	} else if ( nodeType === 1 || nodeType === 9 || nodeType === 11 ) {
		// Use textContent for elements
		// innerText usage removed for consistency of new lines (jQuery #11153)
		if ( typeof elem.textContent === "string" ) {
			return elem.textContent;
		} else {
			// Traverse its children
			for ( elem = elem.firstChild; elem; elem = elem.nextSibling ) {
				ret += getText( elem );
			}
		}
	} else if ( nodeType === 3 || nodeType === 4 ) {
		return elem.nodeValue;
	}
	// Do not include comment or processing instruction nodes

	return ret;
};

Expr = Sizzle.selectors = {

	// Can be adjusted by the user
	cacheLength: 50,

	createPseudo: markFunction,

	match: matchExpr,

	attrHandle: {},

	find: {},

	relative: {
		">": { dir: "parentNode", first: true },
		" ": { dir: "parentNode" },
		"+": { dir: "previousSibling", first: true },
		"~": { dir: "previousSibling" }
	},

	preFilter: {
		"ATTR": function( match ) {
			match[1] = match[1].replace( runescape, funescape );

			// Move the given value to match[3] whether quoted or unquoted
			match[3] = ( match[3] || match[4] || match[5] || "" ).replace( runescape, funescape );

			if ( match[2] === "~=" ) {
				match[3] = " " + match[3] + " ";
			}

			return match.slice( 0, 4 );
		},

		"CHILD": function( match ) {
			/* matches from matchExpr["CHILD"]
				1 type (only|nth|...)
				2 what (child|of-type)
				3 argument (even|odd|\d*|\d*n([+-]\d+)?|...)
				4 xn-component of xn+y argument ([+-]?\d*n|)
				5 sign of xn-component
				6 x of xn-component
				7 sign of y-component
				8 y of y-component
			*/
			match[1] = match[1].toLowerCase();

			if ( match[1].slice( 0, 3 ) === "nth" ) {
				// nth-* requires argument
				if ( !match[3] ) {
					Sizzle.error( match[0] );
				}

				// numeric x and y parameters for Expr.filter.CHILD
				// remember that false/true cast respectively to 0/1
				match[4] = +( match[4] ? match[5] + (match[6] || 1) : 2 * ( match[3] === "even" || match[3] === "odd" ) );
				match[5] = +( ( match[7] + match[8] ) || match[3] === "odd" );

			// other types prohibit arguments
			} else if ( match[3] ) {
				Sizzle.error( match[0] );
			}

			return match;
		},

		"PSEUDO": function( match ) {
			var excess,
				unquoted = !match[6] && match[2];

			if ( matchExpr["CHILD"].test( match[0] ) ) {
				return null;
			}

			// Accept quoted arguments as-is
			if ( match[3] ) {
				match[2] = match[4] || match[5] || "";

			// Strip excess characters from unquoted arguments
			} else if ( unquoted && rpseudo.test( unquoted ) &&
				// Get excess from tokenize (recursively)
				(excess = tokenize( unquoted, true )) &&
				// advance to the next closing parenthesis
				(excess = unquoted.indexOf( ")", unquoted.length - excess ) - unquoted.length) ) {

				// excess is a negative index
				match[0] = match[0].slice( 0, excess );
				match[2] = unquoted.slice( 0, excess );
			}

			// Return only captures needed by the pseudo filter method (type and argument)
			return match.slice( 0, 3 );
		}
	},

	filter: {

		"TAG": function( nodeNameSelector ) {
			var nodeName = nodeNameSelector.replace( runescape, funescape ).toLowerCase();
			return nodeNameSelector === "*" ?
				function() { return true; } :
				function( elem ) {
					return elem.nodeName && elem.nodeName.toLowerCase() === nodeName;
				};
		},

		"CLASS": function( className ) {
			var pattern = classCache[ className + " " ];

			return pattern ||
				(pattern = new RegExp( "(^|" + whitespace + ")" + className + "(" + whitespace + "|$)" )) &&
				classCache( className, function( elem ) {
					return pattern.test( typeof elem.className === "string" && elem.className || typeof elem.getAttribute !== "undefined" && elem.getAttribute("class") || "" );
				});
		},

		"ATTR": function( name, operator, check ) {
			return function( elem ) {
				var result = Sizzle.attr( elem, name );

				if ( result == null ) {
					return operator === "!=";
				}
				if ( !operator ) {
					return true;
				}

				result += "";

				return operator === "=" ? result === check :
					operator === "!=" ? result !== check :
					operator === "^=" ? check && result.indexOf( check ) === 0 :
					operator === "*=" ? check && result.indexOf( check ) > -1 :
					operator === "$=" ? check && result.slice( -check.length ) === check :
					operator === "~=" ? ( " " + result.replace( rwhitespace, " " ) + " " ).indexOf( check ) > -1 :
					operator === "|=" ? result === check || result.slice( 0, check.length + 1 ) === check + "-" :
					false;
			};
		},

		"CHILD": function( type, what, argument, first, last ) {
			var simple = type.slice( 0, 3 ) !== "nth",
				forward = type.slice( -4 ) !== "last",
				ofType = what === "of-type";

			return first === 1 && last === 0 ?

				// Shortcut for :nth-*(n)
				function( elem ) {
					return !!elem.parentNode;
				} :

				function( elem, context, xml ) {
					var cache, uniqueCache, outerCache, node, nodeIndex, start,
						dir = simple !== forward ? "nextSibling" : "previousSibling",
						parent = elem.parentNode,
						name = ofType && elem.nodeName.toLowerCase(),
						useCache = !xml && !ofType,
						diff = false;

					if ( parent ) {

						// :(first|last|only)-(child|of-type)
						if ( simple ) {
							while ( dir ) {
								node = elem;
								while ( (node = node[ dir ]) ) {
									if ( ofType ?
										node.nodeName.toLowerCase() === name :
										node.nodeType === 1 ) {

										return false;
									}
								}
								// Reverse direction for :only-* (if we haven't yet done so)
								start = dir = type === "only" && !start && "nextSibling";
							}
							return true;
						}

						start = [ forward ? parent.firstChild : parent.lastChild ];

						// non-xml :nth-child(...) stores cache data on `parent`
						if ( forward && useCache ) {

							// Seek `elem` from a previously-cached index

							// ...in a gzip-friendly way
							node = parent;
							outerCache = node[ expando ] || (node[ expando ] = {});

							// Support: IE <9 only
							// Defend against cloned attroperties (jQuery gh-1709)
							uniqueCache = outerCache[ node.uniqueID ] ||
								(outerCache[ node.uniqueID ] = {});

							cache = uniqueCache[ type ] || [];
							nodeIndex = cache[ 0 ] === dirruns && cache[ 1 ];
							diff = nodeIndex && cache[ 2 ];
							node = nodeIndex && parent.childNodes[ nodeIndex ];

							while ( (node = ++nodeIndex && node && node[ dir ] ||

								// Fallback to seeking `elem` from the start
								(diff = nodeIndex = 0) || start.pop()) ) {

								// When found, cache indexes on `parent` and break
								if ( node.nodeType === 1 && ++diff && node === elem ) {
									uniqueCache[ type ] = [ dirruns, nodeIndex, diff ];
									break;
								}
							}

						} else {
							// Use previously-cached element index if available
							if ( useCache ) {
								// ...in a gzip-friendly way
								node = elem;
								outerCache = node[ expando ] || (node[ expando ] = {});

								// Support: IE <9 only
								// Defend against cloned attroperties (jQuery gh-1709)
								uniqueCache = outerCache[ node.uniqueID ] ||
									(outerCache[ node.uniqueID ] = {});

								cache = uniqueCache[ type ] || [];
								nodeIndex = cache[ 0 ] === dirruns && cache[ 1 ];
								diff = nodeIndex;
							}

							// xml :nth-child(...)
							// or :nth-last-child(...) or :nth(-last)?-of-type(...)
							if ( diff === false ) {
								// Use the same loop as above to seek `elem` from the start
								while ( (node = ++nodeIndex && node && node[ dir ] ||
									(diff = nodeIndex = 0) || start.pop()) ) {

									if ( ( ofType ?
										node.nodeName.toLowerCase() === name :
										node.nodeType === 1 ) &&
										++diff ) {

										// Cache the index of each encountered element
										if ( useCache ) {
											outerCache = node[ expando ] || (node[ expando ] = {});

											// Support: IE <9 only
											// Defend against cloned attroperties (jQuery gh-1709)
											uniqueCache = outerCache[ node.uniqueID ] ||
												(outerCache[ node.uniqueID ] = {});

											uniqueCache[ type ] = [ dirruns, diff ];
										}

										if ( node === elem ) {
											break;
										}
									}
								}
							}
						}

						// Incorporate the offset, then check against cycle size
						diff -= last;
						return diff === first || ( diff % first === 0 && diff / first >= 0 );
					}
				};
		},

		"PSEUDO": function( pseudo, argument ) {
			// pseudo-class names are case-insensitive
			// http://www.w3.org/TR/selectors/#pseudo-classes
			// Prioritize by case sensitivity in case custom pseudos are added with uppercase letters
			// Remember that setFilters inherits from pseudos
			var args,
				fn = Expr.pseudos[ pseudo ] || Expr.setFilters[ pseudo.toLowerCase() ] ||
					Sizzle.error( "unsupported pseudo: " + pseudo );

			// The user may use createPseudo to indicate that
			// arguments are needed to create the filter function
			// just as Sizzle does
			if ( fn[ expando ] ) {
				return fn( argument );
			}

			// But maintain support for old signatures
			if ( fn.length > 1 ) {
				args = [ pseudo, pseudo, "", argument ];
				return Expr.setFilters.hasOwnProperty( pseudo.toLowerCase() ) ?
					markFunction(function( seed, matches ) {
						var idx,
							matched = fn( seed, argument ),
							i = matched.length;
						while ( i-- ) {
							idx = indexOf( seed, matched[i] );
							seed[ idx ] = !( matches[ idx ] = matched[i] );
						}
					}) :
					function( elem ) {
						return fn( elem, 0, args );
					};
			}

			return fn;
		}
	},

	pseudos: {
		// Potentially complex pseudos
		"not": markFunction(function( selector ) {
			// Trim the selector passed to compile
			// to avoid treating leading and trailing
			// spaces as combinators
			var input = [],
				results = [],
				matcher = compile( selector.replace( rtrim, "$1" ) );

			return matcher[ expando ] ?
				markFunction(function( seed, matches, context, xml ) {
					var elem,
						unmatched = matcher( seed, null, xml, [] ),
						i = seed.length;

					// Match elements unmatched by `matcher`
					while ( i-- ) {
						if ( (elem = unmatched[i]) ) {
							seed[i] = !(matches[i] = elem);
						}
					}
				}) :
				function( elem, context, xml ) {
					input[0] = elem;
					matcher( input, null, xml, results );
					// Don't keep the element (issue #299)
					input[0] = null;
					return !results.pop();
				};
		}),

		"has": markFunction(function( selector ) {
			return function( elem ) {
				return Sizzle( selector, elem ).length > 0;
			};
		}),

		"contains": markFunction(function( text ) {
			text = text.replace( runescape, funescape );
			return function( elem ) {
				return ( elem.textContent || elem.innerText || getText( elem ) ).indexOf( text ) > -1;
			};
		}),

		// "Whether an element is represented by a :lang() selector
		// is based solely on the element's language value
		// being equal to the identifier C,
		// or beginning with the identifier C immediately followed by "-".
		// The matching of C against the element's language value is performed case-insensitively.
		// The identifier C does not have to be a valid language name."
		// http://www.w3.org/TR/selectors/#lang-pseudo
		"lang": markFunction( function( lang ) {
			// lang value must be a valid identifier
			if ( !ridentifier.test(lang || "") ) {
				Sizzle.error( "unsupported lang: " + lang );
			}
			lang = lang.replace( runescape, funescape ).toLowerCase();
			return function( elem ) {
				var elemLang;
				do {
					if ( (elemLang = documentIsHTML ?
						elem.lang :
						elem.getAttribute("xml:lang") || elem.getAttribute("lang")) ) {

						elemLang = elemLang.toLowerCase();
						return elemLang === lang || elemLang.indexOf( lang + "-" ) === 0;
					}
				} while ( (elem = elem.parentNode) && elem.nodeType === 1 );
				return false;
			};
		}),

		// Miscellaneous
		"target": function( elem ) {
			var hash = window.location && window.location.hash;
			return hash && hash.slice( 1 ) === elem.id;
		},

		"root": function( elem ) {
			return elem === docElem;
		},

		"focus": function( elem ) {
			return elem === document.activeElement && (!document.hasFocus || document.hasFocus()) && !!(elem.type || elem.href || ~elem.tabIndex);
		},

		// Boolean properties
		"enabled": createDisabledPseudo( false ),
		"disabled": createDisabledPseudo( true ),

		"checked": function( elem ) {
			// In CSS3, :checked should return both checked and selected elements
			// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
			var nodeName = elem.nodeName.toLowerCase();
			return (nodeName === "input" && !!elem.checked) || (nodeName === "option" && !!elem.selected);
		},

		"selected": function( elem ) {
			// Accessing this property makes selected-by-default
			// options in Safari work properly
			if ( elem.parentNode ) {
				elem.parentNode.selectedIndex;
			}

			return elem.selected === true;
		},

		// Contents
		"empty": function( elem ) {
			// http://www.w3.org/TR/selectors/#empty-pseudo
			// :empty is negated by element (1) or content nodes (text: 3; cdata: 4; entity ref: 5),
			//   but not by others (comment: 8; processing instruction: 7; etc.)
			// nodeType < 6 works because attributes (2) do not appear as children
			for ( elem = elem.firstChild; elem; elem = elem.nextSibling ) {
				if ( elem.nodeType < 6 ) {
					return false;
				}
			}
			return true;
		},

		"parent": function( elem ) {
			return !Expr.pseudos["empty"]( elem );
		},

		// Element/input types
		"header": function( elem ) {
			return rheader.test( elem.nodeName );
		},

		"input": function( elem ) {
			return rinputs.test( elem.nodeName );
		},

		"button": function( elem ) {
			var name = elem.nodeName.toLowerCase();
			return name === "input" && elem.type === "button" || name === "button";
		},

		"text": function( elem ) {
			var attr;
			return elem.nodeName.toLowerCase() === "input" &&
				elem.type === "text" &&

				// Support: IE<8
				// New HTML5 attribute values (e.g., "search") appear with elem.type === "text"
				( (attr = elem.getAttribute("type")) == null || attr.toLowerCase() === "text" );
		},

		// Position-in-collection
		"first": createPositionalPseudo(function() {
			return [ 0 ];
		}),

		"last": createPositionalPseudo(function( matchIndexes, length ) {
			return [ length - 1 ];
		}),

		"eq": createPositionalPseudo(function( matchIndexes, length, argument ) {
			return [ argument < 0 ? argument + length : argument ];
		}),

		"even": createPositionalPseudo(function( matchIndexes, length ) {
			var i = 0;
			for ( ; i < length; i += 2 ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		}),

		"odd": createPositionalPseudo(function( matchIndexes, length ) {
			var i = 1;
			for ( ; i < length; i += 2 ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		}),

		"lt": createPositionalPseudo(function( matchIndexes, length, argument ) {
			var i = argument < 0 ? argument + length : argument;
			for ( ; --i >= 0; ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		}),

		"gt": createPositionalPseudo(function( matchIndexes, length, argument ) {
			var i = argument < 0 ? argument + length : argument;
			for ( ; ++i < length; ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		})
	}
};

Expr.pseudos["nth"] = Expr.pseudos["eq"];

// Add button/input type pseudos
for ( i in { radio: true, checkbox: true, file: true, password: true, image: true } ) {
	Expr.pseudos[ i ] = createInputPseudo( i );
}
for ( i in { submit: true, reset: true } ) {
	Expr.pseudos[ i ] = createButtonPseudo( i );
}

// Easy API for creating new setFilters
function setFilters() {}
setFilters.prototype = Expr.filters = Expr.pseudos;
Expr.setFilters = new setFilters();

tokenize = Sizzle.tokenize = function( selector, parseOnly ) {
	var matched, match, tokens, type,
		soFar, groups, preFilters,
		cached = tokenCache[ selector + " " ];

	if ( cached ) {
		return parseOnly ? 0 : cached.slice( 0 );
	}

	soFar = selector;
	groups = [];
	preFilters = Expr.preFilter;

	while ( soFar ) {

		// Comma and first run
		if ( !matched || (match = rcomma.exec( soFar )) ) {
			if ( match ) {
				// Don't consume trailing commas as valid
				soFar = soFar.slice( match[0].length ) || soFar;
			}
			groups.push( (tokens = []) );
		}

		matched = false;

		// Combinators
		if ( (match = rcombinators.exec( soFar )) ) {
			matched = match.shift();
			tokens.push({
				value: matched,
				// Cast descendant combinators to space
				type: match[0].replace( rtrim, " " )
			});
			soFar = soFar.slice( matched.length );
		}

		// Filters
		for ( type in Expr.filter ) {
			if ( (match = matchExpr[ type ].exec( soFar )) && (!preFilters[ type ] ||
				(match = preFilters[ type ]( match ))) ) {
				matched = match.shift();
				tokens.push({
					value: matched,
					type: type,
					matches: match
				});
				soFar = soFar.slice( matched.length );
			}
		}

		if ( !matched ) {
			break;
		}
	}

	// Return the length of the invalid excess
	// if we're just parsing
	// Otherwise, throw an error or return tokens
	return parseOnly ?
		soFar.length :
		soFar ?
			Sizzle.error( selector ) :
			// Cache the tokens
			tokenCache( selector, groups ).slice( 0 );
};

function toSelector( tokens ) {
	var i = 0,
		len = tokens.length,
		selector = "";
	for ( ; i < len; i++ ) {
		selector += tokens[i].value;
	}
	return selector;
}

function addCombinator( matcher, combinator, base ) {
	var dir = combinator.dir,
		skip = combinator.next,
		key = skip || dir,
		checkNonElements = base && key === "parentNode",
		doneName = done++;

	return combinator.first ?
		// Check against closest ancestor/preceding element
		function( elem, context, xml ) {
			while ( (elem = elem[ dir ]) ) {
				if ( elem.nodeType === 1 || checkNonElements ) {
					return matcher( elem, context, xml );
				}
			}
			return false;
		} :

		// Check against all ancestor/preceding elements
		function( elem, context, xml ) {
			var oldCache, uniqueCache, outerCache,
				newCache = [ dirruns, doneName ];

			// We can't set arbitrary data on XML nodes, so they don't benefit from combinator caching
			if ( xml ) {
				while ( (elem = elem[ dir ]) ) {
					if ( elem.nodeType === 1 || checkNonElements ) {
						if ( matcher( elem, context, xml ) ) {
							return true;
						}
					}
				}
			} else {
				while ( (elem = elem[ dir ]) ) {
					if ( elem.nodeType === 1 || checkNonElements ) {
						outerCache = elem[ expando ] || (elem[ expando ] = {});

						// Support: IE <9 only
						// Defend against cloned attroperties (jQuery gh-1709)
						uniqueCache = outerCache[ elem.uniqueID ] || (outerCache[ elem.uniqueID ] = {});

						if ( skip && skip === elem.nodeName.toLowerCase() ) {
							elem = elem[ dir ] || elem;
						} else if ( (oldCache = uniqueCache[ key ]) &&
							oldCache[ 0 ] === dirruns && oldCache[ 1 ] === doneName ) {

							// Assign to newCache so results back-propagate to previous elements
							return (newCache[ 2 ] = oldCache[ 2 ]);
						} else {
							// Reuse newcache so results back-propagate to previous elements
							uniqueCache[ key ] = newCache;

							// A match means we're done; a fail means we have to keep checking
							if ( (newCache[ 2 ] = matcher( elem, context, xml )) ) {
								return true;
							}
						}
					}
				}
			}
			return false;
		};
}

function elementMatcher( matchers ) {
	return matchers.length > 1 ?
		function( elem, context, xml ) {
			var i = matchers.length;
			while ( i-- ) {
				if ( !matchers[i]( elem, context, xml ) ) {
					return false;
				}
			}
			return true;
		} :
		matchers[0];
}

function multipleContexts( selector, contexts, results ) {
	var i = 0,
		len = contexts.length;
	for ( ; i < len; i++ ) {
		Sizzle( selector, contexts[i], results );
	}
	return results;
}

function condense( unmatched, map, filter, context, xml ) {
	var elem,
		newUnmatched = [],
		i = 0,
		len = unmatched.length,
		mapped = map != null;

	for ( ; i < len; i++ ) {
		if ( (elem = unmatched[i]) ) {
			if ( !filter || filter( elem, context, xml ) ) {
				newUnmatched.push( elem );
				if ( mapped ) {
					map.push( i );
				}
			}
		}
	}

	return newUnmatched;
}

function setMatcher( preFilter, selector, matcher, postFilter, postFinder, postSelector ) {
	if ( postFilter && !postFilter[ expando ] ) {
		postFilter = setMatcher( postFilter );
	}
	if ( postFinder && !postFinder[ expando ] ) {
		postFinder = setMatcher( postFinder, postSelector );
	}
	return markFunction(function( seed, results, context, xml ) {
		var temp, i, elem,
			preMap = [],
			postMap = [],
			preexisting = results.length,

			// Get initial elements from seed or context
			elems = seed || multipleContexts( selector || "*", context.nodeType ? [ context ] : context, [] ),

			// Prefilter to get matcher input, preserving a map for seed-results synchronization
			matcherIn = preFilter && ( seed || !selector ) ?
				condense( elems, preMap, preFilter, context, xml ) :
				elems,

			matcherOut = matcher ?
				// If we have a postFinder, or filtered seed, or non-seed postFilter or preexisting results,
				postFinder || ( seed ? preFilter : preexisting || postFilter ) ?

					// ...intermediate processing is necessary
					[] :

					// ...otherwise use results directly
					results :
				matcherIn;

		// Find primary matches
		if ( matcher ) {
			matcher( matcherIn, matcherOut, context, xml );
		}

		// Apply postFilter
		if ( postFilter ) {
			temp = condense( matcherOut, postMap );
			postFilter( temp, [], context, xml );

			// Un-match failing elements by moving them back to matcherIn
			i = temp.length;
			while ( i-- ) {
				if ( (elem = temp[i]) ) {
					matcherOut[ postMap[i] ] = !(matcherIn[ postMap[i] ] = elem);
				}
			}
		}

		if ( seed ) {
			if ( postFinder || preFilter ) {
				if ( postFinder ) {
					// Get the final matcherOut by condensing this intermediate into postFinder contexts
					temp = [];
					i = matcherOut.length;
					while ( i-- ) {
						if ( (elem = matcherOut[i]) ) {
							// Restore matcherIn since elem is not yet a final match
							temp.push( (matcherIn[i] = elem) );
						}
					}
					postFinder( null, (matcherOut = []), temp, xml );
				}

				// Move matched elements from seed to results to keep them synchronized
				i = matcherOut.length;
				while ( i-- ) {
					if ( (elem = matcherOut[i]) &&
						(temp = postFinder ? indexOf( seed, elem ) : preMap[i]) > -1 ) {

						seed[temp] = !(results[temp] = elem);
					}
				}
			}

		// Add elements to results, through postFinder if defined
		} else {
			matcherOut = condense(
				matcherOut === results ?
					matcherOut.splice( preexisting, matcherOut.length ) :
					matcherOut
			);
			if ( postFinder ) {
				postFinder( null, results, matcherOut, xml );
			} else {
				push.apply( results, matcherOut );
			}
		}
	});
}

function matcherFromTokens( tokens ) {
	var checkContext, matcher, j,
		len = tokens.length,
		leadingRelative = Expr.relative[ tokens[0].type ],
		implicitRelative = leadingRelative || Expr.relative[" "],
		i = leadingRelative ? 1 : 0,

		// The foundational matcher ensures that elements are reachable from top-level context(s)
		matchContext = addCombinator( function( elem ) {
			return elem === checkContext;
		}, implicitRelative, true ),
		matchAnyContext = addCombinator( function( elem ) {
			return indexOf( checkContext, elem ) > -1;
		}, implicitRelative, true ),
		matchers = [ function( elem, context, xml ) {
			var ret = ( !leadingRelative && ( xml || context !== outermostContext ) ) || (
				(checkContext = context).nodeType ?
					matchContext( elem, context, xml ) :
					matchAnyContext( elem, context, xml ) );
			// Avoid hanging onto element (issue #299)
			checkContext = null;
			return ret;
		} ];

	for ( ; i < len; i++ ) {
		if ( (matcher = Expr.relative[ tokens[i].type ]) ) {
			matchers = [ addCombinator(elementMatcher( matchers ), matcher) ];
		} else {
			matcher = Expr.filter[ tokens[i].type ].apply( null, tokens[i].matches );

			// Return special upon seeing a positional matcher
			if ( matcher[ expando ] ) {
				// Find the next relative operator (if any) for proper handling
				j = ++i;
				for ( ; j < len; j++ ) {
					if ( Expr.relative[ tokens[j].type ] ) {
						break;
					}
				}
				return setMatcher(
					i > 1 && elementMatcher( matchers ),
					i > 1 && toSelector(
						// If the preceding token was a descendant combinator, insert an implicit any-element `*`
						tokens.slice( 0, i - 1 ).concat({ value: tokens[ i - 2 ].type === " " ? "*" : "" })
					).replace( rtrim, "$1" ),
					matcher,
					i < j && matcherFromTokens( tokens.slice( i, j ) ),
					j < len && matcherFromTokens( (tokens = tokens.slice( j )) ),
					j < len && toSelector( tokens )
				);
			}
			matchers.push( matcher );
		}
	}

	return elementMatcher( matchers );
}

function matcherFromGroupMatchers( elementMatchers, setMatchers ) {
	var bySet = setMatchers.length > 0,
		byElement = elementMatchers.length > 0,
		superMatcher = function( seed, context, xml, results, outermost ) {
			var elem, j, matcher,
				matchedCount = 0,
				i = "0",
				unmatched = seed && [],
				setMatched = [],
				contextBackup = outermostContext,
				// We must always have either seed elements or outermost context
				elems = seed || byElement && Expr.find["TAG"]( "*", outermost ),
				// Use integer dirruns iff this is the outermost matcher
				dirrunsUnique = (dirruns += contextBackup == null ? 1 : Math.random() || 0.1),
				len = elems.length;

			if ( outermost ) {
				outermostContext = context === document || context || outermost;
			}

			// Add elements passing elementMatchers directly to results
			// Support: IE<9, Safari
			// Tolerate NodeList properties (IE: "length"; Safari: <number>) matching elements by id
			for ( ; i !== len && (elem = elems[i]) != null; i++ ) {
				if ( byElement && elem ) {
					j = 0;
					if ( !context && elem.ownerDocument !== document ) {
						setDocument( elem );
						xml = !documentIsHTML;
					}
					while ( (matcher = elementMatchers[j++]) ) {
						if ( matcher( elem, context || document, xml) ) {
							results.push( elem );
							break;
						}
					}
					if ( outermost ) {
						dirruns = dirrunsUnique;
					}
				}

				// Track unmatched elements for set filters
				if ( bySet ) {
					// They will have gone through all possible matchers
					if ( (elem = !matcher && elem) ) {
						matchedCount--;
					}

					// Lengthen the array for every element, matched or not
					if ( seed ) {
						unmatched.push( elem );
					}
				}
			}

			// `i` is now the count of elements visited above, and adding it to `matchedCount`
			// makes the latter nonnegative.
			matchedCount += i;

			// Apply set filters to unmatched elements
			// NOTE: This can be skipped if there are no unmatched elements (i.e., `matchedCount`
			// equals `i`), unless we didn't visit _any_ elements in the above loop because we have
			// no element matchers and no seed.
			// Incrementing an initially-string "0" `i` allows `i` to remain a string only in that
			// case, which will result in a "00" `matchedCount` that differs from `i` but is also
			// numerically zero.
			if ( bySet && i !== matchedCount ) {
				j = 0;
				while ( (matcher = setMatchers[j++]) ) {
					matcher( unmatched, setMatched, context, xml );
				}

				if ( seed ) {
					// Reintegrate element matches to eliminate the need for sorting
					if ( matchedCount > 0 ) {
						while ( i-- ) {
							if ( !(unmatched[i] || setMatched[i]) ) {
								setMatched[i] = pop.call( results );
							}
						}
					}

					// Discard index placeholder values to get only actual matches
					setMatched = condense( setMatched );
				}

				// Add matches to results
				push.apply( results, setMatched );

				// Seedless set matches succeeding multiple successful matchers stipulate sorting
				if ( outermost && !seed && setMatched.length > 0 &&
					( matchedCount + setMatchers.length ) > 1 ) {

					Sizzle.uniqueSort( results );
				}
			}

			// Override manipulation of globals by nested matchers
			if ( outermost ) {
				dirruns = dirrunsUnique;
				outermostContext = contextBackup;
			}

			return unmatched;
		};

	return bySet ?
		markFunction( superMatcher ) :
		superMatcher;
}

compile = Sizzle.compile = function( selector, match /* Internal Use Only */ ) {
	var i,
		setMatchers = [],
		elementMatchers = [],
		cached = compilerCache[ selector + " " ];

	if ( !cached ) {
		// Generate a function of recursive functions that can be used to check each element
		if ( !match ) {
			match = tokenize( selector );
		}
		i = match.length;
		while ( i-- ) {
			cached = matcherFromTokens( match[i] );
			if ( cached[ expando ] ) {
				setMatchers.push( cached );
			} else {
				elementMatchers.push( cached );
			}
		}

		// Cache the compiled function
		cached = compilerCache( selector, matcherFromGroupMatchers( elementMatchers, setMatchers ) );

		// Save selector and tokenization
		cached.selector = selector;
	}
	return cached;
};

/**
 * A low-level selection function that works with Sizzle's compiled
 *  selector functions
 * @param {String|Function} selector A selector or a pre-compiled
 *  selector function built with Sizzle.compile
 * @param {Element} context
 * @param {Array} [results]
 * @param {Array} [seed] A set of elements to match against
 */
select = Sizzle.select = function( selector, context, results, seed ) {
	var i, tokens, token, type, find,
		compiled = typeof selector === "function" && selector,
		match = !seed && tokenize( (selector = compiled.selector || selector) );

	results = results || [];

	// Try to minimize operations if there is only one selector in the list and no seed
	// (the latter of which guarantees us context)
	if ( match.length === 1 ) {

		// Reduce context if the leading compound selector is an ID
		tokens = match[0] = match[0].slice( 0 );
		if ( tokens.length > 2 && (token = tokens[0]).type === "ID" &&
				context.nodeType === 9 && documentIsHTML && Expr.relative[ tokens[1].type ] ) {

			context = ( Expr.find["ID"]( token.matches[0].replace(runescape, funescape), context ) || [] )[0];
			if ( !context ) {
				return results;

			// Precompiled matchers will still verify ancestry, so step up a level
			} else if ( compiled ) {
				context = context.parentNode;
			}

			selector = selector.slice( tokens.shift().value.length );
		}

		// Fetch a seed set for right-to-left matching
		i = matchExpr["needsContext"].test( selector ) ? 0 : tokens.length;
		while ( i-- ) {
			token = tokens[i];

			// Abort if we hit a combinator
			if ( Expr.relative[ (type = token.type) ] ) {
				break;
			}
			if ( (find = Expr.find[ type ]) ) {
				// Search, expanding context for leading sibling combinators
				if ( (seed = find(
					token.matches[0].replace( runescape, funescape ),
					rsibling.test( tokens[0].type ) && testContext( context.parentNode ) || context
				)) ) {

					// If seed is empty or no tokens remain, we can return early
					tokens.splice( i, 1 );
					selector = seed.length && toSelector( tokens );
					if ( !selector ) {
						push.apply( results, seed );
						return results;
					}

					break;
				}
			}
		}
	}

	// Compile and execute a filtering function if one is not provided
	// Provide `match` to avoid retokenization if we modified the selector above
	( compiled || compile( selector, match ) )(
		seed,
		context,
		!documentIsHTML,
		results,
		!context || rsibling.test( selector ) && testContext( context.parentNode ) || context
	);
	return results;
};

// One-time assignments

// Sort stability
support.sortStable = expando.split("").sort( sortOrder ).join("") === expando;

// Support: Chrome 14-35+
// Always assume duplicates if they aren't passed to the comparison function
support.detectDuplicates = !!hasDuplicate;

// Initialize against the default document
setDocument();

// Support: Webkit<537.32 - Safari 6.0.3/Chrome 25 (fixed in Chrome 27)
// Detached nodes confoundingly follow *each other*
support.sortDetached = assert(function( el ) {
	// Should return 1, but returns 4 (following)
	return el.compareDocumentPosition( document.createElement("fieldset") ) & 1;
});

// Support: IE<8
// Prevent attribute/property "interpolation"
// https://msdn.microsoft.com/en-us/library/ms536429%28VS.85%29.aspx
if ( !assert(function( el ) {
	el.innerHTML = "<a href='#'></a>";
	return el.firstChild.getAttribute("href") === "#" ;
}) ) {
	addHandle( "type|href|height|width", function( elem, name, isXML ) {
		if ( !isXML ) {
			return elem.getAttribute( name, name.toLowerCase() === "type" ? 1 : 2 );
		}
	});
}

// Support: IE<9
// Use defaultValue in place of getAttribute("value")
if ( !support.attributes || !assert(function( el ) {
	el.innerHTML = "<input/>";
	el.firstChild.setAttribute( "value", "" );
	return el.firstChild.getAttribute( "value" ) === "";
}) ) {
	addHandle( "value", function( elem, name, isXML ) {
		if ( !isXML && elem.nodeName.toLowerCase() === "input" ) {
			return elem.defaultValue;
		}
	});
}

// Support: IE<9
// Use getAttributeNode to fetch booleans when getAttribute lies
if ( !assert(function( el ) {
	return el.getAttribute("disabled") == null;
}) ) {
	addHandle( booleans, function( elem, name, isXML ) {
		var val;
		if ( !isXML ) {
			return elem[ name ] === true ? name.toLowerCase() :
					(val = elem.getAttributeNode( name )) && val.specified ?
					val.value :
				null;
		}
	});
}

return Sizzle;

})( window );



jQuery.find = Sizzle;
jQuery.expr = Sizzle.selectors;

// Deprecated
jQuery.expr[ ":" ] = jQuery.expr.pseudos;
jQuery.uniqueSort = jQuery.unique = Sizzle.uniqueSort;
jQuery.text = Sizzle.getText;
jQuery.isXMLDoc = Sizzle.isXML;
jQuery.contains = Sizzle.contains;
jQuery.escapeSelector = Sizzle.escape;




var dir = function( elem, dir, until ) {
	var matched = [],
		truncate = until !== undefined;

	while ( ( elem = elem[ dir ] ) && elem.nodeType !== 9 ) {
		if ( elem.nodeType === 1 ) {
			if ( truncate && jQuery( elem ).is( until ) ) {
				break;
			}
			matched.push( elem );
		}
	}
	return matched;
};


var siblings = function( n, elem ) {
	var matched = [];

	for ( ; n; n = n.nextSibling ) {
		if ( n.nodeType === 1 && n !== elem ) {
			matched.push( n );
		}
	}

	return matched;
};


var rneedsContext = jQuery.expr.match.needsContext;



function nodeName( elem, name ) {

  return elem.nodeName && elem.nodeName.toLowerCase() === name.toLowerCase();

};
var rsingleTag = ( /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i );



var risSimple = /^.[^:#\[\.,]*$/;

// Implement the identical functionality for filter and not
function winnow( elements, qualifier, not ) {
	if ( jQuery.isFunction( qualifier ) ) {
		return jQuery.grep( elements, function( elem, i ) {
			return !!qualifier.call( elem, i, elem ) !== not;
		} );
	}

	// Single element
	if ( qualifier.nodeType ) {
		return jQuery.grep( elements, function( elem ) {
			return ( elem === qualifier ) !== not;
		} );
	}

	// Arraylike of elements (jQuery, arguments, Array)
	if ( typeof qualifier !== "string" ) {
		return jQuery.grep( elements, function( elem ) {
			return ( indexOf.call( qualifier, elem ) > -1 ) !== not;
		} );
	}

	// Simple selector that can be filtered directly, removing non-Elements
	if ( risSimple.test( qualifier ) ) {
		return jQuery.filter( qualifier, elements, not );
	}

	// Complex selector, compare the two sets, removing non-Elements
	qualifier = jQuery.filter( qualifier, elements );
	return jQuery.grep( elements, function( elem ) {
		return ( indexOf.call( qualifier, elem ) > -1 ) !== not && elem.nodeType === 1;
	} );
}

jQuery.filter = function( expr, elems, not ) {
	var elem = elems[ 0 ];

	if ( not ) {
		expr = ":not(" + expr + ")";
	}

	if ( elems.length === 1 && elem.nodeType === 1 ) {
		return jQuery.find.matchesSelector( elem, expr ) ? [ elem ] : [];
	}

	return jQuery.find.matches( expr, jQuery.grep( elems, function( elem ) {
		return elem.nodeType === 1;
	} ) );
};

jQuery.fn.extend( {
	find: function( selector ) {
		var i, ret,
			len = this.length,
			self = this;

		if ( typeof selector !== "string" ) {
			return this.pushStack( jQuery( selector ).filter( function() {
				for ( i = 0; i < len; i++ ) {
					if ( jQuery.contains( self[ i ], this ) ) {
						return true;
					}
				}
			} ) );
		}

		ret = this.pushStack( [] );

		for ( i = 0; i < len; i++ ) {
			jQuery.find( selector, self[ i ], ret );
		}

		return len > 1 ? jQuery.uniqueSort( ret ) : ret;
	},
	filter: function( selector ) {
		return this.pushStack( winnow( this, selector || [], false ) );
	},
	not: function( selector ) {
		return this.pushStack( winnow( this, selector || [], true ) );
	},
	is: function( selector ) {
		return !!winnow(
			this,

			// If this is a positional/relative selector, check membership in the returned set
			// so $("p:first").is("p:last") won't return true for a doc with two "p".
			typeof selector === "string" && rneedsContext.test( selector ) ?
				jQuery( selector ) :
				selector || [],
			false
		).length;
	}
} );


// Initialize a jQuery object


// A central reference to the root jQuery(document)
var rootjQuery,

	// A simple way to check for HTML strings
	// Prioritize #id over <tag> to avoid XSS via location.hash (#9521)
	// Strict HTML recognition (#11290: must start with <)
	// Shortcut simple #id case for speed
	rquickExpr = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,

	init = jQuery.fn.init = function( selector, context, root ) {
		var match, elem;

		// HANDLE: $(""), $(null), $(undefined), $(false)
		if ( !selector ) {
			return this;
		}

		// Method init() accepts an alternate rootjQuery
		// so migrate can support jQuery.sub (gh-2101)
		root = root || rootjQuery;

		// Handle HTML strings
		if ( typeof selector === "string" ) {
			if ( selector[ 0 ] === "<" &&
				selector[ selector.length - 1 ] === ">" &&
				selector.length >= 3 ) {

				// Assume that strings that start and end with <> are HTML and skip the regex check
				match = [ null, selector, null ];

			} else {
				match = rquickExpr.exec( selector );
			}

			// Match html or make sure no context is specified for #id
			if ( match && ( match[ 1 ] || !context ) ) {

				// HANDLE: $(html) -> $(array)
				if ( match[ 1 ] ) {
					context = context instanceof jQuery ? context[ 0 ] : context;

					// Option to run scripts is true for back-compat
					// Intentionally let the error be thrown if parseHTML is not present
					jQuery.merge( this, jQuery.parseHTML(
						match[ 1 ],
						context && context.nodeType ? context.ownerDocument || context : document,
						true
					) );

					// HANDLE: $(html, props)
					if ( rsingleTag.test( match[ 1 ] ) && jQuery.isPlainObject( context ) ) {
						for ( match in context ) {

							// Properties of context are called as methods if possible
							if ( jQuery.isFunction( this[ match ] ) ) {
								this[ match ]( context[ match ] );

							// ...and otherwise set as attributes
							} else {
								this.attr( match, context[ match ] );
							}
						}
					}

					return this;

				// HANDLE: $(#id)
				} else {
					elem = document.getElementById( match[ 2 ] );

					if ( elem ) {

						// Inject the element directly into the jQuery object
						this[ 0 ] = elem;
						this.length = 1;
					}
					return this;
				}

			// HANDLE: $(expr, $(...))
			} else if ( !context || context.jquery ) {
				return ( context || root ).find( selector );

			// HANDLE: $(expr, context)
			// (which is just equivalent to: $(context).find(expr)
			} else {
				return this.constructor( context ).find( selector );
			}

		// HANDLE: $(DOMElement)
		} else if ( selector.nodeType ) {
			this[ 0 ] = selector;
			this.length = 1;
			return this;

		// HANDLE: $(function)
		// Shortcut for document ready
		} else if ( jQuery.isFunction( selector ) ) {
			return root.ready !== undefined ?
				root.ready( selector ) :

				// Execute immediately if ready is not present
				selector( jQuery );
		}

		return jQuery.makeArray( selector, this );
	};

// Give the init function the jQuery prototype for later instantiation
init.prototype = jQuery.fn;

// Initialize central reference
rootjQuery = jQuery( document );


var rparentsprev = /^(?:parents|prev(?:Until|All))/,

	// Methods guaranteed to produce a unique set when starting from a unique set
	guaranteedUnique = {
		children: true,
		contents: true,
		next: true,
		prev: true
	};

jQuery.fn.extend( {
	has: function( target ) {
		var targets = jQuery( target, this ),
			l = targets.length;

		return this.filter( function() {
			var i = 0;
			for ( ; i < l; i++ ) {
				if ( jQuery.contains( this, targets[ i ] ) ) {
					return true;
				}
			}
		} );
	},

	closest: function( selectors, context ) {
		var cur,
			i = 0,
			l = this.length,
			matched = [],
			targets = typeof selectors !== "string" && jQuery( selectors );

		// Positional selectors never match, since there's no _selection_ context
		if ( !rneedsContext.test( selectors ) ) {
			for ( ; i < l; i++ ) {
				for ( cur = this[ i ]; cur && cur !== context; cur = cur.parentNode ) {

					// Always skip document fragments
					if ( cur.nodeType < 11 && ( targets ?
						targets.index( cur ) > -1 :

						// Don't pass non-elements to Sizzle
						cur.nodeType === 1 &&
							jQuery.find.matchesSelector( cur, selectors ) ) ) {

						matched.push( cur );
						break;
					}
				}
			}
		}

		return this.pushStack( matched.length > 1 ? jQuery.uniqueSort( matched ) : matched );
	},

	// Determine the position of an element within the set
	index: function( elem ) {

		// No argument, return index in parent
		if ( !elem ) {
			return ( this[ 0 ] && this[ 0 ].parentNode ) ? this.first().prevAll().length : -1;
		}

		// Index in selector
		if ( typeof elem === "string" ) {
			return indexOf.call( jQuery( elem ), this[ 0 ] );
		}

		// Locate the position of the desired element
		return indexOf.call( this,

			// If it receives a jQuery object, the first element is used
			elem.jquery ? elem[ 0 ] : elem
		);
	},

	add: function( selector, context ) {
		return this.pushStack(
			jQuery.uniqueSort(
				jQuery.merge( this.get(), jQuery( selector, context ) )
			)
		);
	},

	addBack: function( selector ) {
		return this.add( selector == null ?
			this.prevObject : this.prevObject.filter( selector )
		);
	}
} );

function sibling( cur, dir ) {
	while ( ( cur = cur[ dir ] ) && cur.nodeType !== 1 ) {}
	return cur;
}

jQuery.each( {
	parent: function( elem ) {
		var parent = elem.parentNode;
		return parent && parent.nodeType !== 11 ? parent : null;
	},
	parents: function( elem ) {
		return dir( elem, "parentNode" );
	},
	parentsUntil: function( elem, i, until ) {
		return dir( elem, "parentNode", until );
	},
	next: function( elem ) {
		return sibling( elem, "nextSibling" );
	},
	prev: function( elem ) {
		return sibling( elem, "previousSibling" );
	},
	nextAll: function( elem ) {
		return dir( elem, "nextSibling" );
	},
	prevAll: function( elem ) {
		return dir( elem, "previousSibling" );
	},
	nextUntil: function( elem, i, until ) {
		return dir( elem, "nextSibling", until );
	},
	prevUntil: function( elem, i, until ) {
		return dir( elem, "previousSibling", until );
	},
	siblings: function( elem ) {
		return siblings( ( elem.parentNode || {} ).firstChild, elem );
	},
	children: function( elem ) {
		return siblings( elem.firstChild );
	},
	contents: function( elem ) {
        if ( nodeName( elem, "iframe" ) ) {
            return elem.contentDocument;
        }

        // Support: IE 9 - 11 only, iOS 7 only, Android Browser <=4.3 only
        // Treat the template element as a regular one in browsers that
        // don't support it.
        if ( nodeName( elem, "template" ) ) {
            elem = elem.content || elem;
        }

        return jQuery.merge( [], elem.childNodes );
	}
}, function( name, fn ) {
	jQuery.fn[ name ] = function( until, selector ) {
		var matched = jQuery.map( this, fn, until );

		if ( name.slice( -5 ) !== "Until" ) {
			selector = until;
		}

		if ( selector && typeof selector === "string" ) {
			matched = jQuery.filter( selector, matched );
		}

		if ( this.length > 1 ) {

			// Remove duplicates
			if ( !guaranteedUnique[ name ] ) {
				jQuery.uniqueSort( matched );
			}

			// Reverse order for parents* and prev-derivatives
			if ( rparentsprev.test( name ) ) {
				matched.reverse();
			}
		}

		return this.pushStack( matched );
	};
} );
var rnothtmlwhite = ( /[^\x20\t\r\n\f]+/g );



// Convert String-formatted options into Object-formatted ones
function createOptions( options ) {
	var object = {};
	jQuery.each( options.match( rnothtmlwhite ) || [], function( _, flag ) {
		object[ flag ] = true;
	} );
	return object;
}

/*
 * Create a callback list using the following parameters:
 *
 *	options: an optional list of space-separated options that will change how
 *			the callback list behaves or a more traditional option object
 *
 * By default a callback list will act like an event callback list and can be
 * "fired" multiple times.
 *
 * Possible options:
 *
 *	once:			will ensure the callback list can only be fired once (like a Deferred)
 *
 *	memory:			will keep track of previous values and will call any callback added
 *					after the list has been fired right away with the latest "memorized"
 *					values (like a Deferred)
 *
 *	unique:			will ensure a callback can only be added once (no duplicate in the list)
 *
 *	stopOnFalse:	interrupt callings when a callback returns false
 *
 */
jQuery.Callbacks = function( options ) {

	// Convert options from String-formatted to Object-formatted if needed
	// (we check in cache first)
	options = typeof options === "string" ?
		createOptions( options ) :
		jQuery.extend( {}, options );

	var // Flag to know if list is currently firing
		firing,

		// Last fire value for non-forgettable lists
		memory,

		// Flag to know if list was already fired
		fired,

		// Flag to prevent firing
		locked,

		// Actual callback list
		list = [],

		// Queue of execution data for repeatable lists
		queue = [],

		// Index of currently firing callback (modified by add/remove as needed)
		firingIndex = -1,

		// Fire callbacks
		fire = function() {

			// Enforce single-firing
			locked = locked || options.once;

			// Execute callbacks for all pending executions,
			// respecting firingIndex overrides and runtime changes
			fired = firing = true;
			for ( ; queue.length; firingIndex = -1 ) {
				memory = queue.shift();
				while ( ++firingIndex < list.length ) {

					// Run callback and check for early termination
					if ( list[ firingIndex ].apply( memory[ 0 ], memory[ 1 ] ) === false &&
						options.stopOnFalse ) {

						// Jump to end and forget the data so .add doesn't re-fire
						firingIndex = list.length;
						memory = false;
					}
				}
			}

			// Forget the data if we're done with it
			if ( !options.memory ) {
				memory = false;
			}

			firing = false;

			// Clean up if we're done firing for good
			if ( locked ) {

				// Keep an empty list if we have data for future add calls
				if ( memory ) {
					list = [];

				// Otherwise, this object is spent
				} else {
					list = "";
				}
			}
		},

		// Actual Callbacks object
		self = {

			// Add a callback or a collection of callbacks to the list
			add: function() {
				if ( list ) {

					// If we have memory from a past run, we should fire after adding
					if ( memory && !firing ) {
						firingIndex = list.length - 1;
						queue.push( memory );
					}

					( function add( args ) {
						jQuery.each( args, function( _, arg ) {
							if ( jQuery.isFunction( arg ) ) {
								if ( !options.unique || !self.has( arg ) ) {
									list.push( arg );
								}
							} else if ( arg && arg.length && jQuery.type( arg ) !== "string" ) {

								// Inspect recursively
								add( arg );
							}
						} );
					} )( arguments );

					if ( memory && !firing ) {
						fire();
					}
				}
				return this;
			},

			// Remove a callback from the list
			remove: function() {
				jQuery.each( arguments, function( _, arg ) {
					var index;
					while ( ( index = jQuery.inArray( arg, list, index ) ) > -1 ) {
						list.splice( index, 1 );

						// Handle firing indexes
						if ( index <= firingIndex ) {
							firingIndex--;
						}
					}
				} );
				return this;
			},

			// Check if a given callback is in the list.
			// If no argument is given, return whether or not list has callbacks attached.
			has: function( fn ) {
				return fn ?
					jQuery.inArray( fn, list ) > -1 :
					list.length > 0;
			},

			// Remove all callbacks from the list
			empty: function() {
				if ( list ) {
					list = [];
				}
				return this;
			},

			// Disable .fire and .add
			// Abort any current/pending executions
			// Clear all callbacks and values
			disable: function() {
				locked = queue = [];
				list = memory = "";
				return this;
			},
			disabled: function() {
				return !list;
			},

			// Disable .fire
			// Also disable .add unless we have memory (since it would have no effect)
			// Abort any pending executions
			lock: function() {
				locked = queue = [];
				if ( !memory && !firing ) {
					list = memory = "";
				}
				return this;
			},
			locked: function() {
				return !!locked;
			},

			// Call all callbacks with the given context and arguments
			fireWith: function( context, args ) {
				if ( !locked ) {
					args = args || [];
					args = [ context, args.slice ? args.slice() : args ];
					queue.push( args );
					if ( !firing ) {
						fire();
					}
				}
				return this;
			},

			// Call all the callbacks with the given arguments
			fire: function() {
				self.fireWith( this, arguments );
				return this;
			},

			// To know if the callbacks have already been called at least once
			fired: function() {
				return !!fired;
			}
		};

	return self;
};


function Identity( v ) {
	return v;
}
function Thrower( ex ) {
	throw ex;
}

function adoptValue( value, resolve, reject, noValue ) {
	var method;

	try {

		// Check for promise aspect first to privilege synchronous behavior
		if ( value && jQuery.isFunction( ( method = value.promise ) ) ) {
			method.call( value ).done( resolve ).fail( reject );

		// Other thenables
		} else if ( value && jQuery.isFunction( ( method = value.then ) ) ) {
			method.call( value, resolve, reject );

		// Other non-thenables
		} else {

			// Control `resolve` arguments by letting Array#slice cast boolean `noValue` to integer:
			// * false: [ value ].slice( 0 ) => resolve( value )
			// * true: [ value ].slice( 1 ) => resolve()
			resolve.apply( undefined, [ value ].slice( noValue ) );
		}

	// For Promises/A+, convert exceptions into rejections
	// Since jQuery.when doesn't unwrap thenables, we can skip the extra checks appearing in
	// Deferred#then to conditionally suppress rejection.
	} catch ( value ) {

		// Support: Android 4.0 only
		// Strict mode functions invoked without .call/.apply get global-object context
		reject.apply( undefined, [ value ] );
	}
}

jQuery.extend( {

	Deferred: function( func ) {
		var tuples = [

				// action, add listener, callbacks,
				// ... .then handlers, argument index, [final state]
				[ "notify", "progress", jQuery.Callbacks( "memory" ),
					jQuery.Callbacks( "memory" ), 2 ],
				[ "resolve", "done", jQuery.Callbacks( "once memory" ),
					jQuery.Callbacks( "once memory" ), 0, "resolved" ],
				[ "reject", "fail", jQuery.Callbacks( "once memory" ),
					jQuery.Callbacks( "once memory" ), 1, "rejected" ]
			],
			state = "pending",
			promise = {
				state: function() {
					return state;
				},
				always: function() {
					deferred.done( arguments ).fail( arguments );
					return this;
				},
				"catch": function( fn ) {
					return promise.then( null, fn );
				},

				// Keep pipe for back-compat
				pipe: function( /* fnDone, fnFail, fnProgress */ ) {
					var fns = arguments;

					return jQuery.Deferred( function( newDefer ) {
						jQuery.each( tuples, function( i, tuple ) {

							// Map tuples (progress, done, fail) to arguments (done, fail, progress)
							var fn = jQuery.isFunction( fns[ tuple[ 4 ] ] ) && fns[ tuple[ 4 ] ];

							// deferred.progress(function() { bind to newDefer or newDefer.notify })
							// deferred.done(function() { bind to newDefer or newDefer.resolve })
							// deferred.fail(function() { bind to newDefer or newDefer.reject })
							deferred[ tuple[ 1 ] ]( function() {
								var returned = fn && fn.apply( this, arguments );
								if ( returned && jQuery.isFunction( returned.promise ) ) {
									returned.promise()
										.progress( newDefer.notify )
										.done( newDefer.resolve )
										.fail( newDefer.reject );
								} else {
									newDefer[ tuple[ 0 ] + "With" ](
										this,
										fn ? [ returned ] : arguments
									);
								}
							} );
						} );
						fns = null;
					} ).promise();
				},
				then: function( onFulfilled, onRejected, onProgress ) {
					var maxDepth = 0;
					function resolve( depth, deferred, handler, special ) {
						return function() {
							var that = this,
								args = arguments,
								mightThrow = function() {
									var returned, then;

									// Support: Promises/A+ section 2.3.3.3.3
									// https://promisesaplus.com/#point-59
									// Ignore double-resolution attempts
									if ( depth < maxDepth ) {
										return;
									}

									returned = handler.apply( that, args );

									// Support: Promises/A+ section 2.3.1
									// https://promisesaplus.com/#point-48
									if ( returned === deferred.promise() ) {
										throw new TypeError( "Thenable self-resolution" );
									}

									// Support: Promises/A+ sections 2.3.3.1, 3.5
									// https://promisesaplus.com/#point-54
									// https://promisesaplus.com/#point-75
									// Retrieve `then` only once
									then = returned &&

										// Support: Promises/A+ section 2.3.4
										// https://promisesaplus.com/#point-64
										// Only check objects and functions for thenability
										( typeof returned === "object" ||
											typeof returned === "function" ) &&
										returned.then;

									// Handle a returned thenable
									if ( jQuery.isFunction( then ) ) {

										// Special processors (notify) just wait for resolution
										if ( special ) {
											then.call(
												returned,
												resolve( maxDepth, deferred, Identity, special ),
												resolve( maxDepth, deferred, Thrower, special )
											);

										// Normal processors (resolve) also hook into progress
										} else {

											// ...and disregard older resolution values
											maxDepth++;

											then.call(
												returned,
												resolve( maxDepth, deferred, Identity, special ),
												resolve( maxDepth, deferred, Thrower, special ),
												resolve( maxDepth, deferred, Identity,
													deferred.notifyWith )
											);
										}

									// Handle all other returned values
									} else {

										// Only substitute handlers pass on context
										// and multiple values (non-spec behavior)
										if ( handler !== Identity ) {
											that = undefined;
											args = [ returned ];
										}

										// Process the value(s)
										// Default process is resolve
										( special || deferred.resolveWith )( that, args );
									}
								},

								// Only normal processors (resolve) catch and reject exceptions
								process = special ?
									mightThrow :
									function() {
										try {
											mightThrow();
										} catch ( e ) {

											if ( jQuery.Deferred.exceptionHook ) {
												jQuery.Deferred.exceptionHook( e,
													process.stackTrace );
											}

											// Support: Promises/A+ section 2.3.3.3.4.1
											// https://promisesaplus.com/#point-61
											// Ignore post-resolution exceptions
											if ( depth + 1 >= maxDepth ) {

												// Only substitute handlers pass on context
												// and multiple values (non-spec behavior)
												if ( handler !== Thrower ) {
													that = undefined;
													args = [ e ];
												}

												deferred.rejectWith( that, args );
											}
										}
									};

							// Support: Promises/A+ section 2.3.3.3.1
							// https://promisesaplus.com/#point-57
							// Re-resolve promises immediately to dodge false rejection from
							// subsequent errors
							if ( depth ) {
								process();
							} else {

								// Call an optional hook to record the stack, in case of exception
								// since it's otherwise lost when execution goes async
								if ( jQuery.Deferred.getStackHook ) {
									process.stackTrace = jQuery.Deferred.getStackHook();
								}
								window.setTimeout( process );
							}
						};
					}

					return jQuery.Deferred( function( newDefer ) {

						// progress_handlers.add( ... )
						tuples[ 0 ][ 3 ].add(
							resolve(
								0,
								newDefer,
								jQuery.isFunction( onProgress ) ?
									onProgress :
									Identity,
								newDefer.notifyWith
							)
						);

						// fulfilled_handlers.add( ... )
						tuples[ 1 ][ 3 ].add(
							resolve(
								0,
								newDefer,
								jQuery.isFunction( onFulfilled ) ?
									onFulfilled :
									Identity
							)
						);

						// rejected_handlers.add( ... )
						tuples[ 2 ][ 3 ].add(
							resolve(
								0,
								newDefer,
								jQuery.isFunction( onRejected ) ?
									onRejected :
									Thrower
							)
						);
					} ).promise();
				},

				// Get a promise for this deferred
				// If obj is provided, the promise aspect is added to the object
				promise: function( obj ) {
					return obj != null ? jQuery.extend( obj, promise ) : promise;
				}
			},
			deferred = {};

		// Add list-specific methods
		jQuery.each( tuples, function( i, tuple ) {
			var list = tuple[ 2 ],
				stateString = tuple[ 5 ];

			// promise.progress = list.add
			// promise.done = list.add
			// promise.fail = list.add
			promise[ tuple[ 1 ] ] = list.add;

			// Handle state
			if ( stateString ) {
				list.add(
					function() {

						// state = "resolved" (i.e., fulfilled)
						// state = "rejected"
						state = stateString;
					},

					// rejected_callbacks.disable
					// fulfilled_callbacks.disable
					tuples[ 3 - i ][ 2 ].disable,

					// progress_callbacks.lock
					tuples[ 0 ][ 2 ].lock
				);
			}

			// progress_handlers.fire
			// fulfilled_handlers.fire
			// rejected_handlers.fire
			list.add( tuple[ 3 ].fire );

			// deferred.notify = function() { deferred.notifyWith(...) }
			// deferred.resolve = function() { deferred.resolveWith(...) }
			// deferred.reject = function() { deferred.rejectWith(...) }
			deferred[ tuple[ 0 ] ] = function() {
				deferred[ tuple[ 0 ] + "With" ]( this === deferred ? undefined : this, arguments );
				return this;
			};

			// deferred.notifyWith = list.fireWith
			// deferred.resolveWith = list.fireWith
			// deferred.rejectWith = list.fireWith
			deferred[ tuple[ 0 ] + "With" ] = list.fireWith;
		} );

		// Make the deferred a promise
		promise.promise( deferred );

		// Call given func if any
		if ( func ) {
			func.call( deferred, deferred );
		}

		// All done!
		return deferred;
	},

	// Deferred helper
	when: function( singleValue ) {
		var

			// count of uncompleted subordinates
			remaining = arguments.length,

			// count of unprocessed arguments
			i = remaining,

			// subordinate fulfillment data
			resolveContexts = Array( i ),
			resolveValues = slice.call( arguments ),

			// the master Deferred
			master = jQuery.Deferred(),

			// subordinate callback factory
			updateFunc = function( i ) {
				return function( value ) {
					resolveContexts[ i ] = this;
					resolveValues[ i ] = arguments.length > 1 ? slice.call( arguments ) : value;
					if ( !( --remaining ) ) {
						master.resolveWith( resolveContexts, resolveValues );
					}
				};
			};

		// Single- and empty arguments are adopted like Promise.resolve
		if ( remaining <= 1 ) {
			adoptValue( singleValue, master.done( updateFunc( i ) ).resolve, master.reject,
				!remaining );

			// Use .then() to unwrap secondary thenables (cf. gh-3000)
			if ( master.state() === "pending" ||
				jQuery.isFunction( resolveValues[ i ] && resolveValues[ i ].then ) ) {

				return master.then();
			}
		}

		// Multiple arguments are aggregated like Promise.all array elements
		while ( i-- ) {
			adoptValue( resolveValues[ i ], updateFunc( i ), master.reject );
		}

		return master.promise();
	}
} );


// These usually indicate a programmer mistake during development,
// warn about them ASAP rather than swallowing them by default.
var rerrorNames = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;

jQuery.Deferred.exceptionHook = function( error, stack ) {

	// Support: IE 8 - 9 only
	// Console exists when dev tools are open, which can happen at any time
	if ( window.console && window.console.warn && error && rerrorNames.test( error.name ) ) {
		window.console.warn( "jQuery.Deferred exception: " + error.message, error.stack, stack );
	}
};




jQuery.readyException = function( error ) {
	window.setTimeout( function() {
		throw error;
	} );
};




// The deferred used on DOM ready
var readyList = jQuery.Deferred();

jQuery.fn.ready = function( fn ) {

	readyList
		.then( fn )

		// Wrap jQuery.readyException in a function so that the lookup
		// happens at the time of error handling instead of callback
		// registration.
		.catch( function( error ) {
			jQuery.readyException( error );
		} );

	return this;
};

jQuery.extend( {

	// Is the DOM ready to be used? Set to true once it occurs.
	isReady: false,

	// A counter to track how many items to wait for before
	// the ready event fires. See #6781
	readyWait: 1,

	// Handle when the DOM is ready
	ready: function( wait ) {

		// Abort if there are pending holds or we're already ready
		if ( wait === true ? --jQuery.readyWait : jQuery.isReady ) {
			return;
		}

		// Remember that the DOM is ready
		jQuery.isReady = true;

		// If a normal DOM Ready event fired, decrement, and wait if need be
		if ( wait !== true && --jQuery.readyWait > 0 ) {
			return;
		}

		// If there are functions bound, to execute
		readyList.resolveWith( document, [ jQuery ] );
	}
} );

jQuery.ready.then = readyList.then;

// The ready event handler and self cleanup method
function completed() {
	document.removeEventListener( "DOMContentLoaded", completed );
	window.removeEventListener( "load", completed );
	jQuery.ready();
}

// Catch cases where $(document).ready() is called
// after the browser event has already occurred.
// Support: IE <=9 - 10 only
// Older IE sometimes signals "interactive" too soon
if ( document.readyState === "complete" ||
	( document.readyState !== "loading" && !document.documentElement.doScroll ) ) {

	// Handle it asynchronously to allow scripts the opportunity to delay ready
	window.setTimeout( jQuery.ready );

} else {

	// Use the handy event callback
	document.addEventListener( "DOMContentLoaded", completed );

	// A fallback to window.onload, that will always work
	window.addEventListener( "load", completed );
}




// Multifunctional method to get and set values of a collection
// The value/s can optionally be executed if it's a function
var access = function( elems, fn, key, value, chainable, emptyGet, raw ) {
	var i = 0,
		len = elems.length,
		bulk = key == null;

	// Sets many values
	if ( jQuery.type( key ) === "object" ) {
		chainable = true;
		for ( i in key ) {
			access( elems, fn, i, key[ i ], true, emptyGet, raw );
		}

	// Sets one value
	} else if ( value !== undefined ) {
		chainable = true;

		if ( !jQuery.isFunction( value ) ) {
			raw = true;
		}

		if ( bulk ) {

			// Bulk operations run against the entire set
			if ( raw ) {
				fn.call( elems, value );
				fn = null;

			// ...except when executing function values
			} else {
				bulk = fn;
				fn = function( elem, key, value ) {
					return bulk.call( jQuery( elem ), value );
				};
			}
		}

		if ( fn ) {
			for ( ; i < len; i++ ) {
				fn(
					elems[ i ], key, raw ?
					value :
					value.call( elems[ i ], i, fn( elems[ i ], key ) )
				);
			}
		}
	}

	if ( chainable ) {
		return elems;
	}

	// Gets
	if ( bulk ) {
		return fn.call( elems );
	}

	return len ? fn( elems[ 0 ], key ) : emptyGet;
};
var acceptData = function( owner ) {

	// Accepts only:
	//  - Node
	//    - Node.ELEMENT_NODE
	//    - Node.DOCUMENT_NODE
	//  - Object
	//    - Any
	return owner.nodeType === 1 || owner.nodeType === 9 || !( +owner.nodeType );
};




function Data() {
	this.expando = jQuery.expando + Data.uid++;
}

Data.uid = 1;

Data.prototype = {

	cache: function( owner ) {

		// Check if the owner object already has a cache
		var value = owner[ this.expando ];

		// If not, create one
		if ( !value ) {
			value = {};

			// We can accept data for non-element nodes in modern browsers,
			// but we should not, see #8335.
			// Always return an empty object.
			if ( acceptData( owner ) ) {

				// If it is a node unlikely to be stringify-ed or looped over
				// use plain assignment
				if ( owner.nodeType ) {
					owner[ this.expando ] = value;

				// Otherwise secure it in a non-enumerable property
				// configurable must be true to allow the property to be
				// deleted when data is removed
				} else {
					Object.defineProperty( owner, this.expando, {
						value: value,
						configurable: true
					} );
				}
			}
		}

		return value;
	},
	set: function( owner, data, value ) {
		var prop,
			cache = this.cache( owner );

		// Handle: [ owner, key, value ] args
		// Always use camelCase key (gh-2257)
		if ( typeof data === "string" ) {
			cache[ jQuery.camelCase( data ) ] = value;

		// Handle: [ owner, { properties } ] args
		} else {

			// Copy the properties one-by-one to the cache object
			for ( prop in data ) {
				cache[ jQuery.camelCase( prop ) ] = data[ prop ];
			}
		}
		return cache;
	},
	get: function( owner, key ) {
		return key === undefined ?
			this.cache( owner ) :

			// Always use camelCase key (gh-2257)
			owner[ this.expando ] && owner[ this.expando ][ jQuery.camelCase( key ) ];
	},
	access: function( owner, key, value ) {

		// In cases where either:
		//
		//   1. No key was specified
		//   2. A string key was specified, but no value provided
		//
		// Take the "read" path and allow the get method to determine
		// which value to return, respectively either:
		//
		//   1. The entire cache object
		//   2. The data stored at the key
		//
		if ( key === undefined ||
				( ( key && typeof key === "string" ) && value === undefined ) ) {

			return this.get( owner, key );
		}

		// When the key is not a string, or both a key and value
		// are specified, set or extend (existing objects) with either:
		//
		//   1. An object of properties
		//   2. A key and value
		//
		this.set( owner, key, value );

		// Since the "set" path can have two possible entry points
		// return the expected data based on which path was taken[*]
		return value !== undefined ? value : key;
	},
	remove: function( owner, key ) {
		var i,
			cache = owner[ this.expando ];

		if ( cache === undefined ) {
			return;
		}

		if ( key !== undefined ) {

			// Support array or space separated string of keys
			if ( Array.isArray( key ) ) {

				// If key is an array of keys...
				// We always set camelCase keys, so remove that.
				key = key.map( jQuery.camelCase );
			} else {
				key = jQuery.camelCase( key );

				// If a key with the spaces exists, use it.
				// Otherwise, create an array by matching non-whitespace
				key = key in cache ?
					[ key ] :
					( key.match( rnothtmlwhite ) || [] );
			}

			i = key.length;

			while ( i-- ) {
				delete cache[ key[ i ] ];
			}
		}

		// Remove the expando if there's no more data
		if ( key === undefined || jQuery.isEmptyObject( cache ) ) {

			// Support: Chrome <=35 - 45
			// Webkit & Blink performance suffers when deleting properties
			// from DOM nodes, so set to undefined instead
			// https://bugs.chromium.org/p/chromium/issues/detail?id=378607 (bug restricted)
			if ( owner.nodeType ) {
				owner[ this.expando ] = undefined;
			} else {
				delete owner[ this.expando ];
			}
		}
	},
	hasData: function( owner ) {
		var cache = owner[ this.expando ];
		return cache !== undefined && !jQuery.isEmptyObject( cache );
	}
};
var dataPriv = new Data();

var dataUser = new Data();



//	Implementation Summary
//
//	1. Enforce API surface and semantic compatibility with 1.9.x branch
//	2. Improve the module's maintainability by reducing the storage
//		paths to a single mechanism.
//	3. Use the same single mechanism to support "private" and "user" data.
//	4. _Never_ expose "private" data to user code (TODO: Drop _data, _removeData)
//	5. Avoid exposing implementation details on user objects (eg. expando properties)
//	6. Provide a clear path for implementation upgrade to WeakMap in 2014

var rbrace = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
	rmultiDash = /[A-Z]/g;

function getData( data ) {
	if ( data === "true" ) {
		return true;
	}

	if ( data === "false" ) {
		return false;
	}

	if ( data === "null" ) {
		return null;
	}

	// Only convert to a number if it doesn't change the string
	if ( data === +data + "" ) {
		return +data;
	}

	if ( rbrace.test( data ) ) {
		return JSON.parse( data );
	}

	return data;
}

function dataAttr( elem, key, data ) {
	var name;

	// If nothing was found internally, try to fetch any
	// data from the HTML5 data-* attribute
	if ( data === undefined && elem.nodeType === 1 ) {
		name = "data-" + key.replace( rmultiDash, "-$&" ).toLowerCase();
		data = elem.getAttribute( name );

		if ( typeof data === "string" ) {
			try {
				data = getData( data );
			} catch ( e ) {}

			// Make sure we set the data so it isn't changed later
			dataUser.set( elem, key, data );
		} else {
			data = undefined;
		}
	}
	return data;
}

jQuery.extend( {
	hasData: function( elem ) {
		return dataUser.hasData( elem ) || dataPriv.hasData( elem );
	},

	data: function( elem, name, data ) {
		return dataUser.access( elem, name, data );
	},

	removeData: function( elem, name ) {
		dataUser.remove( elem, name );
	},

	// TODO: Now that all calls to _data and _removeData have been replaced
	// with direct calls to dataPriv methods, these can be deprecated.
	_data: function( elem, name, data ) {
		return dataPriv.access( elem, name, data );
	},

	_removeData: function( elem, name ) {
		dataPriv.remove( elem, name );
	}
} );

jQuery.fn.extend( {
	data: function( key, value ) {
		var i, name, data,
			elem = this[ 0 ],
			attrs = elem && elem.attributes;

		// Gets all values
		if ( key === undefined ) {
			if ( this.length ) {
				data = dataUser.get( elem );

				if ( elem.nodeType === 1 && !dataPriv.get( elem, "hasDataAttrs" ) ) {
					i = attrs.length;
					while ( i-- ) {

						// Support: IE 11 only
						// The attrs elements can be null (#14894)
						if ( attrs[ i ] ) {
							name = attrs[ i ].name;
							if ( name.indexOf( "data-" ) === 0 ) {
								name = jQuery.camelCase( name.slice( 5 ) );
								dataAttr( elem, name, data[ name ] );
							}
						}
					}
					dataPriv.set( elem, "hasDataAttrs", true );
				}
			}

			return data;
		}

		// Sets multiple values
		if ( typeof key === "object" ) {
			return this.each( function() {
				dataUser.set( this, key );
			} );
		}

		return access( this, function( value ) {
			var data;

			// The calling jQuery object (element matches) is not empty
			// (and therefore has an element appears at this[ 0 ]) and the
			// `value` parameter was not undefined. An empty jQuery object
			// will result in `undefined` for elem = this[ 0 ] which will
			// throw an exception if an attempt to read a data cache is made.
			if ( elem && value === undefined ) {

				// Attempt to get data from the cache
				// The key will always be camelCased in Data
				data = dataUser.get( elem, key );
				if ( data !== undefined ) {
					return data;
				}

				// Attempt to "discover" the data in
				// HTML5 custom data-* attrs
				data = dataAttr( elem, key );
				if ( data !== undefined ) {
					return data;
				}

				// We tried really hard, but the data doesn't exist.
				return;
			}

			// Set the data...
			this.each( function() {

				// We always store the camelCased key
				dataUser.set( this, key, value );
			} );
		}, null, value, arguments.length > 1, null, true );
	},

	removeData: function( key ) {
		return this.each( function() {
			dataUser.remove( this, key );
		} );
	}
} );


jQuery.extend( {
	queue: function( elem, type, data ) {
		var queue;

		if ( elem ) {
			type = ( type || "fx" ) + "queue";
			queue = dataPriv.get( elem, type );

			// Speed up dequeue by getting out quickly if this is just a lookup
			if ( data ) {
				if ( !queue || Array.isArray( data ) ) {
					queue = dataPriv.access( elem, type, jQuery.makeArray( data ) );
				} else {
					queue.push( data );
				}
			}
			return queue || [];
		}
	},

	dequeue: function( elem, type ) {
		type = type || "fx";

		var queue = jQuery.queue( elem, type ),
			startLength = queue.length,
			fn = queue.shift(),
			hooks = jQuery._queueHooks( elem, type ),
			next = function() {
				jQuery.dequeue( elem, type );
			};

		// If the fx queue is dequeued, always remove the progress sentinel
		if ( fn === "inprogress" ) {
			fn = queue.shift();
			startLength--;
		}

		if ( fn ) {

			// Add a progress sentinel to prevent the fx queue from being
			// automatically dequeued
			if ( type === "fx" ) {
				queue.unshift( "inprogress" );
			}

			// Clear up the last queue stop function
			delete hooks.stop;
			fn.call( elem, next, hooks );
		}

		if ( !startLength && hooks ) {
			hooks.empty.fire();
		}
	},

	// Not public - generate a queueHooks object, or return the current one
	_queueHooks: function( elem, type ) {
		var key = type + "queueHooks";
		return dataPriv.get( elem, key ) || dataPriv.access( elem, key, {
			empty: jQuery.Callbacks( "once memory" ).add( function() {
				dataPriv.remove( elem, [ type + "queue", key ] );
			} )
		} );
	}
} );

jQuery.fn.extend( {
	queue: function( type, data ) {
		var setter = 2;

		if ( typeof type !== "string" ) {
			data = type;
			type = "fx";
			setter--;
		}

		if ( arguments.length < setter ) {
			return jQuery.queue( this[ 0 ], type );
		}

		return data === undefined ?
			this :
			this.each( function() {
				var queue = jQuery.queue( this, type, data );

				// Ensure a hooks for this queue
				jQuery._queueHooks( this, type );

				if ( type === "fx" && queue[ 0 ] !== "inprogress" ) {
					jQuery.dequeue( this, type );
				}
			} );
	},
	dequeue: function( type ) {
		return this.each( function() {
			jQuery.dequeue( this, type );
		} );
	},
	clearQueue: function( type ) {
		return this.queue( type || "fx", [] );
	},

	// Get a promise resolved when queues of a certain type
	// are emptied (fx is the type by default)
	promise: function( type, obj ) {
		var tmp,
			count = 1,
			defer = jQuery.Deferred(),
			elements = this,
			i = this.length,
			resolve = function() {
				if ( !( --count ) ) {
					defer.resolveWith( elements, [ elements ] );
				}
			};

		if ( typeof type !== "string" ) {
			obj = type;
			type = undefined;
		}
		type = type || "fx";

		while ( i-- ) {
			tmp = dataPriv.get( elements[ i ], type + "queueHooks" );
			if ( tmp && tmp.empty ) {
				count++;
				tmp.empty.add( resolve );
			}
		}
		resolve();
		return defer.promise( obj );
	}
} );
var pnum = ( /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/ ).source;

var rcssNum = new RegExp( "^(?:([+-])=|)(" + pnum + ")([a-z%]*)$", "i" );


var cssExpand = [ "Top", "Right", "Bottom", "Left" ];

var isHiddenWithinTree = function( elem, el ) {

		// isHiddenWithinTree might be called from jQuery#filter function;
		// in that case, element will be second argument
		elem = el || elem;

		// Inline style trumps all
		return elem.style.display === "none" ||
			elem.style.display === "" &&

			// Otherwise, check computed style
			// Support: Firefox <=43 - 45
			// Disconnected elements can have computed display: none, so first confirm that elem is
			// in the document.
			jQuery.contains( elem.ownerDocument, elem ) &&

			jQuery.css( elem, "display" ) === "none";
	};

var swap = function( elem, options, callback, args ) {
	var ret, name,
		old = {};

	// Remember the old values, and insert the new ones
	for ( name in options ) {
		old[ name ] = elem.style[ name ];
		elem.style[ name ] = options[ name ];
	}

	ret = callback.apply( elem, args || [] );

	// Revert the old values
	for ( name in options ) {
		elem.style[ name ] = old[ name ];
	}

	return ret;
};




function adjustCSS( elem, prop, valueParts, tween ) {
	var adjusted,
		scale = 1,
		maxIterations = 20,
		currentValue = tween ?
			function() {
				return tween.cur();
			} :
			function() {
				return jQuery.css( elem, prop, "" );
			},
		initial = currentValue(),
		unit = valueParts && valueParts[ 3 ] || ( jQuery.cssNumber[ prop ] ? "" : "px" ),

		// Starting value computation is required for potential unit mismatches
		initialInUnit = ( jQuery.cssNumber[ prop ] || unit !== "px" && +initial ) &&
			rcssNum.exec( jQuery.css( elem, prop ) );

	if ( initialInUnit && initialInUnit[ 3 ] !== unit ) {

		// Trust units reported by jQuery.css
		unit = unit || initialInUnit[ 3 ];

		// Make sure we update the tween properties later on
		valueParts = valueParts || [];

		// Iteratively approximate from a nonzero starting point
		initialInUnit = +initial || 1;

		do {

			// If previous iteration zeroed out, double until we get *something*.
			// Use string for doubling so we don't accidentally see scale as unchanged below
			scale = scale || ".5";

			// Adjust and apply
			initialInUnit = initialInUnit / scale;
			jQuery.style( elem, prop, initialInUnit + unit );

		// Update scale, tolerating zero or NaN from tween.cur()
		// Break the loop if scale is unchanged or perfect, or if we've just had enough.
		} while (
			scale !== ( scale = currentValue() / initial ) && scale !== 1 && --maxIterations
		);
	}

	if ( valueParts ) {
		initialInUnit = +initialInUnit || +initial || 0;

		// Apply relative offset (+=/-=) if specified
		adjusted = valueParts[ 1 ] ?
			initialInUnit + ( valueParts[ 1 ] + 1 ) * valueParts[ 2 ] :
			+valueParts[ 2 ];
		if ( tween ) {
			tween.unit = unit;
			tween.start = initialInUnit;
			tween.end = adjusted;
		}
	}
	return adjusted;
}


var defaultDisplayMap = {};

function getDefaultDisplay( elem ) {
	var temp,
		doc = elem.ownerDocument,
		nodeName = elem.nodeName,
		display = defaultDisplayMap[ nodeName ];

	if ( display ) {
		return display;
	}

	temp = doc.body.appendChild( doc.createElement( nodeName ) );
	display = jQuery.css( temp, "display" );

	temp.parentNode.removeChild( temp );

	if ( display === "none" ) {
		display = "block";
	}
	defaultDisplayMap[ nodeName ] = display;

	return display;
}

function showHide( elements, show ) {
	var display, elem,
		values = [],
		index = 0,
		length = elements.length;

	// Determine new display value for elements that need to change
	for ( ; index < length; index++ ) {
		elem = elements[ index ];
		if ( !elem.style ) {
			continue;
		}

		display = elem.style.display;
		if ( show ) {

			// Since we force visibility upon cascade-hidden elements, an immediate (and slow)
			// check is required in this first loop unless we have a nonempty display value (either
			// inline or about-to-be-restored)
			if ( display === "none" ) {
				values[ index ] = dataPriv.get( elem, "display" ) || null;
				if ( !values[ index ] ) {
					elem.style.display = "";
				}
			}
			if ( elem.style.display === "" && isHiddenWithinTree( elem ) ) {
				values[ index ] = getDefaultDisplay( elem );
			}
		} else {
			if ( display !== "none" ) {
				values[ index ] = "none";

				// Remember what we're overwriting
				dataPriv.set( elem, "display", display );
			}
		}
	}

	// Set the display of the elements in a second loop to avoid constant reflow
	for ( index = 0; index < length; index++ ) {
		if ( values[ index ] != null ) {
			elements[ index ].style.display = values[ index ];
		}
	}

	return elements;
}

jQuery.fn.extend( {
	show: function() {
		return showHide( this, true );
	},
	hide: function() {
		return showHide( this );
	},
	toggle: function( state ) {
		if ( typeof state === "boolean" ) {
			return state ? this.show() : this.hide();
		}

		return this.each( function() {
			if ( isHiddenWithinTree( this ) ) {
				jQuery( this ).show();
			} else {
				jQuery( this ).hide();
			}
		} );
	}
} );
var rcheckableType = ( /^(?:checkbox|radio)$/i );

var rtagName = ( /<([a-z][^\/\0>\x20\t\r\n\f]+)/i );

var rscriptType = ( /^$|\/(?:java|ecma)script/i );



// We have to close these tags to support XHTML (#13200)
var wrapMap = {

	// Support: IE <=9 only
	option: [ 1, "<select multiple='multiple'>", "</select>" ],

	// XHTML parsers do not magically insert elements in the
	// same way that tag soup parsers do. So we cannot shorten
	// this by omitting <tbody> or other required elements.
	thead: [ 1, "<table>", "</table>" ],
	col: [ 2, "<table><colgroup>", "</colgroup></table>" ],
	tr: [ 2, "<table><tbody>", "</tbody></table>" ],
	td: [ 3, "<table><tbody><tr>", "</tr></tbody></table>" ],

	_default: [ 0, "", "" ]
};

// Support: IE <=9 only
wrapMap.optgroup = wrapMap.option;

wrapMap.tbody = wrapMap.tfoot = wrapMap.colgroup = wrapMap.caption = wrapMap.thead;
wrapMap.th = wrapMap.td;


function getAll( context, tag ) {

	// Support: IE <=9 - 11 only
	// Use typeof to avoid zero-argument method invocation on host objects (#15151)
	var ret;

	if ( typeof context.getElementsByTagName !== "undefined" ) {
		ret = context.getElementsByTagName( tag || "*" );

	} else if ( typeof context.querySelectorAll !== "undefined" ) {
		ret = context.querySelectorAll( tag || "*" );

	} else {
		ret = [];
	}

	if ( tag === undefined || tag && nodeName( context, tag ) ) {
		return jQuery.merge( [ context ], ret );
	}

	return ret;
}


// Mark scripts as having already been evaluated
function setGlobalEval( elems, refElements ) {
	var i = 0,
		l = elems.length;

	for ( ; i < l; i++ ) {
		dataPriv.set(
			elems[ i ],
			"globalEval",
			!refElements || dataPriv.get( refElements[ i ], "globalEval" )
		);
	}
}


var rhtml = /<|&#?\w+;/;

function buildFragment( elems, context, scripts, selection, ignored ) {
	var elem, tmp, tag, wrap, contains, j,
		fragment = context.createDocumentFragment(),
		nodes = [],
		i = 0,
		l = elems.length;

	for ( ; i < l; i++ ) {
		elem = elems[ i ];

		if ( elem || elem === 0 ) {

			// Add nodes directly
			if ( jQuery.type( elem ) === "object" ) {

				// Support: Android <=4.0 only, PhantomJS 1 only
				// push.apply(_, arraylike) throws on ancient WebKit
				jQuery.merge( nodes, elem.nodeType ? [ elem ] : elem );

			// Convert non-html into a text node
			} else if ( !rhtml.test( elem ) ) {
				nodes.push( context.createTextNode( elem ) );

			// Convert html into DOM nodes
			} else {
				tmp = tmp || fragment.appendChild( context.createElement( "div" ) );

				// Deserialize a standard representation
				tag = ( rtagName.exec( elem ) || [ "", "" ] )[ 1 ].toLowerCase();
				wrap = wrapMap[ tag ] || wrapMap._default;
				tmp.innerHTML = wrap[ 1 ] + jQuery.htmlPrefilter( elem ) + wrap[ 2 ];

				// Descend through wrappers to the right content
				j = wrap[ 0 ];
				while ( j-- ) {
					tmp = tmp.lastChild;
				}

				// Support: Android <=4.0 only, PhantomJS 1 only
				// push.apply(_, arraylike) throws on ancient WebKit
				jQuery.merge( nodes, tmp.childNodes );

				// Remember the top-level container
				tmp = fragment.firstChild;

				// Ensure the created nodes are orphaned (#12392)
				tmp.textContent = "";
			}
		}
	}

	// Remove wrapper from fragment
	fragment.textContent = "";

	i = 0;
	while ( ( elem = nodes[ i++ ] ) ) {

		// Skip elements already in the context collection (trac-4087)
		if ( selection && jQuery.inArray( elem, selection ) > -1 ) {
			if ( ignored ) {
				ignored.push( elem );
			}
			continue;
		}

		contains = jQuery.contains( elem.ownerDocument, elem );

		// Append to fragment
		tmp = getAll( fragment.appendChild( elem ), "script" );

		// Preserve script evaluation history
		if ( contains ) {
			setGlobalEval( tmp );
		}

		// Capture executables
		if ( scripts ) {
			j = 0;
			while ( ( elem = tmp[ j++ ] ) ) {
				if ( rscriptType.test( elem.type || "" ) ) {
					scripts.push( elem );
				}
			}
		}
	}

	return fragment;
}


( function() {
	var fragment = document.createDocumentFragment(),
		div = fragment.appendChild( document.createElement( "div" ) ),
		input = document.createElement( "input" );

	// Support: Android 4.0 - 4.3 only
	// Check state lost if the name is set (#11217)
	// Support: Windows Web Apps (WWA)
	// `name` and `type` must use .setAttribute for WWA (#14901)
	input.setAttribute( "type", "radio" );
	input.setAttribute( "checked", "checked" );
	input.setAttribute( "name", "t" );

	div.appendChild( input );

	// Support: Android <=4.1 only
	// Older WebKit doesn't clone checked state correctly in fragments
	support.checkClone = div.cloneNode( true ).cloneNode( true ).lastChild.checked;

	// Support: IE <=11 only
	// Make sure textarea (and checkbox) defaultValue is properly cloned
	div.innerHTML = "<textarea>x</textarea>";
	support.noCloneChecked = !!div.cloneNode( true ).lastChild.defaultValue;
} )();
var documentElement = document.documentElement;



var
	rkeyEvent = /^key/,
	rmouseEvent = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
	rtypenamespace = /^([^.]*)(?:\.(.+)|)/;

function returnTrue() {
	return true;
}

function returnFalse() {
	return false;
}

// Support: IE <=9 only
// See #13393 for more info
function safeActiveElement() {
	try {
		return document.activeElement;
	} catch ( err ) { }
}

function on( elem, types, selector, data, fn, one ) {
	var origFn, type;

	// Types can be a map of types/handlers
	if ( typeof types === "object" ) {

		// ( types-Object, selector, data )
		if ( typeof selector !== "string" ) {

			// ( types-Object, data )
			data = data || selector;
			selector = undefined;
		}
		for ( type in types ) {
			on( elem, type, selector, data, types[ type ], one );
		}
		return elem;
	}

	if ( data == null && fn == null ) {

		// ( types, fn )
		fn = selector;
		data = selector = undefined;
	} else if ( fn == null ) {
		if ( typeof selector === "string" ) {

			// ( types, selector, fn )
			fn = data;
			data = undefined;
		} else {

			// ( types, data, fn )
			fn = data;
			data = selector;
			selector = undefined;
		}
	}
	if ( fn === false ) {
		fn = returnFalse;
	} else if ( !fn ) {
		return elem;
	}

	if ( one === 1 ) {
		origFn = fn;
		fn = function( event ) {

			// Can use an empty set, since event contains the info
			jQuery().off( event );
			return origFn.apply( this, arguments );
		};

		// Use same guid so caller can remove using origFn
		fn.guid = origFn.guid || ( origFn.guid = jQuery.guid++ );
	}
	return elem.each( function() {
		jQuery.event.add( this, types, fn, data, selector );
	} );
}

/*
 * Helper functions for managing events -- not part of the public interface.
 * Props to Dean Edwards' addEvent library for many of the ideas.
 */
jQuery.event = {

	global: {},

	add: function( elem, types, handler, data, selector ) {

		var handleObjIn, eventHandle, tmp,
			events, t, handleObj,
			special, handlers, type, namespaces, origType,
			elemData = dataPriv.get( elem );

		// Don't attach events to noData or text/comment nodes (but allow plain objects)
		if ( !elemData ) {
			return;
		}

		// Caller can pass in an object of custom data in lieu of the handler
		if ( handler.handler ) {
			handleObjIn = handler;
			handler = handleObjIn.handler;
			selector = handleObjIn.selector;
		}

		// Ensure that invalid selectors throw exceptions at attach time
		// Evaluate against documentElement in case elem is a non-element node (e.g., document)
		if ( selector ) {
			jQuery.find.matchesSelector( documentElement, selector );
		}

		// Make sure that the handler has a unique ID, used to find/remove it later
		if ( !handler.guid ) {
			handler.guid = jQuery.guid++;
		}

		// Init the element's event structure and main handler, if this is the first
		if ( !( events = elemData.events ) ) {
			events = elemData.events = {};
		}
		if ( !( eventHandle = elemData.handle ) ) {
			eventHandle = elemData.handle = function( e ) {

				// Discard the second event of a jQuery.event.trigger() and
				// when an event is called after a page has unloaded
				return typeof jQuery !== "undefined" && jQuery.event.triggered !== e.type ?
					jQuery.event.dispatch.apply( elem, arguments ) : undefined;
			};
		}

		// Handle multiple events separated by a space
		types = ( types || "" ).match( rnothtmlwhite ) || [ "" ];
		t = types.length;
		while ( t-- ) {
			tmp = rtypenamespace.exec( types[ t ] ) || [];
			type = origType = tmp[ 1 ];
			namespaces = ( tmp[ 2 ] || "" ).split( "." ).sort();

			// There *must* be a type, no attaching namespace-only handlers
			if ( !type ) {
				continue;
			}

			// If event changes its type, use the special event handlers for the changed type
			special = jQuery.event.special[ type ] || {};

			// If selector defined, determine special event api type, otherwise given type
			type = ( selector ? special.delegateType : special.bindType ) || type;

			// Update special based on newly reset type
			special = jQuery.event.special[ type ] || {};

			// handleObj is passed to all event handlers
			handleObj = jQuery.extend( {
				type: type,
				origType: origType,
				data: data,
				handler: handler,
				guid: handler.guid,
				selector: selector,
				needsContext: selector && jQuery.expr.match.needsContext.test( selector ),
				namespace: namespaces.join( "." )
			}, handleObjIn );

			// Init the event handler queue if we're the first
			if ( !( handlers = events[ type ] ) ) {
				handlers = events[ type ] = [];
				handlers.delegateCount = 0;

				// Only use addEventListener if the special events handler returns false
				if ( !special.setup ||
					special.setup.call( elem, data, namespaces, eventHandle ) === false ) {

					if ( elem.addEventListener ) {
						elem.addEventListener( type, eventHandle );
					}
				}
			}

			if ( special.add ) {
				special.add.call( elem, handleObj );

				if ( !handleObj.handler.guid ) {
					handleObj.handler.guid = handler.guid;
				}
			}

			// Add to the element's handler list, delegates in front
			if ( selector ) {
				handlers.splice( handlers.delegateCount++, 0, handleObj );
			} else {
				handlers.push( handleObj );
			}

			// Keep track of which events have ever been used, for event optimization
			jQuery.event.global[ type ] = true;
		}

	},

	// Detach an event or set of events from an element
	remove: function( elem, types, handler, selector, mappedTypes ) {

		var j, origCount, tmp,
			events, t, handleObj,
			special, handlers, type, namespaces, origType,
			elemData = dataPriv.hasData( elem ) && dataPriv.get( elem );

		if ( !elemData || !( events = elemData.events ) ) {
			return;
		}

		// Once for each type.namespace in types; type may be omitted
		types = ( types || "" ).match( rnothtmlwhite ) || [ "" ];
		t = types.length;
		while ( t-- ) {
			tmp = rtypenamespace.exec( types[ t ] ) || [];
			type = origType = tmp[ 1 ];
			namespaces = ( tmp[ 2 ] || "" ).split( "." ).sort();

			// Unbind all events (on this namespace, if provided) for the element
			if ( !type ) {
				for ( type in events ) {
					jQuery.event.remove( elem, type + types[ t ], handler, selector, true );
				}
				continue;
			}

			special = jQuery.event.special[ type ] || {};
			type = ( selector ? special.delegateType : special.bindType ) || type;
			handlers = events[ type ] || [];
			tmp = tmp[ 2 ] &&
				new RegExp( "(^|\\.)" + namespaces.join( "\\.(?:.*\\.|)" ) + "(\\.|$)" );

			// Remove matching events
			origCount = j = handlers.length;
			while ( j-- ) {
				handleObj = handlers[ j ];

				if ( ( mappedTypes || origType === handleObj.origType ) &&
					( !handler || handler.guid === handleObj.guid ) &&
					( !tmp || tmp.test( handleObj.namespace ) ) &&
					( !selector || selector === handleObj.selector ||
						selector === "**" && handleObj.selector ) ) {
					handlers.splice( j, 1 );

					if ( handleObj.selector ) {
						handlers.delegateCount--;
					}
					if ( special.remove ) {
						special.remove.call( elem, handleObj );
					}
				}
			}

			// Remove generic event handler if we removed something and no more handlers exist
			// (avoids potential for endless recursion during removal of special event handlers)
			if ( origCount && !handlers.length ) {
				if ( !special.teardown ||
					special.teardown.call( elem, namespaces, elemData.handle ) === false ) {

					jQuery.removeEvent( elem, type, elemData.handle );
				}

				delete events[ type ];
			}
		}

		// Remove data and the expando if it's no longer used
		if ( jQuery.isEmptyObject( events ) ) {
			dataPriv.remove( elem, "handle events" );
		}
	},

	dispatch: function( nativeEvent ) {

		// Make a writable jQuery.Event from the native event object
		var event = jQuery.event.fix( nativeEvent );

		var i, j, ret, matched, handleObj, handlerQueue,
			args = new Array( arguments.length ),
			handlers = ( dataPriv.get( this, "events" ) || {} )[ event.type ] || [],
			special = jQuery.event.special[ event.type ] || {};

		// Use the fix-ed jQuery.Event rather than the (read-only) native event
		args[ 0 ] = event;

		for ( i = 1; i < arguments.length; i++ ) {
			args[ i ] = arguments[ i ];
		}

		event.delegateTarget = this;

		// Call the preDispatch hook for the mapped type, and let it bail if desired
		if ( special.preDispatch && special.preDispatch.call( this, event ) === false ) {
			return;
		}

		// Determine handlers
		handlerQueue = jQuery.event.handlers.call( this, event, handlers );

		// Run delegates first; they may want to stop propagation beneath us
		i = 0;
		while ( ( matched = handlerQueue[ i++ ] ) && !event.isPropagationStopped() ) {
			event.currentTarget = matched.elem;

			j = 0;
			while ( ( handleObj = matched.handlers[ j++ ] ) &&
				!event.isImmediatePropagationStopped() ) {

				// Triggered event must either 1) have no namespace, or 2) have namespace(s)
				// a subset or equal to those in the bound event (both can have no namespace).
				if ( !event.rnamespace || event.rnamespace.test( handleObj.namespace ) ) {

					event.handleObj = handleObj;
					event.data = handleObj.data;

					ret = ( ( jQuery.event.special[ handleObj.origType ] || {} ).handle ||
						handleObj.handler ).apply( matched.elem, args );

					if ( ret !== undefined ) {
						if ( ( event.result = ret ) === false ) {
							event.preventDefault();
							event.stopPropagation();
						}
					}
				}
			}
		}

		// Call the postDispatch hook for the mapped type
		if ( special.postDispatch ) {
			special.postDispatch.call( this, event );
		}

		return event.result;
	},

	handlers: function( event, handlers ) {
		var i, handleObj, sel, matchedHandlers, matchedSelectors,
			handlerQueue = [],
			delegateCount = handlers.delegateCount,
			cur = event.target;

		// Find delegate handlers
		if ( delegateCount &&

			// Support: IE <=9
			// Black-hole SVG <use> instance trees (trac-13180)
			cur.nodeType &&

			// Support: Firefox <=42
			// Suppress spec-violating clicks indicating a non-primary pointer button (trac-3861)
			// https://www.w3.org/TR/DOM-Level-3-Events/#event-type-click
			// Support: IE 11 only
			// ...but not arrow key "clicks" of radio inputs, which can have `button` -1 (gh-2343)
			!( event.type === "click" && event.button >= 1 ) ) {

			for ( ; cur !== this; cur = cur.parentNode || this ) {

				// Don't check non-elements (#13208)
				// Don't process clicks on disabled elements (#6911, #8165, #11382, #11764)
				if ( cur.nodeType === 1 && !( event.type === "click" && cur.disabled === true ) ) {
					matchedHandlers = [];
					matchedSelectors = {};
					for ( i = 0; i < delegateCount; i++ ) {
						handleObj = handlers[ i ];

						// Don't conflict with Object.prototype properties (#13203)
						sel = handleObj.selector + " ";

						if ( matchedSelectors[ sel ] === undefined ) {
							matchedSelectors[ sel ] = handleObj.needsContext ?
								jQuery( sel, this ).index( cur ) > -1 :
								jQuery.find( sel, this, null, [ cur ] ).length;
						}
						if ( matchedSelectors[ sel ] ) {
							matchedHandlers.push( handleObj );
						}
					}
					if ( matchedHandlers.length ) {
						handlerQueue.push( { elem: cur, handlers: matchedHandlers } );
					}
				}
			}
		}

		// Add the remaining (directly-bound) handlers
		cur = this;
		if ( delegateCount < handlers.length ) {
			handlerQueue.push( { elem: cur, handlers: handlers.slice( delegateCount ) } );
		}

		return handlerQueue;
	},

	addProp: function( name, hook ) {
		Object.defineProperty( jQuery.Event.prototype, name, {
			enumerable: true,
			configurable: true,

			get: jQuery.isFunction( hook ) ?
				function() {
					if ( this.originalEvent ) {
							return hook( this.originalEvent );
					}
				} :
				function() {
					if ( this.originalEvent ) {
							return this.originalEvent[ name ];
					}
				},

			set: function( value ) {
				Object.defineProperty( this, name, {
					enumerable: true,
					configurable: true,
					writable: true,
					value: value
				} );
			}
		} );
	},

	fix: function( originalEvent ) {
		return originalEvent[ jQuery.expando ] ?
			originalEvent :
			new jQuery.Event( originalEvent );
	},

	special: {
		load: {

			// Prevent triggered image.load events from bubbling to window.load
			noBubble: true
		},
		focus: {

			// Fire native event if possible so blur/focus sequence is correct
			trigger: function() {
				if ( this !== safeActiveElement() && this.focus ) {
					this.focus();
					return false;
				}
			},
			delegateType: "focusin"
		},
		blur: {
			trigger: function() {
				if ( this === safeActiveElement() && this.blur ) {
					this.blur();
					return false;
				}
			},
			delegateType: "focusout"
		},
		click: {

			// For checkbox, fire native event so checked state will be right
			trigger: function() {
				if ( this.type === "checkbox" && this.click && nodeName( this, "input" ) ) {
					this.click();
					return false;
				}
			},

			// For cross-browser consistency, don't fire native .click() on links
			_default: function( event ) {
				return nodeName( event.target, "a" );
			}
		},

		beforeunload: {
			postDispatch: function( event ) {

				// Support: Firefox 20+
				// Firefox doesn't alert if the returnValue field is not set.
				if ( event.result !== undefined && event.originalEvent ) {
					event.originalEvent.returnValue = event.result;
				}
			}
		}
	}
};

jQuery.removeEvent = function( elem, type, handle ) {

	// This "if" is needed for plain objects
	if ( elem.removeEventListener ) {
		elem.removeEventListener( type, handle );
	}
};

jQuery.Event = function( src, props ) {

	// Allow instantiation without the 'new' keyword
	if ( !( this instanceof jQuery.Event ) ) {
		return new jQuery.Event( src, props );
	}

	// Event object
	if ( src && src.type ) {
		this.originalEvent = src;
		this.type = src.type;

		// Events bubbling up the document may have been marked as prevented
		// by a handler lower down the tree; reflect the correct value.
		this.isDefaultPrevented = src.defaultPrevented ||
				src.defaultPrevented === undefined &&

				// Support: Android <=2.3 only
				src.returnValue === false ?
			returnTrue :
			returnFalse;

		// Create target properties
		// Support: Safari <=6 - 7 only
		// Target should not be a text node (#504, #13143)
		this.target = ( src.target && src.target.nodeType === 3 ) ?
			src.target.parentNode :
			src.target;

		this.currentTarget = src.currentTarget;
		this.relatedTarget = src.relatedTarget;

	// Event type
	} else {
		this.type = src;
	}

	// Put explicitly provided properties onto the event object
	if ( props ) {
		jQuery.extend( this, props );
	}

	// Create a timestamp if incoming event doesn't have one
	this.timeStamp = src && src.timeStamp || jQuery.now();

	// Mark it as fixed
	this[ jQuery.expando ] = true;
};

// jQuery.Event is based on DOM3 Events as specified by the ECMAScript Language Binding
// https://www.w3.org/TR/2003/WD-DOM-Level-3-Events-20030331/ecma-script-binding.html
jQuery.Event.prototype = {
	constructor: jQuery.Event,
	isDefaultPrevented: returnFalse,
	isPropagationStopped: returnFalse,
	isImmediatePropagationStopped: returnFalse,
	isSimulated: false,

	preventDefault: function() {
		var e = this.originalEvent;

		this.isDefaultPrevented = returnTrue;

		if ( e && !this.isSimulated ) {
			e.preventDefault();
		}
	},
	stopPropagation: function() {
		var e = this.originalEvent;

		this.isPropagationStopped = returnTrue;

		if ( e && !this.isSimulated ) {
			e.stopPropagation();
		}
	},
	stopImmediatePropagation: function() {
		var e = this.originalEvent;

		this.isImmediatePropagationStopped = returnTrue;

		if ( e && !this.isSimulated ) {
			e.stopImmediatePropagation();
		}

		this.stopPropagation();
	}
};

// Includes all common event props including KeyEvent and MouseEvent specific props
jQuery.each( {
	altKey: true,
	bubbles: true,
	cancelable: true,
	changedTouches: true,
	ctrlKey: true,
	detail: true,
	eventPhase: true,
	metaKey: true,
	pageX: true,
	pageY: true,
	shiftKey: true,
	view: true,
	"char": true,
	charCode: true,
	key: true,
	keyCode: true,
	button: true,
	buttons: true,
	clientX: true,
	clientY: true,
	offsetX: true,
	offsetY: true,
	pointerId: true,
	pointerType: true,
	screenX: true,
	screenY: true,
	targetTouches: true,
	toElement: true,
	touches: true,

	which: function( event ) {
		var button = event.button;

		// Add which for key events
		if ( event.which == null && rkeyEvent.test( event.type ) ) {
			return event.charCode != null ? event.charCode : event.keyCode;
		}

		// Add which for click: 1 === left; 2 === middle; 3 === right
		if ( !event.which && button !== undefined && rmouseEvent.test( event.type ) ) {
			if ( button & 1 ) {
				return 1;
			}

			if ( button & 2 ) {
				return 3;
			}

			if ( button & 4 ) {
				return 2;
			}

			return 0;
		}

		return event.which;
	}
}, jQuery.event.addProp );

// Create mouseenter/leave events using mouseover/out and event-time checks
// so that event delegation works in jQuery.
// Do the same for pointerenter/pointerleave and pointerover/pointerout
//
// Support: Safari 7 only
// Safari sends mouseenter too often; see:
// https://bugs.chromium.org/p/chromium/issues/detail?id=470258
// for the description of the bug (it existed in older Chrome versions as well).
jQuery.each( {
	mouseenter: "mouseover",
	mouseleave: "mouseout",
	pointerenter: "pointerover",
	pointerleave: "pointerout"
}, function( orig, fix ) {
	jQuery.event.special[ orig ] = {
		delegateType: fix,
		bindType: fix,

		handle: function( event ) {
			var ret,
				target = this,
				related = event.relatedTarget,
				handleObj = event.handleObj;

			// For mouseenter/leave call the handler if related is outside the target.
			// NB: No relatedTarget if the mouse left/entered the browser window
			if ( !related || ( related !== target && !jQuery.contains( target, related ) ) ) {
				event.type = handleObj.origType;
				ret = handleObj.handler.apply( this, arguments );
				event.type = fix;
			}
			return ret;
		}
	};
} );

jQuery.fn.extend( {

	on: function( types, selector, data, fn ) {
		return on( this, types, selector, data, fn );
	},
	one: function( types, selector, data, fn ) {
		return on( this, types, selector, data, fn, 1 );
	},
	off: function( types, selector, fn ) {
		var handleObj, type;
		if ( types && types.preventDefault && types.handleObj ) {

			// ( event )  dispatched jQuery.Event
			handleObj = types.handleObj;
			jQuery( types.delegateTarget ).off(
				handleObj.namespace ?
					handleObj.origType + "." + handleObj.namespace :
					handleObj.origType,
				handleObj.selector,
				handleObj.handler
			);
			return this;
		}
		if ( typeof types === "object" ) {

			// ( types-object [, selector] )
			for ( type in types ) {
				this.off( type, selector, types[ type ] );
			}
			return this;
		}
		if ( selector === false || typeof selector === "function" ) {

			// ( types [, fn] )
			fn = selector;
			selector = undefined;
		}
		if ( fn === false ) {
			fn = returnFalse;
		}
		return this.each( function() {
			jQuery.event.remove( this, types, fn, selector );
		} );
	}
} );


var

	/* eslint-disable max-len */

	// See https://github.com/eslint/eslint/issues/3229
	rxhtmlTag = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,

	/* eslint-enable */

	// Support: IE <=10 - 11, Edge 12 - 13
	// In IE/Edge using regex groups here causes severe slowdowns.
	// See https://connect.microsoft.com/IE/feedback/details/1736512/
	rnoInnerhtml = /<script|<style|<link/i,

	// checked="checked" or checked
	rchecked = /checked\s*(?:[^=]|=\s*.checked.)/i,
	rscriptTypeMasked = /^true\/(.*)/,
	rcleanScript = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

// Prefer a tbody over its parent table for containing new rows
function manipulationTarget( elem, content ) {
	if ( nodeName( elem, "table" ) &&
		nodeName( content.nodeType !== 11 ? content : content.firstChild, "tr" ) ) {

		return jQuery( ">tbody", elem )[ 0 ] || elem;
	}

	return elem;
}

// Replace/restore the type attribute of script elements for safe DOM manipulation
function disableScript( elem ) {
	elem.type = ( elem.getAttribute( "type" ) !== null ) + "/" + elem.type;
	return elem;
}
function restoreScript( elem ) {
	var match = rscriptTypeMasked.exec( elem.type );

	if ( match ) {
		elem.type = match[ 1 ];
	} else {
		elem.removeAttribute( "type" );
	}

	return elem;
}

function cloneCopyEvent( src, dest ) {
	var i, l, type, pdataOld, pdataCur, udataOld, udataCur, events;

	if ( dest.nodeType !== 1 ) {
		return;
	}

	// 1. Copy private data: events, handlers, etc.
	if ( dataPriv.hasData( src ) ) {
		pdataOld = dataPriv.access( src );
		pdataCur = dataPriv.set( dest, pdataOld );
		events = pdataOld.events;

		if ( events ) {
			delete pdataCur.handle;
			pdataCur.events = {};

			for ( type in events ) {
				for ( i = 0, l = events[ type ].length; i < l; i++ ) {
					jQuery.event.add( dest, type, events[ type ][ i ] );
				}
			}
		}
	}

	// 2. Copy user data
	if ( dataUser.hasData( src ) ) {
		udataOld = dataUser.access( src );
		udataCur = jQuery.extend( {}, udataOld );

		dataUser.set( dest, udataCur );
	}
}

// Fix IE bugs, see support tests
function fixInput( src, dest ) {
	var nodeName = dest.nodeName.toLowerCase();

	// Fails to persist the checked state of a cloned checkbox or radio button.
	if ( nodeName === "input" && rcheckableType.test( src.type ) ) {
		dest.checked = src.checked;

	// Fails to return the selected option to the default selected state when cloning options
	} else if ( nodeName === "input" || nodeName === "textarea" ) {
		dest.defaultValue = src.defaultValue;
	}
}

function domManip( collection, args, callback, ignored ) {

	// Flatten any nested arrays
	args = concat.apply( [], args );

	var fragment, first, scripts, hasScripts, node, doc,
		i = 0,
		l = collection.length,
		iNoClone = l - 1,
		value = args[ 0 ],
		isFunction = jQuery.isFunction( value );

	// We can't cloneNode fragments that contain checked, in WebKit
	if ( isFunction ||
			( l > 1 && typeof value === "string" &&
				!support.checkClone && rchecked.test( value ) ) ) {
		return collection.each( function( index ) {
			var self = collection.eq( index );
			if ( isFunction ) {
				args[ 0 ] = value.call( this, index, self.html() );
			}
			domManip( self, args, callback, ignored );
		} );
	}

	if ( l ) {
		fragment = buildFragment( args, collection[ 0 ].ownerDocument, false, collection, ignored );
		first = fragment.firstChild;

		if ( fragment.childNodes.length === 1 ) {
			fragment = first;
		}

		// Require either new content or an interest in ignored elements to invoke the callback
		if ( first || ignored ) {
			scripts = jQuery.map( getAll( fragment, "script" ), disableScript );
			hasScripts = scripts.length;

			// Use the original fragment for the last item
			// instead of the first because it can end up
			// being emptied incorrectly in certain situations (#8070).
			for ( ; i < l; i++ ) {
				node = fragment;

				if ( i !== iNoClone ) {
					node = jQuery.clone( node, true, true );

					// Keep references to cloned scripts for later restoration
					if ( hasScripts ) {

						// Support: Android <=4.0 only, PhantomJS 1 only
						// push.apply(_, arraylike) throws on ancient WebKit
						jQuery.merge( scripts, getAll( node, "script" ) );
					}
				}

				callback.call( collection[ i ], node, i );
			}

			if ( hasScripts ) {
				doc = scripts[ scripts.length - 1 ].ownerDocument;

				// Reenable scripts
				jQuery.map( scripts, restoreScript );

				// Evaluate executable scripts on first document insertion
				for ( i = 0; i < hasScripts; i++ ) {
					node = scripts[ i ];
					if ( rscriptType.test( node.type || "" ) &&
						!dataPriv.access( node, "globalEval" ) &&
						jQuery.contains( doc, node ) ) {

						if ( node.src ) {

							// Optional AJAX dependency, but won't run scripts if not present
							if ( jQuery._evalUrl ) {
								jQuery._evalUrl( node.src );
							}
						} else {
							DOMEval( node.textContent.replace( rcleanScript, "" ), doc );
						}
					}
				}
			}
		}
	}

	return collection;
}

function remove( elem, selector, keepData ) {
	var node,
		nodes = selector ? jQuery.filter( selector, elem ) : elem,
		i = 0;

	for ( ; ( node = nodes[ i ] ) != null; i++ ) {
		if ( !keepData && node.nodeType === 1 ) {
			jQuery.cleanData( getAll( node ) );
		}

		if ( node.parentNode ) {
			if ( keepData && jQuery.contains( node.ownerDocument, node ) ) {
				setGlobalEval( getAll( node, "script" ) );
			}
			node.parentNode.removeChild( node );
		}
	}

	return elem;
}

jQuery.extend( {
	htmlPrefilter: function( html ) {
		return html.replace( rxhtmlTag, "<$1></$2>" );
	},

	clone: function( elem, dataAndEvents, deepDataAndEvents ) {
		var i, l, srcElements, destElements,
			clone = elem.cloneNode( true ),
			inPage = jQuery.contains( elem.ownerDocument, elem );

		// Fix IE cloning issues
		if ( !support.noCloneChecked && ( elem.nodeType === 1 || elem.nodeType === 11 ) &&
				!jQuery.isXMLDoc( elem ) ) {

			// We eschew Sizzle here for performance reasons: https://jsperf.com/getall-vs-sizzle/2
			destElements = getAll( clone );
			srcElements = getAll( elem );

			for ( i = 0, l = srcElements.length; i < l; i++ ) {
				fixInput( srcElements[ i ], destElements[ i ] );
			}
		}

		// Copy the events from the original to the clone
		if ( dataAndEvents ) {
			if ( deepDataAndEvents ) {
				srcElements = srcElements || getAll( elem );
				destElements = destElements || getAll( clone );

				for ( i = 0, l = srcElements.length; i < l; i++ ) {
					cloneCopyEvent( srcElements[ i ], destElements[ i ] );
				}
			} else {
				cloneCopyEvent( elem, clone );
			}
		}

		// Preserve script evaluation history
		destElements = getAll( clone, "script" );
		if ( destElements.length > 0 ) {
			setGlobalEval( destElements, !inPage && getAll( elem, "script" ) );
		}

		// Return the cloned set
		return clone;
	},

	cleanData: function( elems ) {
		var data, elem, type,
			special = jQuery.event.special,
			i = 0;

		for ( ; ( elem = elems[ i ] ) !== undefined; i++ ) {
			if ( acceptData( elem ) ) {
				if ( ( data = elem[ dataPriv.expando ] ) ) {
					if ( data.events ) {
						for ( type in data.events ) {
							if ( special[ type ] ) {
								jQuery.event.remove( elem, type );

							// This is a shortcut to avoid jQuery.event.remove's overhead
							} else {
								jQuery.removeEvent( elem, type, data.handle );
							}
						}
					}

					// Support: Chrome <=35 - 45+
					// Assign undefined instead of using delete, see Data#remove
					elem[ dataPriv.expando ] = undefined;
				}
				if ( elem[ dataUser.expando ] ) {

					// Support: Chrome <=35 - 45+
					// Assign undefined instead of using delete, see Data#remove
					elem[ dataUser.expando ] = undefined;
				}
			}
		}
	}
} );

jQuery.fn.extend( {
	detach: function( selector ) {
		return remove( this, selector, true );
	},

	remove: function( selector ) {
		return remove( this, selector );
	},

	text: function( value ) {
		return access( this, function( value ) {
			return value === undefined ?
				jQuery.text( this ) :
				this.empty().each( function() {
					if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
						this.textContent = value;
					}
				} );
		}, null, value, arguments.length );
	},

	append: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
				var target = manipulationTarget( this, elem );
				target.appendChild( elem );
			}
		} );
	},

	prepend: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
				var target = manipulationTarget( this, elem );
				target.insertBefore( elem, target.firstChild );
			}
		} );
	},

	before: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.parentNode ) {
				this.parentNode.insertBefore( elem, this );
			}
		} );
	},

	after: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.parentNode ) {
				this.parentNode.insertBefore( elem, this.nextSibling );
			}
		} );
	},

	empty: function() {
		var elem,
			i = 0;

		for ( ; ( elem = this[ i ] ) != null; i++ ) {
			if ( elem.nodeType === 1 ) {

				// Prevent memory leaks
				jQuery.cleanData( getAll( elem, false ) );

				// Remove any remaining nodes
				elem.textContent = "";
			}
		}

		return this;
	},

	clone: function( dataAndEvents, deepDataAndEvents ) {
		dataAndEvents = dataAndEvents == null ? false : dataAndEvents;
		deepDataAndEvents = deepDataAndEvents == null ? dataAndEvents : deepDataAndEvents;

		return this.map( function() {
			return jQuery.clone( this, dataAndEvents, deepDataAndEvents );
		} );
	},

	html: function( value ) {
		return access( this, function( value ) {
			var elem = this[ 0 ] || {},
				i = 0,
				l = this.length;

			if ( value === undefined && elem.nodeType === 1 ) {
				return elem.innerHTML;
			}

			// See if we can take a shortcut and just use innerHTML
			if ( typeof value === "string" && !rnoInnerhtml.test( value ) &&
				!wrapMap[ ( rtagName.exec( value ) || [ "", "" ] )[ 1 ].toLowerCase() ] ) {

				value = jQuery.htmlPrefilter( value );

				try {
					for ( ; i < l; i++ ) {
						elem = this[ i ] || {};

						// Remove element nodes and prevent memory leaks
						if ( elem.nodeType === 1 ) {
							jQuery.cleanData( getAll( elem, false ) );
							elem.innerHTML = value;
						}
					}

					elem = 0;

				// If using innerHTML throws an exception, use the fallback method
				} catch ( e ) {}
			}

			if ( elem ) {
				this.empty().append( value );
			}
		}, null, value, arguments.length );
	},

	replaceWith: function() {
		var ignored = [];

		// Make the changes, replacing each non-ignored context element with the new content
		return domManip( this, arguments, function( elem ) {
			var parent = this.parentNode;

			if ( jQuery.inArray( this, ignored ) < 0 ) {
				jQuery.cleanData( getAll( this ) );
				if ( parent ) {
					parent.replaceChild( elem, this );
				}
			}

		// Force callback invocation
		}, ignored );
	}
} );

jQuery.each( {
	appendTo: "append",
	prependTo: "prepend",
	insertBefore: "before",
	insertAfter: "after",
	replaceAll: "replaceWith"
}, function( name, original ) {
	jQuery.fn[ name ] = function( selector ) {
		var elems,
			ret = [],
			insert = jQuery( selector ),
			last = insert.length - 1,
			i = 0;

		for ( ; i <= last; i++ ) {
			elems = i === last ? this : this.clone( true );
			jQuery( insert[ i ] )[ original ]( elems );

			// Support: Android <=4.0 only, PhantomJS 1 only
			// .get() because push.apply(_, arraylike) throws on ancient WebKit
			push.apply( ret, elems.get() );
		}

		return this.pushStack( ret );
	};
} );
var rmargin = ( /^margin/ );

var rnumnonpx = new RegExp( "^(" + pnum + ")(?!px)[a-z%]+$", "i" );

var getStyles = function( elem ) {

		// Support: IE <=11 only, Firefox <=30 (#15098, #14150)
		// IE throws on elements created in popups
		// FF meanwhile throws on frame elements through "defaultView.getComputedStyle"
		var view = elem.ownerDocument.defaultView;

		if ( !view || !view.opener ) {
			view = window;
		}

		return view.getComputedStyle( elem );
	};



( function() {

	// Executing both pixelPosition & boxSizingReliable tests require only one layout
	// so they're executed at the same time to save the second computation.
	function computeStyleTests() {

		// This is a singleton, we need to execute it only once
		if ( !div ) {
			return;
		}

		div.style.cssText =
			"box-sizing:border-box;" +
			"position:relative;display:block;" +
			"margin:auto;border:1px;padding:1px;" +
			"top:1%;width:50%";
		div.innerHTML = "";
		documentElement.appendChild( container );

		var divStyle = window.getComputedStyle( div );
		pixelPositionVal = divStyle.top !== "1%";

		// Support: Android 4.0 - 4.3 only, Firefox <=3 - 44
		reliableMarginLeftVal = divStyle.marginLeft === "2px";
		boxSizingReliableVal = divStyle.width === "4px";

		// Support: Android 4.0 - 4.3 only
		// Some styles come back with percentage values, even though they shouldn't
		div.style.marginRight = "50%";
		pixelMarginRightVal = divStyle.marginRight === "4px";

		documentElement.removeChild( container );

		// Nullify the div so it wouldn't be stored in the memory and
		// it will also be a sign that checks already performed
		div = null;
	}

	var pixelPositionVal, boxSizingReliableVal, pixelMarginRightVal, reliableMarginLeftVal,
		container = document.createElement( "div" ),
		div = document.createElement( "div" );

	// Finish early in limited (non-browser) environments
	if ( !div.style ) {
		return;
	}

	// Support: IE <=9 - 11 only
	// Style of cloned element affects source element cloned (#8908)
	div.style.backgroundClip = "content-box";
	div.cloneNode( true ).style.backgroundClip = "";
	support.clearCloneStyle = div.style.backgroundClip === "content-box";

	container.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;" +
		"padding:0;margin-top:1px;position:absolute";
	container.appendChild( div );

	jQuery.extend( support, {
		pixelPosition: function() {
			computeStyleTests();
			return pixelPositionVal;
		},
		boxSizingReliable: function() {
			computeStyleTests();
			return boxSizingReliableVal;
		},
		pixelMarginRight: function() {
			computeStyleTests();
			return pixelMarginRightVal;
		},
		reliableMarginLeft: function() {
			computeStyleTests();
			return reliableMarginLeftVal;
		}
	} );
} )();


function curCSS( elem, name, computed ) {
	var width, minWidth, maxWidth, ret,

		// Support: Firefox 51+
		// Retrieving style before computed somehow
		// fixes an issue with getting wrong values
		// on detached elements
		style = elem.style;

	computed = computed || getStyles( elem );

	// getPropertyValue is needed for:
	//   .css('filter') (IE 9 only, #12537)
	//   .css('--customProperty) (#3144)
	if ( computed ) {
		ret = computed.getPropertyValue( name ) || computed[ name ];

		if ( ret === "" && !jQuery.contains( elem.ownerDocument, elem ) ) {
			ret = jQuery.style( elem, name );
		}

		// A tribute to the "awesome hack by Dean Edwards"
		// Android Browser returns percentage for some values,
		// but width seems to be reliably pixels.
		// This is against the CSSOM draft spec:
		// https://drafts.csswg.org/cssom/#resolved-values
		if ( !support.pixelMarginRight() && rnumnonpx.test( ret ) && rmargin.test( name ) ) {

			// Remember the original values
			width = style.width;
			minWidth = style.minWidth;
			maxWidth = style.maxWidth;

			// Put in the new values to get a computed value out
			style.minWidth = style.maxWidth = style.width = ret;
			ret = computed.width;

			// Revert the changed values
			style.width = width;
			style.minWidth = minWidth;
			style.maxWidth = maxWidth;
		}
	}

	return ret !== undefined ?

		// Support: IE <=9 - 11 only
		// IE returns zIndex value as an integer.
		ret + "" :
		ret;
}


function addGetHookIf( conditionFn, hookFn ) {

	// Define the hook, we'll check on the first run if it's really needed.
	return {
		get: function() {
			if ( conditionFn() ) {

				// Hook not needed (or it's not possible to use it due
				// to missing dependency), remove it.
				delete this.get;
				return;
			}

			// Hook needed; redefine it so that the support test is not executed again.
			return ( this.get = hookFn ).apply( this, arguments );
		}
	};
}


var

	// Swappable if display is none or starts with table
	// except "table", "table-cell", or "table-caption"
	// See here for display values: https://developer.mozilla.org/en-US/docs/CSS/display
	rdisplayswap = /^(none|table(?!-c[ea]).+)/,
	rcustomProp = /^--/,
	cssShow = { position: "absolute", visibility: "hidden", display: "block" },
	cssNormalTransform = {
		letterSpacing: "0",
		fontWeight: "400"
	},

	cssPrefixes = [ "Webkit", "Moz", "ms" ],
	emptyStyle = document.createElement( "div" ).style;

// Return a css property mapped to a potentially vendor prefixed property
function vendorPropName( name ) {

	// Shortcut for names that are not vendor prefixed
	if ( name in emptyStyle ) {
		return name;
	}

	// Check for vendor prefixed names
	var capName = name[ 0 ].toUpperCase() + name.slice( 1 ),
		i = cssPrefixes.length;

	while ( i-- ) {
		name = cssPrefixes[ i ] + capName;
		if ( name in emptyStyle ) {
			return name;
		}
	}
}

// Return a property mapped along what jQuery.cssProps suggests or to
// a vendor prefixed property.
function finalPropName( name ) {
	var ret = jQuery.cssProps[ name ];
	if ( !ret ) {
		ret = jQuery.cssProps[ name ] = vendorPropName( name ) || name;
	}
	return ret;
}

function setPositiveNumber( elem, value, subtract ) {

	// Any relative (+/-) values have already been
	// normalized at this point
	var matches = rcssNum.exec( value );
	return matches ?

		// Guard against undefined "subtract", e.g., when used as in cssHooks
		Math.max( 0, matches[ 2 ] - ( subtract || 0 ) ) + ( matches[ 3 ] || "px" ) :
		value;
}

function augmentWidthOrHeight( elem, name, extra, isBorderBox, styles ) {
	var i,
		val = 0;

	// If we already have the right measurement, avoid augmentation
	if ( extra === ( isBorderBox ? "border" : "content" ) ) {
		i = 4;

	// Otherwise initialize for horizontal or vertical properties
	} else {
		i = name === "width" ? 1 : 0;
	}

	for ( ; i < 4; i += 2 ) {

		// Both box models exclude margin, so add it if we want it
		if ( extra === "margin" ) {
			val += jQuery.css( elem, extra + cssExpand[ i ], true, styles );
		}

		if ( isBorderBox ) {

			// border-box includes padding, so remove it if we want content
			if ( extra === "content" ) {
				val -= jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );
			}

			// At this point, extra isn't border nor margin, so remove border
			if ( extra !== "margin" ) {
				val -= jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
			}
		} else {

			// At this point, extra isn't content, so add padding
			val += jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );

			// At this point, extra isn't content nor padding, so add border
			if ( extra !== "padding" ) {
				val += jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
			}
		}
	}

	return val;
}

function getWidthOrHeight( elem, name, extra ) {

	// Start with computed style
	var valueIsBorderBox,
		styles = getStyles( elem ),
		val = curCSS( elem, name, styles ),
		isBorderBox = jQuery.css( elem, "boxSizing", false, styles ) === "border-box";

	// Computed unit is not pixels. Stop here and return.
	if ( rnumnonpx.test( val ) ) {
		return val;
	}

	// Check for style in case a browser which returns unreliable values
	// for getComputedStyle silently falls back to the reliable elem.style
	valueIsBorderBox = isBorderBox &&
		( support.boxSizingReliable() || val === elem.style[ name ] );

	// Fall back to offsetWidth/Height when value is "auto"
	// This happens for inline elements with no explicit setting (gh-3571)
	if ( val === "auto" ) {
		val = elem[ "offset" + name[ 0 ].toUpperCase() + name.slice( 1 ) ];
	}

	// Normalize "", auto, and prepare for extra
	val = parseFloat( val ) || 0;

	// Use the active box-sizing model to add/subtract irrelevant styles
	return ( val +
		augmentWidthOrHeight(
			elem,
			name,
			extra || ( isBorderBox ? "border" : "content" ),
			valueIsBorderBox,
			styles
		)
	) + "px";
}

jQuery.extend( {

	// Add in style property hooks for overriding the default
	// behavior of getting and setting a style property
	cssHooks: {
		opacity: {
			get: function( elem, computed ) {
				if ( computed ) {

					// We should always get a number back from opacity
					var ret = curCSS( elem, "opacity" );
					return ret === "" ? "1" : ret;
				}
			}
		}
	},

	// Don't automatically add "px" to these possibly-unitless properties
	cssNumber: {
		"animationIterationCount": true,
		"columnCount": true,
		"fillOpacity": true,
		"flexGrow": true,
		"flexShrink": true,
		"fontWeight": true,
		"lineHeight": true,
		"opacity": true,
		"order": true,
		"orphans": true,
		"widows": true,
		"zIndex": true,
		"zoom": true
	},

	// Add in properties whose names you wish to fix before
	// setting or getting the value
	cssProps: {
		"float": "cssFloat"
	},

	// Get and set the style property on a DOM Node
	style: function( elem, name, value, extra ) {

		// Don't set styles on text and comment nodes
		if ( !elem || elem.nodeType === 3 || elem.nodeType === 8 || !elem.style ) {
			return;
		}

		// Make sure that we're working with the right name
		var ret, type, hooks,
			origName = jQuery.camelCase( name ),
			isCustomProp = rcustomProp.test( name ),
			style = elem.style;

		// Make sure that we're working with the right name. We don't
		// want to query the value if it is a CSS custom property
		// since they are user-defined.
		if ( !isCustomProp ) {
			name = finalPropName( origName );
		}

		// Gets hook for the prefixed version, then unprefixed version
		hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];

		// Check if we're setting a value
		if ( value !== undefined ) {
			type = typeof value;

			// Convert "+=" or "-=" to relative numbers (#7345)
			if ( type === "string" && ( ret = rcssNum.exec( value ) ) && ret[ 1 ] ) {
				value = adjustCSS( elem, name, ret );

				// Fixes bug #9237
				type = "number";
			}

			// Make sure that null and NaN values aren't set (#7116)
			if ( value == null || value !== value ) {
				return;
			}

			// If a number was passed in, add the unit (except for certain CSS properties)
			if ( type === "number" ) {
				value += ret && ret[ 3 ] || ( jQuery.cssNumber[ origName ] ? "" : "px" );
			}

			// background-* props affect original clone's values
			if ( !support.clearCloneStyle && value === "" && name.indexOf( "background" ) === 0 ) {
				style[ name ] = "inherit";
			}

			// If a hook was provided, use that value, otherwise just set the specified value
			if ( !hooks || !( "set" in hooks ) ||
				( value = hooks.set( elem, value, extra ) ) !== undefined ) {

				if ( isCustomProp ) {
					style.setProperty( name, value );
				} else {
					style[ name ] = value;
				}
			}

		} else {

			// If a hook was provided get the non-computed value from there
			if ( hooks && "get" in hooks &&
				( ret = hooks.get( elem, false, extra ) ) !== undefined ) {

				return ret;
			}

			// Otherwise just get the value from the style object
			return style[ name ];
		}
	},

	css: function( elem, name, extra, styles ) {
		var val, num, hooks,
			origName = jQuery.camelCase( name ),
			isCustomProp = rcustomProp.test( name );

		// Make sure that we're working with the right name. We don't
		// want to modify the value if it is a CSS custom property
		// since they are user-defined.
		if ( !isCustomProp ) {
			name = finalPropName( origName );
		}

		// Try prefixed name followed by the unprefixed name
		hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];

		// If a hook was provided get the computed value from there
		if ( hooks && "get" in hooks ) {
			val = hooks.get( elem, true, extra );
		}

		// Otherwise, if a way to get the computed value exists, use that
		if ( val === undefined ) {
			val = curCSS( elem, name, styles );
		}

		// Convert "normal" to computed value
		if ( val === "normal" && name in cssNormalTransform ) {
			val = cssNormalTransform[ name ];
		}

		// Make numeric if forced or a qualifier was provided and val looks numeric
		if ( extra === "" || extra ) {
			num = parseFloat( val );
			return extra === true || isFinite( num ) ? num || 0 : val;
		}

		return val;
	}
} );

jQuery.each( [ "height", "width" ], function( i, name ) {
	jQuery.cssHooks[ name ] = {
		get: function( elem, computed, extra ) {
			if ( computed ) {

				// Certain elements can have dimension info if we invisibly show them
				// but it must have a current display style that would benefit
				return rdisplayswap.test( jQuery.css( elem, "display" ) ) &&

					// Support: Safari 8+
					// Table columns in Safari have non-zero offsetWidth & zero
					// getBoundingClientRect().width unless display is changed.
					// Support: IE <=11 only
					// Running getBoundingClientRect on a disconnected node
					// in IE throws an error.
					( !elem.getClientRects().length || !elem.getBoundingClientRect().width ) ?
						swap( elem, cssShow, function() {
							return getWidthOrHeight( elem, name, extra );
						} ) :
						getWidthOrHeight( elem, name, extra );
			}
		},

		set: function( elem, value, extra ) {
			var matches,
				styles = extra && getStyles( elem ),
				subtract = extra && augmentWidthOrHeight(
					elem,
					name,
					extra,
					jQuery.css( elem, "boxSizing", false, styles ) === "border-box",
					styles
				);

			// Convert to pixels if value adjustment is needed
			if ( subtract && ( matches = rcssNum.exec( value ) ) &&
				( matches[ 3 ] || "px" ) !== "px" ) {

				elem.style[ name ] = value;
				value = jQuery.css( elem, name );
			}

			return setPositiveNumber( elem, value, subtract );
		}
	};
} );

jQuery.cssHooks.marginLeft = addGetHookIf( support.reliableMarginLeft,
	function( elem, computed ) {
		if ( computed ) {
			return ( parseFloat( curCSS( elem, "marginLeft" ) ) ||
				elem.getBoundingClientRect().left -
					swap( elem, { marginLeft: 0 }, function() {
						return elem.getBoundingClientRect().left;
					} )
				) + "px";
		}
	}
);

// These hooks are used by animate to expand properties
jQuery.each( {
	margin: "",
	padding: "",
	border: "Width"
}, function( prefix, suffix ) {
	jQuery.cssHooks[ prefix + suffix ] = {
		expand: function( value ) {
			var i = 0,
				expanded = {},

				// Assumes a single number if not a string
				parts = typeof value === "string" ? value.split( " " ) : [ value ];

			for ( ; i < 4; i++ ) {
				expanded[ prefix + cssExpand[ i ] + suffix ] =
					parts[ i ] || parts[ i - 2 ] || parts[ 0 ];
			}

			return expanded;
		}
	};

	if ( !rmargin.test( prefix ) ) {
		jQuery.cssHooks[ prefix + suffix ].set = setPositiveNumber;
	}
} );

jQuery.fn.extend( {
	css: function( name, value ) {
		return access( this, function( elem, name, value ) {
			var styles, len,
				map = {},
				i = 0;

			if ( Array.isArray( name ) ) {
				styles = getStyles( elem );
				len = name.length;

				for ( ; i < len; i++ ) {
					map[ name[ i ] ] = jQuery.css( elem, name[ i ], false, styles );
				}

				return map;
			}

			return value !== undefined ?
				jQuery.style( elem, name, value ) :
				jQuery.css( elem, name );
		}, name, value, arguments.length > 1 );
	}
} );


function Tween( elem, options, prop, end, easing ) {
	return new Tween.prototype.init( elem, options, prop, end, easing );
}
jQuery.Tween = Tween;

Tween.prototype = {
	constructor: Tween,
	init: function( elem, options, prop, end, easing, unit ) {
		this.elem = elem;
		this.prop = prop;
		this.easing = easing || jQuery.easing._default;
		this.options = options;
		this.start = this.now = this.cur();
		this.end = end;
		this.unit = unit || ( jQuery.cssNumber[ prop ] ? "" : "px" );
	},
	cur: function() {
		var hooks = Tween.propHooks[ this.prop ];

		return hooks && hooks.get ?
			hooks.get( this ) :
			Tween.propHooks._default.get( this );
	},
	run: function( percent ) {
		var eased,
			hooks = Tween.propHooks[ this.prop ];

		if ( this.options.duration ) {
			this.pos = eased = jQuery.easing[ this.easing ](
				percent, this.options.duration * percent, 0, 1, this.options.duration
			);
		} else {
			this.pos = eased = percent;
		}
		this.now = ( this.end - this.start ) * eased + this.start;

		if ( this.options.step ) {
			this.options.step.call( this.elem, this.now, this );
		}

		if ( hooks && hooks.set ) {
			hooks.set( this );
		} else {
			Tween.propHooks._default.set( this );
		}
		return this;
	}
};

Tween.prototype.init.prototype = Tween.prototype;

Tween.propHooks = {
	_default: {
		get: function( tween ) {
			var result;

			// Use a property on the element directly when it is not a DOM element,
			// or when there is no matching style property that exists.
			if ( tween.elem.nodeType !== 1 ||
				tween.elem[ tween.prop ] != null && tween.elem.style[ tween.prop ] == null ) {
				return tween.elem[ tween.prop ];
			}

			// Passing an empty string as a 3rd parameter to .css will automatically
			// attempt a parseFloat and fallback to a string if the parse fails.
			// Simple values such as "10px" are parsed to Float;
			// complex values such as "rotate(1rad)" are returned as-is.
			result = jQuery.css( tween.elem, tween.prop, "" );

			// Empty strings, null, undefined and "auto" are converted to 0.
			return !result || result === "auto" ? 0 : result;
		},
		set: function( tween ) {

			// Use step hook for back compat.
			// Use cssHook if its there.
			// Use .style if available and use plain properties where available.
			if ( jQuery.fx.step[ tween.prop ] ) {
				jQuery.fx.step[ tween.prop ]( tween );
			} else if ( tween.elem.nodeType === 1 &&
				( tween.elem.style[ jQuery.cssProps[ tween.prop ] ] != null ||
					jQuery.cssHooks[ tween.prop ] ) ) {
				jQuery.style( tween.elem, tween.prop, tween.now + tween.unit );
			} else {
				tween.elem[ tween.prop ] = tween.now;
			}
		}
	}
};

// Support: IE <=9 only
// Panic based approach to setting things on disconnected nodes
Tween.propHooks.scrollTop = Tween.propHooks.scrollLeft = {
	set: function( tween ) {
		if ( tween.elem.nodeType && tween.elem.parentNode ) {
			tween.elem[ tween.prop ] = tween.now;
		}
	}
};

jQuery.easing = {
	linear: function( p ) {
		return p;
	},
	swing: function( p ) {
		return 0.5 - Math.cos( p * Math.PI ) / 2;
	},
	_default: "swing"
};

jQuery.fx = Tween.prototype.init;

// Back compat <1.8 extension point
jQuery.fx.step = {};




var
	fxNow, inProgress,
	rfxtypes = /^(?:toggle|show|hide)$/,
	rrun = /queueHooks$/;

function schedule() {
	if ( inProgress ) {
		if ( document.hidden === false && window.requestAnimationFrame ) {
			window.requestAnimationFrame( schedule );
		} else {
			window.setTimeout( schedule, jQuery.fx.interval );
		}

		jQuery.fx.tick();
	}
}

// Animations created synchronously will run synchronously
function createFxNow() {
	window.setTimeout( function() {
		fxNow = undefined;
	} );
	return ( fxNow = jQuery.now() );
}

// Generate parameters to create a standard animation
function genFx( type, includeWidth ) {
	var which,
		i = 0,
		attrs = { height: type };

	// If we include width, step value is 1 to do all cssExpand values,
	// otherwise step value is 2 to skip over Left and Right
	includeWidth = includeWidth ? 1 : 0;
	for ( ; i < 4; i += 2 - includeWidth ) {
		which = cssExpand[ i ];
		attrs[ "margin" + which ] = attrs[ "padding" + which ] = type;
	}

	if ( includeWidth ) {
		attrs.opacity = attrs.width = type;
	}

	return attrs;
}

function createTween( value, prop, animation ) {
	var tween,
		collection = ( Animation.tweeners[ prop ] || [] ).concat( Animation.tweeners[ "*" ] ),
		index = 0,
		length = collection.length;
	for ( ; index < length; index++ ) {
		if ( ( tween = collection[ index ].call( animation, prop, value ) ) ) {

			// We're done with this property
			return tween;
		}
	}
}

function defaultPrefilter( elem, props, opts ) {
	var prop, value, toggle, hooks, oldfire, propTween, restoreDisplay, display,
		isBox = "width" in props || "height" in props,
		anim = this,
		orig = {},
		style = elem.style,
		hidden = elem.nodeType && isHiddenWithinTree( elem ),
		dataShow = dataPriv.get( elem, "fxshow" );

	// Queue-skipping animations hijack the fx hooks
	if ( !opts.queue ) {
		hooks = jQuery._queueHooks( elem, "fx" );
		if ( hooks.unqueued == null ) {
			hooks.unqueued = 0;
			oldfire = hooks.empty.fire;
			hooks.empty.fire = function() {
				if ( !hooks.unqueued ) {
					oldfire();
				}
			};
		}
		hooks.unqueued++;

		anim.always( function() {

			// Ensure the complete handler is called before this completes
			anim.always( function() {
				hooks.unqueued--;
				if ( !jQuery.queue( elem, "fx" ).length ) {
					hooks.empty.fire();
				}
			} );
		} );
	}

	// Detect show/hide animations
	for ( prop in props ) {
		value = props[ prop ];
		if ( rfxtypes.test( value ) ) {
			delete props[ prop ];
			toggle = toggle || value === "toggle";
			if ( value === ( hidden ? "hide" : "show" ) ) {

				// Pretend to be hidden if this is a "show" and
				// there is still data from a stopped show/hide
				if ( value === "show" && dataShow && dataShow[ prop ] !== undefined ) {
					hidden = true;

				// Ignore all other no-op show/hide data
				} else {
					continue;
				}
			}
			orig[ prop ] = dataShow && dataShow[ prop ] || jQuery.style( elem, prop );
		}
	}

	// Bail out if this is a no-op like .hide().hide()
	propTween = !jQuery.isEmptyObject( props );
	if ( !propTween && jQuery.isEmptyObject( orig ) ) {
		return;
	}

	// Restrict "overflow" and "display" styles during box animations
	if ( isBox && elem.nodeType === 1 ) {

		// Support: IE <=9 - 11, Edge 12 - 13
		// Record all 3 overflow attributes because IE does not infer the shorthand
		// from identically-valued overflowX and overflowY
		opts.overflow = [ style.overflow, style.overflowX, style.overflowY ];

		// Identify a display type, preferring old show/hide data over the CSS cascade
		restoreDisplay = dataShow && dataShow.display;
		if ( restoreDisplay == null ) {
			restoreDisplay = dataPriv.get( elem, "display" );
		}
		display = jQuery.css( elem, "display" );
		if ( display === "none" ) {
			if ( restoreDisplay ) {
				display = restoreDisplay;
			} else {

				// Get nonempty value(s) by temporarily forcing visibility
				showHide( [ elem ], true );
				restoreDisplay = elem.style.display || restoreDisplay;
				display = jQuery.css( elem, "display" );
				showHide( [ elem ] );
			}
		}

		// Animate inline elements as inline-block
		if ( display === "inline" || display === "inline-block" && restoreDisplay != null ) {
			if ( jQuery.css( elem, "float" ) === "none" ) {

				// Restore the original display value at the end of pure show/hide animations
				if ( !propTween ) {
					anim.done( function() {
						style.display = restoreDisplay;
					} );
					if ( restoreDisplay == null ) {
						display = style.display;
						restoreDisplay = display === "none" ? "" : display;
					}
				}
				style.display = "inline-block";
			}
		}
	}

	if ( opts.overflow ) {
		style.overflow = "hidden";
		anim.always( function() {
			style.overflow = opts.overflow[ 0 ];
			style.overflowX = opts.overflow[ 1 ];
			style.overflowY = opts.overflow[ 2 ];
		} );
	}

	// Implement show/hide animations
	propTween = false;
	for ( prop in orig ) {

		// General show/hide setup for this element animation
		if ( !propTween ) {
			if ( dataShow ) {
				if ( "hidden" in dataShow ) {
					hidden = dataShow.hidden;
				}
			} else {
				dataShow = dataPriv.access( elem, "fxshow", { display: restoreDisplay } );
			}

			// Store hidden/visible for toggle so `.stop().toggle()` "reverses"
			if ( toggle ) {
				dataShow.hidden = !hidden;
			}

			// Show elements before animating them
			if ( hidden ) {
				showHide( [ elem ], true );
			}

			/* eslint-disable no-loop-func */

			anim.done( function() {

			/* eslint-enable no-loop-func */

				// The final step of a "hide" animation is actually hiding the element
				if ( !hidden ) {
					showHide( [ elem ] );
				}
				dataPriv.remove( elem, "fxshow" );
				for ( prop in orig ) {
					jQuery.style( elem, prop, orig[ prop ] );
				}
			} );
		}

		// Per-property setup
		propTween = createTween( hidden ? dataShow[ prop ] : 0, prop, anim );
		if ( !( prop in dataShow ) ) {
			dataShow[ prop ] = propTween.start;
			if ( hidden ) {
				propTween.end = propTween.start;
				propTween.start = 0;
			}
		}
	}
}

function propFilter( props, specialEasing ) {
	var index, name, easing, value, hooks;

	// camelCase, specialEasing and expand cssHook pass
	for ( index in props ) {
		name = jQuery.camelCase( index );
		easing = specialEasing[ name ];
		value = props[ index ];
		if ( Array.isArray( value ) ) {
			easing = value[ 1 ];
			value = props[ index ] = value[ 0 ];
		}

		if ( index !== name ) {
			props[ name ] = value;
			delete props[ index ];
		}

		hooks = jQuery.cssHooks[ name ];
		if ( hooks && "expand" in hooks ) {
			value = hooks.expand( value );
			delete props[ name ];

			// Not quite $.extend, this won't overwrite existing keys.
			// Reusing 'index' because we have the correct "name"
			for ( index in value ) {
				if ( !( index in props ) ) {
					props[ index ] = value[ index ];
					specialEasing[ index ] = easing;
				}
			}
		} else {
			specialEasing[ name ] = easing;
		}
	}
}

function Animation( elem, properties, options ) {
	var result,
		stopped,
		index = 0,
		length = Animation.prefilters.length,
		deferred = jQuery.Deferred().always( function() {

			// Don't match elem in the :animated selector
			delete tick.elem;
		} ),
		tick = function() {
			if ( stopped ) {
				return false;
			}
			var currentTime = fxNow || createFxNow(),
				remaining = Math.max( 0, animation.startTime + animation.duration - currentTime ),

				// Support: Android 2.3 only
				// Archaic crash bug won't allow us to use `1 - ( 0.5 || 0 )` (#12497)
				temp = remaining / animation.duration || 0,
				percent = 1 - temp,
				index = 0,
				length = animation.tweens.length;

			for ( ; index < length; index++ ) {
				animation.tweens[ index ].run( percent );
			}

			deferred.notifyWith( elem, [ animation, percent, remaining ] );

			// If there's more to do, yield
			if ( percent < 1 && length ) {
				return remaining;
			}

			// If this was an empty animation, synthesize a final progress notification
			if ( !length ) {
				deferred.notifyWith( elem, [ animation, 1, 0 ] );
			}

			// Resolve the animation and report its conclusion
			deferred.resolveWith( elem, [ animation ] );
			return false;
		},
		animation = deferred.promise( {
			elem: elem,
			props: jQuery.extend( {}, properties ),
			opts: jQuery.extend( true, {
				specialEasing: {},
				easing: jQuery.easing._default
			}, options ),
			originalProperties: properties,
			originalOptions: options,
			startTime: fxNow || createFxNow(),
			duration: options.duration,
			tweens: [],
			createTween: function( prop, end ) {
				var tween = jQuery.Tween( elem, animation.opts, prop, end,
						animation.opts.specialEasing[ prop ] || animation.opts.easing );
				animation.tweens.push( tween );
				return tween;
			},
			stop: function( gotoEnd ) {
				var index = 0,

					// If we are going to the end, we want to run all the tweens
					// otherwise we skip this part
					length = gotoEnd ? animation.tweens.length : 0;
				if ( stopped ) {
					return this;
				}
				stopped = true;
				for ( ; index < length; index++ ) {
					animation.tweens[ index ].run( 1 );
				}

				// Resolve when we played the last frame; otherwise, reject
				if ( gotoEnd ) {
					deferred.notifyWith( elem, [ animation, 1, 0 ] );
					deferred.resolveWith( elem, [ animation, gotoEnd ] );
				} else {
					deferred.rejectWith( elem, [ animation, gotoEnd ] );
				}
				return this;
			}
		} ),
		props = animation.props;

	propFilter( props, animation.opts.specialEasing );

	for ( ; index < length; index++ ) {
		result = Animation.prefilters[ index ].call( animation, elem, props, animation.opts );
		if ( result ) {
			if ( jQuery.isFunction( result.stop ) ) {
				jQuery._queueHooks( animation.elem, animation.opts.queue ).stop =
					jQuery.proxy( result.stop, result );
			}
			return result;
		}
	}

	jQuery.map( props, createTween, animation );

	if ( jQuery.isFunction( animation.opts.start ) ) {
		animation.opts.start.call( elem, animation );
	}

	// Attach callbacks from options
	animation
		.progress( animation.opts.progress )
		.done( animation.opts.done, animation.opts.complete )
		.fail( animation.opts.fail )
		.always( animation.opts.always );

	jQuery.fx.timer(
		jQuery.extend( tick, {
			elem: elem,
			anim: animation,
			queue: animation.opts.queue
		} )
	);

	return animation;
}

jQuery.Animation = jQuery.extend( Animation, {

	tweeners: {
		"*": [ function( prop, value ) {
			var tween = this.createTween( prop, value );
			adjustCSS( tween.elem, prop, rcssNum.exec( value ), tween );
			return tween;
		} ]
	},

	tweener: function( props, callback ) {
		if ( jQuery.isFunction( props ) ) {
			callback = props;
			props = [ "*" ];
		} else {
			props = props.match( rnothtmlwhite );
		}

		var prop,
			index = 0,
			length = props.length;

		for ( ; index < length; index++ ) {
			prop = props[ index ];
			Animation.tweeners[ prop ] = Animation.tweeners[ prop ] || [];
			Animation.tweeners[ prop ].unshift( callback );
		}
	},

	prefilters: [ defaultPrefilter ],

	prefilter: function( callback, prepend ) {
		if ( prepend ) {
			Animation.prefilters.unshift( callback );
		} else {
			Animation.prefilters.push( callback );
		}
	}
} );

jQuery.speed = function( speed, easing, fn ) {
	var opt = speed && typeof speed === "object" ? jQuery.extend( {}, speed ) : {
		complete: fn || !fn && easing ||
			jQuery.isFunction( speed ) && speed,
		duration: speed,
		easing: fn && easing || easing && !jQuery.isFunction( easing ) && easing
	};

	// Go to the end state if fx are off
	if ( jQuery.fx.off ) {
		opt.duration = 0;

	} else {
		if ( typeof opt.duration !== "number" ) {
			if ( opt.duration in jQuery.fx.speeds ) {
				opt.duration = jQuery.fx.speeds[ opt.duration ];

			} else {
				opt.duration = jQuery.fx.speeds._default;
			}
		}
	}

	// Normalize opt.queue - true/undefined/null -> "fx"
	if ( opt.queue == null || opt.queue === true ) {
		opt.queue = "fx";
	}

	// Queueing
	opt.old = opt.complete;

	opt.complete = function() {
		if ( jQuery.isFunction( opt.old ) ) {
			opt.old.call( this );
		}

		if ( opt.queue ) {
			jQuery.dequeue( this, opt.queue );
		}
	};

	return opt;
};

jQuery.fn.extend( {
	fadeTo: function( speed, to, easing, callback ) {

		// Show any hidden elements after setting opacity to 0
		return this.filter( isHiddenWithinTree ).css( "opacity", 0 ).show()

			// Animate to the value specified
			.end().animate( { opacity: to }, speed, easing, callback );
	},
	animate: function( prop, speed, easing, callback ) {
		var empty = jQuery.isEmptyObject( prop ),
			optall = jQuery.speed( speed, easing, callback ),
			doAnimation = function() {

				// Operate on a copy of prop so per-property easing won't be lost
				var anim = Animation( this, jQuery.extend( {}, prop ), optall );

				// Empty animations, or finishing resolves immediately
				if ( empty || dataPriv.get( this, "finish" ) ) {
					anim.stop( true );
				}
			};
			doAnimation.finish = doAnimation;

		return empty || optall.queue === false ?
			this.each( doAnimation ) :
			this.queue( optall.queue, doAnimation );
	},
	stop: function( type, clearQueue, gotoEnd ) {
		var stopQueue = function( hooks ) {
			var stop = hooks.stop;
			delete hooks.stop;
			stop( gotoEnd );
		};

		if ( typeof type !== "string" ) {
			gotoEnd = clearQueue;
			clearQueue = type;
			type = undefined;
		}
		if ( clearQueue && type !== false ) {
			this.queue( type || "fx", [] );
		}

		return this.each( function() {
			var dequeue = true,
				index = type != null && type + "queueHooks",
				timers = jQuery.timers,
				data = dataPriv.get( this );

			if ( index ) {
				if ( data[ index ] && data[ index ].stop ) {
					stopQueue( data[ index ] );
				}
			} else {
				for ( index in data ) {
					if ( data[ index ] && data[ index ].stop && rrun.test( index ) ) {
						stopQueue( data[ index ] );
					}
				}
			}

			for ( index = timers.length; index--; ) {
				if ( timers[ index ].elem === this &&
					( type == null || timers[ index ].queue === type ) ) {

					timers[ index ].anim.stop( gotoEnd );
					dequeue = false;
					timers.splice( index, 1 );
				}
			}

			// Start the next in the queue if the last step wasn't forced.
			// Timers currently will call their complete callbacks, which
			// will dequeue but only if they were gotoEnd.
			if ( dequeue || !gotoEnd ) {
				jQuery.dequeue( this, type );
			}
		} );
	},
	finish: function( type ) {
		if ( type !== false ) {
			type = type || "fx";
		}
		return this.each( function() {
			var index,
				data = dataPriv.get( this ),
				queue = data[ type + "queue" ],
				hooks = data[ type + "queueHooks" ],
				timers = jQuery.timers,
				length = queue ? queue.length : 0;

			// Enable finishing flag on private data
			data.finish = true;

			// Empty the queue first
			jQuery.queue( this, type, [] );

			if ( hooks && hooks.stop ) {
				hooks.stop.call( this, true );
			}

			// Look for any active animations, and finish them
			for ( index = timers.length; index--; ) {
				if ( timers[ index ].elem === this && timers[ index ].queue === type ) {
					timers[ index ].anim.stop( true );
					timers.splice( index, 1 );
				}
			}

			// Look for any animations in the old queue and finish them
			for ( index = 0; index < length; index++ ) {
				if ( queue[ index ] && queue[ index ].finish ) {
					queue[ index ].finish.call( this );
				}
			}

			// Turn off finishing flag
			delete data.finish;
		} );
	}
} );

jQuery.each( [ "toggle", "show", "hide" ], function( i, name ) {
	var cssFn = jQuery.fn[ name ];
	jQuery.fn[ name ] = function( speed, easing, callback ) {
		return speed == null || typeof speed === "boolean" ?
			cssFn.apply( this, arguments ) :
			this.animate( genFx( name, true ), speed, easing, callback );
	};
} );

// Generate shortcuts for custom animations
jQuery.each( {
	slideDown: genFx( "show" ),
	slideUp: genFx( "hide" ),
	slideToggle: genFx( "toggle" ),
	fadeIn: { opacity: "show" },
	fadeOut: { opacity: "hide" },
	fadeToggle: { opacity: "toggle" }
}, function( name, props ) {
	jQuery.fn[ name ] = function( speed, easing, callback ) {
		return this.animate( props, speed, easing, callback );
	};
} );

jQuery.timers = [];
jQuery.fx.tick = function() {
	var timer,
		i = 0,
		timers = jQuery.timers;

	fxNow = jQuery.now();

	for ( ; i < timers.length; i++ ) {
		timer = timers[ i ];

		// Run the timer and safely remove it when done (allowing for external removal)
		if ( !timer() && timers[ i ] === timer ) {
			timers.splice( i--, 1 );
		}
	}

	if ( !timers.length ) {
		jQuery.fx.stop();
	}
	fxNow = undefined;
};

jQuery.fx.timer = function( timer ) {
	jQuery.timers.push( timer );
	jQuery.fx.start();
};

jQuery.fx.interval = 13;
jQuery.fx.start = function() {
	if ( inProgress ) {
		return;
	}

	inProgress = true;
	schedule();
};

jQuery.fx.stop = function() {
	inProgress = null;
};

jQuery.fx.speeds = {
	slow: 600,
	fast: 200,

	// Default speed
	_default: 400
};


// Based off of the plugin by Clint Helfers, with permission.
// https://web.archive.org/web/20100324014747/http://blindsignals.com/index.php/2009/07/jquery-delay/
jQuery.fn.delay = function( time, type ) {
	time = jQuery.fx ? jQuery.fx.speeds[ time ] || time : time;
	type = type || "fx";

	return this.queue( type, function( next, hooks ) {
		var timeout = window.setTimeout( next, time );
		hooks.stop = function() {
			window.clearTimeout( timeout );
		};
	} );
};


( function() {
	var input = document.createElement( "input" ),
		select = document.createElement( "select" ),
		opt = select.appendChild( document.createElement( "option" ) );

	input.type = "checkbox";

	// Support: Android <=4.3 only
	// Default value for a checkbox should be "on"
	support.checkOn = input.value !== "";

	// Support: IE <=11 only
	// Must access selectedIndex to make default options select
	support.optSelected = opt.selected;

	// Support: IE <=11 only
	// An input loses its value after becoming a radio
	input = document.createElement( "input" );
	input.value = "t";
	input.type = "radio";
	support.radioValue = input.value === "t";
} )();


var boolHook,
	attrHandle = jQuery.expr.attrHandle;

jQuery.fn.extend( {
	attr: function( name, value ) {
		return access( this, jQuery.attr, name, value, arguments.length > 1 );
	},

	removeAttr: function( name ) {
		return this.each( function() {
			jQuery.removeAttr( this, name );
		} );
	}
} );

jQuery.extend( {
	attr: function( elem, name, value ) {
		var ret, hooks,
			nType = elem.nodeType;

		// Don't get/set attributes on text, comment and attribute nodes
		if ( nType === 3 || nType === 8 || nType === 2 ) {
			return;
		}

		// Fallback to prop when attributes are not supported
		if ( typeof elem.getAttribute === "undefined" ) {
			return jQuery.prop( elem, name, value );
		}

		// Attribute hooks are determined by the lowercase version
		// Grab necessary hook if one is defined
		if ( nType !== 1 || !jQuery.isXMLDoc( elem ) ) {
			hooks = jQuery.attrHooks[ name.toLowerCase() ] ||
				( jQuery.expr.match.bool.test( name ) ? boolHook : undefined );
		}

		if ( value !== undefined ) {
			if ( value === null ) {
				jQuery.removeAttr( elem, name );
				return;
			}

			if ( hooks && "set" in hooks &&
				( ret = hooks.set( elem, value, name ) ) !== undefined ) {
				return ret;
			}

			elem.setAttribute( name, value + "" );
			return value;
		}

		if ( hooks && "get" in hooks && ( ret = hooks.get( elem, name ) ) !== null ) {
			return ret;
		}

		ret = jQuery.find.attr( elem, name );

		// Non-existent attributes return null, we normalize to undefined
		return ret == null ? undefined : ret;
	},

	attrHooks: {
		type: {
			set: function( elem, value ) {
				if ( !support.radioValue && value === "radio" &&
					nodeName( elem, "input" ) ) {
					var val = elem.value;
					elem.setAttribute( "type", value );
					if ( val ) {
						elem.value = val;
					}
					return value;
				}
			}
		}
	},

	removeAttr: function( elem, value ) {
		var name,
			i = 0,

			// Attribute names can contain non-HTML whitespace characters
			// https://html.spec.whatwg.org/multipage/syntax.html#attributes-2
			attrNames = value && value.match( rnothtmlwhite );

		if ( attrNames && elem.nodeType === 1 ) {
			while ( ( name = attrNames[ i++ ] ) ) {
				elem.removeAttribute( name );
			}
		}
	}
} );

// Hooks for boolean attributes
boolHook = {
	set: function( elem, value, name ) {
		if ( value === false ) {

			// Remove boolean attributes when set to false
			jQuery.removeAttr( elem, name );
		} else {
			elem.setAttribute( name, name );
		}
		return name;
	}
};

jQuery.each( jQuery.expr.match.bool.source.match( /\w+/g ), function( i, name ) {
	var getter = attrHandle[ name ] || jQuery.find.attr;

	attrHandle[ name ] = function( elem, name, isXML ) {
		var ret, handle,
			lowercaseName = name.toLowerCase();

		if ( !isXML ) {

			// Avoid an infinite loop by temporarily removing this function from the getter
			handle = attrHandle[ lowercaseName ];
			attrHandle[ lowercaseName ] = ret;
			ret = getter( elem, name, isXML ) != null ?
				lowercaseName :
				null;
			attrHandle[ lowercaseName ] = handle;
		}
		return ret;
	};
} );




var rfocusable = /^(?:input|select|textarea|button)$/i,
	rclickable = /^(?:a|area)$/i;

jQuery.fn.extend( {
	prop: function( name, value ) {
		return access( this, jQuery.prop, name, value, arguments.length > 1 );
	},

	removeProp: function( name ) {
		return this.each( function() {
			delete this[ jQuery.propFix[ name ] || name ];
		} );
	}
} );

jQuery.extend( {
	prop: function( elem, name, value ) {
		var ret, hooks,
			nType = elem.nodeType;

		// Don't get/set properties on text, comment and attribute nodes
		if ( nType === 3 || nType === 8 || nType === 2 ) {
			return;
		}

		if ( nType !== 1 || !jQuery.isXMLDoc( elem ) ) {

			// Fix name and attach hooks
			name = jQuery.propFix[ name ] || name;
			hooks = jQuery.propHooks[ name ];
		}

		if ( value !== undefined ) {
			if ( hooks && "set" in hooks &&
				( ret = hooks.set( elem, value, name ) ) !== undefined ) {
				return ret;
			}

			return ( elem[ name ] = value );
		}

		if ( hooks && "get" in hooks && ( ret = hooks.get( elem, name ) ) !== null ) {
			return ret;
		}

		return elem[ name ];
	},

	propHooks: {
		tabIndex: {
			get: function( elem ) {

				// Support: IE <=9 - 11 only
				// elem.tabIndex doesn't always return the
				// correct value when it hasn't been explicitly set
				// https://web.archive.org/web/20141116233347/http://fluidproject.org/blog/2008/01/09/getting-setting-and-removing-tabindex-values-with-javascript/
				// Use proper attribute retrieval(#12072)
				var tabindex = jQuery.find.attr( elem, "tabindex" );

				if ( tabindex ) {
					return parseInt( tabindex, 10 );
				}

				if (
					rfocusable.test( elem.nodeName ) ||
					rclickable.test( elem.nodeName ) &&
					elem.href
				) {
					return 0;
				}

				return -1;
			}
		}
	},

	propFix: {
		"for": "htmlFor",
		"class": "className"
	}
} );

// Support: IE <=11 only
// Accessing the selectedIndex property
// forces the browser to respect setting selected
// on the option
// The getter ensures a default option is selected
// when in an optgroup
// eslint rule "no-unused-expressions" is disabled for this code
// since it considers such accessions noop
if ( !support.optSelected ) {
	jQuery.propHooks.selected = {
		get: function( elem ) {

			/* eslint no-unused-expressions: "off" */

			var parent = elem.parentNode;
			if ( parent && parent.parentNode ) {
				parent.parentNode.selectedIndex;
			}
			return null;
		},
		set: function( elem ) {

			/* eslint no-unused-expressions: "off" */

			var parent = elem.parentNode;
			if ( parent ) {
				parent.selectedIndex;

				if ( parent.parentNode ) {
					parent.parentNode.selectedIndex;
				}
			}
		}
	};
}

jQuery.each( [
	"tabIndex",
	"readOnly",
	"maxLength",
	"cellSpacing",
	"cellPadding",
	"rowSpan",
	"colSpan",
	"useMap",
	"frameBorder",
	"contentEditable"
], function() {
	jQuery.propFix[ this.toLowerCase() ] = this;
} );




	// Strip and collapse whitespace according to HTML spec
	// https://html.spec.whatwg.org/multipage/infrastructure.html#strip-and-collapse-whitespace
	function stripAndCollapse( value ) {
		var tokens = value.match( rnothtmlwhite ) || [];
		return tokens.join( " " );
	}


function getClass( elem ) {
	return elem.getAttribute && elem.getAttribute( "class" ) || "";
}

jQuery.fn.extend( {
	addClass: function( value ) {
		var classes, elem, cur, curValue, clazz, j, finalValue,
			i = 0;

		if ( jQuery.isFunction( value ) ) {
			return this.each( function( j ) {
				jQuery( this ).addClass( value.call( this, j, getClass( this ) ) );
			} );
		}

		if ( typeof value === "string" && value ) {
			classes = value.match( rnothtmlwhite ) || [];

			while ( ( elem = this[ i++ ] ) ) {
				curValue = getClass( elem );
				cur = elem.nodeType === 1 && ( " " + stripAndCollapse( curValue ) + " " );

				if ( cur ) {
					j = 0;
					while ( ( clazz = classes[ j++ ] ) ) {
						if ( cur.indexOf( " " + clazz + " " ) < 0 ) {
							cur += clazz + " ";
						}
					}

					// Only assign if different to avoid unneeded rendering.
					finalValue = stripAndCollapse( cur );
					if ( curValue !== finalValue ) {
						elem.setAttribute( "class", finalValue );
					}
				}
			}
		}

		return this;
	},

	removeClass: function( value ) {
		var classes, elem, cur, curValue, clazz, j, finalValue,
			i = 0;

		if ( jQuery.isFunction( value ) ) {
			return this.each( function( j ) {
				jQuery( this ).removeClass( value.call( this, j, getClass( this ) ) );
			} );
		}

		if ( !arguments.length ) {
			return this.attr( "class", "" );
		}

		if ( typeof value === "string" && value ) {
			classes = value.match( rnothtmlwhite ) || [];

			while ( ( elem = this[ i++ ] ) ) {
				curValue = getClass( elem );

				// This expression is here for better compressibility (see addClass)
				cur = elem.nodeType === 1 && ( " " + stripAndCollapse( curValue ) + " " );

				if ( cur ) {
					j = 0;
					while ( ( clazz = classes[ j++ ] ) ) {

						// Remove *all* instances
						while ( cur.indexOf( " " + clazz + " " ) > -1 ) {
							cur = cur.replace( " " + clazz + " ", " " );
						}
					}

					// Only assign if different to avoid unneeded rendering.
					finalValue = stripAndCollapse( cur );
					if ( curValue !== finalValue ) {
						elem.setAttribute( "class", finalValue );
					}
				}
			}
		}

		return this;
	},

	toggleClass: function( value, stateVal ) {
		var type = typeof value;

		if ( typeof stateVal === "boolean" && type === "string" ) {
			return stateVal ? this.addClass( value ) : this.removeClass( value );
		}

		if ( jQuery.isFunction( value ) ) {
			return this.each( function( i ) {
				jQuery( this ).toggleClass(
					value.call( this, i, getClass( this ), stateVal ),
					stateVal
				);
			} );
		}

		return this.each( function() {
			var className, i, self, classNames;

			if ( type === "string" ) {

				// Toggle individual class names
				i = 0;
				self = jQuery( this );
				classNames = value.match( rnothtmlwhite ) || [];

				while ( ( className = classNames[ i++ ] ) ) {

					// Check each className given, space separated list
					if ( self.hasClass( className ) ) {
						self.removeClass( className );
					} else {
						self.addClass( className );
					}
				}

			// Toggle whole class name
			} else if ( value === undefined || type === "boolean" ) {
				className = getClass( this );
				if ( className ) {

					// Store className if set
					dataPriv.set( this, "__className__", className );
				}

				// If the element has a class name or if we're passed `false`,
				// then remove the whole classname (if there was one, the above saved it).
				// Otherwise bring back whatever was previously saved (if anything),
				// falling back to the empty string if nothing was stored.
				if ( this.setAttribute ) {
					this.setAttribute( "class",
						className || value === false ?
						"" :
						dataPriv.get( this, "__className__" ) || ""
					);
				}
			}
		} );
	},

	hasClass: function( selector ) {
		var className, elem,
			i = 0;

		className = " " + selector + " ";
		while ( ( elem = this[ i++ ] ) ) {
			if ( elem.nodeType === 1 &&
				( " " + stripAndCollapse( getClass( elem ) ) + " " ).indexOf( className ) > -1 ) {
					return true;
			}
		}

		return false;
	}
} );




var rreturn = /\r/g;

jQuery.fn.extend( {
	val: function( value ) {
		var hooks, ret, isFunction,
			elem = this[ 0 ];

		if ( !arguments.length ) {
			if ( elem ) {
				hooks = jQuery.valHooks[ elem.type ] ||
					jQuery.valHooks[ elem.nodeName.toLowerCase() ];

				if ( hooks &&
					"get" in hooks &&
					( ret = hooks.get( elem, "value" ) ) !== undefined
				) {
					return ret;
				}

				ret = elem.value;

				// Handle most common string cases
				if ( typeof ret === "string" ) {
					return ret.replace( rreturn, "" );
				}

				// Handle cases where value is null/undef or number
				return ret == null ? "" : ret;
			}

			return;
		}

		isFunction = jQuery.isFunction( value );

		return this.each( function( i ) {
			var val;

			if ( this.nodeType !== 1 ) {
				return;
			}

			if ( isFunction ) {
				val = value.call( this, i, jQuery( this ).val() );
			} else {
				val = value;
			}

			// Treat null/undefined as ""; convert numbers to string
			if ( val == null ) {
				val = "";

			} else if ( typeof val === "number" ) {
				val += "";

			} else if ( Array.isArray( val ) ) {
				val = jQuery.map( val, function( value ) {
					return value == null ? "" : value + "";
				} );
			}

			hooks = jQuery.valHooks[ this.type ] || jQuery.valHooks[ this.nodeName.toLowerCase() ];

			// If set returns undefined, fall back to normal setting
			if ( !hooks || !( "set" in hooks ) || hooks.set( this, val, "value" ) === undefined ) {
				this.value = val;
			}
		} );
	}
} );

jQuery.extend( {
	valHooks: {
		option: {
			get: function( elem ) {

				var val = jQuery.find.attr( elem, "value" );
				return val != null ?
					val :

					// Support: IE <=10 - 11 only
					// option.text throws exceptions (#14686, #14858)
					// Strip and collapse whitespace
					// https://html.spec.whatwg.org/#strip-and-collapse-whitespace
					stripAndCollapse( jQuery.text( elem ) );
			}
		},
		select: {
			get: function( elem ) {
				var value, option, i,
					options = elem.options,
					index = elem.selectedIndex,
					one = elem.type === "select-one",
					values = one ? null : [],
					max = one ? index + 1 : options.length;

				if ( index < 0 ) {
					i = max;

				} else {
					i = one ? index : 0;
				}

				// Loop through all the selected options
				for ( ; i < max; i++ ) {
					option = options[ i ];

					// Support: IE <=9 only
					// IE8-9 doesn't update selected after form reset (#2551)
					if ( ( option.selected || i === index ) &&

							// Don't return options that are disabled or in a disabled optgroup
							!option.disabled &&
							( !option.parentNode.disabled ||
								!nodeName( option.parentNode, "optgroup" ) ) ) {

						// Get the specific value for the option
						value = jQuery( option ).val();

						// We don't need an array for one selects
						if ( one ) {
							return value;
						}

						// Multi-Selects return an array
						values.push( value );
					}
				}

				return values;
			},

			set: function( elem, value ) {
				var optionSet, option,
					options = elem.options,
					values = jQuery.makeArray( value ),
					i = options.length;

				while ( i-- ) {
					option = options[ i ];

					/* eslint-disable no-cond-assign */

					if ( option.selected =
						jQuery.inArray( jQuery.valHooks.option.get( option ), values ) > -1
					) {
						optionSet = true;
					}

					/* eslint-enable no-cond-assign */
				}

				// Force browsers to behave consistently when non-matching value is set
				if ( !optionSet ) {
					elem.selectedIndex = -1;
				}
				return values;
			}
		}
	}
} );

// Radios and checkboxes getter/setter
jQuery.each( [ "radio", "checkbox" ], function() {
	jQuery.valHooks[ this ] = {
		set: function( elem, value ) {
			if ( Array.isArray( value ) ) {
				return ( elem.checked = jQuery.inArray( jQuery( elem ).val(), value ) > -1 );
			}
		}
	};
	if ( !support.checkOn ) {
		jQuery.valHooks[ this ].get = function( elem ) {
			return elem.getAttribute( "value" ) === null ? "on" : elem.value;
		};
	}
} );




// Return jQuery for attributes-only inclusion


var rfocusMorph = /^(?:focusinfocus|focusoutblur)$/;

jQuery.extend( jQuery.event, {

	trigger: function( event, data, elem, onlyHandlers ) {

		var i, cur, tmp, bubbleType, ontype, handle, special,
			eventPath = [ elem || document ],
			type = hasOwn.call( event, "type" ) ? event.type : event,
			namespaces = hasOwn.call( event, "namespace" ) ? event.namespace.split( "." ) : [];

		cur = tmp = elem = elem || document;

		// Don't do events on text and comment nodes
		if ( elem.nodeType === 3 || elem.nodeType === 8 ) {
			return;
		}

		// focus/blur morphs to focusin/out; ensure we're not firing them right now
		if ( rfocusMorph.test( type + jQuery.event.triggered ) ) {
			return;
		}

		if ( type.indexOf( "." ) > -1 ) {

			// Namespaced trigger; create a regexp to match event type in handle()
			namespaces = type.split( "." );
			type = namespaces.shift();
			namespaces.sort();
		}
		ontype = type.indexOf( ":" ) < 0 && "on" + type;

		// Caller can pass in a jQuery.Event object, Object, or just an event type string
		event = event[ jQuery.expando ] ?
			event :
			new jQuery.Event( type, typeof event === "object" && event );

		// Trigger bitmask: & 1 for native handlers; & 2 for jQuery (always true)
		event.isTrigger = onlyHandlers ? 2 : 3;
		event.namespace = namespaces.join( "." );
		event.rnamespace = event.namespace ?
			new RegExp( "(^|\\.)" + namespaces.join( "\\.(?:.*\\.|)" ) + "(\\.|$)" ) :
			null;

		// Clean up the event in case it is being reused
		event.result = undefined;
		if ( !event.target ) {
			event.target = elem;
		}

		// Clone any incoming data and prepend the event, creating the handler arg list
		data = data == null ?
			[ event ] :
			jQuery.makeArray( data, [ event ] );

		// Allow special events to draw outside the lines
		special = jQuery.event.special[ type ] || {};
		if ( !onlyHandlers && special.trigger && special.trigger.apply( elem, data ) === false ) {
			return;
		}

		// Determine event propagation path in advance, per W3C events spec (#9951)
		// Bubble up to document, then to window; watch for a global ownerDocument var (#9724)
		if ( !onlyHandlers && !special.noBubble && !jQuery.isWindow( elem ) ) {

			bubbleType = special.delegateType || type;
			if ( !rfocusMorph.test( bubbleType + type ) ) {
				cur = cur.parentNode;
			}
			for ( ; cur; cur = cur.parentNode ) {
				eventPath.push( cur );
				tmp = cur;
			}

			// Only add window if we got to document (e.g., not plain obj or detached DOM)
			if ( tmp === ( elem.ownerDocument || document ) ) {
				eventPath.push( tmp.defaultView || tmp.parentWindow || window );
			}
		}

		// Fire handlers on the event path
		i = 0;
		while ( ( cur = eventPath[ i++ ] ) && !event.isPropagationStopped() ) {

			event.type = i > 1 ?
				bubbleType :
				special.bindType || type;

			// jQuery handler
			handle = ( dataPriv.get( cur, "events" ) || {} )[ event.type ] &&
				dataPriv.get( cur, "handle" );
			if ( handle ) {
				handle.apply( cur, data );
			}

			// Native handler
			handle = ontype && cur[ ontype ];
			if ( handle && handle.apply && acceptData( cur ) ) {
				event.result = handle.apply( cur, data );
				if ( event.result === false ) {
					event.preventDefault();
				}
			}
		}
		event.type = type;

		// If nobody prevented the default action, do it now
		if ( !onlyHandlers && !event.isDefaultPrevented() ) {

			if ( ( !special._default ||
				special._default.apply( eventPath.pop(), data ) === false ) &&
				acceptData( elem ) ) {

				// Call a native DOM method on the target with the same name as the event.
				// Don't do default actions on window, that's where global variables be (#6170)
				if ( ontype && jQuery.isFunction( elem[ type ] ) && !jQuery.isWindow( elem ) ) {

					// Don't re-trigger an onFOO event when we call its FOO() method
					tmp = elem[ ontype ];

					if ( tmp ) {
						elem[ ontype ] = null;
					}

					// Prevent re-triggering of the same event, since we already bubbled it above
					jQuery.event.triggered = type;
					elem[ type ]();
					jQuery.event.triggered = undefined;

					if ( tmp ) {
						elem[ ontype ] = tmp;
					}
				}
			}
		}

		return event.result;
	},

	// Piggyback on a donor event to simulate a different one
	// Used only for `focus(in | out)` events
	simulate: function( type, elem, event ) {
		var e = jQuery.extend(
			new jQuery.Event(),
			event,
			{
				type: type,
				isSimulated: true
			}
		);

		jQuery.event.trigger( e, null, elem );
	}

} );

jQuery.fn.extend( {

	trigger: function( type, data ) {
		return this.each( function() {
			jQuery.event.trigger( type, data, this );
		} );
	},
	triggerHandler: function( type, data ) {
		var elem = this[ 0 ];
		if ( elem ) {
			return jQuery.event.trigger( type, data, elem, true );
		}
	}
} );


jQuery.each( ( "blur focus focusin focusout resize scroll click dblclick " +
	"mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave " +
	"change select submit keydown keypress keyup contextmenu" ).split( " " ),
	function( i, name ) {

	// Handle event binding
	jQuery.fn[ name ] = function( data, fn ) {
		return arguments.length > 0 ?
			this.on( name, null, data, fn ) :
			this.trigger( name );
	};
} );

jQuery.fn.extend( {
	hover: function( fnOver, fnOut ) {
		return this.mouseenter( fnOver ).mouseleave( fnOut || fnOver );
	}
} );




support.focusin = "onfocusin" in window;


// Support: Firefox <=44
// Firefox doesn't have focus(in | out) events
// Related ticket - https://bugzilla.mozilla.org/show_bug.cgi?id=687787
//
// Support: Chrome <=48 - 49, Safari <=9.0 - 9.1
// focus(in | out) events fire after focus & blur events,
// which is spec violation - http://www.w3.org/TR/DOM-Level-3-Events/#events-focusevent-event-order
// Related ticket - https://bugs.chromium.org/p/chromium/issues/detail?id=449857
if ( !support.focusin ) {
	jQuery.each( { focus: "focusin", blur: "focusout" }, function( orig, fix ) {

		// Attach a single capturing handler on the document while someone wants focusin/focusout
		var handler = function( event ) {
			jQuery.event.simulate( fix, event.target, jQuery.event.fix( event ) );
		};

		jQuery.event.special[ fix ] = {
			setup: function() {
				var doc = this.ownerDocument || this,
					attaches = dataPriv.access( doc, fix );

				if ( !attaches ) {
					doc.addEventListener( orig, handler, true );
				}
				dataPriv.access( doc, fix, ( attaches || 0 ) + 1 );
			},
			teardown: function() {
				var doc = this.ownerDocument || this,
					attaches = dataPriv.access( doc, fix ) - 1;

				if ( !attaches ) {
					doc.removeEventListener( orig, handler, true );
					dataPriv.remove( doc, fix );

				} else {
					dataPriv.access( doc, fix, attaches );
				}
			}
		};
	} );
}
var location = window.location;

var nonce = jQuery.now();

var rquery = ( /\?/ );



// Cross-browser xml parsing
jQuery.parseXML = function( data ) {
	var xml;
	if ( !data || typeof data !== "string" ) {
		return null;
	}

	// Support: IE 9 - 11 only
	// IE throws on parseFromString with invalid input.
	try {
		xml = ( new window.DOMParser() ).parseFromString( data, "text/xml" );
	} catch ( e ) {
		xml = undefined;
	}

	if ( !xml || xml.getElementsByTagName( "parsererror" ).length ) {
		jQuery.error( "Invalid XML: " + data );
	}
	return xml;
};


var
	rbracket = /\[\]$/,
	rCRLF = /\r?\n/g,
	rsubmitterTypes = /^(?:submit|button|image|reset|file)$/i,
	rsubmittable = /^(?:input|select|textarea|keygen)/i;

function buildParams( prefix, obj, traditional, add ) {
	var name;

	if ( Array.isArray( obj ) ) {

		// Serialize array item.
		jQuery.each( obj, function( i, v ) {
			if ( traditional || rbracket.test( prefix ) ) {

				// Treat each array item as a scalar.
				add( prefix, v );

			} else {

				// Item is non-scalar (array or object), encode its numeric index.
				buildParams(
					prefix + "[" + ( typeof v === "object" && v != null ? i : "" ) + "]",
					v,
					traditional,
					add
				);
			}
		} );

	} else if ( !traditional && jQuery.type( obj ) === "object" ) {

		// Serialize object item.
		for ( name in obj ) {
			buildParams( prefix + "[" + name + "]", obj[ name ], traditional, add );
		}

	} else {

		// Serialize scalar item.
		add( prefix, obj );
	}
}

// Serialize an array of form elements or a set of
// key/values into a query string
jQuery.param = function( a, traditional ) {
	var prefix,
		s = [],
		add = function( key, valueOrFunction ) {

			// If value is a function, invoke it and use its return value
			var value = jQuery.isFunction( valueOrFunction ) ?
				valueOrFunction() :
				valueOrFunction;

			s[ s.length ] = encodeURIComponent( key ) + "=" +
				encodeURIComponent( value == null ? "" : value );
		};

	// If an array was passed in, assume that it is an array of form elements.
	if ( Array.isArray( a ) || ( a.jquery && !jQuery.isPlainObject( a ) ) ) {

		// Serialize the form elements
		jQuery.each( a, function() {
			add( this.name, this.value );
		} );

	} else {

		// If traditional, encode the "old" way (the way 1.3.2 or older
		// did it), otherwise encode params recursively.
		for ( prefix in a ) {
			buildParams( prefix, a[ prefix ], traditional, add );
		}
	}

	// Return the resulting serialization
	return s.join( "&" );
};

jQuery.fn.extend( {
	serialize: function() {
		return jQuery.param( this.serializeArray() );
	},
	serializeArray: function() {
		return this.map( function() {

			// Can add propHook for "elements" to filter or add form elements
			var elements = jQuery.prop( this, "elements" );
			return elements ? jQuery.makeArray( elements ) : this;
		} )
		.filter( function() {
			var type = this.type;

			// Use .is( ":disabled" ) so that fieldset[disabled] works
			return this.name && !jQuery( this ).is( ":disabled" ) &&
				rsubmittable.test( this.nodeName ) && !rsubmitterTypes.test( type ) &&
				( this.checked || !rcheckableType.test( type ) );
		} )
		.map( function( i, elem ) {
			var val = jQuery( this ).val();

			if ( val == null ) {
				return null;
			}

			if ( Array.isArray( val ) ) {
				return jQuery.map( val, function( val ) {
					return { name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
				} );
			}

			return { name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
		} ).get();
	}
} );


var
	r20 = /%20/g,
	rhash = /#.*$/,
	rantiCache = /([?&])_=[^&]*/,
	rheaders = /^(.*?):[ \t]*([^\r\n]*)$/mg,

	// #7653, #8125, #8152: local protocol detection
	rlocalProtocol = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
	rnoContent = /^(?:GET|HEAD)$/,
	rprotocol = /^\/\//,

	/* Prefilters
	 * 1) They are useful to introduce custom dataTypes (see ajax/jsonp.js for an example)
	 * 2) These are called:
	 *    - BEFORE asking for a transport
	 *    - AFTER param serialization (s.data is a string if s.processData is true)
	 * 3) key is the dataType
	 * 4) the catchall symbol "*" can be used
	 * 5) execution will start with transport dataType and THEN continue down to "*" if needed
	 */
	prefilters = {},

	/* Transports bindings
	 * 1) key is the dataType
	 * 2) the catchall symbol "*" can be used
	 * 3) selection will start with transport dataType and THEN go to "*" if needed
	 */
	transports = {},

	// Avoid comment-prolog char sequence (#10098); must appease lint and evade compression
	allTypes = "*/".concat( "*" ),

	// Anchor tag for parsing the document origin
	originAnchor = document.createElement( "a" );
	originAnchor.href = location.href;

// Base "constructor" for jQuery.ajaxPrefilter and jQuery.ajaxTransport
function addToPrefiltersOrTransports( structure ) {

	// dataTypeExpression is optional and defaults to "*"
	return function( dataTypeExpression, func ) {

		if ( typeof dataTypeExpression !== "string" ) {
			func = dataTypeExpression;
			dataTypeExpression = "*";
		}

		var dataType,
			i = 0,
			dataTypes = dataTypeExpression.toLowerCase().match( rnothtmlwhite ) || [];

		if ( jQuery.isFunction( func ) ) {

			// For each dataType in the dataTypeExpression
			while ( ( dataType = dataTypes[ i++ ] ) ) {

				// Prepend if requested
				if ( dataType[ 0 ] === "+" ) {
					dataType = dataType.slice( 1 ) || "*";
					( structure[ dataType ] = structure[ dataType ] || [] ).unshift( func );

				// Otherwise append
				} else {
					( structure[ dataType ] = structure[ dataType ] || [] ).push( func );
				}
			}
		}
	};
}

// Base inspection function for prefilters and transports
function inspectPrefiltersOrTransports( structure, options, originalOptions, jqXHR ) {

	var inspected = {},
		seekingTransport = ( structure === transports );

	function inspect( dataType ) {
		var selected;
		inspected[ dataType ] = true;
		jQuery.each( structure[ dataType ] || [], function( _, prefilterOrFactory ) {
			var dataTypeOrTransport = prefilterOrFactory( options, originalOptions, jqXHR );
			if ( typeof dataTypeOrTransport === "string" &&
				!seekingTransport && !inspected[ dataTypeOrTransport ] ) {

				options.dataTypes.unshift( dataTypeOrTransport );
				inspect( dataTypeOrTransport );
				return false;
			} else if ( seekingTransport ) {
				return !( selected = dataTypeOrTransport );
			}
		} );
		return selected;
	}

	return inspect( options.dataTypes[ 0 ] ) || !inspected[ "*" ] && inspect( "*" );
}

// A special extend for ajax options
// that takes "flat" options (not to be deep extended)
// Fixes #9887
function ajaxExtend( target, src ) {
	var key, deep,
		flatOptions = jQuery.ajaxSettings.flatOptions || {};

	for ( key in src ) {
		if ( src[ key ] !== undefined ) {
			( flatOptions[ key ] ? target : ( deep || ( deep = {} ) ) )[ key ] = src[ key ];
		}
	}
	if ( deep ) {
		jQuery.extend( true, target, deep );
	}

	return target;
}

/* Handles responses to an ajax request:
 * - finds the right dataType (mediates between content-type and expected dataType)
 * - returns the corresponding response
 */
function ajaxHandleResponses( s, jqXHR, responses ) {

	var ct, type, finalDataType, firstDataType,
		contents = s.contents,
		dataTypes = s.dataTypes;

	// Remove auto dataType and get content-type in the process
	while ( dataTypes[ 0 ] === "*" ) {
		dataTypes.shift();
		if ( ct === undefined ) {
			ct = s.mimeType || jqXHR.getResponseHeader( "Content-Type" );
		}
	}

	// Check if we're dealing with a known content-type
	if ( ct ) {
		for ( type in contents ) {
			if ( contents[ type ] && contents[ type ].test( ct ) ) {
				dataTypes.unshift( type );
				break;
			}
		}
	}

	// Check to see if we have a response for the expected dataType
	if ( dataTypes[ 0 ] in responses ) {
		finalDataType = dataTypes[ 0 ];
	} else {

		// Try convertible dataTypes
		for ( type in responses ) {
			if ( !dataTypes[ 0 ] || s.converters[ type + " " + dataTypes[ 0 ] ] ) {
				finalDataType = type;
				break;
			}
			if ( !firstDataType ) {
				firstDataType = type;
			}
		}

		// Or just use first one
		finalDataType = finalDataType || firstDataType;
	}

	// If we found a dataType
	// We add the dataType to the list if needed
	// and return the corresponding response
	if ( finalDataType ) {
		if ( finalDataType !== dataTypes[ 0 ] ) {
			dataTypes.unshift( finalDataType );
		}
		return responses[ finalDataType ];
	}
}

/* Chain conversions given the request and the original response
 * Also sets the responseXXX fields on the jqXHR instance
 */
function ajaxConvert( s, response, jqXHR, isSuccess ) {
	var conv2, current, conv, tmp, prev,
		converters = {},

		// Work with a copy of dataTypes in case we need to modify it for conversion
		dataTypes = s.dataTypes.slice();

	// Create converters map with lowercased keys
	if ( dataTypes[ 1 ] ) {
		for ( conv in s.converters ) {
			converters[ conv.toLowerCase() ] = s.converters[ conv ];
		}
	}

	current = dataTypes.shift();

	// Convert to each sequential dataType
	while ( current ) {

		if ( s.responseFields[ current ] ) {
			jqXHR[ s.responseFields[ current ] ] = response;
		}

		// Apply the dataFilter if provided
		if ( !prev && isSuccess && s.dataFilter ) {
			response = s.dataFilter( response, s.dataType );
		}

		prev = current;
		current = dataTypes.shift();

		if ( current ) {

			// There's only work to do if current dataType is non-auto
			if ( current === "*" ) {

				current = prev;

			// Convert response if prev dataType is non-auto and differs from current
			} else if ( prev !== "*" && prev !== current ) {

				// Seek a direct converter
				conv = converters[ prev + " " + current ] || converters[ "* " + current ];

				// If none found, seek a pair
				if ( !conv ) {
					for ( conv2 in converters ) {

						// If conv2 outputs current
						tmp = conv2.split( " " );
						if ( tmp[ 1 ] === current ) {

							// If prev can be converted to accepted input
							conv = converters[ prev + " " + tmp[ 0 ] ] ||
								converters[ "* " + tmp[ 0 ] ];
							if ( conv ) {

								// Condense equivalence converters
								if ( conv === true ) {
									conv = converters[ conv2 ];

								// Otherwise, insert the intermediate dataType
								} else if ( converters[ conv2 ] !== true ) {
									current = tmp[ 0 ];
									dataTypes.unshift( tmp[ 1 ] );
								}
								break;
							}
						}
					}
				}

				// Apply converter (if not an equivalence)
				if ( conv !== true ) {

					// Unless errors are allowed to bubble, catch and return them
					if ( conv && s.throws ) {
						response = conv( response );
					} else {
						try {
							response = conv( response );
						} catch ( e ) {
							return {
								state: "parsererror",
								error: conv ? e : "No conversion from " + prev + " to " + current
							};
						}
					}
				}
			}
		}
	}

	return { state: "success", data: response };
}

jQuery.extend( {

	// Counter for holding the number of active queries
	active: 0,

	// Last-Modified header cache for next request
	lastModified: {},
	etag: {},

	ajaxSettings: {
		url: location.href,
		type: "GET",
		isLocal: rlocalProtocol.test( location.protocol ),
		global: true,
		processData: true,
		async: true,
		contentType: "application/x-www-form-urlencoded; charset=UTF-8",

		/*
		timeout: 0,
		data: null,
		dataType: null,
		username: null,
		password: null,
		cache: null,
		throws: false,
		traditional: false,
		headers: {},
		*/

		accepts: {
			"*": allTypes,
			text: "text/plain",
			html: "text/html",
			xml: "application/xml, text/xml",
			json: "application/json, text/javascript"
		},

		contents: {
			xml: /\bxml\b/,
			html: /\bhtml/,
			json: /\bjson\b/
		},

		responseFields: {
			xml: "responseXML",
			text: "responseText",
			json: "responseJSON"
		},

		// Data converters
		// Keys separate source (or catchall "*") and destination types with a single space
		converters: {

			// Convert anything to text
			"* text": String,

			// Text to html (true = no transformation)
			"text html": true,

			// Evaluate text as a json expression
			"text json": JSON.parse,

			// Parse text as xml
			"text xml": jQuery.parseXML
		},

		// For options that shouldn't be deep extended:
		// you can add your own custom options here if
		// and when you create one that shouldn't be
		// deep extended (see ajaxExtend)
		flatOptions: {
			url: true,
			context: true
		}
	},

	// Creates a full fledged settings object into target
	// with both ajaxSettings and settings fields.
	// If target is omitted, writes into ajaxSettings.
	ajaxSetup: function( target, settings ) {
		return settings ?

			// Building a settings object
			ajaxExtend( ajaxExtend( target, jQuery.ajaxSettings ), settings ) :

			// Extending ajaxSettings
			ajaxExtend( jQuery.ajaxSettings, target );
	},

	ajaxPrefilter: addToPrefiltersOrTransports( prefilters ),
	ajaxTransport: addToPrefiltersOrTransports( transports ),

	// Main method
	ajax: function( url, options ) {

		// If url is an object, simulate pre-1.5 signature
		if ( typeof url === "object" ) {
			options = url;
			url = undefined;
		}

		// Force options to be an object
		options = options || {};

		var transport,

			// URL without anti-cache param
			cacheURL,

			// Response headers
			responseHeadersString,
			responseHeaders,

			// timeout handle
			timeoutTimer,

			// Url cleanup var
			urlAnchor,

			// Request state (becomes false upon send and true upon completion)
			completed,

			// To know if global events are to be dispatched
			fireGlobals,

			// Loop variable
			i,

			// uncached part of the url
			uncached,

			// Create the final options object
			s = jQuery.ajaxSetup( {}, options ),

			// Callbacks context
			callbackContext = s.context || s,

			// Context for global events is callbackContext if it is a DOM node or jQuery collection
			globalEventContext = s.context &&
				( callbackContext.nodeType || callbackContext.jquery ) ?
					jQuery( callbackContext ) :
					jQuery.event,

			// Deferreds
			deferred = jQuery.Deferred(),
			completeDeferred = jQuery.Callbacks( "once memory" ),

			// Status-dependent callbacks
			statusCode = s.statusCode || {},

			// Headers (they are sent all at once)
			requestHeaders = {},
			requestHeadersNames = {},

			// Default abort message
			strAbort = "canceled",

			// Fake xhr
			jqXHR = {
				readyState: 0,

				// Builds headers hashtable if needed
				getResponseHeader: function( key ) {
					var match;
					if ( completed ) {
						if ( !responseHeaders ) {
							responseHeaders = {};
							while ( ( match = rheaders.exec( responseHeadersString ) ) ) {
								responseHeaders[ match[ 1 ].toLowerCase() ] = match[ 2 ];
							}
						}
						match = responseHeaders[ key.toLowerCase() ];
					}
					return match == null ? null : match;
				},

				// Raw string
				getAllResponseHeaders: function() {
					return completed ? responseHeadersString : null;
				},

				// Caches the header
				setRequestHeader: function( name, value ) {
					if ( completed == null ) {
						name = requestHeadersNames[ name.toLowerCase() ] =
							requestHeadersNames[ name.toLowerCase() ] || name;
						requestHeaders[ name ] = value;
					}
					return this;
				},

				// Overrides response content-type header
				overrideMimeType: function( type ) {
					if ( completed == null ) {
						s.mimeType = type;
					}
					return this;
				},

				// Status-dependent callbacks
				statusCode: function( map ) {
					var code;
					if ( map ) {
						if ( completed ) {

							// Execute the appropriate callbacks
							jqXHR.always( map[ jqXHR.status ] );
						} else {

							// Lazy-add the new callbacks in a way that preserves old ones
							for ( code in map ) {
								statusCode[ code ] = [ statusCode[ code ], map[ code ] ];
							}
						}
					}
					return this;
				},

				// Cancel the request
				abort: function( statusText ) {
					var finalText = statusText || strAbort;
					if ( transport ) {
						transport.abort( finalText );
					}
					done( 0, finalText );
					return this;
				}
			};

		// Attach deferreds
		deferred.promise( jqXHR );

		// Add protocol if not provided (prefilters might expect it)
		// Handle falsy url in the settings object (#10093: consistency with old signature)
		// We also use the url parameter if available
		s.url = ( ( url || s.url || location.href ) + "" )
			.replace( rprotocol, location.protocol + "//" );

		// Alias method option to type as per ticket #12004
		s.type = options.method || options.type || s.method || s.type;

		// Extract dataTypes list
		s.dataTypes = ( s.dataType || "*" ).toLowerCase().match( rnothtmlwhite ) || [ "" ];

		// A cross-domain request is in order when the origin doesn't match the current origin.
		if ( s.crossDomain == null ) {
			urlAnchor = document.createElement( "a" );

			// Support: IE <=8 - 11, Edge 12 - 13
			// IE throws exception on accessing the href property if url is malformed,
			// e.g. http://example.com:80x/
			try {
				urlAnchor.href = s.url;

				// Support: IE <=8 - 11 only
				// Anchor's host property isn't correctly set when s.url is relative
				urlAnchor.href = urlAnchor.href;
				s.crossDomain = originAnchor.protocol + "//" + originAnchor.host !==
					urlAnchor.protocol + "//" + urlAnchor.host;
			} catch ( e ) {

				// If there is an error parsing the URL, assume it is crossDomain,
				// it can be rejected by the transport if it is invalid
				s.crossDomain = true;
			}
		}

		// Convert data if not already a string
		if ( s.data && s.processData && typeof s.data !== "string" ) {
			s.data = jQuery.param( s.data, s.traditional );
		}

		// Apply prefilters
		inspectPrefiltersOrTransports( prefilters, s, options, jqXHR );

		// If request was aborted inside a prefilter, stop there
		if ( completed ) {
			return jqXHR;
		}

		// We can fire global events as of now if asked to
		// Don't fire events if jQuery.event is undefined in an AMD-usage scenario (#15118)
		fireGlobals = jQuery.event && s.global;

		// Watch for a new set of requests
		if ( fireGlobals && jQuery.active++ === 0 ) {
			jQuery.event.trigger( "ajaxStart" );
		}

		// Uppercase the type
		s.type = s.type.toUpperCase();

		// Determine if request has content
		s.hasContent = !rnoContent.test( s.type );

		// Save the URL in case we're toying with the If-Modified-Since
		// and/or If-None-Match header later on
		// Remove hash to simplify url manipulation
		cacheURL = s.url.replace( rhash, "" );

		// More options handling for requests with no content
		if ( !s.hasContent ) {

			// Remember the hash so we can put it back
			uncached = s.url.slice( cacheURL.length );

			// If data is available, append data to url
			if ( s.data ) {
				cacheURL += ( rquery.test( cacheURL ) ? "&" : "?" ) + s.data;

				// #9682: remove data so that it's not used in an eventual retry
				delete s.data;
			}

			// Add or update anti-cache param if needed
			if ( s.cache === false ) {
				cacheURL = cacheURL.replace( rantiCache, "$1" );
				uncached = ( rquery.test( cacheURL ) ? "&" : "?" ) + "_=" + ( nonce++ ) + uncached;
			}

			// Put hash and anti-cache on the URL that will be requested (gh-1732)
			s.url = cacheURL + uncached;

		// Change '%20' to '+' if this is encoded form body content (gh-2658)
		} else if ( s.data && s.processData &&
			( s.contentType || "" ).indexOf( "application/x-www-form-urlencoded" ) === 0 ) {
			s.data = s.data.replace( r20, "+" );
		}

		// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
		if ( s.ifModified ) {
			if ( jQuery.lastModified[ cacheURL ] ) {
				jqXHR.setRequestHeader( "If-Modified-Since", jQuery.lastModified[ cacheURL ] );
			}
			if ( jQuery.etag[ cacheURL ] ) {
				jqXHR.setRequestHeader( "If-None-Match", jQuery.etag[ cacheURL ] );
			}
		}

		// Set the correct header, if data is being sent
		if ( s.data && s.hasContent && s.contentType !== false || options.contentType ) {
			jqXHR.setRequestHeader( "Content-Type", s.contentType );
		}

		// Set the Accepts header for the server, depending on the dataType
		jqXHR.setRequestHeader(
			"Accept",
			s.dataTypes[ 0 ] && s.accepts[ s.dataTypes[ 0 ] ] ?
				s.accepts[ s.dataTypes[ 0 ] ] +
					( s.dataTypes[ 0 ] !== "*" ? ", " + allTypes + "; q=0.01" : "" ) :
				s.accepts[ "*" ]
		);

		// Check for headers option
		for ( i in s.headers ) {
			jqXHR.setRequestHeader( i, s.headers[ i ] );
		}

		// Allow custom headers/mimetypes and early abort
		if ( s.beforeSend &&
			( s.beforeSend.call( callbackContext, jqXHR, s ) === false || completed ) ) {

			// Abort if not done already and return
			return jqXHR.abort();
		}

		// Aborting is no longer a cancellation
		strAbort = "abort";

		// Install callbacks on deferreds
		completeDeferred.add( s.complete );
		jqXHR.done( s.success );
		jqXHR.fail( s.error );

		// Get transport
		transport = inspectPrefiltersOrTransports( transports, s, options, jqXHR );

		// If no transport, we auto-abort
		if ( !transport ) {
			done( -1, "No Transport" );
		} else {
			jqXHR.readyState = 1;

			// Send global event
			if ( fireGlobals ) {
				globalEventContext.trigger( "ajaxSend", [ jqXHR, s ] );
			}

			// If request was aborted inside ajaxSend, stop there
			if ( completed ) {
				return jqXHR;
			}

			// Timeout
			if ( s.async && s.timeout > 0 ) {
				timeoutTimer = window.setTimeout( function() {
					jqXHR.abort( "timeout" );
				}, s.timeout );
			}

			try {
				completed = false;
				transport.send( requestHeaders, done );
			} catch ( e ) {

				// Rethrow post-completion exceptions
				if ( completed ) {
					throw e;
				}

				// Propagate others as results
				done( -1, e );
			}
		}

		// Callback for when everything is done
		function done( status, nativeStatusText, responses, headers ) {
			var isSuccess, success, error, response, modified,
				statusText = nativeStatusText;

			// Ignore repeat invocations
			if ( completed ) {
				return;
			}

			completed = true;

			// Clear timeout if it exists
			if ( timeoutTimer ) {
				window.clearTimeout( timeoutTimer );
			}

			// Dereference transport for early garbage collection
			// (no matter how long the jqXHR object will be used)
			transport = undefined;

			// Cache response headers
			responseHeadersString = headers || "";

			// Set readyState
			jqXHR.readyState = status > 0 ? 4 : 0;

			// Determine if successful
			isSuccess = status >= 200 && status < 300 || status === 304;

			// Get response data
			if ( responses ) {
				response = ajaxHandleResponses( s, jqXHR, responses );
			}

			// Convert no matter what (that way responseXXX fields are always set)
			response = ajaxConvert( s, response, jqXHR, isSuccess );

			// If successful, handle type chaining
			if ( isSuccess ) {

				// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
				if ( s.ifModified ) {
					modified = jqXHR.getResponseHeader( "Last-Modified" );
					if ( modified ) {
						jQuery.lastModified[ cacheURL ] = modified;
					}
					modified = jqXHR.getResponseHeader( "etag" );
					if ( modified ) {
						jQuery.etag[ cacheURL ] = modified;
					}
				}

				// if no content
				if ( status === 204 || s.type === "HEAD" ) {
					statusText = "nocontent";

				// if not modified
				} else if ( status === 304 ) {
					statusText = "notmodified";

				// If we have data, let's convert it
				} else {
					statusText = response.state;
					success = response.data;
					error = response.error;
					isSuccess = !error;
				}
			} else {

				// Extract error from statusText and normalize for non-aborts
				error = statusText;
				if ( status || !statusText ) {
					statusText = "error";
					if ( status < 0 ) {
						status = 0;
					}
				}
			}

			// Set data for the fake xhr object
			jqXHR.status = status;
			jqXHR.statusText = ( nativeStatusText || statusText ) + "";

			// Success/Error
			if ( isSuccess ) {
				deferred.resolveWith( callbackContext, [ success, statusText, jqXHR ] );
			} else {
				deferred.rejectWith( callbackContext, [ jqXHR, statusText, error ] );
			}

			// Status-dependent callbacks
			jqXHR.statusCode( statusCode );
			statusCode = undefined;

			if ( fireGlobals ) {
				globalEventContext.trigger( isSuccess ? "ajaxSuccess" : "ajaxError",
					[ jqXHR, s, isSuccess ? success : error ] );
			}

			// Complete
			completeDeferred.fireWith( callbackContext, [ jqXHR, statusText ] );

			if ( fireGlobals ) {
				globalEventContext.trigger( "ajaxComplete", [ jqXHR, s ] );

				// Handle the global AJAX counter
				if ( !( --jQuery.active ) ) {
					jQuery.event.trigger( "ajaxStop" );
				}
			}
		}

		return jqXHR;
	},

	getJSON: function( url, data, callback ) {
		return jQuery.get( url, data, callback, "json" );
	},

	getScript: function( url, callback ) {
		return jQuery.get( url, undefined, callback, "script" );
	}
} );

jQuery.each( [ "get", "post" ], function( i, method ) {
	jQuery[ method ] = function( url, data, callback, type ) {

		// Shift arguments if data argument was omitted
		if ( jQuery.isFunction( data ) ) {
			type = type || callback;
			callback = data;
			data = undefined;
		}

		// The url can be an options object (which then must have .url)
		return jQuery.ajax( jQuery.extend( {
			url: url,
			type: method,
			dataType: type,
			data: data,
			success: callback
		}, jQuery.isPlainObject( url ) && url ) );
	};
} );


jQuery._evalUrl = function( url ) {
	return jQuery.ajax( {
		url: url,

		// Make this explicit, since user can override this through ajaxSetup (#11264)
		type: "GET",
		dataType: "script",
		cache: true,
		async: false,
		global: false,
		"throws": true
	} );
};


jQuery.fn.extend( {
	wrapAll: function( html ) {
		var wrap;

		if ( this[ 0 ] ) {
			if ( jQuery.isFunction( html ) ) {
				html = html.call( this[ 0 ] );
			}

			// The elements to wrap the target around
			wrap = jQuery( html, this[ 0 ].ownerDocument ).eq( 0 ).clone( true );

			if ( this[ 0 ].parentNode ) {
				wrap.insertBefore( this[ 0 ] );
			}

			wrap.map( function() {
				var elem = this;

				while ( elem.firstElementChild ) {
					elem = elem.firstElementChild;
				}

				return elem;
			} ).append( this );
		}

		return this;
	},

	wrapInner: function( html ) {
		if ( jQuery.isFunction( html ) ) {
			return this.each( function( i ) {
				jQuery( this ).wrapInner( html.call( this, i ) );
			} );
		}

		return this.each( function() {
			var self = jQuery( this ),
				contents = self.contents();

			if ( contents.length ) {
				contents.wrapAll( html );

			} else {
				self.append( html );
			}
		} );
	},

	wrap: function( html ) {
		var isFunction = jQuery.isFunction( html );

		return this.each( function( i ) {
			jQuery( this ).wrapAll( isFunction ? html.call( this, i ) : html );
		} );
	},

	unwrap: function( selector ) {
		this.parent( selector ).not( "body" ).each( function() {
			jQuery( this ).replaceWith( this.childNodes );
		} );
		return this;
	}
} );


jQuery.expr.pseudos.hidden = function( elem ) {
	return !jQuery.expr.pseudos.visible( elem );
};
jQuery.expr.pseudos.visible = function( elem ) {
	return !!( elem.offsetWidth || elem.offsetHeight || elem.getClientRects().length );
};




jQuery.ajaxSettings.xhr = function() {
	try {
		return new window.XMLHttpRequest();
	} catch ( e ) {}
};

var xhrSuccessStatus = {

		// File protocol always yields status code 0, assume 200
		0: 200,

		// Support: IE <=9 only
		// #1450: sometimes IE returns 1223 when it should be 204
		1223: 204
	},
	xhrSupported = jQuery.ajaxSettings.xhr();

support.cors = !!xhrSupported && ( "withCredentials" in xhrSupported );
support.ajax = xhrSupported = !!xhrSupported;

jQuery.ajaxTransport( function( options ) {
	var callback, errorCallback;

	// Cross domain only allowed if supported through XMLHttpRequest
	if ( support.cors || xhrSupported && !options.crossDomain ) {
		return {
			send: function( headers, complete ) {
				var i,
					xhr = options.xhr();

				xhr.open(
					options.type,
					options.url,
					options.async,
					options.username,
					options.password
				);

				// Apply custom fields if provided
				if ( options.xhrFields ) {
					for ( i in options.xhrFields ) {
						xhr[ i ] = options.xhrFields[ i ];
					}
				}

				// Override mime type if needed
				if ( options.mimeType && xhr.overrideMimeType ) {
					xhr.overrideMimeType( options.mimeType );
				}

				// X-Requested-With header
				// For cross-domain requests, seeing as conditions for a preflight are
				// akin to a jigsaw puzzle, we simply never set it to be sure.
				// (it can always be set on a per-request basis or even using ajaxSetup)
				// For same-domain requests, won't change header if already provided.
				if ( !options.crossDomain && !headers[ "X-Requested-With" ] ) {
					headers[ "X-Requested-With" ] = "XMLHttpRequest";
				}

				// Set headers
				for ( i in headers ) {
					xhr.setRequestHeader( i, headers[ i ] );
				}

				// Callback
				callback = function( type ) {
					return function() {
						if ( callback ) {
							callback = errorCallback = xhr.onload =
								xhr.onerror = xhr.onabort = xhr.onreadystatechange = null;

							if ( type === "abort" ) {
								xhr.abort();
							} else if ( type === "error" ) {

								// Support: IE <=9 only
								// On a manual native abort, IE9 throws
								// errors on any property access that is not readyState
								if ( typeof xhr.status !== "number" ) {
									complete( 0, "error" );
								} else {
									complete(

										// File: protocol always yields status 0; see #8605, #14207
										xhr.status,
										xhr.statusText
									);
								}
							} else {
								complete(
									xhrSuccessStatus[ xhr.status ] || xhr.status,
									xhr.statusText,

									// Support: IE <=9 only
									// IE9 has no XHR2 but throws on binary (trac-11426)
									// For XHR2 non-text, let the caller handle it (gh-2498)
									( xhr.responseType || "text" ) !== "text"  ||
									typeof xhr.responseText !== "string" ?
										{ binary: xhr.response } :
										{ text: xhr.responseText },
									xhr.getAllResponseHeaders()
								);
							}
						}
					};
				};

				// Listen to events
				xhr.onload = callback();
				errorCallback = xhr.onerror = callback( "error" );

				// Support: IE 9 only
				// Use onreadystatechange to replace onabort
				// to handle uncaught aborts
				if ( xhr.onabort !== undefined ) {
					xhr.onabort = errorCallback;
				} else {
					xhr.onreadystatechange = function() {

						// Check readyState before timeout as it changes
						if ( xhr.readyState === 4 ) {

							// Allow onerror to be called first,
							// but that will not handle a native abort
							// Also, save errorCallback to a variable
							// as xhr.onerror cannot be accessed
							window.setTimeout( function() {
								if ( callback ) {
									errorCallback();
								}
							} );
						}
					};
				}

				// Create the abort callback
				callback = callback( "abort" );

				try {

					// Do send the request (this may raise an exception)
					xhr.send( options.hasContent && options.data || null );
				} catch ( e ) {

					// #14683: Only rethrow if this hasn't been notified as an error yet
					if ( callback ) {
						throw e;
					}
				}
			},

			abort: function() {
				if ( callback ) {
					callback();
				}
			}
		};
	}
} );




// Prevent auto-execution of scripts when no explicit dataType was provided (See gh-2432)
jQuery.ajaxPrefilter( function( s ) {
	if ( s.crossDomain ) {
		s.contents.script = false;
	}
} );

// Install script dataType
jQuery.ajaxSetup( {
	accepts: {
		script: "text/javascript, application/javascript, " +
			"application/ecmascript, application/x-ecmascript"
	},
	contents: {
		script: /\b(?:java|ecma)script\b/
	},
	converters: {
		"text script": function( text ) {
			jQuery.globalEval( text );
			return text;
		}
	}
} );

// Handle cache's special case and crossDomain
jQuery.ajaxPrefilter( "script", function( s ) {
	if ( s.cache === undefined ) {
		s.cache = false;
	}
	if ( s.crossDomain ) {
		s.type = "GET";
	}
} );

// Bind script tag hack transport
jQuery.ajaxTransport( "script", function( s ) {

	// This transport only deals with cross domain requests
	if ( s.crossDomain ) {
		var script, callback;
		return {
			send: function( _, complete ) {
				script = jQuery( "<script>" ).prop( {
					charset: s.scriptCharset,
					src: s.url
				} ).on(
					"load error",
					callback = function( evt ) {
						script.remove();
						callback = null;
						if ( evt ) {
							complete( evt.type === "error" ? 404 : 200, evt.type );
						}
					}
				);

				// Use native DOM manipulation to avoid our domManip AJAX trickery
				document.head.appendChild( script[ 0 ] );
			},
			abort: function() {
				if ( callback ) {
					callback();
				}
			}
		};
	}
} );




var oldCallbacks = [],
	rjsonp = /(=)\?(?=&|$)|\?\?/;

// Default jsonp settings
jQuery.ajaxSetup( {
	jsonp: "callback",
	jsonpCallback: function() {
		var callback = oldCallbacks.pop() || ( jQuery.expando + "_" + ( nonce++ ) );
		this[ callback ] = true;
		return callback;
	}
} );

// Detect, normalize options and install callbacks for jsonp requests
jQuery.ajaxPrefilter( "json jsonp", function( s, originalSettings, jqXHR ) {

	var callbackName, overwritten, responseContainer,
		jsonProp = s.jsonp !== false && ( rjsonp.test( s.url ) ?
			"url" :
			typeof s.data === "string" &&
				( s.contentType || "" )
					.indexOf( "application/x-www-form-urlencoded" ) === 0 &&
				rjsonp.test( s.data ) && "data"
		);

	// Handle iff the expected data type is "jsonp" or we have a parameter to set
	if ( jsonProp || s.dataTypes[ 0 ] === "jsonp" ) {

		// Get callback name, remembering preexisting value associated with it
		callbackName = s.jsonpCallback = jQuery.isFunction( s.jsonpCallback ) ?
			s.jsonpCallback() :
			s.jsonpCallback;

		// Insert callback into url or form data
		if ( jsonProp ) {
			s[ jsonProp ] = s[ jsonProp ].replace( rjsonp, "$1" + callbackName );
		} else if ( s.jsonp !== false ) {
			s.url += ( rquery.test( s.url ) ? "&" : "?" ) + s.jsonp + "=" + callbackName;
		}

		// Use data converter to retrieve json after script execution
		s.converters[ "script json" ] = function() {
			if ( !responseContainer ) {
				jQuery.error( callbackName + " was not called" );
			}
			return responseContainer[ 0 ];
		};

		// Force json dataType
		s.dataTypes[ 0 ] = "json";

		// Install callback
		overwritten = window[ callbackName ];
		window[ callbackName ] = function() {
			responseContainer = arguments;
		};

		// Clean-up function (fires after converters)
		jqXHR.always( function() {

			// If previous value didn't exist - remove it
			if ( overwritten === undefined ) {
				jQuery( window ).removeProp( callbackName );

			// Otherwise restore preexisting value
			} else {
				window[ callbackName ] = overwritten;
			}

			// Save back as free
			if ( s[ callbackName ] ) {

				// Make sure that re-using the options doesn't screw things around
				s.jsonpCallback = originalSettings.jsonpCallback;

				// Save the callback name for future use
				oldCallbacks.push( callbackName );
			}

			// Call if it was a function and we have a response
			if ( responseContainer && jQuery.isFunction( overwritten ) ) {
				overwritten( responseContainer[ 0 ] );
			}

			responseContainer = overwritten = undefined;
		} );

		// Delegate to script
		return "script";
	}
} );




// Support: Safari 8 only
// In Safari 8 documents created via document.implementation.createHTMLDocument
// collapse sibling forms: the second one becomes a child of the first one.
// Because of that, this security measure has to be disabled in Safari 8.
// https://bugs.webkit.org/show_bug.cgi?id=137337
support.createHTMLDocument = ( function() {
	var body = document.implementation.createHTMLDocument( "" ).body;
	body.innerHTML = "<form></form><form></form>";
	return body.childNodes.length === 2;
} )();


// Argument "data" should be string of html
// context (optional): If specified, the fragment will be created in this context,
// defaults to document
// keepScripts (optional): If true, will include scripts passed in the html string
jQuery.parseHTML = function( data, context, keepScripts ) {
	if ( typeof data !== "string" ) {
		return [];
	}
	if ( typeof context === "boolean" ) {
		keepScripts = context;
		context = false;
	}

	var base, parsed, scripts;

	if ( !context ) {

		// Stop scripts or inline event handlers from being executed immediately
		// by using document.implementation
		if ( support.createHTMLDocument ) {
			context = document.implementation.createHTMLDocument( "" );

			// Set the base href for the created document
			// so any parsed elements with URLs
			// are based on the document's URL (gh-2965)
			base = context.createElement( "base" );
			base.href = document.location.href;
			context.head.appendChild( base );
		} else {
			context = document;
		}
	}

	parsed = rsingleTag.exec( data );
	scripts = !keepScripts && [];

	// Single tag
	if ( parsed ) {
		return [ context.createElement( parsed[ 1 ] ) ];
	}

	parsed = buildFragment( [ data ], context, scripts );

	if ( scripts && scripts.length ) {
		jQuery( scripts ).remove();
	}

	return jQuery.merge( [], parsed.childNodes );
};


/**
 * Load a url into a page
 */
jQuery.fn.load = function( url, params, callback ) {
	var selector, type, response,
		self = this,
		off = url.indexOf( " " );

	if ( off > -1 ) {
		selector = stripAndCollapse( url.slice( off ) );
		url = url.slice( 0, off );
	}

	// If it's a function
	if ( jQuery.isFunction( params ) ) {

		// We assume that it's the callback
		callback = params;
		params = undefined;

	// Otherwise, build a param string
	} else if ( params && typeof params === "object" ) {
		type = "POST";
	}

	// If we have elements to modify, make the request
	if ( self.length > 0 ) {
		jQuery.ajax( {
			url: url,

			// If "type" variable is undefined, then "GET" method will be used.
			// Make value of this field explicit since
			// user can override it through ajaxSetup method
			type: type || "GET",
			dataType: "html",
			data: params
		} ).done( function( responseText ) {

			// Save response for use in complete callback
			response = arguments;

			self.html( selector ?

				// If a selector was specified, locate the right elements in a dummy div
				// Exclude scripts to avoid IE 'Permission Denied' errors
				jQuery( "<div>" ).append( jQuery.parseHTML( responseText ) ).find( selector ) :

				// Otherwise use the full result
				responseText );

		// If the request succeeds, this function gets "data", "status", "jqXHR"
		// but they are ignored because response was set above.
		// If it fails, this function gets "jqXHR", "status", "error"
		} ).always( callback && function( jqXHR, status ) {
			self.each( function() {
				callback.apply( this, response || [ jqXHR.responseText, status, jqXHR ] );
			} );
		} );
	}

	return this;
};




// Attach a bunch of functions for handling common AJAX events
jQuery.each( [
	"ajaxStart",
	"ajaxStop",
	"ajaxComplete",
	"ajaxError",
	"ajaxSuccess",
	"ajaxSend"
], function( i, type ) {
	jQuery.fn[ type ] = function( fn ) {
		return this.on( type, fn );
	};
} );




jQuery.expr.pseudos.animated = function( elem ) {
	return jQuery.grep( jQuery.timers, function( fn ) {
		return elem === fn.elem;
	} ).length;
};




jQuery.offset = {
	setOffset: function( elem, options, i ) {
		var curPosition, curLeft, curCSSTop, curTop, curOffset, curCSSLeft, calculatePosition,
			position = jQuery.css( elem, "position" ),
			curElem = jQuery( elem ),
			props = {};

		// Set position first, in-case top/left are set even on static elem
		if ( position === "static" ) {
			elem.style.position = "relative";
		}

		curOffset = curElem.offset();
		curCSSTop = jQuery.css( elem, "top" );
		curCSSLeft = jQuery.css( elem, "left" );
		calculatePosition = ( position === "absolute" || position === "fixed" ) &&
			( curCSSTop + curCSSLeft ).indexOf( "auto" ) > -1;

		// Need to be able to calculate position if either
		// top or left is auto and position is either absolute or fixed
		if ( calculatePosition ) {
			curPosition = curElem.position();
			curTop = curPosition.top;
			curLeft = curPosition.left;

		} else {
			curTop = parseFloat( curCSSTop ) || 0;
			curLeft = parseFloat( curCSSLeft ) || 0;
		}

		if ( jQuery.isFunction( options ) ) {

			// Use jQuery.extend here to allow modification of coordinates argument (gh-1848)
			options = options.call( elem, i, jQuery.extend( {}, curOffset ) );
		}

		if ( options.top != null ) {
			props.top = ( options.top - curOffset.top ) + curTop;
		}
		if ( options.left != null ) {
			props.left = ( options.left - curOffset.left ) + curLeft;
		}

		if ( "using" in options ) {
			options.using.call( elem, props );

		} else {
			curElem.css( props );
		}
	}
};

jQuery.fn.extend( {
	offset: function( options ) {

		// Preserve chaining for setter
		if ( arguments.length ) {
			return options === undefined ?
				this :
				this.each( function( i ) {
					jQuery.offset.setOffset( this, options, i );
				} );
		}

		var doc, docElem, rect, win,
			elem = this[ 0 ];

		if ( !elem ) {
			return;
		}

		// Return zeros for disconnected and hidden (display: none) elements (gh-2310)
		// Support: IE <=11 only
		// Running getBoundingClientRect on a
		// disconnected node in IE throws an error
		if ( !elem.getClientRects().length ) {
			return { top: 0, left: 0 };
		}

		rect = elem.getBoundingClientRect();

		doc = elem.ownerDocument;
		docElem = doc.documentElement;
		win = doc.defaultView;

		return {
			top: rect.top + win.pageYOffset - docElem.clientTop,
			left: rect.left + win.pageXOffset - docElem.clientLeft
		};
	},

	position: function() {
		if ( !this[ 0 ] ) {
			return;
		}

		var offsetParent, offset,
			elem = this[ 0 ],
			parentOffset = { top: 0, left: 0 };

		// Fixed elements are offset from window (parentOffset = {top:0, left: 0},
		// because it is its only offset parent
		if ( jQuery.css( elem, "position" ) === "fixed" ) {

			// Assume getBoundingClientRect is there when computed position is fixed
			offset = elem.getBoundingClientRect();

		} else {

			// Get *real* offsetParent
			offsetParent = this.offsetParent();

			// Get correct offsets
			offset = this.offset();
			if ( !nodeName( offsetParent[ 0 ], "html" ) ) {
				parentOffset = offsetParent.offset();
			}

			// Add offsetParent borders
			parentOffset = {
				top: parentOffset.top + jQuery.css( offsetParent[ 0 ], "borderTopWidth", true ),
				left: parentOffset.left + jQuery.css( offsetParent[ 0 ], "borderLeftWidth", true )
			};
		}

		// Subtract parent offsets and element margins
		return {
			top: offset.top - parentOffset.top - jQuery.css( elem, "marginTop", true ),
			left: offset.left - parentOffset.left - jQuery.css( elem, "marginLeft", true )
		};
	},

	// This method will return documentElement in the following cases:
	// 1) For the element inside the iframe without offsetParent, this method will return
	//    documentElement of the parent window
	// 2) For the hidden or detached element
	// 3) For body or html element, i.e. in case of the html node - it will return itself
	//
	// but those exceptions were never presented as a real life use-cases
	// and might be considered as more preferable results.
	//
	// This logic, however, is not guaranteed and can change at any point in the future
	offsetParent: function() {
		return this.map( function() {
			var offsetParent = this.offsetParent;

			while ( offsetParent && jQuery.css( offsetParent, "position" ) === "static" ) {
				offsetParent = offsetParent.offsetParent;
			}

			return offsetParent || documentElement;
		} );
	}
} );

// Create scrollLeft and scrollTop methods
jQuery.each( { scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function( method, prop ) {
	var top = "pageYOffset" === prop;

	jQuery.fn[ method ] = function( val ) {
		return access( this, function( elem, method, val ) {

			// Coalesce documents and windows
			var win;
			if ( jQuery.isWindow( elem ) ) {
				win = elem;
			} else if ( elem.nodeType === 9 ) {
				win = elem.defaultView;
			}

			if ( val === undefined ) {
				return win ? win[ prop ] : elem[ method ];
			}

			if ( win ) {
				win.scrollTo(
					!top ? val : win.pageXOffset,
					top ? val : win.pageYOffset
				);

			} else {
				elem[ method ] = val;
			}
		}, method, val, arguments.length );
	};
} );

// Support: Safari <=7 - 9.1, Chrome <=37 - 49
// Add the top/left cssHooks using jQuery.fn.position
// Webkit bug: https://bugs.webkit.org/show_bug.cgi?id=29084
// Blink bug: https://bugs.chromium.org/p/chromium/issues/detail?id=589347
// getComputedStyle returns percent when specified for top/left/bottom/right;
// rather than make the css module depend on the offset module, just check for it here
jQuery.each( [ "top", "left" ], function( i, prop ) {
	jQuery.cssHooks[ prop ] = addGetHookIf( support.pixelPosition,
		function( elem, computed ) {
			if ( computed ) {
				computed = curCSS( elem, prop );

				// If curCSS returns percentage, fallback to offset
				return rnumnonpx.test( computed ) ?
					jQuery( elem ).position()[ prop ] + "px" :
					computed;
			}
		}
	);
} );


// Create innerHeight, innerWidth, height, width, outerHeight and outerWidth methods
jQuery.each( { Height: "height", Width: "width" }, function( name, type ) {
	jQuery.each( { padding: "inner" + name, content: type, "": "outer" + name },
		function( defaultExtra, funcName ) {

		// Margin is only for outerHeight, outerWidth
		jQuery.fn[ funcName ] = function( margin, value ) {
			var chainable = arguments.length && ( defaultExtra || typeof margin !== "boolean" ),
				extra = defaultExtra || ( margin === true || value === true ? "margin" : "border" );

			return access( this, function( elem, type, value ) {
				var doc;

				if ( jQuery.isWindow( elem ) ) {

					// $( window ).outerWidth/Height return w/h including scrollbars (gh-1729)
					return funcName.indexOf( "outer" ) === 0 ?
						elem[ "inner" + name ] :
						elem.document.documentElement[ "client" + name ];
				}

				// Get document width or height
				if ( elem.nodeType === 9 ) {
					doc = elem.documentElement;

					// Either scroll[Width/Height] or offset[Width/Height] or client[Width/Height],
					// whichever is greatest
					return Math.max(
						elem.body[ "scroll" + name ], doc[ "scroll" + name ],
						elem.body[ "offset" + name ], doc[ "offset" + name ],
						doc[ "client" + name ]
					);
				}

				return value === undefined ?

					// Get width or height on the element, requesting but not forcing parseFloat
					jQuery.css( elem, type, extra ) :

					// Set width or height on the element
					jQuery.style( elem, type, value, extra );
			}, type, chainable ? margin : undefined, chainable );
		};
	} );
} );


jQuery.fn.extend( {

	bind: function( types, data, fn ) {
		return this.on( types, null, data, fn );
	},
	unbind: function( types, fn ) {
		return this.off( types, null, fn );
	},

	delegate: function( selector, types, data, fn ) {
		return this.on( types, selector, data, fn );
	},
	undelegate: function( selector, types, fn ) {

		// ( namespace ) or ( selector, types [, fn] )
		return arguments.length === 1 ?
			this.off( selector, "**" ) :
			this.off( types, selector || "**", fn );
	}
} );

jQuery.holdReady = function( hold ) {
	if ( hold ) {
		jQuery.readyWait++;
	} else {
		jQuery.ready( true );
	}
};
jQuery.isArray = Array.isArray;
jQuery.parseJSON = JSON.parse;
jQuery.nodeName = nodeName;




// Register as a named AMD module, since jQuery can be concatenated with other
// files that may use define, but not via a proper concatenation script that
// understands anonymous AMD modules. A named AMD is safest and most robust
// way to register. Lowercase jquery is used because AMD module names are
// derived from file names, and jQuery is normally delivered in a lowercase
// file name. Do this after creating the global so that if an AMD module wants
// to call noConflict to hide this version of jQuery, it will work.

// Note that for maximum portability, libraries that are not jQuery should
// declare themselves as anonymous modules, and avoid setting a global if an
// AMD loader is present. jQuery is a special case. For more information, see
// https://github.com/jrburke/requirejs/wiki/Updating-existing-libraries#wiki-anon

if ( true ) {
	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function() {
		return jQuery;
	}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
}




var

	// Map over jQuery in case of overwrite
	_jQuery = window.jQuery,

	// Map over the $ in case of overwrite
	_$ = window.$;

jQuery.noConflict = function( deep ) {
	if ( window.$ === jQuery ) {
		window.$ = _$;
	}

	if ( deep && window.jQuery === jQuery ) {
		window.jQuery = _jQuery;
	}

	return jQuery;
};

// Expose jQuery and $ identifiers, even in AMD
// (#7102#comment:10, https://github.com/jquery/jquery/pull/557)
// and CommonJS for browser emulators (#13566)
if ( !noGlobal ) {
	window.jQuery = window.$ = jQuery;
}




return jQuery;
} );


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {


__webpack_require__(2)

__webpack_require__(0)
__webpack_require__(8)


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(3);
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {"hmr":true}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(6)(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../node_modules/css-loader/index.js!../node_modules/postcss-loader/lib/index.js??ref--1-2!../node_modules/sass-loader/lib/loader.js!./landing-page.scss", function() {
			var newContent = require("!!../node_modules/css-loader/index.js!../node_modules/postcss-loader/lib/index.js??ref--1-2!../node_modules/sass-loader/lib/loader.js!./landing-page.scss");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)(undefined);
// imports


// module
exports.push([module.i, "body {\n  font-family: 'Lato', 'Helvetica Neue', Helvetica, Arial, sans-serif; }\n\nh1, h2, h3, h4, h5, h6 {\n  font-family: 'Lato', 'Helvetica Neue', Helvetica, Arial, sans-serif;\n  font-weight: 700; }\n\nheader.masthead {\n  position: relative;\n  background: url(" + __webpack_require__(5) + ") no-repeat center center;\n  background-size: cover;\n  padding-top: 8rem;\n  padding-bottom: 8rem; }\n\nheader.masthead .overlay {\n    position: absolute;\n    background-color: #e9ecef;\n    height: 100%;\n    width: 100%;\n    top: 0;\n    left: 0;\n    opacity: 0.3; }\n\nheader.masthead h1 {\n    font-size: 2rem;\n    color: #6c5353; }\n\n@media (min-width: 768px) {\n    header.masthead {\n      padding-top: 8rem;\n      padding-bottom: 8rem; }\n      header.masthead h1 {\n        font-size: 3rem; } }\n\n.showcase .showcase-text {\n  padding: 3rem; }\n\n.showcase .showcase-img {\n  min-height: 30rem;\n  background-size: cover; }\n\n@media (min-width: 768px) {\n  .showcase .showcase-text {\n    padding: 7rem; } }\n\n.features-icons {\n  padding-top: 6rem;\n  padding-bottom: 5rem; }\n\n.features-icons .features-icons-item {\n    max-width: 20rem; }\n\n.features-icons .features-icons-item .features-icons-icon {\n      height: 7rem; }\n\n.features-icons .features-icons-item .features-icons-icon i {\n        font-size: 4.5rem; }\n\n.features-icons .features-icons-item:hover .features-icons-icon i {\n      font-size: 5rem; }\n\n.testimonials {\n  padding-top: 7rem;\n  padding-bottom: 7rem; }\n\n.testimonials .testimonial-item {\n    max-width: 18rem; }\n\n.testimonials .testimonial-item img {\n      max-width: 12rem;\n      -webkit-box-shadow: 0px 5px 5px 0px #adb5bd;\n              box-shadow: 0px 5px 5px 0px #adb5bd; }\n\n.call-to-action {\n  position: relative;\n  background-color: #343a40;\n  background-size: cover;\n  padding-top: 7rem;\n  padding-bottom: 7rem; }\n\n.call-to-action .overlay {\n    position: absolute;\n    background-color: #212529;\n    height: 100%;\n    width: 100%;\n    top: 0;\n    left: 0;\n    opacity: 0.3; }\n\nfooter.footer {\n  padding-top: 2rem;\n  padding-bottom: 2rem; }\n\n/*!\n * Bootstrap v4.0.0-beta.3 (https://getbootstrap.com)\n * Copyright 2011-2017 The Bootstrap Authors\n * Copyright 2011-2017 Twitter, Inc.\n * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)\n */\n\n*, *::before, *::after {\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box; }\n\nhtml {\n  font-family: sans-serif;\n  line-height: 1.15;\n  -webkit-text-size-adjust: 100%;\n  -ms-text-size-adjust: 100%;\n  -ms-overflow-style: scrollbar;\n  -webkit-tap-highlight-color: transparent; }\n\n@-ms-viewport {\n  width: device-width; }\n\narticle, aside, dialog, figcaption, figure, footer, header, hgroup, main, nav, section {\n  display: block; }\n\nbody {\n  margin: 0;\n  font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\";\n  font-size: 1rem;\n  font-weight: 400;\n  line-height: 1.5;\n  color: #212529;\n  text-align: left;\n  background-color: #fff; }\n\n[tabindex=\"-1\"]:focus {\n  outline: 0 !important; }\n\nhr {\n  -webkit-box-sizing: content-box;\n          box-sizing: content-box;\n  height: 0;\n  overflow: visible; }\n\nh1, h2, h3, h4, h5, h6 {\n  margin-top: 0;\n  margin-bottom: 0.5rem; }\n\np {\n  margin-top: 0;\n  margin-bottom: 1rem; }\n\nabbr[title], abbr[data-original-title] {\n  text-decoration: underline;\n  -webkit-text-decoration: underline dotted;\n          text-decoration: underline dotted;\n  cursor: help;\n  border-bottom: 0; }\n\naddress {\n  margin-bottom: 1rem;\n  font-style: normal;\n  line-height: inherit; }\n\nol, ul, dl {\n  margin-top: 0;\n  margin-bottom: 1rem; }\n\nol ol, ul ul, ol ul, ul ol {\n  margin-bottom: 0; }\n\ndt {\n  font-weight: 700; }\n\ndd {\n  margin-bottom: .5rem;\n  margin-left: 0; }\n\nblockquote {\n  margin: 0 0 1rem; }\n\ndfn {\n  font-style: italic; }\n\nb, strong {\n  font-weight: bolder; }\n\nsmall {\n  font-size: 80%; }\n\nsub, sup {\n  position: relative;\n  font-size: 75%;\n  line-height: 0;\n  vertical-align: baseline; }\n\nsub {\n  bottom: -.25em; }\n\nsup {\n  top: -.5em; }\n\na {\n  color: #6c5353;\n  text-decoration: none;\n  background-color: transparent;\n  -webkit-text-decoration-skip: objects; }\n\na:hover {\n    color: #413232;\n    text-decoration: underline; }\n\na:not([href]):not([tabindex]) {\n  color: inherit;\n  text-decoration: none; }\n\na:not([href]):not([tabindex]):focus, a:not([href]):not([tabindex]):hover {\n    color: inherit;\n    text-decoration: none; }\n\na:not([href]):not([tabindex]):focus {\n    outline: 0; }\n\npre, code, kbd, samp {\n  font-family: monospace, monospace;\n  font-size: 1em; }\n\npre {\n  margin-top: 0;\n  margin-bottom: 1rem;\n  overflow: auto;\n  -ms-overflow-style: scrollbar; }\n\nfigure {\n  margin: 0 0 1rem; }\n\nimg {\n  vertical-align: middle;\n  border-style: none; }\n\nsvg:not(:root) {\n  overflow: hidden; }\n\na, area, button, [role=\"button\"], input:not([type=\"range\"]), label, select, summary, textarea {\n  -ms-touch-action: manipulation;\n      touch-action: manipulation; }\n\ntable {\n  border-collapse: collapse; }\n\ncaption {\n  padding-top: 0.75rem;\n  padding-bottom: 0.75rem;\n  color: #868e96;\n  text-align: left;\n  caption-side: bottom; }\n\nth {\n  text-align: inherit; }\n\nlabel {\n  display: inline-block;\n  margin-bottom: .5rem; }\n\nbutton {\n  border-radius: 0; }\n\nbutton:focus {\n  outline: 1px dotted;\n  outline: 5px auto -webkit-focus-ring-color; }\n\ninput, button, select, optgroup, textarea {\n  margin: 0;\n  font-family: inherit;\n  font-size: inherit;\n  line-height: inherit; }\n\nbutton, input {\n  overflow: visible; }\n\nbutton, select {\n  text-transform: none; }\n\nbutton, html [type=\"button\"], [type=\"reset\"], [type=\"submit\"] {\n  -webkit-appearance: button; }\n\nbutton::-moz-focus-inner, [type=\"button\"]::-moz-focus-inner, [type=\"reset\"]::-moz-focus-inner, [type=\"submit\"]::-moz-focus-inner {\n  padding: 0;\n  border-style: none; }\n\ninput[type=\"radio\"], input[type=\"checkbox\"] {\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  padding: 0; }\n\ninput[type=\"date\"], input[type=\"time\"], input[type=\"datetime-local\"], input[type=\"month\"] {\n  -webkit-appearance: listbox; }\n\ntextarea {\n  overflow: auto;\n  resize: vertical; }\n\nfieldset {\n  min-width: 0;\n  padding: 0;\n  margin: 0;\n  border: 0; }\n\nlegend {\n  display: block;\n  width: 100%;\n  max-width: 100%;\n  padding: 0;\n  margin-bottom: .5rem;\n  font-size: 1.5rem;\n  line-height: inherit;\n  color: inherit;\n  white-space: normal; }\n\nprogress {\n  vertical-align: baseline; }\n\n[type=\"number\"]::-webkit-inner-spin-button, [type=\"number\"]::-webkit-outer-spin-button {\n  height: auto; }\n\n[type=\"search\"] {\n  outline-offset: -2px;\n  -webkit-appearance: none; }\n\n[type=\"search\"]::-webkit-search-cancel-button, [type=\"search\"]::-webkit-search-decoration {\n  -webkit-appearance: none; }\n\n::-webkit-file-upload-button {\n  font: inherit;\n  -webkit-appearance: button; }\n\noutput {\n  display: inline-block; }\n\nsummary {\n  display: list-item;\n  cursor: pointer; }\n\ntemplate {\n  display: none; }\n\n[hidden] {\n  display: none !important; }\n\nh1, h2, h3, h4, h5, h6, .h1, .h2, .h3, .h4, .h5, .h6 {\n  margin-bottom: 0.5rem;\n  font-family: inherit;\n  font-weight: 500;\n  line-height: 1.2;\n  color: inherit; }\n\nh1, .h1 {\n  font-size: 2.5rem; }\n\nh2, .h2 {\n  font-size: 2rem; }\n\nh3, .h3 {\n  font-size: 1.75rem; }\n\nh4, .h4 {\n  font-size: 1.5rem; }\n\nh5, .h5 {\n  font-size: 1.25rem; }\n\nh6, .h6 {\n  font-size: 1rem; }\n\n.lead {\n  font-size: 1.25rem;\n  font-weight: 300; }\n\n.display-1 {\n  font-size: 6rem;\n  font-weight: 300;\n  line-height: 1.2; }\n\n.display-2 {\n  font-size: 5.5rem;\n  font-weight: 300;\n  line-height: 1.2; }\n\n.display-3 {\n  font-size: 4.5rem;\n  font-weight: 300;\n  line-height: 1.2; }\n\n.display-4 {\n  font-size: 3.5rem;\n  font-weight: 300;\n  line-height: 1.2; }\n\nhr {\n  margin-top: 1rem;\n  margin-bottom: 1rem;\n  border: 0;\n  border-top: 1px solid rgba(0, 0, 0, 0.1); }\n\nsmall, .small {\n  font-size: 80%;\n  font-weight: 400; }\n\nmark, .mark {\n  padding: 0.2em;\n  background-color: #fcf8e3; }\n\n.list-unstyled {\n  padding-left: 0;\n  list-style: none; }\n\n.list-inline {\n  padding-left: 0;\n  list-style: none; }\n\n.list-inline-item {\n  display: inline-block; }\n\n.list-inline-item:not(:last-child) {\n    margin-right: 0.5rem; }\n\n.initialism {\n  font-size: 90%;\n  text-transform: uppercase; }\n\n.blockquote {\n  margin-bottom: 1rem;\n  font-size: 1.25rem; }\n\n.blockquote-footer {\n  display: block;\n  font-size: 80%;\n  color: #868e96; }\n\n.blockquote-footer::before {\n    content: \"\\2014   \\A0\"; }\n\n.img-fluid {\n  max-width: 100%;\n  height: auto; }\n\n.img-thumbnail {\n  padding: 0.25rem;\n  background-color: #fff;\n  border: 1px solid #dee2e6;\n  border-radius: 0.25rem;\n  max-width: 100%;\n  height: auto; }\n\n.figure {\n  display: inline-block; }\n\n.figure-img {\n  margin-bottom: 0.5rem;\n  line-height: 1; }\n\n.figure-caption {\n  font-size: 90%;\n  color: #868e96; }\n\ncode, kbd, pre, samp {\n  font-family: SFMono-Regular, Menlo, Monaco, Consolas, \"Liberation Mono\", \"Courier New\", monospace; }\n\ncode {\n  font-size: 87.5%;\n  color: #e83e8c;\n  word-break: break-word; }\n\na > code {\n    color: inherit; }\n\nkbd {\n  padding: 0.2rem 0.4rem;\n  font-size: 87.5%;\n  color: #fff;\n  background-color: #212529;\n  border-radius: 0.2rem; }\n\nkbd kbd {\n    padding: 0;\n    font-size: 100%;\n    font-weight: 700; }\n\npre {\n  display: block;\n  font-size: 87.5%;\n  color: #212529; }\n\npre code {\n    font-size: inherit;\n    color: inherit;\n    word-break: normal; }\n\n.pre-scrollable {\n  max-height: 340px;\n  overflow-y: scroll; }\n\n.container {\n  width: 100%;\n  padding-right: 15px;\n  padding-left: 15px;\n  margin-right: auto;\n  margin-left: auto; }\n\n@media (min-width: 576px) {\n    .container {\n      max-width: 540px; } }\n\n@media (min-width: 768px) {\n    .container {\n      max-width: 720px; } }\n\n@media (min-width: 992px) {\n    .container {\n      max-width: 960px; } }\n\n@media (min-width: 1200px) {\n    .container {\n      max-width: 1140px; } }\n\n.container-fluid {\n  width: 100%;\n  padding-right: 15px;\n  padding-left: 15px;\n  margin-right: auto;\n  margin-left: auto; }\n\n.row {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap;\n  margin-right: -15px;\n  margin-left: -15px; }\n\n.no-gutters {\n  margin-right: 0;\n  margin-left: 0; }\n\n.no-gutters > .col, .no-gutters > [class*=\"col-\"] {\n    padding-right: 0;\n    padding-left: 0; }\n\n.col-1, .col-2, .col-3, .col-4, .col-5, .col-6, .col-7, .col-8, .col-9, .col-10, .col-11, .col-12, .col, .col-auto, .col-sm-1, .col-sm-2, .col-sm-3, .col-sm-4, .col-sm-5, .col-sm-6, .col-sm-7, .col-sm-8, .col-sm-9, .col-sm-10, .col-sm-11, .col-sm-12, .col-sm, .col-sm-auto, .col-md-1, .col-md-2, .col-md-3, .col-md-4, .col-md-5, .col-md-6, .col-md-7, .col-md-8, .col-md-9, .col-md-10, .col-md-11, .col-md-12, .col-md, .col-md-auto, .col-lg-1, .col-lg-2, .col-lg-3, .col-lg-4, .col-lg-5, .col-lg-6, .col-lg-7, .col-lg-8, .col-lg-9, .col-lg-10, .col-lg-11, .col-lg-12, .col-lg, .col-lg-auto, .col-xl-1, .col-xl-2, .col-xl-3, .col-xl-4, .col-xl-5, .col-xl-6, .col-xl-7, .col-xl-8, .col-xl-9, .col-xl-10, .col-xl-11, .col-xl-12, .col-xl, .col-xl-auto {\n  position: relative;\n  width: 100%;\n  min-height: 1px;\n  padding-right: 15px;\n  padding-left: 15px; }\n\n.col {\n  -ms-flex-preferred-size: 0;\n      flex-basis: 0;\n  -webkit-box-flex: 1;\n      -ms-flex-positive: 1;\n          flex-grow: 1;\n  max-width: 100%; }\n\n.col-auto {\n  -webkit-box-flex: 0;\n      -ms-flex: 0 0 auto;\n          flex: 0 0 auto;\n  width: auto;\n  max-width: none; }\n\n.col-1 {\n  -webkit-box-flex: 0;\n      -ms-flex: 0 0 8.33333%;\n          flex: 0 0 8.33333%;\n  max-width: 8.33333%; }\n\n.col-2 {\n  -webkit-box-flex: 0;\n      -ms-flex: 0 0 16.66667%;\n          flex: 0 0 16.66667%;\n  max-width: 16.66667%; }\n\n.col-3 {\n  -webkit-box-flex: 0;\n      -ms-flex: 0 0 25%;\n          flex: 0 0 25%;\n  max-width: 25%; }\n\n.col-4 {\n  -webkit-box-flex: 0;\n      -ms-flex: 0 0 33.33333%;\n          flex: 0 0 33.33333%;\n  max-width: 33.33333%; }\n\n.col-5 {\n  -webkit-box-flex: 0;\n      -ms-flex: 0 0 41.66667%;\n          flex: 0 0 41.66667%;\n  max-width: 41.66667%; }\n\n.col-6 {\n  -webkit-box-flex: 0;\n      -ms-flex: 0 0 50%;\n          flex: 0 0 50%;\n  max-width: 50%; }\n\n.col-7 {\n  -webkit-box-flex: 0;\n      -ms-flex: 0 0 58.33333%;\n          flex: 0 0 58.33333%;\n  max-width: 58.33333%; }\n\n.col-8 {\n  -webkit-box-flex: 0;\n      -ms-flex: 0 0 66.66667%;\n          flex: 0 0 66.66667%;\n  max-width: 66.66667%; }\n\n.col-9 {\n  -webkit-box-flex: 0;\n      -ms-flex: 0 0 75%;\n          flex: 0 0 75%;\n  max-width: 75%; }\n\n.col-10 {\n  -webkit-box-flex: 0;\n      -ms-flex: 0 0 83.33333%;\n          flex: 0 0 83.33333%;\n  max-width: 83.33333%; }\n\n.col-11 {\n  -webkit-box-flex: 0;\n      -ms-flex: 0 0 91.66667%;\n          flex: 0 0 91.66667%;\n  max-width: 91.66667%; }\n\n.col-12 {\n  -webkit-box-flex: 0;\n      -ms-flex: 0 0 100%;\n          flex: 0 0 100%;\n  max-width: 100%; }\n\n.order-first {\n  -webkit-box-ordinal-group: 0;\n      -ms-flex-order: -1;\n          order: -1; }\n\n.order-1 {\n  -webkit-box-ordinal-group: 2;\n      -ms-flex-order: 1;\n          order: 1; }\n\n.order-2 {\n  -webkit-box-ordinal-group: 3;\n      -ms-flex-order: 2;\n          order: 2; }\n\n.order-3 {\n  -webkit-box-ordinal-group: 4;\n      -ms-flex-order: 3;\n          order: 3; }\n\n.order-4 {\n  -webkit-box-ordinal-group: 5;\n      -ms-flex-order: 4;\n          order: 4; }\n\n.order-5 {\n  -webkit-box-ordinal-group: 6;\n      -ms-flex-order: 5;\n          order: 5; }\n\n.order-6 {\n  -webkit-box-ordinal-group: 7;\n      -ms-flex-order: 6;\n          order: 6; }\n\n.order-7 {\n  -webkit-box-ordinal-group: 8;\n      -ms-flex-order: 7;\n          order: 7; }\n\n.order-8 {\n  -webkit-box-ordinal-group: 9;\n      -ms-flex-order: 8;\n          order: 8; }\n\n.order-9 {\n  -webkit-box-ordinal-group: 10;\n      -ms-flex-order: 9;\n          order: 9; }\n\n.order-10 {\n  -webkit-box-ordinal-group: 11;\n      -ms-flex-order: 10;\n          order: 10; }\n\n.order-11 {\n  -webkit-box-ordinal-group: 12;\n      -ms-flex-order: 11;\n          order: 11; }\n\n.order-12 {\n  -webkit-box-ordinal-group: 13;\n      -ms-flex-order: 12;\n          order: 12; }\n\n.offset-1 {\n  margin-left: 8.33333%; }\n\n.offset-2 {\n  margin-left: 16.66667%; }\n\n.offset-3 {\n  margin-left: 25%; }\n\n.offset-4 {\n  margin-left: 33.33333%; }\n\n.offset-5 {\n  margin-left: 41.66667%; }\n\n.offset-6 {\n  margin-left: 50%; }\n\n.offset-7 {\n  margin-left: 58.33333%; }\n\n.offset-8 {\n  margin-left: 66.66667%; }\n\n.offset-9 {\n  margin-left: 75%; }\n\n.offset-10 {\n  margin-left: 83.33333%; }\n\n.offset-11 {\n  margin-left: 91.66667%; }\n\n@media (min-width: 576px) {\n  .col-sm {\n    -ms-flex-preferred-size: 0;\n        flex-basis: 0;\n    -webkit-box-flex: 1;\n        -ms-flex-positive: 1;\n            flex-grow: 1;\n    max-width: 100%; }\n  .col-sm-auto {\n    -webkit-box-flex: 0;\n        -ms-flex: 0 0 auto;\n            flex: 0 0 auto;\n    width: auto;\n    max-width: none; }\n  .col-sm-1 {\n    -webkit-box-flex: 0;\n        -ms-flex: 0 0 8.33333%;\n            flex: 0 0 8.33333%;\n    max-width: 8.33333%; }\n  .col-sm-2 {\n    -webkit-box-flex: 0;\n        -ms-flex: 0 0 16.66667%;\n            flex: 0 0 16.66667%;\n    max-width: 16.66667%; }\n  .col-sm-3 {\n    -webkit-box-flex: 0;\n        -ms-flex: 0 0 25%;\n            flex: 0 0 25%;\n    max-width: 25%; }\n  .col-sm-4 {\n    -webkit-box-flex: 0;\n        -ms-flex: 0 0 33.33333%;\n            flex: 0 0 33.33333%;\n    max-width: 33.33333%; }\n  .col-sm-5 {\n    -webkit-box-flex: 0;\n        -ms-flex: 0 0 41.66667%;\n            flex: 0 0 41.66667%;\n    max-width: 41.66667%; }\n  .col-sm-6 {\n    -webkit-box-flex: 0;\n        -ms-flex: 0 0 50%;\n            flex: 0 0 50%;\n    max-width: 50%; }\n  .col-sm-7 {\n    -webkit-box-flex: 0;\n        -ms-flex: 0 0 58.33333%;\n            flex: 0 0 58.33333%;\n    max-width: 58.33333%; }\n  .col-sm-8 {\n    -webkit-box-flex: 0;\n        -ms-flex: 0 0 66.66667%;\n            flex: 0 0 66.66667%;\n    max-width: 66.66667%; }\n  .col-sm-9 {\n    -webkit-box-flex: 0;\n        -ms-flex: 0 0 75%;\n            flex: 0 0 75%;\n    max-width: 75%; }\n  .col-sm-10 {\n    -webkit-box-flex: 0;\n        -ms-flex: 0 0 83.33333%;\n            flex: 0 0 83.33333%;\n    max-width: 83.33333%; }\n  .col-sm-11 {\n    -webkit-box-flex: 0;\n        -ms-flex: 0 0 91.66667%;\n            flex: 0 0 91.66667%;\n    max-width: 91.66667%; }\n  .col-sm-12 {\n    -webkit-box-flex: 0;\n        -ms-flex: 0 0 100%;\n            flex: 0 0 100%;\n    max-width: 100%; }\n  .order-sm-first {\n    -webkit-box-ordinal-group: 0;\n        -ms-flex-order: -1;\n            order: -1; }\n  .order-sm-1 {\n    -webkit-box-ordinal-group: 2;\n        -ms-flex-order: 1;\n            order: 1; }\n  .order-sm-2 {\n    -webkit-box-ordinal-group: 3;\n        -ms-flex-order: 2;\n            order: 2; }\n  .order-sm-3 {\n    -webkit-box-ordinal-group: 4;\n        -ms-flex-order: 3;\n            order: 3; }\n  .order-sm-4 {\n    -webkit-box-ordinal-group: 5;\n        -ms-flex-order: 4;\n            order: 4; }\n  .order-sm-5 {\n    -webkit-box-ordinal-group: 6;\n        -ms-flex-order: 5;\n            order: 5; }\n  .order-sm-6 {\n    -webkit-box-ordinal-group: 7;\n        -ms-flex-order: 6;\n            order: 6; }\n  .order-sm-7 {\n    -webkit-box-ordinal-group: 8;\n        -ms-flex-order: 7;\n            order: 7; }\n  .order-sm-8 {\n    -webkit-box-ordinal-group: 9;\n        -ms-flex-order: 8;\n            order: 8; }\n  .order-sm-9 {\n    -webkit-box-ordinal-group: 10;\n        -ms-flex-order: 9;\n            order: 9; }\n  .order-sm-10 {\n    -webkit-box-ordinal-group: 11;\n        -ms-flex-order: 10;\n            order: 10; }\n  .order-sm-11 {\n    -webkit-box-ordinal-group: 12;\n        -ms-flex-order: 11;\n            order: 11; }\n  .order-sm-12 {\n    -webkit-box-ordinal-group: 13;\n        -ms-flex-order: 12;\n            order: 12; }\n  .offset-sm-0 {\n    margin-left: 0; }\n  .offset-sm-1 {\n    margin-left: 8.33333%; }\n  .offset-sm-2 {\n    margin-left: 16.66667%; }\n  .offset-sm-3 {\n    margin-left: 25%; }\n  .offset-sm-4 {\n    margin-left: 33.33333%; }\n  .offset-sm-5 {\n    margin-left: 41.66667%; }\n  .offset-sm-6 {\n    margin-left: 50%; }\n  .offset-sm-7 {\n    margin-left: 58.33333%; }\n  .offset-sm-8 {\n    margin-left: 66.66667%; }\n  .offset-sm-9 {\n    margin-left: 75%; }\n  .offset-sm-10 {\n    margin-left: 83.33333%; }\n  .offset-sm-11 {\n    margin-left: 91.66667%; } }\n\n@media (min-width: 768px) {\n  .col-md {\n    -ms-flex-preferred-size: 0;\n        flex-basis: 0;\n    -webkit-box-flex: 1;\n        -ms-flex-positive: 1;\n            flex-grow: 1;\n    max-width: 100%; }\n  .col-md-auto {\n    -webkit-box-flex: 0;\n        -ms-flex: 0 0 auto;\n            flex: 0 0 auto;\n    width: auto;\n    max-width: none; }\n  .col-md-1 {\n    -webkit-box-flex: 0;\n        -ms-flex: 0 0 8.33333%;\n            flex: 0 0 8.33333%;\n    max-width: 8.33333%; }\n  .col-md-2 {\n    -webkit-box-flex: 0;\n        -ms-flex: 0 0 16.66667%;\n            flex: 0 0 16.66667%;\n    max-width: 16.66667%; }\n  .col-md-3 {\n    -webkit-box-flex: 0;\n        -ms-flex: 0 0 25%;\n            flex: 0 0 25%;\n    max-width: 25%; }\n  .col-md-4 {\n    -webkit-box-flex: 0;\n        -ms-flex: 0 0 33.33333%;\n            flex: 0 0 33.33333%;\n    max-width: 33.33333%; }\n  .col-md-5 {\n    -webkit-box-flex: 0;\n        -ms-flex: 0 0 41.66667%;\n            flex: 0 0 41.66667%;\n    max-width: 41.66667%; }\n  .col-md-6 {\n    -webkit-box-flex: 0;\n        -ms-flex: 0 0 50%;\n            flex: 0 0 50%;\n    max-width: 50%; }\n  .col-md-7 {\n    -webkit-box-flex: 0;\n        -ms-flex: 0 0 58.33333%;\n            flex: 0 0 58.33333%;\n    max-width: 58.33333%; }\n  .col-md-8 {\n    -webkit-box-flex: 0;\n        -ms-flex: 0 0 66.66667%;\n            flex: 0 0 66.66667%;\n    max-width: 66.66667%; }\n  .col-md-9 {\n    -webkit-box-flex: 0;\n        -ms-flex: 0 0 75%;\n            flex: 0 0 75%;\n    max-width: 75%; }\n  .col-md-10 {\n    -webkit-box-flex: 0;\n        -ms-flex: 0 0 83.33333%;\n            flex: 0 0 83.33333%;\n    max-width: 83.33333%; }\n  .col-md-11 {\n    -webkit-box-flex: 0;\n        -ms-flex: 0 0 91.66667%;\n            flex: 0 0 91.66667%;\n    max-width: 91.66667%; }\n  .col-md-12 {\n    -webkit-box-flex: 0;\n        -ms-flex: 0 0 100%;\n            flex: 0 0 100%;\n    max-width: 100%; }\n  .order-md-first {\n    -webkit-box-ordinal-group: 0;\n        -ms-flex-order: -1;\n            order: -1; }\n  .order-md-1 {\n    -webkit-box-ordinal-group: 2;\n        -ms-flex-order: 1;\n            order: 1; }\n  .order-md-2 {\n    -webkit-box-ordinal-group: 3;\n        -ms-flex-order: 2;\n            order: 2; }\n  .order-md-3 {\n    -webkit-box-ordinal-group: 4;\n        -ms-flex-order: 3;\n            order: 3; }\n  .order-md-4 {\n    -webkit-box-ordinal-group: 5;\n        -ms-flex-order: 4;\n            order: 4; }\n  .order-md-5 {\n    -webkit-box-ordinal-group: 6;\n        -ms-flex-order: 5;\n            order: 5; }\n  .order-md-6 {\n    -webkit-box-ordinal-group: 7;\n        -ms-flex-order: 6;\n            order: 6; }\n  .order-md-7 {\n    -webkit-box-ordinal-group: 8;\n        -ms-flex-order: 7;\n            order: 7; }\n  .order-md-8 {\n    -webkit-box-ordinal-group: 9;\n        -ms-flex-order: 8;\n            order: 8; }\n  .order-md-9 {\n    -webkit-box-ordinal-group: 10;\n        -ms-flex-order: 9;\n            order: 9; }\n  .order-md-10 {\n    -webkit-box-ordinal-group: 11;\n        -ms-flex-order: 10;\n            order: 10; }\n  .order-md-11 {\n    -webkit-box-ordinal-group: 12;\n        -ms-flex-order: 11;\n            order: 11; }\n  .order-md-12 {\n    -webkit-box-ordinal-group: 13;\n        -ms-flex-order: 12;\n            order: 12; }\n  .offset-md-0 {\n    margin-left: 0; }\n  .offset-md-1 {\n    margin-left: 8.33333%; }\n  .offset-md-2 {\n    margin-left: 16.66667%; }\n  .offset-md-3 {\n    margin-left: 25%; }\n  .offset-md-4 {\n    margin-left: 33.33333%; }\n  .offset-md-5 {\n    margin-left: 41.66667%; }\n  .offset-md-6 {\n    margin-left: 50%; }\n  .offset-md-7 {\n    margin-left: 58.33333%; }\n  .offset-md-8 {\n    margin-left: 66.66667%; }\n  .offset-md-9 {\n    margin-left: 75%; }\n  .offset-md-10 {\n    margin-left: 83.33333%; }\n  .offset-md-11 {\n    margin-left: 91.66667%; } }\n\n@media (min-width: 992px) {\n  .col-lg {\n    -ms-flex-preferred-size: 0;\n        flex-basis: 0;\n    -webkit-box-flex: 1;\n        -ms-flex-positive: 1;\n            flex-grow: 1;\n    max-width: 100%; }\n  .col-lg-auto {\n    -webkit-box-flex: 0;\n        -ms-flex: 0 0 auto;\n            flex: 0 0 auto;\n    width: auto;\n    max-width: none; }\n  .col-lg-1 {\n    -webkit-box-flex: 0;\n        -ms-flex: 0 0 8.33333%;\n            flex: 0 0 8.33333%;\n    max-width: 8.33333%; }\n  .col-lg-2 {\n    -webkit-box-flex: 0;\n        -ms-flex: 0 0 16.66667%;\n            flex: 0 0 16.66667%;\n    max-width: 16.66667%; }\n  .col-lg-3 {\n    -webkit-box-flex: 0;\n        -ms-flex: 0 0 25%;\n            flex: 0 0 25%;\n    max-width: 25%; }\n  .col-lg-4 {\n    -webkit-box-flex: 0;\n        -ms-flex: 0 0 33.33333%;\n            flex: 0 0 33.33333%;\n    max-width: 33.33333%; }\n  .col-lg-5 {\n    -webkit-box-flex: 0;\n        -ms-flex: 0 0 41.66667%;\n            flex: 0 0 41.66667%;\n    max-width: 41.66667%; }\n  .col-lg-6 {\n    -webkit-box-flex: 0;\n        -ms-flex: 0 0 50%;\n            flex: 0 0 50%;\n    max-width: 50%; }\n  .col-lg-7 {\n    -webkit-box-flex: 0;\n        -ms-flex: 0 0 58.33333%;\n            flex: 0 0 58.33333%;\n    max-width: 58.33333%; }\n  .col-lg-8 {\n    -webkit-box-flex: 0;\n        -ms-flex: 0 0 66.66667%;\n            flex: 0 0 66.66667%;\n    max-width: 66.66667%; }\n  .col-lg-9 {\n    -webkit-box-flex: 0;\n        -ms-flex: 0 0 75%;\n            flex: 0 0 75%;\n    max-width: 75%; }\n  .col-lg-10 {\n    -webkit-box-flex: 0;\n        -ms-flex: 0 0 83.33333%;\n            flex: 0 0 83.33333%;\n    max-width: 83.33333%; }\n  .col-lg-11 {\n    -webkit-box-flex: 0;\n        -ms-flex: 0 0 91.66667%;\n            flex: 0 0 91.66667%;\n    max-width: 91.66667%; }\n  .col-lg-12 {\n    -webkit-box-flex: 0;\n        -ms-flex: 0 0 100%;\n            flex: 0 0 100%;\n    max-width: 100%; }\n  .order-lg-first {\n    -webkit-box-ordinal-group: 0;\n        -ms-flex-order: -1;\n            order: -1; }\n  .order-lg-1 {\n    -webkit-box-ordinal-group: 2;\n        -ms-flex-order: 1;\n            order: 1; }\n  .order-lg-2 {\n    -webkit-box-ordinal-group: 3;\n        -ms-flex-order: 2;\n            order: 2; }\n  .order-lg-3 {\n    -webkit-box-ordinal-group: 4;\n        -ms-flex-order: 3;\n            order: 3; }\n  .order-lg-4 {\n    -webkit-box-ordinal-group: 5;\n        -ms-flex-order: 4;\n            order: 4; }\n  .order-lg-5 {\n    -webkit-box-ordinal-group: 6;\n        -ms-flex-order: 5;\n            order: 5; }\n  .order-lg-6 {\n    -webkit-box-ordinal-group: 7;\n        -ms-flex-order: 6;\n            order: 6; }\n  .order-lg-7 {\n    -webkit-box-ordinal-group: 8;\n        -ms-flex-order: 7;\n            order: 7; }\n  .order-lg-8 {\n    -webkit-box-ordinal-group: 9;\n        -ms-flex-order: 8;\n            order: 8; }\n  .order-lg-9 {\n    -webkit-box-ordinal-group: 10;\n        -ms-flex-order: 9;\n            order: 9; }\n  .order-lg-10 {\n    -webkit-box-ordinal-group: 11;\n        -ms-flex-order: 10;\n            order: 10; }\n  .order-lg-11 {\n    -webkit-box-ordinal-group: 12;\n        -ms-flex-order: 11;\n            order: 11; }\n  .order-lg-12 {\n    -webkit-box-ordinal-group: 13;\n        -ms-flex-order: 12;\n            order: 12; }\n  .offset-lg-0 {\n    margin-left: 0; }\n  .offset-lg-1 {\n    margin-left: 8.33333%; }\n  .offset-lg-2 {\n    margin-left: 16.66667%; }\n  .offset-lg-3 {\n    margin-left: 25%; }\n  .offset-lg-4 {\n    margin-left: 33.33333%; }\n  .offset-lg-5 {\n    margin-left: 41.66667%; }\n  .offset-lg-6 {\n    margin-left: 50%; }\n  .offset-lg-7 {\n    margin-left: 58.33333%; }\n  .offset-lg-8 {\n    margin-left: 66.66667%; }\n  .offset-lg-9 {\n    margin-left: 75%; }\n  .offset-lg-10 {\n    margin-left: 83.33333%; }\n  .offset-lg-11 {\n    margin-left: 91.66667%; } }\n\n@media (min-width: 1200px) {\n  .col-xl {\n    -ms-flex-preferred-size: 0;\n        flex-basis: 0;\n    -webkit-box-flex: 1;\n        -ms-flex-positive: 1;\n            flex-grow: 1;\n    max-width: 100%; }\n  .col-xl-auto {\n    -webkit-box-flex: 0;\n        -ms-flex: 0 0 auto;\n            flex: 0 0 auto;\n    width: auto;\n    max-width: none; }\n  .col-xl-1 {\n    -webkit-box-flex: 0;\n        -ms-flex: 0 0 8.33333%;\n            flex: 0 0 8.33333%;\n    max-width: 8.33333%; }\n  .col-xl-2 {\n    -webkit-box-flex: 0;\n        -ms-flex: 0 0 16.66667%;\n            flex: 0 0 16.66667%;\n    max-width: 16.66667%; }\n  .col-xl-3 {\n    -webkit-box-flex: 0;\n        -ms-flex: 0 0 25%;\n            flex: 0 0 25%;\n    max-width: 25%; }\n  .col-xl-4 {\n    -webkit-box-flex: 0;\n        -ms-flex: 0 0 33.33333%;\n            flex: 0 0 33.33333%;\n    max-width: 33.33333%; }\n  .col-xl-5 {\n    -webkit-box-flex: 0;\n        -ms-flex: 0 0 41.66667%;\n            flex: 0 0 41.66667%;\n    max-width: 41.66667%; }\n  .col-xl-6 {\n    -webkit-box-flex: 0;\n        -ms-flex: 0 0 50%;\n            flex: 0 0 50%;\n    max-width: 50%; }\n  .col-xl-7 {\n    -webkit-box-flex: 0;\n        -ms-flex: 0 0 58.33333%;\n            flex: 0 0 58.33333%;\n    max-width: 58.33333%; }\n  .col-xl-8 {\n    -webkit-box-flex: 0;\n        -ms-flex: 0 0 66.66667%;\n            flex: 0 0 66.66667%;\n    max-width: 66.66667%; }\n  .col-xl-9 {\n    -webkit-box-flex: 0;\n        -ms-flex: 0 0 75%;\n            flex: 0 0 75%;\n    max-width: 75%; }\n  .col-xl-10 {\n    -webkit-box-flex: 0;\n        -ms-flex: 0 0 83.33333%;\n            flex: 0 0 83.33333%;\n    max-width: 83.33333%; }\n  .col-xl-11 {\n    -webkit-box-flex: 0;\n        -ms-flex: 0 0 91.66667%;\n            flex: 0 0 91.66667%;\n    max-width: 91.66667%; }\n  .col-xl-12 {\n    -webkit-box-flex: 0;\n        -ms-flex: 0 0 100%;\n            flex: 0 0 100%;\n    max-width: 100%; }\n  .order-xl-first {\n    -webkit-box-ordinal-group: 0;\n        -ms-flex-order: -1;\n            order: -1; }\n  .order-xl-1 {\n    -webkit-box-ordinal-group: 2;\n        -ms-flex-order: 1;\n            order: 1; }\n  .order-xl-2 {\n    -webkit-box-ordinal-group: 3;\n        -ms-flex-order: 2;\n            order: 2; }\n  .order-xl-3 {\n    -webkit-box-ordinal-group: 4;\n        -ms-flex-order: 3;\n            order: 3; }\n  .order-xl-4 {\n    -webkit-box-ordinal-group: 5;\n        -ms-flex-order: 4;\n            order: 4; }\n  .order-xl-5 {\n    -webkit-box-ordinal-group: 6;\n        -ms-flex-order: 5;\n            order: 5; }\n  .order-xl-6 {\n    -webkit-box-ordinal-group: 7;\n        -ms-flex-order: 6;\n            order: 6; }\n  .order-xl-7 {\n    -webkit-box-ordinal-group: 8;\n        -ms-flex-order: 7;\n            order: 7; }\n  .order-xl-8 {\n    -webkit-box-ordinal-group: 9;\n        -ms-flex-order: 8;\n            order: 8; }\n  .order-xl-9 {\n    -webkit-box-ordinal-group: 10;\n        -ms-flex-order: 9;\n            order: 9; }\n  .order-xl-10 {\n    -webkit-box-ordinal-group: 11;\n        -ms-flex-order: 10;\n            order: 10; }\n  .order-xl-11 {\n    -webkit-box-ordinal-group: 12;\n        -ms-flex-order: 11;\n            order: 11; }\n  .order-xl-12 {\n    -webkit-box-ordinal-group: 13;\n        -ms-flex-order: 12;\n            order: 12; }\n  .offset-xl-0 {\n    margin-left: 0; }\n  .offset-xl-1 {\n    margin-left: 8.33333%; }\n  .offset-xl-2 {\n    margin-left: 16.66667%; }\n  .offset-xl-3 {\n    margin-left: 25%; }\n  .offset-xl-4 {\n    margin-left: 33.33333%; }\n  .offset-xl-5 {\n    margin-left: 41.66667%; }\n  .offset-xl-6 {\n    margin-left: 50%; }\n  .offset-xl-7 {\n    margin-left: 58.33333%; }\n  .offset-xl-8 {\n    margin-left: 66.66667%; }\n  .offset-xl-9 {\n    margin-left: 75%; }\n  .offset-xl-10 {\n    margin-left: 83.33333%; }\n  .offset-xl-11 {\n    margin-left: 91.66667%; } }\n\n.table {\n  width: 100%;\n  max-width: 100%;\n  margin-bottom: 1rem;\n  background-color: transparent; }\n\n.table th, .table td {\n    padding: 0.75rem;\n    vertical-align: top;\n    border-top: 1px solid #dee2e6; }\n\n.table thead th {\n    vertical-align: bottom;\n    border-bottom: 2px solid #dee2e6; }\n\n.table tbody + tbody {\n    border-top: 2px solid #dee2e6; }\n\n.table .table {\n    background-color: #fff; }\n\n.table-sm th, .table-sm td {\n  padding: 0.3rem; }\n\n.table-bordered {\n  border: 1px solid #dee2e6; }\n\n.table-bordered th, .table-bordered td {\n    border: 1px solid #dee2e6; }\n\n.table-bordered thead th, .table-bordered thead td {\n    border-bottom-width: 2px; }\n\n.table-striped tbody tr:nth-of-type(odd) {\n  background-color: rgba(0, 0, 0, 0.05); }\n\n.table-hover tbody tr:hover {\n  background-color: rgba(0, 0, 0, 0.075); }\n\n.table-primary, .table-primary > th, .table-primary > td {\n  background-color: #d6cfcf; }\n\n.table-hover .table-primary:hover {\n  background-color: #cac1c1; }\n\n.table-hover .table-primary:hover > td, .table-hover .table-primary:hover > th {\n    background-color: #cac1c1; }\n\n.table-secondary, .table-secondary > th, .table-secondary > td {\n  background-color: #dddfe2; }\n\n.table-hover .table-secondary:hover {\n  background-color: #cfd2d6; }\n\n.table-hover .table-secondary:hover > td, .table-hover .table-secondary:hover > th {\n    background-color: #cfd2d6; }\n\n.table-success, .table-success > th, .table-success > td {\n  background-color: #c3e6cb; }\n\n.table-hover .table-success:hover {\n  background-color: #b1dfbb; }\n\n.table-hover .table-success:hover > td, .table-hover .table-success:hover > th {\n    background-color: #b1dfbb; }\n\n.table-info, .table-info > th, .table-info > td {\n  background-color: #bee5eb; }\n\n.table-hover .table-info:hover {\n  background-color: #abdde5; }\n\n.table-hover .table-info:hover > td, .table-hover .table-info:hover > th {\n    background-color: #abdde5; }\n\n.table-warning, .table-warning > th, .table-warning > td {\n  background-color: #ffeeba; }\n\n.table-hover .table-warning:hover {\n  background-color: #ffe8a1; }\n\n.table-hover .table-warning:hover > td, .table-hover .table-warning:hover > th {\n    background-color: #ffe8a1; }\n\n.table-danger, .table-danger > th, .table-danger > td {\n  background-color: #f5c6cb; }\n\n.table-hover .table-danger:hover {\n  background-color: #f1b0b7; }\n\n.table-hover .table-danger:hover > td, .table-hover .table-danger:hover > th {\n    background-color: #f1b0b7; }\n\n.table-light, .table-light > th, .table-light > td {\n  background-color: #fdfdfe; }\n\n.table-hover .table-light:hover {\n  background-color: #ececf6; }\n\n.table-hover .table-light:hover > td, .table-hover .table-light:hover > th {\n    background-color: #ececf6; }\n\n.table-dark, .table-dark > th, .table-dark > td {\n  background-color: #c6c8ca; }\n\n.table-hover .table-dark:hover {\n  background-color: #b9bbbe; }\n\n.table-hover .table-dark:hover > td, .table-hover .table-dark:hover > th {\n    background-color: #b9bbbe; }\n\n.table-active, .table-active > th, .table-active > td {\n  background-color: rgba(0, 0, 0, 0.075); }\n\n.table-hover .table-active:hover {\n  background-color: rgba(0, 0, 0, 0.075); }\n\n.table-hover .table-active:hover > td, .table-hover .table-active:hover > th {\n    background-color: rgba(0, 0, 0, 0.075); }\n\n.table .thead-dark th {\n  color: #fff;\n  background-color: #212529;\n  border-color: #32383e; }\n\n.table .thead-light th {\n  color: #495057;\n  background-color: #e9ecef;\n  border-color: #dee2e6; }\n\n.table-dark {\n  color: #fff;\n  background-color: #212529; }\n\n.table-dark th, .table-dark td, .table-dark thead th {\n    border-color: #32383e; }\n\n.table-dark.table-bordered {\n    border: 0; }\n\n.table-dark.table-striped tbody tr:nth-of-type(odd) {\n    background-color: rgba(255, 255, 255, 0.05); }\n\n.table-dark.table-hover tbody tr:hover {\n    background-color: rgba(255, 255, 255, 0.075); }\n\n@media (max-width: 575.99px) {\n  .table-responsive-sm {\n    display: block;\n    width: 100%;\n    overflow-x: auto;\n    -webkit-overflow-scrolling: touch;\n    -ms-overflow-style: -ms-autohiding-scrollbar; }\n    .table-responsive-sm > .table-bordered {\n      border: 0; } }\n\n@media (max-width: 767.99px) {\n  .table-responsive-md {\n    display: block;\n    width: 100%;\n    overflow-x: auto;\n    -webkit-overflow-scrolling: touch;\n    -ms-overflow-style: -ms-autohiding-scrollbar; }\n    .table-responsive-md > .table-bordered {\n      border: 0; } }\n\n@media (max-width: 991.99px) {\n  .table-responsive-lg {\n    display: block;\n    width: 100%;\n    overflow-x: auto;\n    -webkit-overflow-scrolling: touch;\n    -ms-overflow-style: -ms-autohiding-scrollbar; }\n    .table-responsive-lg > .table-bordered {\n      border: 0; } }\n\n@media (max-width: 1199.99px) {\n  .table-responsive-xl {\n    display: block;\n    width: 100%;\n    overflow-x: auto;\n    -webkit-overflow-scrolling: touch;\n    -ms-overflow-style: -ms-autohiding-scrollbar; }\n    .table-responsive-xl > .table-bordered {\n      border: 0; } }\n\n.table-responsive {\n  display: block;\n  width: 100%;\n  overflow-x: auto;\n  -webkit-overflow-scrolling: touch;\n  -ms-overflow-style: -ms-autohiding-scrollbar; }\n\n.table-responsive > .table-bordered {\n    border: 0; }\n\n.form-control {\n  display: block;\n  width: 100%;\n  padding: 0.375rem 0.75rem;\n  font-size: 1rem;\n  line-height: 1.5;\n  color: #495057;\n  background-color: #fff;\n  background-clip: padding-box;\n  border: 1px solid #ced4da;\n  border-radius: 0.25rem;\n  -webkit-transition: border-color 0.15s ease-in-out, -webkit-box-shadow 0.15s ease-in-out;\n  transition: border-color 0.15s ease-in-out, -webkit-box-shadow 0.15s ease-in-out;\n  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;\n  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out, -webkit-box-shadow 0.15s ease-in-out; }\n\n.form-control::-ms-expand {\n    background-color: transparent;\n    border: 0; }\n\n.form-control:focus {\n    color: #495057;\n    background-color: #fff;\n    border-color: #ac9393;\n    outline: 0;\n    -webkit-box-shadow: 0 0 0 0.2rem rgba(108, 83, 83, 0.25);\n            box-shadow: 0 0 0 0.2rem rgba(108, 83, 83, 0.25); }\n\n.form-control::-webkit-input-placeholder {\n    color: #868e96;\n    opacity: 1; }\n\n.form-control:-ms-input-placeholder {\n    color: #868e96;\n    opacity: 1; }\n\n.form-control::-ms-input-placeholder {\n    color: #868e96;\n    opacity: 1; }\n\n.form-control::placeholder {\n    color: #868e96;\n    opacity: 1; }\n\n.form-control:disabled, .form-control[readonly] {\n    background-color: #e9ecef;\n    opacity: 1; }\n\nselect.form-control:not([size]):not([multiple]) {\n  height: calc(2.25rem + 2px); }\n\nselect.form-control:focus::-ms-value {\n  color: #495057;\n  background-color: #fff; }\n\n.form-control-file, .form-control-range {\n  display: block;\n  width: 100%; }\n\n.col-form-label {\n  padding-top: calc(0.375rem + 1px);\n  padding-bottom: calc(0.375rem + 1px);\n  margin-bottom: 0;\n  font-size: inherit;\n  line-height: 1.5; }\n\n.col-form-label-lg {\n  padding-top: calc(0.5rem + 1px);\n  padding-bottom: calc(0.5rem + 1px);\n  font-size: 1.25rem;\n  line-height: 1.5; }\n\n.col-form-label-sm {\n  padding-top: calc(0.25rem + 1px);\n  padding-bottom: calc(0.25rem + 1px);\n  font-size: 0.875rem;\n  line-height: 1.5; }\n\n.form-control-plaintext {\n  display: block;\n  width: 100%;\n  padding-top: 0.375rem;\n  padding-bottom: 0.375rem;\n  margin-bottom: 0;\n  line-height: 1.5;\n  background-color: transparent;\n  border: solid transparent;\n  border-width: 1px 0; }\n\n.form-control-plaintext.form-control-sm, .input-group-sm > .form-control-plaintext.form-control, .input-group-sm > .input-group-prepend > .form-control-plaintext.input-group-text, .input-group-sm > .input-group-append > .form-control-plaintext.input-group-text, .input-group-sm > .input-group-prepend > .form-control-plaintext.btn, .input-group-sm > .input-group-append > .form-control-plaintext.btn, .form-control-plaintext.form-control-lg, .input-group-lg > .form-control-plaintext.form-control, .input-group-lg > .input-group-prepend > .form-control-plaintext.input-group-text, .input-group-lg > .input-group-append > .form-control-plaintext.input-group-text, .input-group-lg > .input-group-prepend > .form-control-plaintext.btn, .input-group-lg > .input-group-append > .form-control-plaintext.btn {\n    padding-right: 0;\n    padding-left: 0; }\n\n.form-control-sm, .input-group-sm > .form-control, .input-group-sm > .input-group-prepend > .input-group-text, .input-group-sm > .input-group-append > .input-group-text, .input-group-sm > .input-group-prepend > .btn, .input-group-sm > .input-group-append > .btn {\n  padding: 0.25rem 0.5rem;\n  font-size: 0.875rem;\n  line-height: 1.5;\n  border-radius: 0.2rem; }\n\nselect.form-control-sm:not([size]):not([multiple]), .input-group-sm > select.form-control:not([size]):not([multiple]), .input-group-sm > .input-group-prepend > select.input-group-text:not([size]):not([multiple]), .input-group-sm > .input-group-append > select.input-group-text:not([size]):not([multiple]), .input-group-sm > .input-group-prepend > select.btn:not([size]):not([multiple]), .input-group-sm > .input-group-append > select.btn:not([size]):not([multiple]) {\n  height: calc(1.8125rem + 2px); }\n\n.form-control-lg, .input-group-lg > .form-control, .input-group-lg > .input-group-prepend > .input-group-text, .input-group-lg > .input-group-append > .input-group-text, .input-group-lg > .input-group-prepend > .btn, .input-group-lg > .input-group-append > .btn {\n  padding: 0.5rem 1rem;\n  font-size: 1.25rem;\n  line-height: 1.5;\n  border-radius: 0.3rem; }\n\nselect.form-control-lg:not([size]):not([multiple]), .input-group-lg > select.form-control:not([size]):not([multiple]), .input-group-lg > .input-group-prepend > select.input-group-text:not([size]):not([multiple]), .input-group-lg > .input-group-append > select.input-group-text:not([size]):not([multiple]), .input-group-lg > .input-group-prepend > select.btn:not([size]):not([multiple]), .input-group-lg > .input-group-append > select.btn:not([size]):not([multiple]) {\n  height: calc(2.875rem + 2px); }\n\n.form-group {\n  margin-bottom: 1rem; }\n\n.form-text {\n  display: block;\n  margin-top: 0.25rem; }\n\n.form-row {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap;\n  margin-right: -5px;\n  margin-left: -5px; }\n\n.form-row > .col, .form-row > [class*=\"col-\"] {\n    padding-right: 5px;\n    padding-left: 5px; }\n\n.form-check {\n  position: relative;\n  display: block;\n  padding-left: 1.25rem; }\n\n.form-check-input {\n  position: absolute;\n  margin-top: 0.3rem;\n  margin-left: -1.25rem; }\n\n.form-check-input:disabled ~ .form-check-label {\n    color: #868e96; }\n\n.form-check-label {\n  margin-bottom: 0; }\n\n.form-check-inline {\n  display: -webkit-inline-box;\n  display: -ms-inline-flexbox;\n  display: inline-flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  padding-left: 0;\n  margin-right: 0.75rem; }\n\n.form-check-inline .form-check-input {\n    position: static;\n    margin-top: 0;\n    margin-right: 0.3125rem;\n    margin-left: 0; }\n\n.valid-feedback {\n  display: none;\n  width: 100%;\n  margin-top: 0.25rem;\n  font-size: 80%;\n  color: #28a745; }\n\n.valid-tooltip {\n  position: absolute;\n  top: 100%;\n  z-index: 5;\n  display: none;\n  width: 250px;\n  padding: .5rem;\n  margin-top: .1rem;\n  font-size: .875rem;\n  line-height: 1;\n  color: #fff;\n  background-color: rgba(40, 167, 69, 0.8);\n  border-radius: .2rem; }\n\n.was-validated .form-control:valid, .form-control.is-valid, .was-validated\n.custom-select:valid, .custom-select.is-valid {\n  border-color: #28a745; }\n\n.was-validated .form-control:valid:focus, .form-control.is-valid:focus, .was-validated\n  .custom-select:valid:focus, .custom-select.is-valid:focus {\n    border-color: #28a745;\n    -webkit-box-shadow: 0 0 0 0.2rem rgba(40, 167, 69, 0.25);\n            box-shadow: 0 0 0 0.2rem rgba(40, 167, 69, 0.25); }\n\n.was-validated .form-control:valid ~ .valid-feedback, .was-validated .form-control:valid ~ .valid-tooltip, .form-control.is-valid ~ .valid-feedback, .form-control.is-valid ~ .valid-tooltip, .was-validated\n  .custom-select:valid ~ .valid-feedback, .was-validated\n  .custom-select:valid ~ .valid-tooltip, .custom-select.is-valid ~ .valid-feedback, .custom-select.is-valid ~ .valid-tooltip {\n    display: block; }\n\n.was-validated .form-check-input:valid ~ .form-check-label, .form-check-input.is-valid ~ .form-check-label {\n  color: #28a745; }\n\n.was-validated .custom-control-input:valid ~ .custom-control-label, .custom-control-input.is-valid ~ .custom-control-label {\n  color: #28a745; }\n\n.was-validated .custom-control-input:valid ~ .custom-control-label::before, .custom-control-input.is-valid ~ .custom-control-label::before {\n    background-color: #71dd8a; }\n\n.was-validated .custom-control-input:valid ~ .valid-feedback, .was-validated .custom-control-input:valid ~ .valid-tooltip, .custom-control-input.is-valid ~ .valid-feedback, .custom-control-input.is-valid ~ .valid-tooltip {\n  display: block; }\n\n.was-validated .custom-control-input:valid:checked ~ .custom-control-label::before, .custom-control-input.is-valid:checked ~ .custom-control-label::before {\n  background-color: #34ce57; }\n\n.was-validated .custom-control-input:valid:focus ~ .custom-control-label::before, .custom-control-input.is-valid:focus ~ .custom-control-label::before {\n  -webkit-box-shadow: 0 0 0 1px #fff, 0 0 0 0.2rem rgba(40, 167, 69, 0.25);\n          box-shadow: 0 0 0 1px #fff, 0 0 0 0.2rem rgba(40, 167, 69, 0.25); }\n\n.was-validated .custom-file-input:valid ~ .custom-file-label, .custom-file-input.is-valid ~ .custom-file-label {\n  border-color: #28a745; }\n\n.was-validated .custom-file-input:valid ~ .custom-file-label::before, .custom-file-input.is-valid ~ .custom-file-label::before {\n    border-color: inherit; }\n\n.was-validated .custom-file-input:valid ~ .valid-feedback, .was-validated .custom-file-input:valid ~ .valid-tooltip, .custom-file-input.is-valid ~ .valid-feedback, .custom-file-input.is-valid ~ .valid-tooltip {\n  display: block; }\n\n.was-validated .custom-file-input:valid:focus ~ .custom-file-label, .custom-file-input.is-valid:focus ~ .custom-file-label {\n  -webkit-box-shadow: 0 0 0 0.2rem rgba(40, 167, 69, 0.25);\n          box-shadow: 0 0 0 0.2rem rgba(40, 167, 69, 0.25); }\n\n.invalid-feedback {\n  display: none;\n  width: 100%;\n  margin-top: 0.25rem;\n  font-size: 80%;\n  color: #dc3545; }\n\n.invalid-tooltip {\n  position: absolute;\n  top: 100%;\n  z-index: 5;\n  display: none;\n  width: 250px;\n  padding: .5rem;\n  margin-top: .1rem;\n  font-size: .875rem;\n  line-height: 1;\n  color: #fff;\n  background-color: rgba(220, 53, 69, 0.8);\n  border-radius: .2rem; }\n\n.was-validated .form-control:invalid, .form-control.is-invalid, .was-validated\n.custom-select:invalid, .custom-select.is-invalid {\n  border-color: #dc3545; }\n\n.was-validated .form-control:invalid:focus, .form-control.is-invalid:focus, .was-validated\n  .custom-select:invalid:focus, .custom-select.is-invalid:focus {\n    border-color: #dc3545;\n    -webkit-box-shadow: 0 0 0 0.2rem rgba(220, 53, 69, 0.25);\n            box-shadow: 0 0 0 0.2rem rgba(220, 53, 69, 0.25); }\n\n.was-validated .form-control:invalid ~ .invalid-feedback, .was-validated .form-control:invalid ~ .invalid-tooltip, .form-control.is-invalid ~ .invalid-feedback, .form-control.is-invalid ~ .invalid-tooltip, .was-validated\n  .custom-select:invalid ~ .invalid-feedback, .was-validated\n  .custom-select:invalid ~ .invalid-tooltip, .custom-select.is-invalid ~ .invalid-feedback, .custom-select.is-invalid ~ .invalid-tooltip {\n    display: block; }\n\n.was-validated .form-check-input:invalid ~ .form-check-label, .form-check-input.is-invalid ~ .form-check-label {\n  color: #dc3545; }\n\n.was-validated .custom-control-input:invalid ~ .custom-control-label, .custom-control-input.is-invalid ~ .custom-control-label {\n  color: #dc3545; }\n\n.was-validated .custom-control-input:invalid ~ .custom-control-label::before, .custom-control-input.is-invalid ~ .custom-control-label::before {\n    background-color: #efa2a9; }\n\n.was-validated .custom-control-input:invalid ~ .invalid-feedback, .was-validated .custom-control-input:invalid ~ .invalid-tooltip, .custom-control-input.is-invalid ~ .invalid-feedback, .custom-control-input.is-invalid ~ .invalid-tooltip {\n  display: block; }\n\n.was-validated .custom-control-input:invalid:checked ~ .custom-control-label::before, .custom-control-input.is-invalid:checked ~ .custom-control-label::before {\n  background-color: #e4606d; }\n\n.was-validated .custom-control-input:invalid:focus ~ .custom-control-label::before, .custom-control-input.is-invalid:focus ~ .custom-control-label::before {\n  -webkit-box-shadow: 0 0 0 1px #fff, 0 0 0 0.2rem rgba(220, 53, 69, 0.25);\n          box-shadow: 0 0 0 1px #fff, 0 0 0 0.2rem rgba(220, 53, 69, 0.25); }\n\n.was-validated .custom-file-input:invalid ~ .custom-file-label, .custom-file-input.is-invalid ~ .custom-file-label {\n  border-color: #dc3545; }\n\n.was-validated .custom-file-input:invalid ~ .custom-file-label::before, .custom-file-input.is-invalid ~ .custom-file-label::before {\n    border-color: inherit; }\n\n.was-validated .custom-file-input:invalid ~ .invalid-feedback, .was-validated .custom-file-input:invalid ~ .invalid-tooltip, .custom-file-input.is-invalid ~ .invalid-feedback, .custom-file-input.is-invalid ~ .invalid-tooltip {\n  display: block; }\n\n.was-validated .custom-file-input:invalid:focus ~ .custom-file-label, .custom-file-input.is-invalid:focus ~ .custom-file-label {\n  -webkit-box-shadow: 0 0 0 0.2rem rgba(220, 53, 69, 0.25);\n          box-shadow: 0 0 0 0.2rem rgba(220, 53, 69, 0.25); }\n\n.form-inline {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-flow: row wrap;\n          flex-flow: row wrap;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center; }\n\n.form-inline .form-check {\n    width: 100%; }\n\n@media (min-width: 576px) {\n    .form-inline label {\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      -webkit-box-align: center;\n          -ms-flex-align: center;\n              align-items: center;\n      -webkit-box-pack: center;\n          -ms-flex-pack: center;\n              justify-content: center;\n      margin-bottom: 0; }\n    .form-inline .form-group {\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      -webkit-box-flex: 0;\n          -ms-flex: 0 0 auto;\n              flex: 0 0 auto;\n      -webkit-box-orient: horizontal;\n      -webkit-box-direction: normal;\n          -ms-flex-flow: row wrap;\n              flex-flow: row wrap;\n      -webkit-box-align: center;\n          -ms-flex-align: center;\n              align-items: center;\n      margin-bottom: 0; }\n    .form-inline .form-control {\n      display: inline-block;\n      width: auto;\n      vertical-align: middle; }\n    .form-inline .form-control-plaintext {\n      display: inline-block; }\n    .form-inline .input-group {\n      width: auto; }\n    .form-inline .form-check {\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      -webkit-box-align: center;\n          -ms-flex-align: center;\n              align-items: center;\n      -webkit-box-pack: center;\n          -ms-flex-pack: center;\n              justify-content: center;\n      width: auto;\n      padding-left: 0; }\n    .form-inline .form-check-input {\n      position: relative;\n      margin-top: 0;\n      margin-right: 0.25rem;\n      margin-left: 0; }\n    .form-inline .custom-control {\n      -webkit-box-align: center;\n          -ms-flex-align: center;\n              align-items: center;\n      -webkit-box-pack: center;\n          -ms-flex-pack: center;\n              justify-content: center; }\n    .form-inline .custom-control-label {\n      margin-bottom: 0; } }\n\n.btn {\n  display: inline-block;\n  font-weight: 400;\n  text-align: center;\n  white-space: nowrap;\n  vertical-align: middle;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  border: 1px solid transparent;\n  padding: 0.375rem 0.75rem;\n  font-size: 1rem;\n  line-height: 1.5;\n  border-radius: 0.25rem;\n  -webkit-transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, -webkit-box-shadow 0.15s ease-in-out;\n  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, -webkit-box-shadow 0.15s ease-in-out;\n  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;\n  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out, -webkit-box-shadow 0.15s ease-in-out; }\n\n.btn:focus, .btn:hover {\n    text-decoration: none; }\n\n.btn:focus, .btn.focus {\n    outline: 0;\n    -webkit-box-shadow: 0 0 0 0.2rem rgba(108, 83, 83, 0.25);\n            box-shadow: 0 0 0 0.2rem rgba(108, 83, 83, 0.25); }\n\n.btn.disabled, .btn:disabled {\n    opacity: 0.65; }\n\n.btn:not([disabled]):not(.disabled) {\n    cursor: pointer; }\n\n.btn:not([disabled]):not(.disabled):active, .btn:not([disabled]):not(.disabled).active {\n    background-image: none; }\n\na.btn.disabled, fieldset[disabled] a.btn {\n  pointer-events: none; }\n\n.btn-primary {\n  color: #fff;\n  background-color: #6c5353;\n  border-color: #6c5353; }\n\n.btn-primary:hover {\n    color: #fff;\n    background-color: #564242;\n    border-color: #4f3d3d; }\n\n.btn-primary:focus, .btn-primary.focus {\n    -webkit-box-shadow: 0 0 0 0.2rem rgba(108, 83, 83, 0.5);\n            box-shadow: 0 0 0 0.2rem rgba(108, 83, 83, 0.5); }\n\n.btn-primary.disabled, .btn-primary:disabled {\n    background-color: #6c5353;\n    border-color: #6c5353; }\n\n.btn-primary:not([disabled]):not(.disabled):active, .btn-primary:not([disabled]):not(.disabled).active, .show > .btn-primary.dropdown-toggle {\n    color: #fff;\n    background-color: #4f3d3d;\n    border-color: #483737; }\n\n.btn-primary:not([disabled]):not(.disabled):active:focus, .btn-primary:not([disabled]):not(.disabled).active:focus, .show > .btn-primary.dropdown-toggle:focus {\n      -webkit-box-shadow: 0 0 0 0.2rem rgba(108, 83, 83, 0.5);\n              box-shadow: 0 0 0 0.2rem rgba(108, 83, 83, 0.5); }\n\n.btn-secondary {\n  color: #fff;\n  background-color: #868e96;\n  border-color: #868e96; }\n\n.btn-secondary:hover {\n    color: #fff;\n    background-color: #727b84;\n    border-color: #6c757d; }\n\n.btn-secondary:focus, .btn-secondary.focus {\n    -webkit-box-shadow: 0 0 0 0.2rem rgba(134, 142, 150, 0.5);\n            box-shadow: 0 0 0 0.2rem rgba(134, 142, 150, 0.5); }\n\n.btn-secondary.disabled, .btn-secondary:disabled {\n    background-color: #868e96;\n    border-color: #868e96; }\n\n.btn-secondary:not([disabled]):not(.disabled):active, .btn-secondary:not([disabled]):not(.disabled).active, .show > .btn-secondary.dropdown-toggle {\n    color: #fff;\n    background-color: #6c757d;\n    border-color: #666e76; }\n\n.btn-secondary:not([disabled]):not(.disabled):active:focus, .btn-secondary:not([disabled]):not(.disabled).active:focus, .show > .btn-secondary.dropdown-toggle:focus {\n      -webkit-box-shadow: 0 0 0 0.2rem rgba(134, 142, 150, 0.5);\n              box-shadow: 0 0 0 0.2rem rgba(134, 142, 150, 0.5); }\n\n.btn-success {\n  color: #fff;\n  background-color: #28a745;\n  border-color: #28a745; }\n\n.btn-success:hover {\n    color: #fff;\n    background-color: #218838;\n    border-color: #1e7e34; }\n\n.btn-success:focus, .btn-success.focus {\n    -webkit-box-shadow: 0 0 0 0.2rem rgba(40, 167, 69, 0.5);\n            box-shadow: 0 0 0 0.2rem rgba(40, 167, 69, 0.5); }\n\n.btn-success.disabled, .btn-success:disabled {\n    background-color: #28a745;\n    border-color: #28a745; }\n\n.btn-success:not([disabled]):not(.disabled):active, .btn-success:not([disabled]):not(.disabled).active, .show > .btn-success.dropdown-toggle {\n    color: #fff;\n    background-color: #1e7e34;\n    border-color: #1c7430; }\n\n.btn-success:not([disabled]):not(.disabled):active:focus, .btn-success:not([disabled]):not(.disabled).active:focus, .show > .btn-success.dropdown-toggle:focus {\n      -webkit-box-shadow: 0 0 0 0.2rem rgba(40, 167, 69, 0.5);\n              box-shadow: 0 0 0 0.2rem rgba(40, 167, 69, 0.5); }\n\n.btn-info {\n  color: #fff;\n  background-color: #17a2b8;\n  border-color: #17a2b8; }\n\n.btn-info:hover {\n    color: #fff;\n    background-color: #138496;\n    border-color: #117a8b; }\n\n.btn-info:focus, .btn-info.focus {\n    -webkit-box-shadow: 0 0 0 0.2rem rgba(23, 162, 184, 0.5);\n            box-shadow: 0 0 0 0.2rem rgba(23, 162, 184, 0.5); }\n\n.btn-info.disabled, .btn-info:disabled {\n    background-color: #17a2b8;\n    border-color: #17a2b8; }\n\n.btn-info:not([disabled]):not(.disabled):active, .btn-info:not([disabled]):not(.disabled).active, .show > .btn-info.dropdown-toggle {\n    color: #fff;\n    background-color: #117a8b;\n    border-color: #10707f; }\n\n.btn-info:not([disabled]):not(.disabled):active:focus, .btn-info:not([disabled]):not(.disabled).active:focus, .show > .btn-info.dropdown-toggle:focus {\n      -webkit-box-shadow: 0 0 0 0.2rem rgba(23, 162, 184, 0.5);\n              box-shadow: 0 0 0 0.2rem rgba(23, 162, 184, 0.5); }\n\n.btn-warning {\n  color: #212529;\n  background-color: #ffc107;\n  border-color: #ffc107; }\n\n.btn-warning:hover {\n    color: #212529;\n    background-color: #e0a800;\n    border-color: #d39e00; }\n\n.btn-warning:focus, .btn-warning.focus {\n    -webkit-box-shadow: 0 0 0 0.2rem rgba(255, 193, 7, 0.5);\n            box-shadow: 0 0 0 0.2rem rgba(255, 193, 7, 0.5); }\n\n.btn-warning.disabled, .btn-warning:disabled {\n    background-color: #ffc107;\n    border-color: #ffc107; }\n\n.btn-warning:not([disabled]):not(.disabled):active, .btn-warning:not([disabled]):not(.disabled).active, .show > .btn-warning.dropdown-toggle {\n    color: #212529;\n    background-color: #d39e00;\n    border-color: #c69500; }\n\n.btn-warning:not([disabled]):not(.disabled):active:focus, .btn-warning:not([disabled]):not(.disabled).active:focus, .show > .btn-warning.dropdown-toggle:focus {\n      -webkit-box-shadow: 0 0 0 0.2rem rgba(255, 193, 7, 0.5);\n              box-shadow: 0 0 0 0.2rem rgba(255, 193, 7, 0.5); }\n\n.btn-danger {\n  color: #fff;\n  background-color: #dc3545;\n  border-color: #dc3545; }\n\n.btn-danger:hover {\n    color: #fff;\n    background-color: #c82333;\n    border-color: #bd2130; }\n\n.btn-danger:focus, .btn-danger.focus {\n    -webkit-box-shadow: 0 0 0 0.2rem rgba(220, 53, 69, 0.5);\n            box-shadow: 0 0 0 0.2rem rgba(220, 53, 69, 0.5); }\n\n.btn-danger.disabled, .btn-danger:disabled {\n    background-color: #dc3545;\n    border-color: #dc3545; }\n\n.btn-danger:not([disabled]):not(.disabled):active, .btn-danger:not([disabled]):not(.disabled).active, .show > .btn-danger.dropdown-toggle {\n    color: #fff;\n    background-color: #bd2130;\n    border-color: #b21f2d; }\n\n.btn-danger:not([disabled]):not(.disabled):active:focus, .btn-danger:not([disabled]):not(.disabled).active:focus, .show > .btn-danger.dropdown-toggle:focus {\n      -webkit-box-shadow: 0 0 0 0.2rem rgba(220, 53, 69, 0.5);\n              box-shadow: 0 0 0 0.2rem rgba(220, 53, 69, 0.5); }\n\n.btn-light {\n  color: #212529;\n  background-color: #f8f9fa;\n  border-color: #f8f9fa; }\n\n.btn-light:hover {\n    color: #212529;\n    background-color: #e2e6ea;\n    border-color: #dae0e5; }\n\n.btn-light:focus, .btn-light.focus {\n    -webkit-box-shadow: 0 0 0 0.2rem rgba(248, 249, 250, 0.5);\n            box-shadow: 0 0 0 0.2rem rgba(248, 249, 250, 0.5); }\n\n.btn-light.disabled, .btn-light:disabled {\n    background-color: #f8f9fa;\n    border-color: #f8f9fa; }\n\n.btn-light:not([disabled]):not(.disabled):active, .btn-light:not([disabled]):not(.disabled).active, .show > .btn-light.dropdown-toggle {\n    color: #212529;\n    background-color: #dae0e5;\n    border-color: #d3d9df; }\n\n.btn-light:not([disabled]):not(.disabled):active:focus, .btn-light:not([disabled]):not(.disabled).active:focus, .show > .btn-light.dropdown-toggle:focus {\n      -webkit-box-shadow: 0 0 0 0.2rem rgba(248, 249, 250, 0.5);\n              box-shadow: 0 0 0 0.2rem rgba(248, 249, 250, 0.5); }\n\n.btn-dark {\n  color: #fff;\n  background-color: #343a40;\n  border-color: #343a40; }\n\n.btn-dark:hover {\n    color: #fff;\n    background-color: #23272b;\n    border-color: #1d2124; }\n\n.btn-dark:focus, .btn-dark.focus {\n    -webkit-box-shadow: 0 0 0 0.2rem rgba(52, 58, 64, 0.5);\n            box-shadow: 0 0 0 0.2rem rgba(52, 58, 64, 0.5); }\n\n.btn-dark.disabled, .btn-dark:disabled {\n    background-color: #343a40;\n    border-color: #343a40; }\n\n.btn-dark:not([disabled]):not(.disabled):active, .btn-dark:not([disabled]):not(.disabled).active, .show > .btn-dark.dropdown-toggle {\n    color: #fff;\n    background-color: #1d2124;\n    border-color: #171a1d; }\n\n.btn-dark:not([disabled]):not(.disabled):active:focus, .btn-dark:not([disabled]):not(.disabled).active:focus, .show > .btn-dark.dropdown-toggle:focus {\n      -webkit-box-shadow: 0 0 0 0.2rem rgba(52, 58, 64, 0.5);\n              box-shadow: 0 0 0 0.2rem rgba(52, 58, 64, 0.5); }\n\n.btn-outline-primary {\n  color: #6c5353;\n  background-color: transparent;\n  background-image: none;\n  border-color: #6c5353; }\n\n.btn-outline-primary:hover {\n    color: #fff;\n    background-color: #6c5353;\n    border-color: #6c5353; }\n\n.btn-outline-primary:focus, .btn-outline-primary.focus {\n    -webkit-box-shadow: 0 0 0 0.2rem rgba(108, 83, 83, 0.5);\n            box-shadow: 0 0 0 0.2rem rgba(108, 83, 83, 0.5); }\n\n.btn-outline-primary.disabled, .btn-outline-primary:disabled {\n    color: #6c5353;\n    background-color: transparent; }\n\n.btn-outline-primary:not([disabled]):not(.disabled):active, .btn-outline-primary:not([disabled]):not(.disabled).active, .show > .btn-outline-primary.dropdown-toggle {\n    color: #212529;\n    background-color: #6c5353;\n    border-color: #6c5353;\n    -webkit-box-shadow: 0 0 0 0.2rem rgba(108, 83, 83, 0.5);\n            box-shadow: 0 0 0 0.2rem rgba(108, 83, 83, 0.5); }\n\n.btn-outline-secondary {\n  color: #868e96;\n  background-color: transparent;\n  background-image: none;\n  border-color: #868e96; }\n\n.btn-outline-secondary:hover {\n    color: #fff;\n    background-color: #868e96;\n    border-color: #868e96; }\n\n.btn-outline-secondary:focus, .btn-outline-secondary.focus {\n    -webkit-box-shadow: 0 0 0 0.2rem rgba(134, 142, 150, 0.5);\n            box-shadow: 0 0 0 0.2rem rgba(134, 142, 150, 0.5); }\n\n.btn-outline-secondary.disabled, .btn-outline-secondary:disabled {\n    color: #868e96;\n    background-color: transparent; }\n\n.btn-outline-secondary:not([disabled]):not(.disabled):active, .btn-outline-secondary:not([disabled]):not(.disabled).active, .show > .btn-outline-secondary.dropdown-toggle {\n    color: #212529;\n    background-color: #868e96;\n    border-color: #868e96;\n    -webkit-box-shadow: 0 0 0 0.2rem rgba(134, 142, 150, 0.5);\n            box-shadow: 0 0 0 0.2rem rgba(134, 142, 150, 0.5); }\n\n.btn-outline-success {\n  color: #28a745;\n  background-color: transparent;\n  background-image: none;\n  border-color: #28a745; }\n\n.btn-outline-success:hover {\n    color: #fff;\n    background-color: #28a745;\n    border-color: #28a745; }\n\n.btn-outline-success:focus, .btn-outline-success.focus {\n    -webkit-box-shadow: 0 0 0 0.2rem rgba(40, 167, 69, 0.5);\n            box-shadow: 0 0 0 0.2rem rgba(40, 167, 69, 0.5); }\n\n.btn-outline-success.disabled, .btn-outline-success:disabled {\n    color: #28a745;\n    background-color: transparent; }\n\n.btn-outline-success:not([disabled]):not(.disabled):active, .btn-outline-success:not([disabled]):not(.disabled).active, .show > .btn-outline-success.dropdown-toggle {\n    color: #212529;\n    background-color: #28a745;\n    border-color: #28a745;\n    -webkit-box-shadow: 0 0 0 0.2rem rgba(40, 167, 69, 0.5);\n            box-shadow: 0 0 0 0.2rem rgba(40, 167, 69, 0.5); }\n\n.btn-outline-info {\n  color: #17a2b8;\n  background-color: transparent;\n  background-image: none;\n  border-color: #17a2b8; }\n\n.btn-outline-info:hover {\n    color: #fff;\n    background-color: #17a2b8;\n    border-color: #17a2b8; }\n\n.btn-outline-info:focus, .btn-outline-info.focus {\n    -webkit-box-shadow: 0 0 0 0.2rem rgba(23, 162, 184, 0.5);\n            box-shadow: 0 0 0 0.2rem rgba(23, 162, 184, 0.5); }\n\n.btn-outline-info.disabled, .btn-outline-info:disabled {\n    color: #17a2b8;\n    background-color: transparent; }\n\n.btn-outline-info:not([disabled]):not(.disabled):active, .btn-outline-info:not([disabled]):not(.disabled).active, .show > .btn-outline-info.dropdown-toggle {\n    color: #212529;\n    background-color: #17a2b8;\n    border-color: #17a2b8;\n    -webkit-box-shadow: 0 0 0 0.2rem rgba(23, 162, 184, 0.5);\n            box-shadow: 0 0 0 0.2rem rgba(23, 162, 184, 0.5); }\n\n.btn-outline-warning {\n  color: #ffc107;\n  background-color: transparent;\n  background-image: none;\n  border-color: #ffc107; }\n\n.btn-outline-warning:hover {\n    color: #212529;\n    background-color: #ffc107;\n    border-color: #ffc107; }\n\n.btn-outline-warning:focus, .btn-outline-warning.focus {\n    -webkit-box-shadow: 0 0 0 0.2rem rgba(255, 193, 7, 0.5);\n            box-shadow: 0 0 0 0.2rem rgba(255, 193, 7, 0.5); }\n\n.btn-outline-warning.disabled, .btn-outline-warning:disabled {\n    color: #ffc107;\n    background-color: transparent; }\n\n.btn-outline-warning:not([disabled]):not(.disabled):active, .btn-outline-warning:not([disabled]):not(.disabled).active, .show > .btn-outline-warning.dropdown-toggle {\n    color: #212529;\n    background-color: #ffc107;\n    border-color: #ffc107;\n    -webkit-box-shadow: 0 0 0 0.2rem rgba(255, 193, 7, 0.5);\n            box-shadow: 0 0 0 0.2rem rgba(255, 193, 7, 0.5); }\n\n.btn-outline-danger {\n  color: #dc3545;\n  background-color: transparent;\n  background-image: none;\n  border-color: #dc3545; }\n\n.btn-outline-danger:hover {\n    color: #fff;\n    background-color: #dc3545;\n    border-color: #dc3545; }\n\n.btn-outline-danger:focus, .btn-outline-danger.focus {\n    -webkit-box-shadow: 0 0 0 0.2rem rgba(220, 53, 69, 0.5);\n            box-shadow: 0 0 0 0.2rem rgba(220, 53, 69, 0.5); }\n\n.btn-outline-danger.disabled, .btn-outline-danger:disabled {\n    color: #dc3545;\n    background-color: transparent; }\n\n.btn-outline-danger:not([disabled]):not(.disabled):active, .btn-outline-danger:not([disabled]):not(.disabled).active, .show > .btn-outline-danger.dropdown-toggle {\n    color: #212529;\n    background-color: #dc3545;\n    border-color: #dc3545;\n    -webkit-box-shadow: 0 0 0 0.2rem rgba(220, 53, 69, 0.5);\n            box-shadow: 0 0 0 0.2rem rgba(220, 53, 69, 0.5); }\n\n.btn-outline-light {\n  color: #f8f9fa;\n  background-color: transparent;\n  background-image: none;\n  border-color: #f8f9fa; }\n\n.btn-outline-light:hover {\n    color: #212529;\n    background-color: #f8f9fa;\n    border-color: #f8f9fa; }\n\n.btn-outline-light:focus, .btn-outline-light.focus {\n    -webkit-box-shadow: 0 0 0 0.2rem rgba(248, 249, 250, 0.5);\n            box-shadow: 0 0 0 0.2rem rgba(248, 249, 250, 0.5); }\n\n.btn-outline-light.disabled, .btn-outline-light:disabled {\n    color: #f8f9fa;\n    background-color: transparent; }\n\n.btn-outline-light:not([disabled]):not(.disabled):active, .btn-outline-light:not([disabled]):not(.disabled).active, .show > .btn-outline-light.dropdown-toggle {\n    color: #fff;\n    background-color: #f8f9fa;\n    border-color: #f8f9fa;\n    -webkit-box-shadow: 0 0 0 0.2rem rgba(248, 249, 250, 0.5);\n            box-shadow: 0 0 0 0.2rem rgba(248, 249, 250, 0.5); }\n\n.btn-outline-dark {\n  color: #343a40;\n  background-color: transparent;\n  background-image: none;\n  border-color: #343a40; }\n\n.btn-outline-dark:hover {\n    color: #fff;\n    background-color: #343a40;\n    border-color: #343a40; }\n\n.btn-outline-dark:focus, .btn-outline-dark.focus {\n    -webkit-box-shadow: 0 0 0 0.2rem rgba(52, 58, 64, 0.5);\n            box-shadow: 0 0 0 0.2rem rgba(52, 58, 64, 0.5); }\n\n.btn-outline-dark.disabled, .btn-outline-dark:disabled {\n    color: #343a40;\n    background-color: transparent; }\n\n.btn-outline-dark:not([disabled]):not(.disabled):active, .btn-outline-dark:not([disabled]):not(.disabled).active, .show > .btn-outline-dark.dropdown-toggle {\n    color: #212529;\n    background-color: #343a40;\n    border-color: #343a40;\n    -webkit-box-shadow: 0 0 0 0.2rem rgba(52, 58, 64, 0.5);\n            box-shadow: 0 0 0 0.2rem rgba(52, 58, 64, 0.5); }\n\n.btn-link {\n  font-weight: 400;\n  color: #6c5353;\n  background-color: transparent; }\n\n.btn-link:hover {\n    color: #413232;\n    text-decoration: underline;\n    background-color: transparent;\n    border-color: transparent; }\n\n.btn-link:focus, .btn-link.focus {\n    text-decoration: underline;\n    border-color: transparent;\n    -webkit-box-shadow: none;\n            box-shadow: none; }\n\n.btn-link:disabled, .btn-link.disabled {\n    color: #868e96; }\n\n.btn-lg, .btn-group-lg > .btn {\n  padding: 0.5rem 1rem;\n  font-size: 1.25rem;\n  line-height: 1.5;\n  border-radius: 0.3rem; }\n\n.btn-sm, .btn-group-sm > .btn {\n  padding: 0.25rem 0.5rem;\n  font-size: 0.875rem;\n  line-height: 1.5;\n  border-radius: 0.2rem; }\n\n.btn-block {\n  display: block;\n  width: 100%; }\n\n.btn-block + .btn-block {\n    margin-top: 0.5rem; }\n\ninput[type=\"submit\"].btn-block, input[type=\"reset\"].btn-block, input[type=\"button\"].btn-block {\n  width: 100%; }\n\n.fade {\n  opacity: 0;\n  -webkit-transition: opacity 0.15s linear;\n  transition: opacity 0.15s linear; }\n\n.fade.show {\n    opacity: 1; }\n\n.collapse {\n  display: none; }\n\n.collapse.show {\n    display: block; }\n\ntr.collapse.show {\n  display: table-row; }\n\ntbody.collapse.show {\n  display: table-row-group; }\n\n.collapsing {\n  position: relative;\n  height: 0;\n  overflow: hidden;\n  -webkit-transition: height 0.35s ease;\n  transition: height 0.35s ease; }\n\n.dropup, .dropdown {\n  position: relative; }\n\n.dropdown-toggle::after {\n  display: inline-block;\n  width: 0;\n  height: 0;\n  margin-left: 0.255em;\n  vertical-align: 0.255em;\n  content: \"\";\n  border-top: 0.3em solid;\n  border-right: 0.3em solid transparent;\n  border-bottom: 0;\n  border-left: 0.3em solid transparent; }\n\n.dropdown-toggle:empty::after {\n  margin-left: 0; }\n\n.dropdown-menu {\n  position: absolute;\n  top: 100%;\n  left: 0;\n  z-index: 1000;\n  display: none;\n  float: left;\n  min-width: 10rem;\n  padding: 0.5rem 0;\n  margin: 0.125rem 0 0;\n  font-size: 1rem;\n  color: #212529;\n  text-align: left;\n  list-style: none;\n  background-color: #fff;\n  background-clip: padding-box;\n  border: 1px solid rgba(0, 0, 0, 0.15);\n  border-radius: 0.25rem; }\n\n.dropup .dropdown-menu {\n  margin-top: 0;\n  margin-bottom: 0.125rem; }\n\n.dropup .dropdown-toggle::after {\n  display: inline-block;\n  width: 0;\n  height: 0;\n  margin-left: 0.255em;\n  vertical-align: 0.255em;\n  content: \"\";\n  border-top: 0;\n  border-right: 0.3em solid transparent;\n  border-bottom: 0.3em solid;\n  border-left: 0.3em solid transparent; }\n\n.dropup .dropdown-toggle:empty::after {\n  margin-left: 0; }\n\n.dropright .dropdown-menu {\n  margin-top: 0;\n  margin-left: 0.125rem; }\n\n.dropright .dropdown-toggle::after {\n  display: inline-block;\n  width: 0;\n  height: 0;\n  margin-left: 0.255em;\n  vertical-align: 0.255em;\n  content: \"\";\n  border-top: 0.3em solid transparent;\n  border-bottom: 0.3em solid transparent;\n  border-left: 0.3em solid; }\n\n.dropright .dropdown-toggle:empty::after {\n  margin-left: 0; }\n\n.dropright .dropdown-toggle::after {\n  vertical-align: 0; }\n\n.dropleft .dropdown-menu {\n  margin-top: 0;\n  margin-right: 0.125rem; }\n\n.dropleft .dropdown-toggle::after {\n  display: inline-block;\n  width: 0;\n  height: 0;\n  margin-left: 0.255em;\n  vertical-align: 0.255em;\n  content: \"\"; }\n\n.dropleft .dropdown-toggle::after {\n  display: none; }\n\n.dropleft .dropdown-toggle::before {\n  display: inline-block;\n  width: 0;\n  height: 0;\n  margin-right: 0.255em;\n  vertical-align: 0.255em;\n  content: \"\";\n  border-top: 0.3em solid transparent;\n  border-right: 0.3em solid;\n  border-bottom: 0.3em solid transparent; }\n\n.dropleft .dropdown-toggle:empty::after {\n  margin-left: 0; }\n\n.dropleft .dropdown-toggle::before {\n  vertical-align: 0; }\n\n.dropdown-divider {\n  height: 0;\n  margin: 0.5rem 0;\n  overflow: hidden;\n  border-top: 1px solid #e9ecef; }\n\n.dropdown-item {\n  display: block;\n  width: 100%;\n  padding: 0.25rem 1.5rem;\n  clear: both;\n  font-weight: 400;\n  color: #212529;\n  text-align: inherit;\n  white-space: nowrap;\n  background-color: transparent;\n  border: 0; }\n\n.dropdown-item:focus, .dropdown-item:hover {\n    color: #16181b;\n    text-decoration: none;\n    background-color: #f8f9fa; }\n\n.dropdown-item.active, .dropdown-item:active {\n    color: #fff;\n    text-decoration: none;\n    background-color: #6c5353; }\n\n.dropdown-item.disabled, .dropdown-item:disabled {\n    color: #868e96;\n    background-color: transparent; }\n\n.dropdown-menu.show {\n  display: block; }\n\n.dropdown-header {\n  display: block;\n  padding: 0.5rem 1.5rem;\n  margin-bottom: 0;\n  font-size: 0.875rem;\n  color: #868e96;\n  white-space: nowrap; }\n\n.btn-group, .btn-group-vertical {\n  position: relative;\n  display: -webkit-inline-box;\n  display: -ms-inline-flexbox;\n  display: inline-flex;\n  vertical-align: middle; }\n\n.btn-group > .btn, .btn-group-vertical > .btn {\n    position: relative;\n    -webkit-box-flex: 0;\n        -ms-flex: 0 1 auto;\n            flex: 0 1 auto; }\n\n.btn-group > .btn:hover, .btn-group-vertical > .btn:hover {\n      z-index: 1; }\n\n.btn-group > .btn:focus, .btn-group > .btn:active, .btn-group > .btn.active, .btn-group-vertical > .btn:focus, .btn-group-vertical > .btn:active, .btn-group-vertical > .btn.active {\n      z-index: 1; }\n\n.btn-group .btn + .btn, .btn-group .btn + .btn-group, .btn-group .btn-group + .btn, .btn-group .btn-group + .btn-group, .btn-group-vertical .btn + .btn, .btn-group-vertical .btn + .btn-group, .btn-group-vertical .btn-group + .btn, .btn-group-vertical .btn-group + .btn-group {\n    margin-left: -1px; }\n\n.btn-toolbar {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap;\n  -webkit-box-pack: start;\n      -ms-flex-pack: start;\n          justify-content: flex-start; }\n\n.btn-toolbar .input-group {\n    width: auto; }\n\n.btn-group > .btn:first-child {\n  margin-left: 0; }\n\n.btn-group > .btn:not(:last-child):not(.dropdown-toggle), .btn-group > .btn-group:not(:last-child) > .btn {\n  border-top-right-radius: 0;\n  border-bottom-right-radius: 0; }\n\n.btn-group > .btn:not(:first-child), .btn-group > .btn-group:not(:first-child) > .btn {\n  border-top-left-radius: 0;\n  border-bottom-left-radius: 0; }\n\n.dropdown-toggle-split {\n  padding-right: 0.5625rem;\n  padding-left: 0.5625rem; }\n\n.dropdown-toggle-split::after {\n    margin-left: 0; }\n\n.btn-sm + .dropdown-toggle-split, .btn-group-sm > .btn + .dropdown-toggle-split {\n  padding-right: 0.375rem;\n  padding-left: 0.375rem; }\n\n.btn-lg + .dropdown-toggle-split, .btn-group-lg > .btn + .dropdown-toggle-split {\n  padding-right: 0.75rem;\n  padding-left: 0.75rem; }\n\n.btn-group-vertical {\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-align: start;\n      -ms-flex-align: start;\n          align-items: flex-start;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center; }\n\n.btn-group-vertical .btn, .btn-group-vertical .btn-group {\n    width: 100%; }\n\n.btn-group-vertical > .btn + .btn, .btn-group-vertical > .btn + .btn-group, .btn-group-vertical > .btn-group + .btn, .btn-group-vertical > .btn-group + .btn-group {\n    margin-top: -1px;\n    margin-left: 0; }\n\n.btn-group-vertical > .btn:not(:last-child):not(.dropdown-toggle), .btn-group-vertical > .btn-group:not(:last-child) > .btn {\n    border-bottom-right-radius: 0;\n    border-bottom-left-radius: 0; }\n\n.btn-group-vertical > .btn:not(:first-child), .btn-group-vertical > .btn-group:not(:first-child) > .btn {\n    border-top-left-radius: 0;\n    border-top-right-radius: 0; }\n\n.btn-group-toggle > .btn, .btn-group-toggle > .btn-group > .btn {\n  margin-bottom: 0; }\n\n.btn-group-toggle > .btn input[type=\"radio\"], .btn-group-toggle > .btn input[type=\"checkbox\"], .btn-group-toggle > .btn-group > .btn input[type=\"radio\"], .btn-group-toggle > .btn-group > .btn input[type=\"checkbox\"] {\n    position: absolute;\n    clip: rect(0, 0, 0, 0);\n    pointer-events: none; }\n\n.input-group {\n  position: relative;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap;\n  -webkit-box-align: stretch;\n      -ms-flex-align: stretch;\n          align-items: stretch;\n  width: 100%; }\n\n.input-group .form-control, .input-group .custom-select, .input-group .custom-file {\n    position: relative;\n    -webkit-box-flex: 1;\n        -ms-flex: 1 1 auto;\n            flex: 1 1 auto;\n    width: 1%;\n    margin-bottom: 0; }\n\n.input-group .form-control:focus, .input-group .custom-select:focus, .input-group .custom-file:focus {\n      z-index: 3; }\n\n.input-group .form-control + .form-control, .input-group .custom-select + .form-control, .input-group .custom-file + .form-control {\n      margin-left: -1px; }\n\n.input-group .form-control:not(:last-child), .input-group .custom-select:not(:last-child) {\n    border-top-right-radius: 0;\n    border-bottom-right-radius: 0; }\n\n.input-group .form-control:not(:first-child), .input-group .custom-select:not(:first-child) {\n    border-top-left-radius: 0;\n    border-bottom-left-radius: 0; }\n\n.input-group .custom-file {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center; }\n\n.input-group .custom-file:not(:last-child) .custom-file-control, .input-group .custom-file:not(:last-child) .custom-file-control::before {\n      border-top-right-radius: 0;\n      border-bottom-right-radius: 0; }\n\n.input-group .custom-file:not(:first-child) .custom-file-control, .input-group .custom-file:not(:first-child) .custom-file-control::before {\n      border-top-left-radius: 0;\n      border-bottom-left-radius: 0; }\n\n.input-group-prepend, .input-group-append {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center; }\n\n.input-group-prepend .btn, .input-group-append .btn {\n    position: relative;\n    z-index: 2; }\n\n.input-group-prepend .btn + .btn, .input-group-prepend .btn + .input-group-text, .input-group-prepend .input-group-text + .input-group-text, .input-group-prepend .input-group-text + .btn, .input-group-append .btn + .btn, .input-group-append .btn + .input-group-text, .input-group-append .input-group-text + .input-group-text, .input-group-append .input-group-text + .btn {\n    margin-left: -1px; }\n\n.input-group-prepend {\n  margin-right: -1px; }\n\n.input-group-append {\n  margin-left: -1px; }\n\n.input-group-text {\n  padding: 0.375rem 0.75rem;\n  margin-bottom: 0;\n  font-size: 1rem;\n  font-weight: 400;\n  line-height: 1.5;\n  color: #495057;\n  text-align: center;\n  white-space: nowrap;\n  background-color: #e9ecef;\n  border: 1px solid #ced4da;\n  border-radius: 0.25rem; }\n\n.input-group-text input[type=\"radio\"], .input-group-text input[type=\"checkbox\"] {\n    margin-top: 0; }\n\n.input-group > .input-group-prepend > .btn, .input-group > .input-group-prepend > .input-group-text, .input-group > .input-group-append:not(:last-child) > .btn, .input-group > .input-group-append:not(:last-child) > .input-group-text, .input-group > .input-group-append:last-child > .btn:not(:last-child):not(.dropdown-toggle), .input-group > .input-group-append:last-child > .input-group-text:not(:last-child) {\n  border-top-right-radius: 0;\n  border-bottom-right-radius: 0; }\n\n.input-group > .input-group-append > .btn, .input-group > .input-group-append > .input-group-text, .input-group > .input-group-prepend:not(:first-child) > .btn, .input-group > .input-group-prepend:not(:first-child) > .input-group-text, .input-group > .input-group-prepend:first-child > .btn:not(:first-child), .input-group > .input-group-prepend:first-child > .input-group-text:not(:first-child) {\n  border-top-left-radius: 0;\n  border-bottom-left-radius: 0; }\n\n.custom-control {\n  position: relative;\n  display: block;\n  min-height: 1.5rem;\n  padding-left: 1.5rem; }\n\n.custom-control-inline {\n  display: -webkit-inline-box;\n  display: -ms-inline-flexbox;\n  display: inline-flex;\n  margin-right: 1rem; }\n\n.custom-control-input {\n  position: absolute;\n  z-index: -1;\n  opacity: 0; }\n\n.custom-control-input:checked ~ .custom-control-label::before {\n    color: #fff;\n    background-color: #6c5353; }\n\n.custom-control-input:focus ~ .custom-control-label::before {\n    -webkit-box-shadow: 0 0 0 1px #fff, 0 0 0 0.2rem rgba(108, 83, 83, 0.25);\n            box-shadow: 0 0 0 1px #fff, 0 0 0 0.2rem rgba(108, 83, 83, 0.25); }\n\n.custom-control-input:active ~ .custom-control-label::before {\n    color: #fff;\n    background-color: #c2b0b0; }\n\n.custom-control-input:disabled ~ .custom-control-label {\n    color: #868e96; }\n\n.custom-control-input:disabled ~ .custom-control-label::before {\n      background-color: #e9ecef; }\n\n.custom-control-label {\n  margin-bottom: 0; }\n\n.custom-control-label::before {\n    position: absolute;\n    top: 0.25rem;\n    left: 0;\n    display: block;\n    width: 1rem;\n    height: 1rem;\n    pointer-events: none;\n    content: \"\";\n    -webkit-user-select: none;\n       -moz-user-select: none;\n        -ms-user-select: none;\n            user-select: none;\n    background-color: #dee2e6; }\n\n.custom-control-label::after {\n    position: absolute;\n    top: 0.25rem;\n    left: 0;\n    display: block;\n    width: 1rem;\n    height: 1rem;\n    content: \"\";\n    background-repeat: no-repeat;\n    background-position: center center;\n    background-size: 50% 50%; }\n\n.custom-checkbox .custom-control-label::before {\n  border-radius: 0.25rem; }\n\n.custom-checkbox .custom-control-input:checked ~ .custom-control-label::before {\n  background-color: #6c5353; }\n\n.custom-checkbox .custom-control-input:checked ~ .custom-control-label::after {\n  background-image: url(\"data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 8 8'%3E%3Cpath fill='%23fff' d='M6.564.75l-3.59 3.612-1.538-1.55L0 4.26 2.974 7.25 8 2.193z'/%3E%3C/svg%3E\"); }\n\n.custom-checkbox .custom-control-input:indeterminate ~ .custom-control-label::before {\n  background-color: #6c5353; }\n\n.custom-checkbox .custom-control-input:indeterminate ~ .custom-control-label::after {\n  background-image: url(\"data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 4 4'%3E%3Cpath stroke='%23fff' d='M0 2h4'/%3E%3C/svg%3E\"); }\n\n.custom-radio .custom-control-label::before {\n  border-radius: 50%; }\n\n.custom-radio .custom-control-input:checked ~ .custom-control-label::before {\n  background-color: #6c5353; }\n\n.custom-radio .custom-control-input:checked ~ .custom-control-label::after {\n  background-image: url(\"data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'%3E%3Ccircle r='3' fill='%23fff'/%3E%3C/svg%3E\"); }\n\n.custom-select {\n  display: inline-block;\n  width: 100%;\n  height: calc(2.25rem + 2px);\n  padding: 0.375rem 1.75rem 0.375rem 0.75rem;\n  line-height: 1.5;\n  color: #495057;\n  vertical-align: middle;\n  background: #fff url(\"data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 4 5'%3E%3Cpath fill='%23343a40' d='M2 0L0 2h4zm0 5L0 3h4z'/%3E%3C/svg%3E\") no-repeat right 0.75rem center;\n  background-size: 8px 10px;\n  border: 1px solid #ced4da;\n  border-radius: 0.25rem;\n  -webkit-appearance: none;\n     -moz-appearance: none;\n          appearance: none; }\n\n.custom-select:focus {\n    border-color: #ac9393;\n    outline: 0;\n    -webkit-box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.075), 0 0 0 0.2rem rgba(108, 83, 83, 0.25);\n            box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.075), 0 0 0 0.2rem rgba(108, 83, 83, 0.25); }\n\n.custom-select:focus::-ms-value {\n      color: #495057;\n      background-color: #fff; }\n\n.custom-select[multiple], .custom-select[size]:not([size=\"1\"]) {\n    height: auto;\n    padding-right: 0.75rem;\n    background-image: none; }\n\n.custom-select:disabled {\n    color: #868e96;\n    background-color: #e9ecef; }\n\n.custom-select::-ms-expand {\n    opacity: 0; }\n\n.custom-select-sm {\n  height: calc(1.8125rem + 2px);\n  padding-top: 0.375rem;\n  padding-bottom: 0.375rem;\n  font-size: 75%; }\n\n.custom-select-lg {\n  height: calc(2.875rem + 2px);\n  padding-top: 0.375rem;\n  padding-bottom: 0.375rem;\n  font-size: 125%; }\n\n.custom-file {\n  position: relative;\n  display: inline-block;\n  width: 100%;\n  height: calc(2.25rem + 2px);\n  margin-bottom: 0; }\n\n.custom-file-input {\n  position: relative;\n  z-index: 2;\n  width: 100%;\n  height: calc(2.25rem + 2px);\n  margin: 0;\n  opacity: 0; }\n\n.custom-file-input:focus ~ .custom-file-control {\n    border-color: #ac9393;\n    -webkit-box-shadow: 0 0 0 0.2rem rgba(108, 83, 83, 0.25);\n            box-shadow: 0 0 0 0.2rem rgba(108, 83, 83, 0.25); }\n\n.custom-file-input:focus ~ .custom-file-control::before {\n      border-color: #ac9393; }\n\n.custom-file-input:lang(en) ~ .custom-file-label::after {\n    content: \"Browse\"; }\n\n.custom-file-label {\n  position: absolute;\n  top: 0;\n  right: 0;\n  left: 0;\n  z-index: 1;\n  height: calc(2.25rem + 2px);\n  padding: 0.375rem 0.75rem;\n  line-height: 1.5;\n  color: #495057;\n  background-color: #fff;\n  border: 1px solid #ced4da;\n  border-radius: 0.25rem; }\n\n.custom-file-label::after {\n    position: absolute;\n    top: 0;\n    right: 0;\n    bottom: 0;\n    z-index: 3;\n    display: block;\n    height: calc(calc(2.25rem + 2px) - 1px * 2);\n    padding: 0.375rem 0.75rem;\n    line-height: 1.5;\n    color: #495057;\n    content: \"Browse\";\n    background-color: #e9ecef;\n    border-left: 1px solid #ced4da;\n    border-radius: 0 0.25rem 0.25rem 0; }\n\n.nav {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap;\n  padding-left: 0;\n  margin-bottom: 0;\n  list-style: none; }\n\n.nav-link {\n  display: block;\n  padding: 0.5rem 1rem; }\n\n.nav-link:focus, .nav-link:hover {\n    text-decoration: none; }\n\n.nav-link.disabled {\n    color: #868e96; }\n\n.nav-tabs {\n  border-bottom: 1px solid #dee2e6; }\n\n.nav-tabs .nav-item {\n    margin-bottom: -1px; }\n\n.nav-tabs .nav-link {\n    border: 1px solid transparent;\n    border-top-left-radius: 0.25rem;\n    border-top-right-radius: 0.25rem; }\n\n.nav-tabs .nav-link:focus, .nav-tabs .nav-link:hover {\n      border-color: #e9ecef #e9ecef #dee2e6; }\n\n.nav-tabs .nav-link.disabled {\n      color: #868e96;\n      background-color: transparent;\n      border-color: transparent; }\n\n.nav-tabs .nav-link.active, .nav-tabs .nav-item.show .nav-link {\n    color: #495057;\n    background-color: #fff;\n    border-color: #dee2e6 #dee2e6 #fff; }\n\n.nav-tabs .dropdown-menu {\n    margin-top: -1px;\n    border-top-left-radius: 0;\n    border-top-right-radius: 0; }\n\n.nav-pills .nav-link {\n  border-radius: 0.25rem; }\n\n.nav-pills .nav-link.active, .nav-pills .show > .nav-link {\n  color: #fff;\n  background-color: #6c5353; }\n\n.nav-fill .nav-item {\n  -webkit-box-flex: 1;\n      -ms-flex: 1 1 auto;\n          flex: 1 1 auto;\n  text-align: center; }\n\n.nav-justified .nav-item {\n  -ms-flex-preferred-size: 0;\n      flex-basis: 0;\n  -webkit-box-flex: 1;\n      -ms-flex-positive: 1;\n          flex-grow: 1;\n  text-align: center; }\n\n.tab-content > .tab-pane {\n  display: none; }\n\n.tab-content > .active {\n  display: block; }\n\n.navbar {\n  position: relative;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  padding: 0.5rem 1rem; }\n\n.navbar > .container, .navbar > .container-fluid {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -ms-flex-wrap: wrap;\n        flex-wrap: wrap;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    -webkit-box-pack: justify;\n        -ms-flex-pack: justify;\n            justify-content: space-between; }\n\n.navbar-brand {\n  display: inline-block;\n  padding-top: 0.3125rem;\n  padding-bottom: 0.3125rem;\n  margin-right: 1rem;\n  font-size: 1.25rem;\n  line-height: inherit;\n  white-space: nowrap; }\n\n.navbar-brand:focus, .navbar-brand:hover {\n    text-decoration: none; }\n\n.navbar-nav {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  padding-left: 0;\n  margin-bottom: 0;\n  list-style: none; }\n\n.navbar-nav .nav-link {\n    padding-right: 0;\n    padding-left: 0; }\n\n.navbar-nav .dropdown-menu {\n    position: static;\n    float: none; }\n\n.navbar-text {\n  display: inline-block;\n  padding-top: 0.5rem;\n  padding-bottom: 0.5rem; }\n\n.navbar-collapse {\n  -ms-flex-preferred-size: 100%;\n      flex-basis: 100%;\n  -webkit-box-flex: 1;\n      -ms-flex-positive: 1;\n          flex-grow: 1;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center; }\n\n.navbar-toggler {\n  padding: 0.25rem 0.75rem;\n  font-size: 1.25rem;\n  line-height: 1;\n  background-color: transparent;\n  border: 1px solid transparent;\n  border-radius: 0.25rem; }\n\n.navbar-toggler:focus, .navbar-toggler:hover {\n    text-decoration: none; }\n\n.navbar-toggler:not([disabled]):not(.disabled) {\n    cursor: pointer; }\n\n.navbar-toggler-icon {\n  display: inline-block;\n  width: 1.5em;\n  height: 1.5em;\n  vertical-align: middle;\n  content: \"\";\n  background: no-repeat center center;\n  background-size: 100% 100%; }\n\n@media (max-width: 575.99px) {\n  .navbar-expand-sm > .container, .navbar-expand-sm > .container-fluid {\n    padding-right: 0;\n    padding-left: 0; } }\n\n@media (min-width: 576px) {\n  .navbar-expand-sm {\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n        -ms-flex-flow: row nowrap;\n            flex-flow: row nowrap;\n    -webkit-box-pack: start;\n        -ms-flex-pack: start;\n            justify-content: flex-start; }\n    .navbar-expand-sm .navbar-nav {\n      -webkit-box-orient: horizontal;\n      -webkit-box-direction: normal;\n          -ms-flex-direction: row;\n              flex-direction: row; }\n      .navbar-expand-sm .navbar-nav .dropdown-menu {\n        position: absolute; }\n      .navbar-expand-sm .navbar-nav .dropdown-menu-right {\n        right: 0;\n        left: auto; }\n      .navbar-expand-sm .navbar-nav .nav-link {\n        padding-right: .5rem;\n        padding-left: .5rem; }\n    .navbar-expand-sm > .container, .navbar-expand-sm > .container-fluid {\n      -ms-flex-wrap: nowrap;\n          flex-wrap: nowrap; }\n    .navbar-expand-sm .navbar-collapse {\n      display: -webkit-box !important;\n      display: -ms-flexbox !important;\n      display: flex !important;\n      -ms-flex-preferred-size: auto;\n          flex-basis: auto; }\n    .navbar-expand-sm .navbar-toggler {\n      display: none; }\n    .navbar-expand-sm .dropup .dropdown-menu {\n      top: auto;\n      bottom: 100%; } }\n\n@media (max-width: 767.99px) {\n  .navbar-expand-md > .container, .navbar-expand-md > .container-fluid {\n    padding-right: 0;\n    padding-left: 0; } }\n\n@media (min-width: 768px) {\n  .navbar-expand-md {\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n        -ms-flex-flow: row nowrap;\n            flex-flow: row nowrap;\n    -webkit-box-pack: start;\n        -ms-flex-pack: start;\n            justify-content: flex-start; }\n    .navbar-expand-md .navbar-nav {\n      -webkit-box-orient: horizontal;\n      -webkit-box-direction: normal;\n          -ms-flex-direction: row;\n              flex-direction: row; }\n      .navbar-expand-md .navbar-nav .dropdown-menu {\n        position: absolute; }\n      .navbar-expand-md .navbar-nav .dropdown-menu-right {\n        right: 0;\n        left: auto; }\n      .navbar-expand-md .navbar-nav .nav-link {\n        padding-right: .5rem;\n        padding-left: .5rem; }\n    .navbar-expand-md > .container, .navbar-expand-md > .container-fluid {\n      -ms-flex-wrap: nowrap;\n          flex-wrap: nowrap; }\n    .navbar-expand-md .navbar-collapse {\n      display: -webkit-box !important;\n      display: -ms-flexbox !important;\n      display: flex !important;\n      -ms-flex-preferred-size: auto;\n          flex-basis: auto; }\n    .navbar-expand-md .navbar-toggler {\n      display: none; }\n    .navbar-expand-md .dropup .dropdown-menu {\n      top: auto;\n      bottom: 100%; } }\n\n@media (max-width: 991.99px) {\n  .navbar-expand-lg > .container, .navbar-expand-lg > .container-fluid {\n    padding-right: 0;\n    padding-left: 0; } }\n\n@media (min-width: 992px) {\n  .navbar-expand-lg {\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n        -ms-flex-flow: row nowrap;\n            flex-flow: row nowrap;\n    -webkit-box-pack: start;\n        -ms-flex-pack: start;\n            justify-content: flex-start; }\n    .navbar-expand-lg .navbar-nav {\n      -webkit-box-orient: horizontal;\n      -webkit-box-direction: normal;\n          -ms-flex-direction: row;\n              flex-direction: row; }\n      .navbar-expand-lg .navbar-nav .dropdown-menu {\n        position: absolute; }\n      .navbar-expand-lg .navbar-nav .dropdown-menu-right {\n        right: 0;\n        left: auto; }\n      .navbar-expand-lg .navbar-nav .nav-link {\n        padding-right: .5rem;\n        padding-left: .5rem; }\n    .navbar-expand-lg > .container, .navbar-expand-lg > .container-fluid {\n      -ms-flex-wrap: nowrap;\n          flex-wrap: nowrap; }\n    .navbar-expand-lg .navbar-collapse {\n      display: -webkit-box !important;\n      display: -ms-flexbox !important;\n      display: flex !important;\n      -ms-flex-preferred-size: auto;\n          flex-basis: auto; }\n    .navbar-expand-lg .navbar-toggler {\n      display: none; }\n    .navbar-expand-lg .dropup .dropdown-menu {\n      top: auto;\n      bottom: 100%; } }\n\n@media (max-width: 1199.99px) {\n  .navbar-expand-xl > .container, .navbar-expand-xl > .container-fluid {\n    padding-right: 0;\n    padding-left: 0; } }\n\n@media (min-width: 1200px) {\n  .navbar-expand-xl {\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n        -ms-flex-flow: row nowrap;\n            flex-flow: row nowrap;\n    -webkit-box-pack: start;\n        -ms-flex-pack: start;\n            justify-content: flex-start; }\n    .navbar-expand-xl .navbar-nav {\n      -webkit-box-orient: horizontal;\n      -webkit-box-direction: normal;\n          -ms-flex-direction: row;\n              flex-direction: row; }\n      .navbar-expand-xl .navbar-nav .dropdown-menu {\n        position: absolute; }\n      .navbar-expand-xl .navbar-nav .dropdown-menu-right {\n        right: 0;\n        left: auto; }\n      .navbar-expand-xl .navbar-nav .nav-link {\n        padding-right: .5rem;\n        padding-left: .5rem; }\n    .navbar-expand-xl > .container, .navbar-expand-xl > .container-fluid {\n      -ms-flex-wrap: nowrap;\n          flex-wrap: nowrap; }\n    .navbar-expand-xl .navbar-collapse {\n      display: -webkit-box !important;\n      display: -ms-flexbox !important;\n      display: flex !important;\n      -ms-flex-preferred-size: auto;\n          flex-basis: auto; }\n    .navbar-expand-xl .navbar-toggler {\n      display: none; }\n    .navbar-expand-xl .dropup .dropdown-menu {\n      top: auto;\n      bottom: 100%; } }\n\n.navbar-expand {\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-flow: row nowrap;\n          flex-flow: row nowrap;\n  -webkit-box-pack: start;\n      -ms-flex-pack: start;\n          justify-content: flex-start; }\n\n.navbar-expand > .container, .navbar-expand > .container-fluid {\n    padding-right: 0;\n    padding-left: 0; }\n\n.navbar-expand .navbar-nav {\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: row;\n            flex-direction: row; }\n\n.navbar-expand .navbar-nav .dropdown-menu {\n      position: absolute; }\n\n.navbar-expand .navbar-nav .dropdown-menu-right {\n      right: 0;\n      left: auto; }\n\n.navbar-expand .navbar-nav .nav-link {\n      padding-right: .5rem;\n      padding-left: .5rem; }\n\n.navbar-expand > .container, .navbar-expand > .container-fluid {\n    -ms-flex-wrap: nowrap;\n        flex-wrap: nowrap; }\n\n.navbar-expand .navbar-collapse {\n    display: -webkit-box !important;\n    display: -ms-flexbox !important;\n    display: flex !important;\n    -ms-flex-preferred-size: auto;\n        flex-basis: auto; }\n\n.navbar-expand .navbar-toggler {\n    display: none; }\n\n.navbar-expand .dropup .dropdown-menu {\n    top: auto;\n    bottom: 100%; }\n\n.navbar-light .navbar-brand {\n  color: rgba(0, 0, 0, 0.9); }\n\n.navbar-light .navbar-brand:focus, .navbar-light .navbar-brand:hover {\n    color: rgba(0, 0, 0, 0.9); }\n\n.navbar-light .navbar-nav .nav-link {\n  color: rgba(0, 0, 0, 0.5); }\n\n.navbar-light .navbar-nav .nav-link:focus, .navbar-light .navbar-nav .nav-link:hover {\n    color: rgba(0, 0, 0, 0.7); }\n\n.navbar-light .navbar-nav .nav-link.disabled {\n    color: rgba(0, 0, 0, 0.3); }\n\n.navbar-light .navbar-nav .show > .nav-link, .navbar-light .navbar-nav .active > .nav-link, .navbar-light .navbar-nav .nav-link.show, .navbar-light .navbar-nav .nav-link.active {\n  color: rgba(0, 0, 0, 0.9); }\n\n.navbar-light .navbar-toggler {\n  color: rgba(0, 0, 0, 0.5);\n  border-color: rgba(0, 0, 0, 0.1); }\n\n.navbar-light .navbar-toggler-icon {\n  background-image: url(\"data:image/svg+xml;charset=utf8,%3Csvg viewBox='0 0 30 30' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath stroke='rgba(0, 0, 0, 0.5)' stroke-width='2' stroke-linecap='round' stroke-miterlimit='10' d='M4 7h22M4 15h22M4 23h22'/%3E%3C/svg%3E\"); }\n\n.navbar-light .navbar-text {\n  color: rgba(0, 0, 0, 0.5); }\n\n.navbar-light .navbar-text a {\n    color: rgba(0, 0, 0, 0.9); }\n\n.navbar-light .navbar-text a:focus, .navbar-light .navbar-text a:hover {\n      color: rgba(0, 0, 0, 0.9); }\n\n.navbar-dark .navbar-brand {\n  color: #fff; }\n\n.navbar-dark .navbar-brand:focus, .navbar-dark .navbar-brand:hover {\n    color: #fff; }\n\n.navbar-dark .navbar-nav .nav-link {\n  color: rgba(255, 255, 255, 0.5); }\n\n.navbar-dark .navbar-nav .nav-link:focus, .navbar-dark .navbar-nav .nav-link:hover {\n    color: rgba(255, 255, 255, 0.75); }\n\n.navbar-dark .navbar-nav .nav-link.disabled {\n    color: rgba(255, 255, 255, 0.25); }\n\n.navbar-dark .navbar-nav .show > .nav-link, .navbar-dark .navbar-nav .active > .nav-link, .navbar-dark .navbar-nav .nav-link.show, .navbar-dark .navbar-nav .nav-link.active {\n  color: #fff; }\n\n.navbar-dark .navbar-toggler {\n  color: rgba(255, 255, 255, 0.5);\n  border-color: rgba(255, 255, 255, 0.1); }\n\n.navbar-dark .navbar-toggler-icon {\n  background-image: url(\"data:image/svg+xml;charset=utf8,%3Csvg viewBox='0 0 30 30' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath stroke='rgba(255, 255, 255, 0.5)' stroke-width='2' stroke-linecap='round' stroke-miterlimit='10' d='M4 7h22M4 15h22M4 23h22'/%3E%3C/svg%3E\"); }\n\n.navbar-dark .navbar-text {\n  color: rgba(255, 255, 255, 0.5); }\n\n.navbar-dark .navbar-text a {\n    color: #fff; }\n\n.navbar-dark .navbar-text a:focus, .navbar-dark .navbar-text a:hover {\n      color: #fff; }\n\n.card {\n  position: relative;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  min-width: 0;\n  word-wrap: break-word;\n  background-color: #fff;\n  background-clip: border-box;\n  border: 1px solid rgba(0, 0, 0, 0.125);\n  border-radius: 0.25rem; }\n\n.card > hr {\n    margin-right: 0;\n    margin-left: 0; }\n\n.card > .list-group:first-child .list-group-item:first-child {\n    border-top-left-radius: 0.25rem;\n    border-top-right-radius: 0.25rem; }\n\n.card > .list-group:last-child .list-group-item:last-child {\n    border-bottom-right-radius: 0.25rem;\n    border-bottom-left-radius: 0.25rem; }\n\n.card-body {\n  -webkit-box-flex: 1;\n      -ms-flex: 1 1 auto;\n          flex: 1 1 auto;\n  padding: 1.25rem; }\n\n.card-title {\n  margin-bottom: 0.75rem; }\n\n.card-subtitle {\n  margin-top: -0.375rem;\n  margin-bottom: 0; }\n\n.card-text:last-child {\n  margin-bottom: 0; }\n\n.card-link:hover {\n  text-decoration: none; }\n\n.card-link + .card-link {\n  margin-left: 1.25rem; }\n\n.card-header {\n  padding: 0.75rem 1.25rem;\n  margin-bottom: 0;\n  background-color: rgba(0, 0, 0, 0.03);\n  border-bottom: 1px solid rgba(0, 0, 0, 0.125); }\n\n.card-header:first-child {\n    border-radius: calc(0.25rem - 1px) calc(0.25rem - 1px) 0 0; }\n\n.card-header + .list-group .list-group-item:first-child {\n    border-top: 0; }\n\n.card-footer {\n  padding: 0.75rem 1.25rem;\n  background-color: rgba(0, 0, 0, 0.03);\n  border-top: 1px solid rgba(0, 0, 0, 0.125); }\n\n.card-footer:last-child {\n    border-radius: 0 0 calc(0.25rem - 1px) calc(0.25rem - 1px); }\n\n.card-header-tabs {\n  margin-right: -0.625rem;\n  margin-bottom: -0.75rem;\n  margin-left: -0.625rem;\n  border-bottom: 0; }\n\n.card-header-pills {\n  margin-right: -0.625rem;\n  margin-left: -0.625rem; }\n\n.card-img-overlay {\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  padding: 1.25rem; }\n\n.card-img {\n  width: 100%;\n  border-radius: calc(0.25rem - 1px); }\n\n.card-img-top {\n  width: 100%;\n  border-top-left-radius: calc(0.25rem - 1px);\n  border-top-right-radius: calc(0.25rem - 1px); }\n\n.card-img-bottom {\n  width: 100%;\n  border-bottom-right-radius: calc(0.25rem - 1px);\n  border-bottom-left-radius: calc(0.25rem - 1px); }\n\n.card-deck {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column; }\n\n.card-deck .card {\n    margin-bottom: 15px; }\n\n@media (min-width: 576px) {\n    .card-deck {\n      -webkit-box-orient: horizontal;\n      -webkit-box-direction: normal;\n          -ms-flex-flow: row wrap;\n              flex-flow: row wrap;\n      margin-right: -15px;\n      margin-left: -15px; }\n      .card-deck .card {\n        display: -webkit-box;\n        display: -ms-flexbox;\n        display: flex;\n        -webkit-box-flex: 1;\n            -ms-flex: 1 0 0%;\n                flex: 1 0 0%;\n        -webkit-box-orient: vertical;\n        -webkit-box-direction: normal;\n            -ms-flex-direction: column;\n                flex-direction: column;\n        margin-right: 15px;\n        margin-bottom: 0;\n        margin-left: 15px; } }\n\n.card-group {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column; }\n\n.card-group > .card {\n    margin-bottom: 15px; }\n\n@media (min-width: 576px) {\n    .card-group {\n      -webkit-box-orient: horizontal;\n      -webkit-box-direction: normal;\n          -ms-flex-flow: row wrap;\n              flex-flow: row wrap; }\n      .card-group > .card {\n        -webkit-box-flex: 1;\n            -ms-flex: 1 0 0%;\n                flex: 1 0 0%;\n        margin-bottom: 0; }\n        .card-group > .card + .card {\n          margin-left: 0;\n          border-left: 0; }\n        .card-group > .card:first-child {\n          border-top-right-radius: 0;\n          border-bottom-right-radius: 0; }\n          .card-group > .card:first-child .card-img-top, .card-group > .card:first-child .card-header {\n            border-top-right-radius: 0; }\n          .card-group > .card:first-child .card-img-bottom, .card-group > .card:first-child .card-footer {\n            border-bottom-right-radius: 0; }\n        .card-group > .card:last-child {\n          border-top-left-radius: 0;\n          border-bottom-left-radius: 0; }\n          .card-group > .card:last-child .card-img-top, .card-group > .card:last-child .card-header {\n            border-top-left-radius: 0; }\n          .card-group > .card:last-child .card-img-bottom, .card-group > .card:last-child .card-footer {\n            border-bottom-left-radius: 0; }\n        .card-group > .card:only-child {\n          border-radius: 0.25rem; }\n          .card-group > .card:only-child .card-img-top, .card-group > .card:only-child .card-header {\n            border-top-left-radius: 0.25rem;\n            border-top-right-radius: 0.25rem; }\n          .card-group > .card:only-child .card-img-bottom, .card-group > .card:only-child .card-footer {\n            border-bottom-right-radius: 0.25rem;\n            border-bottom-left-radius: 0.25rem; }\n        .card-group > .card:not(:first-child):not(:last-child):not(:only-child) {\n          border-radius: 0; }\n          .card-group > .card:not(:first-child):not(:last-child):not(:only-child) .card-img-top, .card-group > .card:not(:first-child):not(:last-child):not(:only-child) .card-img-bottom, .card-group > .card:not(:first-child):not(:last-child):not(:only-child) .card-header, .card-group > .card:not(:first-child):not(:last-child):not(:only-child) .card-footer {\n            border-radius: 0; } }\n\n.card-columns .card {\n  margin-bottom: 0.75rem; }\n\n@media (min-width: 576px) {\n  .card-columns {\n    -webkit-column-count: 3;\n            column-count: 3;\n    -webkit-column-gap: 1.25rem;\n            column-gap: 1.25rem; }\n    .card-columns .card {\n      display: inline-block;\n      width: 100%; } }\n\n.breadcrumb {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap;\n  padding: 0.75rem 1rem;\n  margin-bottom: 1rem;\n  list-style: none;\n  background-color: #e9ecef;\n  border-radius: 0.25rem; }\n\n.breadcrumb-item + .breadcrumb-item::before {\n  display: inline-block;\n  padding-right: 0.5rem;\n  padding-left: 0.5rem;\n  color: #868e96;\n  content: \"/\"; }\n\n.breadcrumb-item + .breadcrumb-item:hover::before {\n  text-decoration: underline; }\n\n.breadcrumb-item + .breadcrumb-item:hover::before {\n  text-decoration: none; }\n\n.breadcrumb-item.active {\n  color: #868e96; }\n\n.pagination {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  padding-left: 0;\n  list-style: none;\n  border-radius: 0.25rem; }\n\n.page-link {\n  position: relative;\n  display: block;\n  padding: 0.5rem 0.75rem;\n  margin-left: -1px;\n  line-height: 1.25;\n  color: #6c5353;\n  background-color: #fff;\n  border: 1px solid #dee2e6; }\n\n.page-link:focus, .page-link:hover {\n    color: #413232;\n    text-decoration: none;\n    background-color: #e9ecef;\n    border-color: #dee2e6; }\n\n.page-link:not([disabled]):not(.disabled) {\n    cursor: pointer; }\n\n.page-item:first-child .page-link {\n  margin-left: 0;\n  border-top-left-radius: 0.25rem;\n  border-bottom-left-radius: 0.25rem; }\n\n.page-item:last-child .page-link {\n  border-top-right-radius: 0.25rem;\n  border-bottom-right-radius: 0.25rem; }\n\n.page-item.active .page-link {\n  z-index: 1;\n  color: #fff;\n  background-color: #6c5353;\n  border-color: #6c5353; }\n\n.page-item.disabled .page-link {\n  color: #868e96;\n  pointer-events: none;\n  cursor: auto;\n  background-color: #fff;\n  border-color: #dee2e6; }\n\n.pagination-lg .page-link {\n  padding: 0.75rem 1.5rem;\n  font-size: 1.25rem;\n  line-height: 1.5; }\n\n.pagination-lg .page-item:first-child .page-link {\n  border-top-left-radius: 0.3rem;\n  border-bottom-left-radius: 0.3rem; }\n\n.pagination-lg .page-item:last-child .page-link {\n  border-top-right-radius: 0.3rem;\n  border-bottom-right-radius: 0.3rem; }\n\n.pagination-sm .page-link {\n  padding: 0.25rem 0.5rem;\n  font-size: 0.875rem;\n  line-height: 1.5; }\n\n.pagination-sm .page-item:first-child .page-link {\n  border-top-left-radius: 0.2rem;\n  border-bottom-left-radius: 0.2rem; }\n\n.pagination-sm .page-item:last-child .page-link {\n  border-top-right-radius: 0.2rem;\n  border-bottom-right-radius: 0.2rem; }\n\n.badge {\n  display: inline-block;\n  padding: 0.25em 0.4em;\n  font-size: 75%;\n  font-weight: 700;\n  line-height: 1;\n  text-align: center;\n  white-space: nowrap;\n  vertical-align: baseline;\n  border-radius: 0.25rem; }\n\n.badge:empty {\n    display: none; }\n\n.btn .badge {\n  position: relative;\n  top: -1px; }\n\n.badge-pill {\n  padding-right: 0.6em;\n  padding-left: 0.6em;\n  border-radius: 10rem; }\n\n.badge-primary {\n  color: #fff;\n  background-color: #6c5353; }\n\n.badge-primary[href]:focus, .badge-primary[href]:hover {\n    color: #fff;\n    text-decoration: none;\n    background-color: #4f3d3d; }\n\n.badge-secondary {\n  color: #fff;\n  background-color: #868e96; }\n\n.badge-secondary[href]:focus, .badge-secondary[href]:hover {\n    color: #fff;\n    text-decoration: none;\n    background-color: #6c757d; }\n\n.badge-success {\n  color: #fff;\n  background-color: #28a745; }\n\n.badge-success[href]:focus, .badge-success[href]:hover {\n    color: #fff;\n    text-decoration: none;\n    background-color: #1e7e34; }\n\n.badge-info {\n  color: #fff;\n  background-color: #17a2b8; }\n\n.badge-info[href]:focus, .badge-info[href]:hover {\n    color: #fff;\n    text-decoration: none;\n    background-color: #117a8b; }\n\n.badge-warning {\n  color: #212529;\n  background-color: #ffc107; }\n\n.badge-warning[href]:focus, .badge-warning[href]:hover {\n    color: #212529;\n    text-decoration: none;\n    background-color: #d39e00; }\n\n.badge-danger {\n  color: #fff;\n  background-color: #dc3545; }\n\n.badge-danger[href]:focus, .badge-danger[href]:hover {\n    color: #fff;\n    text-decoration: none;\n    background-color: #bd2130; }\n\n.badge-light {\n  color: #212529;\n  background-color: #f8f9fa; }\n\n.badge-light[href]:focus, .badge-light[href]:hover {\n    color: #212529;\n    text-decoration: none;\n    background-color: #dae0e5; }\n\n.badge-dark {\n  color: #fff;\n  background-color: #343a40; }\n\n.badge-dark[href]:focus, .badge-dark[href]:hover {\n    color: #fff;\n    text-decoration: none;\n    background-color: #1d2124; }\n\n.jumbotron {\n  padding: 2rem 1rem;\n  margin-bottom: 2rem;\n  background-color: #e9ecef;\n  border-radius: 0.3rem; }\n\n@media (min-width: 576px) {\n    .jumbotron {\n      padding: 4rem 2rem; } }\n\n.jumbotron-fluid {\n  padding-right: 0;\n  padding-left: 0;\n  border-radius: 0; }\n\n.alert {\n  position: relative;\n  padding: 0.75rem 1.25rem;\n  margin-bottom: 1rem;\n  border: 1px solid transparent;\n  border-radius: 0.25rem; }\n\n.alert-heading {\n  color: inherit; }\n\n.alert-link {\n  font-weight: 700; }\n\n.alert-dismissible {\n  padding-right: 4rem; }\n\n.alert-dismissible .close {\n    position: absolute;\n    top: 0;\n    right: 0;\n    padding: 0.75rem 1.25rem;\n    color: inherit; }\n\n.alert-primary {\n  color: #382b2b;\n  background-color: #e2dddd;\n  border-color: #d6cfcf; }\n\n.alert-primary hr {\n    border-top-color: #cac1c1; }\n\n.alert-primary .alert-link {\n    color: #1b1515; }\n\n.alert-secondary {\n  color: #464a4e;\n  background-color: #e7e8ea;\n  border-color: #dddfe2; }\n\n.alert-secondary hr {\n    border-top-color: #cfd2d6; }\n\n.alert-secondary .alert-link {\n    color: #2e3133; }\n\n.alert-success {\n  color: #155724;\n  background-color: #d4edda;\n  border-color: #c3e6cb; }\n\n.alert-success hr {\n    border-top-color: #b1dfbb; }\n\n.alert-success .alert-link {\n    color: #0b2e13; }\n\n.alert-info {\n  color: #0c5460;\n  background-color: #d1ecf1;\n  border-color: #bee5eb; }\n\n.alert-info hr {\n    border-top-color: #abdde5; }\n\n.alert-info .alert-link {\n    color: #062c33; }\n\n.alert-warning {\n  color: #856404;\n  background-color: #fff3cd;\n  border-color: #ffeeba; }\n\n.alert-warning hr {\n    border-top-color: #ffe8a1; }\n\n.alert-warning .alert-link {\n    color: #533f03; }\n\n.alert-danger {\n  color: #721c24;\n  background-color: #f8d7da;\n  border-color: #f5c6cb; }\n\n.alert-danger hr {\n    border-top-color: #f1b0b7; }\n\n.alert-danger .alert-link {\n    color: #491217; }\n\n.alert-light {\n  color: #818182;\n  background-color: #fefefe;\n  border-color: #fdfdfe; }\n\n.alert-light hr {\n    border-top-color: #ececf6; }\n\n.alert-light .alert-link {\n    color: #686868; }\n\n.alert-dark {\n  color: #1b1e21;\n  background-color: #d6d8d9;\n  border-color: #c6c8ca; }\n\n.alert-dark hr {\n    border-top-color: #b9bbbe; }\n\n.alert-dark .alert-link {\n    color: #040505; }\n\n@-webkit-keyframes progress-bar-stripes {\n  from {\n    background-position: 1rem 0; }\n  to {\n    background-position: 0 0; } }\n\n@keyframes progress-bar-stripes {\n  from {\n    background-position: 1rem 0; }\n  to {\n    background-position: 0 0; } }\n\n.progress {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  height: 1rem;\n  overflow: hidden;\n  font-size: 0.75rem;\n  background-color: #e9ecef;\n  border-radius: 0.25rem; }\n\n.progress-bar {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  color: #fff;\n  text-align: center;\n  background-color: #6c5353;\n  -webkit-transition: width 0.6s ease;\n  transition: width 0.6s ease; }\n\n.progress-bar-striped {\n  background-image: linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent);\n  background-size: 1rem 1rem; }\n\n.progress-bar-animated {\n  -webkit-animation: progress-bar-stripes 1s linear infinite;\n          animation: progress-bar-stripes 1s linear infinite; }\n\n.media {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: start;\n      -ms-flex-align: start;\n          align-items: flex-start; }\n\n.media-body {\n  -webkit-box-flex: 1;\n      -ms-flex: 1;\n          flex: 1; }\n\n.list-group {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  padding-left: 0;\n  margin-bottom: 0; }\n\n.list-group-item-action {\n  width: 100%;\n  color: #495057;\n  text-align: inherit; }\n\n.list-group-item-action:focus, .list-group-item-action:hover {\n    color: #495057;\n    text-decoration: none;\n    background-color: #f8f9fa; }\n\n.list-group-item-action:active {\n    color: #212529;\n    background-color: #e9ecef; }\n\n.list-group-item {\n  position: relative;\n  display: block;\n  padding: 0.75rem 1.25rem;\n  margin-bottom: -1px;\n  background-color: #fff;\n  border: 1px solid rgba(0, 0, 0, 0.125); }\n\n.list-group-item:first-child {\n    border-top-left-radius: 0.25rem;\n    border-top-right-radius: 0.25rem; }\n\n.list-group-item:last-child {\n    margin-bottom: 0;\n    border-bottom-right-radius: 0.25rem;\n    border-bottom-left-radius: 0.25rem; }\n\n.list-group-item:focus, .list-group-item:hover {\n    z-index: 1;\n    text-decoration: none; }\n\n.list-group-item.disabled, .list-group-item:disabled {\n    color: #868e96;\n    background-color: #fff; }\n\n.list-group-item.active {\n    z-index: 2;\n    color: #fff;\n    background-color: #6c5353;\n    border-color: #6c5353; }\n\n.list-group-flush .list-group-item {\n  border-right: 0;\n  border-left: 0;\n  border-radius: 0; }\n\n.list-group-flush:first-child .list-group-item:first-child {\n  border-top: 0; }\n\n.list-group-flush:last-child .list-group-item:last-child {\n  border-bottom: 0; }\n\n.list-group-item-primary {\n  color: #382b2b;\n  background-color: #d6cfcf; }\n\na.list-group-item-primary, button.list-group-item-primary {\n  color: #382b2b; }\n\na.list-group-item-primary:focus, a.list-group-item-primary:hover, button.list-group-item-primary:focus, button.list-group-item-primary:hover {\n    color: #382b2b;\n    background-color: #cac1c1; }\n\na.list-group-item-primary.active, button.list-group-item-primary.active {\n    color: #fff;\n    background-color: #382b2b;\n    border-color: #382b2b; }\n\n.list-group-item-secondary {\n  color: #464a4e;\n  background-color: #dddfe2; }\n\na.list-group-item-secondary, button.list-group-item-secondary {\n  color: #464a4e; }\n\na.list-group-item-secondary:focus, a.list-group-item-secondary:hover, button.list-group-item-secondary:focus, button.list-group-item-secondary:hover {\n    color: #464a4e;\n    background-color: #cfd2d6; }\n\na.list-group-item-secondary.active, button.list-group-item-secondary.active {\n    color: #fff;\n    background-color: #464a4e;\n    border-color: #464a4e; }\n\n.list-group-item-success {\n  color: #155724;\n  background-color: #c3e6cb; }\n\na.list-group-item-success, button.list-group-item-success {\n  color: #155724; }\n\na.list-group-item-success:focus, a.list-group-item-success:hover, button.list-group-item-success:focus, button.list-group-item-success:hover {\n    color: #155724;\n    background-color: #b1dfbb; }\n\na.list-group-item-success.active, button.list-group-item-success.active {\n    color: #fff;\n    background-color: #155724;\n    border-color: #155724; }\n\n.list-group-item-info {\n  color: #0c5460;\n  background-color: #bee5eb; }\n\na.list-group-item-info, button.list-group-item-info {\n  color: #0c5460; }\n\na.list-group-item-info:focus, a.list-group-item-info:hover, button.list-group-item-info:focus, button.list-group-item-info:hover {\n    color: #0c5460;\n    background-color: #abdde5; }\n\na.list-group-item-info.active, button.list-group-item-info.active {\n    color: #fff;\n    background-color: #0c5460;\n    border-color: #0c5460; }\n\n.list-group-item-warning {\n  color: #856404;\n  background-color: #ffeeba; }\n\na.list-group-item-warning, button.list-group-item-warning {\n  color: #856404; }\n\na.list-group-item-warning:focus, a.list-group-item-warning:hover, button.list-group-item-warning:focus, button.list-group-item-warning:hover {\n    color: #856404;\n    background-color: #ffe8a1; }\n\na.list-group-item-warning.active, button.list-group-item-warning.active {\n    color: #fff;\n    background-color: #856404;\n    border-color: #856404; }\n\n.list-group-item-danger {\n  color: #721c24;\n  background-color: #f5c6cb; }\n\na.list-group-item-danger, button.list-group-item-danger {\n  color: #721c24; }\n\na.list-group-item-danger:focus, a.list-group-item-danger:hover, button.list-group-item-danger:focus, button.list-group-item-danger:hover {\n    color: #721c24;\n    background-color: #f1b0b7; }\n\na.list-group-item-danger.active, button.list-group-item-danger.active {\n    color: #fff;\n    background-color: #721c24;\n    border-color: #721c24; }\n\n.list-group-item-light {\n  color: #818182;\n  background-color: #fdfdfe; }\n\na.list-group-item-light, button.list-group-item-light {\n  color: #818182; }\n\na.list-group-item-light:focus, a.list-group-item-light:hover, button.list-group-item-light:focus, button.list-group-item-light:hover {\n    color: #818182;\n    background-color: #ececf6; }\n\na.list-group-item-light.active, button.list-group-item-light.active {\n    color: #fff;\n    background-color: #818182;\n    border-color: #818182; }\n\n.list-group-item-dark {\n  color: #1b1e21;\n  background-color: #c6c8ca; }\n\na.list-group-item-dark, button.list-group-item-dark {\n  color: #1b1e21; }\n\na.list-group-item-dark:focus, a.list-group-item-dark:hover, button.list-group-item-dark:focus, button.list-group-item-dark:hover {\n    color: #1b1e21;\n    background-color: #b9bbbe; }\n\na.list-group-item-dark.active, button.list-group-item-dark.active {\n    color: #fff;\n    background-color: #1b1e21;\n    border-color: #1b1e21; }\n\n.close {\n  float: right;\n  font-size: 1.5rem;\n  font-weight: 700;\n  line-height: 1;\n  color: #000;\n  text-shadow: 0 1px 0 #fff;\n  opacity: .5; }\n\n.close:focus, .close:hover {\n    color: #000;\n    text-decoration: none;\n    opacity: .75; }\n\n.close:not([disabled]):not(.disabled) {\n    cursor: pointer; }\n\nbutton.close {\n  padding: 0;\n  background-color: transparent;\n  border: 0;\n  -webkit-appearance: none; }\n\n.modal-open {\n  overflow: hidden; }\n\n.modal {\n  position: fixed;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  z-index: 1050;\n  display: none;\n  overflow: hidden;\n  outline: 0; }\n\n.modal-open .modal {\n    overflow-x: hidden;\n    overflow-y: auto; }\n\n.modal-dialog {\n  position: relative;\n  width: auto;\n  margin: 0.5rem;\n  pointer-events: none; }\n\n.modal.fade .modal-dialog {\n    -webkit-transition: -webkit-transform 0.3s ease-out;\n    transition: -webkit-transform 0.3s ease-out;\n    transition: transform 0.3s ease-out;\n    transition: transform 0.3s ease-out, -webkit-transform 0.3s ease-out;\n    -webkit-transform: translate(0, -25%);\n            transform: translate(0, -25%); }\n\n.modal.show .modal-dialog {\n    -webkit-transform: translate(0, 0);\n            transform: translate(0, 0); }\n\n.modal-dialog-centered {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  min-height: calc(100% - (0.5rem * 2)); }\n\n.modal-content {\n  position: relative;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  width: 100%;\n  pointer-events: auto;\n  background-color: #fff;\n  background-clip: padding-box;\n  border: 1px solid rgba(0, 0, 0, 0.2);\n  border-radius: 0.3rem;\n  outline: 0; }\n\n.modal-backdrop {\n  position: fixed;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  z-index: 1040;\n  background-color: #000; }\n\n.modal-backdrop.fade {\n    opacity: 0; }\n\n.modal-backdrop.show {\n    opacity: 0.5; }\n\n.modal-header {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: start;\n      -ms-flex-align: start;\n          align-items: flex-start;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  padding: 1rem;\n  border-bottom: 1px solid #e9ecef;\n  border-top-left-radius: 0.3rem;\n  border-top-right-radius: 0.3rem; }\n\n.modal-header .close {\n    padding: 1rem;\n    margin: -1rem -1rem -1rem auto; }\n\n.modal-title {\n  margin-bottom: 0;\n  line-height: 1.5; }\n\n.modal-body {\n  position: relative;\n  -webkit-box-flex: 1;\n      -ms-flex: 1 1 auto;\n          flex: 1 1 auto;\n  padding: 1rem; }\n\n.modal-footer {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: end;\n      -ms-flex-pack: end;\n          justify-content: flex-end;\n  padding: 1rem;\n  border-top: 1px solid #e9ecef; }\n\n.modal-footer > :not(:first-child) {\n    margin-left: .25rem; }\n\n.modal-footer > :not(:last-child) {\n    margin-right: .25rem; }\n\n.modal-scrollbar-measure {\n  position: absolute;\n  top: -9999px;\n  width: 50px;\n  height: 50px;\n  overflow: scroll; }\n\n@media (min-width: 576px) {\n  .modal-dialog {\n    max-width: 500px;\n    margin: 1.75rem auto; }\n  .modal-dialog-centered {\n    min-height: calc(100% - (1.75rem * 2)); }\n  .modal-sm {\n    max-width: 300px; } }\n\n@media (min-width: 992px) {\n  .modal-lg {\n    max-width: 800px; } }\n\n.tooltip {\n  position: absolute;\n  z-index: 1070;\n  display: block;\n  margin: 0;\n  font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\";\n  font-style: normal;\n  font-weight: 400;\n  line-height: 1.5;\n  text-align: left;\n  text-align: start;\n  text-decoration: none;\n  text-shadow: none;\n  text-transform: none;\n  letter-spacing: normal;\n  word-break: normal;\n  word-spacing: normal;\n  white-space: normal;\n  line-break: auto;\n  font-size: 0.875rem;\n  word-wrap: break-word;\n  opacity: 0; }\n\n.tooltip.show {\n    opacity: 0.9; }\n\n.tooltip .arrow {\n    position: absolute;\n    display: block;\n    width: 0.8rem;\n    height: 0.4rem; }\n\n.tooltip .arrow::before {\n      position: absolute;\n      content: \"\";\n      border-color: transparent;\n      border-style: solid; }\n\n.bs-tooltip-top, .bs-tooltip-auto[x-placement^=\"top\"] {\n  padding: 0.4rem 0; }\n\n.bs-tooltip-top .arrow, .bs-tooltip-auto[x-placement^=\"top\"] .arrow {\n    bottom: 0; }\n\n.bs-tooltip-top .arrow::before, .bs-tooltip-auto[x-placement^=\"top\"] .arrow::before {\n      top: 0;\n      border-width: 0.4rem 0.4rem 0;\n      border-top-color: #000; }\n\n.bs-tooltip-right, .bs-tooltip-auto[x-placement^=\"right\"] {\n  padding: 0 0.4rem; }\n\n.bs-tooltip-right .arrow, .bs-tooltip-auto[x-placement^=\"right\"] .arrow {\n    left: 0;\n    width: 0.4rem;\n    height: 0.8rem; }\n\n.bs-tooltip-right .arrow::before, .bs-tooltip-auto[x-placement^=\"right\"] .arrow::before {\n      right: 0;\n      border-width: 0.4rem 0.4rem 0.4rem 0;\n      border-right-color: #000; }\n\n.bs-tooltip-bottom, .bs-tooltip-auto[x-placement^=\"bottom\"] {\n  padding: 0.4rem 0; }\n\n.bs-tooltip-bottom .arrow, .bs-tooltip-auto[x-placement^=\"bottom\"] .arrow {\n    top: 0; }\n\n.bs-tooltip-bottom .arrow::before, .bs-tooltip-auto[x-placement^=\"bottom\"] .arrow::before {\n      bottom: 0;\n      border-width: 0 0.4rem 0.4rem;\n      border-bottom-color: #000; }\n\n.bs-tooltip-left, .bs-tooltip-auto[x-placement^=\"left\"] {\n  padding: 0 0.4rem; }\n\n.bs-tooltip-left .arrow, .bs-tooltip-auto[x-placement^=\"left\"] .arrow {\n    right: 0;\n    width: 0.4rem;\n    height: 0.8rem; }\n\n.bs-tooltip-left .arrow::before, .bs-tooltip-auto[x-placement^=\"left\"] .arrow::before {\n      left: 0;\n      border-width: 0.4rem 0 0.4rem 0.4rem;\n      border-left-color: #000; }\n\n.tooltip-inner {\n  max-width: 200px;\n  padding: 0.25rem 0.5rem;\n  color: #fff;\n  text-align: center;\n  background-color: #000;\n  border-radius: 0.25rem; }\n\n.popover {\n  position: absolute;\n  top: 0;\n  left: 0;\n  z-index: 1060;\n  display: block;\n  max-width: 276px;\n  font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\";\n  font-style: normal;\n  font-weight: 400;\n  line-height: 1.5;\n  text-align: left;\n  text-align: start;\n  text-decoration: none;\n  text-shadow: none;\n  text-transform: none;\n  letter-spacing: normal;\n  word-break: normal;\n  word-spacing: normal;\n  white-space: normal;\n  line-break: auto;\n  font-size: 0.875rem;\n  word-wrap: break-word;\n  background-color: #fff;\n  background-clip: padding-box;\n  border: 1px solid rgba(0, 0, 0, 0.2);\n  border-radius: 0.3rem; }\n\n.popover .arrow {\n    position: absolute;\n    display: block;\n    width: 1rem;\n    height: 0.5rem;\n    margin: 0 0.3rem; }\n\n.popover .arrow::before, .popover .arrow::after {\n      position: absolute;\n      display: block;\n      content: \"\";\n      border-color: transparent;\n      border-style: solid; }\n\n.bs-popover-top, .bs-popover-auto[x-placement^=\"top\"] {\n  margin-bottom: 0.5rem; }\n\n.bs-popover-top .arrow, .bs-popover-auto[x-placement^=\"top\"] .arrow {\n    bottom: calc((0.5rem + 1px) * -1); }\n\n.bs-popover-top .arrow::before, .bs-popover-auto[x-placement^=\"top\"] .arrow::before, .bs-popover-top .arrow::after, .bs-popover-auto[x-placement^=\"top\"] .arrow::after {\n    border-width: 0.5rem 0.5rem 0; }\n\n.bs-popover-top .arrow::before, .bs-popover-auto[x-placement^=\"top\"] .arrow::before {\n    bottom: 0;\n    border-top-color: rgba(0, 0, 0, 0.25); }\n\n.bs-popover-top .arrow::after, .bs-popover-auto[x-placement^=\"top\"] .arrow::after {\n    bottom: 1px;\n    border-top-color: #fff; }\n\n.bs-popover-right, .bs-popover-auto[x-placement^=\"right\"] {\n  margin-left: 0.5rem; }\n\n.bs-popover-right .arrow, .bs-popover-auto[x-placement^=\"right\"] .arrow {\n    left: calc((0.5rem + 1px) * -1);\n    width: 0.5rem;\n    height: 1rem;\n    margin: 0.3rem 0; }\n\n.bs-popover-right .arrow::before, .bs-popover-auto[x-placement^=\"right\"] .arrow::before, .bs-popover-right .arrow::after, .bs-popover-auto[x-placement^=\"right\"] .arrow::after {\n    border-width: 0.5rem 0.5rem 0.5rem 0; }\n\n.bs-popover-right .arrow::before, .bs-popover-auto[x-placement^=\"right\"] .arrow::before {\n    left: 0;\n    border-right-color: rgba(0, 0, 0, 0.25); }\n\n.bs-popover-right .arrow::after, .bs-popover-auto[x-placement^=\"right\"] .arrow::after {\n    left: 1px;\n    border-right-color: #fff; }\n\n.bs-popover-bottom, .bs-popover-auto[x-placement^=\"bottom\"] {\n  margin-top: 0.5rem; }\n\n.bs-popover-bottom .arrow, .bs-popover-auto[x-placement^=\"bottom\"] .arrow {\n    top: calc((0.5rem + 1px) * -1); }\n\n.bs-popover-bottom .arrow::before, .bs-popover-auto[x-placement^=\"bottom\"] .arrow::before, .bs-popover-bottom .arrow::after, .bs-popover-auto[x-placement^=\"bottom\"] .arrow::after {\n    border-width: 0 0.5rem 0.5rem 0.5rem; }\n\n.bs-popover-bottom .arrow::before, .bs-popover-auto[x-placement^=\"bottom\"] .arrow::before {\n    top: 0;\n    border-bottom-color: rgba(0, 0, 0, 0.25); }\n\n.bs-popover-bottom .arrow::after, .bs-popover-auto[x-placement^=\"bottom\"] .arrow::after {\n    top: 1px;\n    border-bottom-color: #fff; }\n\n.bs-popover-bottom .popover-header::before, .bs-popover-auto[x-placement^=\"bottom\"] .popover-header::before {\n    position: absolute;\n    top: 0;\n    left: 50%;\n    display: block;\n    width: 1rem;\n    margin-left: -0.5rem;\n    content: \"\";\n    border-bottom: 1px solid #f7f7f7; }\n\n.bs-popover-left, .bs-popover-auto[x-placement^=\"left\"] {\n  margin-right: 0.5rem; }\n\n.bs-popover-left .arrow, .bs-popover-auto[x-placement^=\"left\"] .arrow {\n    right: calc((0.5rem + 1px) * -1);\n    width: 0.5rem;\n    height: 1rem;\n    margin: 0.3rem 0; }\n\n.bs-popover-left .arrow::before, .bs-popover-auto[x-placement^=\"left\"] .arrow::before, .bs-popover-left .arrow::after, .bs-popover-auto[x-placement^=\"left\"] .arrow::after {\n    border-width: 0.5rem 0 0.5rem 0.5rem; }\n\n.bs-popover-left .arrow::before, .bs-popover-auto[x-placement^=\"left\"] .arrow::before {\n    right: 0;\n    border-left-color: rgba(0, 0, 0, 0.25); }\n\n.bs-popover-left .arrow::after, .bs-popover-auto[x-placement^=\"left\"] .arrow::after {\n    right: 1px;\n    border-left-color: #fff; }\n\n.popover-header {\n  padding: 0.5rem 0.75rem;\n  margin-bottom: 0;\n  font-size: 1rem;\n  color: inherit;\n  background-color: #f7f7f7;\n  border-bottom: 1px solid #ebebeb;\n  border-top-left-radius: calc(0.3rem - 1px);\n  border-top-right-radius: calc(0.3rem - 1px); }\n\n.popover-header:empty {\n    display: none; }\n\n.popover-body {\n  padding: 0.5rem 0.75rem;\n  color: #212529; }\n\n.carousel {\n  position: relative; }\n\n.carousel-inner {\n  position: relative;\n  width: 100%;\n  overflow: hidden; }\n\n.carousel-item {\n  position: relative;\n  display: none;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  width: 100%;\n  -webkit-transition: -webkit-transform 0.6s ease;\n  transition: -webkit-transform 0.6s ease;\n  transition: transform 0.6s ease;\n  transition: transform 0.6s ease, -webkit-transform 0.6s ease;\n  -webkit-backface-visibility: hidden;\n          backface-visibility: hidden;\n  -webkit-perspective: 1000px;\n          perspective: 1000px; }\n\n.carousel-item.active, .carousel-item-next, .carousel-item-prev {\n  display: block; }\n\n.carousel-item-next, .carousel-item-prev {\n  position: absolute;\n  top: 0; }\n\n.carousel-item-next.carousel-item-left, .carousel-item-prev.carousel-item-right {\n  -webkit-transform: translateX(0);\n          transform: translateX(0); }\n\n@supports ((-webkit-transform-style: preserve-3d) or (transform-style: preserve-3d)) {\n    .carousel-item-next.carousel-item-left, .carousel-item-prev.carousel-item-right {\n      -webkit-transform: translate3d(0, 0, 0);\n              transform: translate3d(0, 0, 0); } }\n\n.carousel-item-next, .active.carousel-item-right {\n  -webkit-transform: translateX(100%);\n          transform: translateX(100%); }\n\n@supports ((-webkit-transform-style: preserve-3d) or (transform-style: preserve-3d)) {\n    .carousel-item-next, .active.carousel-item-right {\n      -webkit-transform: translate3d(100%, 0, 0);\n              transform: translate3d(100%, 0, 0); } }\n\n.carousel-item-prev, .active.carousel-item-left {\n  -webkit-transform: translateX(-100%);\n          transform: translateX(-100%); }\n\n@supports ((-webkit-transform-style: preserve-3d) or (transform-style: preserve-3d)) {\n    .carousel-item-prev, .active.carousel-item-left {\n      -webkit-transform: translate3d(-100%, 0, 0);\n              transform: translate3d(-100%, 0, 0); } }\n\n.carousel-control-prev, .carousel-control-next {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  width: 15%;\n  color: #fff;\n  text-align: center;\n  opacity: 0.5; }\n\n.carousel-control-prev:focus, .carousel-control-prev:hover, .carousel-control-next:focus, .carousel-control-next:hover {\n    color: #fff;\n    text-decoration: none;\n    outline: 0;\n    opacity: .9; }\n\n.carousel-control-prev {\n  left: 0; }\n\n.carousel-control-next {\n  right: 0; }\n\n.carousel-control-prev-icon, .carousel-control-next-icon {\n  display: inline-block;\n  width: 20px;\n  height: 20px;\n  background: transparent no-repeat center center;\n  background-size: 100% 100%; }\n\n.carousel-control-prev-icon {\n  background-image: url(\"data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='%23fff' viewBox='0 0 8 8'%3E%3Cpath d='M5.25 0l-4 4 4 4 1.5-1.5-2.5-2.5 2.5-2.5-1.5-1.5z'/%3E%3C/svg%3E\"); }\n\n.carousel-control-next-icon {\n  background-image: url(\"data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='%23fff' viewBox='0 0 8 8'%3E%3Cpath d='M2.75 0l-1.5 1.5 2.5 2.5-2.5 2.5 1.5 1.5 4-4-4-4z'/%3E%3C/svg%3E\"); }\n\n.carousel-indicators {\n  position: absolute;\n  right: 0;\n  bottom: 10px;\n  left: 0;\n  z-index: 15;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  padding-left: 0;\n  margin-right: 15%;\n  margin-left: 15%;\n  list-style: none; }\n\n.carousel-indicators li {\n    position: relative;\n    -webkit-box-flex: 0;\n        -ms-flex: 0 1 auto;\n            flex: 0 1 auto;\n    width: 30px;\n    height: 3px;\n    margin-right: 3px;\n    margin-left: 3px;\n    text-indent: -999px;\n    background-color: rgba(255, 255, 255, 0.5); }\n\n.carousel-indicators li::before {\n      position: absolute;\n      top: -10px;\n      left: 0;\n      display: inline-block;\n      width: 100%;\n      height: 10px;\n      content: \"\"; }\n\n.carousel-indicators li::after {\n      position: absolute;\n      bottom: -10px;\n      left: 0;\n      display: inline-block;\n      width: 100%;\n      height: 10px;\n      content: \"\"; }\n\n.carousel-indicators .active {\n    background-color: #fff; }\n\n.carousel-caption {\n  position: absolute;\n  right: 15%;\n  bottom: 20px;\n  left: 15%;\n  z-index: 10;\n  padding-top: 20px;\n  padding-bottom: 20px;\n  color: #fff;\n  text-align: center; }\n\n.align-baseline {\n  vertical-align: baseline !important; }\n\n.align-top {\n  vertical-align: top !important; }\n\n.align-middle {\n  vertical-align: middle !important; }\n\n.align-bottom {\n  vertical-align: bottom !important; }\n\n.align-text-bottom {\n  vertical-align: text-bottom !important; }\n\n.align-text-top {\n  vertical-align: text-top !important; }\n\n.bg-primary {\n  background-color: #6c5353 !important; }\n\na.bg-primary:focus, a.bg-primary:hover, button.bg-primary:focus, button.bg-primary:hover {\n  background-color: #4f3d3d !important; }\n\n.bg-secondary {\n  background-color: #868e96 !important; }\n\na.bg-secondary:focus, a.bg-secondary:hover, button.bg-secondary:focus, button.bg-secondary:hover {\n  background-color: #6c757d !important; }\n\n.bg-success {\n  background-color: #28a745 !important; }\n\na.bg-success:focus, a.bg-success:hover, button.bg-success:focus, button.bg-success:hover {\n  background-color: #1e7e34 !important; }\n\n.bg-info {\n  background-color: #17a2b8 !important; }\n\na.bg-info:focus, a.bg-info:hover, button.bg-info:focus, button.bg-info:hover {\n  background-color: #117a8b !important; }\n\n.bg-warning {\n  background-color: #ffc107 !important; }\n\na.bg-warning:focus, a.bg-warning:hover, button.bg-warning:focus, button.bg-warning:hover {\n  background-color: #d39e00 !important; }\n\n.bg-danger {\n  background-color: #dc3545 !important; }\n\na.bg-danger:focus, a.bg-danger:hover, button.bg-danger:focus, button.bg-danger:hover {\n  background-color: #bd2130 !important; }\n\n.bg-light {\n  background-color: #f8f9fa !important; }\n\na.bg-light:focus, a.bg-light:hover, button.bg-light:focus, button.bg-light:hover {\n  background-color: #dae0e5 !important; }\n\n.bg-dark {\n  background-color: #343a40 !important; }\n\na.bg-dark:focus, a.bg-dark:hover, button.bg-dark:focus, button.bg-dark:hover {\n  background-color: #1d2124 !important; }\n\n.bg-white {\n  background-color: #fff !important; }\n\n.bg-transparent {\n  background-color: transparent !important; }\n\n.border {\n  border: 1px solid #e9ecef !important; }\n\n.border-0 {\n  border: 0 !important; }\n\n.border-top-0 {\n  border-top: 0 !important; }\n\n.border-right-0 {\n  border-right: 0 !important; }\n\n.border-bottom-0 {\n  border-bottom: 0 !important; }\n\n.border-left-0 {\n  border-left: 0 !important; }\n\n.border-primary {\n  border-color: #6c5353 !important; }\n\n.border-secondary {\n  border-color: #868e96 !important; }\n\n.border-success {\n  border-color: #28a745 !important; }\n\n.border-info {\n  border-color: #17a2b8 !important; }\n\n.border-warning {\n  border-color: #ffc107 !important; }\n\n.border-danger {\n  border-color: #dc3545 !important; }\n\n.border-light {\n  border-color: #f8f9fa !important; }\n\n.border-dark {\n  border-color: #343a40 !important; }\n\n.border-white {\n  border-color: #fff !important; }\n\n.rounded {\n  border-radius: 0.25rem !important; }\n\n.rounded-top {\n  border-top-left-radius: 0.25rem !important;\n  border-top-right-radius: 0.25rem !important; }\n\n.rounded-right {\n  border-top-right-radius: 0.25rem !important;\n  border-bottom-right-radius: 0.25rem !important; }\n\n.rounded-bottom {\n  border-bottom-right-radius: 0.25rem !important;\n  border-bottom-left-radius: 0.25rem !important; }\n\n.rounded-left {\n  border-top-left-radius: 0.25rem !important;\n  border-bottom-left-radius: 0.25rem !important; }\n\n.rounded-circle {\n  border-radius: 50% !important; }\n\n.rounded-0 {\n  border-radius: 0 !important; }\n\n.clearfix::after {\n  display: block;\n  clear: both;\n  content: \"\"; }\n\n.d-none {\n  display: none !important; }\n\n.d-inline {\n  display: inline !important; }\n\n.d-inline-block {\n  display: inline-block !important; }\n\n.d-block {\n  display: block !important; }\n\n.d-table {\n  display: table !important; }\n\n.d-table-row {\n  display: table-row !important; }\n\n.d-table-cell {\n  display: table-cell !important; }\n\n.d-flex {\n  display: -webkit-box !important;\n  display: -ms-flexbox !important;\n  display: flex !important; }\n\n.d-inline-flex {\n  display: -webkit-inline-box !important;\n  display: -ms-inline-flexbox !important;\n  display: inline-flex !important; }\n\n@media (min-width: 576px) {\n  .d-sm-none {\n    display: none !important; }\n  .d-sm-inline {\n    display: inline !important; }\n  .d-sm-inline-block {\n    display: inline-block !important; }\n  .d-sm-block {\n    display: block !important; }\n  .d-sm-table {\n    display: table !important; }\n  .d-sm-table-row {\n    display: table-row !important; }\n  .d-sm-table-cell {\n    display: table-cell !important; }\n  .d-sm-flex {\n    display: -webkit-box !important;\n    display: -ms-flexbox !important;\n    display: flex !important; }\n  .d-sm-inline-flex {\n    display: -webkit-inline-box !important;\n    display: -ms-inline-flexbox !important;\n    display: inline-flex !important; } }\n\n@media (min-width: 768px) {\n  .d-md-none {\n    display: none !important; }\n  .d-md-inline {\n    display: inline !important; }\n  .d-md-inline-block {\n    display: inline-block !important; }\n  .d-md-block {\n    display: block !important; }\n  .d-md-table {\n    display: table !important; }\n  .d-md-table-row {\n    display: table-row !important; }\n  .d-md-table-cell {\n    display: table-cell !important; }\n  .d-md-flex {\n    display: -webkit-box !important;\n    display: -ms-flexbox !important;\n    display: flex !important; }\n  .d-md-inline-flex {\n    display: -webkit-inline-box !important;\n    display: -ms-inline-flexbox !important;\n    display: inline-flex !important; } }\n\n@media (min-width: 992px) {\n  .d-lg-none {\n    display: none !important; }\n  .d-lg-inline {\n    display: inline !important; }\n  .d-lg-inline-block {\n    display: inline-block !important; }\n  .d-lg-block {\n    display: block !important; }\n  .d-lg-table {\n    display: table !important; }\n  .d-lg-table-row {\n    display: table-row !important; }\n  .d-lg-table-cell {\n    display: table-cell !important; }\n  .d-lg-flex {\n    display: -webkit-box !important;\n    display: -ms-flexbox !important;\n    display: flex !important; }\n  .d-lg-inline-flex {\n    display: -webkit-inline-box !important;\n    display: -ms-inline-flexbox !important;\n    display: inline-flex !important; } }\n\n@media (min-width: 1200px) {\n  .d-xl-none {\n    display: none !important; }\n  .d-xl-inline {\n    display: inline !important; }\n  .d-xl-inline-block {\n    display: inline-block !important; }\n  .d-xl-block {\n    display: block !important; }\n  .d-xl-table {\n    display: table !important; }\n  .d-xl-table-row {\n    display: table-row !important; }\n  .d-xl-table-cell {\n    display: table-cell !important; }\n  .d-xl-flex {\n    display: -webkit-box !important;\n    display: -ms-flexbox !important;\n    display: flex !important; }\n  .d-xl-inline-flex {\n    display: -webkit-inline-box !important;\n    display: -ms-inline-flexbox !important;\n    display: inline-flex !important; } }\n\n.d-print-block {\n  display: none !important; }\n\n@media print {\n    .d-print-block {\n      display: block !important; } }\n\n.d-print-inline {\n  display: none !important; }\n\n@media print {\n    .d-print-inline {\n      display: inline !important; } }\n\n.d-print-inline-block {\n  display: none !important; }\n\n@media print {\n    .d-print-inline-block {\n      display: inline-block !important; } }\n\n@media print {\n  .d-print-none {\n    display: none !important; } }\n\n.embed-responsive {\n  position: relative;\n  display: block;\n  width: 100%;\n  padding: 0;\n  overflow: hidden; }\n\n.embed-responsive::before {\n    display: block;\n    content: \"\"; }\n\n.embed-responsive .embed-responsive-item, .embed-responsive iframe, .embed-responsive embed, .embed-responsive object, .embed-responsive video {\n    position: absolute;\n    top: 0;\n    bottom: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    border: 0; }\n\n.embed-responsive-21by9::before {\n  padding-top: 42.85714%; }\n\n.embed-responsive-16by9::before {\n  padding-top: 56.25%; }\n\n.embed-responsive-4by3::before {\n  padding-top: 75%; }\n\n.embed-responsive-1by1::before {\n  padding-top: 100%; }\n\n.flex-row {\n  -webkit-box-orient: horizontal !important;\n  -webkit-box-direction: normal !important;\n      -ms-flex-direction: row !important;\n          flex-direction: row !important; }\n\n.flex-column {\n  -webkit-box-orient: vertical !important;\n  -webkit-box-direction: normal !important;\n      -ms-flex-direction: column !important;\n          flex-direction: column !important; }\n\n.flex-row-reverse {\n  -webkit-box-orient: horizontal !important;\n  -webkit-box-direction: reverse !important;\n      -ms-flex-direction: row-reverse !important;\n          flex-direction: row-reverse !important; }\n\n.flex-column-reverse {\n  -webkit-box-orient: vertical !important;\n  -webkit-box-direction: reverse !important;\n      -ms-flex-direction: column-reverse !important;\n          flex-direction: column-reverse !important; }\n\n.flex-wrap {\n  -ms-flex-wrap: wrap !important;\n      flex-wrap: wrap !important; }\n\n.flex-nowrap {\n  -ms-flex-wrap: nowrap !important;\n      flex-wrap: nowrap !important; }\n\n.flex-wrap-reverse {\n  -ms-flex-wrap: wrap-reverse !important;\n      flex-wrap: wrap-reverse !important; }\n\n.justify-content-start {\n  -webkit-box-pack: start !important;\n      -ms-flex-pack: start !important;\n          justify-content: flex-start !important; }\n\n.justify-content-end {\n  -webkit-box-pack: end !important;\n      -ms-flex-pack: end !important;\n          justify-content: flex-end !important; }\n\n.justify-content-center {\n  -webkit-box-pack: center !important;\n      -ms-flex-pack: center !important;\n          justify-content: center !important; }\n\n.justify-content-between {\n  -webkit-box-pack: justify !important;\n      -ms-flex-pack: justify !important;\n          justify-content: space-between !important; }\n\n.justify-content-around {\n  -ms-flex-pack: distribute !important;\n      justify-content: space-around !important; }\n\n.align-items-start {\n  -webkit-box-align: start !important;\n      -ms-flex-align: start !important;\n          align-items: flex-start !important; }\n\n.align-items-end {\n  -webkit-box-align: end !important;\n      -ms-flex-align: end !important;\n          align-items: flex-end !important; }\n\n.align-items-center {\n  -webkit-box-align: center !important;\n      -ms-flex-align: center !important;\n          align-items: center !important; }\n\n.align-items-baseline {\n  -webkit-box-align: baseline !important;\n      -ms-flex-align: baseline !important;\n          align-items: baseline !important; }\n\n.align-items-stretch {\n  -webkit-box-align: stretch !important;\n      -ms-flex-align: stretch !important;\n          align-items: stretch !important; }\n\n.align-content-start {\n  -ms-flex-line-pack: start !important;\n      align-content: flex-start !important; }\n\n.align-content-end {\n  -ms-flex-line-pack: end !important;\n      align-content: flex-end !important; }\n\n.align-content-center {\n  -ms-flex-line-pack: center !important;\n      align-content: center !important; }\n\n.align-content-between {\n  -ms-flex-line-pack: justify !important;\n      align-content: space-between !important; }\n\n.align-content-around {\n  -ms-flex-line-pack: distribute !important;\n      align-content: space-around !important; }\n\n.align-content-stretch {\n  -ms-flex-line-pack: stretch !important;\n      align-content: stretch !important; }\n\n.align-self-auto {\n  -ms-flex-item-align: auto !important;\n      align-self: auto !important; }\n\n.align-self-start {\n  -ms-flex-item-align: start !important;\n      align-self: flex-start !important; }\n\n.align-self-end {\n  -ms-flex-item-align: end !important;\n      align-self: flex-end !important; }\n\n.align-self-center {\n  -ms-flex-item-align: center !important;\n      align-self: center !important; }\n\n.align-self-baseline {\n  -ms-flex-item-align: baseline !important;\n      align-self: baseline !important; }\n\n.align-self-stretch {\n  -ms-flex-item-align: stretch !important;\n      align-self: stretch !important; }\n\n@media (min-width: 576px) {\n  .flex-sm-row {\n    -webkit-box-orient: horizontal !important;\n    -webkit-box-direction: normal !important;\n        -ms-flex-direction: row !important;\n            flex-direction: row !important; }\n  .flex-sm-column {\n    -webkit-box-orient: vertical !important;\n    -webkit-box-direction: normal !important;\n        -ms-flex-direction: column !important;\n            flex-direction: column !important; }\n  .flex-sm-row-reverse {\n    -webkit-box-orient: horizontal !important;\n    -webkit-box-direction: reverse !important;\n        -ms-flex-direction: row-reverse !important;\n            flex-direction: row-reverse !important; }\n  .flex-sm-column-reverse {\n    -webkit-box-orient: vertical !important;\n    -webkit-box-direction: reverse !important;\n        -ms-flex-direction: column-reverse !important;\n            flex-direction: column-reverse !important; }\n  .flex-sm-wrap {\n    -ms-flex-wrap: wrap !important;\n        flex-wrap: wrap !important; }\n  .flex-sm-nowrap {\n    -ms-flex-wrap: nowrap !important;\n        flex-wrap: nowrap !important; }\n  .flex-sm-wrap-reverse {\n    -ms-flex-wrap: wrap-reverse !important;\n        flex-wrap: wrap-reverse !important; }\n  .justify-content-sm-start {\n    -webkit-box-pack: start !important;\n        -ms-flex-pack: start !important;\n            justify-content: flex-start !important; }\n  .justify-content-sm-end {\n    -webkit-box-pack: end !important;\n        -ms-flex-pack: end !important;\n            justify-content: flex-end !important; }\n  .justify-content-sm-center {\n    -webkit-box-pack: center !important;\n        -ms-flex-pack: center !important;\n            justify-content: center !important; }\n  .justify-content-sm-between {\n    -webkit-box-pack: justify !important;\n        -ms-flex-pack: justify !important;\n            justify-content: space-between !important; }\n  .justify-content-sm-around {\n    -ms-flex-pack: distribute !important;\n        justify-content: space-around !important; }\n  .align-items-sm-start {\n    -webkit-box-align: start !important;\n        -ms-flex-align: start !important;\n            align-items: flex-start !important; }\n  .align-items-sm-end {\n    -webkit-box-align: end !important;\n        -ms-flex-align: end !important;\n            align-items: flex-end !important; }\n  .align-items-sm-center {\n    -webkit-box-align: center !important;\n        -ms-flex-align: center !important;\n            align-items: center !important; }\n  .align-items-sm-baseline {\n    -webkit-box-align: baseline !important;\n        -ms-flex-align: baseline !important;\n            align-items: baseline !important; }\n  .align-items-sm-stretch {\n    -webkit-box-align: stretch !important;\n        -ms-flex-align: stretch !important;\n            align-items: stretch !important; }\n  .align-content-sm-start {\n    -ms-flex-line-pack: start !important;\n        align-content: flex-start !important; }\n  .align-content-sm-end {\n    -ms-flex-line-pack: end !important;\n        align-content: flex-end !important; }\n  .align-content-sm-center {\n    -ms-flex-line-pack: center !important;\n        align-content: center !important; }\n  .align-content-sm-between {\n    -ms-flex-line-pack: justify !important;\n        align-content: space-between !important; }\n  .align-content-sm-around {\n    -ms-flex-line-pack: distribute !important;\n        align-content: space-around !important; }\n  .align-content-sm-stretch {\n    -ms-flex-line-pack: stretch !important;\n        align-content: stretch !important; }\n  .align-self-sm-auto {\n    -ms-flex-item-align: auto !important;\n        align-self: auto !important; }\n  .align-self-sm-start {\n    -ms-flex-item-align: start !important;\n        align-self: flex-start !important; }\n  .align-self-sm-end {\n    -ms-flex-item-align: end !important;\n        align-self: flex-end !important; }\n  .align-self-sm-center {\n    -ms-flex-item-align: center !important;\n        align-self: center !important; }\n  .align-self-sm-baseline {\n    -ms-flex-item-align: baseline !important;\n        align-self: baseline !important; }\n  .align-self-sm-stretch {\n    -ms-flex-item-align: stretch !important;\n        align-self: stretch !important; } }\n\n@media (min-width: 768px) {\n  .flex-md-row {\n    -webkit-box-orient: horizontal !important;\n    -webkit-box-direction: normal !important;\n        -ms-flex-direction: row !important;\n            flex-direction: row !important; }\n  .flex-md-column {\n    -webkit-box-orient: vertical !important;\n    -webkit-box-direction: normal !important;\n        -ms-flex-direction: column !important;\n            flex-direction: column !important; }\n  .flex-md-row-reverse {\n    -webkit-box-orient: horizontal !important;\n    -webkit-box-direction: reverse !important;\n        -ms-flex-direction: row-reverse !important;\n            flex-direction: row-reverse !important; }\n  .flex-md-column-reverse {\n    -webkit-box-orient: vertical !important;\n    -webkit-box-direction: reverse !important;\n        -ms-flex-direction: column-reverse !important;\n            flex-direction: column-reverse !important; }\n  .flex-md-wrap {\n    -ms-flex-wrap: wrap !important;\n        flex-wrap: wrap !important; }\n  .flex-md-nowrap {\n    -ms-flex-wrap: nowrap !important;\n        flex-wrap: nowrap !important; }\n  .flex-md-wrap-reverse {\n    -ms-flex-wrap: wrap-reverse !important;\n        flex-wrap: wrap-reverse !important; }\n  .justify-content-md-start {\n    -webkit-box-pack: start !important;\n        -ms-flex-pack: start !important;\n            justify-content: flex-start !important; }\n  .justify-content-md-end {\n    -webkit-box-pack: end !important;\n        -ms-flex-pack: end !important;\n            justify-content: flex-end !important; }\n  .justify-content-md-center {\n    -webkit-box-pack: center !important;\n        -ms-flex-pack: center !important;\n            justify-content: center !important; }\n  .justify-content-md-between {\n    -webkit-box-pack: justify !important;\n        -ms-flex-pack: justify !important;\n            justify-content: space-between !important; }\n  .justify-content-md-around {\n    -ms-flex-pack: distribute !important;\n        justify-content: space-around !important; }\n  .align-items-md-start {\n    -webkit-box-align: start !important;\n        -ms-flex-align: start !important;\n            align-items: flex-start !important; }\n  .align-items-md-end {\n    -webkit-box-align: end !important;\n        -ms-flex-align: end !important;\n            align-items: flex-end !important; }\n  .align-items-md-center {\n    -webkit-box-align: center !important;\n        -ms-flex-align: center !important;\n            align-items: center !important; }\n  .align-items-md-baseline {\n    -webkit-box-align: baseline !important;\n        -ms-flex-align: baseline !important;\n            align-items: baseline !important; }\n  .align-items-md-stretch {\n    -webkit-box-align: stretch !important;\n        -ms-flex-align: stretch !important;\n            align-items: stretch !important; }\n  .align-content-md-start {\n    -ms-flex-line-pack: start !important;\n        align-content: flex-start !important; }\n  .align-content-md-end {\n    -ms-flex-line-pack: end !important;\n        align-content: flex-end !important; }\n  .align-content-md-center {\n    -ms-flex-line-pack: center !important;\n        align-content: center !important; }\n  .align-content-md-between {\n    -ms-flex-line-pack: justify !important;\n        align-content: space-between !important; }\n  .align-content-md-around {\n    -ms-flex-line-pack: distribute !important;\n        align-content: space-around !important; }\n  .align-content-md-stretch {\n    -ms-flex-line-pack: stretch !important;\n        align-content: stretch !important; }\n  .align-self-md-auto {\n    -ms-flex-item-align: auto !important;\n        align-self: auto !important; }\n  .align-self-md-start {\n    -ms-flex-item-align: start !important;\n        align-self: flex-start !important; }\n  .align-self-md-end {\n    -ms-flex-item-align: end !important;\n        align-self: flex-end !important; }\n  .align-self-md-center {\n    -ms-flex-item-align: center !important;\n        align-self: center !important; }\n  .align-self-md-baseline {\n    -ms-flex-item-align: baseline !important;\n        align-self: baseline !important; }\n  .align-self-md-stretch {\n    -ms-flex-item-align: stretch !important;\n        align-self: stretch !important; } }\n\n@media (min-width: 992px) {\n  .flex-lg-row {\n    -webkit-box-orient: horizontal !important;\n    -webkit-box-direction: normal !important;\n        -ms-flex-direction: row !important;\n            flex-direction: row !important; }\n  .flex-lg-column {\n    -webkit-box-orient: vertical !important;\n    -webkit-box-direction: normal !important;\n        -ms-flex-direction: column !important;\n            flex-direction: column !important; }\n  .flex-lg-row-reverse {\n    -webkit-box-orient: horizontal !important;\n    -webkit-box-direction: reverse !important;\n        -ms-flex-direction: row-reverse !important;\n            flex-direction: row-reverse !important; }\n  .flex-lg-column-reverse {\n    -webkit-box-orient: vertical !important;\n    -webkit-box-direction: reverse !important;\n        -ms-flex-direction: column-reverse !important;\n            flex-direction: column-reverse !important; }\n  .flex-lg-wrap {\n    -ms-flex-wrap: wrap !important;\n        flex-wrap: wrap !important; }\n  .flex-lg-nowrap {\n    -ms-flex-wrap: nowrap !important;\n        flex-wrap: nowrap !important; }\n  .flex-lg-wrap-reverse {\n    -ms-flex-wrap: wrap-reverse !important;\n        flex-wrap: wrap-reverse !important; }\n  .justify-content-lg-start {\n    -webkit-box-pack: start !important;\n        -ms-flex-pack: start !important;\n            justify-content: flex-start !important; }\n  .justify-content-lg-end {\n    -webkit-box-pack: end !important;\n        -ms-flex-pack: end !important;\n            justify-content: flex-end !important; }\n  .justify-content-lg-center {\n    -webkit-box-pack: center !important;\n        -ms-flex-pack: center !important;\n            justify-content: center !important; }\n  .justify-content-lg-between {\n    -webkit-box-pack: justify !important;\n        -ms-flex-pack: justify !important;\n            justify-content: space-between !important; }\n  .justify-content-lg-around {\n    -ms-flex-pack: distribute !important;\n        justify-content: space-around !important; }\n  .align-items-lg-start {\n    -webkit-box-align: start !important;\n        -ms-flex-align: start !important;\n            align-items: flex-start !important; }\n  .align-items-lg-end {\n    -webkit-box-align: end !important;\n        -ms-flex-align: end !important;\n            align-items: flex-end !important; }\n  .align-items-lg-center {\n    -webkit-box-align: center !important;\n        -ms-flex-align: center !important;\n            align-items: center !important; }\n  .align-items-lg-baseline {\n    -webkit-box-align: baseline !important;\n        -ms-flex-align: baseline !important;\n            align-items: baseline !important; }\n  .align-items-lg-stretch {\n    -webkit-box-align: stretch !important;\n        -ms-flex-align: stretch !important;\n            align-items: stretch !important; }\n  .align-content-lg-start {\n    -ms-flex-line-pack: start !important;\n        align-content: flex-start !important; }\n  .align-content-lg-end {\n    -ms-flex-line-pack: end !important;\n        align-content: flex-end !important; }\n  .align-content-lg-center {\n    -ms-flex-line-pack: center !important;\n        align-content: center !important; }\n  .align-content-lg-between {\n    -ms-flex-line-pack: justify !important;\n        align-content: space-between !important; }\n  .align-content-lg-around {\n    -ms-flex-line-pack: distribute !important;\n        align-content: space-around !important; }\n  .align-content-lg-stretch {\n    -ms-flex-line-pack: stretch !important;\n        align-content: stretch !important; }\n  .align-self-lg-auto {\n    -ms-flex-item-align: auto !important;\n        align-self: auto !important; }\n  .align-self-lg-start {\n    -ms-flex-item-align: start !important;\n        align-self: flex-start !important; }\n  .align-self-lg-end {\n    -ms-flex-item-align: end !important;\n        align-self: flex-end !important; }\n  .align-self-lg-center {\n    -ms-flex-item-align: center !important;\n        align-self: center !important; }\n  .align-self-lg-baseline {\n    -ms-flex-item-align: baseline !important;\n        align-self: baseline !important; }\n  .align-self-lg-stretch {\n    -ms-flex-item-align: stretch !important;\n        align-self: stretch !important; } }\n\n@media (min-width: 1200px) {\n  .flex-xl-row {\n    -webkit-box-orient: horizontal !important;\n    -webkit-box-direction: normal !important;\n        -ms-flex-direction: row !important;\n            flex-direction: row !important; }\n  .flex-xl-column {\n    -webkit-box-orient: vertical !important;\n    -webkit-box-direction: normal !important;\n        -ms-flex-direction: column !important;\n            flex-direction: column !important; }\n  .flex-xl-row-reverse {\n    -webkit-box-orient: horizontal !important;\n    -webkit-box-direction: reverse !important;\n        -ms-flex-direction: row-reverse !important;\n            flex-direction: row-reverse !important; }\n  .flex-xl-column-reverse {\n    -webkit-box-orient: vertical !important;\n    -webkit-box-direction: reverse !important;\n        -ms-flex-direction: column-reverse !important;\n            flex-direction: column-reverse !important; }\n  .flex-xl-wrap {\n    -ms-flex-wrap: wrap !important;\n        flex-wrap: wrap !important; }\n  .flex-xl-nowrap {\n    -ms-flex-wrap: nowrap !important;\n        flex-wrap: nowrap !important; }\n  .flex-xl-wrap-reverse {\n    -ms-flex-wrap: wrap-reverse !important;\n        flex-wrap: wrap-reverse !important; }\n  .justify-content-xl-start {\n    -webkit-box-pack: start !important;\n        -ms-flex-pack: start !important;\n            justify-content: flex-start !important; }\n  .justify-content-xl-end {\n    -webkit-box-pack: end !important;\n        -ms-flex-pack: end !important;\n            justify-content: flex-end !important; }\n  .justify-content-xl-center {\n    -webkit-box-pack: center !important;\n        -ms-flex-pack: center !important;\n            justify-content: center !important; }\n  .justify-content-xl-between {\n    -webkit-box-pack: justify !important;\n        -ms-flex-pack: justify !important;\n            justify-content: space-between !important; }\n  .justify-content-xl-around {\n    -ms-flex-pack: distribute !important;\n        justify-content: space-around !important; }\n  .align-items-xl-start {\n    -webkit-box-align: start !important;\n        -ms-flex-align: start !important;\n            align-items: flex-start !important; }\n  .align-items-xl-end {\n    -webkit-box-align: end !important;\n        -ms-flex-align: end !important;\n            align-items: flex-end !important; }\n  .align-items-xl-center {\n    -webkit-box-align: center !important;\n        -ms-flex-align: center !important;\n            align-items: center !important; }\n  .align-items-xl-baseline {\n    -webkit-box-align: baseline !important;\n        -ms-flex-align: baseline !important;\n            align-items: baseline !important; }\n  .align-items-xl-stretch {\n    -webkit-box-align: stretch !important;\n        -ms-flex-align: stretch !important;\n            align-items: stretch !important; }\n  .align-content-xl-start {\n    -ms-flex-line-pack: start !important;\n        align-content: flex-start !important; }\n  .align-content-xl-end {\n    -ms-flex-line-pack: end !important;\n        align-content: flex-end !important; }\n  .align-content-xl-center {\n    -ms-flex-line-pack: center !important;\n        align-content: center !important; }\n  .align-content-xl-between {\n    -ms-flex-line-pack: justify !important;\n        align-content: space-between !important; }\n  .align-content-xl-around {\n    -ms-flex-line-pack: distribute !important;\n        align-content: space-around !important; }\n  .align-content-xl-stretch {\n    -ms-flex-line-pack: stretch !important;\n        align-content: stretch !important; }\n  .align-self-xl-auto {\n    -ms-flex-item-align: auto !important;\n        align-self: auto !important; }\n  .align-self-xl-start {\n    -ms-flex-item-align: start !important;\n        align-self: flex-start !important; }\n  .align-self-xl-end {\n    -ms-flex-item-align: end !important;\n        align-self: flex-end !important; }\n  .align-self-xl-center {\n    -ms-flex-item-align: center !important;\n        align-self: center !important; }\n  .align-self-xl-baseline {\n    -ms-flex-item-align: baseline !important;\n        align-self: baseline !important; }\n  .align-self-xl-stretch {\n    -ms-flex-item-align: stretch !important;\n        align-self: stretch !important; } }\n\n.float-left {\n  float: left !important; }\n\n.float-right {\n  float: right !important; }\n\n.float-none {\n  float: none !important; }\n\n@media (min-width: 576px) {\n  .float-sm-left {\n    float: left !important; }\n  .float-sm-right {\n    float: right !important; }\n  .float-sm-none {\n    float: none !important; } }\n\n@media (min-width: 768px) {\n  .float-md-left {\n    float: left !important; }\n  .float-md-right {\n    float: right !important; }\n  .float-md-none {\n    float: none !important; } }\n\n@media (min-width: 992px) {\n  .float-lg-left {\n    float: left !important; }\n  .float-lg-right {\n    float: right !important; }\n  .float-lg-none {\n    float: none !important; } }\n\n@media (min-width: 1200px) {\n  .float-xl-left {\n    float: left !important; }\n  .float-xl-right {\n    float: right !important; }\n  .float-xl-none {\n    float: none !important; } }\n\n.position-static {\n  position: static !important; }\n\n.position-relative {\n  position: relative !important; }\n\n.position-absolute {\n  position: absolute !important; }\n\n.position-fixed {\n  position: fixed !important; }\n\n.position-sticky {\n  position: -webkit-sticky !important;\n  position: sticky !important; }\n\n.fixed-top {\n  position: fixed;\n  top: 0;\n  right: 0;\n  left: 0;\n  z-index: 1030; }\n\n.fixed-bottom {\n  position: fixed;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  z-index: 1030; }\n\n@supports ((position: -webkit-sticky) or (position: sticky)) {\n  .sticky-top {\n    position: -webkit-sticky;\n    position: sticky;\n    top: 0;\n    z-index: 1020; } }\n\n.sr-only {\n  position: absolute;\n  width: 1px;\n  height: 1px;\n  padding: 0;\n  overflow: hidden;\n  clip: rect(0, 0, 0, 0);\n  white-space: nowrap;\n  -webkit-clip-path: inset(50%);\n          clip-path: inset(50%);\n  border: 0; }\n\n.sr-only-focusable:active, .sr-only-focusable:focus {\n  position: static;\n  width: auto;\n  height: auto;\n  overflow: visible;\n  clip: auto;\n  white-space: normal;\n  -webkit-clip-path: none;\n          clip-path: none; }\n\n.w-25 {\n  width: 25% !important; }\n\n.w-50 {\n  width: 50% !important; }\n\n.w-75 {\n  width: 75% !important; }\n\n.w-100 {\n  width: 100% !important; }\n\n.h-25 {\n  height: 25% !important; }\n\n.h-50 {\n  height: 50% !important; }\n\n.h-75 {\n  height: 75% !important; }\n\n.h-100 {\n  height: 100% !important; }\n\n.mw-100 {\n  max-width: 100% !important; }\n\n.mh-100 {\n  max-height: 100% !important; }\n\n.m-0 {\n  margin: 0 !important; }\n\n.mt-0, .my-0 {\n  margin-top: 0 !important; }\n\n.mr-0, .mx-0 {\n  margin-right: 0 !important; }\n\n.mb-0, .my-0 {\n  margin-bottom: 0 !important; }\n\n.ml-0, .mx-0 {\n  margin-left: 0 !important; }\n\n.m-1 {\n  margin: 0.25rem !important; }\n\n.mt-1, .my-1 {\n  margin-top: 0.25rem !important; }\n\n.mr-1, .mx-1 {\n  margin-right: 0.25rem !important; }\n\n.mb-1, .my-1 {\n  margin-bottom: 0.25rem !important; }\n\n.ml-1, .mx-1 {\n  margin-left: 0.25rem !important; }\n\n.m-2 {\n  margin: 0.5rem !important; }\n\n.mt-2, .my-2 {\n  margin-top: 0.5rem !important; }\n\n.mr-2, .mx-2 {\n  margin-right: 0.5rem !important; }\n\n.mb-2, .my-2 {\n  margin-bottom: 0.5rem !important; }\n\n.ml-2, .mx-2 {\n  margin-left: 0.5rem !important; }\n\n.m-3 {\n  margin: 1rem !important; }\n\n.mt-3, .my-3 {\n  margin-top: 1rem !important; }\n\n.mr-3, .mx-3 {\n  margin-right: 1rem !important; }\n\n.mb-3, .my-3 {\n  margin-bottom: 1rem !important; }\n\n.ml-3, .mx-3 {\n  margin-left: 1rem !important; }\n\n.m-4 {\n  margin: 1.5rem !important; }\n\n.mt-4, .my-4 {\n  margin-top: 1.5rem !important; }\n\n.mr-4, .mx-4 {\n  margin-right: 1.5rem !important; }\n\n.mb-4, .my-4 {\n  margin-bottom: 1.5rem !important; }\n\n.ml-4, .mx-4 {\n  margin-left: 1.5rem !important; }\n\n.m-5 {\n  margin: 3rem !important; }\n\n.mt-5, .my-5 {\n  margin-top: 3rem !important; }\n\n.mr-5, .mx-5 {\n  margin-right: 3rem !important; }\n\n.mb-5, .my-5 {\n  margin-bottom: 3rem !important; }\n\n.ml-5, .mx-5 {\n  margin-left: 3rem !important; }\n\n.p-0 {\n  padding: 0 !important; }\n\n.pt-0, .py-0 {\n  padding-top: 0 !important; }\n\n.pr-0, .px-0 {\n  padding-right: 0 !important; }\n\n.pb-0, .py-0 {\n  padding-bottom: 0 !important; }\n\n.pl-0, .px-0 {\n  padding-left: 0 !important; }\n\n.p-1 {\n  padding: 0.25rem !important; }\n\n.pt-1, .py-1 {\n  padding-top: 0.25rem !important; }\n\n.pr-1, .px-1 {\n  padding-right: 0.25rem !important; }\n\n.pb-1, .py-1 {\n  padding-bottom: 0.25rem !important; }\n\n.pl-1, .px-1 {\n  padding-left: 0.25rem !important; }\n\n.p-2 {\n  padding: 0.5rem !important; }\n\n.pt-2, .py-2 {\n  padding-top: 0.5rem !important; }\n\n.pr-2, .px-2 {\n  padding-right: 0.5rem !important; }\n\n.pb-2, .py-2 {\n  padding-bottom: 0.5rem !important; }\n\n.pl-2, .px-2 {\n  padding-left: 0.5rem !important; }\n\n.p-3 {\n  padding: 1rem !important; }\n\n.pt-3, .py-3 {\n  padding-top: 1rem !important; }\n\n.pr-3, .px-3 {\n  padding-right: 1rem !important; }\n\n.pb-3, .py-3 {\n  padding-bottom: 1rem !important; }\n\n.pl-3, .px-3 {\n  padding-left: 1rem !important; }\n\n.p-4 {\n  padding: 1.5rem !important; }\n\n.pt-4, .py-4 {\n  padding-top: 1.5rem !important; }\n\n.pr-4, .px-4 {\n  padding-right: 1.5rem !important; }\n\n.pb-4, .py-4 {\n  padding-bottom: 1.5rem !important; }\n\n.pl-4, .px-4 {\n  padding-left: 1.5rem !important; }\n\n.p-5 {\n  padding: 3rem !important; }\n\n.pt-5, .py-5 {\n  padding-top: 3rem !important; }\n\n.pr-5, .px-5 {\n  padding-right: 3rem !important; }\n\n.pb-5, .py-5 {\n  padding-bottom: 3rem !important; }\n\n.pl-5, .px-5 {\n  padding-left: 3rem !important; }\n\n.m-auto {\n  margin: auto !important; }\n\n.mt-auto, .my-auto {\n  margin-top: auto !important; }\n\n.mr-auto, .mx-auto {\n  margin-right: auto !important; }\n\n.mb-auto, .my-auto {\n  margin-bottom: auto !important; }\n\n.ml-auto, .mx-auto {\n  margin-left: auto !important; }\n\n@media (min-width: 576px) {\n  .m-sm-0 {\n    margin: 0 !important; }\n  .mt-sm-0, .my-sm-0 {\n    margin-top: 0 !important; }\n  .mr-sm-0, .mx-sm-0 {\n    margin-right: 0 !important; }\n  .mb-sm-0, .my-sm-0 {\n    margin-bottom: 0 !important; }\n  .ml-sm-0, .mx-sm-0 {\n    margin-left: 0 !important; }\n  .m-sm-1 {\n    margin: 0.25rem !important; }\n  .mt-sm-1, .my-sm-1 {\n    margin-top: 0.25rem !important; }\n  .mr-sm-1, .mx-sm-1 {\n    margin-right: 0.25rem !important; }\n  .mb-sm-1, .my-sm-1 {\n    margin-bottom: 0.25rem !important; }\n  .ml-sm-1, .mx-sm-1 {\n    margin-left: 0.25rem !important; }\n  .m-sm-2 {\n    margin: 0.5rem !important; }\n  .mt-sm-2, .my-sm-2 {\n    margin-top: 0.5rem !important; }\n  .mr-sm-2, .mx-sm-2 {\n    margin-right: 0.5rem !important; }\n  .mb-sm-2, .my-sm-2 {\n    margin-bottom: 0.5rem !important; }\n  .ml-sm-2, .mx-sm-2 {\n    margin-left: 0.5rem !important; }\n  .m-sm-3 {\n    margin: 1rem !important; }\n  .mt-sm-3, .my-sm-3 {\n    margin-top: 1rem !important; }\n  .mr-sm-3, .mx-sm-3 {\n    margin-right: 1rem !important; }\n  .mb-sm-3, .my-sm-3 {\n    margin-bottom: 1rem !important; }\n  .ml-sm-3, .mx-sm-3 {\n    margin-left: 1rem !important; }\n  .m-sm-4 {\n    margin: 1.5rem !important; }\n  .mt-sm-4, .my-sm-4 {\n    margin-top: 1.5rem !important; }\n  .mr-sm-4, .mx-sm-4 {\n    margin-right: 1.5rem !important; }\n  .mb-sm-4, .my-sm-4 {\n    margin-bottom: 1.5rem !important; }\n  .ml-sm-4, .mx-sm-4 {\n    margin-left: 1.5rem !important; }\n  .m-sm-5 {\n    margin: 3rem !important; }\n  .mt-sm-5, .my-sm-5 {\n    margin-top: 3rem !important; }\n  .mr-sm-5, .mx-sm-5 {\n    margin-right: 3rem !important; }\n  .mb-sm-5, .my-sm-5 {\n    margin-bottom: 3rem !important; }\n  .ml-sm-5, .mx-sm-5 {\n    margin-left: 3rem !important; }\n  .p-sm-0 {\n    padding: 0 !important; }\n  .pt-sm-0, .py-sm-0 {\n    padding-top: 0 !important; }\n  .pr-sm-0, .px-sm-0 {\n    padding-right: 0 !important; }\n  .pb-sm-0, .py-sm-0 {\n    padding-bottom: 0 !important; }\n  .pl-sm-0, .px-sm-0 {\n    padding-left: 0 !important; }\n  .p-sm-1 {\n    padding: 0.25rem !important; }\n  .pt-sm-1, .py-sm-1 {\n    padding-top: 0.25rem !important; }\n  .pr-sm-1, .px-sm-1 {\n    padding-right: 0.25rem !important; }\n  .pb-sm-1, .py-sm-1 {\n    padding-bottom: 0.25rem !important; }\n  .pl-sm-1, .px-sm-1 {\n    padding-left: 0.25rem !important; }\n  .p-sm-2 {\n    padding: 0.5rem !important; }\n  .pt-sm-2, .py-sm-2 {\n    padding-top: 0.5rem !important; }\n  .pr-sm-2, .px-sm-2 {\n    padding-right: 0.5rem !important; }\n  .pb-sm-2, .py-sm-2 {\n    padding-bottom: 0.5rem !important; }\n  .pl-sm-2, .px-sm-2 {\n    padding-left: 0.5rem !important; }\n  .p-sm-3 {\n    padding: 1rem !important; }\n  .pt-sm-3, .py-sm-3 {\n    padding-top: 1rem !important; }\n  .pr-sm-3, .px-sm-3 {\n    padding-right: 1rem !important; }\n  .pb-sm-3, .py-sm-3 {\n    padding-bottom: 1rem !important; }\n  .pl-sm-3, .px-sm-3 {\n    padding-left: 1rem !important; }\n  .p-sm-4 {\n    padding: 1.5rem !important; }\n  .pt-sm-4, .py-sm-4 {\n    padding-top: 1.5rem !important; }\n  .pr-sm-4, .px-sm-4 {\n    padding-right: 1.5rem !important; }\n  .pb-sm-4, .py-sm-4 {\n    padding-bottom: 1.5rem !important; }\n  .pl-sm-4, .px-sm-4 {\n    padding-left: 1.5rem !important; }\n  .p-sm-5 {\n    padding: 3rem !important; }\n  .pt-sm-5, .py-sm-5 {\n    padding-top: 3rem !important; }\n  .pr-sm-5, .px-sm-5 {\n    padding-right: 3rem !important; }\n  .pb-sm-5, .py-sm-5 {\n    padding-bottom: 3rem !important; }\n  .pl-sm-5, .px-sm-5 {\n    padding-left: 3rem !important; }\n  .m-sm-auto {\n    margin: auto !important; }\n  .mt-sm-auto, .my-sm-auto {\n    margin-top: auto !important; }\n  .mr-sm-auto, .mx-sm-auto {\n    margin-right: auto !important; }\n  .mb-sm-auto, .my-sm-auto {\n    margin-bottom: auto !important; }\n  .ml-sm-auto, .mx-sm-auto {\n    margin-left: auto !important; } }\n\n@media (min-width: 768px) {\n  .m-md-0 {\n    margin: 0 !important; }\n  .mt-md-0, .my-md-0 {\n    margin-top: 0 !important; }\n  .mr-md-0, .mx-md-0 {\n    margin-right: 0 !important; }\n  .mb-md-0, .my-md-0 {\n    margin-bottom: 0 !important; }\n  .ml-md-0, .mx-md-0 {\n    margin-left: 0 !important; }\n  .m-md-1 {\n    margin: 0.25rem !important; }\n  .mt-md-1, .my-md-1 {\n    margin-top: 0.25rem !important; }\n  .mr-md-1, .mx-md-1 {\n    margin-right: 0.25rem !important; }\n  .mb-md-1, .my-md-1 {\n    margin-bottom: 0.25rem !important; }\n  .ml-md-1, .mx-md-1 {\n    margin-left: 0.25rem !important; }\n  .m-md-2 {\n    margin: 0.5rem !important; }\n  .mt-md-2, .my-md-2 {\n    margin-top: 0.5rem !important; }\n  .mr-md-2, .mx-md-2 {\n    margin-right: 0.5rem !important; }\n  .mb-md-2, .my-md-2 {\n    margin-bottom: 0.5rem !important; }\n  .ml-md-2, .mx-md-2 {\n    margin-left: 0.5rem !important; }\n  .m-md-3 {\n    margin: 1rem !important; }\n  .mt-md-3, .my-md-3 {\n    margin-top: 1rem !important; }\n  .mr-md-3, .mx-md-3 {\n    margin-right: 1rem !important; }\n  .mb-md-3, .my-md-3 {\n    margin-bottom: 1rem !important; }\n  .ml-md-3, .mx-md-3 {\n    margin-left: 1rem !important; }\n  .m-md-4 {\n    margin: 1.5rem !important; }\n  .mt-md-4, .my-md-4 {\n    margin-top: 1.5rem !important; }\n  .mr-md-4, .mx-md-4 {\n    margin-right: 1.5rem !important; }\n  .mb-md-4, .my-md-4 {\n    margin-bottom: 1.5rem !important; }\n  .ml-md-4, .mx-md-4 {\n    margin-left: 1.5rem !important; }\n  .m-md-5 {\n    margin: 3rem !important; }\n  .mt-md-5, .my-md-5 {\n    margin-top: 3rem !important; }\n  .mr-md-5, .mx-md-5 {\n    margin-right: 3rem !important; }\n  .mb-md-5, .my-md-5 {\n    margin-bottom: 3rem !important; }\n  .ml-md-5, .mx-md-5 {\n    margin-left: 3rem !important; }\n  .p-md-0 {\n    padding: 0 !important; }\n  .pt-md-0, .py-md-0 {\n    padding-top: 0 !important; }\n  .pr-md-0, .px-md-0 {\n    padding-right: 0 !important; }\n  .pb-md-0, .py-md-0 {\n    padding-bottom: 0 !important; }\n  .pl-md-0, .px-md-0 {\n    padding-left: 0 !important; }\n  .p-md-1 {\n    padding: 0.25rem !important; }\n  .pt-md-1, .py-md-1 {\n    padding-top: 0.25rem !important; }\n  .pr-md-1, .px-md-1 {\n    padding-right: 0.25rem !important; }\n  .pb-md-1, .py-md-1 {\n    padding-bottom: 0.25rem !important; }\n  .pl-md-1, .px-md-1 {\n    padding-left: 0.25rem !important; }\n  .p-md-2 {\n    padding: 0.5rem !important; }\n  .pt-md-2, .py-md-2 {\n    padding-top: 0.5rem !important; }\n  .pr-md-2, .px-md-2 {\n    padding-right: 0.5rem !important; }\n  .pb-md-2, .py-md-2 {\n    padding-bottom: 0.5rem !important; }\n  .pl-md-2, .px-md-2 {\n    padding-left: 0.5rem !important; }\n  .p-md-3 {\n    padding: 1rem !important; }\n  .pt-md-3, .py-md-3 {\n    padding-top: 1rem !important; }\n  .pr-md-3, .px-md-3 {\n    padding-right: 1rem !important; }\n  .pb-md-3, .py-md-3 {\n    padding-bottom: 1rem !important; }\n  .pl-md-3, .px-md-3 {\n    padding-left: 1rem !important; }\n  .p-md-4 {\n    padding: 1.5rem !important; }\n  .pt-md-4, .py-md-4 {\n    padding-top: 1.5rem !important; }\n  .pr-md-4, .px-md-4 {\n    padding-right: 1.5rem !important; }\n  .pb-md-4, .py-md-4 {\n    padding-bottom: 1.5rem !important; }\n  .pl-md-4, .px-md-4 {\n    padding-left: 1.5rem !important; }\n  .p-md-5 {\n    padding: 3rem !important; }\n  .pt-md-5, .py-md-5 {\n    padding-top: 3rem !important; }\n  .pr-md-5, .px-md-5 {\n    padding-right: 3rem !important; }\n  .pb-md-5, .py-md-5 {\n    padding-bottom: 3rem !important; }\n  .pl-md-5, .px-md-5 {\n    padding-left: 3rem !important; }\n  .m-md-auto {\n    margin: auto !important; }\n  .mt-md-auto, .my-md-auto {\n    margin-top: auto !important; }\n  .mr-md-auto, .mx-md-auto {\n    margin-right: auto !important; }\n  .mb-md-auto, .my-md-auto {\n    margin-bottom: auto !important; }\n  .ml-md-auto, .mx-md-auto {\n    margin-left: auto !important; } }\n\n@media (min-width: 992px) {\n  .m-lg-0 {\n    margin: 0 !important; }\n  .mt-lg-0, .my-lg-0 {\n    margin-top: 0 !important; }\n  .mr-lg-0, .mx-lg-0 {\n    margin-right: 0 !important; }\n  .mb-lg-0, .my-lg-0 {\n    margin-bottom: 0 !important; }\n  .ml-lg-0, .mx-lg-0 {\n    margin-left: 0 !important; }\n  .m-lg-1 {\n    margin: 0.25rem !important; }\n  .mt-lg-1, .my-lg-1 {\n    margin-top: 0.25rem !important; }\n  .mr-lg-1, .mx-lg-1 {\n    margin-right: 0.25rem !important; }\n  .mb-lg-1, .my-lg-1 {\n    margin-bottom: 0.25rem !important; }\n  .ml-lg-1, .mx-lg-1 {\n    margin-left: 0.25rem !important; }\n  .m-lg-2 {\n    margin: 0.5rem !important; }\n  .mt-lg-2, .my-lg-2 {\n    margin-top: 0.5rem !important; }\n  .mr-lg-2, .mx-lg-2 {\n    margin-right: 0.5rem !important; }\n  .mb-lg-2, .my-lg-2 {\n    margin-bottom: 0.5rem !important; }\n  .ml-lg-2, .mx-lg-2 {\n    margin-left: 0.5rem !important; }\n  .m-lg-3 {\n    margin: 1rem !important; }\n  .mt-lg-3, .my-lg-3 {\n    margin-top: 1rem !important; }\n  .mr-lg-3, .mx-lg-3 {\n    margin-right: 1rem !important; }\n  .mb-lg-3, .my-lg-3 {\n    margin-bottom: 1rem !important; }\n  .ml-lg-3, .mx-lg-3 {\n    margin-left: 1rem !important; }\n  .m-lg-4 {\n    margin: 1.5rem !important; }\n  .mt-lg-4, .my-lg-4 {\n    margin-top: 1.5rem !important; }\n  .mr-lg-4, .mx-lg-4 {\n    margin-right: 1.5rem !important; }\n  .mb-lg-4, .my-lg-4 {\n    margin-bottom: 1.5rem !important; }\n  .ml-lg-4, .mx-lg-4 {\n    margin-left: 1.5rem !important; }\n  .m-lg-5 {\n    margin: 3rem !important; }\n  .mt-lg-5, .my-lg-5 {\n    margin-top: 3rem !important; }\n  .mr-lg-5, .mx-lg-5 {\n    margin-right: 3rem !important; }\n  .mb-lg-5, .my-lg-5 {\n    margin-bottom: 3rem !important; }\n  .ml-lg-5, .mx-lg-5 {\n    margin-left: 3rem !important; }\n  .p-lg-0 {\n    padding: 0 !important; }\n  .pt-lg-0, .py-lg-0 {\n    padding-top: 0 !important; }\n  .pr-lg-0, .px-lg-0 {\n    padding-right: 0 !important; }\n  .pb-lg-0, .py-lg-0 {\n    padding-bottom: 0 !important; }\n  .pl-lg-0, .px-lg-0 {\n    padding-left: 0 !important; }\n  .p-lg-1 {\n    padding: 0.25rem !important; }\n  .pt-lg-1, .py-lg-1 {\n    padding-top: 0.25rem !important; }\n  .pr-lg-1, .px-lg-1 {\n    padding-right: 0.25rem !important; }\n  .pb-lg-1, .py-lg-1 {\n    padding-bottom: 0.25rem !important; }\n  .pl-lg-1, .px-lg-1 {\n    padding-left: 0.25rem !important; }\n  .p-lg-2 {\n    padding: 0.5rem !important; }\n  .pt-lg-2, .py-lg-2 {\n    padding-top: 0.5rem !important; }\n  .pr-lg-2, .px-lg-2 {\n    padding-right: 0.5rem !important; }\n  .pb-lg-2, .py-lg-2 {\n    padding-bottom: 0.5rem !important; }\n  .pl-lg-2, .px-lg-2 {\n    padding-left: 0.5rem !important; }\n  .p-lg-3 {\n    padding: 1rem !important; }\n  .pt-lg-3, .py-lg-3 {\n    padding-top: 1rem !important; }\n  .pr-lg-3, .px-lg-3 {\n    padding-right: 1rem !important; }\n  .pb-lg-3, .py-lg-3 {\n    padding-bottom: 1rem !important; }\n  .pl-lg-3, .px-lg-3 {\n    padding-left: 1rem !important; }\n  .p-lg-4 {\n    padding: 1.5rem !important; }\n  .pt-lg-4, .py-lg-4 {\n    padding-top: 1.5rem !important; }\n  .pr-lg-4, .px-lg-4 {\n    padding-right: 1.5rem !important; }\n  .pb-lg-4, .py-lg-4 {\n    padding-bottom: 1.5rem !important; }\n  .pl-lg-4, .px-lg-4 {\n    padding-left: 1.5rem !important; }\n  .p-lg-5 {\n    padding: 3rem !important; }\n  .pt-lg-5, .py-lg-5 {\n    padding-top: 3rem !important; }\n  .pr-lg-5, .px-lg-5 {\n    padding-right: 3rem !important; }\n  .pb-lg-5, .py-lg-5 {\n    padding-bottom: 3rem !important; }\n  .pl-lg-5, .px-lg-5 {\n    padding-left: 3rem !important; }\n  .m-lg-auto {\n    margin: auto !important; }\n  .mt-lg-auto, .my-lg-auto {\n    margin-top: auto !important; }\n  .mr-lg-auto, .mx-lg-auto {\n    margin-right: auto !important; }\n  .mb-lg-auto, .my-lg-auto {\n    margin-bottom: auto !important; }\n  .ml-lg-auto, .mx-lg-auto {\n    margin-left: auto !important; } }\n\n@media (min-width: 1200px) {\n  .m-xl-0 {\n    margin: 0 !important; }\n  .mt-xl-0, .my-xl-0 {\n    margin-top: 0 !important; }\n  .mr-xl-0, .mx-xl-0 {\n    margin-right: 0 !important; }\n  .mb-xl-0, .my-xl-0 {\n    margin-bottom: 0 !important; }\n  .ml-xl-0, .mx-xl-0 {\n    margin-left: 0 !important; }\n  .m-xl-1 {\n    margin: 0.25rem !important; }\n  .mt-xl-1, .my-xl-1 {\n    margin-top: 0.25rem !important; }\n  .mr-xl-1, .mx-xl-1 {\n    margin-right: 0.25rem !important; }\n  .mb-xl-1, .my-xl-1 {\n    margin-bottom: 0.25rem !important; }\n  .ml-xl-1, .mx-xl-1 {\n    margin-left: 0.25rem !important; }\n  .m-xl-2 {\n    margin: 0.5rem !important; }\n  .mt-xl-2, .my-xl-2 {\n    margin-top: 0.5rem !important; }\n  .mr-xl-2, .mx-xl-2 {\n    margin-right: 0.5rem !important; }\n  .mb-xl-2, .my-xl-2 {\n    margin-bottom: 0.5rem !important; }\n  .ml-xl-2, .mx-xl-2 {\n    margin-left: 0.5rem !important; }\n  .m-xl-3 {\n    margin: 1rem !important; }\n  .mt-xl-3, .my-xl-3 {\n    margin-top: 1rem !important; }\n  .mr-xl-3, .mx-xl-3 {\n    margin-right: 1rem !important; }\n  .mb-xl-3, .my-xl-3 {\n    margin-bottom: 1rem !important; }\n  .ml-xl-3, .mx-xl-3 {\n    margin-left: 1rem !important; }\n  .m-xl-4 {\n    margin: 1.5rem !important; }\n  .mt-xl-4, .my-xl-4 {\n    margin-top: 1.5rem !important; }\n  .mr-xl-4, .mx-xl-4 {\n    margin-right: 1.5rem !important; }\n  .mb-xl-4, .my-xl-4 {\n    margin-bottom: 1.5rem !important; }\n  .ml-xl-4, .mx-xl-4 {\n    margin-left: 1.5rem !important; }\n  .m-xl-5 {\n    margin: 3rem !important; }\n  .mt-xl-5, .my-xl-5 {\n    margin-top: 3rem !important; }\n  .mr-xl-5, .mx-xl-5 {\n    margin-right: 3rem !important; }\n  .mb-xl-5, .my-xl-5 {\n    margin-bottom: 3rem !important; }\n  .ml-xl-5, .mx-xl-5 {\n    margin-left: 3rem !important; }\n  .p-xl-0 {\n    padding: 0 !important; }\n  .pt-xl-0, .py-xl-0 {\n    padding-top: 0 !important; }\n  .pr-xl-0, .px-xl-0 {\n    padding-right: 0 !important; }\n  .pb-xl-0, .py-xl-0 {\n    padding-bottom: 0 !important; }\n  .pl-xl-0, .px-xl-0 {\n    padding-left: 0 !important; }\n  .p-xl-1 {\n    padding: 0.25rem !important; }\n  .pt-xl-1, .py-xl-1 {\n    padding-top: 0.25rem !important; }\n  .pr-xl-1, .px-xl-1 {\n    padding-right: 0.25rem !important; }\n  .pb-xl-1, .py-xl-1 {\n    padding-bottom: 0.25rem !important; }\n  .pl-xl-1, .px-xl-1 {\n    padding-left: 0.25rem !important; }\n  .p-xl-2 {\n    padding: 0.5rem !important; }\n  .pt-xl-2, .py-xl-2 {\n    padding-top: 0.5rem !important; }\n  .pr-xl-2, .px-xl-2 {\n    padding-right: 0.5rem !important; }\n  .pb-xl-2, .py-xl-2 {\n    padding-bottom: 0.5rem !important; }\n  .pl-xl-2, .px-xl-2 {\n    padding-left: 0.5rem !important; }\n  .p-xl-3 {\n    padding: 1rem !important; }\n  .pt-xl-3, .py-xl-3 {\n    padding-top: 1rem !important; }\n  .pr-xl-3, .px-xl-3 {\n    padding-right: 1rem !important; }\n  .pb-xl-3, .py-xl-3 {\n    padding-bottom: 1rem !important; }\n  .pl-xl-3, .px-xl-3 {\n    padding-left: 1rem !important; }\n  .p-xl-4 {\n    padding: 1.5rem !important; }\n  .pt-xl-4, .py-xl-4 {\n    padding-top: 1.5rem !important; }\n  .pr-xl-4, .px-xl-4 {\n    padding-right: 1.5rem !important; }\n  .pb-xl-4, .py-xl-4 {\n    padding-bottom: 1.5rem !important; }\n  .pl-xl-4, .px-xl-4 {\n    padding-left: 1.5rem !important; }\n  .p-xl-5 {\n    padding: 3rem !important; }\n  .pt-xl-5, .py-xl-5 {\n    padding-top: 3rem !important; }\n  .pr-xl-5, .px-xl-5 {\n    padding-right: 3rem !important; }\n  .pb-xl-5, .py-xl-5 {\n    padding-bottom: 3rem !important; }\n  .pl-xl-5, .px-xl-5 {\n    padding-left: 3rem !important; }\n  .m-xl-auto {\n    margin: auto !important; }\n  .mt-xl-auto, .my-xl-auto {\n    margin-top: auto !important; }\n  .mr-xl-auto, .mx-xl-auto {\n    margin-right: auto !important; }\n  .mb-xl-auto, .my-xl-auto {\n    margin-bottom: auto !important; }\n  .ml-xl-auto, .mx-xl-auto {\n    margin-left: auto !important; } }\n\n.text-justify {\n  text-align: justify !important; }\n\n.text-nowrap {\n  white-space: nowrap !important; }\n\n.text-truncate {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap; }\n\n.text-left {\n  text-align: left !important; }\n\n.text-right {\n  text-align: right !important; }\n\n.text-center {\n  text-align: center !important; }\n\n@media (min-width: 576px) {\n  .text-sm-left {\n    text-align: left !important; }\n  .text-sm-right {\n    text-align: right !important; }\n  .text-sm-center {\n    text-align: center !important; } }\n\n@media (min-width: 768px) {\n  .text-md-left {\n    text-align: left !important; }\n  .text-md-right {\n    text-align: right !important; }\n  .text-md-center {\n    text-align: center !important; } }\n\n@media (min-width: 992px) {\n  .text-lg-left {\n    text-align: left !important; }\n  .text-lg-right {\n    text-align: right !important; }\n  .text-lg-center {\n    text-align: center !important; } }\n\n@media (min-width: 1200px) {\n  .text-xl-left {\n    text-align: left !important; }\n  .text-xl-right {\n    text-align: right !important; }\n  .text-xl-center {\n    text-align: center !important; } }\n\n.text-lowercase {\n  text-transform: lowercase !important; }\n\n.text-uppercase {\n  text-transform: uppercase !important; }\n\n.text-capitalize {\n  text-transform: capitalize !important; }\n\n.font-weight-light {\n  font-weight: 300 !important; }\n\n.font-weight-normal {\n  font-weight: 400 !important; }\n\n.font-weight-bold {\n  font-weight: 700 !important; }\n\n.font-italic {\n  font-style: italic !important; }\n\n.text-white {\n  color: #fff !important; }\n\n.text-primary {\n  color: #6c5353 !important; }\n\na.text-primary:focus, a.text-primary:hover {\n  color: #4f3d3d !important; }\n\n.text-secondary {\n  color: #868e96 !important; }\n\na.text-secondary:focus, a.text-secondary:hover {\n  color: #6c757d !important; }\n\n.text-success {\n  color: #28a745 !important; }\n\na.text-success:focus, a.text-success:hover {\n  color: #1e7e34 !important; }\n\n.text-info {\n  color: #17a2b8 !important; }\n\na.text-info:focus, a.text-info:hover {\n  color: #117a8b !important; }\n\n.text-warning {\n  color: #ffc107 !important; }\n\na.text-warning:focus, a.text-warning:hover {\n  color: #d39e00 !important; }\n\n.text-danger {\n  color: #dc3545 !important; }\n\na.text-danger:focus, a.text-danger:hover {\n  color: #bd2130 !important; }\n\n.text-light {\n  color: #f8f9fa !important; }\n\na.text-light:focus, a.text-light:hover {\n  color: #dae0e5 !important; }\n\n.text-dark {\n  color: #343a40 !important; }\n\na.text-dark:focus, a.text-dark:hover {\n  color: #1d2124 !important; }\n\n.text-muted {\n  color: #868e96 !important; }\n\n.text-hide {\n  font: 0/0 a;\n  color: transparent;\n  text-shadow: none;\n  background-color: transparent;\n  border: 0; }\n\n.visible {\n  visibility: visible !important; }\n\n.invisible {\n  visibility: hidden !important; }\n\n@media print {\n  *, *::before, *::after {\n    text-shadow: none !important;\n    -webkit-box-shadow: none !important;\n            box-shadow: none !important; }\n  a, a:visited {\n    text-decoration: underline; }\n  abbr[title]::after {\n    content: \" (\" attr(title) \")\"; }\n  pre {\n    white-space: pre-wrap !important; }\n  pre, blockquote {\n    border: 1px solid #999;\n    page-break-inside: avoid; }\n  thead {\n    display: table-header-group; }\n  tr, img {\n    page-break-inside: avoid; }\n  p, h2, h3 {\n    orphans: 3;\n    widows: 3; }\n  h2, h3 {\n    page-break-after: avoid; }\n  .navbar {\n    display: none; }\n  .badge {\n    border: 1px solid #000; }\n  .table {\n    border-collapse: collapse !important; }\n    .table td, .table th {\n      background-color: #fff !important; }\n  .table-bordered th, .table-bordered td {\n    border: 1px solid #ddd !important; } }\n\n#logo {\n  width: 6em; }\n", ""]);

// exports


/***/ }),
/* 4 */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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Gk33xMREiS2xZ2RkvGrZJnVyutH78d9BtVrN3E9KChQst+sSix8GTZjwnWVRcwCAoOBglUQmK5LsESj13PDll/62xFQSPz8/fvjs2butbfOly8t7G7e2Quj5V+0/8CCEUFXk37Ur2/7q1QNXLl3qyLOsF6W0xJlmPM87gSC4WbR5OqpQdnW1e926WpSQgn9noXWPHlbrWlS2RZMmddGo1WN5StsAAJOmVMJnH3/8UCwSXWR5/h14nOwgAA9fbtt20thZs7IqM57ew4frfzt4MIsC1AYAuH/tWhMAsHpTtcqhVLJ4ypQi23C5urvnzoiIuFPSKajm2Ld1q+vVf/9trzcYWpFSElASicTm5HTYlCmvc5TKAQB4nnex/MOempzc9vPJk4ttSciZzcUKphvz830/nzzZCQDA08MjbWZExK2yrt+8RQtN8jXruVpCqXNedvYb61etaufh5XW+b1DQ1cLb8lQ3jwuZH/g/9s48Lqrq/ePPuffODMMwIDCouCKukSQuqaQmZWmYP3MtzTXcENNQgTA0QkXcJXPLBSk17WtpWWlZloqJ4obiviAqO8Owzn7vPb8/FBpmBhhg2PS8Xy9ezj33nHOfGfDOPedZPueOHx9VnsA4AIBSqezxTMj8TFXml8lk2Llp04vy9HSzpYOeZXm4B0VGJlfR9DqHODuqT/tOnR7KMzNVGGNbQIiVNmmye9m2bcerOo9MJsOfb93671cREU8e3rkTwnPc00xejJn09PS5B2Jigsc90+iasXjx75vCwt7meb6lXq/33h0dvd+wPv7gkSPjD33zjZ8yP78/AMRb673WFbs2b3ZWyeUmG8k14f/eey+9RAieNtpMbshgAFT4+DFVshF8aO9eadqDB46VjasKXr1751S0mU4wZc/GjU5ajcakzKuAYVJnzZ37U03mLsrP9zBus7OgnGlAaGjm0jlzjubn548wbNep1T12rl0bZ7hemBse/nhlUND+nPT0icbOFcDYiWGYrJLsIoyx9IetW/t6btkSV9H1U1JSGI1OZ+KEcJTJSktSfb1smSdn5CCmALh2L730Pw9vb53x2BKat27975MHD8qU+cpTKAYAwNWKbKoMT09Pfadu3fbfvnx5Do9QqVMHAzCXL1zwGevv/3NN5icQCPULcXgQCARCPTHW379gLECli+J1ixZ1zkpNHWLYhniePnf4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"

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getElement = (function (fn) {
	var memo = {};

	return function(selector) {
		if (typeof memo[selector] === "undefined") {
			var styleTarget = fn.call(this, selector);
			// Special case to return head of iframe instead of iframe itself
			if (styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[selector] = styleTarget;
		}
		return memo[selector]
	};
})(function (target) {
	return document.querySelector(target)
});

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(7);

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
	if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertInto + " " + options.insertAt.before);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	options.attrs.type = "text/css";

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	options.attrs.type = "text/css";
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = options.transform(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),
/* 7 */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

/*!
  * Bootstrap v4.0.0-beta.3 (https://getbootstrap.com)
  * Copyright 2011-2017 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
  */
(function (global, factory) {
	 true ? factory(exports, __webpack_require__(0), __webpack_require__(9)) :
	typeof define === 'function' && define.amd ? define(['exports', 'jquery', 'popper.js'], factory) :
	(factory((global.bootstrap = {}),global.jQuery,global.Popper));
}(this, (function (exports,$,Popper) { 'use strict';

$ = $ && $.hasOwnProperty('default') ? $['default'] : $;
Popper = Popper && Popper.hasOwnProperty('default') ? Popper['default'] : Popper;

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  subClass.__proto__ = superClass;
}

/**
 * --------------------------------------------------------------------------
 * Bootstrap (v4.0.0-beta.3): util.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * --------------------------------------------------------------------------
 */

var Util = function ($$$1) {
  /**
   * ------------------------------------------------------------------------
   * Private TransitionEnd Helpers
   * ------------------------------------------------------------------------
   */
  var transition = false;
  var MAX_UID = 1000000; // shoutout AngusCroll (https://goo.gl/pxwQGp)

  function toType(obj) {
    return {}.toString.call(obj).match(/\s([a-zA-Z]+)/)[1].toLowerCase();
  }

  function getSpecialTransitionEndEvent() {
    return {
      bindType: transition.end,
      delegateType: transition.end,
      handle: function handle(event) {
        if ($$$1(event.target).is(this)) {
          return event.handleObj.handler.apply(this, arguments); // eslint-disable-line prefer-rest-params
        }

        return undefined; // eslint-disable-line no-undefined
      }
    };
  }

  function transitionEndTest() {
    if (window.QUnit) {
      return false;
    }

    return {
      end: 'transitionend'
    };
  }

  function transitionEndEmulator(duration) {
    var _this = this;

    var called = false;
    $$$1(this).one(Util.TRANSITION_END, function () {
      called = true;
    });
    setTimeout(function () {
      if (!called) {
        Util.triggerTransitionEnd(_this);
      }
    }, duration);
    return this;
  }

  function setTransitionEndSupport() {
    transition = transitionEndTest();
    $$$1.fn.emulateTransitionEnd = transitionEndEmulator;

    if (Util.supportsTransitionEnd()) {
      $$$1.event.special[Util.TRANSITION_END] = getSpecialTransitionEndEvent();
    }
  }

  function escapeId(selector) {
    // we escape IDs in case of special selectors (selector = '#myId:something')
    // $.escapeSelector does not exist in jQuery < 3
    selector = typeof $$$1.escapeSelector === 'function' ? $$$1.escapeSelector(selector).substr(1) : selector.replace(/(:|\.|\[|\]|,|=|@)/g, '\\$1');
    return selector;
  }
  /**
   * --------------------------------------------------------------------------
   * Public Util Api
   * --------------------------------------------------------------------------
   */


  var Util = {
    TRANSITION_END: 'bsTransitionEnd',
    getUID: function getUID(prefix) {
      do {
        // eslint-disable-next-line no-bitwise
        prefix += ~~(Math.random() * MAX_UID); // "~~" acts like a faster Math.floor() here
      } while (document.getElementById(prefix));

      return prefix;
    },
    getSelectorFromElement: function getSelectorFromElement(element) {
      var selector = element.getAttribute('data-target');

      if (!selector || selector === '#') {
        selector = element.getAttribute('href') || '';
      } // if it's an ID


      if (selector.charAt(0) === '#') {
        selector = escapeId(selector);
      }

      try {
        var $selector = $$$1(document).find(selector);
        return $selector.length > 0 ? selector : null;
      } catch (error) {
        return null;
      }
    },
    reflow: function reflow(element) {
      return element.offsetHeight;
    },
    triggerTransitionEnd: function triggerTransitionEnd(element) {
      $$$1(element).trigger(transition.end);
    },
    supportsTransitionEnd: function supportsTransitionEnd() {
      return Boolean(transition);
    },
    isElement: function isElement(obj) {
      return (obj[0] || obj).nodeType;
    },
    typeCheckConfig: function typeCheckConfig(componentName, config, configTypes) {
      for (var property in configTypes) {
        if (Object.prototype.hasOwnProperty.call(configTypes, property)) {
          var expectedTypes = configTypes[property];
          var value = config[property];
          var valueType = value && Util.isElement(value) ? 'element' : toType(value);

          if (!new RegExp(expectedTypes).test(valueType)) {
            throw new Error(componentName.toUpperCase() + ": " + ("Option \"" + property + "\" provided type \"" + valueType + "\" ") + ("but expected type \"" + expectedTypes + "\"."));
          }
        }
      }
    }
  };
  setTransitionEndSupport();
  return Util;
}($);

/**
 * --------------------------------------------------------------------------
 * Bootstrap (v4.0.0-beta.3): alert.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * --------------------------------------------------------------------------
 */

var Alert = function ($$$1) {
  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */
  var NAME = 'alert';
  var VERSION = '4.0.0-beta.3';
  var DATA_KEY = 'bs.alert';
  var EVENT_KEY = "." + DATA_KEY;
  var DATA_API_KEY = '.data-api';
  var JQUERY_NO_CONFLICT = $$$1.fn[NAME];
  var TRANSITION_DURATION = 150;
  var Selector = {
    DISMISS: '[data-dismiss="alert"]'
  };
  var Event = {
    CLOSE: "close" + EVENT_KEY,
    CLOSED: "closed" + EVENT_KEY,
    CLICK_DATA_API: "click" + EVENT_KEY + DATA_API_KEY
  };
  var ClassName = {
    ALERT: 'alert',
    FADE: 'fade',
    SHOW: 'show'
    /**
     * ------------------------------------------------------------------------
     * Class Definition
     * ------------------------------------------------------------------------
     */

  };

  var Alert =
  /*#__PURE__*/
  function () {
    function Alert(element) {
      this._element = element;
    } // getters


    var _proto = Alert.prototype;

    // public
    _proto.close = function close(element) {
      element = element || this._element;

      var rootElement = this._getRootElement(element);

      var customEvent = this._triggerCloseEvent(rootElement);

      if (customEvent.isDefaultPrevented()) {
        return;
      }

      this._removeElement(rootElement);
    };

    _proto.dispose = function dispose() {
      $$$1.removeData(this._element, DATA_KEY);
      this._element = null;
    }; // private


    _proto._getRootElement = function _getRootElement(element) {
      var selector = Util.getSelectorFromElement(element);
      var parent = false;

      if (selector) {
        parent = $$$1(selector)[0];
      }

      if (!parent) {
        parent = $$$1(element).closest("." + ClassName.ALERT)[0];
      }

      return parent;
    };

    _proto._triggerCloseEvent = function _triggerCloseEvent(element) {
      var closeEvent = $$$1.Event(Event.CLOSE);
      $$$1(element).trigger(closeEvent);
      return closeEvent;
    };

    _proto._removeElement = function _removeElement(element) {
      var _this = this;

      $$$1(element).removeClass(ClassName.SHOW);

      if (!Util.supportsTransitionEnd() || !$$$1(element).hasClass(ClassName.FADE)) {
        this._destroyElement(element);

        return;
      }

      $$$1(element).one(Util.TRANSITION_END, function (event) {
        return _this._destroyElement(element, event);
      }).emulateTransitionEnd(TRANSITION_DURATION);
    };

    _proto._destroyElement = function _destroyElement(element) {
      $$$1(element).detach().trigger(Event.CLOSED).remove();
    }; // static


    Alert._jQueryInterface = function _jQueryInterface(config) {
      return this.each(function () {
        var $element = $$$1(this);
        var data = $element.data(DATA_KEY);

        if (!data) {
          data = new Alert(this);
          $element.data(DATA_KEY, data);
        }

        if (config === 'close') {
          data[config](this);
        }
      });
    };

    Alert._handleDismiss = function _handleDismiss(alertInstance) {
      return function (event) {
        if (event) {
          event.preventDefault();
        }

        alertInstance.close(this);
      };
    };

    _createClass(Alert, null, [{
      key: "VERSION",
      get: function get() {
        return VERSION;
      }
    }]);
    return Alert;
  }();
  /**
   * ------------------------------------------------------------------------
   * Data Api implementation
   * ------------------------------------------------------------------------
   */


  $$$1(document).on(Event.CLICK_DATA_API, Selector.DISMISS, Alert._handleDismiss(new Alert()));
  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   */

  $$$1.fn[NAME] = Alert._jQueryInterface;
  $$$1.fn[NAME].Constructor = Alert;

  $$$1.fn[NAME].noConflict = function () {
    $$$1.fn[NAME] = JQUERY_NO_CONFLICT;
    return Alert._jQueryInterface;
  };

  return Alert;
}($);

/**
 * --------------------------------------------------------------------------
 * Bootstrap (v4.0.0-beta.3): button.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * --------------------------------------------------------------------------
 */

var Button = function ($$$1) {
  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */
  var NAME = 'button';
  var VERSION = '4.0.0-beta.3';
  var DATA_KEY = 'bs.button';
  var EVENT_KEY = "." + DATA_KEY;
  var DATA_API_KEY = '.data-api';
  var JQUERY_NO_CONFLICT = $$$1.fn[NAME];
  var ClassName = {
    ACTIVE: 'active',
    BUTTON: 'btn',
    FOCUS: 'focus'
  };
  var Selector = {
    DATA_TOGGLE_CARROT: '[data-toggle^="button"]',
    DATA_TOGGLE: '[data-toggle="buttons"]',
    INPUT: 'input',
    ACTIVE: '.active',
    BUTTON: '.btn'
  };
  var Event = {
    CLICK_DATA_API: "click" + EVENT_KEY + DATA_API_KEY,
    FOCUS_BLUR_DATA_API: "focus" + EVENT_KEY + DATA_API_KEY + " " + ("blur" + EVENT_KEY + DATA_API_KEY)
    /**
     * ------------------------------------------------------------------------
     * Class Definition
     * ------------------------------------------------------------------------
     */

  };

  var Button =
  /*#__PURE__*/
  function () {
    function Button(element) {
      this._element = element;
    } // getters


    var _proto = Button.prototype;

    // public
    _proto.toggle = function toggle() {
      var triggerChangeEvent = true;
      var addAriaPressed = true;
      var rootElement = $$$1(this._element).closest(Selector.DATA_TOGGLE)[0];

      if (rootElement) {
        var input = $$$1(this._element).find(Selector.INPUT)[0];

        if (input) {
          if (input.type === 'radio') {
            if (input.checked && $$$1(this._element).hasClass(ClassName.ACTIVE)) {
              triggerChangeEvent = false;
            } else {
              var activeElement = $$$1(rootElement).find(Selector.ACTIVE)[0];

              if (activeElement) {
                $$$1(activeElement).removeClass(ClassName.ACTIVE);
              }
            }
          }

          if (triggerChangeEvent) {
            if (input.hasAttribute('disabled') || rootElement.hasAttribute('disabled') || input.classList.contains('disabled') || rootElement.classList.contains('disabled')) {
              return;
            }

            input.checked = !$$$1(this._element).hasClass(ClassName.ACTIVE);
            $$$1(input).trigger('change');
          }

          input.focus();
          addAriaPressed = false;
        }
      }

      if (addAriaPressed) {
        this._element.setAttribute('aria-pressed', !$$$1(this._element).hasClass(ClassName.ACTIVE));
      }

      if (triggerChangeEvent) {
        $$$1(this._element).toggleClass(ClassName.ACTIVE);
      }
    };

    _proto.dispose = function dispose() {
      $$$1.removeData(this._element, DATA_KEY);
      this._element = null;
    }; // static


    Button._jQueryInterface = function _jQueryInterface(config) {
      return this.each(function () {
        var data = $$$1(this).data(DATA_KEY);

        if (!data) {
          data = new Button(this);
          $$$1(this).data(DATA_KEY, data);
        }

        if (config === 'toggle') {
          data[config]();
        }
      });
    };

    _createClass(Button, null, [{
      key: "VERSION",
      get: function get() {
        return VERSION;
      }
    }]);
    return Button;
  }();
  /**
   * ------------------------------------------------------------------------
   * Data Api implementation
   * ------------------------------------------------------------------------
   */


  $$$1(document).on(Event.CLICK_DATA_API, Selector.DATA_TOGGLE_CARROT, function (event) {
    event.preventDefault();
    var button = event.target;

    if (!$$$1(button).hasClass(ClassName.BUTTON)) {
      button = $$$1(button).closest(Selector.BUTTON);
    }

    Button._jQueryInterface.call($$$1(button), 'toggle');
  }).on(Event.FOCUS_BLUR_DATA_API, Selector.DATA_TOGGLE_CARROT, function (event) {
    var button = $$$1(event.target).closest(Selector.BUTTON)[0];
    $$$1(button).toggleClass(ClassName.FOCUS, /^focus(in)?$/.test(event.type));
  });
  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   */

  $$$1.fn[NAME] = Button._jQueryInterface;
  $$$1.fn[NAME].Constructor = Button;

  $$$1.fn[NAME].noConflict = function () {
    $$$1.fn[NAME] = JQUERY_NO_CONFLICT;
    return Button._jQueryInterface;
  };

  return Button;
}($);

/**
 * --------------------------------------------------------------------------
 * Bootstrap (v4.0.0-beta.3): carousel.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * --------------------------------------------------------------------------
 */

var Carousel = function ($$$1) {
  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */
  var NAME = 'carousel';
  var VERSION = '4.0.0-beta.3';
  var DATA_KEY = 'bs.carousel';
  var EVENT_KEY = "." + DATA_KEY;
  var DATA_API_KEY = '.data-api';
  var JQUERY_NO_CONFLICT = $$$1.fn[NAME];
  var TRANSITION_DURATION = 600;
  var ARROW_LEFT_KEYCODE = 37; // KeyboardEvent.which value for left arrow key

  var ARROW_RIGHT_KEYCODE = 39; // KeyboardEvent.which value for right arrow key

  var TOUCHEVENT_COMPAT_WAIT = 500; // Time for mouse compat events to fire after touch

  var Default = {
    interval: 5000,
    keyboard: true,
    slide: false,
    pause: 'hover',
    wrap: true
  };
  var DefaultType = {
    interval: '(number|boolean)',
    keyboard: 'boolean',
    slide: '(boolean|string)',
    pause: '(string|boolean)',
    wrap: 'boolean'
  };
  var Direction = {
    NEXT: 'next',
    PREV: 'prev',
    LEFT: 'left',
    RIGHT: 'right'
  };
  var Event = {
    SLIDE: "slide" + EVENT_KEY,
    SLID: "slid" + EVENT_KEY,
    KEYDOWN: "keydown" + EVENT_KEY,
    MOUSEENTER: "mouseenter" + EVENT_KEY,
    MOUSELEAVE: "mouseleave" + EVENT_KEY,
    TOUCHEND: "touchend" + EVENT_KEY,
    LOAD_DATA_API: "load" + EVENT_KEY + DATA_API_KEY,
    CLICK_DATA_API: "click" + EVENT_KEY + DATA_API_KEY
  };
  var ClassName = {
    CAROUSEL: 'carousel',
    ACTIVE: 'active',
    SLIDE: 'slide',
    RIGHT: 'carousel-item-right',
    LEFT: 'carousel-item-left',
    NEXT: 'carousel-item-next',
    PREV: 'carousel-item-prev',
    ITEM: 'carousel-item'
  };
  var Selector = {
    ACTIVE: '.active',
    ACTIVE_ITEM: '.active.carousel-item',
    ITEM: '.carousel-item',
    NEXT_PREV: '.carousel-item-next, .carousel-item-prev',
    INDICATORS: '.carousel-indicators',
    DATA_SLIDE: '[data-slide], [data-slide-to]',
    DATA_RIDE: '[data-ride="carousel"]'
    /**
     * ------------------------------------------------------------------------
     * Class Definition
     * ------------------------------------------------------------------------
     */

  };

  var Carousel =
  /*#__PURE__*/
  function () {
    function Carousel(element, config) {
      this._items = null;
      this._interval = null;
      this._activeElement = null;
      this._isPaused = false;
      this._isSliding = false;
      this.touchTimeout = null;
      this._config = this._getConfig(config);
      this._element = $$$1(element)[0];
      this._indicatorsElement = $$$1(this._element).find(Selector.INDICATORS)[0];

      this._addEventListeners();
    } // getters


    var _proto = Carousel.prototype;

    // public
    _proto.next = function next() {
      if (!this._isSliding) {
        this._slide(Direction.NEXT);
      }
    };

    _proto.nextWhenVisible = function nextWhenVisible() {
      // Don't call next when the page isn't visible
      // or the carousel or its parent isn't visible
      if (!document.hidden && $$$1(this._element).is(':visible') && $$$1(this._element).css('visibility') !== 'hidden') {
        this.next();
      }
    };

    _proto.prev = function prev() {
      if (!this._isSliding) {
        this._slide(Direction.PREV);
      }
    };

    _proto.pause = function pause(event) {
      if (!event) {
        this._isPaused = true;
      }

      if ($$$1(this._element).find(Selector.NEXT_PREV)[0] && Util.supportsTransitionEnd()) {
        Util.triggerTransitionEnd(this._element);
        this.cycle(true);
      }

      clearInterval(this._interval);
      this._interval = null;
    };

    _proto.cycle = function cycle(event) {
      if (!event) {
        this._isPaused = false;
      }

      if (this._interval) {
        clearInterval(this._interval);
        this._interval = null;
      }

      if (this._config.interval && !this._isPaused) {
        this._interval = setInterval((document.visibilityState ? this.nextWhenVisible : this.next).bind(this), this._config.interval);
      }
    };

    _proto.to = function to(index) {
      var _this = this;

      this._activeElement = $$$1(this._element).find(Selector.ACTIVE_ITEM)[0];

      var activeIndex = this._getItemIndex(this._activeElement);

      if (index > this._items.length - 1 || index < 0) {
        return;
      }

      if (this._isSliding) {
        $$$1(this._element).one(Event.SLID, function () {
          return _this.to(index);
        });
        return;
      }

      if (activeIndex === index) {
        this.pause();
        this.cycle();
        return;
      }

      var direction = index > activeIndex ? Direction.NEXT : Direction.PREV;

      this._slide(direction, this._items[index]);
    };

    _proto.dispose = function dispose() {
      $$$1(this._element).off(EVENT_KEY);
      $$$1.removeData(this._element, DATA_KEY);
      this._items = null;
      this._config = null;
      this._element = null;
      this._interval = null;
      this._isPaused = null;
      this._isSliding = null;
      this._activeElement = null;
      this._indicatorsElement = null;
    }; // private


    _proto._getConfig = function _getConfig(config) {
      config = _extends({}, Default, config);
      Util.typeCheckConfig(NAME, config, DefaultType);
      return config;
    };

    _proto._addEventListeners = function _addEventListeners() {
      var _this2 = this;

      if (this._config.keyboard) {
        $$$1(this._element).on(Event.KEYDOWN, function (event) {
          return _this2._keydown(event);
        });
      }

      if (this._config.pause === 'hover') {
        $$$1(this._element).on(Event.MOUSEENTER, function (event) {
          return _this2.pause(event);
        }).on(Event.MOUSELEAVE, function (event) {
          return _this2.cycle(event);
        });

        if ('ontouchstart' in document.documentElement) {
          // if it's a touch-enabled device, mouseenter/leave are fired as
          // part of the mouse compatibility events on first tap - the carousel
          // would stop cycling until user tapped out of it;
          // here, we listen for touchend, explicitly pause the carousel
          // (as if it's the second time we tap on it, mouseenter compat event
          // is NOT fired) and after a timeout (to allow for mouse compatibility
          // events to fire) we explicitly restart cycling
          $$$1(this._element).on(Event.TOUCHEND, function () {
            _this2.pause();

            if (_this2.touchTimeout) {
              clearTimeout(_this2.touchTimeout);
            }

            _this2.touchTimeout = setTimeout(function (event) {
              return _this2.cycle(event);
            }, TOUCHEVENT_COMPAT_WAIT + _this2._config.interval);
          });
        }
      }
    };

    _proto._keydown = function _keydown(event) {
      if (/input|textarea/i.test(event.target.tagName)) {
        return;
      }

      switch (event.which) {
        case ARROW_LEFT_KEYCODE:
          event.preventDefault();
          this.prev();
          break;

        case ARROW_RIGHT_KEYCODE:
          event.preventDefault();
          this.next();
          break;

        default:
          return;
      }
    };

    _proto._getItemIndex = function _getItemIndex(element) {
      this._items = $$$1.makeArray($$$1(element).parent().find(Selector.ITEM));
      return this._items.indexOf(element);
    };

    _proto._getItemByDirection = function _getItemByDirection(direction, activeElement) {
      var isNextDirection = direction === Direction.NEXT;
      var isPrevDirection = direction === Direction.PREV;

      var activeIndex = this._getItemIndex(activeElement);

      var lastItemIndex = this._items.length - 1;
      var isGoingToWrap = isPrevDirection && activeIndex === 0 || isNextDirection && activeIndex === lastItemIndex;

      if (isGoingToWrap && !this._config.wrap) {
        return activeElement;
      }

      var delta = direction === Direction.PREV ? -1 : 1;
      var itemIndex = (activeIndex + delta) % this._items.length;
      return itemIndex === -1 ? this._items[this._items.length - 1] : this._items[itemIndex];
    };

    _proto._triggerSlideEvent = function _triggerSlideEvent(relatedTarget, eventDirectionName) {
      var targetIndex = this._getItemIndex(relatedTarget);

      var fromIndex = this._getItemIndex($$$1(this._element).find(Selector.ACTIVE_ITEM)[0]);

      var slideEvent = $$$1.Event(Event.SLIDE, {
        relatedTarget: relatedTarget,
        direction: eventDirectionName,
        from: fromIndex,
        to: targetIndex
      });
      $$$1(this._element).trigger(slideEvent);
      return slideEvent;
    };

    _proto._setActiveIndicatorElement = function _setActiveIndicatorElement(element) {
      if (this._indicatorsElement) {
        $$$1(this._indicatorsElement).find(Selector.ACTIVE).removeClass(ClassName.ACTIVE);

        var nextIndicator = this._indicatorsElement.children[this._getItemIndex(element)];

        if (nextIndicator) {
          $$$1(nextIndicator).addClass(ClassName.ACTIVE);
        }
      }
    };

    _proto._slide = function _slide(direction, element) {
      var _this3 = this;

      var activeElement = $$$1(this._element).find(Selector.ACTIVE_ITEM)[0];

      var activeElementIndex = this._getItemIndex(activeElement);

      var nextElement = element || activeElement && this._getItemByDirection(direction, activeElement);

      var nextElementIndex = this._getItemIndex(nextElement);

      var isCycling = Boolean(this._interval);
      var directionalClassName;
      var orderClassName;
      var eventDirectionName;

      if (direction === Direction.NEXT) {
        directionalClassName = ClassName.LEFT;
        orderClassName = ClassName.NEXT;
        eventDirectionName = Direction.LEFT;
      } else {
        directionalClassName = ClassName.RIGHT;
        orderClassName = ClassName.PREV;
        eventDirectionName = Direction.RIGHT;
      }

      if (nextElement && $$$1(nextElement).hasClass(ClassName.ACTIVE)) {
        this._isSliding = false;
        return;
      }

      var slideEvent = this._triggerSlideEvent(nextElement, eventDirectionName);

      if (slideEvent.isDefaultPrevented()) {
        return;
      }

      if (!activeElement || !nextElement) {
        // some weirdness is happening, so we bail
        return;
      }

      this._isSliding = true;

      if (isCycling) {
        this.pause();
      }

      this._setActiveIndicatorElement(nextElement);

      var slidEvent = $$$1.Event(Event.SLID, {
        relatedTarget: nextElement,
        direction: eventDirectionName,
        from: activeElementIndex,
        to: nextElementIndex
      });

      if (Util.supportsTransitionEnd() && $$$1(this._element).hasClass(ClassName.SLIDE)) {
        $$$1(nextElement).addClass(orderClassName);
        Util.reflow(nextElement);
        $$$1(activeElement).addClass(directionalClassName);
        $$$1(nextElement).addClass(directionalClassName);
        $$$1(activeElement).one(Util.TRANSITION_END, function () {
          $$$1(nextElement).removeClass(directionalClassName + " " + orderClassName).addClass(ClassName.ACTIVE);
          $$$1(activeElement).removeClass(ClassName.ACTIVE + " " + orderClassName + " " + directionalClassName);
          _this3._isSliding = false;
          setTimeout(function () {
            return $$$1(_this3._element).trigger(slidEvent);
          }, 0);
        }).emulateTransitionEnd(TRANSITION_DURATION);
      } else {
        $$$1(activeElement).removeClass(ClassName.ACTIVE);
        $$$1(nextElement).addClass(ClassName.ACTIVE);
        this._isSliding = false;
        $$$1(this._element).trigger(slidEvent);
      }

      if (isCycling) {
        this.cycle();
      }
    }; // static


    Carousel._jQueryInterface = function _jQueryInterface(config) {
      return this.each(function () {
        var data = $$$1(this).data(DATA_KEY);

        var _config = _extends({}, Default, $$$1(this).data());

        if (typeof config === 'object') {
          _config = _extends({}, _config, config);
        }

        var action = typeof config === 'string' ? config : _config.slide;

        if (!data) {
          data = new Carousel(this, _config);
          $$$1(this).data(DATA_KEY, data);
        }

        if (typeof config === 'number') {
          data.to(config);
        } else if (typeof action === 'string') {
          if (typeof data[action] === 'undefined') {
            throw new Error("No method named \"" + action + "\"");
          }

          data[action]();
        } else if (_config.interval) {
          data.pause();
          data.cycle();
        }
      });
    };

    Carousel._dataApiClickHandler = function _dataApiClickHandler(event) {
      var selector = Util.getSelectorFromElement(this);

      if (!selector) {
        return;
      }

      var target = $$$1(selector)[0];

      if (!target || !$$$1(target).hasClass(ClassName.CAROUSEL)) {
        return;
      }

      var config = _extends({}, $$$1(target).data(), $$$1(this).data());
      var slideIndex = this.getAttribute('data-slide-to');

      if (slideIndex) {
        config.interval = false;
      }

      Carousel._jQueryInterface.call($$$1(target), config);

      if (slideIndex) {
        $$$1(target).data(DATA_KEY).to(slideIndex);
      }

      event.preventDefault();
    };

    _createClass(Carousel, null, [{
      key: "VERSION",
      get: function get() {
        return VERSION;
      }
    }, {
      key: "Default",
      get: function get() {
        return Default;
      }
    }]);
    return Carousel;
  }();
  /**
   * ------------------------------------------------------------------------
   * Data Api implementation
   * ------------------------------------------------------------------------
   */


  $$$1(document).on(Event.CLICK_DATA_API, Selector.DATA_SLIDE, Carousel._dataApiClickHandler);
  $$$1(window).on(Event.LOAD_DATA_API, function () {
    $$$1(Selector.DATA_RIDE).each(function () {
      var $carousel = $$$1(this);

      Carousel._jQueryInterface.call($carousel, $carousel.data());
    });
  });
  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   */

  $$$1.fn[NAME] = Carousel._jQueryInterface;
  $$$1.fn[NAME].Constructor = Carousel;

  $$$1.fn[NAME].noConflict = function () {
    $$$1.fn[NAME] = JQUERY_NO_CONFLICT;
    return Carousel._jQueryInterface;
  };

  return Carousel;
}($);

/**
 * --------------------------------------------------------------------------
 * Bootstrap (v4.0.0-beta.3): collapse.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * --------------------------------------------------------------------------
 */

var Collapse = function ($$$1) {
  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */
  var NAME = 'collapse';
  var VERSION = '4.0.0-beta.3';
  var DATA_KEY = 'bs.collapse';
  var EVENT_KEY = "." + DATA_KEY;
  var DATA_API_KEY = '.data-api';
  var JQUERY_NO_CONFLICT = $$$1.fn[NAME];
  var TRANSITION_DURATION = 600;
  var Default = {
    toggle: true,
    parent: ''
  };
  var DefaultType = {
    toggle: 'boolean',
    parent: '(string|element)'
  };
  var Event = {
    SHOW: "show" + EVENT_KEY,
    SHOWN: "shown" + EVENT_KEY,
    HIDE: "hide" + EVENT_KEY,
    HIDDEN: "hidden" + EVENT_KEY,
    CLICK_DATA_API: "click" + EVENT_KEY + DATA_API_KEY
  };
  var ClassName = {
    SHOW: 'show',
    COLLAPSE: 'collapse',
    COLLAPSING: 'collapsing',
    COLLAPSED: 'collapsed'
  };
  var Dimension = {
    WIDTH: 'width',
    HEIGHT: 'height'
  };
  var Selector = {
    ACTIVES: '.show, .collapsing',
    DATA_TOGGLE: '[data-toggle="collapse"]'
    /**
     * ------------------------------------------------------------------------
     * Class Definition
     * ------------------------------------------------------------------------
     */

  };

  var Collapse =
  /*#__PURE__*/
  function () {
    function Collapse(element, config) {
      this._isTransitioning = false;
      this._element = element;
      this._config = this._getConfig(config);
      this._triggerArray = $$$1.makeArray($$$1("[data-toggle=\"collapse\"][href=\"#" + element.id + "\"]," + ("[data-toggle=\"collapse\"][data-target=\"#" + element.id + "\"]")));
      var tabToggles = $$$1(Selector.DATA_TOGGLE);

      for (var i = 0; i < tabToggles.length; i++) {
        var elem = tabToggles[i];
        var selector = Util.getSelectorFromElement(elem);

        if (selector !== null && $$$1(selector).filter(element).length > 0) {
          this._triggerArray.push(elem);
        }
      }

      this._parent = this._config.parent ? this._getParent() : null;

      if (!this._config.parent) {
        this._addAriaAndCollapsedClass(this._element, this._triggerArray);
      }

      if (this._config.toggle) {
        this.toggle();
      }
    } // getters


    var _proto = Collapse.prototype;

    // public
    _proto.toggle = function toggle() {
      if ($$$1(this._element).hasClass(ClassName.SHOW)) {
        this.hide();
      } else {
        this.show();
      }
    };

    _proto.show = function show() {
      var _this = this;

      if (this._isTransitioning || $$$1(this._element).hasClass(ClassName.SHOW)) {
        return;
      }

      var actives;
      var activesData;

      if (this._parent) {
        actives = $$$1.makeArray($$$1(this._parent).children().children(Selector.ACTIVES));

        if (!actives.length) {
          actives = null;
        }
      }

      if (actives) {
        activesData = $$$1(actives).data(DATA_KEY);

        if (activesData && activesData._isTransitioning) {
          return;
        }
      }

      var startEvent = $$$1.Event(Event.SHOW);
      $$$1(this._element).trigger(startEvent);

      if (startEvent.isDefaultPrevented()) {
        return;
      }

      if (actives) {
        Collapse._jQueryInterface.call($$$1(actives), 'hide');

        if (!activesData) {
          $$$1(actives).data(DATA_KEY, null);
        }
      }

      var dimension = this._getDimension();

      $$$1(this._element).removeClass(ClassName.COLLAPSE).addClass(ClassName.COLLAPSING);
      this._element.style[dimension] = 0;

      if (this._triggerArray.length) {
        $$$1(this._triggerArray).removeClass(ClassName.COLLAPSED).attr('aria-expanded', true);
      }

      this.setTransitioning(true);

      var complete = function complete() {
        $$$1(_this._element).removeClass(ClassName.COLLAPSING).addClass(ClassName.COLLAPSE).addClass(ClassName.SHOW);
        _this._element.style[dimension] = '';

        _this.setTransitioning(false);

        $$$1(_this._element).trigger(Event.SHOWN);
      };

      if (!Util.supportsTransitionEnd()) {
        complete();
        return;
      }

      var capitalizedDimension = dimension[0].toUpperCase() + dimension.slice(1);
      var scrollSize = "scroll" + capitalizedDimension;
      $$$1(this._element).one(Util.TRANSITION_END, complete).emulateTransitionEnd(TRANSITION_DURATION);
      this._element.style[dimension] = this._element[scrollSize] + "px";
    };

    _proto.hide = function hide() {
      var _this2 = this;

      if (this._isTransitioning || !$$$1(this._element).hasClass(ClassName.SHOW)) {
        return;
      }

      var startEvent = $$$1.Event(Event.HIDE);
      $$$1(this._element).trigger(startEvent);

      if (startEvent.isDefaultPrevented()) {
        return;
      }

      var dimension = this._getDimension();

      this._element.style[dimension] = this._element.getBoundingClientRect()[dimension] + "px";
      Util.reflow(this._element);
      $$$1(this._element).addClass(ClassName.COLLAPSING).removeClass(ClassName.COLLAPSE).removeClass(ClassName.SHOW);

      if (this._triggerArray.length) {
        for (var i = 0; i < this._triggerArray.length; i++) {
          var trigger = this._triggerArray[i];
          var selector = Util.getSelectorFromElement(trigger);

          if (selector !== null) {
            var $elem = $$$1(selector);

            if (!$elem.hasClass(ClassName.SHOW)) {
              $$$1(trigger).addClass(ClassName.COLLAPSED).attr('aria-expanded', false);
            }
          }
        }
      }

      this.setTransitioning(true);

      var complete = function complete() {
        _this2.setTransitioning(false);

        $$$1(_this2._element).removeClass(ClassName.COLLAPSING).addClass(ClassName.COLLAPSE).trigger(Event.HIDDEN);
      };

      this._element.style[dimension] = '';

      if (!Util.supportsTransitionEnd()) {
        complete();
        return;
      }

      $$$1(this._element).one(Util.TRANSITION_END, complete).emulateTransitionEnd(TRANSITION_DURATION);
    };

    _proto.setTransitioning = function setTransitioning(isTransitioning) {
      this._isTransitioning = isTransitioning;
    };

    _proto.dispose = function dispose() {
      $$$1.removeData(this._element, DATA_KEY);
      this._config = null;
      this._parent = null;
      this._element = null;
      this._triggerArray = null;
      this._isTransitioning = null;
    }; // private


    _proto._getConfig = function _getConfig(config) {
      config = _extends({}, Default, config);
      config.toggle = Boolean(config.toggle); // coerce string values

      Util.typeCheckConfig(NAME, config, DefaultType);
      return config;
    };

    _proto._getDimension = function _getDimension() {
      var hasWidth = $$$1(this._element).hasClass(Dimension.WIDTH);
      return hasWidth ? Dimension.WIDTH : Dimension.HEIGHT;
    };

    _proto._getParent = function _getParent() {
      var _this3 = this;

      var parent = null;

      if (Util.isElement(this._config.parent)) {
        parent = this._config.parent; // it's a jQuery object

        if (typeof this._config.parent.jquery !== 'undefined') {
          parent = this._config.parent[0];
        }
      } else {
        parent = $$$1(this._config.parent)[0];
      }

      var selector = "[data-toggle=\"collapse\"][data-parent=\"" + this._config.parent + "\"]";
      $$$1(parent).find(selector).each(function (i, element) {
        _this3._addAriaAndCollapsedClass(Collapse._getTargetFromElement(element), [element]);
      });
      return parent;
    };

    _proto._addAriaAndCollapsedClass = function _addAriaAndCollapsedClass(element, triggerArray) {
      if (element) {
        var isOpen = $$$1(element).hasClass(ClassName.SHOW);

        if (triggerArray.length) {
          $$$1(triggerArray).toggleClass(ClassName.COLLAPSED, !isOpen).attr('aria-expanded', isOpen);
        }
      }
    }; // static


    Collapse._getTargetFromElement = function _getTargetFromElement(element) {
      var selector = Util.getSelectorFromElement(element);
      return selector ? $$$1(selector)[0] : null;
    };

    Collapse._jQueryInterface = function _jQueryInterface(config) {
      return this.each(function () {
        var $this = $$$1(this);
        var data = $this.data(DATA_KEY);

        var _config = _extends({}, Default, $this.data(), typeof config === 'object' && config);

        if (!data && _config.toggle && /show|hide/.test(config)) {
          _config.toggle = false;
        }

        if (!data) {
          data = new Collapse(this, _config);
          $this.data(DATA_KEY, data);
        }

        if (typeof config === 'string') {
          if (typeof data[config] === 'undefined') {
            throw new Error("No method named \"" + config + "\"");
          }

          data[config]();
        }
      });
    };

    _createClass(Collapse, null, [{
      key: "VERSION",
      get: function get() {
        return VERSION;
      }
    }, {
      key: "Default",
      get: function get() {
        return Default;
      }
    }]);
    return Collapse;
  }();
  /**
   * ------------------------------------------------------------------------
   * Data Api implementation
   * ------------------------------------------------------------------------
   */


  $$$1(document).on(Event.CLICK_DATA_API, Selector.DATA_TOGGLE, function (event) {
    // preventDefault only for <a> elements (which change the URL) not inside the collapsible element
    if (event.currentTarget.tagName === 'A') {
      event.preventDefault();
    }

    var $trigger = $$$1(this);
    var selector = Util.getSelectorFromElement(this);
    $$$1(selector).each(function () {
      var $target = $$$1(this);
      var data = $target.data(DATA_KEY);
      var config = data ? 'toggle' : $trigger.data();

      Collapse._jQueryInterface.call($target, config);
    });
  });
  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   */

  $$$1.fn[NAME] = Collapse._jQueryInterface;
  $$$1.fn[NAME].Constructor = Collapse;

  $$$1.fn[NAME].noConflict = function () {
    $$$1.fn[NAME] = JQUERY_NO_CONFLICT;
    return Collapse._jQueryInterface;
  };

  return Collapse;
}($);

/**
 * --------------------------------------------------------------------------
 * Bootstrap (v4.0.0-beta.3): dropdown.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * --------------------------------------------------------------------------
 */

var Dropdown = function ($$$1) {
  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */
  var NAME = 'dropdown';
  var VERSION = '4.0.0-beta.3';
  var DATA_KEY = 'bs.dropdown';
  var EVENT_KEY = "." + DATA_KEY;
  var DATA_API_KEY = '.data-api';
  var JQUERY_NO_CONFLICT = $$$1.fn[NAME];
  var ESCAPE_KEYCODE = 27; // KeyboardEvent.which value for Escape (Esc) key

  var SPACE_KEYCODE = 32; // KeyboardEvent.which value for space key

  var TAB_KEYCODE = 9; // KeyboardEvent.which value for tab key

  var ARROW_UP_KEYCODE = 38; // KeyboardEvent.which value for up arrow key

  var ARROW_DOWN_KEYCODE = 40; // KeyboardEvent.which value for down arrow key

  var RIGHT_MOUSE_BUTTON_WHICH = 3; // MouseEvent.which value for the right button (assuming a right-handed mouse)

  var REGEXP_KEYDOWN = new RegExp(ARROW_UP_KEYCODE + "|" + ARROW_DOWN_KEYCODE + "|" + ESCAPE_KEYCODE);
  var Event = {
    HIDE: "hide" + EVENT_KEY,
    HIDDEN: "hidden" + EVENT_KEY,
    SHOW: "show" + EVENT_KEY,
    SHOWN: "shown" + EVENT_KEY,
    CLICK: "click" + EVENT_KEY,
    CLICK_DATA_API: "click" + EVENT_KEY + DATA_API_KEY,
    KEYDOWN_DATA_API: "keydown" + EVENT_KEY + DATA_API_KEY,
    KEYUP_DATA_API: "keyup" + EVENT_KEY + DATA_API_KEY
  };
  var ClassName = {
    DISABLED: 'disabled',
    SHOW: 'show',
    DROPUP: 'dropup',
    DROPRIGHT: 'dropright',
    DROPLEFT: 'dropleft',
    MENURIGHT: 'dropdown-menu-right',
    MENULEFT: 'dropdown-menu-left',
    POSITION_STATIC: 'position-static'
  };
  var Selector = {
    DATA_TOGGLE: '[data-toggle="dropdown"]',
    FORM_CHILD: '.dropdown form',
    MENU: '.dropdown-menu',
    NAVBAR_NAV: '.navbar-nav',
    VISIBLE_ITEMS: '.dropdown-menu .dropdown-item:not(.disabled)'
  };
  var AttachmentMap = {
    TOP: 'top-start',
    TOPEND: 'top-end',
    BOTTOM: 'bottom-start',
    BOTTOMEND: 'bottom-end',
    RIGHT: 'right-start',
    RIGHTEND: 'right-end',
    LEFT: 'left-start',
    LEFTEND: 'left-end'
  };
  var Default = {
    offset: 0,
    flip: true,
    boundary: 'scrollParent'
  };
  var DefaultType = {
    offset: '(number|string|function)',
    flip: 'boolean',
    boundary: '(string|element)'
    /**
     * ------------------------------------------------------------------------
     * Class Definition
     * ------------------------------------------------------------------------
     */

  };

  var Dropdown =
  /*#__PURE__*/
  function () {
    function Dropdown(element, config) {
      this._element = element;
      this._popper = null;
      this._config = this._getConfig(config);
      this._menu = this._getMenuElement();
      this._inNavbar = this._detectNavbar();

      this._addEventListeners();
    } // getters


    var _proto = Dropdown.prototype;

    // public
    _proto.toggle = function toggle() {
      if (this._element.disabled || $$$1(this._element).hasClass(ClassName.DISABLED)) {
        return;
      }

      var parent = Dropdown._getParentFromElement(this._element);

      var isActive = $$$1(this._menu).hasClass(ClassName.SHOW);

      Dropdown._clearMenus();

      if (isActive) {
        return;
      }

      var relatedTarget = {
        relatedTarget: this._element
      };
      var showEvent = $$$1.Event(Event.SHOW, relatedTarget);
      $$$1(parent).trigger(showEvent);

      if (showEvent.isDefaultPrevented()) {
        return;
      } // Disable totally Popper.js for Dropdown in Navbar


      if (!this._inNavbar) {
        /**
         * Check for Popper dependency
         * Popper - https://popper.js.org
         */
        if (typeof Popper === 'undefined') {
          throw new Error('Bootstrap dropdown require Popper.js (https://popper.js.org)');
        }

        var element = this._element; // for dropup with alignment we use the parent as popper container

        if ($$$1(parent).hasClass(ClassName.DROPUP)) {
          if ($$$1(this._menu).hasClass(ClassName.MENULEFT) || $$$1(this._menu).hasClass(ClassName.MENURIGHT)) {
            element = parent;
          }
        } // If boundary is not `scrollParent`, then set position to `static`
        // to allow the menu to "escape" the scroll parent's boundaries
        // https://github.com/twbs/bootstrap/issues/24251


        if (this._config.boundary !== 'scrollParent') {
          $$$1(parent).addClass(ClassName.POSITION_STATIC);
        }

        this._popper = new Popper(element, this._menu, this._getPopperConfig());
      } // if this is a touch-enabled device we add extra
      // empty mouseover listeners to the body's immediate children;
      // only needed because of broken event delegation on iOS
      // https://www.quirksmode.org/blog/archives/2014/02/mouse_event_bub.html


      if ('ontouchstart' in document.documentElement && !$$$1(parent).closest(Selector.NAVBAR_NAV).length) {
        $$$1('body').children().on('mouseover', null, $$$1.noop);
      }

      this._element.focus();

      this._element.setAttribute('aria-expanded', true);

      $$$1(this._menu).toggleClass(ClassName.SHOW);
      $$$1(parent).toggleClass(ClassName.SHOW).trigger($$$1.Event(Event.SHOWN, relatedTarget));
    };

    _proto.dispose = function dispose() {
      $$$1.removeData(this._element, DATA_KEY);
      $$$1(this._element).off(EVENT_KEY);
      this._element = null;
      this._menu = null;

      if (this._popper !== null) {
        this._popper.destroy();

        this._popper = null;
      }
    };

    _proto.update = function update() {
      this._inNavbar = this._detectNavbar();

      if (this._popper !== null) {
        this._popper.scheduleUpdate();
      }
    }; // private


    _proto._addEventListeners = function _addEventListeners() {
      var _this = this;

      $$$1(this._element).on(Event.CLICK, function (event) {
        event.preventDefault();
        event.stopPropagation();

        _this.toggle();
      });
    };

    _proto._getConfig = function _getConfig(config) {
      config = _extends({}, this.constructor.Default, $$$1(this._element).data(), config);
      Util.typeCheckConfig(NAME, config, this.constructor.DefaultType);
      return config;
    };

    _proto._getMenuElement = function _getMenuElement() {
      if (!this._menu) {
        var parent = Dropdown._getParentFromElement(this._element);

        this._menu = $$$1(parent).find(Selector.MENU)[0];
      }

      return this._menu;
    };

    _proto._getPlacement = function _getPlacement() {
      var $parentDropdown = $$$1(this._element).parent();
      var placement = AttachmentMap.BOTTOM; // Handle dropup

      if ($parentDropdown.hasClass(ClassName.DROPUP)) {
        placement = AttachmentMap.TOP;

        if ($$$1(this._menu).hasClass(ClassName.MENURIGHT)) {
          placement = AttachmentMap.TOPEND;
        }
      } else if ($parentDropdown.hasClass(ClassName.DROPRIGHT)) {
        placement = AttachmentMap.RIGHT;
      } else if ($parentDropdown.hasClass(ClassName.DROPLEFT)) {
        placement = AttachmentMap.LEFT;
      } else if ($$$1(this._menu).hasClass(ClassName.MENURIGHT)) {
        placement = AttachmentMap.BOTTOMEND;
      }

      return placement;
    };

    _proto._detectNavbar = function _detectNavbar() {
      return $$$1(this._element).closest('.navbar').length > 0;
    };

    _proto._getPopperConfig = function _getPopperConfig() {
      var _this2 = this;

      var offsetConf = {};

      if (typeof this._config.offset === 'function') {
        offsetConf.fn = function (data) {
          data.offsets = _extends({}, data.offsets, _this2._config.offset(data.offsets) || {});
          return data;
        };
      } else {
        offsetConf.offset = this._config.offset;
      }

      var popperConfig = {
        placement: this._getPlacement(),
        modifiers: {
          offset: offsetConf,
          flip: {
            enabled: this._config.flip
          },
          preventOverflow: {
            boundariesElement: this._config.boundary
          }
        }
      };
      return popperConfig;
    }; // static


    Dropdown._jQueryInterface = function _jQueryInterface(config) {
      return this.each(function () {
        var data = $$$1(this).data(DATA_KEY);

        var _config = typeof config === 'object' ? config : null;

        if (!data) {
          data = new Dropdown(this, _config);
          $$$1(this).data(DATA_KEY, data);
        }

        if (typeof config === 'string') {
          if (typeof data[config] === 'undefined') {
            throw new Error("No method named \"" + config + "\"");
          }

          data[config]();
        }
      });
    };

    Dropdown._clearMenus = function _clearMenus(event) {
      if (event && (event.which === RIGHT_MOUSE_BUTTON_WHICH || event.type === 'keyup' && event.which !== TAB_KEYCODE)) {
        return;
      }

      var toggles = $$$1.makeArray($$$1(Selector.DATA_TOGGLE));

      for (var i = 0; i < toggles.length; i++) {
        var parent = Dropdown._getParentFromElement(toggles[i]);

        var context = $$$1(toggles[i]).data(DATA_KEY);
        var relatedTarget = {
          relatedTarget: toggles[i]
        };

        if (!context) {
          continue;
        }

        var dropdownMenu = context._menu;

        if (!$$$1(parent).hasClass(ClassName.SHOW)) {
          continue;
        }

        if (event && (event.type === 'click' && /input|textarea/i.test(event.target.tagName) || event.type === 'keyup' && event.which === TAB_KEYCODE) && $$$1.contains(parent, event.target)) {
          continue;
        }

        var hideEvent = $$$1.Event(Event.HIDE, relatedTarget);
        $$$1(parent).trigger(hideEvent);

        if (hideEvent.isDefaultPrevented()) {
          continue;
        } // if this is a touch-enabled device we remove the extra
        // empty mouseover listeners we added for iOS support


        if ('ontouchstart' in document.documentElement) {
          $$$1('body').children().off('mouseover', null, $$$1.noop);
        }

        toggles[i].setAttribute('aria-expanded', 'false');
        $$$1(dropdownMenu).removeClass(ClassName.SHOW);
        $$$1(parent).removeClass(ClassName.SHOW).trigger($$$1.Event(Event.HIDDEN, relatedTarget));
      }
    };

    Dropdown._getParentFromElement = function _getParentFromElement(element) {
      var parent;
      var selector = Util.getSelectorFromElement(element);

      if (selector) {
        parent = $$$1(selector)[0];
      }

      return parent || element.parentNode;
    };

    Dropdown._dataApiKeydownHandler = function _dataApiKeydownHandler(event) {
      // If not input/textarea:
      //  - And not a key in REGEXP_KEYDOWN => not a dropdown command
      // If input/textarea:
      //  - If space key => not a dropdown command
      //  - If key is other than escape
      //    - If key is not up or down => not a dropdown command
      //    - If trigger inside the menu => not a dropdown command
      if (/input|textarea/i.test(event.target.tagName) ? event.which === SPACE_KEYCODE || event.which !== ESCAPE_KEYCODE && (event.which !== ARROW_DOWN_KEYCODE && event.which !== ARROW_UP_KEYCODE || $$$1(event.target).closest(Selector.MENU).length) : !REGEXP_KEYDOWN.test(event.which)) {
        return;
      }

      event.preventDefault();
      event.stopPropagation();

      if (this.disabled || $$$1(this).hasClass(ClassName.DISABLED)) {
        return;
      }

      var parent = Dropdown._getParentFromElement(this);

      var isActive = $$$1(parent).hasClass(ClassName.SHOW);

      if (!isActive && (event.which !== ESCAPE_KEYCODE || event.which !== SPACE_KEYCODE) || isActive && (event.which === ESCAPE_KEYCODE || event.which === SPACE_KEYCODE)) {
        if (event.which === ESCAPE_KEYCODE) {
          var toggle = $$$1(parent).find(Selector.DATA_TOGGLE)[0];
          $$$1(toggle).trigger('focus');
        }

        $$$1(this).trigger('click');
        return;
      }

      var items = $$$1(parent).find(Selector.VISIBLE_ITEMS).get();

      if (!items.length) {
        return;
      }

      var index = items.indexOf(event.target);

      if (event.which === ARROW_UP_KEYCODE && index > 0) {
        // up
        index--;
      }

      if (event.which === ARROW_DOWN_KEYCODE && index < items.length - 1) {
        // down
        index++;
      }

      if (index < 0) {
        index = 0;
      }

      items[index].focus();
    };

    _createClass(Dropdown, null, [{
      key: "VERSION",
      get: function get() {
        return VERSION;
      }
    }, {
      key: "Default",
      get: function get() {
        return Default;
      }
    }, {
      key: "DefaultType",
      get: function get() {
        return DefaultType;
      }
    }]);
    return Dropdown;
  }();
  /**
   * ------------------------------------------------------------------------
   * Data Api implementation
   * ------------------------------------------------------------------------
   */


  $$$1(document).on(Event.KEYDOWN_DATA_API, Selector.DATA_TOGGLE, Dropdown._dataApiKeydownHandler).on(Event.KEYDOWN_DATA_API, Selector.MENU, Dropdown._dataApiKeydownHandler).on(Event.CLICK_DATA_API + " " + Event.KEYUP_DATA_API, Dropdown._clearMenus).on(Event.CLICK_DATA_API, Selector.DATA_TOGGLE, function (event) {
    event.preventDefault();
    event.stopPropagation();

    Dropdown._jQueryInterface.call($$$1(this), 'toggle');
  }).on(Event.CLICK_DATA_API, Selector.FORM_CHILD, function (e) {
    e.stopPropagation();
  });
  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   */

  $$$1.fn[NAME] = Dropdown._jQueryInterface;
  $$$1.fn[NAME].Constructor = Dropdown;

  $$$1.fn[NAME].noConflict = function () {
    $$$1.fn[NAME] = JQUERY_NO_CONFLICT;
    return Dropdown._jQueryInterface;
  };

  return Dropdown;
}($, Popper);

/**
 * --------------------------------------------------------------------------
 * Bootstrap (v4.0.0-beta.3): modal.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * --------------------------------------------------------------------------
 */

var Modal = function ($$$1) {
  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */
  var NAME = 'modal';
  var VERSION = '4.0.0-beta.3';
  var DATA_KEY = 'bs.modal';
  var EVENT_KEY = "." + DATA_KEY;
  var DATA_API_KEY = '.data-api';
  var JQUERY_NO_CONFLICT = $$$1.fn[NAME];
  var TRANSITION_DURATION = 300;
  var BACKDROP_TRANSITION_DURATION = 150;
  var ESCAPE_KEYCODE = 27; // KeyboardEvent.which value for Escape (Esc) key

  var Default = {
    backdrop: true,
    keyboard: true,
    focus: true,
    show: true
  };
  var DefaultType = {
    backdrop: '(boolean|string)',
    keyboard: 'boolean',
    focus: 'boolean',
    show: 'boolean'
  };
  var Event = {
    HIDE: "hide" + EVENT_KEY,
    HIDDEN: "hidden" + EVENT_KEY,
    SHOW: "show" + EVENT_KEY,
    SHOWN: "shown" + EVENT_KEY,
    FOCUSIN: "focusin" + EVENT_KEY,
    RESIZE: "resize" + EVENT_KEY,
    CLICK_DISMISS: "click.dismiss" + EVENT_KEY,
    KEYDOWN_DISMISS: "keydown.dismiss" + EVENT_KEY,
    MOUSEUP_DISMISS: "mouseup.dismiss" + EVENT_KEY,
    MOUSEDOWN_DISMISS: "mousedown.dismiss" + EVENT_KEY,
    CLICK_DATA_API: "click" + EVENT_KEY + DATA_API_KEY
  };
  var ClassName = {
    SCROLLBAR_MEASURER: 'modal-scrollbar-measure',
    BACKDROP: 'modal-backdrop',
    OPEN: 'modal-open',
    FADE: 'fade',
    SHOW: 'show'
  };
  var Selector = {
    DIALOG: '.modal-dialog',
    DATA_TOGGLE: '[data-toggle="modal"]',
    DATA_DISMISS: '[data-dismiss="modal"]',
    FIXED_CONTENT: '.fixed-top, .fixed-bottom, .is-fixed, .sticky-top',
    STICKY_CONTENT: '.sticky-top',
    NAVBAR_TOGGLER: '.navbar-toggler'
    /**
     * ------------------------------------------------------------------------
     * Class Definition
     * ------------------------------------------------------------------------
     */

  };

  var Modal =
  /*#__PURE__*/
  function () {
    function Modal(element, config) {
      this._config = this._getConfig(config);
      this._element = element;
      this._dialog = $$$1(element).find(Selector.DIALOG)[0];
      this._backdrop = null;
      this._isShown = false;
      this._isBodyOverflowing = false;
      this._ignoreBackdropClick = false;
      this._originalBodyPadding = 0;
      this._scrollbarWidth = 0;
    } // getters


    var _proto = Modal.prototype;

    // public
    _proto.toggle = function toggle(relatedTarget) {
      return this._isShown ? this.hide() : this.show(relatedTarget);
    };

    _proto.show = function show(relatedTarget) {
      var _this = this;

      if (this._isTransitioning || this._isShown) {
        return;
      }

      if (Util.supportsTransitionEnd() && $$$1(this._element).hasClass(ClassName.FADE)) {
        this._isTransitioning = true;
      }

      var showEvent = $$$1.Event(Event.SHOW, {
        relatedTarget: relatedTarget
      });
      $$$1(this._element).trigger(showEvent);

      if (this._isShown || showEvent.isDefaultPrevented()) {
        return;
      }

      this._isShown = true;

      this._checkScrollbar();

      this._setScrollbar();

      this._adjustDialog();

      $$$1(document.body).addClass(ClassName.OPEN);

      this._setEscapeEvent();

      this._setResizeEvent();

      $$$1(this._element).on(Event.CLICK_DISMISS, Selector.DATA_DISMISS, function (event) {
        return _this.hide(event);
      });
      $$$1(this._dialog).on(Event.MOUSEDOWN_DISMISS, function () {
        $$$1(_this._element).one(Event.MOUSEUP_DISMISS, function (event) {
          if ($$$1(event.target).is(_this._element)) {
            _this._ignoreBackdropClick = true;
          }
        });
      });

      this._showBackdrop(function () {
        return _this._showElement(relatedTarget);
      });
    };

    _proto.hide = function hide(event) {
      var _this2 = this;

      if (event) {
        event.preventDefault();
      }

      if (this._isTransitioning || !this._isShown) {
        return;
      }

      var hideEvent = $$$1.Event(Event.HIDE);
      $$$1(this._element).trigger(hideEvent);

      if (!this._isShown || hideEvent.isDefaultPrevented()) {
        return;
      }

      this._isShown = false;
      var transition = Util.supportsTransitionEnd() && $$$1(this._element).hasClass(ClassName.FADE);

      if (transition) {
        this._isTransitioning = true;
      }

      this._setEscapeEvent();

      this._setResizeEvent();

      $$$1(document).off(Event.FOCUSIN);
      $$$1(this._element).removeClass(ClassName.SHOW);
      $$$1(this._element).off(Event.CLICK_DISMISS);
      $$$1(this._dialog).off(Event.MOUSEDOWN_DISMISS);

      if (transition) {
        $$$1(this._element).one(Util.TRANSITION_END, function (event) {
          return _this2._hideModal(event);
        }).emulateTransitionEnd(TRANSITION_DURATION);
      } else {
        this._hideModal();
      }
    };

    _proto.dispose = function dispose() {
      $$$1.removeData(this._element, DATA_KEY);
      $$$1(window, document, this._element, this._backdrop).off(EVENT_KEY);
      this._config = null;
      this._element = null;
      this._dialog = null;
      this._backdrop = null;
      this._isShown = null;
      this._isBodyOverflowing = null;
      this._ignoreBackdropClick = null;
      this._scrollbarWidth = null;
    };

    _proto.handleUpdate = function handleUpdate() {
      this._adjustDialog();
    }; // private


    _proto._getConfig = function _getConfig(config) {
      config = _extends({}, Default, config);
      Util.typeCheckConfig(NAME, config, DefaultType);
      return config;
    };

    _proto._showElement = function _showElement(relatedTarget) {
      var _this3 = this;

      var transition = Util.supportsTransitionEnd() && $$$1(this._element).hasClass(ClassName.FADE);

      if (!this._element.parentNode || this._element.parentNode.nodeType !== Node.ELEMENT_NODE) {
        // don't move modals dom position
        document.body.appendChild(this._element);
      }

      this._element.style.display = 'block';

      this._element.removeAttribute('aria-hidden');

      this._element.scrollTop = 0;

      if (transition) {
        Util.reflow(this._element);
      }

      $$$1(this._element).addClass(ClassName.SHOW);

      if (this._config.focus) {
        this._enforceFocus();
      }

      var shownEvent = $$$1.Event(Event.SHOWN, {
        relatedTarget: relatedTarget
      });

      var transitionComplete = function transitionComplete() {
        if (_this3._config.focus) {
          _this3._element.focus();
        }

        _this3._isTransitioning = false;
        $$$1(_this3._element).trigger(shownEvent);
      };

      if (transition) {
        $$$1(this._dialog).one(Util.TRANSITION_END, transitionComplete).emulateTransitionEnd(TRANSITION_DURATION);
      } else {
        transitionComplete();
      }
    };

    _proto._enforceFocus = function _enforceFocus() {
      var _this4 = this;

      $$$1(document).off(Event.FOCUSIN) // guard against infinite focus loop
      .on(Event.FOCUSIN, function (event) {
        if (document !== event.target && _this4._element !== event.target && !$$$1(_this4._element).has(event.target).length) {
          _this4._element.focus();
        }
      });
    };

    _proto._setEscapeEvent = function _setEscapeEvent() {
      var _this5 = this;

      if (this._isShown && this._config.keyboard) {
        $$$1(this._element).on(Event.KEYDOWN_DISMISS, function (event) {
          if (event.which === ESCAPE_KEYCODE) {
            event.preventDefault();

            _this5.hide();
          }
        });
      } else if (!this._isShown) {
        $$$1(this._element).off(Event.KEYDOWN_DISMISS);
      }
    };

    _proto._setResizeEvent = function _setResizeEvent() {
      var _this6 = this;

      if (this._isShown) {
        $$$1(window).on(Event.RESIZE, function (event) {
          return _this6.handleUpdate(event);
        });
      } else {
        $$$1(window).off(Event.RESIZE);
      }
    };

    _proto._hideModal = function _hideModal() {
      var _this7 = this;

      this._element.style.display = 'none';

      this._element.setAttribute('aria-hidden', true);

      this._isTransitioning = false;

      this._showBackdrop(function () {
        $$$1(document.body).removeClass(ClassName.OPEN);

        _this7._resetAdjustments();

        _this7._resetScrollbar();

        $$$1(_this7._element).trigger(Event.HIDDEN);
      });
    };

    _proto._removeBackdrop = function _removeBackdrop() {
      if (this._backdrop) {
        $$$1(this._backdrop).remove();
        this._backdrop = null;
      }
    };

    _proto._showBackdrop = function _showBackdrop(callback) {
      var _this8 = this;

      var animate = $$$1(this._element).hasClass(ClassName.FADE) ? ClassName.FADE : '';

      if (this._isShown && this._config.backdrop) {
        var doAnimate = Util.supportsTransitionEnd() && animate;
        this._backdrop = document.createElement('div');
        this._backdrop.className = ClassName.BACKDROP;

        if (animate) {
          $$$1(this._backdrop).addClass(animate);
        }

        $$$1(this._backdrop).appendTo(document.body);
        $$$1(this._element).on(Event.CLICK_DISMISS, function (event) {
          if (_this8._ignoreBackdropClick) {
            _this8._ignoreBackdropClick = false;
            return;
          }

          if (event.target !== event.currentTarget) {
            return;
          }

          if (_this8._config.backdrop === 'static') {
            _this8._element.focus();
          } else {
            _this8.hide();
          }
        });

        if (doAnimate) {
          Util.reflow(this._backdrop);
        }

        $$$1(this._backdrop).addClass(ClassName.SHOW);

        if (!callback) {
          return;
        }

        if (!doAnimate) {
          callback();
          return;
        }

        $$$1(this._backdrop).one(Util.TRANSITION_END, callback).emulateTransitionEnd(BACKDROP_TRANSITION_DURATION);
      } else if (!this._isShown && this._backdrop) {
        $$$1(this._backdrop).removeClass(ClassName.SHOW);

        var callbackRemove = function callbackRemove() {
          _this8._removeBackdrop();

          if (callback) {
            callback();
          }
        };

        if (Util.supportsTransitionEnd() && $$$1(this._element).hasClass(ClassName.FADE)) {
          $$$1(this._backdrop).one(Util.TRANSITION_END, callbackRemove).emulateTransitionEnd(BACKDROP_TRANSITION_DURATION);
        } else {
          callbackRemove();
        }
      } else if (callback) {
        callback();
      }
    }; // ----------------------------------------------------------------------
    // the following methods are used to handle overflowing modals
    // todo (fat): these should probably be refactored out of modal.js
    // ----------------------------------------------------------------------


    _proto._adjustDialog = function _adjustDialog() {
      var isModalOverflowing = this._element.scrollHeight > document.documentElement.clientHeight;

      if (!this._isBodyOverflowing && isModalOverflowing) {
        this._element.style.paddingLeft = this._scrollbarWidth + "px";
      }

      if (this._isBodyOverflowing && !isModalOverflowing) {
        this._element.style.paddingRight = this._scrollbarWidth + "px";
      }
    };

    _proto._resetAdjustments = function _resetAdjustments() {
      this._element.style.paddingLeft = '';
      this._element.style.paddingRight = '';
    };

    _proto._checkScrollbar = function _checkScrollbar() {
      var rect = document.body.getBoundingClientRect();
      this._isBodyOverflowing = rect.left + rect.right < window.innerWidth;
      this._scrollbarWidth = this._getScrollbarWidth();
    };

    _proto._setScrollbar = function _setScrollbar() {
      var _this9 = this;

      if (this._isBodyOverflowing) {
        // Note: DOMNode.style.paddingRight returns the actual value or '' if not set
        //   while $(DOMNode).css('padding-right') returns the calculated value or 0 if not set
        // Adjust fixed content padding
        $$$1(Selector.FIXED_CONTENT).each(function (index, element) {
          var actualPadding = $$$1(element)[0].style.paddingRight;
          var calculatedPadding = $$$1(element).css('padding-right');
          $$$1(element).data('padding-right', actualPadding).css('padding-right', parseFloat(calculatedPadding) + _this9._scrollbarWidth + "px");
        }); // Adjust sticky content margin

        $$$1(Selector.STICKY_CONTENT).each(function (index, element) {
          var actualMargin = $$$1(element)[0].style.marginRight;
          var calculatedMargin = $$$1(element).css('margin-right');
          $$$1(element).data('margin-right', actualMargin).css('margin-right', parseFloat(calculatedMargin) - _this9._scrollbarWidth + "px");
        }); // Adjust navbar-toggler margin

        $$$1(Selector.NAVBAR_TOGGLER).each(function (index, element) {
          var actualMargin = $$$1(element)[0].style.marginRight;
          var calculatedMargin = $$$1(element).css('margin-right');
          $$$1(element).data('margin-right', actualMargin).css('margin-right', parseFloat(calculatedMargin) + _this9._scrollbarWidth + "px");
        }); // Adjust body padding

        var actualPadding = document.body.style.paddingRight;
        var calculatedPadding = $$$1('body').css('padding-right');
        $$$1('body').data('padding-right', actualPadding).css('padding-right', parseFloat(calculatedPadding) + this._scrollbarWidth + "px");
      }
    };

    _proto._resetScrollbar = function _resetScrollbar() {
      // Restore fixed content padding
      $$$1(Selector.FIXED_CONTENT).each(function (index, element) {
        var padding = $$$1(element).data('padding-right');

        if (typeof padding !== 'undefined') {
          $$$1(element).css('padding-right', padding).removeData('padding-right');
        }
      }); // Restore sticky content and navbar-toggler margin

      $$$1(Selector.STICKY_CONTENT + ", " + Selector.NAVBAR_TOGGLER).each(function (index, element) {
        var margin = $$$1(element).data('margin-right');

        if (typeof margin !== 'undefined') {
          $$$1(element).css('margin-right', margin).removeData('margin-right');
        }
      }); // Restore body padding

      var padding = $$$1('body').data('padding-right');

      if (typeof padding !== 'undefined') {
        $$$1('body').css('padding-right', padding).removeData('padding-right');
      }
    };

    _proto._getScrollbarWidth = function _getScrollbarWidth() {
      // thx d.walsh
      var scrollDiv = document.createElement('div');
      scrollDiv.className = ClassName.SCROLLBAR_MEASURER;
      document.body.appendChild(scrollDiv);
      var scrollbarWidth = scrollDiv.getBoundingClientRect().width - scrollDiv.clientWidth;
      document.body.removeChild(scrollDiv);
      return scrollbarWidth;
    }; // static


    Modal._jQueryInterface = function _jQueryInterface(config, relatedTarget) {
      return this.each(function () {
        var data = $$$1(this).data(DATA_KEY);

        var _config = _extends({}, Modal.Default, $$$1(this).data(), typeof config === 'object' && config);

        if (!data) {
          data = new Modal(this, _config);
          $$$1(this).data(DATA_KEY, data);
        }

        if (typeof config === 'string') {
          if (typeof data[config] === 'undefined') {
            throw new Error("No method named \"" + config + "\"");
          }

          data[config](relatedTarget);
        } else if (_config.show) {
          data.show(relatedTarget);
        }
      });
    };

    _createClass(Modal, null, [{
      key: "VERSION",
      get: function get() {
        return VERSION;
      }
    }, {
      key: "Default",
      get: function get() {
        return Default;
      }
    }]);
    return Modal;
  }();
  /**
   * ------------------------------------------------------------------------
   * Data Api implementation
   * ------------------------------------------------------------------------
   */


  $$$1(document).on(Event.CLICK_DATA_API, Selector.DATA_TOGGLE, function (event) {
    var _this10 = this;

    var target;
    var selector = Util.getSelectorFromElement(this);

    if (selector) {
      target = $$$1(selector)[0];
    }

    var config = $$$1(target).data(DATA_KEY) ? 'toggle' : _extends({}, $$$1(target).data(), $$$1(this).data());

    if (this.tagName === 'A' || this.tagName === 'AREA') {
      event.preventDefault();
    }

    var $target = $$$1(target).one(Event.SHOW, function (showEvent) {
      if (showEvent.isDefaultPrevented()) {
        // only register focus restorer if modal will actually get shown
        return;
      }

      $target.one(Event.HIDDEN, function () {
        if ($$$1(_this10).is(':visible')) {
          _this10.focus();
        }
      });
    });

    Modal._jQueryInterface.call($$$1(target), config, this);
  });
  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   */

  $$$1.fn[NAME] = Modal._jQueryInterface;
  $$$1.fn[NAME].Constructor = Modal;

  $$$1.fn[NAME].noConflict = function () {
    $$$1.fn[NAME] = JQUERY_NO_CONFLICT;
    return Modal._jQueryInterface;
  };

  return Modal;
}($);

/**
 * --------------------------------------------------------------------------
 * Bootstrap (v4.0.0-beta.3): tooltip.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * --------------------------------------------------------------------------
 */

var Tooltip = function ($$$1) {
  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */
  var NAME = 'tooltip';
  var VERSION = '4.0.0-beta.3';
  var DATA_KEY = 'bs.tooltip';
  var EVENT_KEY = "." + DATA_KEY;
  var JQUERY_NO_CONFLICT = $$$1.fn[NAME];
  var TRANSITION_DURATION = 150;
  var CLASS_PREFIX = 'bs-tooltip';
  var BSCLS_PREFIX_REGEX = new RegExp("(^|\\s)" + CLASS_PREFIX + "\\S+", 'g');
  var DefaultType = {
    animation: 'boolean',
    template: 'string',
    title: '(string|element|function)',
    trigger: 'string',
    delay: '(number|object)',
    html: 'boolean',
    selector: '(string|boolean)',
    placement: '(string|function)',
    offset: '(number|string)',
    container: '(string|element|boolean)',
    fallbackPlacement: '(string|array)',
    boundary: '(string|element)'
  };
  var AttachmentMap = {
    AUTO: 'auto',
    TOP: 'top',
    RIGHT: 'right',
    BOTTOM: 'bottom',
    LEFT: 'left'
  };
  var Default = {
    animation: true,
    template: '<div class="tooltip" role="tooltip">' + '<div class="arrow"></div>' + '<div class="tooltip-inner"></div></div>',
    trigger: 'hover focus',
    title: '',
    delay: 0,
    html: false,
    selector: false,
    placement: 'top',
    offset: 0,
    container: false,
    fallbackPlacement: 'flip',
    boundary: 'scrollParent'
  };
  var HoverState = {
    SHOW: 'show',
    OUT: 'out'
  };
  var Event = {
    HIDE: "hide" + EVENT_KEY,
    HIDDEN: "hidden" + EVENT_KEY,
    SHOW: "show" + EVENT_KEY,
    SHOWN: "shown" + EVENT_KEY,
    INSERTED: "inserted" + EVENT_KEY,
    CLICK: "click" + EVENT_KEY,
    FOCUSIN: "focusin" + EVENT_KEY,
    FOCUSOUT: "focusout" + EVENT_KEY,
    MOUSEENTER: "mouseenter" + EVENT_KEY,
    MOUSELEAVE: "mouseleave" + EVENT_KEY
  };
  var ClassName = {
    FADE: 'fade',
    SHOW: 'show'
  };
  var Selector = {
    TOOLTIP: '.tooltip',
    TOOLTIP_INNER: '.tooltip-inner',
    ARROW: '.arrow'
  };
  var Trigger = {
    HOVER: 'hover',
    FOCUS: 'focus',
    CLICK: 'click',
    MANUAL: 'manual'
    /**
     * ------------------------------------------------------------------------
     * Class Definition
     * ------------------------------------------------------------------------
     */

  };

  var Tooltip =
  /*#__PURE__*/
  function () {
    function Tooltip(element, config) {
      /**
       * Check for Popper dependency
       * Popper - https://popper.js.org
       */
      if (typeof Popper === 'undefined') {
        throw new Error('Bootstrap tooltips require Popper.js (https://popper.js.org)');
      } // private


      this._isEnabled = true;
      this._timeout = 0;
      this._hoverState = '';
      this._activeTrigger = {};
      this._popper = null; // protected

      this.element = element;
      this.config = this._getConfig(config);
      this.tip = null;

      this._setListeners();
    } // getters


    var _proto = Tooltip.prototype;

    // public
    _proto.enable = function enable() {
      this._isEnabled = true;
    };

    _proto.disable = function disable() {
      this._isEnabled = false;
    };

    _proto.toggleEnabled = function toggleEnabled() {
      this._isEnabled = !this._isEnabled;
    };

    _proto.toggle = function toggle(event) {
      if (!this._isEnabled) {
        return;
      }

      if (event) {
        var dataKey = this.constructor.DATA_KEY;
        var context = $$$1(event.currentTarget).data(dataKey);

        if (!context) {
          context = new this.constructor(event.currentTarget, this._getDelegateConfig());
          $$$1(event.currentTarget).data(dataKey, context);
        }

        context._activeTrigger.click = !context._activeTrigger.click;

        if (context._isWithActiveTrigger()) {
          context._enter(null, context);
        } else {
          context._leave(null, context);
        }
      } else {
        if ($$$1(this.getTipElement()).hasClass(ClassName.SHOW)) {
          this._leave(null, this);

          return;
        }

        this._enter(null, this);
      }
    };

    _proto.dispose = function dispose() {
      clearTimeout(this._timeout);
      $$$1.removeData(this.element, this.constructor.DATA_KEY);
      $$$1(this.element).off(this.constructor.EVENT_KEY);
      $$$1(this.element).closest('.modal').off('hide.bs.modal');

      if (this.tip) {
        $$$1(this.tip).remove();
      }

      this._isEnabled = null;
      this._timeout = null;
      this._hoverState = null;
      this._activeTrigger = null;

      if (this._popper !== null) {
        this._popper.destroy();
      }

      this._popper = null;
      this.element = null;
      this.config = null;
      this.tip = null;
    };

    _proto.show = function show() {
      var _this = this;

      if ($$$1(this.element).css('display') === 'none') {
        throw new Error('Please use show on visible elements');
      }

      var showEvent = $$$1.Event(this.constructor.Event.SHOW);

      if (this.isWithContent() && this._isEnabled) {
        $$$1(this.element).trigger(showEvent);
        var isInTheDom = $$$1.contains(this.element.ownerDocument.documentElement, this.element);

        if (showEvent.isDefaultPrevented() || !isInTheDom) {
          return;
        }

        var tip = this.getTipElement();
        var tipId = Util.getUID(this.constructor.NAME);
        tip.setAttribute('id', tipId);
        this.element.setAttribute('aria-describedby', tipId);
        this.setContent();

        if (this.config.animation) {
          $$$1(tip).addClass(ClassName.FADE);
        }

        var placement = typeof this.config.placement === 'function' ? this.config.placement.call(this, tip, this.element) : this.config.placement;

        var attachment = this._getAttachment(placement);

        this.addAttachmentClass(attachment);
        var container = this.config.container === false ? document.body : $$$1(this.config.container);
        $$$1(tip).data(this.constructor.DATA_KEY, this);

        if (!$$$1.contains(this.element.ownerDocument.documentElement, this.tip)) {
          $$$1(tip).appendTo(container);
        }

        $$$1(this.element).trigger(this.constructor.Event.INSERTED);
        this._popper = new Popper(this.element, tip, {
          placement: attachment,
          modifiers: {
            offset: {
              offset: this.config.offset
            },
            flip: {
              behavior: this.config.fallbackPlacement
            },
            arrow: {
              element: Selector.ARROW
            },
            preventOverflow: {
              boundariesElement: this.config.boundary
            }
          },
          onCreate: function onCreate(data) {
            if (data.originalPlacement !== data.placement) {
              _this._handlePopperPlacementChange(data);
            }
          },
          onUpdate: function onUpdate(data) {
            _this._handlePopperPlacementChange(data);
          }
        });
        $$$1(tip).addClass(ClassName.SHOW); // if this is a touch-enabled device we add extra
        // empty mouseover listeners to the body's immediate children;
        // only needed because of broken event delegation on iOS
        // https://www.quirksmode.org/blog/archives/2014/02/mouse_event_bub.html

        if ('ontouchstart' in document.documentElement) {
          $$$1('body').children().on('mouseover', null, $$$1.noop);
        }

        var complete = function complete() {
          if (_this.config.animation) {
            _this._fixTransition();
          }

          var prevHoverState = _this._hoverState;
          _this._hoverState = null;
          $$$1(_this.element).trigger(_this.constructor.Event.SHOWN);

          if (prevHoverState === HoverState.OUT) {
            _this._leave(null, _this);
          }
        };

        if (Util.supportsTransitionEnd() && $$$1(this.tip).hasClass(ClassName.FADE)) {
          $$$1(this.tip).one(Util.TRANSITION_END, complete).emulateTransitionEnd(Tooltip._TRANSITION_DURATION);
        } else {
          complete();
        }
      }
    };

    _proto.hide = function hide(callback) {
      var _this2 = this;

      var tip = this.getTipElement();
      var hideEvent = $$$1.Event(this.constructor.Event.HIDE);

      var complete = function complete() {
        if (_this2._hoverState !== HoverState.SHOW && tip.parentNode) {
          tip.parentNode.removeChild(tip);
        }

        _this2._cleanTipClass();

        _this2.element.removeAttribute('aria-describedby');

        $$$1(_this2.element).trigger(_this2.constructor.Event.HIDDEN);

        if (_this2._popper !== null) {
          _this2._popper.destroy();
        }

        if (callback) {
          callback();
        }
      };

      $$$1(this.element).trigger(hideEvent);

      if (hideEvent.isDefaultPrevented()) {
        return;
      }

      $$$1(tip).removeClass(ClassName.SHOW); // if this is a touch-enabled device we remove the extra
      // empty mouseover listeners we added for iOS support

      if ('ontouchstart' in document.documentElement) {
        $$$1('body').children().off('mouseover', null, $$$1.noop);
      }

      this._activeTrigger[Trigger.CLICK] = false;
      this._activeTrigger[Trigger.FOCUS] = false;
      this._activeTrigger[Trigger.HOVER] = false;

      if (Util.supportsTransitionEnd() && $$$1(this.tip).hasClass(ClassName.FADE)) {
        $$$1(tip).one(Util.TRANSITION_END, complete).emulateTransitionEnd(TRANSITION_DURATION);
      } else {
        complete();
      }

      this._hoverState = '';
    };

    _proto.update = function update() {
      if (this._popper !== null) {
        this._popper.scheduleUpdate();
      }
    }; // protected


    _proto.isWithContent = function isWithContent() {
      return Boolean(this.getTitle());
    };

    _proto.addAttachmentClass = function addAttachmentClass(attachment) {
      $$$1(this.getTipElement()).addClass(CLASS_PREFIX + "-" + attachment);
    };

    _proto.getTipElement = function getTipElement() {
      this.tip = this.tip || $$$1(this.config.template)[0];
      return this.tip;
    };

    _proto.setContent = function setContent() {
      var $tip = $$$1(this.getTipElement());
      this.setElementContent($tip.find(Selector.TOOLTIP_INNER), this.getTitle());
      $tip.removeClass(ClassName.FADE + " " + ClassName.SHOW);
    };

    _proto.setElementContent = function setElementContent($element, content) {
      var html = this.config.html;

      if (typeof content === 'object' && (content.nodeType || content.jquery)) {
        // content is a DOM node or a jQuery
        if (html) {
          if (!$$$1(content).parent().is($element)) {
            $element.empty().append(content);
          }
        } else {
          $element.text($$$1(content).text());
        }
      } else {
        $element[html ? 'html' : 'text'](content);
      }
    };

    _proto.getTitle = function getTitle() {
      var title = this.element.getAttribute('data-original-title');

      if (!title) {
        title = typeof this.config.title === 'function' ? this.config.title.call(this.element) : this.config.title;
      }

      return title;
    }; // private


    _proto._getAttachment = function _getAttachment(placement) {
      return AttachmentMap[placement.toUpperCase()];
    };

    _proto._setListeners = function _setListeners() {
      var _this3 = this;

      var triggers = this.config.trigger.split(' ');
      triggers.forEach(function (trigger) {
        if (trigger === 'click') {
          $$$1(_this3.element).on(_this3.constructor.Event.CLICK, _this3.config.selector, function (event) {
            return _this3.toggle(event);
          });
        } else if (trigger !== Trigger.MANUAL) {
          var eventIn = trigger === Trigger.HOVER ? _this3.constructor.Event.MOUSEENTER : _this3.constructor.Event.FOCUSIN;
          var eventOut = trigger === Trigger.HOVER ? _this3.constructor.Event.MOUSELEAVE : _this3.constructor.Event.FOCUSOUT;
          $$$1(_this3.element).on(eventIn, _this3.config.selector, function (event) {
            return _this3._enter(event);
          }).on(eventOut, _this3.config.selector, function (event) {
            return _this3._leave(event);
          });
        }

        $$$1(_this3.element).closest('.modal').on('hide.bs.modal', function () {
          return _this3.hide();
        });
      });

      if (this.config.selector) {
        this.config = _extends({}, this.config, {
          trigger: 'manual',
          selector: ''
        });
      } else {
        this._fixTitle();
      }
    };

    _proto._fixTitle = function _fixTitle() {
      var titleType = typeof this.element.getAttribute('data-original-title');

      if (this.element.getAttribute('title') || titleType !== 'string') {
        this.element.setAttribute('data-original-title', this.element.getAttribute('title') || '');
        this.element.setAttribute('title', '');
      }
    };

    _proto._enter = function _enter(event, context) {
      var dataKey = this.constructor.DATA_KEY;
      context = context || $$$1(event.currentTarget).data(dataKey);

      if (!context) {
        context = new this.constructor(event.currentTarget, this._getDelegateConfig());
        $$$1(event.currentTarget).data(dataKey, context);
      }

      if (event) {
        context._activeTrigger[event.type === 'focusin' ? Trigger.FOCUS : Trigger.HOVER] = true;
      }

      if ($$$1(context.getTipElement()).hasClass(ClassName.SHOW) || context._hoverState === HoverState.SHOW) {
        context._hoverState = HoverState.SHOW;
        return;
      }

      clearTimeout(context._timeout);
      context._hoverState = HoverState.SHOW;

      if (!context.config.delay || !context.config.delay.show) {
        context.show();
        return;
      }

      context._timeout = setTimeout(function () {
        if (context._hoverState === HoverState.SHOW) {
          context.show();
        }
      }, context.config.delay.show);
    };

    _proto._leave = function _leave(event, context) {
      var dataKey = this.constructor.DATA_KEY;
      context = context || $$$1(event.currentTarget).data(dataKey);

      if (!context) {
        context = new this.constructor(event.currentTarget, this._getDelegateConfig());
        $$$1(event.currentTarget).data(dataKey, context);
      }

      if (event) {
        context._activeTrigger[event.type === 'focusout' ? Trigger.FOCUS : Trigger.HOVER] = false;
      }

      if (context._isWithActiveTrigger()) {
        return;
      }

      clearTimeout(context._timeout);
      context._hoverState = HoverState.OUT;

      if (!context.config.delay || !context.config.delay.hide) {
        context.hide();
        return;
      }

      context._timeout = setTimeout(function () {
        if (context._hoverState === HoverState.OUT) {
          context.hide();
        }
      }, context.config.delay.hide);
    };

    _proto._isWithActiveTrigger = function _isWithActiveTrigger() {
      for (var trigger in this._activeTrigger) {
        if (this._activeTrigger[trigger]) {
          return true;
        }
      }

      return false;
    };

    _proto._getConfig = function _getConfig(config) {
      config = _extends({}, this.constructor.Default, $$$1(this.element).data(), config);

      if (typeof config.delay === 'number') {
        config.delay = {
          show: config.delay,
          hide: config.delay
        };
      }

      if (typeof config.title === 'number') {
        config.title = config.title.toString();
      }

      if (typeof config.content === 'number') {
        config.content = config.content.toString();
      }

      Util.typeCheckConfig(NAME, config, this.constructor.DefaultType);
      return config;
    };

    _proto._getDelegateConfig = function _getDelegateConfig() {
      var config = {};

      if (this.config) {
        for (var key in this.config) {
          if (this.constructor.Default[key] !== this.config[key]) {
            config[key] = this.config[key];
          }
        }
      }

      return config;
    };

    _proto._cleanTipClass = function _cleanTipClass() {
      var $tip = $$$1(this.getTipElement());
      var tabClass = $tip.attr('class').match(BSCLS_PREFIX_REGEX);

      if (tabClass !== null && tabClass.length > 0) {
        $tip.removeClass(tabClass.join(''));
      }
    };

    _proto._handlePopperPlacementChange = function _handlePopperPlacementChange(data) {
      this._cleanTipClass();

      this.addAttachmentClass(this._getAttachment(data.placement));
    };

    _proto._fixTransition = function _fixTransition() {
      var tip = this.getTipElement();
      var initConfigAnimation = this.config.animation;

      if (tip.getAttribute('x-placement') !== null) {
        return;
      }

      $$$1(tip).removeClass(ClassName.FADE);
      this.config.animation = false;
      this.hide();
      this.show();
      this.config.animation = initConfigAnimation;
    }; // static


    Tooltip._jQueryInterface = function _jQueryInterface(config) {
      return this.each(function () {
        var data = $$$1(this).data(DATA_KEY);

        var _config = typeof config === 'object' && config;

        if (!data && /dispose|hide/.test(config)) {
          return;
        }

        if (!data) {
          data = new Tooltip(this, _config);
          $$$1(this).data(DATA_KEY, data);
        }

        if (typeof config === 'string') {
          if (typeof data[config] === 'undefined') {
            throw new Error("No method named \"" + config + "\"");
          }

          data[config]();
        }
      });
    };

    _createClass(Tooltip, null, [{
      key: "VERSION",
      get: function get() {
        return VERSION;
      }
    }, {
      key: "Default",
      get: function get() {
        return Default;
      }
    }, {
      key: "NAME",
      get: function get() {
        return NAME;
      }
    }, {
      key: "DATA_KEY",
      get: function get() {
        return DATA_KEY;
      }
    }, {
      key: "Event",
      get: function get() {
        return Event;
      }
    }, {
      key: "EVENT_KEY",
      get: function get() {
        return EVENT_KEY;
      }
    }, {
      key: "DefaultType",
      get: function get() {
        return DefaultType;
      }
    }]);
    return Tooltip;
  }();
  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   */


  $$$1.fn[NAME] = Tooltip._jQueryInterface;
  $$$1.fn[NAME].Constructor = Tooltip;

  $$$1.fn[NAME].noConflict = function () {
    $$$1.fn[NAME] = JQUERY_NO_CONFLICT;
    return Tooltip._jQueryInterface;
  };

  return Tooltip;
}($, Popper);

/**
 * --------------------------------------------------------------------------
 * Bootstrap (v4.0.0-beta.3): popover.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * --------------------------------------------------------------------------
 */

var Popover = function ($$$1) {
  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */
  var NAME = 'popover';
  var VERSION = '4.0.0-beta.3';
  var DATA_KEY = 'bs.popover';
  var EVENT_KEY = "." + DATA_KEY;
  var JQUERY_NO_CONFLICT = $$$1.fn[NAME];
  var CLASS_PREFIX = 'bs-popover';
  var BSCLS_PREFIX_REGEX = new RegExp("(^|\\s)" + CLASS_PREFIX + "\\S+", 'g');
  var Default = _extends({}, Tooltip.Default, {
    placement: 'right',
    trigger: 'click',
    content: '',
    template: '<div class="popover" role="tooltip">' + '<div class="arrow"></div>' + '<h3 class="popover-header"></h3>' + '<div class="popover-body"></div></div>'
  });
  var DefaultType = _extends({}, Tooltip.DefaultType, {
    content: '(string|element|function)'
  });
  var ClassName = {
    FADE: 'fade',
    SHOW: 'show'
  };
  var Selector = {
    TITLE: '.popover-header',
    CONTENT: '.popover-body'
  };
  var Event = {
    HIDE: "hide" + EVENT_KEY,
    HIDDEN: "hidden" + EVENT_KEY,
    SHOW: "show" + EVENT_KEY,
    SHOWN: "shown" + EVENT_KEY,
    INSERTED: "inserted" + EVENT_KEY,
    CLICK: "click" + EVENT_KEY,
    FOCUSIN: "focusin" + EVENT_KEY,
    FOCUSOUT: "focusout" + EVENT_KEY,
    MOUSEENTER: "mouseenter" + EVENT_KEY,
    MOUSELEAVE: "mouseleave" + EVENT_KEY
    /**
     * ------------------------------------------------------------------------
     * Class Definition
     * ------------------------------------------------------------------------
     */

  };

  var Popover =
  /*#__PURE__*/
  function (_Tooltip) {
    _inheritsLoose(Popover, _Tooltip);

    function Popover() {
      return _Tooltip.apply(this, arguments) || this;
    }

    var _proto = Popover.prototype;

    // overrides
    _proto.isWithContent = function isWithContent() {
      return this.getTitle() || this._getContent();
    };

    _proto.addAttachmentClass = function addAttachmentClass(attachment) {
      $$$1(this.getTipElement()).addClass(CLASS_PREFIX + "-" + attachment);
    };

    _proto.getTipElement = function getTipElement() {
      this.tip = this.tip || $$$1(this.config.template)[0];
      return this.tip;
    };

    _proto.setContent = function setContent() {
      var $tip = $$$1(this.getTipElement()); // we use append for html objects to maintain js events

      this.setElementContent($tip.find(Selector.TITLE), this.getTitle());

      var content = this._getContent();

      if (typeof content === 'function') {
        content = content.call(this.element);
      }

      this.setElementContent($tip.find(Selector.CONTENT), content);
      $tip.removeClass(ClassName.FADE + " " + ClassName.SHOW);
    }; // private


    _proto._getContent = function _getContent() {
      return this.element.getAttribute('data-content') || this.config.content;
    };

    _proto._cleanTipClass = function _cleanTipClass() {
      var $tip = $$$1(this.getTipElement());
      var tabClass = $tip.attr('class').match(BSCLS_PREFIX_REGEX);

      if (tabClass !== null && tabClass.length > 0) {
        $tip.removeClass(tabClass.join(''));
      }
    }; // static


    Popover._jQueryInterface = function _jQueryInterface(config) {
      return this.each(function () {
        var data = $$$1(this).data(DATA_KEY);

        var _config = typeof config === 'object' ? config : null;

        if (!data && /destroy|hide/.test(config)) {
          return;
        }

        if (!data) {
          data = new Popover(this, _config);
          $$$1(this).data(DATA_KEY, data);
        }

        if (typeof config === 'string') {
          if (typeof data[config] === 'undefined') {
            throw new Error("No method named \"" + config + "\"");
          }

          data[config]();
        }
      });
    };

    _createClass(Popover, null, [{
      key: "VERSION",
      // getters
      get: function get() {
        return VERSION;
      }
    }, {
      key: "Default",
      get: function get() {
        return Default;
      }
    }, {
      key: "NAME",
      get: function get() {
        return NAME;
      }
    }, {
      key: "DATA_KEY",
      get: function get() {
        return DATA_KEY;
      }
    }, {
      key: "Event",
      get: function get() {
        return Event;
      }
    }, {
      key: "EVENT_KEY",
      get: function get() {
        return EVENT_KEY;
      }
    }, {
      key: "DefaultType",
      get: function get() {
        return DefaultType;
      }
    }]);
    return Popover;
  }(Tooltip);
  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   */


  $$$1.fn[NAME] = Popover._jQueryInterface;
  $$$1.fn[NAME].Constructor = Popover;

  $$$1.fn[NAME].noConflict = function () {
    $$$1.fn[NAME] = JQUERY_NO_CONFLICT;
    return Popover._jQueryInterface;
  };

  return Popover;
}($);

/**
 * --------------------------------------------------------------------------
 * Bootstrap (v4.0.0-beta.3): scrollspy.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * --------------------------------------------------------------------------
 */

var ScrollSpy = function ($$$1) {
  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */
  var NAME = 'scrollspy';
  var VERSION = '4.0.0-beta.3';
  var DATA_KEY = 'bs.scrollspy';
  var EVENT_KEY = "." + DATA_KEY;
  var DATA_API_KEY = '.data-api';
  var JQUERY_NO_CONFLICT = $$$1.fn[NAME];
  var Default = {
    offset: 10,
    method: 'auto',
    target: ''
  };
  var DefaultType = {
    offset: 'number',
    method: 'string',
    target: '(string|element)'
  };
  var Event = {
    ACTIVATE: "activate" + EVENT_KEY,
    SCROLL: "scroll" + EVENT_KEY,
    LOAD_DATA_API: "load" + EVENT_KEY + DATA_API_KEY
  };
  var ClassName = {
    DROPDOWN_ITEM: 'dropdown-item',
    DROPDOWN_MENU: 'dropdown-menu',
    ACTIVE: 'active'
  };
  var Selector = {
    DATA_SPY: '[data-spy="scroll"]',
    ACTIVE: '.active',
    NAV_LIST_GROUP: '.nav, .list-group',
    NAV_LINKS: '.nav-link',
    NAV_ITEMS: '.nav-item',
    LIST_ITEMS: '.list-group-item',
    DROPDOWN: '.dropdown',
    DROPDOWN_ITEMS: '.dropdown-item',
    DROPDOWN_TOGGLE: '.dropdown-toggle'
  };
  var OffsetMethod = {
    OFFSET: 'offset',
    POSITION: 'position'
    /**
     * ------------------------------------------------------------------------
     * Class Definition
     * ------------------------------------------------------------------------
     */

  };

  var ScrollSpy =
  /*#__PURE__*/
  function () {
    function ScrollSpy(element, config) {
      var _this = this;

      this._element = element;
      this._scrollElement = element.tagName === 'BODY' ? window : element;
      this._config = this._getConfig(config);
      this._selector = this._config.target + " " + Selector.NAV_LINKS + "," + (this._config.target + " " + Selector.LIST_ITEMS + ",") + (this._config.target + " " + Selector.DROPDOWN_ITEMS);
      this._offsets = [];
      this._targets = [];
      this._activeTarget = null;
      this._scrollHeight = 0;
      $$$1(this._scrollElement).on(Event.SCROLL, function (event) {
        return _this._process(event);
      });
      this.refresh();

      this._process();
    } // getters


    var _proto = ScrollSpy.prototype;

    // public
    _proto.refresh = function refresh() {
      var _this2 = this;

      var autoMethod = this._scrollElement !== this._scrollElement.window ? OffsetMethod.POSITION : OffsetMethod.OFFSET;
      var offsetMethod = this._config.method === 'auto' ? autoMethod : this._config.method;
      var offsetBase = offsetMethod === OffsetMethod.POSITION ? this._getScrollTop() : 0;
      this._offsets = [];
      this._targets = [];
      this._scrollHeight = this._getScrollHeight();
      var targets = $$$1.makeArray($$$1(this._selector));
      targets.map(function (element) {
        var target;
        var targetSelector = Util.getSelectorFromElement(element);

        if (targetSelector) {
          target = $$$1(targetSelector)[0];
        }

        if (target) {
          var targetBCR = target.getBoundingClientRect();

          if (targetBCR.width || targetBCR.height) {
            // todo (fat): remove sketch reliance on jQuery position/offset
            return [$$$1(target)[offsetMethod]().top + offsetBase, targetSelector];
          }
        }

        return null;
      }).filter(function (item) {
        return item;
      }).sort(function (a, b) {
        return a[0] - b[0];
      }).forEach(function (item) {
        _this2._offsets.push(item[0]);

        _this2._targets.push(item[1]);
      });
    };

    _proto.dispose = function dispose() {
      $$$1.removeData(this._element, DATA_KEY);
      $$$1(this._scrollElement).off(EVENT_KEY);
      this._element = null;
      this._scrollElement = null;
      this._config = null;
      this._selector = null;
      this._offsets = null;
      this._targets = null;
      this._activeTarget = null;
      this._scrollHeight = null;
    }; // private


    _proto._getConfig = function _getConfig(config) {
      config = _extends({}, Default, config);

      if (typeof config.target !== 'string') {
        var id = $$$1(config.target).attr('id');

        if (!id) {
          id = Util.getUID(NAME);
          $$$1(config.target).attr('id', id);
        }

        config.target = "#" + id;
      }

      Util.typeCheckConfig(NAME, config, DefaultType);
      return config;
    };

    _proto._getScrollTop = function _getScrollTop() {
      return this._scrollElement === window ? this._scrollElement.pageYOffset : this._scrollElement.scrollTop;
    };

    _proto._getScrollHeight = function _getScrollHeight() {
      return this._scrollElement.scrollHeight || Math.max(document.body.scrollHeight, document.documentElement.scrollHeight);
    };

    _proto._getOffsetHeight = function _getOffsetHeight() {
      return this._scrollElement === window ? window.innerHeight : this._scrollElement.getBoundingClientRect().height;
    };

    _proto._process = function _process() {
      var scrollTop = this._getScrollTop() + this._config.offset;

      var scrollHeight = this._getScrollHeight();

      var maxScroll = this._config.offset + scrollHeight - this._getOffsetHeight();

      if (this._scrollHeight !== scrollHeight) {
        this.refresh();
      }

      if (scrollTop >= maxScroll) {
        var target = this._targets[this._targets.length - 1];

        if (this._activeTarget !== target) {
          this._activate(target);
        }

        return;
      }

      if (this._activeTarget && scrollTop < this._offsets[0] && this._offsets[0] > 0) {
        this._activeTarget = null;

        this._clear();

        return;
      }

      for (var i = this._offsets.length; i--;) {
        var isActiveTarget = this._activeTarget !== this._targets[i] && scrollTop >= this._offsets[i] && (typeof this._offsets[i + 1] === 'undefined' || scrollTop < this._offsets[i + 1]);

        if (isActiveTarget) {
          this._activate(this._targets[i]);
        }
      }
    };

    _proto._activate = function _activate(target) {
      this._activeTarget = target;

      this._clear();

      var queries = this._selector.split(','); // eslint-disable-next-line arrow-body-style


      queries = queries.map(function (selector) {
        return selector + "[data-target=\"" + target + "\"]," + (selector + "[href=\"" + target + "\"]");
      });
      var $link = $$$1(queries.join(','));

      if ($link.hasClass(ClassName.DROPDOWN_ITEM)) {
        $link.closest(Selector.DROPDOWN).find(Selector.DROPDOWN_TOGGLE).addClass(ClassName.ACTIVE);
        $link.addClass(ClassName.ACTIVE);
      } else {
        // Set triggered link as active
        $link.addClass(ClassName.ACTIVE); // Set triggered links parents as active
        // With both <ul> and <nav> markup a parent is the previous sibling of any nav ancestor

        $link.parents(Selector.NAV_LIST_GROUP).prev(Selector.NAV_LINKS + ", " + Selector.LIST_ITEMS).addClass(ClassName.ACTIVE); // Handle special case when .nav-link is inside .nav-item

        $link.parents(Selector.NAV_LIST_GROUP).prev(Selector.NAV_ITEMS).children(Selector.NAV_LINKS).addClass(ClassName.ACTIVE);
      }

      $$$1(this._scrollElement).trigger(Event.ACTIVATE, {
        relatedTarget: target
      });
    };

    _proto._clear = function _clear() {
      $$$1(this._selector).filter(Selector.ACTIVE).removeClass(ClassName.ACTIVE);
    }; // static


    ScrollSpy._jQueryInterface = function _jQueryInterface(config) {
      return this.each(function () {
        var data = $$$1(this).data(DATA_KEY);

        var _config = typeof config === 'object' && config;

        if (!data) {
          data = new ScrollSpy(this, _config);
          $$$1(this).data(DATA_KEY, data);
        }

        if (typeof config === 'string') {
          if (typeof data[config] === 'undefined') {
            throw new Error("No method named \"" + config + "\"");
          }

          data[config]();
        }
      });
    };

    _createClass(ScrollSpy, null, [{
      key: "VERSION",
      get: function get() {
        return VERSION;
      }
    }, {
      key: "Default",
      get: function get() {
        return Default;
      }
    }]);
    return ScrollSpy;
  }();
  /**
   * ------------------------------------------------------------------------
   * Data Api implementation
   * ------------------------------------------------------------------------
   */


  $$$1(window).on(Event.LOAD_DATA_API, function () {
    var scrollSpys = $$$1.makeArray($$$1(Selector.DATA_SPY));

    for (var i = scrollSpys.length; i--;) {
      var $spy = $$$1(scrollSpys[i]);

      ScrollSpy._jQueryInterface.call($spy, $spy.data());
    }
  });
  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   */

  $$$1.fn[NAME] = ScrollSpy._jQueryInterface;
  $$$1.fn[NAME].Constructor = ScrollSpy;

  $$$1.fn[NAME].noConflict = function () {
    $$$1.fn[NAME] = JQUERY_NO_CONFLICT;
    return ScrollSpy._jQueryInterface;
  };

  return ScrollSpy;
}($);

/**
 * --------------------------------------------------------------------------
 * Bootstrap (v4.0.0-beta.3): tab.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * --------------------------------------------------------------------------
 */

var Tab = function ($$$1) {
  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */
  var NAME = 'tab';
  var VERSION = '4.0.0-beta.3';
  var DATA_KEY = 'bs.tab';
  var EVENT_KEY = "." + DATA_KEY;
  var DATA_API_KEY = '.data-api';
  var JQUERY_NO_CONFLICT = $$$1.fn[NAME];
  var TRANSITION_DURATION = 150;
  var Event = {
    HIDE: "hide" + EVENT_KEY,
    HIDDEN: "hidden" + EVENT_KEY,
    SHOW: "show" + EVENT_KEY,
    SHOWN: "shown" + EVENT_KEY,
    CLICK_DATA_API: "click" + EVENT_KEY + DATA_API_KEY
  };
  var ClassName = {
    DROPDOWN_MENU: 'dropdown-menu',
    ACTIVE: 'active',
    DISABLED: 'disabled',
    FADE: 'fade',
    SHOW: 'show'
  };
  var Selector = {
    DROPDOWN: '.dropdown',
    NAV_LIST_GROUP: '.nav, .list-group',
    ACTIVE: '.active',
    ACTIVE_UL: '> li > .active',
    DATA_TOGGLE: '[data-toggle="tab"], [data-toggle="pill"], [data-toggle="list"]',
    DROPDOWN_TOGGLE: '.dropdown-toggle',
    DROPDOWN_ACTIVE_CHILD: '> .dropdown-menu .active'
    /**
     * ------------------------------------------------------------------------
     * Class Definition
     * ------------------------------------------------------------------------
     */

  };

  var Tab =
  /*#__PURE__*/
  function () {
    function Tab(element) {
      this._element = element;
    } // getters


    var _proto = Tab.prototype;

    // public
    _proto.show = function show() {
      var _this = this;

      if (this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE && $$$1(this._element).hasClass(ClassName.ACTIVE) || $$$1(this._element).hasClass(ClassName.DISABLED)) {
        return;
      }

      var target;
      var previous;
      var listElement = $$$1(this._element).closest(Selector.NAV_LIST_GROUP)[0];
      var selector = Util.getSelectorFromElement(this._element);

      if (listElement) {
        var itemSelector = listElement.nodeName === 'UL' ? Selector.ACTIVE_UL : Selector.ACTIVE;
        previous = $$$1.makeArray($$$1(listElement).find(itemSelector));
        previous = previous[previous.length - 1];
      }

      var hideEvent = $$$1.Event(Event.HIDE, {
        relatedTarget: this._element
      });
      var showEvent = $$$1.Event(Event.SHOW, {
        relatedTarget: previous
      });

      if (previous) {
        $$$1(previous).trigger(hideEvent);
      }

      $$$1(this._element).trigger(showEvent);

      if (showEvent.isDefaultPrevented() || hideEvent.isDefaultPrevented()) {
        return;
      }

      if (selector) {
        target = $$$1(selector)[0];
      }

      this._activate(this._element, listElement);

      var complete = function complete() {
        var hiddenEvent = $$$1.Event(Event.HIDDEN, {
          relatedTarget: _this._element
        });
        var shownEvent = $$$1.Event(Event.SHOWN, {
          relatedTarget: previous
        });
        $$$1(previous).trigger(hiddenEvent);
        $$$1(_this._element).trigger(shownEvent);
      };

      if (target) {
        this._activate(target, target.parentNode, complete);
      } else {
        complete();
      }
    };

    _proto.dispose = function dispose() {
      $$$1.removeData(this._element, DATA_KEY);
      this._element = null;
    }; // private


    _proto._activate = function _activate(element, container, callback) {
      var _this2 = this;

      var activeElements;

      if (container.nodeName === 'UL') {
        activeElements = $$$1(container).find(Selector.ACTIVE_UL);
      } else {
        activeElements = $$$1(container).children(Selector.ACTIVE);
      }

      var active = activeElements[0];
      var isTransitioning = callback && Util.supportsTransitionEnd() && active && $$$1(active).hasClass(ClassName.FADE);

      var complete = function complete() {
        return _this2._transitionComplete(element, active, callback);
      };

      if (active && isTransitioning) {
        $$$1(active).one(Util.TRANSITION_END, complete).emulateTransitionEnd(TRANSITION_DURATION);
      } else {
        complete();
      }
    };

    _proto._transitionComplete = function _transitionComplete(element, active, callback) {
      if (active) {
        $$$1(active).removeClass(ClassName.SHOW + " " + ClassName.ACTIVE);
        var dropdownChild = $$$1(active.parentNode).find(Selector.DROPDOWN_ACTIVE_CHILD)[0];

        if (dropdownChild) {
          $$$1(dropdownChild).removeClass(ClassName.ACTIVE);
        }

        if (active.getAttribute('role') === 'tab') {
          active.setAttribute('aria-selected', false);
        }
      }

      $$$1(element).addClass(ClassName.ACTIVE);

      if (element.getAttribute('role') === 'tab') {
        element.setAttribute('aria-selected', true);
      }

      Util.reflow(element);
      $$$1(element).addClass(ClassName.SHOW);

      if (element.parentNode && $$$1(element.parentNode).hasClass(ClassName.DROPDOWN_MENU)) {
        var dropdownElement = $$$1(element).closest(Selector.DROPDOWN)[0];

        if (dropdownElement) {
          $$$1(dropdownElement).find(Selector.DROPDOWN_TOGGLE).addClass(ClassName.ACTIVE);
        }

        element.setAttribute('aria-expanded', true);
      }

      if (callback) {
        callback();
      }
    }; // static


    Tab._jQueryInterface = function _jQueryInterface(config) {
      return this.each(function () {
        var $this = $$$1(this);
        var data = $this.data(DATA_KEY);

        if (!data) {
          data = new Tab(this);
          $this.data(DATA_KEY, data);
        }

        if (typeof config === 'string') {
          if (typeof data[config] === 'undefined') {
            throw new Error("No method named \"" + config + "\"");
          }

          data[config]();
        }
      });
    };

    _createClass(Tab, null, [{
      key: "VERSION",
      get: function get() {
        return VERSION;
      }
    }]);
    return Tab;
  }();
  /**
   * ------------------------------------------------------------------------
   * Data Api implementation
   * ------------------------------------------------------------------------
   */


  $$$1(document).on(Event.CLICK_DATA_API, Selector.DATA_TOGGLE, function (event) {
    event.preventDefault();

    Tab._jQueryInterface.call($$$1(this), 'show');
  });
  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   */

  $$$1.fn[NAME] = Tab._jQueryInterface;
  $$$1.fn[NAME].Constructor = Tab;

  $$$1.fn[NAME].noConflict = function () {
    $$$1.fn[NAME] = JQUERY_NO_CONFLICT;
    return Tab._jQueryInterface;
  };

  return Tab;
}($);

/**
 * --------------------------------------------------------------------------
 * Bootstrap (v4.0.0-alpha.6): index.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * --------------------------------------------------------------------------
 */

(function ($$$1) {
  if (typeof $$$1 === 'undefined') {
    throw new Error('Bootstrap\'s JavaScript requires jQuery. jQuery must be included before Bootstrap\'s JavaScript.');
  }

  var version = $$$1.fn.jquery.split(' ')[0].split('.');
  var minMajor = 1;
  var ltMajor = 2;
  var minMinor = 9;
  var minPatch = 1;
  var maxMajor = 4;

  if (version[0] < ltMajor && version[1] < minMinor || version[0] === minMajor && version[1] === minMinor && version[2] < minPatch || version[0] >= maxMajor) {
    throw new Error('Bootstrap\'s JavaScript requires at least jQuery v1.9.1 but less than v4.0.0');
  }
})($);

exports.Util = Util;
exports.Alert = Alert;
exports.Button = Button;
exports.Carousel = Carousel;
exports.Collapse = Collapse;
exports.Dropdown = Dropdown;
exports.Modal = Modal;
exports.Popover = Popover;
exports.Scrollspy = ScrollSpy;
exports.Tab = Tab;
exports.Tooltip = Tooltip;

Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=bootstrap.js.map


/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* WEBPACK VAR INJECTION */(function(global) {/**!
 * @fileOverview Kickass library to create and place poppers near their reference elements.
 * @version 1.12.9
 * @license
 * Copyright (c) 2016 Federico Zivolo and contributors
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */
var isBrowser = typeof window !== 'undefined' && typeof document !== 'undefined';
var longerTimeoutBrowsers = ['Edge', 'Trident', 'Firefox'];
var timeoutDuration = 0;
for (var i = 0; i < longerTimeoutBrowsers.length; i += 1) {
  if (isBrowser && navigator.userAgent.indexOf(longerTimeoutBrowsers[i]) >= 0) {
    timeoutDuration = 1;
    break;
  }
}

function microtaskDebounce(fn) {
  var called = false;
  return function () {
    if (called) {
      return;
    }
    called = true;
    window.Promise.resolve().then(function () {
      called = false;
      fn();
    });
  };
}

function taskDebounce(fn) {
  var scheduled = false;
  return function () {
    if (!scheduled) {
      scheduled = true;
      setTimeout(function () {
        scheduled = false;
        fn();
      }, timeoutDuration);
    }
  };
}

var supportsMicroTasks = isBrowser && window.Promise;

/**
* Create a debounced version of a method, that's asynchronously deferred
* but called in the minimum time possible.
*
* @method
* @memberof Popper.Utils
* @argument {Function} fn
* @returns {Function}
*/
var debounce = supportsMicroTasks ? microtaskDebounce : taskDebounce;

/**
 * Check if the given variable is a function
 * @method
 * @memberof Popper.Utils
 * @argument {Any} functionToCheck - variable to check
 * @returns {Boolean} answer to: is a function?
 */
function isFunction(functionToCheck) {
  var getType = {};
  return functionToCheck && getType.toString.call(functionToCheck) === '[object Function]';
}

/**
 * Get CSS computed property of the given element
 * @method
 * @memberof Popper.Utils
 * @argument {Eement} element
 * @argument {String} property
 */
function getStyleComputedProperty(element, property) {
  if (element.nodeType !== 1) {
    return [];
  }
  // NOTE: 1 DOM access here
  var css = getComputedStyle(element, null);
  return property ? css[property] : css;
}

/**
 * Returns the parentNode or the host of the element
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @returns {Element} parent
 */
function getParentNode(element) {
  if (element.nodeName === 'HTML') {
    return element;
  }
  return element.parentNode || element.host;
}

/**
 * Returns the scrolling parent of the given element
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @returns {Element} scroll parent
 */
function getScrollParent(element) {
  // Return body, `getScroll` will take care to get the correct `scrollTop` from it
  if (!element) {
    return document.body;
  }

  switch (element.nodeName) {
    case 'HTML':
    case 'BODY':
      return element.ownerDocument.body;
    case '#document':
      return element.body;
  }

  // Firefox want us to check `-x` and `-y` variations as well

  var _getStyleComputedProp = getStyleComputedProperty(element),
      overflow = _getStyleComputedProp.overflow,
      overflowX = _getStyleComputedProp.overflowX,
      overflowY = _getStyleComputedProp.overflowY;

  if (/(auto|scroll)/.test(overflow + overflowY + overflowX)) {
    return element;
  }

  return getScrollParent(getParentNode(element));
}

/**
 * Returns the offset parent of the given element
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @returns {Element} offset parent
 */
function getOffsetParent(element) {
  // NOTE: 1 DOM access here
  var offsetParent = element && element.offsetParent;
  var nodeName = offsetParent && offsetParent.nodeName;

  if (!nodeName || nodeName === 'BODY' || nodeName === 'HTML') {
    if (element) {
      return element.ownerDocument.documentElement;
    }

    return document.documentElement;
  }

  // .offsetParent will return the closest TD or TABLE in case
  // no offsetParent is present, I hate this job...
  if (['TD', 'TABLE'].indexOf(offsetParent.nodeName) !== -1 && getStyleComputedProperty(offsetParent, 'position') === 'static') {
    return getOffsetParent(offsetParent);
  }

  return offsetParent;
}

function isOffsetContainer(element) {
  var nodeName = element.nodeName;

  if (nodeName === 'BODY') {
    return false;
  }
  return nodeName === 'HTML' || getOffsetParent(element.firstElementChild) === element;
}

/**
 * Finds the root node (document, shadowDOM root) of the given element
 * @method
 * @memberof Popper.Utils
 * @argument {Element} node
 * @returns {Element} root node
 */
function getRoot(node) {
  if (node.parentNode !== null) {
    return getRoot(node.parentNode);
  }

  return node;
}

/**
 * Finds the offset parent common to the two provided nodes
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element1
 * @argument {Element} element2
 * @returns {Element} common offset parent
 */
function findCommonOffsetParent(element1, element2) {
  // This check is needed to avoid errors in case one of the elements isn't defined for any reason
  if (!element1 || !element1.nodeType || !element2 || !element2.nodeType) {
    return document.documentElement;
  }

  // Here we make sure to give as "start" the element that comes first in the DOM
  var order = element1.compareDocumentPosition(element2) & Node.DOCUMENT_POSITION_FOLLOWING;
  var start = order ? element1 : element2;
  var end = order ? element2 : element1;

  // Get common ancestor container
  var range = document.createRange();
  range.setStart(start, 0);
  range.setEnd(end, 0);
  var commonAncestorContainer = range.commonAncestorContainer;

  // Both nodes are inside #document

  if (element1 !== commonAncestorContainer && element2 !== commonAncestorContainer || start.contains(end)) {
    if (isOffsetContainer(commonAncestorContainer)) {
      return commonAncestorContainer;
    }

    return getOffsetParent(commonAncestorContainer);
  }

  // one of the nodes is inside shadowDOM, find which one
  var element1root = getRoot(element1);
  if (element1root.host) {
    return findCommonOffsetParent(element1root.host, element2);
  } else {
    return findCommonOffsetParent(element1, getRoot(element2).host);
  }
}

/**
 * Gets the scroll value of the given element in the given side (top and left)
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @argument {String} side `top` or `left`
 * @returns {number} amount of scrolled pixels
 */
function getScroll(element) {
  var side = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'top';

  var upperSide = side === 'top' ? 'scrollTop' : 'scrollLeft';
  var nodeName = element.nodeName;

  if (nodeName === 'BODY' || nodeName === 'HTML') {
    var html = element.ownerDocument.documentElement;
    var scrollingElement = element.ownerDocument.scrollingElement || html;
    return scrollingElement[upperSide];
  }

  return element[upperSide];
}

/*
 * Sum or subtract the element scroll values (left and top) from a given rect object
 * @method
 * @memberof Popper.Utils
 * @param {Object} rect - Rect object you want to change
 * @param {HTMLElement} element - The element from the function reads the scroll values
 * @param {Boolean} subtract - set to true if you want to subtract the scroll values
 * @return {Object} rect - The modifier rect object
 */
function includeScroll(rect, element) {
  var subtract = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

  var scrollTop = getScroll(element, 'top');
  var scrollLeft = getScroll(element, 'left');
  var modifier = subtract ? -1 : 1;
  rect.top += scrollTop * modifier;
  rect.bottom += scrollTop * modifier;
  rect.left += scrollLeft * modifier;
  rect.right += scrollLeft * modifier;
  return rect;
}

/*
 * Helper to detect borders of a given element
 * @method
 * @memberof Popper.Utils
 * @param {CSSStyleDeclaration} styles
 * Result of `getStyleComputedProperty` on the given element
 * @param {String} axis - `x` or `y`
 * @return {number} borders - The borders size of the given axis
 */

function getBordersSize(styles, axis) {
  var sideA = axis === 'x' ? 'Left' : 'Top';
  var sideB = sideA === 'Left' ? 'Right' : 'Bottom';

  return parseFloat(styles['border' + sideA + 'Width'], 10) + parseFloat(styles['border' + sideB + 'Width'], 10);
}

/**
 * Tells if you are running Internet Explorer 10
 * @method
 * @memberof Popper.Utils
 * @returns {Boolean} isIE10
 */
var isIE10 = undefined;

var isIE10$1 = function () {
  if (isIE10 === undefined) {
    isIE10 = navigator.appVersion.indexOf('MSIE 10') !== -1;
  }
  return isIE10;
};

function getSize(axis, body, html, computedStyle) {
  return Math.max(body['offset' + axis], body['scroll' + axis], html['client' + axis], html['offset' + axis], html['scroll' + axis], isIE10$1() ? html['offset' + axis] + computedStyle['margin' + (axis === 'Height' ? 'Top' : 'Left')] + computedStyle['margin' + (axis === 'Height' ? 'Bottom' : 'Right')] : 0);
}

function getWindowSizes() {
  var body = document.body;
  var html = document.documentElement;
  var computedStyle = isIE10$1() && getComputedStyle(html);

  return {
    height: getSize('Height', body, html, computedStyle),
    width: getSize('Width', body, html, computedStyle)
  };
}

var classCallCheck = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

var createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();





var defineProperty = function (obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
};

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

/**
 * Given element offsets, generate an output similar to getBoundingClientRect
 * @method
 * @memberof Popper.Utils
 * @argument {Object} offsets
 * @returns {Object} ClientRect like output
 */
function getClientRect(offsets) {
  return _extends({}, offsets, {
    right: offsets.left + offsets.width,
    bottom: offsets.top + offsets.height
  });
}

/**
 * Get bounding client rect of given element
 * @method
 * @memberof Popper.Utils
 * @param {HTMLElement} element
 * @return {Object} client rect
 */
function getBoundingClientRect(element) {
  var rect = {};

  // IE10 10 FIX: Please, don't ask, the element isn't
  // considered in DOM in some circumstances...
  // This isn't reproducible in IE10 compatibility mode of IE11
  if (isIE10$1()) {
    try {
      rect = element.getBoundingClientRect();
      var scrollTop = getScroll(element, 'top');
      var scrollLeft = getScroll(element, 'left');
      rect.top += scrollTop;
      rect.left += scrollLeft;
      rect.bottom += scrollTop;
      rect.right += scrollLeft;
    } catch (err) {}
  } else {
    rect = element.getBoundingClientRect();
  }

  var result = {
    left: rect.left,
    top: rect.top,
    width: rect.right - rect.left,
    height: rect.bottom - rect.top
  };

  // subtract scrollbar size from sizes
  var sizes = element.nodeName === 'HTML' ? getWindowSizes() : {};
  var width = sizes.width || element.clientWidth || result.right - result.left;
  var height = sizes.height || element.clientHeight || result.bottom - result.top;

  var horizScrollbar = element.offsetWidth - width;
  var vertScrollbar = element.offsetHeight - height;

  // if an hypothetical scrollbar is detected, we must be sure it's not a `border`
  // we make this check conditional for performance reasons
  if (horizScrollbar || vertScrollbar) {
    var styles = getStyleComputedProperty(element);
    horizScrollbar -= getBordersSize(styles, 'x');
    vertScrollbar -= getBordersSize(styles, 'y');

    result.width -= horizScrollbar;
    result.height -= vertScrollbar;
  }

  return getClientRect(result);
}

function getOffsetRectRelativeToArbitraryNode(children, parent) {
  var isIE10 = isIE10$1();
  var isHTML = parent.nodeName === 'HTML';
  var childrenRect = getBoundingClientRect(children);
  var parentRect = getBoundingClientRect(parent);
  var scrollParent = getScrollParent(children);

  var styles = getStyleComputedProperty(parent);
  var borderTopWidth = parseFloat(styles.borderTopWidth, 10);
  var borderLeftWidth = parseFloat(styles.borderLeftWidth, 10);

  var offsets = getClientRect({
    top: childrenRect.top - parentRect.top - borderTopWidth,
    left: childrenRect.left - parentRect.left - borderLeftWidth,
    width: childrenRect.width,
    height: childrenRect.height
  });
  offsets.marginTop = 0;
  offsets.marginLeft = 0;

  // Subtract margins of documentElement in case it's being used as parent
  // we do this only on HTML because it's the only element that behaves
  // differently when margins are applied to it. The margins are included in
  // the box of the documentElement, in the other cases not.
  if (!isIE10 && isHTML) {
    var marginTop = parseFloat(styles.marginTop, 10);
    var marginLeft = parseFloat(styles.marginLeft, 10);

    offsets.top -= borderTopWidth - marginTop;
    offsets.bottom -= borderTopWidth - marginTop;
    offsets.left -= borderLeftWidth - marginLeft;
    offsets.right -= borderLeftWidth - marginLeft;

    // Attach marginTop and marginLeft because in some circumstances we may need them
    offsets.marginTop = marginTop;
    offsets.marginLeft = marginLeft;
  }

  if (isIE10 ? parent.contains(scrollParent) : parent === scrollParent && scrollParent.nodeName !== 'BODY') {
    offsets = includeScroll(offsets, parent);
  }

  return offsets;
}

function getViewportOffsetRectRelativeToArtbitraryNode(element) {
  var html = element.ownerDocument.documentElement;
  var relativeOffset = getOffsetRectRelativeToArbitraryNode(element, html);
  var width = Math.max(html.clientWidth, window.innerWidth || 0);
  var height = Math.max(html.clientHeight, window.innerHeight || 0);

  var scrollTop = getScroll(html);
  var scrollLeft = getScroll(html, 'left');

  var offset = {
    top: scrollTop - relativeOffset.top + relativeOffset.marginTop,
    left: scrollLeft - relativeOffset.left + relativeOffset.marginLeft,
    width: width,
    height: height
  };

  return getClientRect(offset);
}

/**
 * Check if the given element is fixed or is inside a fixed parent
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @argument {Element} customContainer
 * @returns {Boolean} answer to "isFixed?"
 */
function isFixed(element) {
  var nodeName = element.nodeName;
  if (nodeName === 'BODY' || nodeName === 'HTML') {
    return false;
  }
  if (getStyleComputedProperty(element, 'position') === 'fixed') {
    return true;
  }
  return isFixed(getParentNode(element));
}

/**
 * Computed the boundaries limits and return them
 * @method
 * @memberof Popper.Utils
 * @param {HTMLElement} popper
 * @param {HTMLElement} reference
 * @param {number} padding
 * @param {HTMLElement} boundariesElement - Element used to define the boundaries
 * @returns {Object} Coordinates of the boundaries
 */
function getBoundaries(popper, reference, padding, boundariesElement) {
  // NOTE: 1 DOM access here
  var boundaries = { top: 0, left: 0 };
  var offsetParent = findCommonOffsetParent(popper, reference);

  // Handle viewport case
  if (boundariesElement === 'viewport') {
    boundaries = getViewportOffsetRectRelativeToArtbitraryNode(offsetParent);
  } else {
    // Handle other cases based on DOM element used as boundaries
    var boundariesNode = void 0;
    if (boundariesElement === 'scrollParent') {
      boundariesNode = getScrollParent(getParentNode(reference));
      if (boundariesNode.nodeName === 'BODY') {
        boundariesNode = popper.ownerDocument.documentElement;
      }
    } else if (boundariesElement === 'window') {
      boundariesNode = popper.ownerDocument.documentElement;
    } else {
      boundariesNode = boundariesElement;
    }

    var offsets = getOffsetRectRelativeToArbitraryNode(boundariesNode, offsetParent);

    // In case of HTML, we need a different computation
    if (boundariesNode.nodeName === 'HTML' && !isFixed(offsetParent)) {
      var _getWindowSizes = getWindowSizes(),
          height = _getWindowSizes.height,
          width = _getWindowSizes.width;

      boundaries.top += offsets.top - offsets.marginTop;
      boundaries.bottom = height + offsets.top;
      boundaries.left += offsets.left - offsets.marginLeft;
      boundaries.right = width + offsets.left;
    } else {
      // for all the other DOM elements, this one is good
      boundaries = offsets;
    }
  }

  // Add paddings
  boundaries.left += padding;
  boundaries.top += padding;
  boundaries.right -= padding;
  boundaries.bottom -= padding;

  return boundaries;
}

function getArea(_ref) {
  var width = _ref.width,
      height = _ref.height;

  return width * height;
}

/**
 * Utility used to transform the `auto` placement to the placement with more
 * available space.
 * @method
 * @memberof Popper.Utils
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function computeAutoPlacement(placement, refRect, popper, reference, boundariesElement) {
  var padding = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 0;

  if (placement.indexOf('auto') === -1) {
    return placement;
  }

  var boundaries = getBoundaries(popper, reference, padding, boundariesElement);

  var rects = {
    top: {
      width: boundaries.width,
      height: refRect.top - boundaries.top
    },
    right: {
      width: boundaries.right - refRect.right,
      height: boundaries.height
    },
    bottom: {
      width: boundaries.width,
      height: boundaries.bottom - refRect.bottom
    },
    left: {
      width: refRect.left - boundaries.left,
      height: boundaries.height
    }
  };

  var sortedAreas = Object.keys(rects).map(function (key) {
    return _extends({
      key: key
    }, rects[key], {
      area: getArea(rects[key])
    });
  }).sort(function (a, b) {
    return b.area - a.area;
  });

  var filteredAreas = sortedAreas.filter(function (_ref2) {
    var width = _ref2.width,
        height = _ref2.height;
    return width >= popper.clientWidth && height >= popper.clientHeight;
  });

  var computedPlacement = filteredAreas.length > 0 ? filteredAreas[0].key : sortedAreas[0].key;

  var variation = placement.split('-')[1];

  return computedPlacement + (variation ? '-' + variation : '');
}

/**
 * Get offsets to the reference element
 * @method
 * @memberof Popper.Utils
 * @param {Object} state
 * @param {Element} popper - the popper element
 * @param {Element} reference - the reference element (the popper will be relative to this)
 * @returns {Object} An object containing the offsets which will be applied to the popper
 */
function getReferenceOffsets(state, popper, reference) {
  var commonOffsetParent = findCommonOffsetParent(popper, reference);
  return getOffsetRectRelativeToArbitraryNode(reference, commonOffsetParent);
}

/**
 * Get the outer sizes of the given element (offset size + margins)
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @returns {Object} object containing width and height properties
 */
function getOuterSizes(element) {
  var styles = getComputedStyle(element);
  var x = parseFloat(styles.marginTop) + parseFloat(styles.marginBottom);
  var y = parseFloat(styles.marginLeft) + parseFloat(styles.marginRight);
  var result = {
    width: element.offsetWidth + y,
    height: element.offsetHeight + x
  };
  return result;
}

/**
 * Get the opposite placement of the given one
 * @method
 * @memberof Popper.Utils
 * @argument {String} placement
 * @returns {String} flipped placement
 */
function getOppositePlacement(placement) {
  var hash = { left: 'right', right: 'left', bottom: 'top', top: 'bottom' };
  return placement.replace(/left|right|bottom|top/g, function (matched) {
    return hash[matched];
  });
}

/**
 * Get offsets to the popper
 * @method
 * @memberof Popper.Utils
 * @param {Object} position - CSS position the Popper will get applied
 * @param {HTMLElement} popper - the popper element
 * @param {Object} referenceOffsets - the reference offsets (the popper will be relative to this)
 * @param {String} placement - one of the valid placement options
 * @returns {Object} popperOffsets - An object containing the offsets which will be applied to the popper
 */
function getPopperOffsets(popper, referenceOffsets, placement) {
  placement = placement.split('-')[0];

  // Get popper node sizes
  var popperRect = getOuterSizes(popper);

  // Add position, width and height to our offsets object
  var popperOffsets = {
    width: popperRect.width,
    height: popperRect.height
  };

  // depending by the popper placement we have to compute its offsets slightly differently
  var isHoriz = ['right', 'left'].indexOf(placement) !== -1;
  var mainSide = isHoriz ? 'top' : 'left';
  var secondarySide = isHoriz ? 'left' : 'top';
  var measurement = isHoriz ? 'height' : 'width';
  var secondaryMeasurement = !isHoriz ? 'height' : 'width';

  popperOffsets[mainSide] = referenceOffsets[mainSide] + referenceOffsets[measurement] / 2 - popperRect[measurement] / 2;
  if (placement === secondarySide) {
    popperOffsets[secondarySide] = referenceOffsets[secondarySide] - popperRect[secondaryMeasurement];
  } else {
    popperOffsets[secondarySide] = referenceOffsets[getOppositePlacement(secondarySide)];
  }

  return popperOffsets;
}

/**
 * Mimics the `find` method of Array
 * @method
 * @memberof Popper.Utils
 * @argument {Array} arr
 * @argument prop
 * @argument value
 * @returns index or -1
 */
function find(arr, check) {
  // use native find if supported
  if (Array.prototype.find) {
    return arr.find(check);
  }

  // use `filter` to obtain the same behavior of `find`
  return arr.filter(check)[0];
}

/**
 * Return the index of the matching object
 * @method
 * @memberof Popper.Utils
 * @argument {Array} arr
 * @argument prop
 * @argument value
 * @returns index or -1
 */
function findIndex(arr, prop, value) {
  // use native findIndex if supported
  if (Array.prototype.findIndex) {
    return arr.findIndex(function (cur) {
      return cur[prop] === value;
    });
  }

  // use `find` + `indexOf` if `findIndex` isn't supported
  var match = find(arr, function (obj) {
    return obj[prop] === value;
  });
  return arr.indexOf(match);
}

/**
 * Loop trough the list of modifiers and run them in order,
 * each of them will then edit the data object.
 * @method
 * @memberof Popper.Utils
 * @param {dataObject} data
 * @param {Array} modifiers
 * @param {String} ends - Optional modifier name used as stopper
 * @returns {dataObject}
 */
function runModifiers(modifiers, data, ends) {
  var modifiersToRun = ends === undefined ? modifiers : modifiers.slice(0, findIndex(modifiers, 'name', ends));

  modifiersToRun.forEach(function (modifier) {
    if (modifier['function']) {
      // eslint-disable-line dot-notation
      console.warn('`modifier.function` is deprecated, use `modifier.fn`!');
    }
    var fn = modifier['function'] || modifier.fn; // eslint-disable-line dot-notation
    if (modifier.enabled && isFunction(fn)) {
      // Add properties to offsets to make them a complete clientRect object
      // we do this before each modifier to make sure the previous one doesn't
      // mess with these values
      data.offsets.popper = getClientRect(data.offsets.popper);
      data.offsets.reference = getClientRect(data.offsets.reference);

      data = fn(data, modifier);
    }
  });

  return data;
}

/**
 * Updates the position of the popper, computing the new offsets and applying
 * the new style.<br />
 * Prefer `scheduleUpdate` over `update` because of performance reasons.
 * @method
 * @memberof Popper
 */
function update() {
  // if popper is destroyed, don't perform any further update
  if (this.state.isDestroyed) {
    return;
  }

  var data = {
    instance: this,
    styles: {},
    arrowStyles: {},
    attributes: {},
    flipped: false,
    offsets: {}
  };

  // compute reference element offsets
  data.offsets.reference = getReferenceOffsets(this.state, this.popper, this.reference);

  // compute auto placement, store placement inside the data object,
  // modifiers will be able to edit `placement` if needed
  // and refer to originalPlacement to know the original value
  data.placement = computeAutoPlacement(this.options.placement, data.offsets.reference, this.popper, this.reference, this.options.modifiers.flip.boundariesElement, this.options.modifiers.flip.padding);

  // store the computed placement inside `originalPlacement`
  data.originalPlacement = data.placement;

  // compute the popper offsets
  data.offsets.popper = getPopperOffsets(this.popper, data.offsets.reference, data.placement);
  data.offsets.popper.position = 'absolute';

  // run the modifiers
  data = runModifiers(this.modifiers, data);

  // the first `update` will call `onCreate` callback
  // the other ones will call `onUpdate` callback
  if (!this.state.isCreated) {
    this.state.isCreated = true;
    this.options.onCreate(data);
  } else {
    this.options.onUpdate(data);
  }
}

/**
 * Helper used to know if the given modifier is enabled.
 * @method
 * @memberof Popper.Utils
 * @returns {Boolean}
 */
function isModifierEnabled(modifiers, modifierName) {
  return modifiers.some(function (_ref) {
    var name = _ref.name,
        enabled = _ref.enabled;
    return enabled && name === modifierName;
  });
}

/**
 * Get the prefixed supported property name
 * @method
 * @memberof Popper.Utils
 * @argument {String} property (camelCase)
 * @returns {String} prefixed property (camelCase or PascalCase, depending on the vendor prefix)
 */
function getSupportedPropertyName(property) {
  var prefixes = [false, 'ms', 'Webkit', 'Moz', 'O'];
  var upperProp = property.charAt(0).toUpperCase() + property.slice(1);

  for (var i = 0; i < prefixes.length - 1; i++) {
    var prefix = prefixes[i];
    var toCheck = prefix ? '' + prefix + upperProp : property;
    if (typeof document.body.style[toCheck] !== 'undefined') {
      return toCheck;
    }
  }
  return null;
}

/**
 * Destroy the popper
 * @method
 * @memberof Popper
 */
function destroy() {
  this.state.isDestroyed = true;

  // touch DOM only if `applyStyle` modifier is enabled
  if (isModifierEnabled(this.modifiers, 'applyStyle')) {
    this.popper.removeAttribute('x-placement');
    this.popper.style.left = '';
    this.popper.style.position = '';
    this.popper.style.top = '';
    this.popper.style[getSupportedPropertyName('transform')] = '';
  }

  this.disableEventListeners();

  // remove the popper if user explicity asked for the deletion on destroy
  // do not use `remove` because IE11 doesn't support it
  if (this.options.removeOnDestroy) {
    this.popper.parentNode.removeChild(this.popper);
  }
  return this;
}

/**
 * Get the window associated with the element
 * @argument {Element} element
 * @returns {Window}
 */
function getWindow(element) {
  var ownerDocument = element.ownerDocument;
  return ownerDocument ? ownerDocument.defaultView : window;
}

function attachToScrollParents(scrollParent, event, callback, scrollParents) {
  var isBody = scrollParent.nodeName === 'BODY';
  var target = isBody ? scrollParent.ownerDocument.defaultView : scrollParent;
  target.addEventListener(event, callback, { passive: true });

  if (!isBody) {
    attachToScrollParents(getScrollParent(target.parentNode), event, callback, scrollParents);
  }
  scrollParents.push(target);
}

/**
 * Setup needed event listeners used to update the popper position
 * @method
 * @memberof Popper.Utils
 * @private
 */
function setupEventListeners(reference, options, state, updateBound) {
  // Resize event listener on window
  state.updateBound = updateBound;
  getWindow(reference).addEventListener('resize', state.updateBound, { passive: true });

  // Scroll event listener on scroll parents
  var scrollElement = getScrollParent(reference);
  attachToScrollParents(scrollElement, 'scroll', state.updateBound, state.scrollParents);
  state.scrollElement = scrollElement;
  state.eventsEnabled = true;

  return state;
}

/**
 * It will add resize/scroll events and start recalculating
 * position of the popper element when they are triggered.
 * @method
 * @memberof Popper
 */
function enableEventListeners() {
  if (!this.state.eventsEnabled) {
    this.state = setupEventListeners(this.reference, this.options, this.state, this.scheduleUpdate);
  }
}

/**
 * Remove event listeners used to update the popper position
 * @method
 * @memberof Popper.Utils
 * @private
 */
function removeEventListeners(reference, state) {
  // Remove resize event listener on window
  getWindow(reference).removeEventListener('resize', state.updateBound);

  // Remove scroll event listener on scroll parents
  state.scrollParents.forEach(function (target) {
    target.removeEventListener('scroll', state.updateBound);
  });

  // Reset state
  state.updateBound = null;
  state.scrollParents = [];
  state.scrollElement = null;
  state.eventsEnabled = false;
  return state;
}

/**
 * It will remove resize/scroll events and won't recalculate popper position
 * when they are triggered. It also won't trigger onUpdate callback anymore,
 * unless you call `update` method manually.
 * @method
 * @memberof Popper
 */
function disableEventListeners() {
  if (this.state.eventsEnabled) {
    cancelAnimationFrame(this.scheduleUpdate);
    this.state = removeEventListeners(this.reference, this.state);
  }
}

/**
 * Tells if a given input is a number
 * @method
 * @memberof Popper.Utils
 * @param {*} input to check
 * @return {Boolean}
 */
function isNumeric(n) {
  return n !== '' && !isNaN(parseFloat(n)) && isFinite(n);
}

/**
 * Set the style to the given popper
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element - Element to apply the style to
 * @argument {Object} styles
 * Object with a list of properties and values which will be applied to the element
 */
function setStyles(element, styles) {
  Object.keys(styles).forEach(function (prop) {
    var unit = '';
    // add unit if the value is numeric and is one of the following
    if (['width', 'height', 'top', 'right', 'bottom', 'left'].indexOf(prop) !== -1 && isNumeric(styles[prop])) {
      unit = 'px';
    }
    element.style[prop] = styles[prop] + unit;
  });
}

/**
 * Set the attributes to the given popper
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element - Element to apply the attributes to
 * @argument {Object} styles
 * Object with a list of properties and values which will be applied to the element
 */
function setAttributes(element, attributes) {
  Object.keys(attributes).forEach(function (prop) {
    var value = attributes[prop];
    if (value !== false) {
      element.setAttribute(prop, attributes[prop]);
    } else {
      element.removeAttribute(prop);
    }
  });
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by `update` method
 * @argument {Object} data.styles - List of style properties - values to apply to popper element
 * @argument {Object} data.attributes - List of attribute properties - values to apply to popper element
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The same data object
 */
function applyStyle(data) {
  // any property present in `data.styles` will be applied to the popper,
  // in this way we can make the 3rd party modifiers add custom styles to it
  // Be aware, modifiers could override the properties defined in the previous
  // lines of this modifier!
  setStyles(data.instance.popper, data.styles);

  // any property present in `data.attributes` will be applied to the popper,
  // they will be set as HTML attributes of the element
  setAttributes(data.instance.popper, data.attributes);

  // if arrowElement is defined and arrowStyles has some properties
  if (data.arrowElement && Object.keys(data.arrowStyles).length) {
    setStyles(data.arrowElement, data.arrowStyles);
  }

  return data;
}

/**
 * Set the x-placement attribute before everything else because it could be used
 * to add margins to the popper margins needs to be calculated to get the
 * correct popper offsets.
 * @method
 * @memberof Popper.modifiers
 * @param {HTMLElement} reference - The reference element used to position the popper
 * @param {HTMLElement} popper - The HTML element used as popper.
 * @param {Object} options - Popper.js options
 */
function applyStyleOnLoad(reference, popper, options, modifierOptions, state) {
  // compute reference element offsets
  var referenceOffsets = getReferenceOffsets(state, popper, reference);

  // compute auto placement, store placement inside the data object,
  // modifiers will be able to edit `placement` if needed
  // and refer to originalPlacement to know the original value
  var placement = computeAutoPlacement(options.placement, referenceOffsets, popper, reference, options.modifiers.flip.boundariesElement, options.modifiers.flip.padding);

  popper.setAttribute('x-placement', placement);

  // Apply `position` to popper before anything else because
  // without the position applied we can't guarantee correct computations
  setStyles(popper, { position: 'absolute' });

  return options;
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by `update` method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function computeStyle(data, options) {
  var x = options.x,
      y = options.y;
  var popper = data.offsets.popper;

  // Remove this legacy support in Popper.js v2

  var legacyGpuAccelerationOption = find(data.instance.modifiers, function (modifier) {
    return modifier.name === 'applyStyle';
  }).gpuAcceleration;
  if (legacyGpuAccelerationOption !== undefined) {
    console.warn('WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!');
  }
  var gpuAcceleration = legacyGpuAccelerationOption !== undefined ? legacyGpuAccelerationOption : options.gpuAcceleration;

  var offsetParent = getOffsetParent(data.instance.popper);
  var offsetParentRect = getBoundingClientRect(offsetParent);

  // Styles
  var styles = {
    position: popper.position
  };

  // floor sides to avoid blurry text
  var offsets = {
    left: Math.floor(popper.left),
    top: Math.floor(popper.top),
    bottom: Math.floor(popper.bottom),
    right: Math.floor(popper.right)
  };

  var sideA = x === 'bottom' ? 'top' : 'bottom';
  var sideB = y === 'right' ? 'left' : 'right';

  // if gpuAcceleration is set to `true` and transform is supported,
  //  we use `translate3d` to apply the position to the popper we
  // automatically use the supported prefixed version if needed
  var prefixedProperty = getSupportedPropertyName('transform');

  // now, let's make a step back and look at this code closely (wtf?)
  // If the content of the popper grows once it's been positioned, it
  // may happen that the popper gets misplaced because of the new content
  // overflowing its reference element
  // To avoid this problem, we provide two options (x and y), which allow
  // the consumer to define the offset origin.
  // If we position a popper on top of a reference element, we can set
  // `x` to `top` to make the popper grow towards its top instead of
  // its bottom.
  var left = void 0,
      top = void 0;
  if (sideA === 'bottom') {
    top = -offsetParentRect.height + offsets.bottom;
  } else {
    top = offsets.top;
  }
  if (sideB === 'right') {
    left = -offsetParentRect.width + offsets.right;
  } else {
    left = offsets.left;
  }
  if (gpuAcceleration && prefixedProperty) {
    styles[prefixedProperty] = 'translate3d(' + left + 'px, ' + top + 'px, 0)';
    styles[sideA] = 0;
    styles[sideB] = 0;
    styles.willChange = 'transform';
  } else {
    // othwerise, we use the standard `top`, `left`, `bottom` and `right` properties
    var invertTop = sideA === 'bottom' ? -1 : 1;
    var invertLeft = sideB === 'right' ? -1 : 1;
    styles[sideA] = top * invertTop;
    styles[sideB] = left * invertLeft;
    styles.willChange = sideA + ', ' + sideB;
  }

  // Attributes
  var attributes = {
    'x-placement': data.placement
  };

  // Update `data` attributes, styles and arrowStyles
  data.attributes = _extends({}, attributes, data.attributes);
  data.styles = _extends({}, styles, data.styles);
  data.arrowStyles = _extends({}, data.offsets.arrow, data.arrowStyles);

  return data;
}

/**
 * Helper used to know if the given modifier depends from another one.<br />
 * It checks if the needed modifier is listed and enabled.
 * @method
 * @memberof Popper.Utils
 * @param {Array} modifiers - list of modifiers
 * @param {String} requestingName - name of requesting modifier
 * @param {String} requestedName - name of requested modifier
 * @returns {Boolean}
 */
function isModifierRequired(modifiers, requestingName, requestedName) {
  var requesting = find(modifiers, function (_ref) {
    var name = _ref.name;
    return name === requestingName;
  });

  var isRequired = !!requesting && modifiers.some(function (modifier) {
    return modifier.name === requestedName && modifier.enabled && modifier.order < requesting.order;
  });

  if (!isRequired) {
    var _requesting = '`' + requestingName + '`';
    var requested = '`' + requestedName + '`';
    console.warn(requested + ' modifier is required by ' + _requesting + ' modifier in order to work, be sure to include it before ' + _requesting + '!');
  }
  return isRequired;
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function arrow(data, options) {
  var _data$offsets$arrow;

  // arrow depends on keepTogether in order to work
  if (!isModifierRequired(data.instance.modifiers, 'arrow', 'keepTogether')) {
    return data;
  }

  var arrowElement = options.element;

  // if arrowElement is a string, suppose it's a CSS selector
  if (typeof arrowElement === 'string') {
    arrowElement = data.instance.popper.querySelector(arrowElement);

    // if arrowElement is not found, don't run the modifier
    if (!arrowElement) {
      return data;
    }
  } else {
    // if the arrowElement isn't a query selector we must check that the
    // provided DOM node is child of its popper node
    if (!data.instance.popper.contains(arrowElement)) {
      console.warn('WARNING: `arrow.element` must be child of its popper element!');
      return data;
    }
  }

  var placement = data.placement.split('-')[0];
  var _data$offsets = data.offsets,
      popper = _data$offsets.popper,
      reference = _data$offsets.reference;

  var isVertical = ['left', 'right'].indexOf(placement) !== -1;

  var len = isVertical ? 'height' : 'width';
  var sideCapitalized = isVertical ? 'Top' : 'Left';
  var side = sideCapitalized.toLowerCase();
  var altSide = isVertical ? 'left' : 'top';
  var opSide = isVertical ? 'bottom' : 'right';
  var arrowElementSize = getOuterSizes(arrowElement)[len];

  //
  // extends keepTogether behavior making sure the popper and its
  // reference have enough pixels in conjuction
  //

  // top/left side
  if (reference[opSide] - arrowElementSize < popper[side]) {
    data.offsets.popper[side] -= popper[side] - (reference[opSide] - arrowElementSize);
  }
  // bottom/right side
  if (reference[side] + arrowElementSize > popper[opSide]) {
    data.offsets.popper[side] += reference[side] + arrowElementSize - popper[opSide];
  }
  data.offsets.popper = getClientRect(data.offsets.popper);

  // compute center of the popper
  var center = reference[side] + reference[len] / 2 - arrowElementSize / 2;

  // Compute the sideValue using the updated popper offsets
  // take popper margin in account because we don't have this info available
  var css = getStyleComputedProperty(data.instance.popper);
  var popperMarginSide = parseFloat(css['margin' + sideCapitalized], 10);
  var popperBorderSide = parseFloat(css['border' + sideCapitalized + 'Width'], 10);
  var sideValue = center - data.offsets.popper[side] - popperMarginSide - popperBorderSide;

  // prevent arrowElement from being placed not contiguously to its popper
  sideValue = Math.max(Math.min(popper[len] - arrowElementSize, sideValue), 0);

  data.arrowElement = arrowElement;
  data.offsets.arrow = (_data$offsets$arrow = {}, defineProperty(_data$offsets$arrow, side, Math.round(sideValue)), defineProperty(_data$offsets$arrow, altSide, ''), _data$offsets$arrow);

  return data;
}

/**
 * Get the opposite placement variation of the given one
 * @method
 * @memberof Popper.Utils
 * @argument {String} placement variation
 * @returns {String} flipped placement variation
 */
function getOppositeVariation(variation) {
  if (variation === 'end') {
    return 'start';
  } else if (variation === 'start') {
    return 'end';
  }
  return variation;
}

/**
 * List of accepted placements to use as values of the `placement` option.<br />
 * Valid placements are:
 * - `auto`
 * - `top`
 * - `right`
 * - `bottom`
 * - `left`
 *
 * Each placement can have a variation from this list:
 * - `-start`
 * - `-end`
 *
 * Variations are interpreted easily if you think of them as the left to right
 * written languages. Horizontally (`top` and `bottom`), `start` is left and `end`
 * is right.<br />
 * Vertically (`left` and `right`), `start` is top and `end` is bottom.
 *
 * Some valid examples are:
 * - `top-end` (on top of reference, right aligned)
 * - `right-start` (on right of reference, top aligned)
 * - `bottom` (on bottom, centered)
 * - `auto-right` (on the side with more space available, alignment depends by placement)
 *
 * @static
 * @type {Array}
 * @enum {String}
 * @readonly
 * @method placements
 * @memberof Popper
 */
var placements = ['auto-start', 'auto', 'auto-end', 'top-start', 'top', 'top-end', 'right-start', 'right', 'right-end', 'bottom-end', 'bottom', 'bottom-start', 'left-end', 'left', 'left-start'];

// Get rid of `auto` `auto-start` and `auto-end`
var validPlacements = placements.slice(3);

/**
 * Given an initial placement, returns all the subsequent placements
 * clockwise (or counter-clockwise).
 *
 * @method
 * @memberof Popper.Utils
 * @argument {String} placement - A valid placement (it accepts variations)
 * @argument {Boolean} counter - Set to true to walk the placements counterclockwise
 * @returns {Array} placements including their variations
 */
function clockwise(placement) {
  var counter = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

  var index = validPlacements.indexOf(placement);
  var arr = validPlacements.slice(index + 1).concat(validPlacements.slice(0, index));
  return counter ? arr.reverse() : arr;
}

var BEHAVIORS = {
  FLIP: 'flip',
  CLOCKWISE: 'clockwise',
  COUNTERCLOCKWISE: 'counterclockwise'
};

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function flip(data, options) {
  // if `inner` modifier is enabled, we can't use the `flip` modifier
  if (isModifierEnabled(data.instance.modifiers, 'inner')) {
    return data;
  }

  if (data.flipped && data.placement === data.originalPlacement) {
    // seems like flip is trying to loop, probably there's not enough space on any of the flippable sides
    return data;
  }

  var boundaries = getBoundaries(data.instance.popper, data.instance.reference, options.padding, options.boundariesElement);

  var placement = data.placement.split('-')[0];
  var placementOpposite = getOppositePlacement(placement);
  var variation = data.placement.split('-')[1] || '';

  var flipOrder = [];

  switch (options.behavior) {
    case BEHAVIORS.FLIP:
      flipOrder = [placement, placementOpposite];
      break;
    case BEHAVIORS.CLOCKWISE:
      flipOrder = clockwise(placement);
      break;
    case BEHAVIORS.COUNTERCLOCKWISE:
      flipOrder = clockwise(placement, true);
      break;
    default:
      flipOrder = options.behavior;
  }

  flipOrder.forEach(function (step, index) {
    if (placement !== step || flipOrder.length === index + 1) {
      return data;
    }

    placement = data.placement.split('-')[0];
    placementOpposite = getOppositePlacement(placement);

    var popperOffsets = data.offsets.popper;
    var refOffsets = data.offsets.reference;

    // using floor because the reference offsets may contain decimals we are not going to consider here
    var floor = Math.floor;
    var overlapsRef = placement === 'left' && floor(popperOffsets.right) > floor(refOffsets.left) || placement === 'right' && floor(popperOffsets.left) < floor(refOffsets.right) || placement === 'top' && floor(popperOffsets.bottom) > floor(refOffsets.top) || placement === 'bottom' && floor(popperOffsets.top) < floor(refOffsets.bottom);

    var overflowsLeft = floor(popperOffsets.left) < floor(boundaries.left);
    var overflowsRight = floor(popperOffsets.right) > floor(boundaries.right);
    var overflowsTop = floor(popperOffsets.top) < floor(boundaries.top);
    var overflowsBottom = floor(popperOffsets.bottom) > floor(boundaries.bottom);

    var overflowsBoundaries = placement === 'left' && overflowsLeft || placement === 'right' && overflowsRight || placement === 'top' && overflowsTop || placement === 'bottom' && overflowsBottom;

    // flip the variation if required
    var isVertical = ['top', 'bottom'].indexOf(placement) !== -1;
    var flippedVariation = !!options.flipVariations && (isVertical && variation === 'start' && overflowsLeft || isVertical && variation === 'end' && overflowsRight || !isVertical && variation === 'start' && overflowsTop || !isVertical && variation === 'end' && overflowsBottom);

    if (overlapsRef || overflowsBoundaries || flippedVariation) {
      // this boolean to detect any flip loop
      data.flipped = true;

      if (overlapsRef || overflowsBoundaries) {
        placement = flipOrder[index + 1];
      }

      if (flippedVariation) {
        variation = getOppositeVariation(variation);
      }

      data.placement = placement + (variation ? '-' + variation : '');

      // this object contains `position`, we want to preserve it along with
      // any additional property we may add in the future
      data.offsets.popper = _extends({}, data.offsets.popper, getPopperOffsets(data.instance.popper, data.offsets.reference, data.placement));

      data = runModifiers(data.instance.modifiers, data, 'flip');
    }
  });
  return data;
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function keepTogether(data) {
  var _data$offsets = data.offsets,
      popper = _data$offsets.popper,
      reference = _data$offsets.reference;

  var placement = data.placement.split('-')[0];
  var floor = Math.floor;
  var isVertical = ['top', 'bottom'].indexOf(placement) !== -1;
  var side = isVertical ? 'right' : 'bottom';
  var opSide = isVertical ? 'left' : 'top';
  var measurement = isVertical ? 'width' : 'height';

  if (popper[side] < floor(reference[opSide])) {
    data.offsets.popper[opSide] = floor(reference[opSide]) - popper[measurement];
  }
  if (popper[opSide] > floor(reference[side])) {
    data.offsets.popper[opSide] = floor(reference[side]);
  }

  return data;
}

/**
 * Converts a string containing value + unit into a px value number
 * @function
 * @memberof {modifiers~offset}
 * @private
 * @argument {String} str - Value + unit string
 * @argument {String} measurement - `height` or `width`
 * @argument {Object} popperOffsets
 * @argument {Object} referenceOffsets
 * @returns {Number|String}
 * Value in pixels, or original string if no values were extracted
 */
function toValue(str, measurement, popperOffsets, referenceOffsets) {
  // separate value from unit
  var split = str.match(/((?:\-|\+)?\d*\.?\d*)(.*)/);
  var value = +split[1];
  var unit = split[2];

  // If it's not a number it's an operator, I guess
  if (!value) {
    return str;
  }

  if (unit.indexOf('%') === 0) {
    var element = void 0;
    switch (unit) {
      case '%p':
        element = popperOffsets;
        break;
      case '%':
      case '%r':
      default:
        element = referenceOffsets;
    }

    var rect = getClientRect(element);
    return rect[measurement] / 100 * value;
  } else if (unit === 'vh' || unit === 'vw') {
    // if is a vh or vw, we calculate the size based on the viewport
    var size = void 0;
    if (unit === 'vh') {
      size = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
    } else {
      size = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
    }
    return size / 100 * value;
  } else {
    // if is an explicit pixel unit, we get rid of the unit and keep the value
    // if is an implicit unit, it's px, and we return just the value
    return value;
  }
}

/**
 * Parse an `offset` string to extrapolate `x` and `y` numeric offsets.
 * @function
 * @memberof {modifiers~offset}
 * @private
 * @argument {String} offset
 * @argument {Object} popperOffsets
 * @argument {Object} referenceOffsets
 * @argument {String} basePlacement
 * @returns {Array} a two cells array with x and y offsets in numbers
 */
function parseOffset(offset, popperOffsets, referenceOffsets, basePlacement) {
  var offsets = [0, 0];

  // Use height if placement is left or right and index is 0 otherwise use width
  // in this way the first offset will use an axis and the second one
  // will use the other one
  var useHeight = ['right', 'left'].indexOf(basePlacement) !== -1;

  // Split the offset string to obtain a list of values and operands
  // The regex addresses values with the plus or minus sign in front (+10, -20, etc)
  var fragments = offset.split(/(\+|\-)/).map(function (frag) {
    return frag.trim();
  });

  // Detect if the offset string contains a pair of values or a single one
  // they could be separated by comma or space
  var divider = fragments.indexOf(find(fragments, function (frag) {
    return frag.search(/,|\s/) !== -1;
  }));

  if (fragments[divider] && fragments[divider].indexOf(',') === -1) {
    console.warn('Offsets separated by white space(s) are deprecated, use a comma (,) instead.');
  }

  // If divider is found, we divide the list of values and operands to divide
  // them by ofset X and Y.
  var splitRegex = /\s*,\s*|\s+/;
  var ops = divider !== -1 ? [fragments.slice(0, divider).concat([fragments[divider].split(splitRegex)[0]]), [fragments[divider].split(splitRegex)[1]].concat(fragments.slice(divider + 1))] : [fragments];

  // Convert the values with units to absolute pixels to allow our computations
  ops = ops.map(function (op, index) {
    // Most of the units rely on the orientation of the popper
    var measurement = (index === 1 ? !useHeight : useHeight) ? 'height' : 'width';
    var mergeWithPrevious = false;
    return op
    // This aggregates any `+` or `-` sign that aren't considered operators
    // e.g.: 10 + +5 => [10, +, +5]
    .reduce(function (a, b) {
      if (a[a.length - 1] === '' && ['+', '-'].indexOf(b) !== -1) {
        a[a.length - 1] = b;
        mergeWithPrevious = true;
        return a;
      } else if (mergeWithPrevious) {
        a[a.length - 1] += b;
        mergeWithPrevious = false;
        return a;
      } else {
        return a.concat(b);
      }
    }, [])
    // Here we convert the string values into number values (in px)
    .map(function (str) {
      return toValue(str, measurement, popperOffsets, referenceOffsets);
    });
  });

  // Loop trough the offsets arrays and execute the operations
  ops.forEach(function (op, index) {
    op.forEach(function (frag, index2) {
      if (isNumeric(frag)) {
        offsets[index] += frag * (op[index2 - 1] === '-' ? -1 : 1);
      }
    });
  });
  return offsets;
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @argument {Number|String} options.offset=0
 * The offset value as described in the modifier description
 * @returns {Object} The data object, properly modified
 */
function offset(data, _ref) {
  var offset = _ref.offset;
  var placement = data.placement,
      _data$offsets = data.offsets,
      popper = _data$offsets.popper,
      reference = _data$offsets.reference;

  var basePlacement = placement.split('-')[0];

  var offsets = void 0;
  if (isNumeric(+offset)) {
    offsets = [+offset, 0];
  } else {
    offsets = parseOffset(offset, popper, reference, basePlacement);
  }

  if (basePlacement === 'left') {
    popper.top += offsets[0];
    popper.left -= offsets[1];
  } else if (basePlacement === 'right') {
    popper.top += offsets[0];
    popper.left += offsets[1];
  } else if (basePlacement === 'top') {
    popper.left += offsets[0];
    popper.top -= offsets[1];
  } else if (basePlacement === 'bottom') {
    popper.left += offsets[0];
    popper.top += offsets[1];
  }

  data.popper = popper;
  return data;
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by `update` method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function preventOverflow(data, options) {
  var boundariesElement = options.boundariesElement || getOffsetParent(data.instance.popper);

  // If offsetParent is the reference element, we really want to
  // go one step up and use the next offsetParent as reference to
  // avoid to make this modifier completely useless and look like broken
  if (data.instance.reference === boundariesElement) {
    boundariesElement = getOffsetParent(boundariesElement);
  }

  var boundaries = getBoundaries(data.instance.popper, data.instance.reference, options.padding, boundariesElement);
  options.boundaries = boundaries;

  var order = options.priority;
  var popper = data.offsets.popper;

  var check = {
    primary: function primary(placement) {
      var value = popper[placement];
      if (popper[placement] < boundaries[placement] && !options.escapeWithReference) {
        value = Math.max(popper[placement], boundaries[placement]);
      }
      return defineProperty({}, placement, value);
    },
    secondary: function secondary(placement) {
      var mainSide = placement === 'right' ? 'left' : 'top';
      var value = popper[mainSide];
      if (popper[placement] > boundaries[placement] && !options.escapeWithReference) {
        value = Math.min(popper[mainSide], boundaries[placement] - (placement === 'right' ? popper.width : popper.height));
      }
      return defineProperty({}, mainSide, value);
    }
  };

  order.forEach(function (placement) {
    var side = ['left', 'top'].indexOf(placement) !== -1 ? 'primary' : 'secondary';
    popper = _extends({}, popper, check[side](placement));
  });

  data.offsets.popper = popper;

  return data;
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by `update` method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function shift(data) {
  var placement = data.placement;
  var basePlacement = placement.split('-')[0];
  var shiftvariation = placement.split('-')[1];

  // if shift shiftvariation is specified, run the modifier
  if (shiftvariation) {
    var _data$offsets = data.offsets,
        reference = _data$offsets.reference,
        popper = _data$offsets.popper;

    var isVertical = ['bottom', 'top'].indexOf(basePlacement) !== -1;
    var side = isVertical ? 'left' : 'top';
    var measurement = isVertical ? 'width' : 'height';

    var shiftOffsets = {
      start: defineProperty({}, side, reference[side]),
      end: defineProperty({}, side, reference[side] + reference[measurement] - popper[measurement])
    };

    data.offsets.popper = _extends({}, popper, shiftOffsets[shiftvariation]);
  }

  return data;
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function hide(data) {
  if (!isModifierRequired(data.instance.modifiers, 'hide', 'preventOverflow')) {
    return data;
  }

  var refRect = data.offsets.reference;
  var bound = find(data.instance.modifiers, function (modifier) {
    return modifier.name === 'preventOverflow';
  }).boundaries;

  if (refRect.bottom < bound.top || refRect.left > bound.right || refRect.top > bound.bottom || refRect.right < bound.left) {
    // Avoid unnecessary DOM access if visibility hasn't changed
    if (data.hide === true) {
      return data;
    }

    data.hide = true;
    data.attributes['x-out-of-boundaries'] = '';
  } else {
    // Avoid unnecessary DOM access if visibility hasn't changed
    if (data.hide === false) {
      return data;
    }

    data.hide = false;
    data.attributes['x-out-of-boundaries'] = false;
  }

  return data;
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by `update` method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function inner(data) {
  var placement = data.placement;
  var basePlacement = placement.split('-')[0];
  var _data$offsets = data.offsets,
      popper = _data$offsets.popper,
      reference = _data$offsets.reference;

  var isHoriz = ['left', 'right'].indexOf(basePlacement) !== -1;

  var subtractLength = ['top', 'left'].indexOf(basePlacement) === -1;

  popper[isHoriz ? 'left' : 'top'] = reference[basePlacement] - (subtractLength ? popper[isHoriz ? 'width' : 'height'] : 0);

  data.placement = getOppositePlacement(placement);
  data.offsets.popper = getClientRect(popper);

  return data;
}

/**
 * Modifier function, each modifier can have a function of this type assigned
 * to its `fn` property.<br />
 * These functions will be called on each update, this means that you must
 * make sure they are performant enough to avoid performance bottlenecks.
 *
 * @function ModifierFn
 * @argument {dataObject} data - The data object generated by `update` method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {dataObject} The data object, properly modified
 */

/**
 * Modifiers are plugins used to alter the behavior of your poppers.<br />
 * Popper.js uses a set of 9 modifiers to provide all the basic functionalities
 * needed by the library.
 *
 * Usually you don't want to override the `order`, `fn` and `onLoad` props.
 * All the other properties are configurations that could be tweaked.
 * @namespace modifiers
 */
var modifiers = {
  /**
   * Modifier used to shift the popper on the start or end of its reference
   * element.<br />
   * It will read the variation of the `placement` property.<br />
   * It can be one either `-end` or `-start`.
   * @memberof modifiers
   * @inner
   */
  shift: {
    /** @prop {number} order=100 - Index used to define the order of execution */
    order: 100,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: shift
  },

  /**
   * The `offset` modifier can shift your popper on both its axis.
   *
   * It accepts the following units:
   * - `px` or unitless, interpreted as pixels
   * - `%` or `%r`, percentage relative to the length of the reference element
   * - `%p`, percentage relative to the length of the popper element
   * - `vw`, CSS viewport width unit
   * - `vh`, CSS viewport height unit
   *
   * For length is intended the main axis relative to the placement of the popper.<br />
   * This means that if the placement is `top` or `bottom`, the length will be the
   * `width`. In case of `left` or `right`, it will be the height.
   *
   * You can provide a single value (as `Number` or `String`), or a pair of values
   * as `String` divided by a comma or one (or more) white spaces.<br />
   * The latter is a deprecated method because it leads to confusion and will be
   * removed in v2.<br />
   * Additionally, it accepts additions and subtractions between different units.
   * Note that multiplications and divisions aren't supported.
   *
   * Valid examples are:
   * ```
   * 10
   * '10%'
   * '10, 10'
   * '10%, 10'
   * '10 + 10%'
   * '10 - 5vh + 3%'
   * '-10px + 5vh, 5px - 6%'
   * ```
   * > **NB**: If you desire to apply offsets to your poppers in a way that may make them overlap
   * > with their reference element, unfortunately, you will have to disable the `flip` modifier.
   * > More on this [reading this issue](https://github.com/FezVrasta/popper.js/issues/373)
   *
   * @memberof modifiers
   * @inner
   */
  offset: {
    /** @prop {number} order=200 - Index used to define the order of execution */
    order: 200,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: offset,
    /** @prop {Number|String} offset=0
     * The offset value as described in the modifier description
     */
    offset: 0
  },

  /**
   * Modifier used to prevent the popper from being positioned outside the boundary.
   *
   * An scenario exists where the reference itself is not within the boundaries.<br />
   * We can say it has "escaped the boundaries" — or just "escaped".<br />
   * In this case we need to decide whether the popper should either:
   *
   * - detach from the reference and remain "trapped" in the boundaries, or
   * - if it should ignore the boundary and "escape with its reference"
   *
   * When `escapeWithReference` is set to`true` and reference is completely
   * outside its boundaries, the popper will overflow (or completely leave)
   * the boundaries in order to remain attached to the edge of the reference.
   *
   * @memberof modifiers
   * @inner
   */
  preventOverflow: {
    /** @prop {number} order=300 - Index used to define the order of execution */
    order: 300,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: preventOverflow,
    /**
     * @prop {Array} [priority=['left','right','top','bottom']]
     * Popper will try to prevent overflow following these priorities by default,
     * then, it could overflow on the left and on top of the `boundariesElement`
     */
    priority: ['left', 'right', 'top', 'bottom'],
    /**
     * @prop {number} padding=5
     * Amount of pixel used to define a minimum distance between the boundaries
     * and the popper this makes sure the popper has always a little padding
     * between the edges of its container
     */
    padding: 5,
    /**
     * @prop {String|HTMLElement} boundariesElement='scrollParent'
     * Boundaries used by the modifier, can be `scrollParent`, `window`,
     * `viewport` or any DOM element.
     */
    boundariesElement: 'scrollParent'
  },

  /**
   * Modifier used to make sure the reference and its popper stay near eachothers
   * without leaving any gap between the two. Expecially useful when the arrow is
   * enabled and you want to assure it to point to its reference element.
   * It cares only about the first axis, you can still have poppers with margin
   * between the popper and its reference element.
   * @memberof modifiers
   * @inner
   */
  keepTogether: {
    /** @prop {number} order=400 - Index used to define the order of execution */
    order: 400,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: keepTogether
  },

  /**
   * This modifier is used to move the `arrowElement` of the popper to make
   * sure it is positioned between the reference element and its popper element.
   * It will read the outer size of the `arrowElement` node to detect how many
   * pixels of conjuction are needed.
   *
   * It has no effect if no `arrowElement` is provided.
   * @memberof modifiers
   * @inner
   */
  arrow: {
    /** @prop {number} order=500 - Index used to define the order of execution */
    order: 500,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: arrow,
    /** @prop {String|HTMLElement} element='[x-arrow]' - Selector or node used as arrow */
    element: '[x-arrow]'
  },

  /**
   * Modifier used to flip the popper's placement when it starts to overlap its
   * reference element.
   *
   * Requires the `preventOverflow` modifier before it in order to work.
   *
   * **NOTE:** this modifier will interrupt the current update cycle and will
   * restart it if it detects the need to flip the placement.
   * @memberof modifiers
   * @inner
   */
  flip: {
    /** @prop {number} order=600 - Index used to define the order of execution */
    order: 600,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: flip,
    /**
     * @prop {String|Array} behavior='flip'
     * The behavior used to change the popper's placement. It can be one of
     * `flip`, `clockwise`, `counterclockwise` or an array with a list of valid
     * placements (with optional variations).
     */
    behavior: 'flip',
    /**
     * @prop {number} padding=5
     * The popper will flip if it hits the edges of the `boundariesElement`
     */
    padding: 5,
    /**
     * @prop {String|HTMLElement} boundariesElement='viewport'
     * The element which will define the boundaries of the popper position,
     * the popper will never be placed outside of the defined boundaries
     * (except if keepTogether is enabled)
     */
    boundariesElement: 'viewport'
  },

  /**
   * Modifier used to make the popper flow toward the inner of the reference element.
   * By default, when this modifier is disabled, the popper will be placed outside
   * the reference element.
   * @memberof modifiers
   * @inner
   */
  inner: {
    /** @prop {number} order=700 - Index used to define the order of execution */
    order: 700,
    /** @prop {Boolean} enabled=false - Whether the modifier is enabled or not */
    enabled: false,
    /** @prop {ModifierFn} */
    fn: inner
  },

  /**
   * Modifier used to hide the popper when its reference element is outside of the
   * popper boundaries. It will set a `x-out-of-boundaries` attribute which can
   * be used to hide with a CSS selector the popper when its reference is
   * out of boundaries.
   *
   * Requires the `preventOverflow` modifier before it in order to work.
   * @memberof modifiers
   * @inner
   */
  hide: {
    /** @prop {number} order=800 - Index used to define the order of execution */
    order: 800,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: hide
  },

  /**
   * Computes the style that will be applied to the popper element to gets
   * properly positioned.
   *
   * Note that this modifier will not touch the DOM, it just prepares the styles
   * so that `applyStyle` modifier can apply it. This separation is useful
   * in case you need to replace `applyStyle` with a custom implementation.
   *
   * This modifier has `850` as `order` value to maintain backward compatibility
   * with previous versions of Popper.js. Expect the modifiers ordering method
   * to change in future major versions of the library.
   *
   * @memberof modifiers
   * @inner
   */
  computeStyle: {
    /** @prop {number} order=850 - Index used to define the order of execution */
    order: 850,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: computeStyle,
    /**
     * @prop {Boolean} gpuAcceleration=true
     * If true, it uses the CSS 3d transformation to position the popper.
     * Otherwise, it will use the `top` and `left` properties.
     */
    gpuAcceleration: true,
    /**
     * @prop {string} [x='bottom']
     * Where to anchor the X axis (`bottom` or `top`). AKA X offset origin.
     * Change this if your popper should grow in a direction different from `bottom`
     */
    x: 'bottom',
    /**
     * @prop {string} [x='left']
     * Where to anchor the Y axis (`left` or `right`). AKA Y offset origin.
     * Change this if your popper should grow in a direction different from `right`
     */
    y: 'right'
  },

  /**
   * Applies the computed styles to the popper element.
   *
   * All the DOM manipulations are limited to this modifier. This is useful in case
   * you want to integrate Popper.js inside a framework or view library and you
   * want to delegate all the DOM manipulations to it.
   *
   * Note that if you disable this modifier, you must make sure the popper element
   * has its position set to `absolute` before Popper.js can do its work!
   *
   * Just disable this modifier and define you own to achieve the desired effect.
   *
   * @memberof modifiers
   * @inner
   */
  applyStyle: {
    /** @prop {number} order=900 - Index used to define the order of execution */
    order: 900,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: applyStyle,
    /** @prop {Function} */
    onLoad: applyStyleOnLoad,
    /**
     * @deprecated since version 1.10.0, the property moved to `computeStyle` modifier
     * @prop {Boolean} gpuAcceleration=true
     * If true, it uses the CSS 3d transformation to position the popper.
     * Otherwise, it will use the `top` and `left` properties.
     */
    gpuAcceleration: undefined
  }
};

/**
 * The `dataObject` is an object containing all the informations used by Popper.js
 * this object get passed to modifiers and to the `onCreate` and `onUpdate` callbacks.
 * @name dataObject
 * @property {Object} data.instance The Popper.js instance
 * @property {String} data.placement Placement applied to popper
 * @property {String} data.originalPlacement Placement originally defined on init
 * @property {Boolean} data.flipped True if popper has been flipped by flip modifier
 * @property {Boolean} data.hide True if the reference element is out of boundaries, useful to know when to hide the popper.
 * @property {HTMLElement} data.arrowElement Node used as arrow by arrow modifier
 * @property {Object} data.styles Any CSS property defined here will be applied to the popper, it expects the JavaScript nomenclature (eg. `marginBottom`)
 * @property {Object} data.arrowStyles Any CSS property defined here will be applied to the popper arrow, it expects the JavaScript nomenclature (eg. `marginBottom`)
 * @property {Object} data.boundaries Offsets of the popper boundaries
 * @property {Object} data.offsets The measurements of popper, reference and arrow elements.
 * @property {Object} data.offsets.popper `top`, `left`, `width`, `height` values
 * @property {Object} data.offsets.reference `top`, `left`, `width`, `height` values
 * @property {Object} data.offsets.arrow] `top` and `left` offsets, only one of them will be different from 0
 */

/**
 * Default options provided to Popper.js constructor.<br />
 * These can be overriden using the `options` argument of Popper.js.<br />
 * To override an option, simply pass as 3rd argument an object with the same
 * structure of this object, example:
 * ```
 * new Popper(ref, pop, {
 *   modifiers: {
 *     preventOverflow: { enabled: false }
 *   }
 * })
 * ```
 * @type {Object}
 * @static
 * @memberof Popper
 */
var Defaults = {
  /**
   * Popper's placement
   * @prop {Popper.placements} placement='bottom'
   */
  placement: 'bottom',

  /**
   * Whether events (resize, scroll) are initially enabled
   * @prop {Boolean} eventsEnabled=true
   */
  eventsEnabled: true,

  /**
   * Set to true if you want to automatically remove the popper when
   * you call the `destroy` method.
   * @prop {Boolean} removeOnDestroy=false
   */
  removeOnDestroy: false,

  /**
   * Callback called when the popper is created.<br />
   * By default, is set to no-op.<br />
   * Access Popper.js instance with `data.instance`.
   * @prop {onCreate}
   */
  onCreate: function onCreate() {},

  /**
   * Callback called when the popper is updated, this callback is not called
   * on the initialization/creation of the popper, but only on subsequent
   * updates.<br />
   * By default, is set to no-op.<br />
   * Access Popper.js instance with `data.instance`.
   * @prop {onUpdate}
   */
  onUpdate: function onUpdate() {},

  /**
   * List of modifiers used to modify the offsets before they are applied to the popper.
   * They provide most of the functionalities of Popper.js
   * @prop {modifiers}
   */
  modifiers: modifiers
};

/**
 * @callback onCreate
 * @param {dataObject} data
 */

/**
 * @callback onUpdate
 * @param {dataObject} data
 */

// Utils
// Methods
var Popper = function () {
  /**
   * Create a new Popper.js instance
   * @class Popper
   * @param {HTMLElement|referenceObject} reference - The reference element used to position the popper
   * @param {HTMLElement} popper - The HTML element used as popper.
   * @param {Object} options - Your custom options to override the ones defined in [Defaults](#defaults)
   * @return {Object} instance - The generated Popper.js instance
   */
  function Popper(reference, popper) {
    var _this = this;

    var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    classCallCheck(this, Popper);

    this.scheduleUpdate = function () {
      return requestAnimationFrame(_this.update);
    };

    // make update() debounced, so that it only runs at most once-per-tick
    this.update = debounce(this.update.bind(this));

    // with {} we create a new object with the options inside it
    this.options = _extends({}, Popper.Defaults, options);

    // init state
    this.state = {
      isDestroyed: false,
      isCreated: false,
      scrollParents: []
    };

    // get reference and popper elements (allow jQuery wrappers)
    this.reference = reference && reference.jquery ? reference[0] : reference;
    this.popper = popper && popper.jquery ? popper[0] : popper;

    // Deep merge modifiers options
    this.options.modifiers = {};
    Object.keys(_extends({}, Popper.Defaults.modifiers, options.modifiers)).forEach(function (name) {
      _this.options.modifiers[name] = _extends({}, Popper.Defaults.modifiers[name] || {}, options.modifiers ? options.modifiers[name] : {});
    });

    // Refactoring modifiers' list (Object => Array)
    this.modifiers = Object.keys(this.options.modifiers).map(function (name) {
      return _extends({
        name: name
      }, _this.options.modifiers[name]);
    })
    // sort the modifiers by order
    .sort(function (a, b) {
      return a.order - b.order;
    });

    // modifiers have the ability to execute arbitrary code when Popper.js get inited
    // such code is executed in the same order of its modifier
    // they could add new properties to their options configuration
    // BE AWARE: don't add options to `options.modifiers.name` but to `modifierOptions`!
    this.modifiers.forEach(function (modifierOptions) {
      if (modifierOptions.enabled && isFunction(modifierOptions.onLoad)) {
        modifierOptions.onLoad(_this.reference, _this.popper, _this.options, modifierOptions, _this.state);
      }
    });

    // fire the first update to position the popper in the right place
    this.update();

    var eventsEnabled = this.options.eventsEnabled;
    if (eventsEnabled) {
      // setup event listeners, they will take care of update the position in specific situations
      this.enableEventListeners();
    }

    this.state.eventsEnabled = eventsEnabled;
  }

  // We can't use class properties because they don't get listed in the
  // class prototype and break stuff like Sinon stubs


  createClass(Popper, [{
    key: 'update',
    value: function update$$1() {
      return update.call(this);
    }
  }, {
    key: 'destroy',
    value: function destroy$$1() {
      return destroy.call(this);
    }
  }, {
    key: 'enableEventListeners',
    value: function enableEventListeners$$1() {
      return enableEventListeners.call(this);
    }
  }, {
    key: 'disableEventListeners',
    value: function disableEventListeners$$1() {
      return disableEventListeners.call(this);
    }

    /**
     * Schedule an update, it will run on the next UI update available
     * @method scheduleUpdate
     * @memberof Popper
     */


    /**
     * Collection of utilities useful when writing custom modifiers.
     * Starting from version 1.7, this method is available only if you
     * include `popper-utils.js` before `popper.js`.
     *
     * **DEPRECATION**: This way to access PopperUtils is deprecated
     * and will be removed in v2! Use the PopperUtils module directly instead.
     * Due to the high instability of the methods contained in Utils, we can't
     * guarantee them to follow semver. Use them at your own risk!
     * @static
     * @private
     * @type {Object}
     * @deprecated since version 1.8
     * @member Utils
     * @memberof Popper
     */

  }]);
  return Popper;
}();

/**
 * The `referenceObject` is an object that provides an interface compatible with Popper.js
 * and lets you use it as replacement of a real DOM node.<br />
 * You can use this method to position a popper relatively to a set of coordinates
 * in case you don't have a DOM node to use as reference.
 *
 * ```
 * new Popper(referenceObject, popperNode);
 * ```
 *
 * NB: This feature isn't supported in Internet Explorer 10
 * @name referenceObject
 * @property {Function} data.getBoundingClientRect
 * A function that returns a set of coordinates compatible with the native `getBoundingClientRect` method.
 * @property {number} data.clientWidth
 * An ES6 getter that will return the width of the virtual reference element.
 * @property {number} data.clientHeight
 * An ES6 getter that will return the height of the virtual reference element.
 */


Popper.Utils = (typeof window !== 'undefined' ? window : global).PopperUtils;
Popper.placements = placements;
Popper.Defaults = Defaults;

/* harmony default export */ __webpack_exports__["default"] = (Popper);
//# sourceMappingURL=popper.js.map

/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(10)))

/***/ }),
/* 10 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1,eval)("this");
} catch(e) {
	// This works if the window reference is available
	if(typeof window === "object")
		g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map