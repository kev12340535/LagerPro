<!DOCTYPE html>
<html lang="de">
<head>
  <meta charset=\"UTF-8\">
  <title>Lager App – Einfach</title>
  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">
  <meta name=\"theme-color\" content=\"#05060a\">
  <link rel=\"manifest\" href=\"manifest.webmanifest\">
  <meta name=\"apple-mobile-web-app-capable\" content=\"yes\">
  <meta name=\"apple-mobile-web-app-status-bar-style\" content=\"black-translucent\">
  <meta name=\"apple-mobile-web-app-title\" content=\"Lager\">
  <link rel=\"apple-touch-icon\" href=\"icon-192.png\">
  <style>
    :root {
      --bg: #05060a;
      --bg-elevated: #101320;
      --bg-soft: #151827;
      --accent: #3ea6ff;
      --accent-soft: rgba(62,166,255,0.22);
      --accent-strong: #7fc4ff;
      --danger: #ff4b5c;
      --text: #f5f7ff;
      --text-soft: #c0c4dd;
      --border: #262b3a;
      --radius: 12px;
      --radius-pill: 999px;
      --shadow: 0 14px 32px rgba(0,0,0,0.65);
    }
    * { box-sizing: border-box; -webkit-tap-highlight-color: transparent; }
    body {
      margin: 0;
      font-family: system-ui, -apple-system, BlinkMacSystemFont, \"SF Pro Text\", sans-serif;
      background: radial-gradient(circle at top, #171c2b 0, #05060a 40%, #020309 100%);
      color: var(--text);
      min-height: 100vh;
      display: flex;
      justify-content: center;
      padding: 10px;
    }
    .app {
      width: 100%;
      max-width: 980px;
    }
  </style>
</head>
<body>
  <div class=\"app\">
    <h1>Lager App Platzhalter</h1>
    <p>Diese Datei ist ein Platzhalter. Die volle Version wurde noch nicht eingesetzt.</p>
  </div>
  <script>
    if ('serviceWorker' in navigator) {
      window.addEventListener('load', () => {
        navigator.serviceWorker.register('sw.js');
      });
    }
  </script>
</body>
</html>
