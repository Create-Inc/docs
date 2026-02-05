// Load Dub analytics script globally
(function () {
  var script = document.createElement("script");
  script.defer = true;
  script.src = "https://www.dubcdn.com/analytics/script.site-visit.js";
  script.dataset.domains = JSON.stringify({
    refer: "anything.link",
    site: "site.anything.com",
  });
  document.head.appendChild(script);
})();
