import fs from "node:fs";
import path from "node:path";
import { createRequire } from "node:module";

const root = path.resolve(import.meta.dirname, "..");
global.window = {};
createRequire(import.meta.url)(path.join(root, "assets/profile-data.js"));
const profile = global.window.ThreeKGProfile;

const quote = (value = "") => `"${String(value).replaceAll('"', '""')}"`;
const absolute = (relative = "") =>
  relative ? `https://raw.githubusercontent.com/shabrawyz/threekg-website-testing/main/${relative}` : "";
const html = (paragraphs = []) => paragraphs.map((p) => `<p>${p}</p>`).join("");
const story = (sections = []) => sections.map((section) => {
  const body = html(section.paragraphs || []) +
    (section.items ? `<ul>${section.items.map((item) => `<li>${item}</li>`).join("")}</ul>` : "");
  return `<h2>${section.title}</h2>${body}`;
}).join("");

const headers = [
  "Name", "Slug", "Category", "Title", "Body", "Client", "Year", "Market", "Scope",
  "Hero Image", "Hero Alt", "Gallery Images", "Gallery Alt Text", "Story", "Motion URL",
  "Motion Poster", "Motion Title", "Source URL", "Sort Order", "Published"
];
const rows = profile.projects.map((project, index) => {
  const images = project.images || [];
  const motion = project.motion?.[0] || {};
  return [
    project.name, project.id, profile.categories[project.category] || project.category, project.title,
    html(project.body), project.meta?.Client, project.meta?.Year, project.meta?.Market, project.meta?.Scope,
    absolute(images[0]?.src), images[0]?.alt,
    images.map((image) => absolute(image.src)).join(";"),
    images.map((image) => image.alt || "").join(";"),
    story(project.storySections), absolute(motion.src), absolute(motion.poster), motion.title,
    project.contentSource?.url, index + 1, "true"
  ].map(quote).join(",");
});
fs.writeFileSync(path.join(import.meta.dirname, "projects.csv"), [headers.map(quote).join(","), ...rows].join("\n") + "\n");

const assets = [];
for (const project of profile.projects) {
  for (const image of project.images || []) assets.push([project.id, "image", image.src, image.alt, image.width, image.height]);
  for (const motion of project.motion || []) {
    assets.push([project.id, "video", motion.src, motion.title || motion.caption, motion.width, motion.height]);
    if (motion.poster) assets.push([project.id, "poster", motion.poster, motion.title || "", motion.width, motion.height]);
  }
}
const assetHeaders = ["Project Slug", "Type", "Repository Path", "Alt or Title", "Width", "Height"];
fs.writeFileSync(path.join(import.meta.dirname, "asset-manifest.csv"),
  [assetHeaders.map(quote).join(","), ...assets.map((row) => row.map(quote).join(","))].join("\n") + "\n");

console.log(`Generated ${rows.length} CMS projects and ${assets.length} asset records.`);

