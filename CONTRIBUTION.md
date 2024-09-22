# Contribution Guide for Igbo Converter Framework
### We welcome contributions to enhance this framework! Feel free to add new features, improve existing ones, or report issues. Together, we can make coding in Igbo easier and more accessible for developers.

## Igbo Parser

The following code maps Igbo keywords to their English JavaScript equivalents and vice versa.

```javascript
// igboparser.js
const igboParser = {
    // Igbo to English
    "mgbe_ọzọ": "var",
    "hapụ": "let",
    "dịrị": "const",
    "ọ bụrụ": "if",
    "ọzọ": "else",
    "ọ_bụrụ_ọzọ": "if_else",
    "gbanwee": "switch",
    "ọnọdụ": "case",
    "ndabara": "ndabara",
    "n'ihi": "for",
    "ọtụtụ": "while",
    "me": "do",
    "gbajie": "break",
    "ga_n'ihu": "continue",
    "laghachi": "return",
    "ọrụ": "function",
    "nkuzi": "class",
    "gbasara": "extends",
    "ụzọ": "super",
    "nwalee": "try",
    "jide": "catch",
    "n'ikpeazụ": "finally",
    "tụpụ": "throw",
    "oge_ọzọ": "async",
    "chere": "await",
    "ọhụrụ": "new",
    "kwapụ": "delete",
    "ụdị": "typeof",
    "ụdị_nke": "instanceof",
    "nke_a": "this",
    "ihe_na-adịghị": "void",
    "uru": "yield",
    "n'ime": "in",
    "nke": "of",
    "ya_na": "with",
    "nwalee_aka": "debugger",
    "bịara": "import",
    "zipụ": "export",
    "ndabara": "default",

    // JavaScript Methods and Properties
    "malite_na": "startsWith", // Starts with
    "gụnyere": "includes",     // Includes
    "kachasị": "indexOf",      // IndexOf
    "nke_ụbọchị": "slice",     // Slice
    "ụgwọ": "push",           // Push
    "wepụ": "pop",             // Pop
    "dị": "length",            // Length
    "njikọ": "concat",         // Concat
    "mapụta": "map",           // Map
    "mepụta": "filter",        // Filter
    "gbakwunye": "reduce",     // Reduce

    // English to Igbo (reverse mappings)
    "var": "mgbe_ọzọ",
    "let": "hapụ",
    "const": "dịrị",
    "if": "ọ bụrụ",
    "else": "ọzọ",
    "if_else": "ọ_bụrụ_ọzọ",
    "switch": "gbanwee",
    "case": "ọnọdụ",
    "default": "ndabara",
    "for": "n'ihi",
    "while": "ọtụtụ",
    "do": "me",
    "break": "gbajie",
    "continue": "ga_n'ihu",
    "return": "laghachi",
    "function": "ọrụ",
    "class": "nkuzi",
    "extends": "gbasara",
    "super": "ụzọ",
    "try": "nwalee",
    "catch": "jide",
    "finally": "n'ikpeazụ",
    "throw": "tụpụ",
    "async": "oge_ọzọ",
    "await": "chere",
    "new": "ọhụrụ",
    "delete": "kwapụ",
    "typeof": "ụdị",
    "instanceof": "ụdị_nke",
    "this": "nke_a",
    "void": "ihe_na-enweghị",
    "yield": "uru",
    "in": "n'ime",
    "of": "nke",
    "with": "ya_na",
    "debugger": "nwalee_aka",
    "import": "bịara",
    "export": "zipụ",

    // JavaScript Methods and Properties (reverse mappings)
    "startsWith": "malite_na",
    "includes": "gụnyere",
    "indexOf": "kachasị",
    "slice": "nke_ụbọchị",
    "push": "ụgwọ",
    "pop": "wepụ",
    "length": "dị",
    "concat": "njikọ",
    "map": "mapụta",
    "filter": "mepụta",
    "reduce": "gbakwunye",
};

export default igboParser;


