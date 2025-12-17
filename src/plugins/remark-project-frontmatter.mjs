export function remarkProjectFrontmatter() {
    // Returns multiple properties for /projects in 
    return function (tree, file) {
        file.data.astro.frontmatter.duration = "7 months";
        file.data.astro.frontmatter.github = "";
        
    }
}