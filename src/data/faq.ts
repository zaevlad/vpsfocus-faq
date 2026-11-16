export type FaqItem = { slug: string; q: string; a: string };
export type FaqCategory = { id: string; title: string; items: FaqItem[] };

export const FAQ_UPDATED = "2026-11-16";

// Answers grounded in the vpsFocus product documents (vpsinfo repository:
// misc/site-copy.md, misc/tarifs2.md, misc/features.md, misc/analytics.md,
// misc/mcp.md, misc/status-page.md, misc/compliance.md, misc/ignore.md,
// misc/translate.md, misc/updates0912.md and misc/releases.md).
// This file is the single source of truth: the page, /q/<slug> pages,
// /faq.json and /llms-full.txt all render from it. public/llms.txt is regenerated from it by scripts/generate-llms.mjs.
export const faq: FaqCategory[] = [
  {
    id: "general",
    title: "General",
    items: [
      {
        slug: "what-is-vps-focus",
        q: "What is vpsFocus?",
        a: "vpsFocus is a desktop app that connects to your VPS over SSH and installs analytics and monitoring next to your sites. In one window you see visitors, errors, server health, domain and certificate expiry dates, site speed, broken links and SEO checks. Everything runs on your own server, and your sites keep working exactly as before. Website: https://vpsfocus.xyz.",
      },
      {
        slug: "who-is-vps-focus-for",
        q: "Who is vpsFocus for?",
        a: "For anyone who has a site on their own VPS but no system-administration background: vibe coders, beginner developers, marketers. Agencies running dozens of projects use it too, but simplicity comes first — you only need your server address and the login details your hosting provider gave you.",
      },
      {
        slug: "how-does-it-work",
        q: "How does vpsFocus work?",
        a: "Three steps. Add your server: the app only checks that it can log in and changes nothing. Run the check: it looks at memory, disk space, the port it needs and the operating system, and says in plain words whether the server is ready. Install monitoring: one button, and the installation runs on screen by itself. Documentation: https://vpsfocus.xyz/docs#install. Documentation: https://vpsfocus.xyz/docs#server.",
      },
      {
        slug: "is-it-free",
        q: "Is vpsFocus free?",
        a: "Yes. The free plan needs no registration and no card, and it includes everything that runs on your server and in the desktop app — analytics, monitoring, notifications, reports, SEO, speed and backups — with no limits on servers or sites. A paid plan for features that run on our servers, such as external uptime checks, is still in development.",
      },
      {
        slug: "account-required",
        q: "Do I need an account?",
        a: "No. Installation and everything that runs on your server work without sign-up. An account is only needed for paid features that run on our infrastructure.",
      },
      {
        slug: "which-platforms",
        q: "Which platforms does it support?",
        a: "The desktop app runs on Windows, Linux and macOS. The macOS build is universal for Intel and Apple Silicon, signed with an Apple Developer ID and notarized, so it opens without the Gatekeeper warning. The Windows build is not code-signed yet, so SmartScreen may warn on first launch. Download: https://vpsfocus.xyz/download.",
      },
      {
        slug: "languages",
        q: "What languages does vpsFocus support?",
        a: "The app, the website, alert and report texts and emails come in English, Russian, Spanish, German, French and Portuguese (Brazilian). You choose the app language on the Account screen (it works without signing in) and the notification language separately. Spanish, German, French and Portuguese notifications need monitoring 0.34.0 or newer on every server: older monitoring writes in Russian for any language except English, so a new language is offered only after all servers are updated.",
      },
      {
        slug: "desktop-app-or-website",
        q: "Is vpsFocus a desktop app or a website?",
        a: "It is a desktop program, not a website. There is no cloud dashboard and no mobile app. The app runs on your computer, connects to your server directly and reads data from it; your statistics stay on your server.",
      },
      {
        slug: "do-i-need-linux-skills",
        q: "Do I need Linux, SSH or Docker skills?",
        a: "No. You need the server address and the login details your hosting provider gave you. The app checks the server, explains what is missing in plain words and runs the installation itself. You do not need to use the terminal, Docker or nginx.",
      },
      {
        slug: "what-does-it-monitor",
        q: "What does vpsFocus monitor?",
        a: "Visitors and referrers, 5xx and 404 spikes from web-server logs, CPU, memory, disk, swap and inodes, domain and SSL certificate expiry, Core Web Vitals, broken links, and SEO checks such as titles, descriptions, canonical URLs, robots.txt and sitemaps. It also covers failed services, open ports, OS end-of-life and who can sign in.",
      },
      {
        slug: "what-are-projects",
        q: "What is a project?",
        a: "A project groups the domains of one site: example.com, www.example.com and shop.example.com are recognised as one project automatically, and you can split or merge them by hand. Each project has its own status, a checklist of what needs attention and a change feed. Documentation: https://vpsfocus.xyz/docs#projects.",
      },
      {
        slug: "what-gets-installed",
        q: "What exactly is installed on my server?",
        a: "A few containers in Docker, in their own directory /opt/vpsfocus: Umami (open-source visitor analytics), Postgres (its database), Caddy (the web front for the analytics script) and a small monitoring agent. They use their own Docker network and volumes and a separate port you choose. Your web server, site files and databases are not touched. If Docker is missing, the installation adds it. Documentation: https://vpsfocus.xyz/docs#server. Server code: https://vpsfocus.xyz/server-code.",
      },
      {
        slug: "safe-for-production",
        q: "Is it safe to install on a production server?",
        a: "The installation is isolated and checks everything first: the pre-install check only reads, the monitoring never takes your site's ports, and a failed installation rolls itself back. The product is young, though, so the first time it is wise to try it on a server where a mistake costs little. Documentation: https://vpsfocus.xyz/docs#server.",
      },
      {
        slug: "is-it-apm",
        q: "Is vpsFocus an APM like Datadog or New Relic?",
        a: "No. APM traces every request inside your code — queries, spans, slow functions. vpsFocus looks at your sites from the outside and at the server's basics: is the site up, how many errors, is there enough disk and memory, has a certificate expired, how fast do pages load. If your last outage was a full disk, a stopped container or an expired certificate, that is what you need; if it was one slow database query, you need APM. Guide: https://vpsfocus.xyz/guides/datadog-alternative.",
      },
      {
        slug: "projects-screen",
        q: "What is on the main Projects screen?",
        a: "One page for all your servers and sites: a status overview (servers → sites → findings), servers and sites with problems first, deadlines for the next 90 days, speed, SEO and link figures, server resources, visitors for 24 hours, 7 or 30 days, backups, security and notification channels. A 'Needs attention' tab orders the same findings by priority: urgent, in the coming days, improvements and no data. A server that did not answer stays on screen in grey with the reason; 'no data' is never shown as 'all fine'. Documentation: https://vpsfocus.xyz/docs#projects.",
      },
      {
        slug: "data-refresh",
        q: "Why does the data not refresh by itself?",
        a: "The app remembers what it has loaded until you close it, so switching screens is instant. It asks the server again only when you press 'Refresh' or change something yourself. Two things refresh on their own: server status dots every five minutes, and the calendar's domain and certificate dates every six hours. Next to 'Refresh' the app shows when the data was fetched and, for reports with their own time such as an overnight SEO audit, when the monitoring produced them. Documentation: https://vpsfocus.xyz/docs#problems.",
      },
      {
        slug: "get-support",
        q: "Where can I get help?",
        a: "Use the support address on the documentation page https://vpsfocus.xyz/docs. Write what you did, what the screen showed (a screenshot or the error text with its 'Technical detail') and which system the server runs. Do not send passwords, keys or notification channel addresses — they are not needed for an answer.",
      },
    ],
  },
  {
    id: "installation",
    title: "Installation and first run",
    items: [
      {
        slug: "how-to-install",
        q: "How do I install vpsFocus?",
        a: "Download the app from https://vpsfocus.xyz/download, add your server and follow the on-screen steps. The app runs a free pre-install check, downloads the installation files and shows progress. No terminal commands are needed. Documentation: https://vpsfocus.xyz/docs#install.",
      },
      {
        slug: "server-requirements",
        q: "What kind of server do I need?",
        a: "A Linux VPS or dedicated server with systemd: Ubuntu or Debian is the most reliable choice, with an x86-64 or ARM64 processor. Recommended: 2 GB of memory, 10 GB of free disk, root or a user with passwordless sudo, and a domain or subdomain pointing at the server for the analytics address. Docker is not required — the app installs it if missing. Ports 80 and 443 may be busy: monitoring runs on its own port next to your web server. Documentation: https://vpsfocus.xyz/docs#server. Guide: https://vpsfocus.xyz/guides/vps-checklist.",
      },
      {
        slug: "unsupported-servers",
        q: "Which servers will not work?",
        a: "Shared hosting without server access, Windows or macOS servers, 32-bit processors (only x86-64 and ARM64 work), less than 1 GB of memory or 5 GB of disk, and logins without administrator rights or with a sudo that asks for a password. The app can install Docker itself only on Ubuntu, Debian, CentOS, RHEL, Rocky Linux and Fedora; on AlmaLinux, Alpine, Arch, openSUSE and others, install Docker with Compose v2 first. The old docker-compose v1 is not enough, and VPS built on OpenVZ or LXC containers often cannot run Docker at all. Guide: https://vpsfocus.xyz/guides/shared-hosting-vs-vps.",
      },
      {
        slug: "pre-install-check",
        q: "What does the pre-install check test?",
        a: "It checks memory, free disk, the port monitoring needs, Docker and Compose, administrator rights and whether a domain points at the server. It also warns about things that can cause trouble, such as a VPN or LXC containers. The check only reads; it changes nothing and leaves nothing behind. Documentation: https://vpsfocus.xyz/docs#server.",
      },
      {
        slug: "installation-time",
        q: "How long does installation take?",
        a: "Usually a few minutes, depending on the server and its network. The app shows a progress bar and a line explaining the current step. If your connection drops, the installation continues on the server and the app shows the result when you reconnect.",
      },
      {
        slug: "does-it-change-my-site",
        q: "Will it change my site or server settings?",
        a: "No. Monitoring is read-only: your files, web-server settings and databases stay exactly as they were. It runs alongside your site on its own port, never takes the ports your site uses, and nothing needs to be restarted. This is a hard rule, not a setting.",
      },
      {
        slug: "failed-install",
        q: "What happens if an installation fails?",
        a: "The installation cleans up after itself: if something goes wrong on the first run, the server returns to its original state. The app shows what happened and what to do next.",
      },
      {
        slug: "interrupted-install",
        q: "What if my internet drops during installation?",
        a: "The installation still finishes on the server, and the app shows you the result as soon as the connection comes back.",
      },
      {
        slug: "updates",
        q: "How do updates work?",
        a: "You can decline an update. Before every update a copy of the data is saved, and if something goes wrong everything is rolled back. The app and the monitoring on each server update separately; 'Update all' updates your servers one at a time. Documentation: https://vpsfocus.xyz/docs#life.",
      },
      {
        slug: "how-to-remove",
        q: "How do I remove vpsFocus?",
        a: "One button: monitoring is removed from the server together with its data. Docker stays even if the installation brought it, because other software may use it. You can also remove a server from the app and leave its monitoring running. Documentation: https://vpsfocus.xyz/docs#life.",
      },
      {
        slug: "docker-and-panels",
        q: "Can I install it on a server that already runs Docker or a control panel?",
        a: "It works alongside an existing Docker installation and a control panel, as long as Docker Compose v2 can run and the monitoring port is free. The app never reads or changes the panel's configuration. If Docker is missing, the app installs it on supported distributions; on others it asks you to install Docker first. Guide: https://vpsfocus.xyz/guides/docker-vs-systemd.",
      },
      {
        slug: "first-site-setup",
        q: "How do I add my first site and tracking snippet?",
        a: "After installation, add the site's domain and place the tracking snippet on the site. The app recognises www, shop and other subdomains as one project automatically. Analytics starts collecting when the snippet is live; monitoring of the server starts immediately.",
      },
      {
        slug: "macos-signed",
        q: "Is the macOS app signed and notarized?",
        a: "Yes. Since version 1.6.0 the macOS build is signed with an Apple Developer ID and notarized by Apple. The download is a universal DMG for Intel and Apple Silicon, and the app opens without the Gatekeeper warning. Download page: https://vpsfocus.xyz/download.",
      },
      {
        slug: "publisher-warning",
        q: "Why does Windows warn about an unknown publisher?",
        a: "The Windows build is not code-signed yet, so SmartScreen may warn about an unknown publisher on first launch. The download page explains what to press. This is a warning about the signature, not a virus report; the installer is checked against a published checksum. Download page: https://vpsfocus.xyz/download.",
      },
      {
        slug: "ssh-key-types",
        q: "Which SSH keys and sign-in methods can I use?",
        a: "A private key in OpenSSH format (ed25519, RSA or ECDSA, passphrase supported) or a password. PuTTY .ppk keys are not supported: convert one in PuTTYgen via Conversions → Export OpenSSH key. On the first connection the app remembers the server's host key and checks it from then on. Documentation: https://vpsfocus.xyz/docs#server.",
      },
      {
        slug: "sudo-password",
        q: "What if sudo asks for a password?",
        a: "The installation runs unattended and would hang on a password prompt, so the app treats it as a blocker. Connect as root or give the user passwordless sudo. Documentation: https://vpsfocus.xyz/docs#problems.",
      },
      {
        slug: "ports-80-443-busy",
        q: "What if ports 80 and 443 are already used by my web server?",
        a: "That is the normal case and not a problem. The monitoring does not take 80 or 443; it runs on a separate free port next to your web server (chosen from a list compatible with Cloudflare), and that port goes into the analytics code on your site. Documentation: https://vpsfocus.xyz/docs#problems. Guide: https://vpsfocus.xyz/guides/multiple-sites-one-vps.",
      },
      {
        slug: "analytics-domain-certificate",
        q: "Why does it need a domain, and how is the certificate issued?",
        a: "The analytics panel and tracking script need an address, for example a subdomain of your site. If ports 80 and 443 are free, an A record pointing at the server is enough. If they are busy, the certificate is issued over DNS-01: either with API access to your DNS (Cloudflare, Route 53, DigitalOcean) or with a single CNAME to the vpsFocus fallback server — the app tells you which. The app checks your records itself every 10 seconds, and an existing certificate found on the server can be reused. Documentation: https://vpsfocus.xyz/docs#server.",
      },
      {
        slug: "changes-outside-folder",
        q: "What does it change outside its own folder?",
        a: "Outside /opt/vpsfocus and Docker it changes exactly two things, and only with your consent: a firewall rule for its port and read access to the web server's logs. Rolling back an installation removes the firewall rule.",
      },
      {
        slug: "bring-own-certificate",
        q: "Can I use my own certificate?",
        a: "Yes. A certificate for the analytics address that already exists on the server can be reused, and your own certificate, the certificate email and the port are under 'Advanced' in the installation card.",
      },
    ],
  },
  {
    id: "privacy",
    title: "Privacy, security and data",
    items: [
      {
        slug: "where-is-data-stored",
        q: "Where is my data stored?",
        a: "All statistics and monitoring data are collected and stored on your own server — not in our cloud and not with third-party companies. The app connects to your server directly, not through us.",
      },
      {
        slug: "can-you-see-my-stats",
        q: "Can the vpsFocus team see my statistics?",
        a: "No. Our servers know only your account and the addresses of the sites you connected to external checks yourself. Everything else never leaves your machine.",
      },
      {
        slug: "server-password",
        q: "What happens to my server password?",
        a: "Nothing: it never leaves your computer. Passwords and keys are kept in your system's secure storage — the same place your browser keeps saved passwords.",
      },
      {
        slug: "is-it-open-source",
        q: "Is the code open source?",
        a: "The code that runs on your server — install scripts, the monitoring agent and the Caddy image — is public at https://github.com/zaevlad/vpsfocus-server and described at https://vpsfocus.xyz/server-code, so you can read it before installing. The licence is BSL 1.1: you may run it on your own servers and your clients' servers, you may not build a competing product from it, and after four years it becomes Apache 2.0. Every release is signed and can be verified. The desktop app and the website backend are separate and not open. Guide: https://vpsfocus.xyz/guides/open-server-code.",
      },
      {
        slug: "third-party-services",
        q: "Does vpsFocus talk to third-party services?",
        a: "Not by default. Without extras the app talks only to your server and your sites — it fetches your site's favicon for the menu, the way a browser does. External checks, Google speed measurement, Cloudflare, email routing and Telegram, Slack or Discord notifications are separate features you switch on yourself.",
      },
      {
        slug: "export-data",
        q: "Can I take my data with me?",
        a: "Yes. The analytics database and the monitoring settings can be downloaded as a regular archive with one button, at any time. The archive contains passwords, so store it as carefully as you would a password file.",
      },
      {
        slug: "how-connection-works",
        q: "How does the app connect to my server?",
        a: "The app connects to your server over SSH, the same way your hosting provider does. Monitoring runs in isolated containers on a separate port; the app opens a local tunnel to read its data. Nothing connects from our servers to your server, and no inbound port is opened for the app.",
      },
      {
        slug: "agent-server-access",
        q: "What access does the agent have on my server?",
        a: "The monitoring agent is isolated from your site. It reads web-server logs and settings, but does not change files, databases or nginx configuration. It has no access to the Docker socket and does not run as root on the host; actions such as restarting a service are run by the app over SSH, only when you press the button.",
      },
      {
        slug: "gdpr-and-cookies",
        q: "Does vpsFocus use cookies and is it GDPR-friendly?",
        a: "Visitor analytics sets no cookies and stores data on your server, not with us. The app itself does not send visitor data anywhere. For your own legal pages, the compliance scan checks cookie banners, consent, privacy policy and related requirements; it flags problems but does not give legal advice.",
      },
      {
        slug: "cloud-dashboard",
        q: "Is there a cloud dashboard or a mobile app?",
        a: "No. vpsFocus is a desktop app; there is no cloud dashboard or mobile app. Your statistics stay on your server and the app connects to it directly. A second computer can reach the same server if it has SSH access, but it does not download your data into our cloud.",
      },
      {
        slug: "who-can-sign-in",
        q: "Who can sign in to my server?",
        a: "The Security screen lists the users who can sign in, the fingerprints of their SSH keys (never the keys themselves) and sign-ins over the last 30 days. The app's own key and sign-ins are marked. It shows what it finds; it does not change SSH configuration. Documentation: https://vpsfocus.xyz/docs#security.",
      },
      {
        slug: "os-end-of-life",
        q: "When does my server's OS stop receiving updates?",
        a: "The Security screen shows the date until which your server's system gets free security updates (Ubuntu, Debian, AlmaLinux, Rocky Linux, CentOS). The same date appears on Projects and in the Calendar, starting to remind three months ahead, so you can plan an upgrade. If paid Ubuntu Pro is enabled on the server, the real date differs and the app does not check that. Documentation: https://vpsfocus.xyz/docs#security.",
      },
      {
        slug: "data-encryption",
        q: "Is my data encrypted?",
        a: "Traffic between the app and your server uses SSH. Passwords and keys are kept in your operating system's secure storage. vpsFocus does not add disk encryption to your server or encryption to backups — use your provider's disk encryption if you need it. The automatic backup copy leaves secrets out; an archive you download by hand contains passwords.",
      },
      {
        slug: "analytics-panel-exposed",
        q: "Is the analytics panel exposed to the internet?",
        a: "No. The app reaches the analytics panel through an SSH tunnel and the local port is not published. Only the small tracking script is served from your own domain.",
      },
      {
        slug: "what-traces-left",
        q: "What traces does vpsFocus leave in my server's logs?",
        a: "The pre-install check and the security check leave no files: the script is passed over the connection and never written to disk, and not even package lists are refreshed. The only traces are entries in the system log — the SSH login, as with any login, and, if you sign in as a user other than root, each command run through sudo.",
      },
      {
        slug: "env-git-exposed",
        q: "Does it check whether my site serves .env or .git files?",
        a: "Yes. The Security check asks your sites for .env and .git from your computer, the way a browser does, and tells you whether the file is still served. The contents are neither shown nor stored. The Bots & AI screen also points you there when a scanner got a 200 for such a path. Documentation: https://vpsfocus.xyz/docs#security.",
      },
      {
        slug: "security-not-green",
        q: "Will it tell me that my server is secure?",
        a: "No. There is no green 'the server is secure': the check sees the server from the inside, and the bottom of the screen lists what it does not look at. 'Could not check' is never shown as fine, and without administrator rights some items are unavailable. The result is not stored anywhere — run it again after restarting the app. Documentation: https://vpsfocus.xyz/docs#security.",
      },
    ],
  },
  {
    id: "analytics",
    title: "Visitor analytics",
    items: [
      {
        slug: "what-analytics",
        q: "What analytics does it collect?",
        a: "Self-hosted analytics: visitors, page views, referrers, channels, UTM tags, entry and exit pages, bounce rate, visit duration, countries, cities, languages, devices, browsers, operating systems, screen sizes, custom events, funnels, retention, journeys and live visits. There are no third-party counters. Guide: https://vpsfocus.xyz/guides/self-hosted-analytics.",
      },
      {
        slug: "analytics-cookies",
        q: "Does the analytics use cookies?",
        a: "No cookies are used for visitor analytics. A visitor is recognised by a hash of browser, address and a salt that changes on the first day of each month. That keeps counting privacy-friendly, but it means one person on two devices counts as two visitors, and recognition restarts every month.",
      },
      {
        slug: "how-visitors-counted",
        q: "How is a visitor counted?",
        a: "A visitor is a browser with the same hash of address, user agent and monthly salt. A visit starts with the first page view and ends after 30 minutes of inactivity. Because there are no cookies, the count is close to people but not exact.",
      },
      {
        slug: "analytics-vs-google",
        q: "Why do my numbers differ from Google Analytics?",
        a: "Google Analytics and Yandex Metrica use cookies, accounts and cross-site data. vpsFocus counts on your server without cookies: no demographics, no search phrases and no cross-device identity. Numbers can differ because of that, and because ad blockers remove some visits from both tools. Guide: https://vpsfocus.xyz/guides/self-hosted-analytics. Documentation: https://vpsfocus.xyz/docs#analytics-limits.",
      },
      {
        slug: "search-keywords",
        q: "Can I see the search keywords people used?",
        a: "No. Search engines stopped passing the search phrase to sites years ago, and they do not pass it to Metrica either. vpsFocus shows that a visit came from Google or Yandex, but not the query. Google Search Console and Yandex Webmaster show the phrases for free.",
      },
      {
        slug: "demographics",
        q: "Can I see age, gender and interests?",
        a: "No. Age, gender and interests come from advertising networks that follow people across the internet. Your server has no such database and vpsFocus does not build one. It shows what can be measured from your own traffic: country, city, language, device, browser, OS and screen size.",
      },
      {
        slug: "analytics-sections",
        q: "What sections does the analytics screen have?",
        a: "Overview, Sources, Pages, Visitors, Actions, Behaviour and Visits. Overview shows the main numbers and a comparison with the previous period; Sources covers referrers, channels and UTM; Pages shows entry, exit and titles; Visitors covers geography and devices; Actions covers custom events; Behaviour covers retention, paths and funnels; Visits shows individual sessions and a live feed.",
      },
      {
        slug: "custom-events",
        q: "Can I track custom events, goals and funnels?",
        a: "Yes. Add data-umami-event attributes to buttons or links, and the Actions section shows event counts and a chart. You can also build funnels and goals from page and event steps. The app includes a short instruction you can give to an AI assistant. Documentation: https://vpsfocus.xyz/docs#sites.",
      },
      {
        slug: "live-visitors",
        q: "Can I see who is on the site right now?",
        a: "Yes. The header shows how many people are on the site right now, and the Visits section has a live feed for the last half hour. It refreshes about once a minute while the section is open, not constantly, to avoid loading the server.",
      },
      {
        slug: "ad-blockers",
        q: "Why are some visitors missing?",
        a: "Some ad blockers also block analytics scripts. vpsFocus serves its script from your own domain, so it is blocked less often than Google Analytics, but not never. Treat the numbers as a consistent trend, not an exact census.",
      },
      {
        slug: "analytics-limits",
        q: "What does vpsFocus analytics deliberately not do?",
        a: "No demographics, no search phrases, no heatmaps or session recordings, no exact people count, no ad-platform conversions, no history before installation, and no import from Google Analytics or Metrica. Each limitation has a reason: usually privacy, cookies or data that only an advertising network has. Documentation: https://vpsfocus.xyz/docs#analytics-limits.",
      },
      {
        slug: "analytics-export",
        q: "Can I export analytics data?",
        a: "The analytics screen does not have a CSV export yet. You can export all monitoring data as an archive with one button, and the SEO audit exports its results to CSV. The archive is a regular file you can keep or move to another server.",
      },
      {
        slug: "analytics-engine",
        q: "Which analytics engine does it use?",
        a: "Umami, an open-source cookie-free analytics engine. It is the same engine that powers Umami Cloud, installed on your own server and kept updated by vpsFocus. The app reads its data through an SSH tunnel and shows it in seven sections.",
      },
      {
        slug: "ai-referrals",
        q: "Can I see visitors who came from ChatGPT, Perplexity or Claude?",
        a: "Yes. The Sources section has a separate 'From AI services' block: people who arrived through a link in an answer from ChatGPT, Perplexity, Claude and others. This is different from AI bots, which fetch pages and are counted on the Bots & AI screen. Documentation: https://vpsfocus.xyz/docs#sites.",
      },
      {
        slug: "site-data-cards",
        q: "Can I query my site's database from the app?",
        a: "Yes. A site's Data tab runs read-only SQL against its own database — on the server itself or in a Docker container by name; MySQL, MariaDB, PostgreSQL or SQLite — and turns the answer into a card: a number, a short text or a small table. It needs a user that can only SELECT, the screen writes the GRANT for you, and a superuser is refused. It runs through the same tunnel and the answer is not saved or sent anywhere. Documentation: https://vpsfocus.xyz/docs#sites.",
      },
      {
        slug: "visitor-map",
        q: "Is there a visitor map?",
        a: "Yes. The Visitors section has a world map by country, and the live feed has its own map where countries with a visit in the last few minutes pulse. The map is drawn inside the app and calls no map service.",
      },
      {
        slug: "filter-by-click",
        q: "How do I filter analytics?",
        a: "Click a row in any table and the whole screen filters by it — for example a source, a page or a country.",
      },
    ],
  },
  {
    id: "uptime",
    title: "Uptime, domains and certificates",
    items: [
      {
        slug: "external-checks",
        q: "What is checking from outside?",
        a: "A feature that runs on our servers (part of the paid plan that is still in development): every five minutes our server opens your site like a regular visitor, so you learn the site is down even when your whole server, monitoring included, is down. An alert goes out after three failed checks in a row — up to 15 minutes after a real outage — and a recovery notice after two successful ones. Documentation: https://vpsfocus.xyz/docs#checks. Guide: https://vpsfocus.xyz/guides/uptime-kuma-alternative.",
      },
      {
        slug: "downtime-detection-time",
        q: "How quickly will I learn that my site is down?",
        a: "Checks run every five minutes. An alert is sent after three failures in a row, so up to about 15 minutes after a real outage; recovery is sent after two successes, up to about 10 minutes. Certificates are checked every 12 hours with a warning 14 days before expiry. Documentation: https://vpsfocus.xyz/docs#checks.",
      },
      {
        slug: "external-monitor-types",
        q: "What can an external monitor check?",
        a: "A page, a text on the page, a JSON API field, a redirect, a TCP port (mail, SSH or your own service) and DNS records. You can check the main page, /api/health, a login page or any key URL. External checks cannot carry secrets such as Authorization headers: accepting them would put your API tokens on our servers. Pages behind a password are checked from inside by the monitoring on your server instead.",
      },
      {
        slug: "monitor-api",
        q: "Can I monitor an API endpoint or a specific page?",
        a: "Yes. Choose the JSON API profile, set the URL and the expected status or field, and the monitor checks it from outside. One site can have several monitors: the home page, /api/health, a login page.",
      },
      {
        slug: "ssl-certificates",
        q: "How are SSL certificates checked?",
        a: "Certificates are checked locally on your server and, with external checks, from outside. The external check runs every 12 hours and warns 14 days before expiry. When both sources have data, the app shows one state and says where the number came from. Guide: https://vpsfocus.xyz/guides/ssl-certificate-monitoring.",
      },
      {
        slug: "domain-expiry",
        q: "How are domain expiry dates tracked?",
        a: "The agent checks the domain through RDAP with a fallback to whois and reminds you 30, 14, 7 and 1 day before expiry. This is free and runs on your server; the domain is not sent to us for this check. Documentation: https://vpsfocus.xyz/docs#calendar.",
      },
      {
        slug: "job-guard",
        q: "What is Job Guard?",
        a: "A watchdog for cron jobs, backups and sync tasks, part of the paid plan that is still in development. Each task gets a secret URL; your script calls it on start, success or failure. The monitor knows the expected period and a grace window. A failure is an incident immediately; silence after the window is a late incident. Documentation: https://vpsfocus.xyz/docs#checks.",
      },
      {
        slug: "local-vs-external",
        q: "What is the difference between local and external checks?",
        a: "A local check runs from your VPS and answers 'the app responds'. It cannot see your provider's cloud firewall. An external check runs from our machine and answers 'a visitor can reach it'. The app labels both honestly; because external checks need our infrastructure, they are not part of the free plan.",
      },
      {
        slug: "whole-server-down",
        q: "What happens if the whole server goes down?",
        a: "Local monitoring cannot report anything if the whole server is down. External checks keep running from our machine and tell you the site is unreachable. When the server comes back, the app shows the outage and what was happening on the server before it went down. Guide: https://vpsfocus.xyz/guides/uptime-kuma-alternative.",
      },
      {
        slug: "multiple-locations",
        q: "Are checks run from several locations?",
        a: "Checks currently run from one location. There is no multi-region confirmation: a second node would mean a second bill and config sync, while the three-failure threshold already filters out single network glitches. The app says where each result came from.",
      },
      {
        slug: "domain-email-dns",
        q: "Can vpsFocus set up email for my domain?",
        a: "Yes, for Cloudflare users. If your domain's zone is connected, the app can set up Cloudflare Email Routing: it shows the MX and SPF records as 'now → after' and can apply them. It is not a mailbox provider and does not replace your email host. Documentation: https://vpsfocus.xyz/docs#mail.",
      },
      {
        slug: "mail-domain-records",
        q: "Does it check SPF, DMARC and name servers?",
        a: "The 'Mail and domain records' check looks at SPF, DMARC, name servers and the addresses of your sites. You get an email if an SPF or DMARC record disappears or the name servers change. The result also feeds the Site requirements screen. Documentation: https://vpsfocus.xyz/docs#sites.",
      },
      {
        slug: "deploy-hook",
        q: "Can it check my site after a deploy?",
        a: "Yes. Each project has a local hook URL you can call from your CI after a deploy. The agent then checks the project's key URLs, so a broken release is noticed without waiting for the next scheduled round. The hook is local and free.",
      },
      {
        slug: "status-pages",
        q: "What are public status pages?",
        a: "A public page at /status/<name> showing whether your sites are up right now and how they fared over the last 90 days. It is built from external checks, so it belongs to the paid plan that is still in development. You confirm ownership of the domain with a TXT record. Documentation: https://vpsfocus.xyz/docs#status.",
      },
      {
        slug: "key-addresses",
        q: "What are key addresses?",
        a: "Important URLs of a project — the home page, /api/health, a login page — that the monitoring on your server checks itself, with no per-check limit. Kinds are page, text, JSON, redirect and 'port on the server'. Pages behind a password are supported with headers, which are kept in a file only the monitoring reads. The 30-day Diagnostics strip is built from these checks. Documentation: https://vpsfocus.xyz/docs#checks.",
      },
      {
        slug: "port-dns-checks",
        q: "Can it check ports and DNS?",
        a: "From outside (paid): a port on your domain accepting connections — mail 25, 465, 587, 993, SSH 22 or your own service, checking only the connection — and DNS, where the domain still resolves to the addresses you pinned; DNS alarms after three failures in a row. From inside (free): a key address of the kind 'port on the server' watches whether a database, Redis or another service still holds its port and says whether it listens on this server only or accepts network connections; it needs monitoring 0.30.0 or newer. A database port is not worth checking from outside: the check passes only if the database is open to the internet. Documentation: https://vpsfocus.xyz/docs#checks.",
      },
      {
        slug: "check-from-server",
        q: "What is 'Check from the server'?",
        a: "A button under a 'not answering' check. The app asks the monitoring to open the site's key addresses from inside the server and reads the web-server log for the last 15 minutes. If the site opens from inside but not from outside, the trouble is in the network, a firewall or DNS; if it does not open from inside either, the trouble is on the server; if the app cannot reach the server at all, it is off or unreachable. It runs only from your computer and needs key addresses. Documentation: https://vpsfocus.xyz/docs#checks.",
      },
      {
        slug: "one-email-server-down",
        q: "Will I get one email per site when the whole server goes down?",
        a: "No. When several sites of one server stop answering at once you get one email listing them, so the outage email waits five minutes — one check interval — for its neighbours. Certificate, DNS and Job Guard emails go out right away. The email does not name the server, because the name is stored only in your app. Documentation: https://vpsfocus.xyz/docs#checks.",
      },
      {
        slug: "outage-explanation-hints",
        q: "How does it explain why the site was down?",
        a: "Every outage has a 'Show the server' button with what was happening in that hour: samples, web-server errors, reboots and deploys, plus a short summary such as 'the whole server was not answering' or 'there was a deploy 7 minutes before the outage'. These are coincidences in time, not a proven cause, and times count from the moment the check noticed the outage — roughly 10–15 minutes after the start. A 'Check containers' button adds whether a container started, restarted or was stopped for lack of memory. Documentation: https://vpsfocus.xyz/docs#checks. Guide: https://vpsfocus.xyz/guides/502-bad-gateway.",
      },
      {
        slug: "job-guard-how",
        q: "How do I set up Job Guard for a cron job?",
        a: "Each job gets a secret address. After each run your script sends a short request to it; you set how often the job runs and how late it may be (a period plus an allowance, not a cron expression). The app gives you a ready-made line and shows where to add it. 'The job reported an error' and 'no signal' are different messages — look at the job's log for the first, at cron for the second. A job that never sent a signal counts as missing, and anyone who knows the address can send a 'done' signal. Documentation: https://vpsfocus.xyz/docs#checks.",
      },
      {
        slug: "confirm-email",
        q: "Why do I need to confirm my email address?",
        a: "Until the address is confirmed, everything that works through vpsFocus servers — connecting sites to external checks and similar features — is unavailable, because outage messages go to this address. Installing is not affected: the installation files are public and need no account. The confirmation letter can be sent again from your account page or the account screen in the app.",
      },
    ],
  },
  {
    id: "status-pages",
    title: "Public status pages",
    items: [
      {
        slug: "status-page-what-shows",
        q: "What does a public status page show?",
        a: "A page at vpsfocus.xyz/status/<name> with the title you chose and, for every site, the name you chose, its state now ('working', 'not responding', 'maintenance until 15:00', 'not being checked'), a 90-day bar, the availability percentage and the update time. It refreshes itself every minute. It never shows the addresses and paths of your checks, port and DNS checks, your maintenance note, our menu or cookies. Documentation: https://vpsfocus.xyz/docs#status.",
      },
      {
        slug: "status-page-domain-txt",
        q: "How do I confirm that the domain is mine?",
        a: "The app shows a TXT record to add where your DNS is managed. Many panels want only the start of the name, _vpsfocus, and add the domain themselves; typing the full name gives an extra _vpsfocus.example.com.example.com. If 'Check' does not find the record, wait 5–10 minutes. If the domain is connected under Domain mail through Cloudflare, the app adds the record itself after showing exactly what it will write. Documentation: https://vpsfocus.xyz/docs#status.",
      },
      {
        slug: "status-page-keep-txt",
        q: "What if I delete the TXT record later?",
        a: "Once a week we check that the domain is still yours. If the record is gone you get an email, and 7 days later the page stops showing the sites of that domain; put the record back and they return. The deadline also appears in the app's calendar. Documentation: https://vpsfocus.xyz/docs#status.",
      },
      {
        slug: "status-page-percentage",
        q: "Is the availability percentage a guarantee?",
        a: "No. It counts only the time the site was checked, without maintenance windows. Grey on the bar means vpsFocus did not check this site, for example because the check was paused. If the page itself does not open, the problem is on our side. Documentation: https://vpsfocus.xyz/docs#status.",
      },
      {
        slug: "status-page-plan-ends",
        q: "What happens to the page if external checks stop?",
        a: "The page says 'paused' instead of disappearing and comes back when checks resume. A deleted or renamed page does not free its address right away: for 90 days it points to the new address or stays yours. Documentation: https://vpsfocus.xyz/docs#status.",
      },
      {
        slug: "status-page-indexed",
        q: "Do search engines index status pages?",
        a: "No. The page is yours, not ours, and does not belong in search results under our domain, so search engines are told not to index it. Documentation: https://vpsfocus.xyz/docs#status.",
      },
      {
        slug: "status-page-impersonation",
        q: "Can a status page pretend to be another organisation?",
        a: "No. We remove a page that pretends to be another organisation; it then says 'this status page has been removed' and the app shows why. Until it is restored it cannot be deleted, and new pages and changes are unavailable. Every page has a 'Report abuse' link. Documentation: https://vpsfocus.xyz/docs#status.",
      },
    ],
  },
  {
    id: "server-health",
    title: "Server health and errors",
    items: [
      {
        slug: "server-metrics",
        q: "Which server metrics are monitored?",
        a: "CPU, memory, disk, swap and inode usage, load average, uptime and reboots, per-container load, failed services, open ports, OS end-of-life and who can sign in. The app shows facts and trends, not guesses about what will happen. Guide: https://vpsfocus.xyz/guides/vps-checklist.",
      },
      {
        slug: "error-spikes",
        q: "What are 5xx and 404 spikes?",
        a: "It groups errors from your web-server logs and counts 5xx and 404 spikes. A 5xx spike is attributed to a project when the domain is in the log line and to the server when it is not. Groups are capped so a bot storm cannot push out real server errors. Guide: https://vpsfocus.xyz/guides/502-bad-gateway.",
      },
      {
        slug: "log-reading",
        q: "Does it read my web-server logs?",
        a: "Yes. It reads web-server logs to count errors and group them. It does not change log settings, nginx configuration or files. Query strings are cut from samples, and the app never sends raw logs to us.",
      },
      {
        slug: "container-load",
        q: "Can I see load per container?",
        a: "Yes. The server health screen shows load per container and which container or failed service is using resources. You can open the last 100 log lines for a container or a failed service; query strings are cut and a 'Copy for AI' button is available.",
      },
      {
        slug: "security-check",
        q: "What does the server security check look for?",
        a: "It checks non-root access, passwordless sudo, file permissions, exposed .env and .git files, open ports, Docker group membership, firewall, system updates, users and fail2ban. It only reads over SSH and never changes your SSH configuration. Some checks need a server with monitoring 0.30.0 or newer. Documentation: https://vpsfocus.xyz/docs#security. Guide: https://vpsfocus.xyz/guides/vps-checklist.",
      },
      {
        slug: "service-restart",
        q: "Can vpsFocus restart services?",
        a: "It can restart the components of its own monitoring stack — the database, analytics, Caddy and the agent — over SSH from the app, only when you press the button. It does not restart your site's containers or services, and there is no automatic repair or auto-restart: that was a deliberate choice. The agent itself has no Docker socket, so a compromised agent could not control the host. For a failed service the app shows its state and the last 100 log lines.",
      },
      {
        slug: "capacity-advisor",
        q: "What is the capacity advisor?",
        a: "It shows facts: how much disk analytics uses, how fast it grows and how much is free. It also forecasts roughly how long the free space will last. It does not give advice like 'you need another server', because such advice is easy to get wrong.",
      },
      {
        slug: "agent-dead",
        q: "How do I know the monitoring agent itself is alive?",
        a: "The monitoring stack has a healthcheck and restarts itself. If the whole server is down, external checks catch it. If only the agent stops, the app shows stale data with the time of the last update, and the server's healthcheck restarts the container.",
      },
      {
        slug: "disk-space",
        q: "What takes up disk space and what is safe to clean?",
        a: "The 'What takes up disk space' button shows what is big, explains what each item is and whether it is safe to clean, and forecasts how long free space will last. It also prepares a task for an AI assistant. It does not delete anything for you. Documentation: https://vpsfocus.xyz/docs#sites.",
      },
      {
        slug: "out-of-memory",
        q: "What happens when the server runs out of memory?",
        a: "When the system stops a program for lack of memory, the app shows how much swap is used, which programs held the memory and how much monitoring itself uses. The alert is a single quiet notice for the last 24 hours, not a repeated alarm. Documentation: https://vpsfocus.xyz/docs#sites.",
      },
      {
        slug: "container-logs",
        q: "Can I see logs of a container or a failed service?",
        a: "Yes. 'Show log' next to a container or a failed service shows the last 100 lines. Query strings are cut out, and 'Copy for AI' copies the log with a ready prompt. Secrets are not included. Documentation: https://vpsfocus.xyz/docs#sites.",
      },
      {
        slug: "open-ports",
        q: "Does it check which ports are open?",
        a: "Yes. The port check looks from outside at mail, SSH and your own services, and from inside the server at the database and other services. After the first installation the app checks on its own whether the server is exposed. The check is free with monitoring 0.30.0 or newer. Documentation: https://vpsfocus.xyz/docs#security. Documentation: https://vpsfocus.xyz/docs#checks.",
      },
      {
        slug: "diagnostics",
        q: "What is the 30-day diagnostics feed?",
        a: "A 30-day feed of checks made from inside the server, with a gray stretch for days before monitoring was installed. It shows whether the agent was running and what it could see, which helps tell 'the site was down' from 'monitoring was down'.",
      },
      {
        slug: "what-triggers-alerts",
        q: "What does the monitoring raise an alarm about?",
        a: "Mainly things that will not fix themselves: disk space or inodes running out (there can be free space while no new file can be created, usually because of a folder with a huge number of small files) and a certificate or domain about to expire. Outages, error spikes and failed backups are reported too. The server's root partition is counted. Containers and failed services are shown on screen but have no alerts, because that data has no history. Documentation: https://vpsfocus.xyz/docs#sites.",
      },
      {
        slug: "failed-services",
        q: "Why does the app list failed services that look harmless?",
        a: "The Server health screen asks the server over SSH which services have failed and how much memory and CPU each container uses (CPU is the current reading). Some services fail harmlessly — cloud-init, for example — and the screen says so. It is read-only and leaves no file on the server. Guide: https://vpsfocus.xyz/guides/docker-vs-systemd.",
      },
    ],
  },
  {
    id: "seo",
    title: "SEO audit and broken links",
    items: [
      {
        slug: "seo-audit",
        q: "What does the SEO audit check?",
        a: "It crawls your site and checks titles, descriptions, headings, canonical URLs, robots.txt, sitemaps, redirects, broken links, duplicate content, image alt text, Open Graph, language, viewport and more. It compares crawls over time and exports results to CSV.",
      },
      {
        slug: "seo-checks",
        q: "How many checks does the SEO audit run?",
        a: "56 checks in seven groups: access, titles, content, indexing, sitemaps, delivery and addresses. Each check has one of three outcomes, and the screen says 'passed N of M' instead of inventing a 0–100 SEO score. You can mute checks you do not care about.",
      },
      {
        slug: "broken-links",
        q: "Does it find broken internal and external links?",
        a: "Yes, both internal and external links. Each finding says where the link stands, where it leads and what response it returned. A link comes back on its own if its response changes, and you can mute a link or a whole path.",
      },
      {
        slug: "redirects-canonical",
        q: "Does it check redirects and the canonical domain?",
        a: "Yes. It checks http→https, www↔non-www, redirect chains, loops, offsite redirects, missing canonical tags, canonical pointing elsewhere and a canonical host split. These are part of the 56 SEO checks.",
      },
      {
        slug: "robots-sitemap",
        q: "Does it check robots.txt and sitemaps?",
        a: "Yes. It checks whether robots.txt is missing or blocks search engines or AI crawlers, whether the sitemap is missing, unavailable, blocked, broken, redirected, noindexed or canonicalised, and whether pages are missing from the sitemap. Guide: https://vpsfocus.xyz/guides/sitemap-robots-llms-txt.",
      },
      {
        slug: "crawl-comparison",
        q: "Can I compare crawls over time?",
        a: "Yes. Each crawl is compared with the previous one: what was fixed, what appeared and what disappeared. The app keeps the history, so you can see whether a change helped instead of only seeing the current state.",
      },
      {
        slug: "seo-export",
        q: "Can I export SEO results?",
        a: "Yes, the SEO audit exports its results to CSV. The file includes the check, the page, the outcome and the explanation, so you can sort it in a spreadsheet or hand it to a developer.",
      },
      {
        slug: "seo-autofix",
        q: "Does vpsFocus fix SEO issues automatically?",
        a: "No. vpsFocus finds and explains problems but does not edit your site, templates or nginx configuration. You or your developer decide what to change. An AI assistant connected through MCP can read the findings and suggest a fix in your code, but it cannot apply it through vpsFocus.",
      },
      {
        slug: "seo-vs-pagespeed",
        q: "What is the difference between the SEO audit and PageSpeed?",
        a: "The SEO audit looks at how search engines understand the page: titles, canonical URLs, robots.txt, sitemaps, links and content. PageSpeed and Core Web Vitals measure speed and user experience. They overlap in accessibility and some best practices, but one does not replace the other.",
      },
    ],
  },
  {
    id: "speed",
    title: "Speed and Core Web Vitals",
    items: [
      {
        slug: "site-speed",
        q: "How is site speed measured?",
        a: "Speed for real visitors comes from Google's Core Web Vitals (LCP, INP, CLS, TTFB) via PageSpeed Insights and CrUX, using your own Google key. A Lighthouse lab run adds a performance score, opportunities and page weight. You switch this feature on separately.",
      },
      {
        slug: "google-key",
        q: "Do I need my own Google API key?",
        a: "Yes, for field data. PageSpeed Insights and CrUX need a Google API key, and you add your own key, so the quota and the data belong to you. Without a key, the app can still run a local Lighthouse check.",
      },
      {
        slug: "web-vitals",
        q: "What are LCP, INP, CLS and TTFB?",
        a: "LCP measures how quickly the main content appears, INP how quickly the page reacts to input, CLS how much the layout shifts, and TTFB how long the server takes to start responding. Google uses these as its field metrics for real visitors.",
      },
      {
        slug: "lab-vs-field",
        q: "What is the difference between lab and field data?",
        a: "Lab data comes from a Lighthouse run on a controlled machine; field data comes from real visitors through CrUX and PageSpeed Insights. Lab data is reproducible and good for debugging; field data shows what people actually experience. The app labels which one you are looking at.",
      },
      {
        slug: "speed-impact",
        q: "Does monitoring slow down my site?",
        a: "The measurement itself does not slow the site: Lighthouse runs on demand, and field data comes from Google, not from a script on every page. The analytics snippet is small and served from your domain.",
      },
      {
        slug: "lighthouse",
        q: "Can I see Lighthouse scores and page weight?",
        a: "Yes. The app runs Lighthouse for a page and shows the performance score, opportunities to improve, and page weight. It also shows Core Web Vitals for real visitors when a Google key is configured.",
      },
      {
        slug: "speed-frequency",
        q: "How often is speed measured?",
        a: "Lighthouse runs when you ask for it and on a schedule, not on every page view. Field data from CrUX updates as Google publishes it, which is typically daily or slower. The screen says when the number was measured.",
      },
      {
        slug: "score-difference",
        q: "Why is my score different from PageSpeed Insights?",
        a: "Google's field data and Lighthouse measure different things: real visitors on real devices versus a controlled lab run. A page can score well in the lab and still be slow for visitors on a weak connection. The app shows both and labels the source.",
      },
    ],
  },
  {
    id: "notifications",
    title: "Notifications, reports and calendar",
    items: [
      {
        slug: "notifications",
        q: "How do notifications work?",
        a: "Your server itself sends a message by email, Telegram, Slack, Discord or a webhook address of your own when something breaks, plus a short weekly report. Because the server sends them, they arrive even when your computer is off. You can set thresholds, schedules and quiet hours, and choose which servers send.",
      },
      {
        slug: "notification-channels",
        q: "Which channels can notifications use?",
        a: "Email, Telegram, Slack, Discord and a webhook address of your own. You can set up several: the message goes to all of them. Slack and Discord need only an incoming-webhook address, email uses a mailbox your server sends through (Gmail and Resend presets are built in), and for Telegram the app asks Telegram for the chat. Every block has a 'Send a test' button. The notification language is chosen separately.",
      },
      {
        slug: "weekly-report",
        q: "What is in the weekly report?",
        a: "A short digest per server, sent by email or Telegram, with the server's name in the subject so a multi-server setup never looks broken. It lists what requires attention and what changed, and uses the server's own time zone for days and hours.",
      },
      {
        slug: "thresholds-quiet-hours",
        q: "Can I set thresholds, schedules and quiet hours?",
        a: "Yes. You can set thresholds such as disk alerts above 85%, choose schedules and quiet hours, and mute a single finding. During quiet hours only what is breaking the site right now arrives at once — a key address not answering, many server errors, a full disk, a failed database backup, a certificate or domain expiring today — together with the 'resolved' message. Everything else waits for the morning instead of being dropped. Availability emails from our servers ignore quiet hours.",
      },
      {
        slug: "maintenance-mode",
        q: "What is maintenance mode?",
        a: "A maintenance window mutes notifications for a while, so planned work on a server or a site does not report itself as an incident. It suppresses outgoing messages, not the screen; a problem that outlives the window is sent after it.",
      },
      {
        slug: "calendar-deadlines",
        q: "Which deadlines appear in the calendar?",
        a: "Domain expiry, certificate expiry, plan expiry, OS end-of-life, backup dates and your own reminders. Deadlines that the app can calculate are added automatically; you can also add manual entries. Documentation: https://vpsfocus.xyz/docs#calendar.",
      },
      {
        slug: "ics-export",
        q: "Can I export the calendar to Google, Apple or Outlook?",
        a: "Yes. The calendar exports to an .ics file that Google Calendar, Apple Calendar and Outlook can import. The file contains the deadlines and reminders you choose. Documentation: https://vpsfocus.xyz/docs#calendar.",
      },
      {
        slug: "outage-explanation",
        q: "What does vpsFocus show after an outage?",
        a: "After an outage the app shows what was happening on the server at that moment: services, disk, recent errors, the last changes and whether the server was responding. If the server was down, it says so honestly instead of showing an empty chart.",
      },
      {
        slug: "mute-finding",
        q: "Can I mute a single finding?",
        a: "Yes. Broken links, SEO checks and speed tips have a 'Don't count' button. A window shows what it will cover: one address, everything under it, one page or the whole site, and how many items that is now. Muted items disappear from scores, history, reports and emails, sit in a collapsed 'Not counted' group and can be restored; for a link, the response is remembered, so a different response counts it as broken again. The list is stored on your server and shared by the team. Documentation: https://vpsfocus.xyz/docs#ignore.",
      },
      {
        slug: "share-reports",
        q: "Can I share a report or a finding as an image?",
        a: "Yes. When a result is good, a Share button appears on Performance, SEO audit and other screens. It creates an image (1200×630 or 1080×1080) with the result you chose, ready to post. It does not include server secrets. Documentation: https://vpsfocus.xyz/docs#share.",
      },
      {
        slug: "email-setup",
        q: "How do I set up email notifications?",
        a: "On the Notification channels screen, add a mailbox the server sends through. The Gmail and Resend buttons fill in the server and port, and the steps next to them explain where to get an app password. If emails do not go out, your server's hosting provider may block mail ports — ask their support. Use 'Send a test' to check the channel on its own. Documentation: https://vpsfocus.xyz/docs#sites.",
      },
      {
        slug: "webhook-setup",
        q: "How do I connect Slack, Discord or my own webhook?",
        a: "Slack and Discord need only an 'incoming webhook' address, and the screen tells you step by step where to get it. A webhook of your own is accepted only with https:// and only on the public internet — the monitoring will not follow it to the server itself or into its internal network. Every block has a 'Send a test' button. Documentation: https://vpsfocus.xyz/docs#sites.",
      },
      {
        slug: "which-servers-notify",
        q: "Can some servers stay quiet?",
        a: "Yes. Notification settings are shared by all servers, but in the 'Which servers send notifications' block you can clear the box for any server: it keeps watching but stays quiet.",
      },
      {
        slug: "dont-count-vs-ignore",
        q: "What is the difference between 'Don't count' and 'Ignore'?",
        a: "'Ignore' in Needs attention silences a whole reason for a while ('I'll get to it later'). 'Don't count' marks one item for good ('this is intended'), has no end date, is stored by the monitoring on your server and is shared by the team. For ten seconds after pressing it you can undo it. Critical checks can be left out too, but the dialog warns you, and Google's own scores for speed, accessibility and SEO do not change. Documentation: https://vpsfocus.xyz/docs#ignore.",
      },
      {
        slug: "share-button-conditions",
        q: "When does the Share button appear?",
        a: "When there is something to be proud of: a mobile speed score of 90 or more, or up 15 points or more ending at 50 or above; all SEO checks passed or five or more fixed since the last check; no broken links with at least 20 pages crawled; or seven days in a row without downtime. If some findings of that section are not counted, there is no button. You choose the size, light or dark colours and whether to show the domain; the picture is drawn on your computer and sent nowhere until you post it. Documentation: https://vpsfocus.xyz/docs#share.",
      },
      {
        slug: "calendar-reminders",
        q: "Can I add my own reminders to the calendar?",
        a: "Yes: paying the hosting provider, subscriptions, your own tasks. A reminder can repeat monthly or yearly and warns you a chosen number of days ahead. Colour shows state — red is overdue or less than a week left, amber is time to prepare, grey is upcoming. You can mark an event done, snooze it for 1, 3 or 7 days or hide an automatic one, and 'Check now' asks the monitoring to recheck domains. There are no pop-up notifications: the calendar icon shows a dot when something needs attention. Reminders about a server live on that server, so the team sees them. Documentation: https://vpsfocus.xyz/docs#calendar.",
      },
    ],
  },
  {
    id: "ai-agents",
    title: "AI crawlers, MCP and AI assistants",
    items: [
      {
        slug: "ai-crawlers",
        q: "Can I see how AI robots treat my site?",
        a: "Yes. The Agents and AI screen shows how much of your traffic comes from robots, whether AI crawlers follow your robots.txt and whether they are refused — for example, ChatGPT gets a 403, cannot read the site and will not cite it. It also notices when a bot that visited daily disappears. Documentation: https://vpsfocus.xyz/docs#agents. Guide: https://vpsfocus.xyz/guides/ai-bots.",
      },
      {
        slug: "ai-crawlers-list",
        q: "Which AI crawlers does it detect?",
        a: "Search and answer crawlers such as GPTBot, OAI-SearchBot, PerplexityBot, ClaudeBot and Google-Extended, plus ordinary search robots. The app groups them and shows allowed, blocked and refused visits. vpsFocus never blocks anything itself. Guide: https://vpsfocus.xyz/guides/ai-bots.",
      },
      {
        slug: "does-it-block-ai",
        q: "Does vpsFocus block AI bots?",
        a: "No. vpsFocus only observes. It shows whether a crawler was allowed or refused, and where such rules usually live — a security plugin, an old nginx rule or Cloudflare — but it does not change them. You decide what to do.",
      },
      {
        slug: "ai-discovery",
        q: "Does vpsFocus help my site get found by AI?",
        a: "It makes the problem visible. The screen shows whether search-and-answer crawlers can actually read your site or are being refused with 403, 429 or 444 — roughly a third of sites block GPTBot, often by accident. vpsFocus flags the refusal and suggests where such rules usually live.",
      },
      {
        slug: "what-is-mcp",
        q: "What is the MCP integration?",
        a: "A local MCP server built into the app. It lets an AI assistant read your vpsFocus data — sites, SEO findings, performance, uptime, errors, health, deadlines and backups — through a standard protocol. It is off by default and only works while the app is open. Documentation: https://vpsfocus.xyz/docs#mcp.",
      },
      {
        slug: "mcp-assistants",
        q: "Which AI assistants can connect?",
        a: "Codex, Cursor, VS Code and Claude Code. The MCP screen gives a ready configuration for each and a short instruction. Any assistant that can call an HTTP MCP endpoint with a bearer token can use it; these four have ready-made presets. Documentation: https://vpsfocus.xyz/docs#mcp.",
      },
      {
        slug: "mcp-read-only",
        q: "Is MCP read-only?",
        a: "Yes. Every tool is read-only: it returns what the screens already show. There is no tool that runs a scan, changes a setting, writes a file or presses a button. This matches the product rule: vpsFocus reads, but does not change.",
      },
      {
        slug: "mcp-data-access",
        q: "What data can an AI assistant read?",
        a: "Sites and servers, SEO findings and broken links, performance, uptime and outages, error logs, server health, the change feed, deadlines, backups, analytics and robots — each with its own permission. Analytics is off by default because it is data about people.",
      },
      {
        slug: "mcp-local-security",
        q: "Is the MCP server local and how is it secured?",
        a: "The server listens only on 127.0.0.1, requires a 32-byte bearer key stored in the OS keychain, rejects requests with an Origin header, and checks the Host header. It stops when the app closes. Any program on your computer could reach the port, which is why the key exists.",
      },
      {
        slug: "mcp-history-revoke",
        q: "Can I see and revoke AI access?",
        a: "Yes. The MCP screen keeps the last 500 requests — time, assistant name, tool, server or site, and result — but not the content of the answers. You can clear the history, turn the server off, or issue a new key, which disconnects every assistant at once.",
      },
      {
        slug: "how-ai-agents-read",
        q: "How can AI agents read this FAQ?",
        a: "This hub is built for machines as much as for people: /llms.txt is a short index, /llms-full.txt contains every question and answer as one markdown file, /faq.json is structured data, and every question has its own page under /q/<slug>. The home page also carries FAQPage structured data. Website: https://vpsfocus.xyz.",
      },
      {
        slug: "ai-search-blocked",
        q: "Does the SEO audit check AI crawler access?",
        a: "Yes. The SEO audit checks whether robots.txt blocks AI search or AI training crawlers. It reports the rule and explains the trade-off: blocking training is a choice, but blocking search-and-answer crawlers can keep your site out of AI answers. vpsFocus does not change robots.txt. Guide: https://vpsfocus.xyz/guides/sitemap-robots-llms-txt. Guide: https://vpsfocus.xyz/guides/ai-bots.",
      },
      {
        slug: "copy-for-ai",
        q: "What is 'Copy for AI'?",
        a: "Several screens have a 'Copy for AI' button: logs, disk space, compliance tasks and findings. It copies a ready prompt with the problem and context, without passwords, keys, visitor addresses or query strings. You paste it into your assistant yourself.",
      },
      {
        slug: "bots-ai-screen",
        q: "What does the Bots & AI screen show?",
        a: "Who really visits the site, counted from the web server's logs: search engines, AI search bots, bots a person sends by asking an AI about a page, and bots that gather text to train models. Analytics counts only people with a browser, so it does not see them. The top answers whether the site is visible to AI: 'AI bots are coming', 'none yet', 'blocked in robots.txt' or 'unknown'. Only counters are stored — which bot, which site, how many times a day — never log lines, User-agent strings or visitor addresses. Documentation: https://vpsfocus.xyz/docs#agents.",
      },
      {
        slug: "bot-called-itself",
        q: "Does it verify that a bot is really who it says it is?",
        a: "No. A bot 'called itself' GPTBot; its authenticity is not checked. If the log format does not record the User-agent, the screen says 'unknown' and not 'did not come'. A visit is also not a promise that the site will appear in AI answers, and sites behind Cloudflare do not see every bot because Cloudflare stops some.",
      },
      {
        slug: "bot-stopped-visiting",
        q: "Can it tell me that a bot stopped visiting?",
        a: "Yes. A Cloudflare refusal never reaches the server's logs, so the screen also reports a regular visitor that stopped coming — it came on 5 of 7 days and not once in the last 3. This needs logs kept for at least 10 days. There are no separate notifications about it, only the screen and a line in the weekly report. Documentation: https://vpsfocus.xyz/docs#agents.",
      },
      {
        slug: "bot-load",
        q: "How much load do robots put on my server?",
        a: "The screen shows the robots' share of requests and traffic over the chosen period by kind, for example 'robots — 62% of requests and 80% of traffic'. This is the load on the server itself: what Cloudflare served from its cache is not included, and if the log format does not record response size the traffic share is 'unknown'. Documentation: https://vpsfocus.xyz/docs#agents.",
      },
      {
        slug: "bots-ignore-robots-txt",
        q: "Can I see which robots ignore my robots.txt?",
        a: "Yes. The monitoring compares addresses requested by search engines and training robots with the robots.txt rules read by the latest SEO check, for example 'GPTBot visits closed sections: 340 requests, for example /admin/'. Robots launched by a person's question to an AI are not listed, because their companies do not oblige them to follow robots.txt. Nothing is blocked for you; there is a task for your AI assistant to close a robot with a Cloudflare or web-server rule. Documentation: https://vpsfocus.xyz/docs#agents. Guide: https://vpsfocus.xyz/guides/ai-bots.",
      },
      {
        slug: "cloudflare-ai-block",
        q: "Can it tell me whether Cloudflare blocks AI bots?",
        a: "Yes, when the domain is connected under Domain mail: the screen reads Cloudflare's 'Block AI bots' setting, read-only. Keys created earlier lack the Bot Management Read right, so the screen suggests replacing the key; mail keeps working with the old one. Documentation: https://vpsfocus.xyz/docs#agents. Guide: https://vpsfocus.xyz/guides/cloudflare-in-front-of-vps.",
      },
      {
        slug: "mcp-setup",
        q: "How do I connect my AI assistant?",
        a: "Open 'MCP' in the All servers menu (under Settings) and turn on 'Allow AI to read vpsFocus data'. In 'Connect', pick your assistant and press 'Copy'; the text under it says where to paste — ~/.codex/config.toml for Codex, ~/.cursor/mcp.json for Cursor, the user mcp.json for VS Code (command 'MCP: Open User Configuration') and a terminal command for Claude Code. Restart the assistant and ask about your site. The setup contains a key, so do not put it into a project file where it may end up in git. Documentation: https://vpsfocus.xyz/docs#mcp.",
      },
      {
        slug: "mcp-never-gets",
        q: "What does the AI assistant never get?",
        a: "Passwords, keys and tokens, notification channel addresses, visitor IP addresses and query strings from the logs. You choose the kinds of data and the servers; a server you untick does not exist for the assistant, and visitor analytics is off until you turn it on. Nothing goes through vpsFocus servers: data goes from your server to the app and on to the assistant you connected. Documentation: https://vpsfocus.xyz/docs#mcp.",
      },
      {
        slug: "mcp-untrusted-text",
        q: "Can text from my site mislead the assistant?",
        a: "It can in principle: the assistant sees text from your site — page titles, paths, log lines — and strangers write some of it. Treat its advice like any outside advice and look at what it suggests changing in your code. MCP itself is read-only and cannot change anything. Documentation: https://vpsfocus.xyz/docs#mcp.",
      },
    ],
  },
  {
    id: "domain-mail",
    title: "Domain mail and Cloudflare",
    items: [
      {
        slug: "cloudflare-email-routing",
        q: "What does the Domain mail section do?",
        a: "It turns on Cloudflare Email Routing for a domain and lets you add addresses such as support@ that forward to an inbox you already use. It is free and needs no vpsFocus account: the app talks to Cloudflare directly with a key that stays on your computer, and mail goes from Cloudflare straight to your inbox, bypassing vpsFocus servers. It forwards mail; it does not host mailboxes. Documentation: https://vpsfocus.xyz/docs#mail.",
      },
      {
        slug: "cloudflare-domain-requirement",
        q: "What must a domain have for mail to work?",
        a: "It must already be connected to Cloudflare with Cloudflare serving its DNS in full — a partial (CNAME-only) setup cannot host Email Routing. If it is not there yet, the app has 'Add a domain to Cloudflare' and tells you which name servers to enter at your registrar; the domain becomes active within half an hour to a day. Documentation: https://vpsfocus.xyz/docs#mail.",
      },
      {
        slug: "cloudflare-key",
        q: "How is the Cloudflare key created and stored?",
        a: "'Create a key in Cloudflare' opens Cloudflare's own token page with everything filled in; you press 'Continue to summary', 'Create Token', copy the key and paste it into the app. It is stored only in your computer's secure storage and never sent to vpsFocus servers. If one Cloudflare account holds domains of different owners, the key sees the forwarding addresses of every domain in it. If you lose the computer, revoke the key in the Cloudflare dashboard (My Profile → API Tokens); support will never ask you for it. Documentation: https://vpsfocus.xyz/docs#mail.",
      },
      {
        slug: "mail-three-states",
        q: "What happens when I turn mail on for a domain?",
        a: "The app first reads the domain's DNS and answers with one of three things: it can turn mail on and shows what Cloudflare will add; the records need fixing first — typically when the site already sends mail, where it adds Cloudflare to SPF without breaking it and deletes an old MX record; or the domain points to another mail server such as Google Workspace or Microsoft 365, in which case it changes nothing, because routing would take mail away from those inboxes. Documentation: https://vpsfocus.xyz/docs#mail.",
      },
      {
        slug: "mail-verify-delivery",
        q: "How do I know that mail arrives?",
        a: "A new forwarding address stays 'waiting for confirmation' until the destination inbox clicks Cloudflare's link. The 'Write a test email' button opens your mail app with a message to the new address — preferably send it from another mailbox. The app cannot see your mailbox, so 'Works' means Cloudflare accepted the setup; delivery shows only in the mailbox. Documentation: https://vpsfocus.xyz/docs#mail.",
      },
      {
        slug: "mail-switch-provider",
        q: "Can I move mail to another service later?",
        a: "The app does not manage that move, because Email Routing forwards mail rather than hosting it. By hand: in Cloudflare under Email → Email Routing → Settings unlock or disable the records it added, remove the leftovers, point MX at the new provider and replace Cloudflare's include in SPF. Mail belongs to the domain, so removing a site or server from the app does not touch it. Documentation: https://vpsfocus.xyz/docs#mail.",
      },
    ],
  },
  {
    id: "pricing",
    title: "Plans and pricing",
    items: [
      {
        slug: "what-costs-money",
        q: "What exactly costs money?",
        a: "Nothing today. The free plan needs no registration and includes everything that runs on your server and in the desktop app, with no limits on servers or sites. Only features that need our own servers — external uptime, certificate, DNS and port checks, Job Guard, public status pages and the compliance scan — are planned as a paid plan, which is still in development. Pricing: https://vpsfocus.xyz/pricing.",
      },
      {
        slug: "what-plans",
        q: "What plans are there?",
        a: "A free plan, available without registration, and a paid plan that is still in development. The free plan has no time limit and no card, and it covers everything that runs on your server and in the desktop app. Details are on the pricing page. Pricing: https://vpsfocus.xyz/pricing.",
      },
      {
        slug: "core-vs-remote",
        q: "What is included in the free plan?",
        a: "All local analytics, server monitoring, SEO audit, broken links, speed, notifications, weekly reports, backups, the calendar, the Bots & AI screen, the security check, the compliance checklist, domain mail through Cloudflare and the MCP integration for AI assistants. Features that need our servers — external checks, Job Guard, status pages and the compliance scan — are reserved for the paid plan. Pricing: https://vpsfocus.xyz/pricing.",
      },
      {
        slug: "limits",
        q: "Are servers, sites and projects limited?",
        a: "No. Servers, sites and projects are unlimited, and the desktop app works the same for everyone.",
      },
      {
        slug: "how-to-pay",
        q: "Can I buy a paid plan now?",
        a: "Not yet. The paid plan is still in development, and nothing in the free plan requires payment. Everything that runs on your server and in the desktop app is available for free.",
      },
    ],
  },
  {
    id: "agencies",
    title: "Teams and agencies",
    items: [
      {
        slug: "multiple-sites",
        q: "Can I monitor several sites and servers?",
        a: "Yes — one site or thirty. All servers, sites and items that need attention are shown in one window, each server with its own icon and status colour, and the what-needs-attention list tells you where to start the day. There are no limits on servers or sites.",
      },
      {
        slug: "team-access",
        q: "Can my team share access?",
        a: "Yes. One server can be worked on by a team from several computers. Each colleague connects with their own SSH access; the app does not share passwords or copy private keys between machines. Documentation: https://vpsfocus.xyz/docs#team.",
      },
      {
        slug: "team-permissions",
        q: "Can teammates have different permissions?",
        a: "Not yet. There are no roles or per-feature permissions: a colleague with SSH access to the server can see what that access allows. You can keep client servers separate and limit which servers an AI assistant can read through MCP.",
      },
      {
        slug: "invite-colleague",
        q: "How do I invite a colleague to a server?",
        a: "Use 'Invite a colleague' in the server window. The invite code contains the server address, port, name and key fingerprint — no passwords or credentials. Your colleague pastes it into 'Add server' and connects with their own SSH access. If the fingerprint does not match, the app refuses to connect. Documentation: https://vpsfocus.xyz/docs#team.",
      },
      {
        slug: "client-separation",
        q: "Can I keep client servers separate?",
        a: "Keep each client's servers as separate entries, and use MCP permissions to limit which servers an AI assistant can read. Separate client accounts and role-based access are not available yet; for now, separation follows SSH access and the servers you add.",
      },
      {
        slug: "shared-vs-personal",
        q: "What is shared between teammates and what stays personal?",
        a: "Shared on the server: the project list, key addresses, notification settings (mail, Telegram, Slack, Discord and webhook addresses, maintenance mode), the monitoring's passwords, calendar reminders about the server and its sites, 'done' marks and 'Not counted' marks. Personal on each computer: your activity log, site database connections on the Data tab, the Cloudflare key for domain mail, the note of your last backup, general calendar reminders, 'snooze' and 'hide' marks, and the MCP settings with their key and history. For shared lists, the last save wins; the project list and notification settings are applied on top of what is on the server at the moment you save. Documentation: https://vpsfocus.xyz/docs#team.",
      },
      {
        slug: "team-app-version",
        q: "Does everyone on the team need the same app version?",
        a: "Yes. An older copy cannot read the project list and settings from the server and overwrites them with its own stale ones. The app notices the trace an older copy leaves and warns about it on the main screen. Documentation: https://vpsfocus.xyz/docs#team.",
      },
      {
        slug: "team-account",
        q: "Does my team need a vpsFocus account?",
        a: "Only if you use external availability checks, the one feature that needs an account at all — then one account per team is the intended setup. Installing, analytics, sites and domain mail work without an account for any number of people.",
      },
      {
        slug: "someone-leaves-team",
        q: "What should I do when someone leaves the team?",
        a: "Revoking their SSH access stops them connecting. But part of the monitoring's settings is shared across the whole team: the outgoing mail password, the Telegram bot token, the Slack, Discord and webhook addresses, the Google key and the backup storage keys. So also change the account password and sign it out everywhere if they had their own sign-in, change those secrets and create the Slack and Discord addresses anew; an ordinary settings save on any server spreads the new values to the rest. Documentation: https://vpsfocus.xyz/docs#team.",
      },
      {
        slug: "invite-code-safe",
        q: "Is an invite code safe to send?",
        a: "The code is not access to the server. It holds only the address, the SSH port, the server's name and its key fingerprint — no passwords, keys or tokens — and it never passes through vpsFocus. The app checks the server's key against it and refuses to connect if they differ; before signing in it shows in large type which address you are connecting to, because a code from a stranger can lead to someone else's server. One code is for one server. Documentation: https://vpsfocus.xyz/docs#team.",
      },
    ],
  },
  {
    id: "backup",
    title: "Backup, export and migration",
    items: [
      {
        slug: "backup-how",
        q: "How do I back up my data?",
        a: "'Download a backup' on the Backups screen saves the analytics database and the monitoring settings as an archive on your computer — it contains passwords, so keep it safe. The agent can also make automatic daily copies to an S3-compatible storage you own, and the project card shows the date of the last backup. Before every update the app additionally takes a database dump and a copy of the configs and restores them if something goes wrong. Documentation: https://vpsfocus.xyz/docs#life.",
      },
      {
        slug: "backup-storage",
        q: "Where are backups stored?",
        a: "Automatic backups go to an S3-compatible bucket that you own and pay for, not to our servers. A copy on the same VPS is not a real backup, and a copy with us would break the promise that your analytics stay on your server.",
      },
      {
        slug: "backup-encryption",
        q: "Are backups encrypted?",
        a: "vpsFocus does not encrypt backups. The automatic copy the agent sends to your S3 bucket leaves secrets out: .env files and credentials are not included. The archive you download by hand does contain passwords, so store it carefully. If you need encryption at rest, enable it on your S3 bucket — a second key that can be lost forever would be a new risk, so the app does not add one.",
      },
      {
        slug: "restore-another-vps",
        q: "Can I restore everything on another VPS?",
        a: "Yes. The app can restore a backup on another VPS and bring the project back; external checks can be moved to the new server where the app offers it. This path is newer than the rest, so test it on a spare server first. The new stack must accept the dump, and a very old backup across many versions is the hardest case. 'Not counted' marks are not in the backup, so set them again. Documentation: https://vpsfocus.xyz/docs#team.",
      },
      {
        slug: "export-config",
        q: "Can I export the project configuration?",
        a: "Yes. Project and check configuration can be exported, so you can recreate a project on another server or keep a copy outside the app. The export contains settings, not your analytics database.",
      },
      {
        slug: "switching-tools",
        q: "I already use another monitoring tool. Can I switch?",
        a: "Yes. Monitors from UptimeRobot or HetrixTools can be imported via CSV, and when you connect a VPS the app can discover the sites already running on it.",
      },
      {
        slug: "discover-sites",
        q: "Can it discover sites already running on my VPS?",
        a: "Yes. The app reads server_name from your web-server configuration and offers the domains it finds. It does not change the configuration or install anything. Only the sites you confirm are added, and discovered domains are not sent to us. Documentation: https://vpsfocus.xyz/docs#sites.",
      },
      {
        slug: "smaller-backup-warning",
        q: "Why did I get a warning that a backup is smaller?",
        a: "If an automatic database copy holds less than half of the previous one, the monitoring warns you and the Backups screen shows 'then → now'. It is not an error: the database may have shrunk after old statistics were cleaned up. If you deleted nothing, make sure no data is missing. Documentation: https://vpsfocus.xyz/docs#life.",
      },
      {
        slug: "clone-vs-move",
        q: "Is cloning a VPS at my provider the same as moving to a new one?",
        a: "No. A disk snapshot carries over the marker the app uses to recognise a server. If two servers carry the same marker, the app spots it from the SSH host key fingerprint and asks whether this is the same server reinstalled or a separate copy. The one case it cannot catch is a cloud image that does not generate a fresh SSH key when cloned. Documentation: https://vpsfocus.xyz/docs#team.",
      },
    ],
  },
  {
    id: "compliance",
    title: "Website compliance",
    items: [
      {
        slug: "what-is-compliance",
        q: "What is the website compliance check?",
        a: "Two parts. The compliance checklist ('Site requirements' in the app) is free and needs no account: it lists what laws and common sense expect from a site — cookies and trackers before consent, legal notice and privacy policy, accessibility, site and server security — and for every item explains why it matters, how to check it yourself and what to give an AI assistant. The compliance scan runs from our server and belongs to the paid plan that is still in development: on request it opens your public site like a visitor, with a browser that clicks nothing in the consent banner, and reports what it found. Documentation: https://vpsfocus.xyz/docs#compliance.",
      },
      {
        slug: "compliance-regulations",
        q: "Which regulations does it cover?",
        a: "Items carry country tags — EU, Germany, Austria, the UK, Switzerland, the USA and California — and topic tags. A site profile (where you operate, whether you sell online, have forms, a newsletter, an AI chatbot, visitor posts or your own payment form) hides what does not apply. Topics include GDPR and cookie rules, Impressum, privacy policy, accessibility, shop rules (withdrawal button and terms, prices), AI chatbots and, for the US, opting out of data sale. Checklist: https://vpsfocus.xyz/compliance.",
      },
      {
        slug: "compliance-cookies",
        q: "Does it check cookies and consent banners?",
        a: "Yes. It checks cookies and localStorage, consent banners, CMP scripts, Google and YouTube embeds, and whether tracking loads before consent. It also looks at 'Do Not Sell' and Global Privacy Control where the profile requires them.",
      },
      {
        slug: "compliance-legal-pages",
        q: "Does it check legal pages such as Impressum and privacy policy?",
        a: "Yes, depending on the profile: Impressum, privacy policy, terms, cancellation and shipping pages, contact details and required links. It flags missing or unreachable pages and explains what the profile expects.",
      },
      {
        slug: "what-are-site-requirements",
        q: "What does the Site requirements screen check?",
        a: "The in-app name of the free compliance checklist. It lists what your site needs for cookies, required pages, accessibility and security, with 'done' and 'not applicable' marks that carry a comment, author and date. The marks are stored on your server in /opt/vpsfocus/compliance.json, so the team sees one progress bar. Items the app can check itself — server security, accessibility from PageSpeed, SPF and DMARC — are filled in automatically, and if a check later finds the problem again, 'found again' appears next to your tick. Checklist: https://vpsfocus.xyz/compliance.",
      },
      {
        slug: "compliance-not-lawyer",
        q: "Does it replace a lawyer?",
        a: "No. It flags problems and explains them, but it is not legal advice and does not replace a lawyer. Laws differ by country and change; use the scan to prepare questions, then confirm the answer with a professional.",
      },
      {
        slug: "compliance-scan-details",
        q: "What exactly does the paid compliance scan do?",
        a: "On request our server opens your home page and a few pages linked from it, legal pages first, with plain requests and a browser that clicks nothing in the consent banner. It finds cookies and trackers before consent, Google Fonts, embedded videos and maps, the banner and its reject button, advertising that loads despite a 'do not sell' signal (the home page is opened a second time with GPC), http content on https pages and cookies without Secure and HttpOnly. It also checks TLS, the https redirect, headers, security.txt, SPF and DMARC and links to legal pages. It never goes into the cart or checkout and does not probe service files. The site address reaches us only at the moment of the check, and the latest result is kept for 'new / fixed'. Documentation: https://vpsfocus.xyz/docs#compliance.",
      },
      {
        slug: "compliance-ai-prompt",
        q: "Can I give a compliance item to my AI assistant?",
        a: "Yes. Every checklist item has its own AI prompt, and the 'AI prompt' button at the top builds one for everything shown. If the assistant has a browser it opens the site itself and clicks nothing in the banner; if not, it asks you for what it needs. Paste it into ChatGPT, Claude, Gemini or an AI code editor. Checklist: https://vpsfocus.xyz/compliance.",
      },
      {
        slug: "compliance-site-profile",
        q: "What is a site profile?",
        a: "A short description of your site — where it operates, whether it sells online, has forms, a newsletter, an AI chatbot, visitor posts or its own payment form, and the backup folder on the server. It hides checklist items that do not apply to you.",
      },
    ],
  },
  {
    id: "comparisons",
    title: "Alternatives and comparisons",
    items: [
      {
        slug: "vs-uptime-kuma",
        q: "Why not run Uptime Kuma on the same VPS?",
        a: "A watcher on the same server sees one site failing, a 500 or an expiring certificate, but not the server shutting down, memory running out and killing the monitor itself, or the server being unreachable from the internet — it opens the site from inside and sees 200. Put the watcher elsewhere: Uptime Kuma on a second server, a hosted check service, or vpsFocus external checks. Uptime Kuma remains a good choice for many notification channels and a simple self-hosted setup. Guide: https://vpsfocus.xyz/guides/uptime-kuma-alternative.",
      },
      {
        slug: "vs-uptimerobot",
        q: "How does vpsFocus compare with UptimeRobot?",
        a: "UptimeRobot checks from its servers and is paid per number of checks, so several pages per site, certificates and domains use up the limit. With vpsFocus your own server checks pages, text, visitor errors in logs, certificates, domains, disk, database port and backups with no per-check limit; only 'is the site reachable from the internet' and 'is the server alive' need an outside check, which is what the upcoming paid plan covers. Check UptimeRobot's current plans before deciding; they change. Guide: https://vpsfocus.xyz/guides/uptimerobot-alternative.",
      },
      {
        slug: "vs-netdata",
        q: "How does vpsFocus compare with Netdata?",
        a: "Netdata answers 'what is the server doing': thousands of metrics every second, anomaly detection and hundreds of ready alerts — excellent for people who can read server charts. vpsFocus answers 'how are my sites doing': visitors, up or down, errors, certificates and domains, speed, SEO and security, in plain words. Netdata is stronger for depth and detail; vpsFocus for people with sites and no sysadmin background. Both can run on the same server. Guide: https://vpsfocus.xyz/guides/vpsfocus-vs-netdata.",
      },
      {
        slug: "netdata-alternatives",
        q: "What are other lightweight server monitoring options?",
        a: "Beszel and Glances for light server metrics, Prometheus with Grafana for custom setups, Zabbix for large environments and Netdata for deep per-second detail. vpsFocus is not a metrics platform; it watches sites and basic server health. Pick by who has to read the dashboard and how much upkeep you accept. Guide: https://vpsfocus.xyz/guides/netdata-alternatives.",
      },
      {
        slug: "vs-plausible-umami",
        q: "How does vpsFocus analytics compare with Plausible and Umami Cloud?",
        a: "All three are cookie-free, light and simple, without gender, age, interests or session recordings. Plausible and Umami Cloud are hosted: nothing to maintain, but the paid plans grow with traffic, sites or events, and free tiers have limits. vpsFocus installs Umami on your own VPS and keeps it updated: free, no event or site limit, data stays on your server, but it uses server memory (a few hundred megabytes) and the cloud is better if your site is not on a VPS. Check current prices on their sites. Guide: https://vpsfocus.xyz/guides/vpsfocus-vs-plausible.",
      },
      {
        slug: "vs-datadog-new-relic",
        q: "Is there a lightweight alternative to Datadog and New Relic for a small VPS?",
        a: "For one small VPS with a few sites, those tools are usually too heavy: the agent takes a noticeable share of memory, the bill grows with servers and log volume, and your data goes to a third-party cloud. Monitoring should not take more than 10–15% of the server's memory. vpsFocus covers what a small server needs — down from outside, disk and inodes, memory, site errors, certificates and domains, failed containers, page speed — and is not an APM. Guide: https://vpsfocus.xyz/guides/datadog-alternative.",
      },
      {
        slug: "vs-google-analytics-privacy",
        q: "Why use self-hosted analytics instead of Google Analytics?",
        a: "Google Analytics gives data about your visitors to a third party, uses cookies and needs setup effort; vpsFocus installs Umami for you, uses no cookies and keeps data on your server. You lose demographics, search phrases and ad-platform conversions — what remains is traffic, sources, pages, devices and behaviour. Whether you still need a consent banner depends on your country and what else runs on the site. Guide: https://vpsfocus.xyz/guides/self-hosted-analytics.",
      },
      {
        slug: "guides-on-main-site",
        q: "What guides does the main site publish?",
        a: "At https://vpsfocus.xyz/guides: a VPS checklist after deploying a site, AI bots on your site, self-hosted analytics instead of Google Analytics, security holes in AI-built sites, from Vercel to your own VPS, shared hosting vs VPS, several sites on one VPS, Docker vs systemd services, Caddy vs Nginx, 502 Bad Gateway, monitoring SSL certificates, Cloudflare in front of your VPS, sitemap.xml, robots.txt and llms.txt, what we install and how to verify it, and comparisons with Uptime Kuma, UptimeRobot, Netdata, Plausible and Datadog.",
      },
    ],
  },
  {
    id: "troubleshooting",
    title: "Troubleshooting and limits",
    items: [
      {
        slug: "cannot-connect",
        q: "The app cannot connect to my server",
        a: "Check the address and SSH port, the login and key, and whether your provider's firewall allows SSH. If you use an invite code, make sure the server key fingerprint matches. The app shows the SSH error in plain words and does not offer to trust a mismatched key. Documentation: https://vpsfocus.xyz/docs#problems.",
      },
      {
        slug: "docker-missing",
        q: "Docker is missing or not running",
        a: "The app installs Docker on supported distributions. If Docker is already installed but not running, start it; the installation needs a working Docker with Compose v2. On unsupported distributions, install Docker yourself first. The pre-install check tells you which case you are in. Documentation: https://vpsfocus.xyz/docs#problems. Guide: https://vpsfocus.xyz/guides/docker-vs-systemd.",
      },
      {
        slug: "firewall-port",
        q: "The firewall blocks the monitoring port",
        a: "Monitoring needs one port. The app asks before opening it in ufw or firewalld, and reminds you to open it in your provider's cloud firewall too. The local check cannot see the cloud firewall, so an external check is the final proof. Documentation: https://vpsfocus.xyz/docs#problems.",
      },
      {
        slug: "port-busy",
        q: "The monitoring port is already in use",
        a: "The app suggests another free port and remembers it. If the port changes later, the assistant configuration or bookmark that points to it must be updated; the app says so instead of silently switching.",
      },
      {
        slug: "no-systemd",
        q: "What if my server has no systemd?",
        a: "Monitoring works, but it will not start by itself after a server reboot. You can start it manually from the app. A server with systemd is the recommended setup.",
      },
      {
        slug: "agent-outdated",
        q: "The app says the agent is outdated",
        a: "New screens and checks appear only after the monitoring on the server is updated. Open the server and press 'Update monitoring'; the app shows which features need a newer agent. 'Update all' updates your servers one at a time.",
      },
      {
        slug: "stale-data-timezone",
        q: "Data looks stale or times are wrong",
        a: "The app shows the time of the last update. If times look wrong, check the server's clock and time zone; the app warns about clock skew. Days and hours in reports use the server's time zone, not your computer's.",
      },
      {
        slug: "offline-mode",
        q: "Does the app work without internet?",
        a: "The app keeps the last data it loaded and marks it with the time it was fetched. It does not collect new data while offline. If the server was not opened in the last hour or so, the app may show only the last known state. Documentation: https://vpsfocus.xyz/docs#problems.",
      },
      {
        slug: "server-reboot",
        q: "What happens after a server reboot?",
        a: "With systemd, the monitoring stack starts again automatically. Without systemd, you start it manually. External checks show the reboot as downtime if the site was unreachable, and the app shows the reboot in the server timeline.",
      },
      {
        slug: "host-key-changed",
        q: "The app says the server's key has changed",
        a: "The host key differs from the one remembered on the first connection. That happens when a server is rebuilt or reinstalled — and it is also exactly what an intercepted connection looks like, so do not continue until you know which it is. The app tells you at startup and marks the server with a red dot. If you are sure the server is yours, open it, press 'Check connection' and accept the new key. Documentation: https://vpsfocus.xyz/docs#problems.",
      },
      {
        slug: "certificate-not-issued",
        q: "The analytics certificate is not issued",
        a: "Over an A record (ports 80 and 443 free) the usual cause is a record that does not point at this server yet or has not propagated. Over DNS-01 with a provider key, check that the token may edit records in that exact zone. Over the vpsFocus fallback server, make sure the _acme-challenge CNAME points at the name the app gave you. The installation is not broken: monitoring is already running, Caddy keeps trying on its own, and Let's Encrypt limits attempts per week, so do not restart the install dozens of times. Documentation: https://vpsfocus.xyz/docs#problems. Guide: https://vpsfocus.xyz/guides/ssl-certificate-monitoring.",
      },
      {
        slug: "analytics-panel-no-answer",
        q: "The analytics panel does not answer",
        a: "After a server reboot the containers need a moment to come up. If that does not help, open the server's 'Setup & install' screen: it shows whether the monitoring is running and which version it is. Documentation: https://vpsfocus.xyz/docs#problems.",
      },
      {
        slug: "no-internet-vs-server",
        q: "'No internet connection' or 'Can't reach the server'?",
        a: "At startup the app only signs in to each server; nothing runs there. 'No internet connection' means none of the servers answered or the system reports no network — check Wi-Fi, cable or a VPN. 'Can't reach the server' means the internet works but the server does not answer — check it in your hosting panel. A grey dot next to a server means no connection to that one; the others work as usual. The calendar and settings work offline. Documentation: https://vpsfocus.xyz/docs#problems.",
      },
    ],
  },
];

export const allItems = faq.flatMap((c) => c.items.map((i) => ({ ...i, category: c.title })));

export function faqAsMarkdown() {
  return [
    "# vpsFocus FAQ",
    "",
    "> Answers about vpsFocus (https://vpsfocus.xyz): analytics and monitoring for sites on your own VPS.",
    "",
    ...faq.flatMap((c) => [
      `## ${c.title}`,
      "",
      ...c.items.flatMap((i) => [`### ${i.q}`, "", i.a, ""]),
    ]),
  ].join("\n");
}
