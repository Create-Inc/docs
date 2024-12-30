// Load Twitter widget script globally
(function() {
    const script = document.createElement('script');
    script.async = true;
    script.src = "https://platform.twitter.com/widgets.js";
    script.charset = "utf-8";
    document.head.appendChild(script);
  })();