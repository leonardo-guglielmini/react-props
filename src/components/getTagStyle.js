export default function getTagStyle(tag) {
    switch (tag) {
        case "html": return "htmlTag"
        case "js": return "jsTag"
        case "css": return "cssTag"
        case "php": return "phpTag"
    }
}