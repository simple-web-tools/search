// Function to handle opening the selected item
function on_select_callback(item) {
    console.log("Opened:", item.textContent);  // Placeholder callback for when Enter is pressed
    const path = '/' + item.textContent;
    const textFileExtensions = [
        ".bat",
        ".c",
        ".cc",
        ".cfg",
        ".cmake",
        ".conf",
        ".cpp",
        ".cs",
        ".css",
        ".csv",
        ".frag",
        ".glsl",
        ".h",
        ".hpp",
        ".ini",
        ".jai",
        ".js",
        ".json",
        ".lua",
        ".md",
        ".ps1",
        ".py",
        ".sh",
        ".txt",
        ".vert",
        ".vim",
        ".xml",
        ".yml",
        ".yaml",
    ];

    if (!path.endsWith(".html") && textFileExtensions.some(extension => path.endsWith(extension))) {
        window.location.href = "/file_viewer.html?path=" + encodeURIComponent(path);
        return;
    }

    window.location.href = path;
}
