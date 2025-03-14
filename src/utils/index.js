export function generateSlug(title) {
    return title
        .toLowerCase()
        .replace(/[^a-z0-9\s-]/g, '') // Remove special characters
        .replace(/\s+/g, '-') // Replace spaces with hyphens
        .trim();
}
// export function reverseSlug(slug) {
//     return slug
//         .replace(/-/g, ' ') // Replace hyphens with spaces
//         .replace(/\b\w/g, char => char.toUpperCase()); // Capitalize each word
// }
