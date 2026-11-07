/* =========================================================
  Page logic. Content comes from content.js (loaded first).
   ========================================================= */

/* ---------- 1. Helpers ---------- */
const $  = selector => document.querySelector(selector);
const $$ = selector => [...document.querySelectorAll(selector)];

// Makes text safe to insert into HTML
function escapeHtml(text) {
  const replacements = { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" };
  return String(text).replace(/[&<>"]/g, char => replacements[char]);
}


/* ---------- 2. Fill in page text, stats and photos ---------- */
$("#navLogo").textContent   = content.domain;
$("#splashUrl").textContent = "www." + content.domain;
$("#aboutName").textContent = content.name;
$("#footer").textContent    = "© 2026 " + content.name;

// Stats are counted from the content, so they always match
const totalWorks = content.projects.reduce(
  (count, project) => count + project.images.length + (project.video ? 1 : 0), 0
);
$("#statProjects").textContent = content.projects.length;
$("#statWorks").textContent    = totalWorks;
$("#statTools").textContent    = content.techStack.length;

// Profile image boxes (data-photo="badge" or data-photo="about")
const placeholderIcon = `
  <svg viewBox="0 0 100 100" fill="#888">
    <circle cx="50" cy="34" r="18"/>
    <path d="M12 100c0-26 16-38 38-38s38 12 38 38z"/>
  </svg>`;

$$("[data-photo]").forEach(box => {
  const src = content.photos[box.dataset.photo];
  box.innerHTML = src
    ? `<img src="${src}" alt="${escapeHtml(content.name)}">`
    : placeholderIcon;
});

// Hide the splash screen after 2.2 seconds
setTimeout(() => $("#splash").classList.add("hide"), 2200);


/* ---------- 3. Portfolio tabs ---------- */
function projectCardHtml(project, index) {
  const cover = project.cover
    ? `<img src="${project.cover}" alt="${escapeHtml(project.title)}" loading="lazy">`
    : "preview";

  return `
    <div class="card" data-index="${index}" style="animation-delay:${index * 0.08}s">
      <div class="photo">${cover}</div>
      <h3>${escapeHtml(project.title).toUpperCase()}</h3>
      <p>${escapeHtml(project.description)}</p>
    </div>`;
}

function techCardHtml(tech, index) {
  return `
    <div class="card" style="animation-delay:${index * 0.05}s">
      <h3 style="margin:0">${escapeHtml(tech)}</h3>
    </div>`;
}

function showTab(tabName) {
  const grid = $("#cardGrid");
  grid.className = "card-grid" + (tabName === "stack" ? " stack" : "");

  grid.innerHTML = tabName === "projects"
    ? content.projects.map(projectCardHtml).join("")
    : content.techStack.map(techCardHtml).join("");
}

showTab("projects"); // default tab

$$(".tabs button").forEach(button => {
  button.onclick = () => {
    $$(".tabs button").forEach(b => b.classList.remove("active"));
    button.classList.add("active");
    showTab(button.dataset.tab);
  };
});


/* ---------- 4. Project popup ---------- */
function projectPopupHtml(project) {
  const techChips = project.stack
    .map(tech => `<span class="chip">${escapeHtml(tech)}</span>`)
    .join("");

  const featureLines = project.features
    .map(feature => `<p style="margin:0 0 4px">&bull; ${escapeHtml(feature)}</p>`)
    .join("");

  const video = project.video
    ? `<video class="modal-video" controls preload="metadata" poster="${project.video.poster}">
        <source src="${project.video.src}" type="video/mp4">
        </video>`
    : "";

  const gallery = project.images.length
    ? project.images
        .map(src => `<img src="${src}" alt="${escapeHtml(project.title)}" loading="lazy">`)
        .join("")
    : "";

  return `
    <h2>${escapeHtml(project.title)}</h2>
    <p>${escapeHtml(project.description)}</p>
    <h3 style="font-size:16px; margin-bottom:10px">Technologies Used</h3>
    <div class="chips">${techChips}</div>
    <h3 style="font-size:16px; margin:14px 0 8px">Key Features</h3>
    ${featureLines}
    <h3 style="font-size:16px; margin:14px 0 8px">${project.video ? "Video" : "Gallery"}</h3>
    ${video}
    ${gallery ? `<div class="gallery">${gallery}</div>` : ""}`;
}

function closeModal() {
  $("#modal").classList.remove("open");
  $("#modalContent").innerHTML = ""; // also stops a playing video
}

// Click a project card -> open popup
$("#cardGrid").onclick = event => {
  const card = event.target.closest("[data-index]");
  if (!card) return; // only project cards have data-index

  $("#modalContent").innerHTML = projectPopupHtml(content.projects[card.dataset.index]);
  $("#modal").classList.add("open");
};

// Close popup: "Back" link, click on the dark background, or Esc key
$("#modalBack").onclick = event => {
  event.preventDefault();
  closeModal();
};

$("#modal").onclick = event => {
  if (event.target.id === "modal") closeModal();
};

document.addEventListener("keydown", event => {
  if (event.key === "Escape") closeModal();
});


/* ---------- 5. Contact form & comments ---------- */
// "Send Message" opens the visitor's email app with the message filled in
$("#sendButton").onclick = () => {
  const name    = $("#contactName").value;
  const email   = $("#contactEmail").value;
  const message = $("#contactMessage").value;

  if (!name || !message) return;

  const subject = encodeURIComponent("Message from " + name);
  const body    = encodeURIComponent(message + "\n\n" + email);
  location.href = `mailto:${content.email}?subject=${subject}&body=${body}`;
};

// Comments are kept in memory only (they disappear on refresh)
const comments = [];

$("#postButton").onclick = () => {
  const name = $("#commentName").value.trim();
  const text = $("#commentText").value.trim();

  if (!name || !text) return;

  comments.unshift({ name, text }); // newest first
  $("#commentName").value = "";
  $("#commentText").value = "";

  $("#commentList").innerHTML = comments
    .map(c => `<div class="comment"><b>${escapeHtml(c.name)}</b><span>${escapeHtml(c.text)}</span></div>`)
    .join("");
};


/* ---------- 6. Scroll effects ---------- */
// Fade in elements when they scroll into view
const revealObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add("visible");
  });
}, { threshold: 0.15 });

$$(".reveal").forEach(element => revealObserver.observe(element));

// Highlight the nav link of the section currently on screen
const sectionObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    $$("nav a").forEach(link => {
      link.classList.toggle("active", link.getAttribute("href") === "#" + entry.target.id);
    });
  });
}, { threshold: 0.5 });

$$("section").forEach(section => sectionObserver.observe(section));
