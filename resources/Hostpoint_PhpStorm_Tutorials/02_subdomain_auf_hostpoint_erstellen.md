# Teil 2: Eine Subdomain auf Hostpoint erstellen

**Ziel:** Im Hostpoint Control Panel eine neue Subdomain (hier `im3.codeanddesign.ch`) als Website anlegen.

**Voraussetzung:** Ein Hostpoint-Webhosting mit einer eigenen Domain (hier `codeanddesign.ch` auf dem Hosting `kapiwebo`).

---

## 1. Control Panel öffnen

Unter [admin.hostpoint.ch](https://admin.hostpoint.ch) anmelden und unter **Services** das Webhosting anklicken (hier `kapiwebo`, *Standard Webhosting*).

![Services im Hostpoint Control Panel](images/01_services.jpg)

Es öffnet sich die **Server-Übersicht** mit Speicherplatz, Domains und Datenbanken. Links ist das Menü (E-Mail, Websites, Datenbanken, Explorer, Advanced, …).

![Server-Übersicht des Webhostings](images/02_server_uebersicht.jpg)

## 2. Kurzer Blick auf Domains und Ordner

Unter **Domains** findet ihr eure eigene(n) Domain(s).
Die Domain `abcdwxyz.myhostpoint.ch` wird euch von Hostpoint zur Verfügung gestellt. Eine eigene Domain, wie hier `codeanddesign.ch` könnt ihr zusätzlich kaufen (ca. CHF 12.- pro Jahr). Eine Subdomain muss man **nicht** kaufen, sie gehört automatisch zur Domain.

![Domain-Übersicht](images/03_domains.jpg)

Im **Explorer** sieht man den Ordner `~/www` mit einem Unterordner pro Website, genau wie in Teil 1 erklärt.

![Explorer: Ordner ~/www](images/04_explorer_www.jpg)

## 3. Neue Website erstellen

1. Links **Websites** anklicken und **Website erstellen** wählen.

![Formular »Website erstellen«](images/05_website_erstellen.jpg)

2. Bei **① Eine Domain auswählen oder eintippen** den gewünschten Subdomain-Namen eintippen, z. B. `im3.codeanddesign.ch`. Unter *Verfügbare Subdomains* erscheint der Vorschlag, diesen anklicken.

![Subdomain im3.codeanddesign.ch eintippen und auswählen](images/06_subdomain_eintippen.jpg)

3. Bei **② In welchem Verzeichnis werden die Daten gespeichert?** wird automatisch `/home/kapiwebo/www/im3.codeanddesign.ch` vorgeschlagen. Diesen Vorschlag übernehmen.

![Verzeichnis für die neue Website](images/07_verzeichnis.jpg)

4. Auf **Website erstellen** klicken und kurz warten.

## 4. Bestätigung

Hostpoint meldet, dass die Website erstellt wurde, und aktiviert automatisch ein **kostenloses SSL-Zertifikat (FreeSSL)**. Die Seite ist damit später per `https://` erreichbar. Das kostenpflichtige Zertifikat-Angebot daneben braucht man nicht.

![Neue Website erstellt, FreeSSL aktiviert](images/08_website_erstellt.jpg)

Im **Explorer** unter `~/www` gibt es jetzt den neuen, noch leeren Ordner `im3.codeanddesign.ch`.

![Neuer Ordner im3.codeanddesign.ch im Explorer](images/09_neuer_ordner.jpg)

## 5. Testen: Fehlermeldungen sind hier normal

Ruft man `im3.codeanddesign.ch` direkt danach auf, erscheint zuerst ein **Konfigurationsfehler**: Die neue Subdomain ist noch nicht überall bekannt. Ein paar Minuten warten.

![Konfigurationsfehler direkt nach dem Erstellen](images/10_konfigurationsfehler.jpg)

Etwas später kommt **Forbidden**. Das ist ein gutes Zeichen: Die Subdomain funktioniert, der Ordner ist aber noch leer (es gibt noch keine `index.html`).

![Forbidden: Subdomain erreichbar, Ordner noch leer](images/11_forbidden.jpg)

---

## Checkliste

- [ ] Website für die Subdomain im Control Panel unter *Websites* erstellt
- [ ] Verzeichnis `www/<subdomain>` vorhanden
- [ ] FreeSSL aktiviert
- [ ] Aufruf im Browser zeigt *Forbidden* (= bereit für Dateien)

➡️ Weiter mit **Teil 3: Einen FTP-Account für die Subdomain erstellen**
