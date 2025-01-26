'use strict';

var obsidian = require('obsidian');

var _documentCurrentScript = typeof document !== 'undefined' ? document.currentScript : null;
/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise, SuppressedError, Symbol */


function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

typeof SuppressedError === "function" ? SuppressedError : function (error, suppressed, message) {
    var e = new Error(message);
    return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
};

var commands$3 = {
	"Format Document": "Dokument formatieren"
};
var editorMenu$3 = {
	"Format Document": "Dokument formatieren"
};
var noticeMessages$3 = {
	"Document Formatted!": "",
	"Document is already formatted!": "",
	"No open document is found.": "",
	"You can only format in editing mode.": "",
	"Please enter a valid number.\nIt must be at least 0.": "",
	"Please enter a valid number.\nIt must be a whole number.": ""
};
var optionWarnings$3 = {
	"Gap value must be a whole number and it needs to be at least 0.": ""
};
var placeholders$3 = {
	"(Default)": ""
};
var optionSections$3 = {
	"Heading gaps": "",
	"Other gaps": "",
	"Format options": "",
	"Other options": ""
};
var headingGaps$3 = {
	"Before top-level headings": "",
	"Decides the gap before a top-level heading.": "",
	"Before the first sub-level heading": "",
	"Decides the child heading gap right after a parent heading.": "",
	"Before sub-level headings": "",
	"Decides gaps before headings that are not top-level.": ""
};
var otherGaps$3 = {
	"After properties": "",
	"Decides the gap after a property section.": "",
	"Before contents": "",
	"Decides gaps before content sections. (ex: Text before headings)": "",
	"Before contents after code blocks": "",
	"Decides gaps before \"contents that are after code blocks.\"": "",
	"Before code blocks": "",
	"Decides gaps before code blocks.": "",
	"Before code blocks after headings": "",
	"Decides gaps before \"code blocks that are after headings.\"": ""
};
var formatOptions$3 = {
	"Newline at the end of a document": "",
	"Inserts a newline at the end of a document.": ""
};
var otherOptions$3 = {
	"Notify when no change is needed": "",
	"Displays a different message when no change is needed.": "",
	"More detailed error message": "",
	"Displays additional information when parsing fails.": "",
	"Format documents on modification": "",
	"Automatically format documents after each modification. Triggers on save and autosave.": ""
};
var wasm$4 = {
	parsing: {
		"Failed to parse the document. [Line: {LINE_NUMBER}]": "",
		"Failed to parse the document.": ""
	},
	formatting: {
		"Failed to read options. Some of them are possibly not positive number values.": ""
	}
};
var de = {
	commands: commands$3,
	editorMenu: editorMenu$3,
	noticeMessages: noticeMessages$3,
	optionWarnings: optionWarnings$3,
	placeholders: placeholders$3,
	optionSections: optionSections$3,
	headingGaps: headingGaps$3,
	otherGaps: otherGaps$3,
	formatOptions: formatOptions$3,
	otherOptions: otherOptions$3,
	wasm: wasm$4
};

var commands$2 = {
	"Format Document": "Format Document"
};
var editorMenu$2 = {
	"Format Document": "Format Document"
};
var noticeMessages$2 = {
	"Document Formatted!": "Document Formatted!",
	"Document is already formatted!": "Document is already formatted!",
	"No open document is found.": "No open document is found.",
	"You can only format in editing mode.": "You can only format in editing mode.",
	"Please enter a valid number.\nIt must be at least 0.": "Please enter a valid number.\nIt must be at least 0.",
	"Please enter a valid number.\nIt must be a whole number.": "Please enter a valid number.\nIt must be a whole number."
};
var optionWarnings$2 = {
	"Gap value must be a whole number and it needs to be at least 0.": "Gap value must be a whole number and it needs to be at least 0."
};
var placeholders$2 = {
	"(Default)": "(Default)"
};
var optionSections$2 = {
	"Heading gaps": "Heading gaps",
	"Other gaps": "Other gaps",
	"Format options": "Format options",
	"Other options": "Other options"
};
var headingGaps$2 = {
	"Before top-level headings": "Before top-level headings",
	"Decides the gap before a top-level heading.": "Decides the gap before a top-level heading.",
	"Before the first sub-level heading": "Before the first sub-level heading",
	"Decides the child heading gap right after a parent heading.": "Decides the child heading gap right after a parent heading.",
	"Before sub-level headings": "Before sub-level headings",
	"Decides gaps before headings that are not top-level.": "Decides gaps before headings that are not top-level."
};
var otherGaps$2 = {
	"After properties": "After properties",
	"Decides the gap after a property section.": "Decides the gap after a property section.",
	"Before contents": "Before contents",
	"Decides gaps before content sections. (ex: Text before headings)": "Decides gaps before content sections. (ex: Text before headings)",
	"Before contents after code blocks": "Before contents after code blocks",
	"Decides gaps before \"contents that are after code blocks.\"": "Decides gaps before \"contents that are after code blocks.\"",
	"Before code blocks": "Before code blocks",
	"Decides gaps before code blocks.": "Decides gaps before code blocks.",
	"Before code blocks after headings": "Before code blocks after headings",
	"Decides gaps before \"code blocks that are after headings.\"": "Decides gaps before \"code blocks that are after headings.\""
};
var formatOptions$2 = {
	"Newline at the end of a document": "Newline at the end of a document",
	"Inserts a newline at the end of a document.": "Inserts a newline at the end of a document."
};
var otherOptions$2 = {
	"Notify when no change is needed": "Notify when no change is needed",
	"Displays a different message when no change is needed.": "Displays a different message when no change is needed.",
	"More detailed error message": "More detailed error message",
	"Displays additional information when parsing fails.": "Displays additional information when parsing fails.",
	"Format documents on modification": "Format documents on modification",
	"Automatically format documents after each modification. Triggers on save and autosave.": "Automatically format documents after each modification. Triggers on save and autosave."
};
var wasm$3 = {
	parsing: {
		"Failed to parse the document. [Line: {LINE_NUMBER}]": "Failed to parse the document. [Line: {LINE_NUMBER}]",
		"Failed to parse the document.": "Failed to parse the document."
	},
	formatting: {
		"Failed to read options. Some of them are possibly not positive number values.": "Failed to read options. Some of them are possibly not positive number values."
	}
};
var en = {
	commands: commands$2,
	editorMenu: editorMenu$2,
	noticeMessages: noticeMessages$2,
	optionWarnings: optionWarnings$2,
	placeholders: placeholders$2,
	optionSections: optionSections$2,
	headingGaps: headingGaps$2,
	otherGaps: otherGaps$2,
	formatOptions: formatOptions$2,
	otherOptions: otherOptions$2,
	wasm: wasm$3
};

var commands$1 = {
	"Format Document": "Dokumentum formázása"
};
var editorMenu$1 = {
	"Format Document": "Dokumentum formázása"
};
var noticeMessages$1 = {
	"Document Formatted!": "A dokumentum meg lett formázva!",
	"Document is already formatted!": "A dokumentum már meg van formázva!",
	"No open document is found.": "Nem található megnyitott dokumentum.",
	"You can only format in editing mode.": "A formázás csakis a szerkesztői módban lehetséges. ",
	"Please enter a valid number.\nIt must be at least 0.": "Kérlek egy megfelelő számot írjál be.\nLegalább 0 legyen.",
	"Please enter a valid number.\nIt must be a whole number.": "Kérlek egy megfelelő számot írjál be.\nEgész szám legyen."
};
var optionWarnings$1 = {
	"Gap value must be a whole number and it needs to be at least 0.": ""
};
var placeholders$1 = {
	"(Default)": "(Alapértelmezett)"
};
var optionSections$1 = {
	"Heading gaps": "Fejléc hézagok",
	"Other gaps": "Egyéb hézagok",
	"Format options": "Formázási opciók",
	"Other options": "Egyéb opciók"
};
var headingGaps$1 = {
	"Before top-level headings": "",
	"Decides the gap before a top-level heading.": "",
	"Before the first sub-level heading": "",
	"Decides the child heading gap right after a parent heading.": "",
	"Before sub-level headings": "",
	"Decides gaps before headings that are not top-level.": ""
};
var otherGaps$1 = {
	"After properties": "Tulajdonságok után",
	"Decides the gap after a property section.": "Meghatározza a hézagot a tulajdonságok szekció után.",
	"Before contents": "Tartalmak előtt",
	"Decides gaps before content sections. (ex: Text before headings)": "",
	"Before contents after code blocks": "Tartalmak előtti kód részek",
	"Decides gaps before \"contents that are after code blocks.\"": "Meghatározza azon tartalmi hézagokat, melyek kód részek előtt vannak.",
	"Before code blocks": "Kód részek előtt",
	"Decides gaps before code blocks.": "Meghatározza a hézagot kód részek előtt.",
	"Before code blocks after headings": "Kód részek előtt, a címsorok előtt",
	"Decides gaps before \"code blocks that are after headings.\"": "Meghatározza azon kód részi hézagokat, melyek címsorok után vannak."
};
var formatOptions$1 = {
	"Newline at the end of a document": "Új sor a dokumentum végére.",
	"Inserts a newline at the end of a document.": "Beszúr egy új sort a dokumentum végére."
};
var otherOptions$1 = {
	"Notify when no change is needed": "Értesítsen, hogyha nem szükséges változás",
	"Displays a different message when no change is needed.": "Eltérő üzenetet mutat, hogyha nem történt változás",
	"More detailed error message": "Mutasson részletesebb hiba üzeneteket",
	"Displays additional information when parsing fails.": "Plusz információt mutat, amikor az átírás közben hiba történik.",
	"Format documents on modification": "",
	"Automatically format documents after each modification. Triggers on save and autosave.": ""
};
var wasm$2 = {
	parsing: {
		"Failed to parse the document. [Line: {LINE_NUMBER}]": "",
		"Failed to parse the document.": ""
	},
	formatting: {
		"Failed to read options. Some of them are possibly not positive number values.": ""
	}
};
var hu = {
	commands: commands$1,
	editorMenu: editorMenu$1,
	noticeMessages: noticeMessages$1,
	optionWarnings: optionWarnings$1,
	placeholders: placeholders$1,
	optionSections: optionSections$1,
	headingGaps: headingGaps$1,
	otherGaps: otherGaps$1,
	formatOptions: formatOptions$1,
	otherOptions: otherOptions$1,
	wasm: wasm$2
};

var commands = {
	"Format Document": "문서 포맷하기"
};
var editorMenu = {
	"Format Document": "문서 포맷하기"
};
var noticeMessages = {
	"Document Formatted!": "포맷 완료!",
	"Document is already formatted!": "문서가 이미 포맷돼 있습니다.",
	"No open document is found.": "열려 있는 문서를 찾지 못했습니다.",
	"You can only format in editing mode.": "편집 모드에서만 포맷할 수 있습니다.",
	"Please enter a valid number.\nIt must be at least 0.": "유효한 숫자를 입력해주세요.\n0 이상만 입력할 수 있습니다.",
	"Please enter a valid number.\nIt must be a whole number.": "유효한 숫자를 입력해주세요.\n자연수만 입력할 수 있습니다."
};
var optionWarnings = {
	"Gap value must be a whole number and it needs to be at least 0.": "여백 옵션의 값은 반드시 자연수이고 0 이상이어야 합니다."
};
var placeholders = {
	"(Default)": "(기본값)"
};
var optionSections = {
	"Heading gaps": "제목 여백",
	"Other gaps": "기타 여백",
	"Format options": "포맷 옵션",
	"Other options": "기타 옵션"
};
var headingGaps = {
	"Before top-level headings": "최상위 제목 앞",
	"Decides the gap before a top-level heading.": "최상위 제목들의 앞 여백을 결정합니다.",
	"Before the first sub-level heading": "첫 번째 하위 제목 앞",
	"Decides the child heading gap right after a parent heading.": "부모 제목 바로 뒤 자식 제목의 여백을 결정합니다.",
	"Before sub-level headings": "하위 제목 앞",
	"Decides gaps before headings that are not top-level.": "최상위 제목이 아닌 제목들의 앞 여백을 결정합니다."
};
var otherGaps = {
	"After properties": "속성 영역 뒤",
	"Decides the gap after a property section.": "속성 영역 뒤 여백을 결정합니다.",
	"Before contents": "내용 영역 앞",
	"Decides gaps before content sections. (ex: Text before headings)": "내용 영역의 앞 여백을 결정합니다. (예: 제목 앞 텍스트)",
	"Before contents after code blocks": "코드 블럭 뒤 내용 영역 앞",
	"Decides gaps before \"contents that are after code blocks.\"": "\"코드 블럭 뒤 내용 영역\"의 앞 여백을 결정합니다.",
	"Before code blocks": "코드 블럭 앞",
	"Decides gaps before code blocks.": "코드 블럭의 앞 여백을 결정합니다.",
	"Before code blocks after headings": "제목 뒤 코드 블럭 앞",
	"Decides gaps before \"code blocks that are after headings.\"": "\"제목 뒤 코드 블럭\"의 앞 여백을 결정합니다."
};
var formatOptions = {
	"Newline at the end of a document": "문서 끝 새 줄",
	"Inserts a newline at the end of a document.": "문서 끝에 새 줄을 추가합니다."
};
var otherOptions = {
	"Notify when no change is needed": "변경사항이 없을 때 알려주기",
	"Displays a different message when no change is needed.": "변경할 사항이 없으면 다른 메세지를 표시합니다.",
	"More detailed error message": "더 자세한 에러 메세지",
	"Displays additional information when parsing fails.": "문서를 읽지 못했을 때 추가 정보를 표시합니다.",
	"Format documents on modification": "수정 시 문서 포맷하기",
	"Automatically format documents after each modification. Triggers on save and autosave.": "매 수정 마다 문서를 자동으로 포맷합니다. 저장 및 자동 저장 시 활성화됩니다."
};
var wasm$1 = {
	parsing: {
		"Failed to parse the document. [Line: {LINE_NUMBER}]": "문서를 읽지 못했습니다. [줄: {LINE_NUMBER}]",
		"Failed to parse the document.": "문서를 읽지 못했습니다."
	},
	formatting: {
		"Failed to read options. Some of them are possibly not positive number values.": "설정을 읽지 못했습니다. 양수가 아닌 값이 있을수도 있습니다."
	}
};
var ko = {
	commands: commands,
	editorMenu: editorMenu,
	noticeMessages: noticeMessages,
	optionWarnings: optionWarnings,
	placeholders: placeholders,
	optionSections: optionSections,
	headingGaps: headingGaps,
	otherGaps: otherGaps,
	formatOptions: formatOptions,
	otherOptions: otherOptions,
	wasm: wasm$1
};

const detectedLanguage = window.localStorage.getItem("language");
const LOCALE_CATEGORY = {
    COMMANDS: "commands",
    EDITOR_MENU: "editorMenu",
    NOTICE_MESSAGES: "noticeMessages",
    OPTION_WARNINGS: "optionWarnings",
    PLACEHOLDERS: "placeholders",
    OPTION_SECTIONS: "optionSections",
    HEADING_GAPS: "headingGaps",
    OTHER_GAPS: "otherGaps",
    FORMAT_OPTIONS: "formatOptions",
    OTHER_OPTIONS: "otherOptions",
};
const locales = {
    en: en,
    de: de,
    hu: hu,
    ko: ko,
};
/** @example getLocale(LOCALE_CATEGORY.COMMANDS, "Format Document") */
const getLocale = (category, key) => {
    var _a;
    const usingLocale = (_a = locales[detectedLanguage]) !== null && _a !== void 0 ? _a : locales.en;
    const message = usingLocale[category][key];
    if (message === "") {
        const usingLocale = locales.en;
        return usingLocale[category][key];
    }
    return usingLocale[category][key];
};
/** Returns the "wasm" object in the locale file. */
const getWasmLocale = () => {
    var _a;
    const usingLocale = (_a = locales[detectedLanguage]) !== null && _a !== void 0 ? _a : locales.en;
    return usingLocale.wasm;
};

class FormattoCommands {
    constructor(plugin) {
        this.plugin = plugin;
    }
    registerCommands() {
        this.getCommandsArr().forEach((item) => {
            this.plugin.addCommand(item);
        });
    }
    getCommandsArr() {
        return [
            {
                id: "formatto-logo",
                name: getLocale(LOCALE_CATEGORY.COMMANDS, "Format Document"),
                icon: "formatto-logo",
                editorCallback: (editor) => {
                    this.plugin.utils.formatDocument(editor);
                },
            },
        ];
    }
}

var formattoLogo = "<svg class=\"formatto__custom-icons\" viewBox=\"0 0 16 16\" xmlns=\"http://www.w3.org/2000/svg\">\n<rect x=\"2\" y=\"2\" width=\"6.65444\" height=\"3.02\" rx=\"0.5\" />\n<rect x=\"2\" y=\"6.31047\" width=\"12.0693\" height=\"3.44838\" rx=\"0.5\" />\n<rect x=\"10.621\" y=\"2\" width=\"3.44838\" height=\"6.03466\" rx=\"0.5\" />\n<rect x=\"2.03467\" y=\"11\" width=\"6.98996\" height=\"3.01966\" rx=\"0.5\" />\n</svg>";

class FormattoIcons {
    constructor() {
        this.icons = [{ iconId: "formatto-logo", svg: formattoLogo }];
        this.registerIcons = () => {
            this.icons.forEach(({ iconId, svg }) => {
                obsidian.addIcon(iconId, svg);
            });
        };
    }
}

class FormattoRibbonIcons {
    constructor(plugin) {
        this.registerRibbonIcons = () => {
            this.plugin.addRibbonIcon("formatto-logo", "Format Document", () => {
                var _a;
                const editor = (_a = this.plugin.app.workspace.activeEditor) === null || _a === void 0 ? void 0 : _a.editor;
                const activeView = this.plugin.app.workspace.getActiveViewOfType(obsidian.MarkdownView);
                if (!editor) {
                    new obsidian.Notice(getLocale(LOCALE_CATEGORY.NOTICE_MESSAGES, "No open document is found."));
                    return;
                }
                if (activeView.getMode() !== "source") {
                    new obsidian.Notice(getLocale(LOCALE_CATEGORY.NOTICE_MESSAGES, "You can only format in editing mode."));
                    return;
                }
                this.plugin.utils.formatDocument(editor);
            });
        };
        this.plugin = plugin;
    }
}

let wasm;

let WASM_VECTOR_LEN = 0;

let cachedUint8ArrayMemory0 = null;

function getUint8ArrayMemory0() {
    if (cachedUint8ArrayMemory0 === null || cachedUint8ArrayMemory0.byteLength === 0) {
        cachedUint8ArrayMemory0 = new Uint8Array(wasm.memory.buffer);
    }
    return cachedUint8ArrayMemory0;
}

const cachedTextEncoder = (typeof TextEncoder !== 'undefined' ? new TextEncoder('utf-8') : { encode: () => { throw Error('TextEncoder not available') } } );

const encodeString = (typeof cachedTextEncoder.encodeInto === 'function'
    ? function (arg, view) {
    return cachedTextEncoder.encodeInto(arg, view);
}
    : function (arg, view) {
    const buf = cachedTextEncoder.encode(arg);
    view.set(buf);
    return {
        read: arg.length,
        written: buf.length
    };
});

function passStringToWasm0(arg, malloc, realloc) {

    if (realloc === undefined) {
        const buf = cachedTextEncoder.encode(arg);
        const ptr = malloc(buf.length, 1) >>> 0;
        getUint8ArrayMemory0().subarray(ptr, ptr + buf.length).set(buf);
        WASM_VECTOR_LEN = buf.length;
        return ptr;
    }

    let len = arg.length;
    let ptr = malloc(len, 1) >>> 0;

    const mem = getUint8ArrayMemory0();

    let offset = 0;

    for (; offset < len; offset++) {
        const code = arg.charCodeAt(offset);
        if (code > 0x7F) break;
        mem[ptr + offset] = code;
    }

    if (offset !== len) {
        if (offset !== 0) {
            arg = arg.slice(offset);
        }
        ptr = realloc(ptr, len, len = offset + arg.length * 3, 1) >>> 0;
        const view = getUint8ArrayMemory0().subarray(ptr + offset, ptr + len);
        const ret = encodeString(arg, view);

        offset += ret.written;
        ptr = realloc(ptr, len, offset, 1) >>> 0;
    }

    WASM_VECTOR_LEN = offset;
    return ptr;
}

function isLikeNone(x) {
    return x === undefined || x === null;
}

let cachedDataViewMemory0 = null;

function getDataViewMemory0() {
    if (cachedDataViewMemory0 === null || cachedDataViewMemory0.buffer.detached === true || (cachedDataViewMemory0.buffer.detached === undefined && cachedDataViewMemory0.buffer !== wasm.memory.buffer)) {
        cachedDataViewMemory0 = new DataView(wasm.memory.buffer);
    }
    return cachedDataViewMemory0;
}

const cachedTextDecoder = (typeof TextDecoder !== 'undefined' ? new TextDecoder('utf-8', { ignoreBOM: true, fatal: true }) : { decode: () => { throw Error('TextDecoder not available') } } );

if (typeof TextDecoder !== 'undefined') { cachedTextDecoder.decode(); }
function getStringFromWasm0(ptr, len) {
    ptr = ptr >>> 0;
    return cachedTextDecoder.decode(getUint8ArrayMemory0().subarray(ptr, ptr + len));
}

function debugString(val) {
    // primitive types
    const type = typeof val;
    if (type == 'number' || type == 'boolean' || val == null) {
        return  `${val}`;
    }
    if (type == 'string') {
        return `"${val}"`;
    }
    if (type == 'symbol') {
        const description = val.description;
        if (description == null) {
            return 'Symbol';
        } else {
            return `Symbol(${description})`;
        }
    }
    if (type == 'function') {
        const name = val.name;
        if (typeof name == 'string' && name.length > 0) {
            return `Function(${name})`;
        } else {
            return 'Function';
        }
    }
    // objects
    if (Array.isArray(val)) {
        const length = val.length;
        let debug = '[';
        if (length > 0) {
            debug += debugString(val[0]);
        }
        for(let i = 1; i < length; i++) {
            debug += ', ' + debugString(val[i]);
        }
        debug += ']';
        return debug;
    }
    // Test for built-in
    const builtInMatches = /\[object ([^\]]+)\]/.exec(toString.call(val));
    let className;
    if (builtInMatches.length > 1) {
        className = builtInMatches[1];
    } else {
        // Failed to match the standard '[object ClassName]'
        return toString.call(val);
    }
    if (className == 'Object') {
        // we're a user defined class or Object
        // JSON.stringify avoids problems with cycles, and is generally much
        // easier than looping through ownProperties of `val`.
        try {
            return 'Object(' + JSON.stringify(val) + ')';
        } catch (_) {
            return 'Object';
        }
    }
    // errors
    if (val instanceof Error) {
        return `${val.name}: ${val.message}\n${val.stack}`;
    }
    // TODO we could test for more things here, like `Set`s and `Map`s.
    return className;
}
/**
 * This function will be called from the TypeScript side.
 * @param {string} input
 * @param {any} js_options
 * @param {any} js_locales
 * @returns {string}
 */
function format_document(input, js_options, js_locales) {
    let deferred2_0;
    let deferred2_1;
    try {
        const ptr0 = passStringToWasm0(input, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len0 = WASM_VECTOR_LEN;
        const ret = wasm.format_document(ptr0, len0, js_options, js_locales);
        deferred2_0 = ret[0];
        deferred2_1 = ret[1];
        return getStringFromWasm0(ret[0], ret[1]);
    } finally {
        wasm.__wbindgen_free(deferred2_0, deferred2_1, 1);
    }
}

async function __wbg_load(module, imports) {
    if (typeof Response === 'function' && module instanceof Response) {
        if (typeof WebAssembly.instantiateStreaming === 'function') {
            try {
                return await WebAssembly.instantiateStreaming(module, imports);

            } catch (e) {
                if (module.headers.get('Content-Type') != 'application/wasm') {
                    console.warn("`WebAssembly.instantiateStreaming` failed because your server does not serve Wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n", e);

                } else {
                    throw e;
                }
            }
        }

        const bytes = await module.arrayBuffer();
        return await WebAssembly.instantiate(bytes, imports);

    } else {
        const instance = await WebAssembly.instantiate(module, imports);

        if (instance instanceof WebAssembly.Instance) {
            return { instance, module };

        } else {
            return instance;
        }
    }
}

function __wbg_get_imports() {
    const imports = {};
    imports.wbg = {};
    imports.wbg.__wbindgen_string_get = function(arg0, arg1) {
        const obj = arg1;
        const ret = typeof(obj) === 'string' ? obj : undefined;
        var ptr1 = isLikeNone(ret) ? 0 : passStringToWasm0(ret, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        var len1 = WASM_VECTOR_LEN;
        getDataViewMemory0().setInt32(arg0 + 4 * 1, len1, true);
        getDataViewMemory0().setInt32(arg0 + 4 * 0, ptr1, true);
    };
    imports.wbg.__wbindgen_is_undefined = function(arg0) {
        const ret = arg0 === undefined;
        return ret;
    };
    imports.wbg.__wbindgen_in = function(arg0, arg1) {
        const ret = arg0 in arg1;
        return ret;
    };
    imports.wbg.__wbindgen_boolean_get = function(arg0) {
        const v = arg0;
        const ret = typeof(v) === 'boolean' ? (v ? 1 : 0) : 2;
        return ret;
    };
    imports.wbg.__wbindgen_is_object = function(arg0) {
        const val = arg0;
        const ret = typeof(val) === 'object' && val !== null;
        return ret;
    };
    imports.wbg.__wbg_error_e3b167625ccbfb6a = function(arg0, arg1) {
        console.error(getStringFromWasm0(arg0, arg1));
    };
    imports.wbg.__wbindgen_jsval_loose_eq = function(arg0, arg1) {
        const ret = arg0 == arg1;
        return ret;
    };
    imports.wbg.__wbindgen_number_get = function(arg0, arg1) {
        const obj = arg1;
        const ret = typeof(obj) === 'number' ? obj : undefined;
        getDataViewMemory0().setFloat64(arg0 + 8 * 1, isLikeNone(ret) ? 0 : ret, true);
        getDataViewMemory0().setInt32(arg0 + 4 * 0, !isLikeNone(ret), true);
    };
    imports.wbg.__wbg_String_b9412f8799faab3e = function(arg0, arg1) {
        const ret = String(arg1);
        const ptr1 = passStringToWasm0(ret, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len1 = WASM_VECTOR_LEN;
        getDataViewMemory0().setInt32(arg0 + 4 * 1, len1, true);
        getDataViewMemory0().setInt32(arg0 + 4 * 0, ptr1, true);
    };
    imports.wbg.__wbindgen_error_new = function(arg0, arg1) {
        const ret = new Error(getStringFromWasm0(arg0, arg1));
        return ret;
    };
    imports.wbg.__wbindgen_string_new = function(arg0, arg1) {
        const ret = getStringFromWasm0(arg0, arg1);
        return ret;
    };
    imports.wbg.__wbg_getwithrefkey_edc2c8960f0f1191 = function(arg0, arg1) {
        const ret = arg0[arg1];
        return ret;
    };
    imports.wbg.__wbg_instanceof_ArrayBuffer_74945570b4a62ec7 = function(arg0) {
        let result;
        try {
            result = arg0 instanceof ArrayBuffer;
        } catch (_) {
            result = false;
        }
        const ret = result;
        return ret;
    };
    imports.wbg.__wbg_buffer_ccaed51a635d8a2d = function(arg0) {
        const ret = arg0.buffer;
        return ret;
    };
    imports.wbg.__wbg_new_fec2611eb9180f95 = function(arg0) {
        const ret = new Uint8Array(arg0);
        return ret;
    };
    imports.wbg.__wbg_set_ec2fcf81bc573fd9 = function(arg0, arg1, arg2) {
        arg0.set(arg1, arg2 >>> 0);
    };
    imports.wbg.__wbg_length_9254c4bd3b9f23c4 = function(arg0) {
        const ret = arg0.length;
        return ret;
    };
    imports.wbg.__wbg_instanceof_Uint8Array_df0761410414ef36 = function(arg0) {
        let result;
        try {
            result = arg0 instanceof Uint8Array;
        } catch (_) {
            result = false;
        }
        const ret = result;
        return ret;
    };
    imports.wbg.__wbindgen_debug_string = function(arg0, arg1) {
        const ret = debugString(arg1);
        const ptr1 = passStringToWasm0(ret, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len1 = WASM_VECTOR_LEN;
        getDataViewMemory0().setInt32(arg0 + 4 * 1, len1, true);
        getDataViewMemory0().setInt32(arg0 + 4 * 0, ptr1, true);
    };
    imports.wbg.__wbindgen_throw = function(arg0, arg1) {
        throw new Error(getStringFromWasm0(arg0, arg1));
    };
    imports.wbg.__wbindgen_memory = function() {
        const ret = wasm.memory;
        return ret;
    };
    imports.wbg.__wbindgen_init_externref_table = function() {
        const table = wasm.__wbindgen_export_2;
        const offset = table.grow(4);
        table.set(0, undefined);
        table.set(offset + 0, undefined);
        table.set(offset + 1, null);
        table.set(offset + 2, true);
        table.set(offset + 3, false);
    };

    return imports;
}

function __wbg_finalize_init(instance, module) {
    wasm = instance.exports;
    __wbg_init.__wbindgen_wasm_module = module;
    cachedDataViewMemory0 = null;
    cachedUint8ArrayMemory0 = null;


    wasm.__wbindgen_start();
    return wasm;
}

async function __wbg_init(module_or_path) {
    if (wasm !== undefined) return wasm;


    if (typeof module_or_path !== 'undefined') {
        if (Object.getPrototypeOf(module_or_path) === Object.prototype) {
            ({module_or_path} = module_or_path);
        } else {
            console.warn('using deprecated parameters for the initialization function; pass a single object instead');
        }
    }

    if (typeof module_or_path === 'undefined') {
        module_or_path = new URL('formatto_wasm_bg.wasm', (typeof document === 'undefined' ? require('u' + 'rl').pathToFileURL(__filename).href : (_documentCurrentScript && _documentCurrentScript.tagName.toUpperCase() === 'SCRIPT' && _documentCurrentScript.src || new URL('main.js', document.baseURI).href)));
    }
    const imports = __wbg_get_imports();

    if (typeof module_or_path === 'string' || (typeof Request === 'function' && module_or_path instanceof Request) || (typeof URL === 'function' && module_or_path instanceof URL)) {
        module_or_path = fetch(module_or_path);
    }

    const { instance, module } = await __wbg_load(await module_or_path, imports);

    return __wbg_finalize_init(instance, module);
}

/*
  Type Declarations
*/
/*
  Fallback Option Values
*/
const FALLBACK_HEADING_GAPS = {
    beforeTopLevelHeadings: "3",
    beforeFirstSubHeading: "1",
    beforeSubHeadings: "2",
};
const FALLBACK_OTHER_GAPS = {
    afterProperties: "2",
    beforeContents: "0",
    beforeContentsAfterCodeBlocks: "1",
    beforeCodeBlocks: "1",
    beforeCodeBlocksAfterHeadings: "0",
};
const FALLBACK_FORMAT_OPTIONS = {
    insertNewline: true,
};
const FALLBACK_OTHER_OPTIONS = {
    notifyWhenUnchanged: true,
    showMoreDetailedErrorMessages: false,
    formatOnSave: false,
};
const FALLBACK_OPTIONS = {
    headingGaps: FALLBACK_HEADING_GAPS,
    otherGaps: FALLBACK_OTHER_GAPS,
    formatOptions: FALLBACK_FORMAT_OPTIONS,
    otherOptions: FALLBACK_OTHER_OPTIONS,
};
/*
  Default Option Values
*/
const EMPTY_HEADING_GAPS = {
    beforeTopLevelHeadings: "",
    beforeFirstSubHeading: "",
    beforeSubHeadings: "",
};
const EMPTY_OTHER_GAPS = {
    afterProperties: "",
    beforeContents: "",
    beforeContentsAfterCodeBlocks: "",
    beforeCodeBlocks: "",
    beforeCodeBlocksAfterHeadings: "",
};
const DEFAULT_OPTIONS = {
    headingGaps: EMPTY_HEADING_GAPS,
    otherGaps: EMPTY_OTHER_GAPS,
    formatOptions: FALLBACK_FORMAT_OPTIONS,
    otherOptions: FALLBACK_OTHER_OPTIONS,
};

class FormattoUtils {
    constructor(plugin) {
        this.plugin = plugin;
    }
    formatDocument(editor) {
        const copiedOptions = JSON.parse(JSON.stringify(this.plugin.settings));
        this.handleEmptyOptions(copiedOptions);
        this.cursorPosition = editor.getCursor();
        this.originalDocument = editor.getValue();
        try {
            this.formattedDocument = format_document(this.originalDocument, copiedOptions, JSON.stringify(getWasmLocale()));
            this.displayMessage();
        }
        catch (error) {
            new obsidian.Notice(error);
        }
        if (!this.formattedDocument)
            return;
        if (this.formattedDocument !== this.originalDocument) {
            editor.setValue(this.formattedDocument);
            editor.setSelection(this.cursorPosition, this.cursorPosition);
        }
        this.clearVariables();
    }
    formatText(data) {
        const copiedOptions = JSON.parse(JSON.stringify(this.plugin.settings));
        this.handleEmptyOptions(copiedOptions);
        this.originalDocument = data;
        try {
            this.formattedDocument = format_document(this.originalDocument, copiedOptions, JSON.stringify(getWasmLocale()));
            return this.formattedDocument;
        }
        catch (error) {
            new obsidian.Notice(error);
        }
        finally {
            this.clearVariables();
        }
    }
    displayMessage() {
        if (this.plugin.settings.otherOptions.notifyWhenUnchanged &&
            this.formattedDocument === this.originalDocument) {
            new obsidian.Notice(getLocale(LOCALE_CATEGORY.NOTICE_MESSAGES, "Document is already formatted!"));
        }
        else {
            new obsidian.Notice(getLocale(LOCALE_CATEGORY.NOTICE_MESSAGES, "Document Formatted!"));
        }
    }
    handleEmptyOptions(copiedOptions) {
        for (const sectionKey of Object.keys(copiedOptions)) {
            for (const optionKey of Object.keys(copiedOptions[sectionKey])) {
                if (copiedOptions[sectionKey][optionKey] === "") {
                    copiedOptions[sectionKey][optionKey] =
                        FALLBACK_OPTIONS[sectionKey][optionKey];
                }
            }
        }
    }
    clearVariables() {
        this.cursorPosition = undefined;
        this.originalDocument = undefined;
        this.formattedDocument = undefined;
    }
}

class FormattoEditorMenuEvent {
    constructor(plugin) {
        this.plugin = plugin;
    }
    registerEvents() {
        this.getEventsArr().forEach((item) => {
            this.plugin.registerEvent(item);
        });
    }
    getEventsArr() {
        return [
            this.plugin.app.workspace.on("editor-menu", (menu, editor) => {
                menu.addItem((item) => item
                    .setTitle(getLocale(LOCALE_CATEGORY.EDITOR_MENU, "Format Document"))
                    .setIcon("formatto-logo")
                    .onClick(() => {
                    this.plugin.utils.formatDocument(editor);
                }));
            }),
        ];
    }
}

class FormattoModifyEvent {
    constructor(plugin) {
        this.timer = null;
        this.timerDelay = 2000;
        this.plugin = plugin;
    }
    registerEvents() {
        this.getEventsArr().forEach((item) => {
            this.plugin.registerEvent(item);
        });
    }
    getEventsArr() {
        return [
            this.plugin.app.vault.on("modify", (file) => {
                this.timer = setTimeout(() => {
                    if (this.plugin.settings.otherOptions.formatOnSave &&
                        file instanceof obsidian.TFile &&
                        file.extension === "md") {
                        this.plugin.app.vault.process(file, (data) => {
                            return this.plugin.utils.formatText(data);
                        });
                    }
                }, this.timerDelay);
            }),
            this.plugin.app.workspace.on("editor-change", () => {
                clearTimeout(this.timer);
            }),
        ];
    }
}

class FormattoOptionTab extends obsidian.PluginSettingTab {
    constructor(app, plugin) {
        super(app, plugin);
        this.noticeMessages = {
            invalidNumberMessage: getLocale(LOCALE_CATEGORY.NOTICE_MESSAGES, "Please enter a valid number.\nIt must be at least 0."),
            notWholeNumberMessage: getLocale(LOCALE_CATEGORY.NOTICE_MESSAGES, "Please enter a valid number.\nIt must be a whole number."),
        };
        this.plugin = plugin;
    }
    checkDecimal(value) {
        return value !== "0" && value !== "1" && parseFloat(value) % 1 !== 0;
    }
    putDefaultIndicator(value) {
        return `${value} ${getLocale(LOCALE_CATEGORY.PLACEHOLDERS, "(Default)")}`;
    }
    display() {
        const { containerEl } = this;
        containerEl.empty();
        const debounceMsg = obsidian.debounce((value) => {
            if (value !== "") {
                // Check if the value is a valid number
                if (isNaN(parseInt(value)) || parseInt(value) < 0) {
                    new obsidian.Notice(this.noticeMessages.invalidNumberMessage);
                    return;
                }
                // Check if the value is a whole number
                if (this.checkDecimal(value)) {
                    new obsidian.Notice(this.noticeMessages.notWholeNumberMessage);
                    return;
                }
            }
        }, 1000, true);
        containerEl.createDiv({}, (div) => {
            div.innerHTML = `<div style="color: var(--text-accent)">
                ${getLocale(LOCALE_CATEGORY.OPTION_WARNINGS, "Gap value must be a whole number and it needs to be at least 0.")}
            </div>`;
            div.className = "setting-item setting-item-description";
        });
        // Heading Gaps
        containerEl.createEl("h2", {
            text: getLocale(LOCALE_CATEGORY.OPTION_SECTIONS, "Heading gaps"),
        });
        new obsidian.Setting(containerEl)
            .setName(getLocale(LOCALE_CATEGORY.HEADING_GAPS, "Before top-level headings"))
            .setDesc(getLocale(LOCALE_CATEGORY.HEADING_GAPS, "Decides the gap before a top-level heading."))
            .addText((text) => text
            .setPlaceholder(this.putDefaultIndicator(FALLBACK_OPTIONS.headingGaps.beforeTopLevelHeadings))
            .setValue(this.plugin.settings.headingGaps.beforeTopLevelHeadings)
            .onChange((value) => __awaiter(this, void 0, void 0, function* () {
            debounceMsg(value);
            this.plugin.settings.headingGaps.beforeTopLevelHeadings =
                value;
            yield this.plugin.saveOptions();
        })));
        new obsidian.Setting(containerEl)
            .setName(getLocale(LOCALE_CATEGORY.HEADING_GAPS, "Before the first sub-level heading"))
            .setDesc(getLocale(LOCALE_CATEGORY.HEADING_GAPS, "Decides the child heading gap right after a parent heading."))
            .addText((text) => text
            .setPlaceholder(this.putDefaultIndicator(FALLBACK_OPTIONS.headingGaps.beforeFirstSubHeading))
            .setValue(this.plugin.settings.headingGaps.beforeFirstSubHeading)
            .onChange((value) => __awaiter(this, void 0, void 0, function* () {
            debounceMsg(value);
            this.plugin.settings.headingGaps.beforeFirstSubHeading =
                value;
            yield this.plugin.saveOptions();
        })));
        new obsidian.Setting(containerEl)
            .setName(getLocale(LOCALE_CATEGORY.HEADING_GAPS, "Before sub-level headings"))
            .setDesc(getLocale(LOCALE_CATEGORY.HEADING_GAPS, "Decides gaps before headings that are not top-level."))
            .addText((text) => text
            .setPlaceholder(this.putDefaultIndicator(FALLBACK_OPTIONS.headingGaps.beforeSubHeadings))
            .setValue(this.plugin.settings.headingGaps.beforeSubHeadings)
            .onChange((value) => __awaiter(this, void 0, void 0, function* () {
            debounceMsg(value);
            this.plugin.settings.headingGaps.beforeSubHeadings =
                value;
            yield this.plugin.saveOptions();
        })));
        // Other Gaps
        containerEl.createEl("h2", {
            text: getLocale(LOCALE_CATEGORY.OPTION_SECTIONS, "Other gaps"),
        });
        new obsidian.Setting(containerEl)
            .setName(getLocale(LOCALE_CATEGORY.OTHER_GAPS, "After properties"))
            .setDesc(getLocale(LOCALE_CATEGORY.OTHER_GAPS, "Decides the gap after a property section."))
            .addText((text) => text
            .setPlaceholder(this.putDefaultIndicator(FALLBACK_OPTIONS.otherGaps.afterProperties))
            .setValue(this.plugin.settings.otherGaps.afterProperties)
            .onChange((value) => __awaiter(this, void 0, void 0, function* () {
            debounceMsg(value);
            this.plugin.settings.otherGaps.afterProperties = value;
            yield this.plugin.saveOptions();
        })));
        new obsidian.Setting(containerEl)
            .setName(getLocale(LOCALE_CATEGORY.OTHER_GAPS, "Before contents"))
            .setDesc(getLocale(LOCALE_CATEGORY.OTHER_GAPS, "Decides gaps before content sections. (ex: Text before headings)"))
            .addText((text) => text
            .setPlaceholder(this.putDefaultIndicator(FALLBACK_OPTIONS.otherGaps.beforeContents))
            .setValue(this.plugin.settings.otherGaps.beforeContents)
            .onChange((value) => __awaiter(this, void 0, void 0, function* () {
            debounceMsg(value);
            this.plugin.settings.otherGaps.beforeContents = value;
            yield this.plugin.saveOptions();
        })));
        new obsidian.Setting(containerEl)
            .setName(getLocale(LOCALE_CATEGORY.OTHER_GAPS, "Before contents after code blocks"))
            .setDesc(getLocale(LOCALE_CATEGORY.OTHER_GAPS, 'Decides gaps before "contents that are after code blocks."' // eslint-disable-line
        ))
            .addText((text) => text
            .setPlaceholder(this.putDefaultIndicator(FALLBACK_OPTIONS.otherGaps
            .beforeContentsAfterCodeBlocks))
            .setValue(this.plugin.settings.otherGaps
            .beforeContentsAfterCodeBlocks)
            .onChange((value) => __awaiter(this, void 0, void 0, function* () {
            debounceMsg(value);
            this.plugin.settings.otherGaps.beforeContentsAfterCodeBlocks =
                value;
            yield this.plugin.saveOptions();
        })));
        new obsidian.Setting(containerEl)
            .setName(getLocale(LOCALE_CATEGORY.OTHER_GAPS, "Before code blocks"))
            .setDesc(getLocale(LOCALE_CATEGORY.OTHER_GAPS, "Decides gaps before code blocks."))
            .addText((text) => text
            .setPlaceholder(this.putDefaultIndicator(FALLBACK_OPTIONS.otherGaps.beforeCodeBlocks))
            .setValue(this.plugin.settings.otherGaps.beforeCodeBlocks)
            .onChange((value) => __awaiter(this, void 0, void 0, function* () {
            debounceMsg(value);
            this.plugin.settings.otherGaps.beforeCodeBlocks = value;
            yield this.plugin.saveOptions();
        })));
        new obsidian.Setting(containerEl)
            .setName(getLocale(LOCALE_CATEGORY.OTHER_GAPS, "Before code blocks after headings"))
            .setDesc(getLocale(LOCALE_CATEGORY.OTHER_GAPS, 'Decides gaps before "code blocks that are after headings."'))
            .addText((text) => text
            .setPlaceholder(this.putDefaultIndicator(FALLBACK_OPTIONS.otherGaps
            .beforeCodeBlocksAfterHeadings))
            .setValue(this.plugin.settings.otherGaps
            .beforeCodeBlocksAfterHeadings)
            .onChange((value) => __awaiter(this, void 0, void 0, function* () {
            debounceMsg(value);
            this.plugin.settings.otherGaps.beforeCodeBlocksAfterHeadings =
                value;
            yield this.plugin.saveOptions();
        })));
        // Format Options
        containerEl.createEl("h2", {
            text: getLocale(LOCALE_CATEGORY.OPTION_SECTIONS, "Format options"),
        });
        new obsidian.Setting(containerEl)
            .setName(getLocale(LOCALE_CATEGORY.FORMAT_OPTIONS, "Newline at the end of a document"))
            .setDesc(getLocale(LOCALE_CATEGORY.FORMAT_OPTIONS, "Inserts a newline at the end of a document."))
            .addToggle((text) => text
            .setValue(this.plugin.settings.formatOptions.insertNewline)
            .onChange((value) => __awaiter(this, void 0, void 0, function* () {
            this.plugin.settings.formatOptions.insertNewline =
                value;
            yield this.plugin.saveOptions();
        })));
        // Other Options
        containerEl.createEl("h2", {
            text: getLocale(LOCALE_CATEGORY.OPTION_SECTIONS, "Other options"),
        });
        new obsidian.Setting(containerEl)
            .setName(getLocale(LOCALE_CATEGORY.OTHER_OPTIONS, "Notify when no change is needed"))
            .setDesc(getLocale(LOCALE_CATEGORY.OTHER_OPTIONS, "Displays a different message when no change is needed."))
            .addToggle((text) => text
            .setValue(this.plugin.settings.otherOptions.notifyWhenUnchanged)
            .onChange((value) => __awaiter(this, void 0, void 0, function* () {
            this.plugin.settings.otherOptions.notifyWhenUnchanged =
                value;
            yield this.plugin.saveOptions();
        })));
        new obsidian.Setting(containerEl)
            .setName(getLocale(LOCALE_CATEGORY.OTHER_OPTIONS, "More detailed error message"))
            .setDesc(getLocale(LOCALE_CATEGORY.OTHER_OPTIONS, "Displays additional information when parsing fails."))
            .addToggle((text) => text
            .setValue(this.plugin.settings.otherOptions
            .showMoreDetailedErrorMessages)
            .onChange((value) => __awaiter(this, void 0, void 0, function* () {
            this.plugin.settings.otherOptions.showMoreDetailedErrorMessages =
                value;
            yield this.plugin.saveOptions();
        })));
        new obsidian.Setting(containerEl)
            .setName(getLocale(LOCALE_CATEGORY.OTHER_OPTIONS, "Format documents on modification"))
            .setDesc(getLocale(LOCALE_CATEGORY.OTHER_OPTIONS, "Automatically format documents after each modification. Triggers on save and autosave."))
            .addToggle((text) => text
            .setValue(this.plugin.settings.otherOptions
            .formatOnSave)
            .onChange((value) => __awaiter(this, void 0, void 0, function* () {
            this.plugin.settings.otherOptions.formatOnSave =
                value;
            yield this.plugin.saveOptions();
        })));
    }
}

function _loadWasmModule (sync, filepath, src, imports) {
  function _instantiateOrCompile(source, imports, stream) {
    var instantiateFunc = stream ? WebAssembly.instantiateStreaming : WebAssembly.instantiate;
    var compileFunc = stream ? WebAssembly.compileStreaming : WebAssembly.compile;

    if (imports) {
      return instantiateFunc(source, imports)
    } else {
      return compileFunc(source)
    }
  }

  
var buf = null;
var isNode = typeof process !== 'undefined' && process.versions != null && process.versions.node != null;

if (isNode) {
  
buf = Buffer.from(src, 'base64');

} else {
  
var raw = globalThis.atob(src);
var rawLength = raw.length;
buf = new Uint8Array(new ArrayBuffer(rawLength));
for(var i = 0; i < rawLength; i++) {
   buf[i] = raw.charCodeAt(i);
}

}


  {
    return _instantiateOrCompile(buf, imports, false)
  }
}

function formatto_wasm(imports){return _loadWasmModule(0, null, 'AGFzbQEAAAAB+QEkYAJ/fwF/YAJ/fwBgA39/fwF/YAN/f38AYAF/AGABfwF/YAR/f39/AGAFf39/f38AYAFvAX9gBH9/f38Bf2ACf28AYAABf2AFf39/fn8AYAZ/f39/f38AYAV/f39/fwF/YAJvbwF/YAJ/fwFvYAFvAW9gAABgBn9/f39/fwF/YAd/f39/f39/AGACb28Bb2ADb29/AGAAAW9gCX9/f39/f35+fgBgB39/f39/f38Bf2ADfn9/AX9gBH9/f34AYAR/f29vAn9/YAACf39gBX9/fH9/AGAEf3x/fwBgBX9/fX9/AGAEf31/fwBgBX9/fn9/AGAEf35/fwAC0AUWA3diZxVfX3diaW5kZ2VuX3N0cmluZ19nZXQACgN3YmcXX193YmluZGdlbl9pc191bmRlZmluZWQACAN3YmcNX193YmluZGdlbl9pbgAPA3diZxZfX3diaW5kZ2VuX2Jvb2xlYW5fZ2V0AAgDd2JnFF9fd2JpbmRnZW5faXNfb2JqZWN0AAgDd2JnHF9fd2JnX2Vycm9yX2UzYjE2NzYyNWNjYmZiNmEAAQN3YmcZX193YmluZGdlbl9qc3ZhbF9sb29zZV9lcQAPA3diZxVfX3diaW5kZ2VuX251bWJlcl9nZXQACgN3YmcdX193YmdfU3RyaW5nX2I5NDEyZjg3OTlmYWFiM2UACgN3YmcUX193YmluZGdlbl9lcnJvcl9uZXcAEAN3YmcVX193YmluZGdlbl9zdHJpbmdfbmV3ABADd2JnJF9fd2JnX2dldHdpdGhyZWZrZXlfZWRjMmM4OTYwZjBmMTE5MQAVA3diZy1fX3diZ19pbnN0YW5jZW9mX0FycmF5QnVmZmVyXzc0OTQ1NTcwYjRhNjJlYzcACAN3YmcdX193YmdfYnVmZmVyX2NjYWVkNTFhNjM1ZDhhMmQAEQN3YmcaX193YmdfbmV3X2ZlYzI2MTFlYjkxODBmOTUAEQN3YmcaX193Ymdfc2V0X2VjMmZjZjgxYmM1NzNmZDkAFgN3YmcdX193YmdfbGVuZ3RoXzkyNTRjNGJkM2I5ZjIzYzQACAN3YmcsX193YmdfaW5zdGFuY2VvZl9VaW50OEFycmF5X2RmMDc2MTQxMDQxNGVmMzYACAN3YmcXX193YmluZGdlbl9kZWJ1Z19zdHJpbmcACgN3YmcQX193YmluZGdlbl90aHJvdwABA3diZxFfX3diaW5kZ2VuX21lbW9yeQAXA3diZx9fX3diaW5kZ2VuX2luaXRfZXh0ZXJucmVmX3RhYmxlABIDhQKDAgUBBwEAAgMCEwMEBwACAgIAAgIAAwEBAAMUFAMMAQwDGAsAAQYZAQYNBwIAGgADAAMBAAABAQEBAAYMDQEBAwEAAAEGABsDAgUBBwMACwQDAwEEAgYBBgYBAQYDAQACAQAEAQAEBwQEAQAHAQENAwMDAwEBAgEDAAADAQQAAwIDEgECBQIAAgQEAQECBAcDAwABBAAOAAQEAAQAAAkAAhwEAAEGAgsBCwETAAAJBx4OICIBCQQABgQAAgAFBAQEAwEFCQMAAgAHAQEAAAMFAAEAAAABAQEAAQAAAwAEAAAABQQAAAAAAAAAAAAAAAABAAEAAAEBAAACAwEAAAEABQUFBQMECQJwAXNzbwCAAQUDAQARBgkBfwFBgIDAAAsHhAEHBm1lbW9yeQIAD2Zvcm1hdF9kb2N1bWVudAC1ARFfX3diaW5kZ2VuX21hbGxvYwCmARJfX3diaW5kZ2VuX3JlYWxsb2MAsgETX193YmluZGdlbl9leHBvcnRfMgEBD19fd2JpbmRnZW5fZnJlZQDZARBfX3diaW5kZ2VuX3N0YXJ0ABUJ3QECAEEBC3LoAfcBtAFJggL4AfsBkAKRAvwB/QH/Af4B9wG0AUn5AdQBf7ABkgLeAd8BkgKYAnqBAlaQAeUBkAH6AcsB4AHcASJzswHRAc8BzAHHAcMBxQGDAcMBxQHGAcMBxAG/AfEBSOYB0gGYAUOAAtIBmAFDzgHzAcEBYk7nAakBdNABgwLgAZkBtwHgAegBiQHSAZoBRYUC6QHqAewBnwHrAYYCygF5U2uSAtIBoQGLAocC0gHgAeYBkgLtAYoCmAKIAtoB3AHuAe8BrgF29AEnmwGMAgBB8wALAArQhAaDAoQkAgl/AX4jAEEQayIIJAACfwJAAkACQAJAAkACQCAAQfUBTwRAQQAgAEHN/3tPDQcaIABBC2oiAUF4cSEFQZiRwQAoAgAiCUUNBEEfIQdBACAFayEEIABB9P//B00EQCAFQQYgAUEIdmciAGt2QQFxIABBAXRrQT5qIQcLIAdBAnRB/I3BAGooAgAiAUUEQEEAIQAMAgtBACEAIAVBGSAHQQF2a0EAIAdBH0cbdCEDA0ACQCABKAIEQXhxIgYgBUkNACAGIAVrIgYgBE8NACABIQIgBiIEDQBBACEEIAEhAAwECyABKAIUIgYgACAGIAEgA0EddkEEcWpBEGooAgAiAUcbIAAgBhshACADQQF0IQMgAQ0ACwwBC0GUkcEAKAIAIgJBECAAQQtqQfgDcSAAQQtJGyIFQQN2IgB2IgFBA3EEQAJAIAFBf3NBAXEgAGoiBkEDdCIAQYyPwQBqIgMgAEGUj8EAaigCACIBKAIIIgRHBEAgBCADNgIMIAMgBDYCCAwBC0GUkcEAIAJBfiAGd3E2AgALIAEgAEEDcjYCBCAAIAFqIgAgACgCBEEBcjYCBCABQQhqDAcLIAVBnJHBACgCAE0NAwJAAkAgAUUEQEGYkcEAKAIAIgBFDQYgAGhBAnRB/I3BAGooAgAiAigCBEF4cSAFayEEIAIhAQNAAkAgAigCECIADQAgAigCFCIADQAgASgCGCEHAkACQCABIAEoAgwiAEYEQCABQRRBECABKAIUIgAbaigCACICDQFBACEADAILIAEoAggiAiAANgIMIAAgAjYCCAwBCyABQRRqIAFBEGogABshAwNAIAMhBiACIgBBFGogAEEQaiAAKAIUIgIbIQMgAEEUQRAgAhtqKAIAIgINAAsgBkEANgIACyAHRQ0EIAEgASgCHEECdEH8jcEAaiICKAIARwRAIAdBEEEUIAcoAhAgAUYbaiAANgIAIABFDQUMBAsgAiAANgIAIAANA0GYkcEAQZiRwQAoAgBBfiABKAIcd3E2AgAMBAsgACgCBEF4cSAFayICIAQgAiAESSICGyEEIAAgASACGyEBIAAhAgwACwALAkBBAiAAdCIDQQAgA2tyIAEgAHRxaCIGQQN0IgFBjI/BAGoiAyABQZSPwQBqKAIAIgAoAggiBEcEQCAEIAM2AgwgAyAENgIIDAELQZSRwQAgAkF+IAZ3cTYCAAsgACAFQQNyNgIEIAAgBWoiBiABIAVrIgNBAXI2AgQgACABaiADNgIAQZyRwQAoAgAiBARAIARBeHFBjI/BAGohAUGkkcEAKAIAIQICf0GUkcEAKAIAIgVBASAEQQN2dCIEcUUEQEGUkcEAIAQgBXI2AgAgAQwBCyABKAIICyEEIAEgAjYCCCAEIAI2AgwgAiABNgIMIAIgBDYCCAtBpJHBACAGNgIAQZyRwQAgAzYCACAAQQhqDAgLIAAgBzYCGCABKAIQIgIEQCAAIAI2AhAgAiAANgIYCyABKAIUIgJFDQAgACACNgIUIAIgADYCGAsCQAJAIARBEE8EQCABIAVBA3I2AgQgASAFaiIDIARBAXI2AgQgAyAEaiAENgIAQZyRwQAoAgAiBkUNASAGQXhxQYyPwQBqIQBBpJHBACgCACECAn9BlJHBACgCACIFQQEgBkEDdnQiBnFFBEBBlJHBACAFIAZyNgIAIAAMAQsgACgCCAshBiAAIAI2AgggBiACNgIMIAIgADYCDCACIAY2AggMAQsgASAEIAVqIgBBA3I2AgQgACABaiIAIAAoAgRBAXI2AgQMAQtBpJHBACADNgIAQZyRwQAgBDYCAAsgAUEIagwGCyAAIAJyRQRAQQAhAkECIAd0IgBBACAAa3IgCXEiAEUNAyAAaEECdEH8jcEAaigCACEACyAARQ0BCwNAIAAgAiAAKAIEQXhxIgMgBWsiBiAESSIHGyEJIAAoAhAiAUUEQCAAKAIUIQELIAIgCSADIAVJIgAbIQIgBCAGIAQgBxsgABshBCABIgANAAsLIAJFDQAgBUGckcEAKAIAIgBNIAQgACAFa09xDQAgAigCGCEHAkACQCACIAIoAgwiAEYEQCACQRRBECACKAIUIgAbaigCACIBDQFBACEADAILIAIoAggiASAANgIMIAAgATYCCAwBCyACQRRqIAJBEGogABshAwNAIAMhBiABIgBBFGogAEEQaiAAKAIUIgEbIQMgAEEUQRAgARtqKAIAIgENAAsgBkEANgIACyAHRQ0CIAIgAigCHEECdEH8jcEAaiIBKAIARwRAIAdBEEEUIAcoAhAgAkYbaiAANgIAIABFDQMMAgsgASAANgIAIAANAUGYkcEAQZiRwQAoAgBBfiACKAIcd3E2AgAMAgsCQAJAAkACQAJAIAVBnJHBACgCACIBSwRAIAVBoJHBACgCACIATwRAIAVBr4AEakGAgHxxIgJBEHZAACEAIAhBBGoiAUEANgIIIAFBACACQYCAfHEgAEF/RiICGzYCBCABQQAgAEEQdCACGzYCAEEAIAgoAgQiAUUNCRogCCgCDCEGQayRwQAgCCgCCCIEQayRwQAoAgBqIgA2AgBBsJHBAEGwkcEAKAIAIgIgACAAIAJJGzYCAAJAAkBBqJHBACgCACICBEBB/I7BACEAA0AgASAAKAIAIgMgACgCBCIHakYNAiAAKAIIIgANAAsMAgtBuJHBACgCACIAQQAgACABTRtFBEBBuJHBACABNgIAC0G8kcEAQf8fNgIAQYiPwQAgBjYCAEGAj8EAIAQ2AgBB/I7BACABNgIAQZiPwQBBjI/BADYCAEGgj8EAQZSPwQA2AgBBlI/BAEGMj8EANgIAQaiPwQBBnI/BADYCAEGcj8EAQZSPwQA2AgBBsI/BAEGkj8EANgIAQaSPwQBBnI/BADYCAEG4j8EAQayPwQA2AgBBrI/BAEGkj8EANgIAQcCPwQBBtI/BADYCAEG0j8EAQayPwQA2AgBByI/BAEG8j8EANgIAQbyPwQBBtI/BADYCAEHQj8EAQcSPwQA2AgBBxI/BAEG8j8EANgIAQdiPwQBBzI/BADYCAEHMj8EAQcSPwQA2AgBB1I/BAEHMj8EANgIAQeCPwQBB1I/BADYCAEHcj8EAQdSPwQA2AgBB6I/BAEHcj8EANgIAQeSPwQBB3I/BADYCAEHwj8EAQeSPwQA2AgBB7I/BAEHkj8EANgIAQfiPwQBB7I/BADYCAEH0j8EAQeyPwQA2AgBBgJDBAEH0j8EANgIAQfyPwQBB9I/BADYCAEGIkMEAQfyPwQA2AgBBhJDBAEH8j8EANgIAQZCQwQBBhJDBADYCAEGMkMEAQYSQwQA2AgBBmJDBAEGMkMEANgIAQaCQwQBBlJDBADYCAEGUkMEAQYyQwQA2AgBBqJDBAEGckMEANgIAQZyQwQBBlJDBADYCAEGwkMEAQaSQwQA2AgBBpJDBAEGckMEANgIAQbiQwQBBrJDBADYCAEGskMEAQaSQwQA2AgBBwJDBAEG0kMEANgIAQbSQwQBBrJDBADYCAEHIkMEAQbyQwQA2AgBBvJDBAEG0kMEANgIAQdCQwQBBxJDBADYCAEHEkMEAQbyQwQA2AgBB2JDBAEHMkMEANgIAQcyQwQBBxJDBADYCAEHgkMEAQdSQwQA2AgBB1JDBAEHMkMEANgIAQeiQwQBB3JDBADYCAEHckMEAQdSQwQA2AgBB8JDBAEHkkMEANgIAQeSQwQBB3JDBADYCAEH4kMEAQeyQwQA2AgBB7JDBAEHkkMEANgIAQYCRwQBB9JDBADYCAEH0kMEAQeyQwQA2AgBBiJHBAEH8kMEANgIAQfyQwQBB9JDBADYCAEGQkcEAQYSRwQA2AgBBhJHBAEH8kMEANgIAQaiRwQAgAUEPakF4cSIAQQhrIgI2AgBBjJHBAEGEkcEANgIAQaCRwQAgBEEoayIDIAEgAGtqQQhqIgA2AgAgAiAAQQFyNgIEIAEgA2pBKDYCBEG0kcEAQYCAgAE2AgAMCAsgAiADSSABIAJNcg0AIAAoAgwiA0EBcQ0AIANBAXYgBkYNAwtBuJHBAEG4kcEAKAIAIgAgASAAIAFJGzYCACABIARqIQNB/I7BACEAAkACQANAIAMgACgCACIHRwRAIAAoAggiAA0BDAILCyAAKAIMIgNBAXENACADQQF2IAZGDQELQfyOwQAhAANAAkAgAiAAKAIAIgNPBEAgAiADIAAoAgRqIgdJDQELIAAoAgghAAwBCwtBqJHBACABQQ9qQXhxIgBBCGsiAzYCAEGgkcEAIARBKGsiCSABIABrakEIaiIANgIAIAMgAEEBcjYCBCABIAlqQSg2AgRBtJHBAEGAgIABNgIAIAIgB0Ega0F4cUEIayIAIAAgAkEQakkbIgNBGzYCBEH8jsEAKQIAIQogA0EQakGEj8EAKQIANwIAIAMgCjcCCEGIj8EAIAY2AgBBgI/BACAENgIAQfyOwQAgATYCAEGEj8EAIANBCGo2AgAgA0EcaiEAA0AgAEEHNgIAIABBBGoiACAHSQ0ACyACIANGDQcgAyADKAIEQX5xNgIEIAIgAyACayIAQQFyNgIEIAMgADYCACAAQYACTwRAIAIgABBHDAgLIABB+AFxQYyPwQBqIQECf0GUkcEAKAIAIgNBASAAQQN2dCIAcUUEQEGUkcEAIAAgA3I2AgAgAQwBCyABKAIICyEAIAEgAjYCCCAAIAI2AgwgAiABNgIMIAIgADYCCAwHCyAAIAE2AgAgACAAKAIEIARqNgIEIAFBD2pBeHFBCGsiAiAFQQNyNgIEIAdBD2pBeHFBCGsiBCACIAVqIgBrIQUgBEGokcEAKAIARg0DIARBpJHBACgCAEYNBCAEKAIEIgFBA3FBAUYEQCAEIAFBeHEiARA8IAEgBWohBSABIARqIgQoAgQhAQsgBCABQX5xNgIEIAAgBUEBcjYCBCAAIAVqIAU2AgAgBUGAAk8EQCAAIAUQRwwGCyAFQfgBcUGMj8EAaiEBAn9BlJHBACgCACIDQQEgBUEDdnQiBHFFBEBBlJHBACADIARyNgIAIAEMAQsgASgCCAshAyABIAA2AgggAyAANgIMIAAgATYCDCAAIAM2AggMBQtBoJHBACAAIAVrIgE2AgBBqJHBAEGokcEAKAIAIgAgBWoiAjYCACACIAFBAXI2AgQgACAFQQNyNgIEIABBCGoMCAtBpJHBACgCACEAAkAgASAFayICQQ9NBEBBpJHBAEEANgIAQZyRwQBBADYCACAAIAFBA3I2AgQgACABaiIBIAEoAgRBAXI2AgQMAQtBnJHBACACNgIAQaSRwQAgACAFaiIDNgIAIAMgAkEBcjYCBCAAIAFqIAI2AgAgACAFQQNyNgIECyAAQQhqDAcLIAAgBCAHajYCBEGokcEAQaiRwQAoAgAiAEEPakF4cSIBQQhrIgI2AgBBoJHBAEGgkcEAKAIAIARqIgMgACABa2pBCGoiATYCACACIAFBAXI2AgQgACADakEoNgIEQbSRwQBBgICAATYCAAwDC0GokcEAIAA2AgBBoJHBAEGgkcEAKAIAIAVqIgE2AgAgACABQQFyNgIEDAELQaSRwQAgADYCAEGckcEAQZyRwQAoAgAgBWoiATYCACAAIAFBAXI2AgQgACABaiABNgIACyACQQhqDAMLQQBBoJHBACgCACIAIAVNDQIaQaCRwQAgACAFayIBNgIAQaiRwQBBqJHBACgCACIAIAVqIgI2AgAgAiABQQFyNgIEIAAgBUEDcjYCBCAAQQhqDAILIAAgBzYCGCACKAIQIgEEQCAAIAE2AhAgASAANgIYCyACKAIUIgFFDQAgACABNgIUIAEgADYCGAsCQCAEQRBPBEAgAiAFQQNyNgIEIAIgBWoiACAEQQFyNgIEIAAgBGogBDYCACAEQYACTwRAIAAgBBBHDAILIARB+AFxQYyPwQBqIQECf0GUkcEAKAIAIgNBASAEQQN2dCIEcUUEQEGUkcEAIAMgBHI2AgAgAQwBCyABKAIICyEDIAEgADYCCCADIAA2AgwgACABNgIMIAAgAzYCCAwBCyACIAQgBWoiAEEDcjYCBCAAIAJqIgAgACgCBEEBcjYCBAsgAkEIagsgCEEQaiQAC8kdAgt/AX4jAEGQAWsiAyQAAkACQCABKAIUIgQgASgCECICSQRAIAFBDGohBiABKAIMIQcDQCAEIAdqLQAAIgVBCWsiCEEXS0EBIAh0QZOAgARxRXINAiABIARBAWoiBDYCFCACIARHDQALIAIhBAsgA0EFNgJYIANBGGogAUEMaiACIARBAWoiASABIAJLGxAxIANB2ABqIAMoAhggAygCHBCcASEBIABBBjoAACAAIAE2AgQMAQsCQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAIAVB5QBNBEAgBUEiRg0GIAVBLUYNBSAFQdsARw0BIAEgAS0AGEEBayIFOgAYIAVB/wFxDQcgA0EYNgJYIANBCGogBiACIARBAWoiASABIAJLGxAxIANB2ABqIAMoAgggAygCDBCcASEBIABBBjoAACAAIAE2AgQMEgsgBUHzAE0EQCAFQeYARg0EIAVB7gBHDQEgASAEQQFqNgIUIAFB+LHAAEEDEF0iAUUNAiAAQQY6AAAgACABNgIEDBILIAVB9ABGDQIgBUH7AEYNBwsgBUEwa0H/AXFBCkkNByADQQo2AlggAyAGIAIgBEEBaiIFIAIgBUkbEDEgAyADQdgAaiADKAIAIAMoAgQQnAE2AiQMDQsgA0EAOgAgIAAgAykDIDcDACAAQQhqIANBKGopAwA3AwAgAEEQaiADQTBqKQMANwMADA8LIAEgBEEBajYCFCABQfuxwABBAxBdIgEEQCAAQQY6AAAgACABNgIEDA8LIANBgQI7ASAgACADKQMgNwMAIABBCGogA0EoaikDADcDACAAQRBqIANBMGopAwA3AwAMDgsgASAEQQFqNgIUIAFB/rHAAEEEEF0iAQRAIABBBjoAACAAIAE2AgQMDgsgA0EBOwEgIAAgAykDIDcDACAAQQhqIANBKGopAwA3AwAgAEEQaiADQTBqKQMANwMADA0LIAEgBEEBajYCFCADQThqIAFBABAqIAMpAzhCA1ENBCADQSBqIANBOGoQbyADLQAgQQZHBEAgACADKQMgNwMAIABBEGogA0EwaikDADcDACAAQQhqIANBKGopAwA3AwAMDQsgAygCJCABEJIBIQEgAEEGOgAAIAAgATYCBAwMCyABQQA2AgggASAEQQFqNgIUIANB2ABqIAYgARA1IAMoAlwhBSADKAJYIgRBAkYNBCADKAJgIQIgBEUEQCADQSBqIQRBACEGAkAgAkEATgRAIAJFBEBBASEHDAILQamNwQAtAAAaQQEhBiACQQEQ4QEiBw0BCyAGIAIQ1gEACyAHIAUgAhBAIQUgBCACNgIMIAQgBTYCCCAEIAI2AgQgBEEDOgAAIAMtACBBBkYNCSAAIAMpAyA3AwAgAEEQaiADQTBqKQMANwMAIABBCGogA0EoaikDADcDAAwMC0EAIQQgAkEATgRAIAJFBEBBASEBDAwLQamNwQAtAAAaQQEhBCACQQEQ4QEiAQ0LCyAEIAIQ1gEACyABIARBAWo2AhQgA0EBOgCAASADIAE2AnwgA0EANgKMASADQoCAgICAATcChAEgA0HYAGogA0H8AGoQbgJ/AkAgAy0AWCIEQQdHBEAgA0HYAGpBAXIiBUEIaiEHIAVBD2ohCANAIARBBkYNAiADKAKMASIGIAMoAoQBRgRAIwBBEGsiAiQAIAJBCGogA0GEAWoiCSAJKAIAQQFBCEEYEFEgAigCCCIJQYGAgIB4RwRAIAkgAigCDBDWAQALIAJBEGokAAsgAygCiAEgBkEYbGoiAiAFKQAANwABIAIgBDoAACACQQlqIAcpAAA3AAAgAkEQaiAIKQAANwAAIAMgBkEBajYCjAEgA0HYAGogA0H8AGoQbiADLQBYIgRBB0cNAAsLIAMoAlwhBCADQYQBahB3IAMoAoQBIgIEQCADKAKIASACQRhsQQgQ8AELQQEhCUEGDAELIAMoAoQBIQQgAykCiAEhDUEAIQlBBAshCyABIAEtABhBAWo6ABgjAEEwayIGJAACfyABKAIUIgIgASgCECIFSQRAIAFBDGohCCABKAIMIQoDQAJAAkACQAJAIAIgCmotAAAiB0EMTQRAIAdBCWtBAkkNBAwBCyAHQR9NBEAgB0ENRw0BDAQLIAdBIEYNAyAHQd0ARg0BIAdBLEYNAgsgBkEWNgIkIAYgCCAFIAJBAWoiAiACIAVLGxAxIAZBJGogBigCACAGKAIEEJwBDAULIAEgAkEBajYCFEEADAQLIAEgAkEBaiICNgIUAkAgAiAFTw0AAkADQCACIApqLQAAIgdBCWsiDEEXS0EBIAx0QZOAgARxRXINASABIAJBAWoiAjYCFCACIAVHDQALIAUhAgwBCyAHQd0ARw0AIAZBFTYCJCAGQRhqIAggBSACQQFqIgIgAiAFSxsQMSAGQSRqIAYoAhggBigCHBCcAQwECyAGQRY2AiQgBkEQaiAIIAUgAkEBaiICIAIgBUsbEDEgBkEkaiAGKAIQIAYoAhQQnAEMAwsgASACQQFqIgI2AhQgAiAFRw0ACyAFIQILIAZBAjYCJCAGQQhqIAFBDGogBSACQQFqIgIgAiAFSxsQMSAGQSRqIAYoAgggBigCDBCcAQshAiAGQTBqJAAgAyACNgJwIAMgDTcDYCADIAQ2AlwgAyALOgBYIAlFBEAgAkUEQCADQTBqIANB6ABqKQMANwMAIANBKGogA0HgAGopAwA3AwAgAyADKQNYNwMgDAgLIANBBjoAICADIAI2AiQgA0HYAGoQkQEMBwsgA0EGOgAgIAMgBDYCJCACRQ0GIANB8ABqEHoMBgsgASABLQAYQQFrIgU6ABggBUH/AXFFDQQgASAEQQFqNgIUIANB2ABqIQUjAEHAAWsiAiQAIAJBAToABCACIAE2AgAgAkEIaiACEHUCQAJAAkACQCACKAIIIgRBgICAgHhrDgIBAAILIAUgAigCDDYCBCAFQQY6AAAMAgsgBUEANgIMIAVBADYCBCAFQQU6AAAMAQsgAikCDCENIAJBADYCHCACQQA2AhQgAiANNwKAASACIAQ2AnwgAkGgAWogAhC4AQJAIAItAKABQQZHBEAgAkEwaiACQbABaiIIKQMANwMAIAJBKGogAkGoAWoiCSkDADcDACACIAIpA6ABNwMgIAJBiAFqIAJBFGogAkH8AGogAkEgahBZIAItAIgBQQZHBEAgAkGIAWoQkQELIAJBPGohBCACQaQBaiEGA0ACQCACQfwAaiACEHUCQAJAAkACQCACKAJ8IgdBgICAgHhrDgIEAAELIAIoAoABIQQMAQsgAikCgAEhDSACKAKAASACQYgBaiACELgBIAItAIgBQQZHDQEgAigCjAEhBCAHRQ0AIAdBARDwAQsgBUEGOgAAIAUgBDYCBAwECyAGIAIpA4gBNwIAIAZBEGogAkGYAWopAwA3AgAgBkEIaiACQZABaikDADcCACACQUBrIAkpAgA3AwAgAkHIAGogCCkCADcDACACQdAAaiACQbgBaigCADYCACACIAIpAqABNwM4IAIgBzYCVCACIA0+AlggAiANQiCIPgJcIAJB8ABqIARBEGopAgA3AwAgAkHoAGogBEEIaikCADcDACACIAQpAgA3A2AgAkGgAWogAkEUaiACQdQAaiACQeAAahBZIAItAKABQQZGDQEgAkGgAWoQkQEMAQsLIAJBqwFqIAJBHGooAgA2AAAgBUEFOgAAIAIgAikCFDcAowEgBSACKQCgATcAASAFQQhqIAJBpwFqKQAANwAADAILIAUgAigCpAE2AgQgBUEGOgAAIARFDQAgDacgBEEBEPABCyACQRRqEHwLIAJBwAFqJAAgASABLQAYQQFqOgAYIwBBMGsiBCQAAn8gASgCFCICIAEoAhAiBUkEQCABQQxqIQcgASgCDCEIA0ACQAJAAkACQCACIAhqLQAAIgZBDE0EQCAGQQlrQQJJDQQMAQsgBkEfTQRAIAZBDUcNAQwECyAGQSBGDQMgBkH9AEYNASAGQSxGDQILIARBFjYCJCAEQQhqIAcgBSACQQFqIgIgAiAFSxsQMSAEQSRqIAQoAgggBCgCDBCcAQwFCyABIAJBAWo2AhRBAAwECyAEQRU2AiQgBEEYaiAHIAUgAkEBaiICIAIgBUsbEDEgBEEkaiAEKAIYIAQoAhwQnAEMAwsgASACQQFqIgI2AhQgAiAFRw0ACyAFIQILIARBAzYCJCAEQRBqIAFBDGogBSACQQFqIgIgAiAFSxsQMSAEQSRqIAQoAhAgBCgCFBCcAQshAiAEQTBqJAAgAyACNgJwIAMtAFhBBkcEQCACRQRAIANBMGogA0HoAGopAwA3AwAgA0EoaiADQeAAaikDADcDACADIAMpA1g3AyAMBwsgA0EGOgAgIAMgAjYCJCADQdgAahCRAQwGCyADIAMoAlw2AiQgA0EGOgAgIAJFDQUgA0HwAGoQegwFCyADQcgAaiABQQEQKiADKQNIQgNRDQIgA0EgaiADQcgAahBvIAMtACBBBkcEQCAAIAMpAyA3AwAgAEEQaiADQTBqKQMANwMAIABBCGogA0EoaikDADcDAAwJCyADKAIkIAEQkgEhASAAQQY6AAAgACABNgIEDAgLIAAgAygCQDYCBCAAQQY6AAAMBwsgAEEGOgAAIAAgBTYCBAwGCyAAIAMoAlA2AgQgAEEGOgAADAULIANBGDYCWCADQRBqIAYgAiAEQQFqIgEgASACSxsQMSADQdgAaiADKAIQIAMoAhQQnAEhASAAQQY6AAAgACABNgIEDAQLIAMtACBBBkcNAQsgAygCJCABEJIBIQEgAEEGOgAAIAAgATYCBAwCCyAAIAMpAyA3AwAgAEEQaiADQTBqKQMANwMAIABBCGogA0EoaikDADcDAAwBCyADQShqIgQgASAFIAIQQDYCACADIAI2AiQgA0EDOgAgIAMgAjYCLCAAQRBqIANBMGopAwA3AwAgAEEIaiAEKQMANwMAIAAgAykDIDcDAAsgA0GQAWokAAuhCwIKfwF+IARFBEAgAEEANgI8IAAgAzYCOCAAIAI2AjQgACABNgIwIABBADoADiAAQYECOwEMIAAgAjYCCCAAQgA3AwAPC0EBIQwCQAJAAkACQAJAAkACQAJAAkACQCAEQQFGBEBBASEJDAELQQEhBkEBIQcDQCAFIApqIgggBE8NAiAHIQsCQCADIAZqLQAAIgcgAyAIai0AACIGSQRAIAUgC2pBAWoiByAKayEMQQAhBQwBCyAGIAdHBEBBASEMIAtBAWohB0EAIQUgCyEKDAELQQAgBUEBaiIHIAcgDEYiBhshBSAHQQAgBhsgC2ohBwsgBSAHaiIGIARJDQALQQEhBkEAIQhBASEHQQAhBUEBIQkDQCAFIAhqIg0gBE8NAyAHIQsCQCADIAZqLQAAIgcgAyANai0AACIGSwRAIAUgC2pBAWoiByAIayEJQQAhBQwBCyAGIAdHBEBBASEJIAtBAWohB0EAIQUgCyEIDAELQQAgBUEBaiIHIAcgCUYiBhshBSAHQQAgBhsgC2ohBwsgBSAHaiIGIARJDQALIAohBQsgBCAFIAggBSAISyIFGyILSQ0CIAwgCSAFGyIHIAtqIgUgB0kNAyAEIAVJDQQCfyADIAMgB2ogCxCUAQRAIAsgBCALayIGSyEMIARBA3EhCAJAIARBAWtBA0kEQEEAIQcMAQsgBEF8cSEKQQAhBwNAQgEgAyAHaiIFQQNqMQAAhkIBIAUxAACGIA+EQgEgBUEBajEAAIaEQgEgBUECajEAAIaEhCEPIAogB0EEaiIHRw0ACwsgCARAIAMgB2ohBQNAQgEgBTEAAIYgD4QhDyAFQQFqIQUgCEEBayIIDQALCyALIAYgDBtBAWohB0F/IQogCyEMQX8MAQtBASEIQQAhBUEBIQZBACEMA0AgBCAGIgogBWoiDUsEQCAEIAVrIApBf3NqIgYgBE8NCCAFQX9zIARqIAxrIgkgBE8NCQJAIAMgBmotAAAiBiADIAlqLQAAIglJBEAgDUEBaiIGIAxrIQhBACEFDAELIAYgCUcEQCAKQQFqIQZBACEFQQEhCCAKIQwMAQtBACAFQQFqIgYgBiAIRiIJGyEFIAZBACAJGyAKaiEGCyAHIAhHDQELC0EBIQhBACEFQQEhBkEAIQkDQCAEIAYiCiAFaiIOSwRAIAQgBWsgCkF/c2oiBiAETw0KIAVBf3MgBGogCWsiDSAETw0LAkAgAyAGai0AACIGIAMgDWotAAAiDUsEQCAOQQFqIgYgCWshCEEAIQUMAQsgBiANRwRAIApBAWohBkEAIQVBASEIIAohCQwBC0EAIAVBAWoiBiAGIAhGIg0bIQUgBkEAIA0bIApqIQYLIAcgCEcNAQsLIAQgDCAJIAkgDEkbayEMAkAgB0UEQEEAIQdBACEKDAELIAdBA3EhBkEAIQoCQCAHQQRJBEBBACEIDAELIAdBfHEhCUEAIQgDQEIBIAMgCGoiBUEDajEAAIZCASAFMQAAhiAPhEIBIAVBAWoxAACGhEIBIAVBAmoxAACGhIQhDyAJIAhBBGoiCEcNAAsLIAZFDQAgAyAIaiEFA0BCASAFMQAAhiAPhCEPIAVBAWohBSAGQQFrIgYNAAsLIAQLIQUgACAENgI8IAAgAzYCOCAAIAI2AjQgACABNgIwIAAgBTYCKCAAIAo2AiQgACACNgIgIABBADYCHCAAIAc2AhggACAMNgIUIAAgCzYCECAAIA83AwggAEEBNgIADwsgCCAEQdj0wAAQhQEACyANIARB2PTAABCFAQALIAsgBEG49MAAEIYBAAsgByAFQcj0wAAQhwEACyAFIARByPTAABCGAQALIAYgBEHo9MAAEIUBAAsgCSAEQfj0wAAQhQEACyAGIARB6PTAABCFAQALIA0gBEH49MAAEIUBAAuECQIFfwN+AkACQAJAAkAgAUEITwRAIAFBB3EiAkUNAiAAKAKgASIDQSlPDQMgA0UEQCAAQQA2AqABDAMLIANBAWtB/////wNxIgVBAWoiBEEDcSEGIAJBAnRByOjAAGooAgAgAnatIQggBUEDSQRAIAAhAgwCCyAEQfz///8HcSEFIAAhAgNAIAIgAjUCACAIfiAHfCIHPgIAIAJBBGoiBCAENQIAIAh+IAdCIIh8Igc+AgAgAkEIaiIEIAQ1AgAgCH4gB0IgiHwiBz4CACACQQxqIgQgBDUCACAIfiAHQiCIfCIJPgIAIAlCIIghByACQRBqIQIgBUEEayIFDQALDAELIAAoAqABIgNBKU8NAiADRQRAIABBADYCoAEPCyABQQJ0QcjowABqNQIAIQggA0EBa0H/////A3EiAUEBaiICQQNxIQYCQCABQQNJBEAgACECDAELIAJB/P///wdxIQUgACECA0AgAiACNQIAIAh+IAd8Igc+AgAgAkEEaiIBIAE1AgAgCH4gB0IgiHwiBz4CACACQQhqIgEgATUCACAIfiAHQiCIfCIHPgIAIAJBDGoiASABNQIAIAh+IAdCIIh8Igk+AgAgCUIgiCEHIAJBEGohAiAFQQRrIgUNAAsLIAYEQANAIAIgAjUCACAIfiAHfCIJPgIAIAJBBGohAiAJQiCIIQcgBkEBayIGDQALCwJAIAAgCUKAgICAEFoEfyADQShGDQEgACADQQJ0aiAHPgIAIANBAWoFIAMLNgKgAQ8LDAMLIAYEQANAIAIgAjUCACAIfiAHfCIJPgIAIAJBBGohAiAJQiCIIQcgBkEBayIGDQALCwJAIAAgCUKAgICAEFoEfyADQShGDQEgACADQQJ0aiAHPgIAIANBAWoFIAMLNgKgAQwBCwwCCwJAIAFBCHEEQAJAAkAgACgCoAEiA0EpSQRAIANFBEBBACEDDAMLIANBAWtB/////wNxIgJBAWoiBUEDcSEGIAJBA0kEQEIAIQcgACECDAILIAVB/P///wdxIQVCACEHIAAhAgNAIAIgAjUCAELh6xd+IAd8Igc+AgAgAkEEaiIEIAQ1AgBC4esXfiAHQiCIfCIHPgIAIAJBCGoiBCAENQIAQuHrF34gB0IgiHwiBz4CACACQQxqIgQgBDUCAELh6xd+IAdCIIh8Igg+AgAgCEIgiCEHIAJBEGohAiAFQQRrIgUNAAsMAQsMBAsgBgRAA0AgAiACNQIAQuHrF34gB3wiCD4CACACQQRqIQIgCEIgiCEHIAZBAWsiBg0ACwsgCEKAgICAEFQNACADQShGDQIgACADQQJ0aiAHPgIAIANBAWohAwsgACADNgKgAQsgAUEQcQRAIABByNXAAEECEBwLIAFBIHEEQCAAQdDVwABBAxAcCyABQcAAcQRAIABB3NXAAEEFEBwLIAFBgAFxBEAgAEHw1cAAQQoQHAsgAUGAAnEEQCAAQZjWwABBExAcCyAAIAEQLRoPCwwBCyADQShBoIPBABCGAQALQShBKEGgg8EAEIUBAAvGBgEIfwJAAkAgASAAQQNqQXxxIgMgAGsiCEkNACABIAhrIgZBBEkNACAGQQNxIQdBACEBAkAgACADRiIJDQACQCAAIANrIgRBfEsEQEEAIQMMAQtBACEDA0AgASAAIANqIgIsAABBv39KaiACQQFqLAAAQb9/SmogAkECaiwAAEG/f0pqIAJBA2osAABBv39KaiEBIANBBGoiAw0ACwsgCQ0AIAAgA2ohAgNAIAEgAiwAAEG/f0pqIQEgAkEBaiECIARBAWoiBA0ACwsgACAIaiEDAkAgB0UNACADIAZBfHFqIgAsAABBv39KIQUgB0EBRg0AIAUgACwAAUG/f0pqIQUgB0ECRg0AIAUgACwAAkG/f0pqIQULIAZBAnYhBiABIAVqIQQDQCADIQAgBkUNAkHAASAGIAZBwAFPGyIFQQNxIQcgBUECdCEDQQAhAiAGQQRPBEAgACADQfAHcWohCCAAIQEDQCACIAEoAgAiAkF/c0EHdiACQQZ2ckGBgoQIcWogASgCBCICQX9zQQd2IAJBBnZyQYGChAhxaiABKAIIIgJBf3NBB3YgAkEGdnJBgYKECHFqIAEoAgwiAkF/c0EHdiACQQZ2ckGBgoQIcWohAiABQRBqIgEgCEcNAAsLIAYgBWshBiAAIANqIQMgAkEIdkH/gfwHcSACQf+B/AdxakGBgARsQRB2IARqIQQgB0UNAAsCfyAAIAVB/AFxQQJ0aiIAKAIAIgFBf3NBB3YgAUEGdnJBgYKECHEiASAHQQFGDQAaIAEgACgCBCIBQX9zQQd2IAFBBnZyQYGChAhxaiIBIAdBAkYNABogACgCCCIAQX9zQQd2IABBBnZyQYGChAhxIAFqCyIBQQh2Qf+BHHEgAUH/gfwHcWpBgYAEbEEQdiAEag8LIAFFBEBBAA8LIAFBA3EhAwJAIAFBBEkEQAwBCyABQXxxIQUDQCAEIAAgAmoiASwAAEG/f0pqIAFBAWosAABBv39KaiABQQJqLAAAQb9/SmogAUEDaiwAAEG/f0pqIQQgBSACQQRqIgJHDQALCyADRQ0AIAAgAmohAQNAIAQgASwAAEG/f0pqIQQgAUEBaiEBIANBAWsiAw0ACwsgBAvNBgEOfyMAQRBrIgYkAEEBIQwCQCACKAIUIglBIiACKAIYIg0oAhAiDhEAAA0AAkAgAUUEQEEAIQIMAQtBACABayEPIAAhByABIQMCQAJ/AkACQANAIAMgB2ohEEEAIQICQANAIAIgB2oiCi0AACIFQf8Aa0H/AXFBoQFJIAVBIkZyIAVB3ABGcg0BIAMgAkEBaiICRw0ACyADIAhqDAQLIApBAWohBwJAIAosAAAiC0EATgRAIAtB/wFxIQMMAQsgBy0AAEE/cSEDIAtBH3EhBSAKQQJqIQcgC0FfTQRAIAVBBnQgA3IhAwwBCyAHLQAAQT9xIANBBnRyIQMgCkEDaiEHIAtBcEkEQCADIAVBDHRyIQMMAQsgBUESdEGAgPAAcSAHLQAAQT9xIANBBnRyciEDIApBBGohBwsgBkEEaiADQYGABBAfAkACQCAGLQAEQYABRg0AIAYtAA8gBi0ADmtB/wFxQQFGDQAgBCACIAhqIgVLDQMCQCAERQ0AIAEgBEsEQCAAIARqLAAAQb9/Sg0BDAULIAEgBEcNBAsCQCAFRQ0AIAEgBUsEQCAAIAhqIAJqLAAAQb9/TA0FDAELIAUgD2oNBAsgCSAAIARqIAggBGsgAmogDSgCDCIFEQIADQECQCAGLQAEQYABRgRAIAkgBigCCCAOEQAARQ0BDAMLIAkgBi0ADiIEIAZBBGpqIAYtAA8gBGsgBRECAA0CCwJ/QQEgA0GAAUkNABpBAiADQYAQSQ0AGkEDQQQgA0GAgARJGwsgCGogAmohBAsCf0EBIANBgAFJDQAaQQIgA0GAEEkNABpBA0EEIANBgIAESRsLIAhqIgUgAmohCCAQIAdrIgNFDQMMAQsLDAULIAAgASAEIAVBtPLAABDdAQALIAIgBWoLIgIgBEkNAEEAIQMCQCAERQ0AIAEgBEsEQCAEIgMgAGosAABBv39MDQIMAQsgBCIDIAFHDQELIAJFBEBBACECDAILIAEgAksEQCADIQQgACACaiwAAEG/f0oNAgwBCyADIQQgASACRg0BCyAAIAEgBCACQcTywAAQ3QEACyAJIAAgA2ogAiADayANKAIMEQIADQAgCUEiIA4RAAAhDAsgBkEQaiQAIAwL2QUCDH8DfiMAQaABayIDJAAgA0EAQaABEGkhCgJAAkACQAJAIAIgACgCoAEiBU0EQCAFQSlPDQEgASACQQJ0aiEMAkACQCAFBEAgBUEBaiENIAVBAnQhCQNAIAogBkECdGohAwNAIAYhAiADIQQgASAMRg0JIARBBGohAyACQQFqIQYgASgCACEIIAFBBGoiCyEBIAhFDQALIAitIRFCACEPIAkhCCACIQEgACEDA0AgAUEoTw0EIAQgDyAENQIAfCADNQIAIBF+fCIQPgIAIBBCIIghDyAEQQRqIQQgAUEBaiEBIANBBGohAyAIQQRrIggNAAsgByAQQoCAgIAQWgR/IAIgBWoiAUEoTw0DIAogAUECdGogDz4CACANBSAFCyACaiIBIAEgB0kbIQcgCyEBDAALAAsDQCABIAxGDQcgBEEBaiEEIAEoAgAgAUEEaiEBRQ0AIAcgBEEBayICIAIgB0kbIQcMAAsACyABQShBoIPBABCFAQALIAFBKEGgg8EAEIUBAAsgBUEpTw0BIAJBAnQhDCACQQFqIQ0gACAFQQJ0aiEOIAAhAwNAIAogCEECdGohBgNAIAghCyAGIQQgAyAORg0FIARBBGohBiALQQFqIQggAygCACEJIANBBGoiBSEDIAlFDQALIAmtIRFCACEPIAwhCSALIQMgASEGAkADQCADQShPDQEgBCAPIAQ1AgB8IAY1AgAgEX58IhA+AgAgEEIgiCEPIARBBGohBCADQQFqIQMgBkEEaiEGIAlBBGsiCQ0ACyAHIBBCgICAgBBaBH8gAiALaiIDQShPDQUgCiADQQJ0aiAPPgIAIA0FIAILIAtqIgMgAyAHSRshByAFIQMMAQsLIANBKEGgg8EAEIUBAAsgBUEoQaCDwQAQhgEACyAFQShBoIPBABCGAQALIANBKEGgg8EAEIUBAAsgACAKQaABEEAgBzYCoAEgCkGgAWokAAuqBQEGfwJAIAAoAgAiCCAAKAIIIgRBAXFyBEACQCAEQQFxRQ0AIAEgAmohBwJAIAAoAgwiBkUEQCABIQQMAQsgASEEA0AgBCIDIAdGDQICfyADQQFqIAMsAAAiBEEATg0AGiADQQJqIARBYEkNABogA0EDaiAEQXBJDQAaIANBBGoLIgQgA2sgBWohBSAGQQFrIgYNAAsLIAQgB0YNACAELAAAGiAFIAICfwJAIAVFDQAgAiAFSwRAIAEgBWosAABBv39KDQFBAAwCCyACIAVGDQBBAAwBCyABCyIDGyECIAMgASADGyEBCyAIRQ0BIAAoAgQhBwJAIAJBEE8EQCABIAIQGiEDDAELIAJFBEBBACEDDAELIAJBA3EhBgJAIAJBBEkEQEEAIQNBACEFDAELIAJBDHEhCEEAIQNBACEFA0AgAyABIAVqIgQsAABBv39KaiAEQQFqLAAAQb9/SmogBEECaiwAAEG/f0pqIARBA2osAABBv39KaiEDIAggBUEEaiIFRw0ACwsgBkUNACABIAVqIQQDQCADIAQsAABBv39KaiEDIARBAWohBCAGQQFrIgYNAAsLAkAgAyAHSQRAIAcgA2shBEEAIQMCQAJAAkAgAC0AIEEBaw4CAAECCyAEIQNBACEEDAELIARBAXYhAyAEQQFqQQF2IQQLIANBAWohAyAAKAIQIQYgACgCGCEFIAAoAhQhAANAIANBAWsiA0UNAiAAIAYgBSgCEBEAAEUNAAtBAQ8LDAILIAAgASACIAUoAgwRAgAEQEEBDwtBACEDA0AgAyAERgRAQQAPCyADQQFqIQMgACAGIAUoAhARAABFDQALIANBAWsgBEkPCyAAKAIUIAEgAiAAKAIYKAIMEQIADwsgACgCFCABIAIgACgCGCgCDBECAAvqBQEHfwJ/IAFFBEAgACgCHCEIQS0hCiAFQQFqDAELQStBgIDEACAAKAIcIghBAXEiARshCiABIAVqCyEHAkAgCEEEcUUEQEEAIQIMAQsCQCADQRBPBEAgAiADEBohAQwBCyADRQRAQQAhAQwBCyADQQNxIQkCQCADQQRJBEBBACEBDAELIANBDHEhDEEAIQEDQCABIAIgBmoiCywAAEG/f0pqIAtBAWosAABBv39KaiALQQJqLAAAQb9/SmogC0EDaiwAAEG/f0pqIQEgDCAGQQRqIgZHDQALCyAJRQ0AIAIgBmohBgNAIAEgBiwAAEG/f0pqIQEgBkEBaiEGIAlBAWsiCQ0ACwsgASAHaiEHCyAAKAIARQRAIAAoAhQiASAAKAIYIgAgCiACIAMQqgEEQEEBDwsgASAEIAUgACgCDBECAA8LAkACQAJAIAcgACgCBCIGTwRAIAAoAhQiASAAKAIYIgAgCiACIAMQqgFFDQFBAQ8LIAhBCHFFDQEgACgCECELIABBMDYCECAALQAgIQxBASEBIABBAToAICAAKAIUIgggACgCGCIJIAogAiADEKoBDQIgBiAHa0EBaiEBAkADQCABQQFrIgFFDQEgCEEwIAkoAhARAABFDQALQQEPCyAIIAQgBSAJKAIMEQIABEBBAQ8LIAAgDDoAICAAIAs2AhBBAA8LIAEgBCAFIAAoAgwRAgAhAQwBCyAGIAdrIQcCQAJAAkAgAC0AICIBQQFrDgMAAQACCyAHIQFBACEHDAELIAdBAXYhASAHQQFqQQF2IQcLIAFBAWohASAAKAIQIQggACgCGCEGIAAoAhQhAAJAA0AgAUEBayIBRQ0BIAAgCCAGKAIQEQAARQ0AC0EBDwtBASEBIAAgBiAKIAIgAxCqAQ0AIAAgBCAFIAYoAgwRAgANAEEAIQEDQCABIAdGBEBBAA8LIAFBAWohASAAIAggBigCEBEAAEUNAAsgAUEBayAHSQ8LIAELvgsBBX8jAEEgayIEJAACQAJAAkACQAJAAkACQAJAAkACQAJAAkAgAQ4oBgEBAQEBAQEBAgQBAQMBAQEBAQEBAQEBAQEBAQEBAQEBAQgBAQEBBwALIAFB3ABGDQQLIAJBAXFFIAFBgAZJcg0HAn8CQCABQaqdBEtBBHQiAiACQQhyIgMgAUELdCICIANBAnRBpITBAGooAgBBC3RJGyIDIANBBHIiAyADQQJ0QaSEwQBqKAIAQQt0IAJLGyIDIANBAnIiAyADQQJ0QaSEwQBqKAIAQQt0IAJLGyIDIANBAWoiAyADQQJ0QaSEwQBqKAIAQQt0IAJLGyIDIANBAWoiAyADQQJ0QaSEwQBqKAIAQQt0IAJLGyIDQQJ0QaSEwQBqKAIAQQt0IgUgAkYgAiAFS2ogA2oiA0EgTQRAIANBAnRBpITBAGoiBigCAEEVdiECQdcFIQUCfwJAIANBIEYNACAGKAIEQRV2IQUgAw0AQQAMAQsgA0ECdEGghMEAaigCAEH///8AcQshAwJAIAUgAkF/c2pFDQAgASADayEHQdcFIAIgAkHXBU0bIQYgBUEBayEDQQAhBQNAIAIgBkYNAyAFIAJBqIXBAGotAABqIgUgB0sNASADIAJBAWoiAkcNAAsgAyECCyACQQFxDAILIANBIUHogsEAEIUBAAsgBkHXBUH4gsEAEIUBAAtFDQcgBEEAOgAKIARBADsBCCAEIAFBFHZB3OzAAGotAAA6AAsgBCABQQR2QQ9xQdzswABqLQAAOgAPIAQgAUEIdkEPcUHc7MAAai0AADoADiAEIAFBDHZBD3FB3OzAAGotAAA6AA0gBCABQRB2QQ9xQdzswABqLQAAOgAMIAFBAXJnQQJ2IgIgBEEIaiIDaiIFQfsAOgAAIAVBAWtB9QA6AAAgAyACQQJrIgJqQdwAOgAAIARBEGoiAyABQQ9xQdzswABqLQAAOgAAIABBCjoACyAAIAI6AAogACAEKQIINwIAIARB/QA6ABEgAEEIaiADLwEAOwEADAkLIABBgAQ7AQogAEIANwECIABB3OgBOwEADAgLIABBgAQ7AQogAEIANwECIABB3OQBOwEADAcLIABBgAQ7AQogAEIANwECIABB3NwBOwEADAYLIABBgAQ7AQogAEIANwECIABB3LgBOwEADAULIABBgAQ7AQogAEIANwECIABB3OAAOwEADAQLIAJBgAJxRQ0BIABBgAQ7AQogAEIANwECIABB3M4AOwEADAMLIAJBgIAEcQ0BCwJ/QQAgAUEgSQ0AGkEBIAFB/wBJDQAaIAFBgIAETwRAIAFB4P//AHFB4M0KRyABQf7//wBxQZ7wCkdxIAFBwO4Ka0F6SXEgAUGwnQtrQXJJcSABQfDXC2tBcUlxIAFBgPALa0HebElxIAFBgIAMa0GedElxIAFB0KYMa0F7SXEgAUGAgjhrQbDFVElxIAFB8IM4SXEgAUGAgAhPDQEaIAFBzPfAAEEsQaT4wABBxAFB6PnAAEHCAxA7DAELIAFBqv3AAEEoQfr9wABBoAJBmoDBAEGtAhA7C0UEQCAEQQA6ABYgBEEAOwEUIAQgAUEUdkHc7MAAai0AADoAFyAEIAFBBHZBD3FB3OzAAGotAAA6ABsgBCABQQh2QQ9xQdzswABqLQAAOgAaIAQgAUEMdkEPcUHc7MAAai0AADoAGSAEIAFBEHZBD3FB3OzAAGotAAA6ABggAUEBcmdBAnYiAiAEQRRqIgNqIgVB+wA6AAAgBUEBa0H1ADoAACADIAJBAmsiAmpB3AA6AAAgBEEcaiIDIAFBD3FB3OzAAGotAAA6AAAgAEEKOgALIAAgAjoACiAAIAQpAhQ3AgAgBEH9ADoAHSAAQQhqIAMvAQA7AQAMAgsgACABNgIEIABBgAE6AAAMAQsgAEGABDsBCiAAQgA3AQIgAEHcxAA7AQALIARBIGokAAv+BQEFfyAAQQhrIgEgAEEEaygCACIDQXhxIgBqIQICQAJAIANBAXENACADQQJxRQ0BIAEoAgAiAyAAaiEAIAEgA2siAUGkkcEAKAIARgRAIAIoAgRBA3FBA0cNAUGckcEAIAA2AgAgAiACKAIEQX5xNgIEIAEgAEEBcjYCBCACIAA2AgAPCyABIAMQPAsCQAJAAkACQAJAIAIoAgQiA0ECcUUEQCACQaiRwQAoAgBGDQIgAkGkkcEAKAIARg0DIAIgA0F4cSICEDwgASAAIAJqIgBBAXI2AgQgACABaiAANgIAIAFBpJHBACgCAEcNAUGckcEAIAA2AgAPCyACIANBfnE2AgQgASAAQQFyNgIEIAAgAWogADYCAAsgAEGAAkkNAiABIAAQR0EAIQFBvJHBAEG8kcEAKAIAQQFrIgA2AgAgAA0EQYSPwQAoAgAiAARAA0AgAUEBaiEBIAAoAggiAA0ACwtBvJHBAEH/HyABIAFB/x9NGzYCAA8LQaiRwQAgATYCAEGgkcEAQaCRwQAoAgAgAGoiADYCACABIABBAXI2AgRBpJHBACgCACABRgRAQZyRwQBBADYCAEGkkcEAQQA2AgALIABBtJHBACgCACIDTQ0DQaiRwQAoAgAiAkUNA0EAIQBBoJHBACgCACIEQSlJDQJB/I7BACEBA0AgAiABKAIAIgVPBEAgAiAFIAEoAgRqSQ0ECyABKAIIIQEMAAsAC0GkkcEAIAE2AgBBnJHBAEGckcEAKAIAIABqIgA2AgAgASAAQQFyNgIEIAAgAWogADYCAA8LIABB+AFxQYyPwQBqIQICf0GUkcEAKAIAIgNBASAAQQN2dCIAcUUEQEGUkcEAIAAgA3I2AgAgAgwBCyACKAIICyEAIAIgATYCCCAAIAE2AgwgASACNgIMIAEgADYCCA8LQYSPwQAoAgAiAQRAA0AgAEEBaiEAIAEoAggiAQ0ACwtBvJHBAEH/HyAAIABB/x9NGzYCACADIARPDQBBtJHBAEF/NgIACwuqBQEFfyMAQaABayIFJAACQCABIAJyRQRAQQAhAwwBCyADLQB5IgFBAkcgAUEBcXFFBEAgBUEUaiIBIANBAEGog8AAQR0QPyAFIAEQoAEgBSgCBCEBIAUoAgAhAwwBC0EAIQIgBUEgaiADQQBB6ILAAEEzED8gBSgCJCEDIAUoAighBiAFIAQoAgBBAWo2AkAgBUEANgKcASAFQoCAgIAQNwKUASAFQQM6AHAgBUEgNgJgIAVBADYCbCAFQYCAwAA2AmggBUEANgJYIAVBADYCUCAFIAVBlAFqNgJkIAVBQGsgBUHQAGoQ8QFFBEAgBUE4aiAFQZwBaigCACIENgIAIAUgBSkClAE3AzAgBSgCNCEIIAVBADYCTCAFQoCAgIAQNwJEIAVB0ABqIgEgAyAGQZuDwABBDRAYIAVBlAFqIAEQLCAFKAKUAUEBRgRAQQAhAQNAIAUoApwBIQIgBUHEAGoiCSAFKAKYASABayIHELwBIAUoAkggBSgCTGogASADaiAHEEAaIAUgBSgCTCAHajYCTCAJIAQQvAEgBSgCSCAFKAJMaiAIIAQQQBogBSAFKAJMIARqNgJMIAVBlAFqIAVB0ABqECwgAiEBIAUoApQBDQALCyAFQcQAaiAGIAJrIgEQvAEgBSgCSCAFQcwAaiIEKAIAaiACIANqIAEQQBogBUHYAGoiAiAEKAIAIAFqNgIAIAUgBSkCRDcDUCAFQSBqENIBIAVBKGoiASACKAIANgIAIAUgBSkDUDcDICAFQTBqENIBIAIgASgCADYCACAFIAUpAyA3A1AgBUEIaiAFQdAAahCgASAFKAIMIQEgBSgCCCEDDAELQaiAwABBNyAFQcQAakGYgMAAQayBwAAQewALIAAgATYCBCAAIAM2AgAgBUGgAWokAAv8BQIBfwF8IwBBMGsiAiQAAn8CQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkAgAC0AAEEBaw4RAQIDBAUGBwgJCgsMDQ4PEBEACyACIAAtAAE6AAggAkECNgIUIAJBkMLAADYCECACQgE3AhwgAkE+NgIsIAIgAkEoajYCGCACIAJBCGo2AiggASgCFCABKAIYIAJBEGoQIwwRCyACIAApAwg3AwggAkECNgIUIAJBrMLAADYCECACQgE3AhwgAkE/NgIsIAIgAkEoajYCGCACIAJBCGo2AiggASgCFCABKAIYIAJBEGoQIwwQCyACIAApAwg3AwggAkECNgIUIAJBrMLAADYCECACQgE3AhwgAkHAADYCLCACIAJBKGo2AhggAiACQQhqNgIoIAEoAhQgASgCGCACQRBqECMMDwsgACsDCCEDIAJBAjYCFCACQczCwAA2AhAgAkIBNwIcIAJBwQA2AgwgAiADOQMoIAIgAkEIajYCGCACIAJBKGo2AgggASgCFCABKAIYIAJBEGoQIwwOCyACIAAoAgQ2AgggAkECNgIUIAJB6MLAADYCECACQgE3AhwgAkHCADYCLCACIAJBKGo2AhggAiACQQhqNgIoIAEoAhQgASgCGCACQRBqECMMDQsgAiAAKQIENwIIIAJBATYCFCACQYDDwAA2AhAgAkIBNwIcIAJBwwA2AiwgAiACQShqNgIYIAIgAkEIajYCKCABKAIUIAEoAhggAkEQahAjDAwLIAFB+cHAAEEKENsBDAsLIAFBiMPAAEEKENsBDAoLIAFBksPAAEEMENsBDAkLIAFBnsPAAEEOENsBDAgLIAFBrMPAAEEIENsBDAcLIAFBtMPAAEEDENsBDAYLIAFBt8PAAEEEENsBDAULIAFBu8PAAEEMENsBDAQLIAFBx8PAAEEPENsBDAMLIAFB1sPAAEENENsBDAILIAFB48PAAEEOENsBDAELIAEgACgCBCAAKAIIENsBCyACQTBqJAAL7gQBCn8jAEEwayIDJAAgA0EDOgAsIANBIDYCHCADQQA2AiggAyABNgIkIAMgADYCICADQQA2AhQgA0EANgIMAn8CQAJAAkAgAigCECIKRQRAIAIoAgwiAEUNASACKAIIIQEgAEEDdCEFIABBAWtB/////wFxQQFqIQcgAigCACEAA0AgAEEEaigCACIEBEAgAygCICAAKAIAIAQgAygCJCgCDBECAA0ECyABKAIAIANBDGogASgCBBEAAA0DIAFBCGohASAAQQhqIQAgBUEIayIFDQALDAELIAIoAhQiAEUNACAAQQV0IQsgAEEBa0H///8/cUEBaiEHIAIoAgghCCACKAIAIQADQCAAQQRqKAIAIgEEQCADKAIgIAAoAgAgASADKAIkKAIMEQIADQMLIAMgBSAKaiIBQRBqKAIANgIcIAMgAUEcai0AADoALCADIAFBGGooAgA2AiggAUEMaigCACEEQQAhCUEAIQYCQAJAAkAgAUEIaigCAEEBaw4CAAIBCyAEQQN0IAhqIgwoAgQNASAMKAIAIQQLQQEhBgsgAyAENgIQIAMgBjYCDCABQQRqKAIAIQQCQAJAAkAgASgCAEEBaw4CAAIBCyAEQQN0IAhqIgYoAgQNASAGKAIAIQQLQQEhCQsgAyAENgIYIAMgCTYCFCAIIAFBFGooAgBBA3RqIgEoAgAgA0EMaiABKAIEEQAADQIgAEEIaiEAIAsgBUEgaiIFRw0ACwsgByACKAIETw0BIAMoAiAgAigCACAHQQN0aiIAKAIAIAAoAgQgAygCJCgCDBECAEUNAQtBAQwBC0EACyADQTBqJAALxwUCB38BfCMAQZABayIDJAACQAJAAkAgACgCACIEEPYBRQRAQQFBAiAEEJUCIgVBAUYbQQAgBRsiCEECRg0BQQAhBQwCCyADQQc6AHAgA0HwAGogASACEIoBIQAMAgsgA0EoaiAEJQEQByADKAIoIQUgA0EYaiIHIAMrAzA5AwggByAFQQBHrTcDACADKQMYp0EBRwRAIANBEGogBBCPAgJ/AkAgAygCECIERQ0AIANBCGogBCADKAIUEKQBIANB2ABqIAMoAgggAygCDBDVASADKAJYQYCAgIB4Rg0AIANBQGsgA0HgAGooAgAiBDYCACADIAMpAlg3AzhBBSEFQQEhBiADKAI8DAELIANB5ABqIQUjAEEQayIEJAACQCAAKAIAJQEQEQRAIARBBGogABCCASAFQQhqIARBDGooAgA2AgAgBSAEKQIENwIADAELIAAoAgAlARAMRQRAIAVBgICAgHg2AgAMAQsgBCAAKAIAENcBIgY2AgAgBEEEaiAEEIIBIAVBCGogBEEMaigCADYCACAFIAQpAgQ3AgAgBkGEAUkNACAGEGgLIARBEGokAAJ/IAMoAmQiBkGAgICAeEciCUUEQCADQUBrIQQgA0E8aiEHIANBATYCdCADQbiWwAA2AnAgA0IBNwJ8IANBJTYCjAEgAyAANgKIASADIANBiAFqNgJ4IANBOGogA0HwAGoQOUERDAELIANB0ABqIgAhBCADQcwAaiEHIAAgA0HsAGooAgA2AgAgAyADKQJkNwNIQQYLIQUgBkGAgICAeEYhBiAEKAIAIQQgBygCAAshACAErb8hCgwBCyADKwMgIQpBAyEFCyADIAo5A3ggAyAANgJ0IAMgCDoAcSADIAU6AHAgA0HwAGogASACEIoBIQAgCQRAIANByABqENIBCyAGRQ0AIANBOGoQ0gELIANBkAFqJAAgAAvmDAEFfyMAQSBrIgYkACMAQSBrIgMkACAGQRRqIgQCfyAAKAIIIgUgACgCBE8EQCADQQQ2AhQgA0EIaiAAIAUQMSAEIANBFGogAygCCCADKAIMEJwBNgIEQQEMAQsgACAFQQFqNgIIIAQgACgCACAFai0AADoAAUEACzoAACADQSBqJAACfwJAAkACQAJAAkACQAJAAkACQAJAIAYtABRFBEAgBi0AFSIDQe0ATQRAIANB4QBNBEAgA0EiRg0DIANBL0YNBSADQdwARg0EDAwLIANB4gBrDgUFCwsLBgsLIANB7gBrDggGCgoKBwoICQoLIAYoAhgMCgsgAigCCCIAIAIoAgBGBEAgAhCeAQsgAigCBCAAakEiOgAAIAIgAEEBajYCCEEADAkLIAIoAggiACACKAIARgRAIAIQngELIAIoAgQgAGpB3AA6AAAgAiAAQQFqNgIIQQAMCAsgAigCCCIAIAIoAgBGBEAgAhCeAQsgAigCBCAAakEvOgAAIAIgAEEBajYCCEEADAcLIAIoAggiACACKAIARgRAIAIQngELIAIoAgQgAGpBCDoAACACIABBAWo2AghBAAwGCyACKAIIIgAgAigCAEYEQCACEJ4BCyACKAIEIABqQQw6AAAgAiAAQQFqNgIIQQAMBQsgAigCCCIAIAIoAgBGBEAgAhCeAQsgAigCBCAAakEKOgAAIAIgAEEBajYCCEEADAQLIAIoAggiACACKAIARgRAIAIQngELIAIoAgQgAGpBDToAACACIABBAWo2AghBAAwDCyACKAIIIgAgAigCAEYEQCACEJ4BCyACKAIEIABqQQk6AAAgAiAAQQFqNgIIQQAMAgsgASEFIwBBIGsiBCQAIARBFGogACIDEFICfwJAIAQvARQNAAJ/AkACQAJAAkACQAJAAkACQCAELwEWIgFBgPgDcUGAuANGQQAgBRtFBEAgAUGAyABqQf//A3FBgPgDTw0BIAEhAAwCCyAEQRQ2AhQgBCADIAMoAggQMSAEQRRqIAQoAgAgBCgCBBCcAQwKCwNAIARBFGogAxCBASAELQAUDQkgBC0AFUHcAEcNBSADIAMoAggiAEEBajYCCCAEQRRqIAMQgQEgBC0AFA0JIAQtABVB9QBHDQQgAyAAQQJqNgIIIARBFGogAxBSIAQvARQNCSAELwEWIgBBgEBrQf//A3FBgPgDTw0CIAUNAyACKAIAIAIoAggiB2tBA00EfyACIAdBBEEBQQEQowEgAigCCAUgBwsgAigCBGoiB0HtAToAACAHQQJqIAFBP3FBgAFyOgAAIAcgAUEGdkEvcUGAAXI6AAEgAiACKAIIQQNqNgIIIAAhASAAQYDIAGpB//8DcUGA+ANPDQALCyAAQf//A3FBgAFJDQQgAigCACACKAIIIgFrQQNNBH8gAiABQQRBAUEBEKMBIAIoAggFIAELIAIoAgRqIQEgAEH//wNxQYAQTw0FIABBBnZBQHIhA0ECDAYLIABBgMgAakH//wNxIAFBgNAAakH//wNxQQp0ciIFQYCABGohAyACKAIAIAIoAggiAWtBA00EfyACIAFBBEEBQQEQowEgAigCCAUgAQsgAigCBGoiASADQRJ2QfABcjoAACABQQNqIABBP3FBgAFyOgAAIAEgBUEGdkE/cUGAAXI6AAIgASADQQx2QT9xQYABcjoAASACIAIoAghBBGo2AghBAAwHCyAEQRQ2AhQgBEEIaiADIAMoAggQMSAEQRRqIAQoAgggBCgCDBCcAQwGCyAFRQRAIAFB//8DcSACEF8gA0EAIAIQJQwGCyADIABBAmo2AgggBEEXNgIUIAMgBEEUahCrAQwFCyAFRQRAIAFB//8DcSACEF9BAAwFCyADIAMoAghBAWo2AgggBEEXNgIUIAMgBEEUahCrAQwECyACKAIIIgEgAigCAEYEQCACEJ4BCyACKAIEIAFqIAA6AAAgAiABQQFqNgIIQQAMAwsgASAAQQZ2QT9xQYABcjoAASAAQYDgA3FBDHZBYHIhA0EDCyEFIAEgAzoAACABIAVqQQFrIABBP3FBgAFyOgAAIAIgAigCCCAFajYCCEEADAELIAQoAhgLIARBIGokAAwBCyAGQQw2AhQgBkEIaiAAIAAoAggQMSAGQRRqIAYoAgggBigCDBCcAQsgBkEgaiQAC7sEAQl/IwBBEGsiBCQAAkACQAJ/AkAgACgCAEEBRgRAIAAoAgQhBiAEIAEoAgwiAzYCDCAEIAEoAggiAjYCCCAEIAEoAgQiBTYCBCAEIAEoAgAiATYCACAALQAgIQkgACgCECEKIAAtABxBCHENASAKIQggCQwCCyAAKAIUIAAoAhggARAoIQIMAwsgACgCFCABIAUgACgCGCgCDBECAA0BIABBAToAIEEwIQggAEEwNgIQIARCATcCACAGIAVrIQFBACEFIAFBACABIAZNGyEGQQELIQcgAwRAIANBDGwhAwNAAn8CQAJAAkAgAi8BAEEBaw4CAgEACyACKAIEDAILIAIoAggMAQsgAi8BAiIBQegHTwRAQQRBBSABQZDOAEkbDAELQQEgAUEKSQ0AGkECQQMgAUHkAEkbCyACQQxqIQIgBWohBSADQQxrIgMNAAsLAn8CQCAFIAZJBEAgBiAFayEDAkACQAJAIAdB/wFxIgJBAWsOAwABAAILIAMhAkEAIQMMAQsgA0EBdiECIANBAWpBAXYhAwsgAkEBaiECIAAoAhghByAAKAIUIQEDQCACQQFrIgJFDQIgASAIIAcoAhARAABFDQALDAMLIAAoAhQgACgCGCAEECgMAQsgASAHIAQQKA0BQQAhAgJ/A0AgAyACIANGDQEaIAJBAWohAiABIAggBygCEBEAAEUNAAsgAkEBawsgA0kLIQIgACAJOgAgIAAgCjYCEAwBC0EBIQILIARBEGokACACC48EAQ1/IAFBAWshDyAAKAIEIQogACgCACELIAAoAgghDAJAA0AgDg0BAkACQCACIARJDQADQCABIARqIQUCQAJAAkAgAiAEayIGQQdNBEAgAiAERw0BIAIhBAwFCwJAIAVBA2pBfHEiCCAFayIDBEBBACEAA0AgACAFai0AAEEKRg0FIAMgAEEBaiIARw0ACyADIAZBCGsiAE0NAQwDCyAGQQhrIQALA0BBgIKECCAIKAIAIglBipSo0ABzayAJckGAgoQIIAhBBGooAgAiCUGKlKjQAHNrIAlycUGAgYKEeHFBgIGChHhHDQIgCEEIaiEIIANBCGoiAyAATQ0ACwwBC0EAIQADQCAAIAVqLQAAQQpGDQIgBiAAQQFqIgBHDQALIAIhBAwDCyADIAZGBEAgAiEEDAMLA0AgAyAFai0AAEEKRgRAIAMhAAwCCyAGIANBAWoiA0cNAAsgAiEEDAILIAAgBGoiA0EBaiEEAkAgAiADTQ0AIAAgBWotAABBCkcNACAEIQUgBCEADAMLIAIgBE8NAAsLQQEhDiACIgAgByIFRg0CCwJAIAwtAAAEQCALQdjvwABBBCAKKAIMEQIADQELQQAhAyAAIAdHBEAgACAPai0AAEEKRiEDCyAAIAdrIQAgASAHaiEGIAwgAzoAACAFIQcgCyAGIAAgCigCDBECAEUNAQsLQQEhDQsgDQv+AwEJfyMAQRBrIgQkAAJ/AkAgAigCBCIDRQ0AIAAgAigCACADIAEoAgwRAgBFDQBBAQwBCyACKAIMIgYEQCACKAIIIgMgBkEMbGohCCAEQQxqIQkDQAJAAkACQAJAIAMvAQBBAWsOAgIBAAsCQCADKAIEIgJBwQBPBEAgAUEMaigCACEGA0BBASAAQdbxwABBwAAgBhECAA0IGiACQUBqIgJBwABLDQALDAELIAJFDQMLIABB1vHAACACIAFBDGooAgARAgBFDQJBAQwFCyAAIAMoAgQgAygCCCABQQxqKAIAEQIARQ0BQQEMBAsgAy8BAiECIAlBADoAACAEQQA2AggCf0EEQQUgAkGQzgBJGyACQegHTw0AGkEBIAJBCkkNABpBAkEDIAJB5ABJGwsiBiAEQQhqIgpqIgdBAWsiBSACIAJBCm4iC0EKbGtBMHI6AAACQCAFIApGDQAgB0ECayIFIAtBCnBBMHI6AAAgBEEIaiAFRg0AIAdBA2siBSACQeQAbkEKcEEwcjoAACAEQQhqIAVGDQAgB0EEayIFIAJB6AduQQpwQTByOgAAIARBCGogBUYNACAHQQVrIAJBkM4AbkEwcjoAAAsgACAEQQhqIAYgAUEMaigCABECAEUNAEEBDAMLIANBDGoiAyAIRw0ACwtBAAsgBEEQaiQAC+ADAQh/IwBB0ABrIgIkAAJAAn8gAUECTQRAQeSSwABBAiAAIAEQwgEMAQsgAkEQaiAAIAFB5JLAAEECEBgCQCACKAIQRQRAAkAgAi0AHg0AIAItABwhBCACKAJEIQMgAigCQCEFIAIoAhQhAQJAA0ACQCABRQ0AIAEgA0kEQCABIAVqLAAAQb9/Sg0BDAgLIAEgA0cNBwsgASADRwRAAn8gASAFaiIHLAAAIgBBAE4EQCAAQf8BcQwBCyAHLQABQT9xIQYgAEEfcSEIIAhBBnQgBnIgAEFfTQ0AGiAHLQACQT9xIAZBBnRyIQYgBiAIQQx0ciAAQXBJDQAaIAhBEnRBgIDwAHEgBy0AA0E/cSAGQQZ0cnILIQAgBEEBcQ0CQQEhBAJ/QQEgAEGAAUkNABpBAiAAQYAQSQ0AGkEDQQQgAEGAgARJGwsgAWohAQwBCwsgBEEBcUUNAQtBASEJCyACIAk2AgQMAQsgAkEYaiEAIAIoAkwhASACKAJIIQMgAigCRCEEIAIoAkAhBSACKAI0QX9HBEAgAkEEaiAAIAUgBCADIAFBABAwDAELIAJBBGogACAFIAQgAyABQQEQMAsgAigCBAsgAkHQAGokAA8LIAUgAyABIANB1JLAABDdAQALogUCB38BfiMAQTBrIgMkAAJAAkAgASgCFCIGIAEoAhAiB0kEQCABIAZBAWoiBDYCFCABQQxqIQUgASgCDCIIIAZqLQAAIglBMEYEQAJAIAQgB0kEQCAEIAhqLQAAQTBrQf8BcUEKSQ0BCyAAIAEgAkIAEFsMBAsgA0ENNgIgIANBCGogBSAHIAZBAmoiASABIAdLGxAxIANBIGogAygCCCADKAIMEJwBIQEgAEIDNwMAIAAgATYCCAwDCyAJQTFrQf8BcUEJTwRAIANBDTYCICADQRBqIAUgBBAxIANBIGogAygCECADKAIUEJwBIQEgAEIDNwMAIAAgATYCCAwDCyAJQTBrrUL/AYMhCgJAIAQgB08NAANAIAQgCGotAABBMGsiBkH/AXEiBUEKTw0BIAVBBUsgCkKZs+bMmbPmzBlSciAKQpmz5syZs+bMGVpxDQMgASAEQQFqIgQ2AhQgCkIKfiAGrUL/AYN8IQogBCAHRw0ACwsgACABIAIgChBbDAILIANBBTYCICADQRhqIAFBDGogBhAxIANBIGogAygCGCADKAIcEJwBIQEgAEIDNwMAIAAgATYCCAwBCyADQSBqIQYgAiEEQQAhAgJAAkACQCABKAIQIgcgASgCFCIFTQ0AIAVBAWohCCAHIAVrIQcgASgCDCAFaiEJA0AgAiAJai0AACIFQTBrQf8BcUEKTwRAIAVBLkYNAyAFQcUARyAFQeUAR3ENAiAGIAEgBCAKIAIQMgwECyABIAIgCGo2AhQgByACQQFqIgJHDQALIAchAgsgBiABIAQgCiACEFAMAQsgBiABIAQgCiACEDQLIAACfiADKAIgRQRAIAAgAysDKDkDCEIADAELIAAgAygCJDYCCEIDCzcDAAsgA0EwaiQAC+wDAQ1/IwBBEGsiCCQAAkAgAS0AJQ0AAkAgASgCECIHIAEoAgwiAkkNACAHIAEoAggiCUsNACABKAIEIQwgAUETaiENIAFBFGohDgNAIAEoAgQgAmohBCANIAEtABgiBmotAAAhBQJAAkACQAJAAkAgByACayILQQdNBEAgAiAHRwRAQQAhAwNAIAMgBGotAAAgBUYNAyALIANBAWoiA0cNAAsLIAEgBzYCDAwHCyAIQQhqIAUgBCALEE8gCCgCCCIDQQFHDQEgCCgCDCEDIAEtABghBiABKAIIIQkgASgCDCECCyABIAIgA2pBAWoiAjYCDCACIAZJIAIgCUtyDQMgBkEFTw0CIAIgBmsiBCABKAIEaiAGIA4gBhDCASEDIAEoAgwhAiADDQEgASgCCCEJDAMLIAEgASgCEDYCDCADQQFxRQ0ECyABKAIcIQUgASACNgIcIAUgDGohCiAEIAVrIQMMBAsgBkEEQZSLwAAQhgEACyABKAIQIgcgAkkNASAHIAlNDQALCyABLQAlDQAgAUEBOgAlAkAgAS0AJEEBRgRAIAEoAiAhBSABKAIcIQQMAQsgASgCICIFIAEoAhwiBEYNAQsgBSAEayEDIAEoAgQgBGohCgsgACADNgIEIAAgCjYCACAIQRBqJAAL1AMBCX8CQCABKAIARQRAAkAgAS0ADg0AIAEtAAwhByABKAI0IQMgASgCMCEJIAEoAgQhAgJAAkADQAJAIAJFDQAgAiADSQRAIAIgCWosAABBv39KDQEMBwsgAiADRw0GCyACIANHBEACfyACIAlqIgosAAAiCEEATgRAIAhB/wFxDAELIAotAAFBP3EhBSAIQR9xIQQgBEEGdCAFciAIQV9NDQAaIAotAAJBP3EgBUEGdHIhBSAFIARBDHRyIAhBcEkNABogBEESdEGAgPAAcSAKLQADQT9xIAVBBnRycgshBCAHQQFxDQJBASEHIAECf0EBIARBgAFJDQAaQQIgBEGAEEkNABpBA0EEIARBgIAESRsLIAJqIgI2AgQMAQsLIAEgB0F/c0EBcToADCAHQQFxDQEgAUEBOgAODAILIAFBADoADCACIQMLIAAgAzYCCCAAIAM2AgRBASEGCyAAIAY2AgAPCyABQQhqIQQgASgCPCEGIAEoAjghBSABKAI0IQIgASgCMCEDIAEoAiRBf0cEQCAAIAQgAyACIAUgBkEAEC8PCyAAIAQgAyACIAUgBkEBEC8PCyABIAdBf3NBAXE6AAwgCSADIAIgA0HEgsAAEN0BAAvaAwEHfwJAAkAgAUGACkkEQCABQQV2IQUCQAJAIAAoAqABIgQEQCAEQQFrIQMgBEECdCAAakEEayECIAQgBWpBAnQgAGpBBGshBiAEQSlJIQcDQCAHRQ0CIAMgBWoiBEEoTw0DIAYgAigCADYCACACQQRrIQIgBkEEayEGIANBAWsiA0F/Rw0ACwsgAUEfcSEIIAFBIE8EQCAAQQAgBUECdBBpGgsgACgCoAEgBWohAiAIRQRAIAAgAjYCoAEgAA8LIAJBAWsiB0EnSw0DIAIhBCAAIAdBAnRqKAIAIgZBACABayIDdiIBRQ0EIAJBJ00EQCAAIAJBAnRqIAE2AgAgAkEBaiEEDAULIAJBKEGgg8EAEIUBAAsgA0EoQaCDwQAQhQEACyAEQShBoIPBABCFAQALQcqDwQBBHUGgg8EAEKUBAAsgB0EoQaCDwQAQhQEACwJAIAIgBUEBaiIHSwRAIANBH3EhASACQQJ0IABqQQhrIQMDQCACQQJrQShPDQIgA0EEaiAGIAh0IAMoAgAiBiABdnI2AgAgA0EEayEDIAcgAkEBayICSQ0ACwsgACAFQQJ0aiIBIAEoAgAgCHQ2AgAgACAENgKgASAADwtBf0EoQaCDwQAQhQEAC6cDAQV/IAIEfyABIAJqIQdBASEGIAEhAgJAA0AgAiAHRg0BAn8gAiwAACIDQQBOBEAgA0H/AXEhAyACQQFqDAELIAItAAFBP3EhBCADQR9xIQUgA0FfTQRAIAVBBnQgBHIhAyACQQJqDAELIAItAAJBP3EgBEEGdHIhBCADQXBJBEAgBCAFQQx0ciEDIAJBA2oMAQsgBUESdEGAgPAAcSACLQADQT9xIARBBnRyciIDQYCAxABGDQIgAkEEagshAiADQT1GDQALQQAhBgtBASEFAkADQCABIAdGDQECfyABLAAAIgJBAE4EQCACQf8BcSECIAFBAWoMAQsgAS0AAUE/cSEEIAJBH3EhAyACQV9NBEAgA0EGdCAEciECIAFBAmoMAQsgAS0AAkE/cSAEQQZ0ciEEIAJBcEkEQCAEIANBDHRyIQIgAUEDagwBCyADQRJ0QYCA8ABxIAEtAANBP3EgBEEGdHJyIgJBgIDEAEYNAiABQQRqCyEBIAJBLUYNAAtBACEFC0EBQQIgBhshAiAFIAZyBUEACyEBIAAgAjYCBCAAIAE2AgALygMCDH8BfgJ/IAMgASgCFCIIIAVBAWsiDWoiB0sEQCAFIAEoAhAiDmshDyABKAIcIQsgASgCCCEKIAEpAwAhEwNAAkACQCATIAIgB2oxAACIQgGDUARAIAEgBSAIaiIINgIUQQAhByAGDQIMAQsgCiAKIAsgCiALSxsgBhsiCSAFIAUgCUkbIQwgAiAIaiEQIAkhBwJAAkACQANAIAcgDEYEQEEAIAsgBhshDCAKIQcDQCAHIAxNBEAgASAFIAhqIgI2AhQgBkUEQCABQQA2AhwLIAAgAjYCCCAAIAg2AgRBAQwLCyAHQQFrIgcgBU8NBSAHIAhqIgkgA08NAyAEIAdqLQAAIAIgCWotAABGDQALIAEgCCAOaiIINgIUIA8hByAGRQ0FDAYLIAcgCGogA08NAiAHIBBqIREgBCAHaiAHQQFqIQctAAAgES0AAEYNAAsgCCAKayAHaiEIIAYNBEEAIQcMAwsgCSADQZyCwAAQhQEACyADIAggCWoiACAAIANJGyADQayCwAAQhQEACyAHIAVBjILAABCFAQALIAEgBzYCHCAHIQsLIAggDWoiByADSQ0ACwsgASADNgIUQQALIQcgACAHNgIAC8oDAgx/AX4CfyADIAEoAhQiCCAFQQFrIg1qIgdLBEAgBSABKAIQIg5rIQ8gASgCHCELIAEoAgghCiABKQMAIRMDQAJAAkAgEyACIAdqMQAAiEIBg1AEQCABIAUgCGoiCDYCFEEAIQcgBg0CDAELIAogCiALIAogC0sbIAYbIgkgBSAFIAlJGyEMIAIgCGohECAJIQcCQAJAAkADQCAHIAxGBEBBACALIAYbIQwgCiEHA0AgByAMTQRAIAEgBSAIaiICNgIUIAZFBEAgAUEANgIcCyAAIAI2AgggACAINgIEQQEMCwsgB0EBayIHIAVPDQUgByAIaiIJIANPDQMgBCAHai0AACACIAlqLQAARg0ACyABIAggDmoiCDYCFCAPIQcgBkUNBQwGCyAHIAhqIANPDQIgByAQaiERIAQgB2ogB0EBaiEHLQAAIBEtAABGDQALIAggCmsgB2ohCCAGDQRBACEHDAMLIAkgA0G0ksAAEIUBAAsgAyAIIAlqIgAgACADSRsgA0HEksAAEIUBAAsgByAFQaSSwAAQhQEACyABIAc2AhwgByELCyAIIA1qIgcgA0kNAAsLIAEgAzYCFEEACyEHIAAgBzYCAAvgAwEGfwJAAkACQAJAAkAgAiABKAIEIghNBEAgASgCACEBQQEhByACQQBMDQQgASACaiIDIAEQkwIiBUEDTQRAA0AgASADTw0GIANBAWsiAy0AAEEKRw0ADAULAAtBgIKECCADQQRrKAAAIgZBipSo0ABzayAGckGAgYKEeHFBgIGChHhHBEADQCABIANPDQYgA0EBayIDLQAAQQpHDQAMBQsACyACIANBA3FrIQMgBUEJSQ0BA0AgAyIFQQhIDQNBgIKECCABIAVqIgZBCGsoAgAiA0GKlKjQAHNrIANyQYCBgoR4cUGAgYKEeEcNAyAFQQhrIQNBgIKECCAGQQRrKAIAIgZBipSo0ABzayAGckGAgYKEeHFBgIGChHhGDQALDAILIAIgCEG4uMAAEIYBAAsgASADaiEDA0AgASADTw0DIANBAWsiAy0AAEEKRw0ACwwBCyABIAVqIQMDQCABIANPDQIgA0EBayIDLQAAQQpHDQALCyADIAEQkwJBAWoiBCAISw0BCyAAIAEgBGogAUsEf0EAIQMgBCEHA0AgAyABLQAAQQpGaiEDIAFBAWohASAHQQFrIgcNAAsgA0EBagUgBws2AgAgACACIARrNgIEDwsgBCAIQci4wAAQhgEAC/IEAQd/IwBBIGsiBiQAQQEhCCABIAEoAhQiB0EBaiIFNgIUAkAgBSABKAIQIglPDQACQAJAIAEoAgwgBWotAABBK2sOAwECAAILQQAhCAsgASAHQQJqIgU2AhQLAkACQCAFIAlJBEAgASAFQQFqIgc2AhQgASgCDCILIAVqLQAAQTBrQf8BcSIFQQpPBEAgBkENNgIUIAYgAUEMaiAHEDEgBkEUaiAGKAIAIAYoAgQQnAEhASAAQQE2AgAgACABNgIEDAMLIAcgCU8NAQNAIAcgC2otAABBMGtB/wFxIgpBCk8NAiABIAdBAWoiBzYCFCAFQcyZs+YARyAKQQdLciAFQcuZs+YASnFFBEAgBUEKbCAKaiEFIAcgCUcNAQwDCwsjAEEgayIEJAAgAAJ/AkBBACAIIANQG0UEQCABKAIUIgUgASgCECIHTw0BIAEoAgwhCANAIAUgCGotAABBMGtB/wFxQQpPDQIgASAFQQFqIgU2AhQgBSAHRw0ACwwBCyAEQQ42AhQgBEEIaiABQQxqIAEoAhQQMSAAIARBFGogBCgCCCAEKAIMEJwBNgIEQQEMAQsgAEQAAAAAAAAAAEQAAAAAAAAAgCACGzkDCEEACzYCACAEQSBqJAAMAgsgBkEFNgIUIAZBCGogAUEMaiAFEDEgBkEUaiAGKAIIIAYoAgwQnAEhASAAQQE2AgAgACABNgIEDAELIAAgASACIAMCfyAIRQRAIAQgBWsiAEEfdUGAgICAeHMgACAAIARIIAVBAEpzGwwBCyAEIAVqIgBBH3VBgICAgHhzIAAgBUEASCAAIARIcxsLEFALIAZBIGokAAv5AwECfyAAIAFqIQICQAJAIAAoAgQiA0EBcQ0AIANBAnFFDQEgACgCACIDIAFqIQEgACADayIAQaSRwQAoAgBGBEAgAigCBEEDcUEDRw0BQZyRwQAgATYCACACIAIoAgRBfnE2AgQgACABQQFyNgIEIAIgATYCAAwCCyAAIAMQPAsCQAJAAkAgAigCBCIDQQJxRQRAIAJBqJHBACgCAEYNAiACQaSRwQAoAgBGDQMgAiADQXhxIgIQPCAAIAEgAmoiAUEBcjYCBCAAIAFqIAE2AgAgAEGkkcEAKAIARw0BQZyRwQAgATYCAA8LIAIgA0F+cTYCBCAAIAFBAXI2AgQgACABaiABNgIACyABQYACTwRAIAAgARBHDwsgAUH4AXFBjI/BAGohAgJ/QZSRwQAoAgAiA0EBIAFBA3Z0IgFxRQRAQZSRwQAgASADcjYCACACDAELIAIoAggLIQEgAiAANgIIIAEgADYCDCAAIAI2AgwgACABNgIIDwtBqJHBACAANgIAQaCRwQBBoJHBACgCACABaiIBNgIAIAAgAUEBcjYCBCAAQaSRwQAoAgBHDQFBnJHBAEEANgIAQaSRwQBBADYCAA8LQaSRwQAgADYCAEGckcEAQZyRwQAoAgAgAWoiATYCACAAIAFBAXI2AgQgACABaiABNgIACwuIBAEMfyMAQSBrIgYkACABIAEoAhQiCEEBaiIJNgIUAkAgASgCECIHIAlLBEAgCEECaiEKIAFBDGohCyABKAIMIAlqIQwgCEF/cyAHaiENAkACQANAIAUgDGotAAAiDkEwayIPQf8BcSIQQQpPBEAgBUUEQCAGQQ02AhQgBiALIAcgBSAIakECaiIBIAEgB0sbEDEgBkEUaiAGKAIAIAYoAgQQnAEhASAAQQE2AgAgACABNgIEDAYLIAQgBWshBSAOQSByQeUARw0DIAAgASACIAMgBRAyDAULIBBBBUsgA0KZs+bMmbPmzBlSciADQpiz5syZs+bMGVZxDQEgASAFIApqNgIUIANCCn4gD61C/wGDfCEDIA0gBUEBaiIFRw0ACyAEIAlqIAdrIQUMAQsgBCAFayEFAkACQAJAIAEoAhQiBCABKAIQIgdPDQAgASgCDCEIA0AgBCAIai0AACIJQTBrQf8BcUEJTQRAIAEgBEEBaiIENgIUIAQgB0cNAQwCCwsgCUEgckHlAEYNAQsgACABIAIgAyAFEFAMAQsgACABIAIgAyAFEDILDAILIAAgASACIAMgBRBQDAELIAZBBTYCFCAGQQhqIAFBDGogByAIQQJqIgEgASAHSxsQMSAGQRRqIAYoAgggBigCDBCcASEBIABBATYCACAAIAE2AgQLIAZBIGokAAuEBgIIfwF+IwBBIGsiBSQAAkACQAJAAkACQAJAAkADQCABKAIIIQYCQCABKAIIIgMgASgCBCIERg0AIAMgBEkEQCABKAIAIgggA2otAAAiB0EiRiAHQdwARnIgB0EfTXINASABIANBAWoiBzYCCCAIQQFqIQhBACAEIAdrQXhxIglrIQQDQCAERQRAIAEgByAJajYCCAJAIAEoAggiAyABKAIEIgdPDQAgASgCACEIA0AgAyAIai0AACIEQSJGIARB3ABGciAEQSBJcg0BIAEgA0EBaiIDNgIIIAMgB0cNAAsLDAMLIAMgCGogBEEIaiEEIANBCGohAykAACILQn+FIAtC3Ljx4sWLl67cAIVCgYKEiJCgwIABfSALQqLEiJGixIiRIoVCgYKEiJCgwIABfSALQqDAgIGChIiQIH2EhINCgIGChIiQoMCAf4MiC1ANAAsgASALeqdBA3YgA2pBB2s2AggMAQsgAyAEQdi4wAAQhQEACyABKAIIIgMgASgCBCIERg0DIAMgBE8NBCABKAIAIgQgA2oiBy0AACIIQdwARwRAIAhBIkYNAyABIANBAWoiAjYCCCAFQRA2AhQgBUEIaiABIAIQMSAFQRRqIAUoAgggBSgCDBCcASEBIABBAjYCACAAIAE2AgQMCAsgAyAGSQ0BIAIgBCAGaiAHEJUBIAEgA0EBajYCCCABQQEgAhAlIgNFDQALIABBAjYCACAAIAM2AgQMBgsgBiADQZi5wAAQhwEACyACKAIIBEAgAyAGSQ0DIAIgBCAGaiAHEJUBIAEgA0EBajYCCCAAQQE2AgAgACACKQIENwIEDAULIAMgBkkNAyAAQQA2AgAgACADIAZrNgIIIAEgA0EBajYCCCAAIAQgBmo2AgQMBAsgBUEENgIUIAUgASADEDEgBUEUaiAFKAIAIAUoAgQQnAEhASAAQQI2AgAgACABNgIEDAMLIAMgBEHouMAAEIUBAAsgBiADQfi4wAAQhwEACyAGIANBiLnAABCHAQALIAVBIGokAAv+AgEEfwJAAkACQAJAAkACQAJ/AkAgByAIVgRAIAcgCH0gCFgNAwJAIAYgByAGfVQgByAGQgGGfSAIQgGGWnFFBEAgBiAIVg0BDAoLIAIgA0kNBQwICyAHIAYgCH0iBn0gBlYNCCACIANJDQUgASADaiEMIAEhCwJAA0AgAyAJRg0BIAlBAWohCSALQQFrIgsgA2oiCi0AAEE5Rg0ACyAKIAotAABBAWo6AAAgAyAJa0EBaiADTw0HIApBAWpBMCAJQQFrEGkaDAcLQTEgA0UNAhogAUExOgAAIANBAUcNAUEwDAILIABBADYCAA8LIAFBAWpBMCADQQFrEGkaQTALIQkgBEEBasEiBCAFwUwgAiADTXINAyAMIAk6AAAgA0EBaiEDDAMLIABBADYCAA8LIAMgAkHA6cAAEIYBAAsgAyACQaDpwAAQhgEACyACIANPDQAgAyACQbDpwAAQhgEACyAAIAQ7AQggACADNgIEIAAgATYCAA8LIABBADYCAAujBQIMfwF+IwBBIGsiACQAQdSNwQAhBEHQjcEAKAIARQRAEGMhBAsgAEEYaiAEQRBqIgIoAgA2AgAgAEEQaiIBIARBCGoiBSkCADcDACAFQgA3AgAgACAEKQIANwMIIARCgICAgMAANwIAIAJBADYCAAJAIAAoAhQiBSABKAIAIgJGBEAgBSICIAAoAggiAUYEQNBvQYABIAUgBUGAAU0bIgL8DwEiAUF/Rg0CAkAgACgCGCIDRQRAIAAgATYCGAwBCyADIAVqIAFHDQMLIwBBEGsiByQAAn9BgYCAgHggAiAAQQhqIgEoAgAgASgCCCIIa00NABogB0EIaiEJIwBBIGsiAyQAAkAgCCACIAhqIgtLDQAgC61CAoYiDEIgiKcNACAMpyIIQfz///8HSw0AIAMgASgCACIGBH8gAyAGQQJ0NgIcIAMgASgCBDYCFEEEBUEACzYCGCADQQhqQQQgCCADQRRqEHAgAygCCEUEQCADKAIMIQYgASALNgIAIAEgBjYCBEGBgICAeCEGDAELIAMoAhAhCiADKAIMIQYLIAkgCjYCBCAJIAY2AgAgA0EgaiQAQYGAgIB4IAcoAggiAUGBgICAeEYNABogBygCDCECIAELIQEgACACNgIEIAAgATYCACAHQRBqJAAgACgCAEGBgICAeEcNAiAAKAIIIQEgACgCECECCyABIAJNDQEgACgCDCACQQJ0aiAFQQFqNgIAIAAgAkEBaiICNgIQCyACIAVNDQAgACAAKAIMIAVBAnRqKAIANgIUIARBEGogAEEYaigCACIBNgIAIARBCGogAEEQaikDADcCACAEKAIEIQMgBCgCACECIAQgACkDCDcCACACBEAgAyACQQJ0QQQQ8AELIABBIGokACABIAVqDwsAC+cCAQV/AkBBzf97QRAgACAAQRBNGyIAayABTQ0AIABBECABQQtqQXhxIAFBC0kbIgRqQQxqEBYiAkUNACACQQhrIQECQCAAQQFrIgMgAnFFBEAgASEADAELIAJBBGsiBSgCACIGQXhxIAIgA2pBACAAa3FBCGsiAiAAQQAgAiABa0EQTRtqIgAgAWsiAmshAyAGQQNxBEAgACADIAAoAgRBAXFyQQJyNgIEIAAgA2oiAyADKAIEQQFyNgIEIAUgAiAFKAIAQQFxckECcjYCACABIAJqIgMgAygCBEEBcjYCBCABIAIQMwwBCyABKAIAIQEgACADNgIEIAAgASACajYCAAsCQCAAKAIEIgFBA3FFDQAgAUF4cSICIARBEGpNDQAgACAEIAFBAXFyQQJyNgIEIAAgBGoiASACIARrIgRBA3I2AgQgACACaiICIAIoAgRBAXI2AgQgASAEEDMLIABBCGohAwsgAwv9AgEHfyMAQRBrIgQkAAJAAkACQAJAAkAgASgCBCICRQ0AIAEoAgAhByACQQNxIQUCQCACQQRJBEBBACECDAELIAdBHGohAyACQXxxIQhBACECA0AgAygCACADQQhrKAIAIANBEGsoAgAgA0EYaygCACACampqaiECIANBIGohAyAIIAZBBGoiBkcNAAsLIAUEQCAGQQN0IAdqQQRqIQMDQCADKAIAIAJqIQIgA0EIaiEDIAVBAWsiBQ0ACwsgASgCDARAIAJBAEgNASAHKAIERSACQRBJcQ0BIAJBAXQhAgtBACEFIAJBAEgNAyACDQELQQEhA0EAIQIM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aiQADwsgAkEMQYi1wAAQhgEAC0HAtMAAQShB6LTAABClAQALqRUCEH8BfiMAQUBqIgskACALQQRqIQcjAEEQayIFJAACQCABKAIAIghFBEAgB0EANgIQIAcgATYCDCAHIAIpAgA3AgAgB0EIaiACQQhqKAIANgIADAELIAEoAgQhBCMAQSBrIgYkACAGIAQ2AhwgBiAINgIYIAZBEGogBkEYaiACEGEgBigCFCEKAkACQCAGKAIQIglFDQAgBARAIARBAWshBANAIAggCkECdGpBmANqKAIAIQggBiAENgIcIAYgCDYCGCAGQQhqIAZBGGogAhBhIAYoAgwhCiAGKAIIIglFDQIgBEEBayIEQX9HDQALC0EAIQQMAQtBACEJCyAFIAo2AgwgBSAENgIIIAUgCDYCBCAFIAk2AgAgBkEgaiQAIAVBBGohBiAFKAIARQRAIAcgATYCECAHQYCAgIB4NgIAIAcgBikCADcCBCAHQQxqIAZBCGooAgA2AgAgAigCACIBRQ0BIAIoAgQgAUEBEPABDAELIAcgATYCDCAHIAYpAgA3AhAgByACKQIANwIAIAdBGGogBkEIaigCADYCACAHQQhqIAJBCGooAgA2AgALIAVBEGokAAJAIAsoAgRBgICAgHhHBEAgC0E4aiALQRxqKAIANgIAIAtBMGogC0EUaikCADcDACALQShqIAtBDGopAgA3AwAgCyALKQIENwMgIwBBMGsiDSQAAkAgC0EgaiIOKAIQRQRAIA4oAgwhAhC7ASIBQQE7AZIDIAFBADYCiAIgASAOKQIANwKMAiABQZQCaiAOQQhqKAIANgIAIAEgAykDADcDACABQQhqIANBCGopAwA3AwAgAUEQaiADQRBqKQMANwMAIAJCgICAgBA3AgQgAiABNgIADAELIA1BEGogDkEQaiIBQQhqKAIANgIAIA0gASkCADcDCCANQShqIA5BCGooAgA2AgAgDSAOKQIANwMgIA1BFGohECANQSBqIQwgDkEMaiERIwBBkAFrIgQkACAEQQhqIQ8jAEHQAGsiCiQAAkACQAJ/AkACQAJAAkAgDUEIaiIJKAIAIgUvAZIDIgJBC08EQCAKQcQAaiECIApBQGshASAJKAIIIghBBUkNASAKQcwAaiEHIApByABqIQYgCEEFaw4CAwQCCyAFQYwCaiIGIAkoAggi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AWoiAiACIARLGxAxIAcgA0EkaiADKAIAIAMoAgQQnAE2AgQMAwsgB0EBOgABQQAhBiABQQA6AAQMAgsgA0EHNgIkQQEhBiADQRBqIAkgBCACQQFqIgIgAiAESxsQMSAHIANBJGogAygCECADKAIUEJwBNgIEDAELIApB3QBGBEAgA0EVNgIkIANBCGogCSAEIAJBAWoiAiACIARLGxAxIAcgA0EkaiADKAIIIAMoAgwQnAE2AgQMAQsgB0EBOgABQQAhBgsgByAGOgAAIANBMGokAAJAAkAgBS0ACEUEQCAFLQAJDQEgAEEGOgAADAILIAAgBSgCDDYCBCAAQQc6AAAMAQsgBUEIaiABKAIAEBcgBS0ACEEGRwRAIAAgBSkDCDcDACAAQRBqIAVBGGopAwA3AwAgAEEIaiAFQRBqKQMANwMADAELIAAgBSgCDDYCBCAAQQc6AAALIAVBIGokAAvEAQMBfgF/AXwjAEEgayIDJAACQAJAAkACQCABKAIAQQFrDgIBAgALAn8gASsDCCIEvUL///////////8Ag0L/////////9/8AVgRAQgMhAkEADAELIANBADoACCADQQhqEJEBQgIhAkECCyEBIAAgBDkDECAAIAI3AwggACABOgAADAILIABCADcDCCAAQQI6AAAgACABKQMINwMQDAELIABBAjoAACAAIAEpAwgiAjcDECAAIAJCP4g3AwgLIANBIGokAAuIAQEBfyAAAn8CQAJ/AkAgAkEATgRAIAMoAgQEQCADKAIIIgQEQCADKAIAIAQgASACENgBDAQLCyACRQ0BQamNwQAtAAAaIAIgARDhAQwCCyAAQQA2AgQMAgsgAQsiAwRAIAAgAjYCCCAAIAM2AgRBAAwCCyAAIAI2AgggACABNgIEC0EBCzYCAAuFAQEBfwJAIAFBAE4EQAJ/IAIoAgQEQCACKAIIIgMEQCACKAIAIANBASABENgBDAILC0EBIAFFDQAaQamNwQAtAAAaIAFBARDhAQsiAgRAIAAgATYCCCAAIAI2AgQgAEEANgIADwsgACABNgIIIABBATYCBAwBCyAAQQA2AgQLIABBATYCAAuqAQEBfyMAQUBqIgIkACACQQA2AhQgAkKAgICAEDcCDCACQQM6ADggAkEgNgIoIAJBADYCNCACQYSJwAA2AjAgAkEANgIgIAJBADYC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fyADQQhqIAcgAUEEQQQQgAEgAygCCCIBQYGAgIB4Rw0BIAcoAggFIAELNgIEIAIgBygCBDYCACADQRBqJAAMAQsgASADKAIMENYBAAsgBiAGKAIIIAYoAgwQ4gEgBigCBCEBIAAgBigCADYCACAAIAE2AgQgBkEgaiQAC2oCAX8BfiMAQTBrIgMkACADIAA2AgAgAyABNgIEIANBAjYCDCADQYjzwAA2AgggA0ICNwIUIANCgICAgMAGIgQgA0EEaq2ENwMoIAMgBCADrYQ3AyAgAyADQSBqNgIQIANBCGogAhCXAQALagIBfwF+IwBBMGsiAyQAIAMgATYCBCADIAA2AgAgA0ECNgIMIANB/O3AADYCCCADQgI3AhQgA0KAgICAwAYiBCADrYQ3AyggAyAEIANBBGqthDcDICADIANBIGo2AhAgA0EIaiACEJcBAAtqAgF/AX4jAEEwayIDJAAgAyAANgIAIAMgATYCBCADQQI2AgwgA0Go88AANgIIIANCAjcCFCADQoCAgIDABiIEIANBBGqthDcDKCADIAQgA62ENwMgIAMgA0EgajYCECADQQhqIAIQlwEAC2oCAX8BfiMAQTBrIgMkACADIAA2AgAgAyABNgIEIANBAjYCDCADQdzzwAA2AgggA0ICNwIUIANCgICAgMAGIgQgA0EEaq2ENwMoIAMgBCADrYQ3AyAgAyADQSBqNgIQIANBCGogAhCXAQALagECfyMAQRBrIgIkAAJAIAAgASgCCCIDIAEoAgBJBH8gAkEIaiABIANBAUEBEIABIAIoAggiA0GBgICAeEcNASABKAIIBSADCzYCBCAAIAEoAgQ2AgAgAkEQaiQADwsgAyACKAIMENYBAAtnACMAQTBrIgAkAEGojcEALQAABEAgAEECNgIMIABB5M3AADYCCCAAQgE3AhQgACABNgIsIAAgAEEsaq1CgICAgMAGhDcDICAAIABBIGo2AhAgAEEIakGEzsAAEJcBAAsgAEEwaiQAC2cBAX8jAEEwayIDJAAgAyACNgIEIAMgATYCACADQQI2AgwgA0GMlsAANgIIIANCAjcCFCADQSM2AiwgA0EkNgIkIAMgADYCICADIANBIGo2AhAgAyADNgIoIANBCGoQXiADQTBqJAALZgEDfwJAIAEoAggiAkEATgRAIAEoAgQhBCACRQRAQQEhAQwCC0GpjcEALQAAGkEBIQMgAkEBEOEBIgENAQsgAyACENYBAAsgASAEIAIQQCEBIAAgAjYCCCAAIAE2AgQgACACNgIAC2ABAn8jAEEQayIDJAAgA0EEaiACQQFBARBtIAMoAgghBCADKAIEQQFGBEAgBCADKAIMENYBAAsgAygCDCABIAIQQCEBIAAgAjYCCCAAIAE2AgQgACAENgIAIANBEGokAAtcAQF/IwBBMGsiAiQAIAIgATYCDCACIAA2AgggAkECNgIUIAJBtIvAADYCECACQgE3AhwgAkEBNgIsIAIgAkEoajYCGCACIAJBCGo2AiggAkEQahBeIAJBMGokAAtcAQF/IwBBMGsiAiQAIAIgATYCDCACIAA2AgggAkECNgIUIAJB2IvAADYCECACQgE3AhwgAkEBNgIsIAIgAkEoajYCGCACIAJBCGo2AiggAkEQahBeIAJBMGokAAtbAQF/IwBBMGsiAyQAIAMgATYCDCADIAA2AgggA0EBNgIUIANBlO3AADYCECADQgE3AhwgAyADQQhqrUKAgICAsA2ENwMoIAMgA0EoajYCGCADQRBqIAIQlwEAC6MBAQR/IwBBEGsiAyQAIAEoAgAiAigCAEEBRwR/QQAFIANBCGohBCMAQRBrIgEkACACQQRqIgItAABBA0cEf0EABSABQQhqIAIoAgQiBSgCACAFKAIEKAIYEQEAIAEoAgwhBSABKAIICyECIAQgBTYCBCAEIAI2AgAgAUEQaiQAIAMoAgwhBCADKAIICyEBIAAgBDYCBCAAIAE2AgAgA0EQaiQAC10BAX8CQAJAAkACQCAALQAADgUDAwMBAgALIABBBGoQfAwCCyAAKAIEIgFFDQEgACgCCCABQQEQ8AEPCyAAQQRqEHcgACgCBCIBRQ0AIAAoAgggAUEYbEEIEPABCwt8AQJ/IwBBEGsiAiQAAkAgACgCDARAIAAhAQwBCyACQQhqIABBCGooAgA2AgAgAiAAKQIANwMAIwBBEGsiAyQAIANBCGogAUEMaiABKAIUEDEgAiADKAIIIAMoAgwQnAEhASADQRBqJAAgAEEUQQQQ8AELIAJBEGokACABC0wBA38gASEDIAIhBCABKAKIAiIFBEAgAS8BkAMhBCACQQFqIQMLIAFByANBmAMgAhtBCBDwASAAIAU2AgAgACADrSAErUIghoQ3AgQLQwEDfwJAIAJFDQADQCAALQAAIgQgAS0AACIFRgRAIABBAWohACABQQFqIQEgAkEBayICDQEMAgsLIAQgBWshAwsgAwtJAQF/IAIgAWsiAyAAKAIAIAAoAggiAmtLBEAgACACIANBAUEBEKMBIAAoAgghAgsgACgCBCACaiABIAMQQBogACACIANqNgIICzoBAX8jAEEgayIAJAAgAEEANgIYIABBATYCDCAAQeTRwAA2AgggAEIENwIQIABBCGpBmNLAABCXAQALtAIBA38jAEEgayICJAAgAkEQaiIDIABBEGopAgA3AwAgAkEIaiIEIABBCGopAgA3AwAgAkEBOwEcIAIgATYCGCACIAApAgA3AwAjAEEgayIAJAAgAigCGCEBIABBEGogAykCADcDACAAQQhqIAQpAgA3AwAgACACNgIcIAAgATYCGCAAIAIpAgA3AwBBACECIwBBEGsiASQAIAAoAgwhAwJAAkACQAJAIAAoAgQOAgABAgsgAw0BQQEhAwwCCyADDQAgACgCACIDKAIEIQIgAygCACEDDAELIAFBgICAgHg2AgAgASAANgIMIAFB0M7AACAAKAIYIAAoAhwiAC0AHCAALQAdEGAACyABIAI2AgQgASADNgIAIAFBtM7AACAAKAIYIAAoAhwiAC0AHCAALQAdEGAAC0YBAX8gAiAAKAIAIAAoAggiA2tLBEAgACADIAJBAUEBEKMBIAAoAgghAwsgACgCBCADaiABIAIQQBogACACIANqNgIIQQALTQEBf0HEjcEAKAIARQRAQciNwQACfgJAIABFDQAgACgCACAAQQA2AgBBAXFFDQAgACkCBAwBC0IACzcCAEHEjcEAQQE2AgALQciNwQALQQEBfyACIAAoAgAgACgCCCIDa0sEQCAAIAMgAhBUIAAoAgghAwsgACgCBCADaiABIAIQQBogACACIANqNgIIQQALTwECfyAAKAIEIQIgACgCACEDAkAgACgCCCIALQAARQ0AIANB2O/AAEEEIAIoAgwRAgBFDQBBAQ8LIAAgAUEKRjoAACADIAEgAigCEBEAAAtMAQF/QamNwQAtAAAaQRRBBBDhASIDRQRAQQRBFBCJAgALIAMgAjYCECADIAE2AgwgAyAAKQIANwIAIANBCGogAEEIaigCADYCACADC0QBAX8jAEEQayIBJAAgAUEIaiAAIAAoAgBBAUEEQRAQUSABKAIIIgBBgYCAgHhHBEAgACABKAIMENYBAAsgAUEQaiQAC0QBAX8jAEEQayIBJAAgAUEIaiAAIAAoAgBBAUEBQQEQUSABKAIIIgBBgYCAgHhHBEAgACABKAIMENYBAAsgAUEQaiQAC08BAn9BqY3BAC0AABogASgCBCECIAEoAgAhA0EIQQQQ4QEiAUUEQEEEQQgQiQIACyABIAI2AgQgASADNgIAIABBpM7AADYCBCAAIAE2AgALTQEBf0GpjcEALQAAGkEMQQQQ4QEiAkUEQEEEQQwQiQIACyACIAEpAgA3AgAgAkEIaiABQQhqKAIANgIAIABBmNPAADYCBCAAIAI2AgALQQEBfyACIAAoAgAgACgCCCIDa0sEQCAAIAMgAhBlIAAoAgghAwsgACgCBCADaiABIAIQQBogACACIANqNgIIQQALQQAgABDTASAAQQxqENMBIABBGGoQ0wEgAEEkahDTASAAQTBqENMBIABBPGoQ0wEgAEHIAGoQ0wEgAEHUAGoQ0wELQQEBfyMAQRBrIgUkACAFQQhqIAAgASACIAMgBBBRIAUoAggiAEGBgICAeEcEQCAAIAUoAgwQ1gEACyAFQRBqJAALQAEBfyMAQSBrIgMkACADIAI2AhwgAyABNgIYIAMgAjYCFCADQQhqIANBFGoQiAEgACADKQMINwMAIANBIGokAAtCAQF/IwBBIGsiAyQAIANBADYCECADQQE2AgQgA0IENwIIIAMgATYCHCADIAA2AhggAyADQRhqNgIAIAMgAhCXAQALMQACQCABRSAAIAEQwAFFcg0AIAAEQEGpjcEALQAAGiAAIAEQ4QEiAUUNAQsgAQ8LAAs4AQF/IAEoAgAgAUEANgIABEAgASgCBCIBQYQBTwRAIAEQaAsgAEEANgIADwtB+ITAAEExEIQCAAtQAQF/AkACQAJAAkAgAC0AAA4FAQEBAgMACyAAQQRqEHwLDwsgAEEEahDSAQ8LIABBBGoiABB3IAAoAgAiAQRAIAAoAgQgAUEYbEEIEPABCwuQdgMjfxp+AXwgASgCHEEBcSECIAArAwAhPwJAIAEoAghBAUYEQAJ/IAEhByABKAIMIRNBACEBIwBB8AhrIggkACA/vSEnAn9BAiA/ID9iDQAaICdC/////////weDIilCgICAgICAgAiEICdCAYZC/v///////w+DICdCNIinQf8PcSIAGyIlQgGDISggJ0KAgICAgICA+P8AgyEmAkACQCApUARAQQMgJkKAgICAgICA+P8AUQ0DGiAmUEUNAUEEDAMLICZQDQELQoCAgICAgIAgICVCAYYgJUKAgICAgICACFEiARshJUICQgEgARshJkHLd0HMdyABGyAAaiEBIChQDAELIABBswhrIQFCASEmIChQCyEAIAggATsB6AggCCAmNwPgCCAIQgE3A9gIIAggJTcD0AggCCAAOgDqCAJAAn8CQAJAAkACQCAAQQJrIgQEQEEBIQBB4+rAAEHk6sAAICdCAFMiBRtB4+rAAEEBIAUbIAIbIRsgJ0I/iKcgAnIhHEEDIAQgBEEDTxtBAmsOAgIDAQsgCEEDNgKYCCAIQeXqwAA2ApQIIAhBAjsBkAhBASEbQQEhACAIQZAIagwECyAIQQM2ApgIIAhB6OrAADYClAggCEECOwGQCCAIQZAIagwDC0ECIQAgCEECOwGQCCATRQ0BIAggEzYCoAggCEEAOwGcCCAIQQI2ApgIIAhB4erAADYClAggCEGQCGoMAgtBdEEFIAHBIgBBAEgbIABsIgBBwP0ASQRAIAhBkAhqIQwgCEEQaiERIABBBHZBFWoiCSEBQYCAfkEAIBNrIBNBgIACTxshCgJAAkACfwJAAkACQAJAIAhB0AhqIgApAwAiJVBFBEAgJUKAgICAgICAgCBaDQEgAUUNAkGgfyAALwEYIgBBIGsgACAlQoCAgIAQVCIAGyICQRBrIAIgJUIghiAlIAAbIiVCgICAgICAwABUIgAbIgJBCGsgAiAlQhCGICUgABsiJUKAgICAgICAgAFUIgAbIgJBBGsgAiAlQgiGICUgABsiJUKAgICAgICAgBBUIgAbIgJBAmsgAiAlQgSGICUgABsiJUKAgICAgICAgMAAVCIAGyAlQgKGICUgABsiJUIAWWsiBGvBQdAAbEGwpwVqQc4QbSIAQdEATw0DIABBBHQiAkG428AAaikDACImQv////8PgyInICUgJUJ/hUI/iIYiJUIgiCIofiIpQiCIICZCIIgiJiAofnwgJiAlQv////8PgyIlfiImQiCIfCApQv////8PgyAlICd+QiCIfCAmQv////8Pg3xCgICAgAh8QiCIfCIlQUAg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CEGYCGooAgA2AgAgCCAIKQKQCDcDwAgLIBggCC4ByAgiAEgEQCAIQQhqIAgoAsAIIAgoAsQIIAAgEyAIQZAIahA+IAgoAgwhACAIKAIIDAMLQQIhACAIQQI7AZAIIBNFBEBBASEAIAhBATYCmAggCEHr6sAANgKUCCAIQZAIagwDCyAIIBM2AqAIIAhBADsBnAggCEECNgKYCCAIQeHqwAA2ApQIIAhBkAhqDAILQezqwABBJUGU68AAEKUBAAtBASEAIAhBATYCmAggCEHr6sAANgKUCCAIQZAIagshASAIIAA2AswIIAggATYCyAggCCAcNgLECCAIIBs2AsAIIAcgCEHACGoQJiAIQfAIaiQADAELIAFBKEGgg8EAEIYBAAsPCyABQQAhACMAQYABayIDJAAgP70hJgJ/QQIgPyA/Yg0AGiAmQv////////8HgyIpQoCAgICAgIAIhCAmQgGGQv7///////8PgyAmQjSIp0H/D3EiABsiJ0IBgyEoICZCgICAgICAgPj/AIMhJQJAAkAgKVAEQEEDICVCgICAgICAgPj/AFENAxogJVBFDQFBBAwDCyAlUA0BC0KAgICAgICAICAnQgGGICdCgICAgICAgAhRIgEbISdCAkIBIAEbISVBy3dBzHcgARsgAGohACAoUAwBCyAAQbMIayEAQgEhJSAoUAshASADIAA7AXggAyAlNwNwIANCATcDaCADICc3A2AgAyABOgB6An8CQAJAAkAgAUECayIBBEBBASEAQePqwABB5OrAACAmQgBTIgQbQePqwABBASAEGyACGyEYICZCP4inIAJyIRtBAyABIAFBA08bQQJrDgIDAgELIANBAzYCKCADQeXqwAA2AiQgA0ECOwEgQQEhGEEBIQAgA0EgagwDCyADQQM2AiggA0Ho6sAANgIkIANBAjsBICADQSBqDAILIANBIGohBSADQQ9qIQwjAEEwayIEJAACQAJAAn8CQAJAAkACQAJAAkACQAJAIANB4ABqIgApAwAiJVBFBEAgACkDCCInUA0BIAApAxAiJlANAiAlICZ8IiYgJVQNAyAlICdUDQQgJkKAgICAgICAgCBaDQUgBCAALwEYIgA7AQggBCAlICd9Iic3AwAgACAAQSBrIAAgJkKAgICAEFQiARsiAkEQayACICZCIIYgJiABGyImQoCAgICAgMAAVCIBGyICQQhrIAIgJkIQhiAmIAEbIiZCgICAgICAgIABVCIBGyICQQRrIAIgJkIIhiAmIAEbIiZCgICAgICAgIAQVCIBGyICQQJrIAIgJkIEhiAmIAEbIiZCgICAgICAgIDAAFQiARsgJkIChiAmIAEbIixCAFkiAmsiAWvBIgpBAEgNBiAEICcgCq0iJoYiKCAmiCIpNwMQICcgKVINCiAEIAA7AQggBCAlNwMAIAQgJSAmQj+DIieGIiYgJ4giJzcDECAlICdSDQpBoH8gAWvBQdAAbEGwpwVqQc4QbSIAQdEATw0HIABBBHQiAEG428AAaikDACInQv////8PgyIlICZCIIgiM34iKkIgiCI7ICdCIIgiKSAzfiI8fCApICZC/////w+DIiZ+IidCIIgiPXwhLiAqQv////8PgyAlICZ+QiCIfCAnQv////8Pg3xCgICAgAh8QiCIITJCAUEAIAEgAEHA28AAai8BAGprQT9xrSIrhiIqQgF9IS8gJSAoQiCIIiZ+IidC/////w+DICUgKEL/////D4MiKH5CIIh8ICggKX4iKEL/////D4N8QoCAgIAIfEIgiCE0ICYgKX4hNSAoQiCIITYgJ0IgiCE3IABBwtvAAGovAQAhASApICwgAq2GIiZCIIgiOH4iOSAlIDh+IidCIIgiMHwgKSAmQv////8PgyImfiIoQiCIIjF8ICdC/////w+DICUgJn5CIIh8IChC/////w+DfCI6QoCAgIAIfEIgiHxCAXwiLSAriKciAEGQzgBPBEAgAEHAhD1JDQkgAEGAwtcvTwRAQQhBCSAAQYCU69wDSSICGyEKQYDC1y9BgJTr3AMgAhsMCwtBBkEHIABBgK3iBEkiAhshCkHAhD1BgK3iBCACGwwKCyAAQeQATwRAQQJBAyAAQegHSSICGyEKQeQAQegHIAIbDAoLQQpBASAAQQlLIgobDAkLQYvXwABBHEGA5sAAEKUBAAtBuNfAAEEdQZDmwAAQpQEAC0Ho18AAQRxBoObAABClAQALQczZwABBNkHA58AAEKUBAAtBhNnAAEE3QbDnwAAQpQEAC0HA5sAAQS1B8ObAABClAQALQfDUwABBHUGo1cAAEKUBAAsgAEHRAEHw5cAAEIUBAAtBBEEFIABBoI0GSSICGyEKQZDOAEGgjQYgAhsLIQIgLiAyfCEuIC0gL4MhJiAKIAFrQQFqIQcgLSA1IDd8IDZ8IDR8fSI+QgF8IiggL4MhJ0EAIQECQAJAAkACQAJAAkACQAJAA0AgACACbiEIIAFBEUYNAiABIAxqIg0gCEEwaiILOgAAAkAgACACIAhsayIArSArhiIsICZ8IiUgKFoEQCABIApHDQEgAUEBaiEBQgEhJQNAICUhKCAnISkgAUERTw0GIAEgDGogJkIKfiImICuIp0EwaiICOgAAIAFBAWohASAoQgp+ISUgKUIKfiInICYgL4MiJlgNAAsgJSAtIC59fiIrICV8ISwgJyAmfSAqVCIADQcgKyAlfSIrICZWDQMMBwsgKCAlfSInIAKtICuGIihUIQIgLSAufSIrQgF8ISogJyAoVCArQgF9IisgJVhyDQVCAiA2IDd8IDR8IDV8ICYgKHwiJSAsfHx9IS9CACA7ID18IDJ8Ii0gPHwgJiAsfHx9IS4gOkKAgICACHxCIIgiMiAwIDF8fCA5fCEnICUgLXwgKSAzIDh9fnwgMH0gMX0gMn0hKQNAICUgLHwiMCArVCAnIC58ICkgLHxackUEQCAmICx8ISVBACECDAcLIA0gC0EBayILOgAAICYgKHwhJiAnIC98IS0gKyAwVgRAICggKXwhKSAlICh8ISUgJyAofSEnICggLVgNAQsLICggLVYhAiAmICx8ISUMBQsgAUEBaiEBIAJBCkkgAkEKbiECRQ0AC0GA58AAEK0BAAsgASAMakEBayEKIClCCn4gJiAqfH0hLSAqIC5CCn4gMCAxfCA6QoCAgIAIfEIgiHwgOXxCCn59ICh+fCEvICsgJn0hMEIAISkDQCAmICp8IiUgK1QgKSAwfCAmIC98WnJFBEBBACEADAULIAogAkEBayICOgAAICkgLXwiMSAqVCEAICUgK1oNBSApICp9ISkgJSEmICogMVgNAAsMBAtBEUERQZDnwAAQhQEACyABQRFBoOfAABCFAQALAkAgJSAqWiACcg0AICogJSAofCImWCAqICV9ICYgKn1UcQ0AIAVBADYCAAwECyAlID5CA31YICVCAlpxRQRAIAVBADYCAAwECyAFIAc7AQggBSABQQFqNgIEDAILICYhJQsCQCAlICxaIAByDQAgLCAlICp8IiZYICwgJX0gJiAsfVRxDQAgBUEANgIADAILICUgKEJY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QYEBJQEQBgsHACAAENIBCw4AIAFBvILAAEEFENsBCw4AIAFBwIrAAEEFENsBCwsAIAAoAgAgARBzCw4AIAFB/IzAAEESENsBCw4AIAFBoI7AAEEQENsBCw4AIAFByI7AAEEUENsBCw4AIAFBnI/AAEETENsBCw4AIAFBjJDAAEEUENsBCw4AIAFBrJnAAEEFENsBC48BAQF/IAAoAgAhAiMAQTBrIgAkAAJ/IAIoAgxFBEAgAiABEEgMAQsgAEEDNgIEIABB+J3AADYCACAAQgM3AgwgAEE0NgIsIABBNDYCJCAAIAJBDGo2AiAgAEE1NgIcIAAgAjYCGCAAIAJBEGo2AiggACAAQRhqNgIIIAEoAhQgASgCGCAAECMLIABBMGokAAsNACAAQbjBwAAgARAjCw0AIABB0MHAACABECMLCQAgACABEBMACw0AIABB2MXAACABECMLDAAgACABKQIANwMACw0AIABBsNLAACABECMLDgAgAUGo0sAAQQUQ2wELGgAgACABQeiNwQAoAgAiAEHNACAAGxEBAAALDAAgACABKQIENwMAC78CAQJ/IwBBEGsiAiQAAkACfwJAIAFBgAFPBEAgAkEANgIMIAFBgBBJDQEgAUGAgARJBEAgAiABQT9xQYABcjoADiACIAFBDHZB4AFyOgAMIAIgAUEGdkE/cUGAAXI6AA1BAwwDCyACIAFBP3FBgAFyOgAPIAIgAUESdkHwAXI6AAwgAiABQQZ2QT9xQYABcjoADiACIAFBDHZBP3FBgAFyOgANQQQMAgsgACgCCCIDIAAoAgBGBEAgABBkCyAAIANBAWo2AgggACgCBCADaiABOgAADAILIAIgAUE/cUGAAXI6AA0gAiABQQZ2QcABcjoADEECCyEBIAEgACgCACAAKAIIIgNrSwRAIAAgAyABEGUgACgCCCEDCyAAKAIEIANqIAJBDGogARBAGiAAIAEgA2o2AggLIAJBEGokAEEACw0AIABBwO/AACABECMLCgAgAiAAIAEQHQuTBQEHfwJAAn8CQCACIgQgACABa0sEQCABIARqIQUgACAEaiECIAAgBEEQSQ0CGiACQXxxIQNBACACQQNxIgZrIQcgBgRAIAEgBGpBAWshAANAIAJBAWsiAiAALQAAOgAAIABBAWshACACIANLDQALCyADIAQgBmsiBkF8cSIEayECIAUgB2oiBUEDcQRAIARBAEwNAiAFQQN0IgBBGHEhByAFQXxxIghBBGshAUEAIABrQRhxIQkgCCgCACEAA0AgA0EEayIDIAAgCXQgASgCACIAIAd2cjYCACABQQRrIQEgAiADSQ0ACwwCCyAEQQBMDQEgASAGakEEayEBA0AgA0EEayIDIAEoAgA2AgAgAUEEayEBIAIgA0kNAAsMAQsCQCAEQRBJBEAgACECDAELIABBACAAa0EDcSIFaiEDIAUEQCAAIQIgASEAA0AgAiAALQAAOgAAIABBAWohACACQQFqIgIgA0kNAAsLIAMgBCAFayIEQXxxIgZqIQICQCABIAVqIgVBA3EEQCAGQQBMDQEgBUEDdCIAQRhxIQcgBUF8cSIIQQRqIQFBACAAa0EYcSEJIAgoAgAhAANAIAMgACAHdiABKAIAIgAgCXRyNgIAIAFBBGohASADQQRqIgMgAkkNAAsMAQsgBkEATA0AIAUhAQNAIAMgASgCADYCACABQQRqIQEgA0EEaiIDIAJJDQALCyAEQQNxIQQgBSAGaiEBCyAERQ0CIAIgBGohAANAIAIgAS0AADoAACABQQFqIQEgAkEBaiICIABJDQALDAILIAZBA3EiAEUNASAFIARrIQUgAiAAawshACAFQQFrIQEDQCACQQFrIgIgAS0AADoAACABQQFrIQEgACACSQ0ACwsLCgAgACABJQEQAAsOACABQejBwABBCRDbAQsOACABQfHBwABBCBDbAQsJACAAQQA2AgALBwAgACABawsIACAAJQEQAQsIACAAJQEQAwsIACAAJQEQBAsIACAAJQEQEAsDAAELC8CLARcAQYCAwAALFQIAAAAMAAAABAAAAAMAAAAEAAAABQBBoIDAAAvxBQEAAAAGAAAAYSBEaXNwbGF5IGltcGxlbWVudGF0aW9uIHJldHVybmVkIGFuIGVycm9yIHVuZXhwZWN0ZWRseS9ydXN0Yy9mNmU1MTFlZWM3MzQyZjU5YTI1ZjdjMDUzNGYxZGJlYTAwZDAxYjE0L2xpYnJhcnkvYWxsb2Mvc3JjL3N0cmluZy5ycwAAXwAQAEsAAAAGCgAADgAAAC9ydXN0Yy9mNmU1MTFlZWM3MzQyZjU5YTI1ZjdjMDUzNGYxZGJlYTAwZDAxYjE0L2xpYnJhcnkvY29yZS9zcmMvc3RyL3BhdHRlcm4ucnMAvAAQAE8AAADIBQAAFAAAALwAEABPAAAAyAUAACEAAAC8ABAATwAAALwFAAAhAAAARXJyb3IAAAC8ABAATwAAAEwEAAAkAAAAIy0tLWBgYCMgCgAAXQEQAAEAAABGYWlsZWQgdG8gcGFyc2UgdGhlIGRvY3VtZW50LiBbTGluZToge0xJTkVfTlVNQkVSfV17TElORV9OVU1CRVJ9RmFpbGVkIHRvIHBhcnNlIHRoZSBkb2N1bWVudC5hdHRlbXB0IHRvIGpvaW4gaW50byBjb2xsZWN0aW9uIHdpdGggbGVuID4gdXNpemU6Ok1BWC9ydXN0Yy9mNmU1MTFlZWM3MzQyZjU5YTI1ZjdjMDUzNGYxZGJlYTAwZDAxYjE0L2xpYnJhcnkvYWxsb2Mvc3JjL3N0ci5ycwAA+gEQAEgAAACZAAAACgAAAG1pZCA+IGxlbgAAAFQCEAAJAAAA+gEQAEgAAACwAAAAFgAAAGNhbGxlZCBgT3B0aW9uOjp1bndyYXBfdGhyb3coKWAgb24gYSBgTm9uZWAgdmFsdWVzcmMvdG9vbHMvcGFyc2luZy9oZWFkaW5ncy5ycwAAqQIQAB0AAABmAAAADAAAAEZhaWxlZCB0byByZWFkIGxvY2FsZSBmaWxlLnBhcnNpbmdmb3JtYXR0aW5nAAAAAAAAAAABAAAABwBBnIbAAAsFAQAAAAgAQayGwAALBQEAAAAJAEG8hsAACwUBAAAACgBBzIbAAAsFAQAAAAsAQdyGwAALBQEAAAAMAEHshsAAC60CAQAAAA0AAABiZWZvcmVUb3BMZXZlbEhlYWRpbmdzYmVmb3JlRmlyc3RTdWJIZWFkaW5nYmVmb3JlU3ViSGVhZGluZ3NhZnRlclByb3BlcnRpZXNiZWZvcmVDb250ZW50c2JlZm9yZUNvbnRlbnRzQWZ0ZXJDb2RlQmxvY2tzYmVmb3JlQ29kZUJsb2Nrc2JlZm9yZUNvZGVCbG9ja3NBZnRlckhlYWRpbmdzaW5zZXJ0TmV3bGluZW5vdGlmeVdoZW5VbmNoYW5nZWRzaG93TW9yZURldGFpbGVkRXJyb3JNZXNzYWdlc2hlYWRpbmdHYXBzb3RoZXJHYXBzZm9ybWF0T3B0aW9uc290aGVyT3B0aW9ucwAAAA4AAAAMAAAABAAAAA8AAAAQAAAABQBBpInAAAuRCwEAAAARAAAAYSBEaXNwbGF5IGltcGxlbWVudGF0aW9uIHJldHVybmVkIGFuIGVycm9yIHVuZXhwZWN0ZWRseS9ydXN0Yy9mNmU1MTFlZWM3MzQyZjU5YTI1ZjdjMDUzNGYxZGJlYTAwZDAxYjE0L2xpYnJhcnkvYWxsb2Mvc3JjL3N0cmluZy5ycwAA4wQQAEsAAAAGCgAADgAAAEVycm9yL3J1c3RjL2Y2ZTUxMWVlYzczNDJmNTlhMjVmN2MwNTM0ZjFkYmVhMDBkMDFiMTQvbGlicmFyeS9jb3JlL3NyYy9zdHIvcGF0dGVybi5yc0UFEABPAAAAvgEAADcAAABtaXNzaW5nIGZpZWxkIGBgpAUQAA8AAACzBRAAAQAAAGR1cGxpY2F0ZSBmaWVsZCBgAAAAxAUQABEAAACzBRAAAQAAAGBgYHNyYy90b29scy9wYXJzaW5nL2hlYWRpbmdzLnJz6wUQAB0AAAAmAAAAOwAAAOsFEAAdAAAAgAAAAC4AAABiZWZvcmVUb3BMZXZlbEhlYWRpbmdzYmVmb3JlRmlyc3RTdWJIZWFkaW5nYmVmb3JlU3ViSGVhZGluZ3MoBhAAFgAAAD4GEAAVAAAAUwYQABEAAABzdHJ1Y3QgSGVhZGluZ0dhcHNhZnRlclByb3BlcnRpZXNiZWZvcmVDb250ZW50c2JlZm9yZUNvbnRlbnRzQWZ0ZXJDb2RlQmxvY2tzYmVmb3JlQ29kZUJsb2Nrc2JlZm9yZUNvZGVCbG9ja3NBZnRlckhlYWRpbmdzAAAAjgYQAA8AAACdBhAADgAAAKsGEAAdAAAAyAYQABAAAADYBhAAHQAAAHN0cnVjdCBPdGhlckdhcHNpbnNlcnROZXdsaW5lAAAAMAcQAA0AAABzdHJ1Y3QgRm9ybWF0T3B0aW9uc25vdGlmeVdoZW5VbmNoYW5nZWRzaG93TW9yZURldGFpbGVkRXJyb3JNZXNzYWdlc1wHEAATAAAAbwcQAB0AAABzdHJ1Y3QgT3RoZXJPcHRpb25zUGx1Z2luT3B0aW9uc2hlYWRpbmdHYXBzb3RoZXJHYXBzZm9ybWF0T3B0aW9uc290aGVyT3B0aW9ucwAAALwHEAALAAAAxwcQAAkAAADQBxAADQAAAN0HEAAMAAAAc3RydWN0IFBsdWdpbk9wdGlvbnMSAAAABAAAAAQAAAATAAAAEgAAAAQAAAAEAAAAFAAAABMAAAAgCBAAFQAAABYAAAAXAAAAGAAAABkAAAAaAAAABAAAAAQAAAAbAAAAGgAAAAQAAAAEAAAAHAAAABsAAABcCBAAHQAAAB4AAAAXAAAAHwAAABkAAABkZXNjcmlwdGlvbigpIGlzIGRlcHJlY2F0ZWQ7IHVzZSBEaXNwbGF5AAAAAAQAAAAEAAAAIAAAAEVycm9yL3J1c3RjL2Y2ZTUxMWVlYzczNDJmNTlhMjVmN2MwNTM0ZjFkYmVhMDBkMDFiMTQvbGlicmFyeS9jb3JlL3NyYy9zdHIvcGF0dGVybi5yc9UIEABPAAAAyAUAABQAAADVCBAATwAAAMgFAAAhAAAA1QgQAE8AAAC8BQAAIQAAANUIEABPAAAATAQAACQAAAAjICMAAQAAAAAAAABmCRAAAQAAAHNyYy90b29scy9mb3JtYXR0aW5nLnJzCgEAAAAAAAAAAQAAAAAAAAABAAAAAAAAAGludGVybmFsIGVycm9yOiBlbnRlcmVkIHVucmVhY2hhYmxlIGNvZGV4CRAAFwAAAK8AAAARAAAAAQAAAAAAAABGYWlsZWQgdG8gcmVhZCBvcHRpb25zLiBTb21lIG9mIHRoZW0gYXJlIHBvc3NpYmx5IG5vdCBwb3NpdGl2ZSBudW1iZXIgdmFsdWVzLgBBwJTAAAvrAQEAAAAmAAAAY2Fubm90IGFjY2VzcyBhIFRocmVhZCBMb2NhbCBTdG9yYWdlIHZhbHVlIGR1cmluZyBvciBhZnRlciBkZXN0cnVjdGlvbi9ydXN0Yy9mNmU1MTFlZWM3MzQyZjU5YTI1ZjdjMDUzNGYxZGJlYTAwZDAxYjE0L2xpYnJhcnkvc3RkL3NyYy90aHJlYWQvbG9jYWwucnMAAACOChAATwAAAAQBAAAaAAAAaW52YWxpZCB0eXBlOiAsIGV4cGVjdGVkIAAAAPAKEAAOAAAA/goQAAsAAAAAAAAA//////////8gCxAAQbiWwAALzQEBAAAAAAAAACcAAAAvaG9tZS9ydW5uZXIvLmNhcmdvL3JlZ2lzdHJ5L3NyYy9pbmRleC5jcmF0ZXMuaW8tNmYxN2QyMmJiYTE1MDAxZi9zZXJkZS13YXNtLWJpbmRnZW4tMC42LjUvc3JjL2xpYi5ycwAAAEQLEABlAAAANQAAAA4AAABjbG9zdXJlIGludm9rZWQgcmVjdXJzaXZlbHkgb3IgYWZ0ZXIgYmVpbmcgZHJvcHBlZAAANwAAAAwAAAAEAAAAOAAAADkAAAAFAEGQmMAAC7kGAQAAADoAAABhIERpc3BsYXkgaW1wbGVtZW50YXRpb24gcmV0dXJuZWQgYW4gZXJyb3IgdW5leHBlY3RlZGx5L3J1c3RjL2Y2ZTUxMWVlYzczNDJmNTlhMjVmN2MwNTM0ZjFkYmVhMDBkMDFiMTQvbGlicmFyeS9hbGxvYy9zcmMvc3RyaW5nLnJzAABPDBAASwAAAAYKAAAOAAAARXJyb3JFT0Ygd2hpbGUgcGFyc2luZyBhIGxpc3RFT0Ygd2hpbGUgcGFyc2luZyBhbiBvYmplY3RFT0Ygd2hpbGUgcGFyc2luZyBhIHN0cmluZ0VPRiB3aGlsZSBwYXJzaW5nIGEgdmFsdWVleHBlY3RlZCBgOmBleHBlY3RlZCBgLGAgb3IgYF1gZXhwZWN0ZWQgYCxgIG9yIGB9YGV4cGVjdGVkIGlkZW50ZXhwZWN0ZWQgdmFsdWVleHBlY3RlZCBgImBpbnZhbGlkIGVzY2FwZWludmFsaWQgbnVtYmVybnVtYmVyIG91dCBvZiByYW5nZWludmFsaWQgdW5pY29kZSBjb2RlIHBvaW50Y29udHJvbCBjaGFyYWN0ZXIgKFx1MDAwMC1cdTAwMUYpIGZvdW5kIHdoaWxlIHBhcnNpbmcgYSBzdHJpbmdrZXkgbXVzdCBiZSBhIHN0cmluZ2ludmFsaWQgdmFsdWU6IGV4cGVjdGVkIGtleSB0byBiZSBhIG51bWJlciBpbiBxdW90ZXNmbG9hdCBrZXkgbXVzdCBiZSBmaW5pdGUgKGdvdCBOYU4gb3IgKy8taW5mKWxvbmUgbGVhZGluZyBzdXJyb2dhdGUgaW4gaGV4IGVzY2FwZXRyYWlsaW5nIGNvbW1hdHJhaWxpbmcgY2hhcmFjdGVyc3VuZXhwZWN0ZWQgZW5kIG9mIGhleCBlc2NhcGVyZWN1cnNpb24gbGltaXQgZXhjZWVkZWQgYXQgbGluZSAgY29sdW1uIAAAAQAAAAAAAADlDhAACQAAAO4OEAAIAAAARXJyb3IoLCBsaW5lOiAsIGNvbHVtbjogKQAA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MDBkMDFiMTQvbGlicmFyeS9hbGxvYy9zcmMvY29sbGVjdGlvbnMvYnRyZWUvbm9kZS5yc2Fzc2VydGlvbiBmYWlsZWQ6IGVkZ2UuaGVpZ2h0ID09IHNlbGYuaGVpZ2h0IC0gMQCUGRAAWwAAAK8CAAAJAAAAlBkQAFsAAACzAgAACQAAAGFzc2VydGlvbiBmYWlsZWQ6IHNyYy5sZW4oKSA9PSBkc3QubGVuKCmUGRAAWwAAAC8HAAAFAAAAlBkQAFsAAACvBAAAIwAAAJQZEABbAAAA7wQAACQAAABhc3NlcnRpb24gZmFpbGVkOiBlZGdlLmhlaWdodCA9PSBzZWxmLm5vZGUuaGVpZ2h0IC0gMQAAAJQZEABbAAAA8AMAAAkAAAAvcnVzdGMvZjZlNTExZWVjNzM0MmY1OWEyNWY3YzA1MzRmMWRiZWEwMGQwMWIxNC9saWJyYXJ5L2FsbG9jL3NyYy9jb2xsZWN0aW9ucy9idHJlZS9uYXZpZ2F0ZS5ycwDgGhAAXwAAAFgCAAAwAAAAL3J1c3RjL2Y2ZTUxMWVlYzczNDJmNTlhMjVmN2MwNTM0ZjFkYmVhMDBkMDFiMTQvbGlicmFyeS9hbGxvYy9zcmMvY29sbGVjdGlvbnMvYnRyZWUvbmF2aWdhdGUucnMAUBsQAF8AAADGAAAAJwBB2LfAAAumDC9ob21lL3J1bm5lci8uY2FyZ28vcmVnaXN0cnkvc3JjL2luZGV4LmNyYXRlcy5pby02ZjE3ZDIyYmJhMTUwMDFmL3NlcmRlX2pzb24tMS4wLjEzMy9zcmMvcmVhZC5yc9gbEABgAAAAoAEAAEUAAADYGxAAYAAAAKUBAAA9AAAA2BsQAGAAAACtAQAAGgAAANgbEABgAAAA+gEAABMAAADYGxAAYAAAAAMCAAA+AAAA2BsQAGAAAAD/AQAAMwAAANgbEABgAAAACQIAADoAAADYGxAAYAAAAGgCAAAZAAAA////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////AAABAAIAAwAEAAUABgAHAAgACQD//////////////////woACwAMAA0ADgAPAP////////////////////////////////////////////////////////////////////8KAAsADAANAA4ADwD///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////8AABAAIAAwAEAAUABgAHAAgACQAP//////////////////oACwAMAA0ADgAPAA/////////////////////////////////////////////////////////////////////6AAsADAANAA4ADwAP///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////zsAAAAMAAAABAAAADwAAAA9AAAABQAAAAAAAAAIAAAABAAAAEUAAABGAAAARwAAAGEgYm9vbGVhbmEgc3RyaW5nYnl0ZSBhcnJheWJvb2xlYW4gYGAAAAADIRAACQAAAAwhEAABAAAAaW50ZWdlciBgAAAAICEQAAkAAAAMIRAAAQAAAGZsb2F0aW5nIHBvaW50IGA8IRAAEAAAAAwhEAABAAAAY2hhcmFjdGVyIGAAXCEQAAsAAAAMIRAAAQAAAHN0cmluZyAAeCEQAAcAAAB1bml0IHZhbHVlT3B0aW9uIHZhbHVlbmV3dHlwZSBzdHJ1Y3RzZXF1ZW5jZW1hcGVudW11bml0IHZhcmlhbnRuZXd0eXBlIHZhcmlhbnR0dXBsZSB2YXJpYW50c3RydWN0IHZhcmlhbnQAAAABAAAAAAAAAC4wAEGIxMAAC7kPAQAAACYAAABjYW5ub3QgYWNjZXNzIGEgVGhyZWFkIExvY2FsIFN0b3JhZ2UgdmFsdWUgZHVyaW5nIG9yIGFmdGVyIGRlc3RydWN0aW9uL3J1c3RjL2Y2ZTUxMWVlYzczNDJmNTlhMjVmN2MwNTM0ZjFkYmVhMDBkMDFiMTQvbGlicmFyeS9zdGQvc3JjL3RocmVhZC9sb2NhbC5ycwAAAFYiEABPAAAABAEAABoAAABKc1ZhbHVlKCkAAAC4IhAACAAAAMAiEAABAAAASQAAAE4AAAAMAAAABAAAAE8AAABQAAAAUQAAAC9ydXN0L2RlcHMvZGxtYWxsb2MtMC4yLjYvc3JjL2RsbWFsbG9jLnJzYXNzZXJ0aW9uIGZhaWxlZDogcHNpemUgPj0gc2l6ZSArIG1pbl9vdmVyaGVhZADwIhAAKQAAAKgEAAAJAAAAYXNzZXJ0aW9uIGZhaWxlZDogcHNpemUgPD0gc2l6ZSArIG1heF9vdmVyaGVhZAAA8CIQACkAAACuBAAADQAAAEFjY2Vzc0Vycm9yAAEAAAAAAAAAZW50aXR5IG5vdCBmb3VuZHBlcm1pc3Npb24gZGVuaWVkY29ubmVjdGlvbiByZWZ1c2VkY29ubmVjdGlvbiByZXNldGhvc3QgdW5yZWFjaGFibGVuZXR3b3JrIHVucmVhY2hhYmxlY29ubmVjdGlvbiBhYm9ydGVkbm90IGNvbm5lY3RlZGFkZHJlc3MgaW4gdXNlYWRkcmVzcyBub3QgYXZhaWxhYmxlbmV0d29yayBkb3duYnJva2VuIHBpcGVlbnRpdHkgYWxyZWFkeSBleGlzdHNvcGVyYXRpb24gd291bGQgYmxvY2tub3QgYSBkaXJlY3RvcnlpcyBhIGRpcmVjdG9yeWRpcmVjdG9yeSBub3QgZW1wdHlyZWFkLW9ubHkgZmlsZXN5c3RlbSBvciBzdG9yYWdlIG1lZGl1bWZpbGVzeXN0ZW0gbG9vcCBvciBpbmRpcmVjdGlvbiBsaW1pdCAoZS5nLiBzeW1saW5rIGxvb3Apc3RhbGUgbmV0d29yayBmaWxlIGhhbmRsZWludmFsaWQgaW5wdXQgcGFyYW1ldGVyaW52YWxpZCBkYXRhdGltZWQgb3V0d3JpdGUgemVyb25vIHN0b3JhZ2Ugc3BhY2VzZWVrIG9uIHVuc2Vla2FibGUgZmlsZWZpbGVzeXN0ZW0gcXVvdGEgZXhjZWVkZWRmaWxlIHRvbyBsYXJnZXJlc291cmNlIGJ1c3lleGVjdXRhYmxlIGZpbGUgYnVzeWRlYWRsb2NrY3Jvc3MtZGV2aWNlIGxpbmsgb3IgcmVuYW1ldG9vIG1hbnkgbGlua3NpbnZhbGlkIGZpbGVuYW1lYXJndW1lbnQgbGlzdCB0b28gbG9uZ29wZXJhdGlvbiBpbnRlcnJ1cHRlZHVuc3VwcG9ydGVkdW5leHBlY3RlZCBlbmQgb2YgZmlsZW91dCBvZiBtZW1vcnlvdGhlciBlcnJvcnVuY2F0ZWdvcml6ZWQgZXJyb3IgKG9zIGVycm9yICkAAAABAAAAAAAAAJkmEAALAAAApCYQAAEAAABtZW1vcnkgYWxsb2NhdGlvbiBvZiAgYnl0ZXMgZmFpbGVkAADAJhAAFQAAANUmEAANAAAAc3RkL3NyYy9hbGxvYy5yc/QmEAAQAAAAYwEAAAkAAABOAAAADAAAAAQAAABSAAAAAAAAAAgAAAAEAAAAUwAAAAAAAAAIAAAABAAAAFQAAABVAAAAVgAAAFcAAABYAAAAEAAAAAQAAABZAAAAWgAAAFsAAABcAAAAb3BlcmF0aW9uIHN1Y2Nlc3NmdWwQAAAAEQAAABIAAAAQAAAAEAAAABMAAAASAAAADQAAAA4AAAAVAAAADAAAAAsAAAAVAAAAFQAAAA8AAAAOAAAAEwAAACYAAAA4AAAAGQAAABcAAAAMAAAACQAAAAoAAAAQAAAAFwAAABkAAAAOAAAADQAAABQAAAAIAAAAGwAAAA4AAAAQAAAAFgAAABUAAAALAAAAFgAAAA0AAAALAAAAEwAAAKwjEAC8IxAAzSMQAN8jEADvIxAA/yMQABIkEAAkJBAAMSQQAD8kEABUJBAAYCQQAGskEACAJBAAlSQQAKQkEACyJBAAxSQQAOskEAAjJRAAPCUQAFMlEABfJRAAaCUQAHIlEACCJRAAmSUQALIlEADAJRAAzSUQAOElEADpJRAABCYQABImEAAiJhAAOCYQAE0mEABYJhAAbiYQAHsmEACGJhAASGFzaCB0YWJsZSBjYXBhY2l0eSBvdmVyZmxvd8goEAAcAAAAL3J1c3QvZGVwcy9oYXNoYnJvd24tMC4xNC41L3NyYy9yYXcvbW9kLnJzAADsKBAAKgAAAFYAAAAoAAAARXJyb3IAAABdAAAADAAAAAQAAABeAAAAXwAAAGAAAABjYXBhY2l0eSBvdmVyZmxvdwAAAEgpEAARAAAAYWxsb2Mvc3JjL3Jhd192ZWMucnNkKRAAFAAAABgAAAAFAAAAYQAAAAwAAAAEAAAAYgAAAGEAAAAMAAAABAAAAGMAAABiAAAAiCkQAGQAAABlAAAAZgAAAGQAAABnAEHM08AAC9gMAQAAAGgAAABhIGZvcm1hdHRpbmcgdHJhaXQgaW1wbGVtZW50YXRpb24gcmV0dXJuZWQgYW4gZXJyb3Igd2hlbiB0aGUgdW5kZXJseWluZyBzdHJlYW0gZGlkIG5vdGFsbG9jL3NyYy9mbXQucnMAACoqEAAQAAAAfgIAAA4AAABhbGxvYy9zcmMvc2xpY2UucnMAAEwqEAASAAAAGwIAADIAAABhc3NlcnRpb24gZmFpbGVkOiBlZGVsdGEgPj0gMGNvcmUvc3JjL251bS9kaXlfZmxvYXQucnMAAI0qEAAZAAAATAAAAAkAAACNKhAAGQAAAE4AAAAJAAAAwW/yhiMAAACB76yFW0FtLe4EAAABH2q/ZO04bu2Xp9r0+T/pA08YAAE+lS4Jmd8D/TgVDy/kdCPs9c/TCNwExNqwzbwZfzOmAyYf6U4CAAABfC6YW4fTvnKf2diHLxUSxlDea3BuSs8P2JXVbnGyJrBmxq0kNhUdWtNCPA5U/2PAc1XMF+/5ZfIovFX3x9yA3O1u9M7v3F/3UwUAY29yZS9zcmMvbnVtL2ZsdDJkZWMvc3RyYXRlZ3kvZHJhZ29uLnJzYXNzZXJ0aW9uIGZhaWxlZDogZC5tYW50ID4gMABkKxAAJwAAAHYAAAAFAAAAYXNzZXJ0aW9uIGZhaWxlZDogZC5taW51cyA+IDAAAABkKxAAJwAAAHcAAAAFAAAAYXNzZXJ0aW9uIGZhaWxlZDogZC5wbHVzID4gMGQrEAAnAAAAeAAAAAUAAABhc3NlcnRpb24gZmFpbGVkOiBidWYubGVuKCkgPj0gTUFYX1NJR19ESUdJVFMAAABkKxAAJwAAAHsAAAAFAAAAZCsQACcAAADCAAAACQAAAGQrEAAnAAAA+wAAAA0AAABkKxAAJwAAAAIBAAA2AAAAYXNzZXJ0aW9uIGZhaWxlZDogZC5tYW50LmNoZWNrZWRfc3ViKGQubWludXMpLmlzX3NvbWUoKQBkKxAAJwAAAHoAAAAFAAAAYXNzZXJ0aW9uIGZhaWxlZDogZC5tYW50LmNoZWNrZWRfYWRkKGQucGx1cykuaXNfc29tZSgpAABkKxAAJwAAAHkAAAAFAAAAZCsQACcAAAALAQAABQAAAGQrEAAnAAAADAEAAAUAAABkKxAAJwAAAA0BAAAFAAAAZCsQACcAAAByAQAAJAAAAGQrEAAnAAAAdwEAAFcAAABkKxAAJwAAAIQBAAA2AAAAZCsQACcAAABmAQAADQAAAGQrEAAnAAAATAEAACIAAABkKxAAJwAAAA8BAAAFAAAAZCsQACcAAAAOAQAABQAAAAAAAADfRRo9A88a5sH7zP4AAAAAysaaxxf+cKvc+9T+AAAAAE/cvL78sXf/9vvc/gAAAAAM1mtB75FWvhH85P4AAAAAPPx/kK0f0I0s/Oz+AAAAAIOaVTEoXFHTRvz0/gAAAAC1yaatj6xxnWH8/P4AAAAAy4vuI3cinOp7/AT/AAAAAG1TeECRScyulvwM/wAAAABXzrZdeRI8grH8FP8AAAAAN1b7TTaUEMLL/Bz/AAAAAE+YSDhv6paQ5vwk/wAAAADHOoIly4V01wD9LP8AAAAA9Je/l83PhqAb/TT/AAAAAOWsKheYCjTvNf08/wAAAACOsjUq+2c4slD9RP8AAAAAOz/G0t/UyIRr/Uz/AAAAALrN0xonRN3Fhf1U/wAAAACWySW7zp9rk6D9XP8AAAAAhKVifSRsrNu6/WT/AAAAAPbaXw1YZquj1f1s/wAAAAAm8cPek/ji8+/9dP8AAAAAuID/qqittbUK/nz/AAAAAItKfGwFX2KHJf6E/wAAAABTMME0YP+8yT/+jP8AAAAAVSa6kYyFTpZa/pT/AAAAAL1+KXAkd/nfdP6c/wAAAACPuOW4n73fpo/+pP8AAAAAlH10iM9fqfip/qz/AAAAAM+bqI+TcES5xP60/wAAAABrFQ+/+PAIit/+vP8AAAAAtjExZVUlsM35/sT/AAAAAKx/e9DG4j+ZFP/M/wAAAAAGOysqxBBc5C7/1P8AAAAA05JzaZkkJKpJ/9z/AAAAAA7KAIPytYf9Y//k/wAAAADrGhGSZAjlvH7/7P8AAAAAzIhQbwnMvIyZ//T/AAAAACxlGeJYF7fRs//8/wBBruDAAAsFQJzO/wQAQbzgwAAL0SoQpdTo6P8MAAAAAAAAAGKsxet4rQMAFAAAAAAAhAmU+Hg5P4EeABwAAAAAALMVB8l7zpfAOAAkAAAAAABwXOp7zjJ+j1MALAAAAAAAaIDpq6Q40tVtADQAAAAAAEUimhcmJ0+fiAA8AAAAAAAn+8TUMaJj7aIARAAAAAAAqK3IjDhl3rC9AEwAAAAAANtlqxqOCMeD2ABUAAAAAACaHXFC+R1dxPIAXAAAAAAAWOcbpixpTZINAWQAAAAAAOqNcBpk7gHaJwFsAAAAAABKd++amaNtokIBdAAAAAAAhWt9tHt4CfJcAXwAAAAAAHcY3Xmh5FS0dwGEAAAAAADCxZtbkoZbhpIBjAAAAAAAPV2WyMVTNcisAZQAAAAAALOgl/pctCqVxwGcAAAAAADjX6CZvZ9G3uEBpAAAAAAAJYw52zTCm6X8AawAAAAAAFyfmKNymsb2FgK0AAAAAADOvulUU7/ctzECvAAAAAAA4kEi8hfz/IhMAsQAAAAAAKV4XNObziDMZgLMAAAAAADfUyF781oWmIEC1AAAAAAAOjAfl9y1oOKbAtwAAAAAAJaz41xT0dmotgLkAAAAAAA8RKek2Xyb+9AC7AAAAAAAEESkp0xMdrvrAvQAAAAAABqcQLbvjquLBgP8AAAAAAAshFemEO8f0CADBAEAAAAAKTGR6eWkEJs7AwwBAAAAAJ0MnKH7mxDnVQMUAQAAAAAp9Dti2SAorHADHAEAAAAAhc+nel5LRICLAyQBAAAAAC3drANA5CG/pQMsAQAAAACP/0ReL5xnjsADNAEAAAAAQbiMnJ0XM9TaAzwBAAAAAKkb47SS2xme9QNEAQAAAADZd9+6br+W6w8ETAEAAAAAY29yZS9zcmMvbnVtL2ZsdDJkZWMvc3RyYXRlZ3kvZ3Jpc3UucnMAAMgyEAAmAAAAfQAAABUAAADIMhAAJgAAAKkAAAAFAAAAyDIQACYAAACqAAAABQAAAMgyEAAmAAAAqwAAAAUAAADIMhAAJgAAAK4AAAAFAAAAYXNzZXJ0aW9uIGZhaWxlZDogZC5tYW50ICsgZC5wbHVzIDwgKDEgPDwgNjEpAAAAyDIQACYAAACvAAAABQAAAMgyEAAmAAAACgEAABEAAADIMhAAJgAAAA0BAAAJAAAAyDIQACYAAABAAQAACQAAAMgyEAAmAAAArQAAAAUAAADIMhAAJgAAAKwAAAAFAAAAYXNzZXJ0aW9uIGZhaWxlZDogIWJ1Zi5pc19lbXB0eSgpAAAAyDIQACYAAADcAQAABQAAAGFzc2VydGlvbiBmYWlsZWQ6IGQubWFudCA8ICgxIDw8IDYxKcgyEAAmAAAA3QEAAAUAAADIMhAAJgAAAN4BAAAFAAAAAQAAAAoAAABkAAAA6AMAABAnAACghgEAQEIPAICWmAAA4fUFAMqaO8gyEAAmAAAAMwIAABEAAADIMhAAJgAAADYCAAAJAAAAyDIQACYAAABsAgAACQAAAMgyEAAmAAAA4wIAAE4AAADIMhAAJgAAAO8CAABKAAAAyDIQACYAAADMAgAASgAAAGNvcmUvc3JjL251bS9mbHQyZGVjL21vZC5ycwDQNBAAGwAAALsAAAAFAAAAYXNzZXJ0aW9uIGZhaWxlZDogYnVmWzBdID4gYicwJwDQNBAAGwAAALwAAAAFAAAAYXNzZXJ0aW9uIGZhaWxlZDogcGFydHMubGVuKCkgPj0gNAAA0DQQABsAAAC9AAAABQAAAC4wLi0rTmFOaW5mMGFzc2VydGlvbiBmYWlsZWQ6IGJ1Zi5sZW4oKSA+PSBtYXhsZW4AAADQNBAAGwAAAH4CAAANAAAAY2Fubm90IHBhcnNlIGludGVnZXIgZnJvbSBlbXB0eSBzdHJpbmdpbnZhbGlkIGRpZ2l0IGZvdW5kIGluIHN0cmluZ251bWJlciB0b28gbGFyZ2UgdG8gZml0IGluIHRhcmdldCB0eXBlbnVtYmVyIHRvbyBzbWFsbCB0byBmaXQgaW4gdGFyZ2V0IHR5cGVudW1iZXIgd291bGQgYmUgemVybyBmb3Igbm9uLXplcm8gdHlwZSkuLjAxMjM0NTY3ODlhYmNkZWZCb3Jyb3dNdXRFcnJvcmFscmVhZHkgYm9ycm93ZWQ6IHo2EAASAAAAAQAAAAAAAABjYWxsZWQgYE9wdGlvbjo6dW53cmFwKClgIG9uIGEgYE5vbmVgIHZhbHVlaW5kZXggb3V0IG9mIGJvdW5kczogdGhlIGxlbiBpcyAgYnV0IHRoZSBpbmRleCBpcyAAAADHNhAAIAAAAOc2EAASAAAAAAAAAAQAAAAEAAAAbwAAAD09IT1tYXRjaGVzYXNzZXJ0aW9uIGBsZWZ0ICByaWdodGAgZmFpbGVkCiAgbGVmdDogCiByaWdodDogACc3EAAQAAAANzcQABcAAABONxAACQAAACByaWdodGAgZmFpbGVkOiAKICBsZWZ0OiAAAAAnNxAAEAAAAHA3EAAQAAAAgDcQAAkAAABONxAACQAAADogAAABAAAAAAAAAKw3EAACAAAAAAAAAAwAAAAEAAAAcAAAAHEAAAByAAAAICAgICwgLAp9IH0oKAosY29yZS9zcmMvZm10L251bS5ycwAA5zcQABMAAABmAAAAFwAAADB4MDAwMTAyMDMwNDA1MDYwNzA4MDkxMDExMTIxMzE0MTUxNjE3MTgxOTIwMjEyMjIzMjQyNTI2MjcyODI5MzAzMTMyMzMzNDM1MzYzNzM4Mzk0MDQxNDI0MzQ0NDU0NjQ3NDg0OTUwNTE1MjUzNTQ1NTU2NTc1ODU5NjA2MTYyNjM2NDY1NjY2NzY4Njk3MDcxNzI3Mzc0NzU3Njc3Nzg3OTgwODE4MjgzODQ4NTg2ODc4ODg5OTA5MTkyOTM5NDk1OTY5Nzk4OTkwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwY29yZS9zcmMvZm10L21vZC5yc2ZhbHNldHJ1ZQAAFjkQABMAAACbCQAAJgAAABY5EAATAAAApAkAABoAAAByYW5nZSBzdGFydCBpbmRleCAgb3V0IG9mIHJhbmdlIGZv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', imports)}

/** Entry Point. */
class FormattoPlugin extends obsidian.Plugin {
    constructor() {
        super(...arguments);
        this.utils = new FormattoUtils(this);
        this.icons = new FormattoIcons();
        this.ribbonIcons = new FormattoRibbonIcons(this);
        this.editorMenus = new FormattoEditorMenuEvent(this);
        this.modify = new FormattoModifyEvent(this);
        this.commands = new FormattoCommands(this);
    }
    /** Load and Save Options */
    loadOptions() {
        return __awaiter(this, void 0, void 0, function* () {
            this.settings = Object.assign({}, DEFAULT_OPTIONS, yield this.loadData());
        });
    }
    saveOptions() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.saveData(this.settings);
        });
    }
    /** Runs whenever the user starts using the plugin in Obsidian. */
    onload() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.loadOptions();
            // Initialize WebAssembly
            yield (() => __awaiter(this, void 0, void 0, function* () {
                // @ts-expect-error: formatto_wasm should be called.
                yield __wbg_init(yield formatto_wasm());
            }))();
            this.addSettingTab(new FormattoOptionTab(this.app, this));
            this.icons.registerIcons();
            this.ribbonIcons.registerRibbonIcons();
            this.editorMenus.registerEvents();
            this.modify.registerEvents();
            this.commands.registerCommands();
            console.log("Plugin Loaded: Formatto\n(Some error details are going to be displayed here.)");
        });
    }
    /** Runs when the plugin is disabled. */
    onunload() {
        console.log("Plugin Unloaded: Formatto");
    }
}

module.exports = FormattoPlugin;

/* nosourcemap */