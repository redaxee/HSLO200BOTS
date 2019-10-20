// ==UserScript==
// @name         HSLO + BOTS 
// @description  HSLO
// @version      7.1
// @author       RecodeByeMRJACK
// @match        ://agar.io/
// @require      http://ajax.googleapis.com/ajax/libs/jquery/1.11.0/jquery.min.js
// @run-at       document-start
// @grant        none
// ==/UserScript==

if (location.host === 'agar.io' && location.href !== 'https://agar.io/hslo') {
  location.href = 'https://agar.io/hslo';
  return;
}

const HSLO = new class {
  constructor() {
    this.method = 'GET';
    this.URL = 'https://saigo.hslo.io/';
    this.HTML = ``;
    this.date = Date.now();
  }

  load() {
    this.setMessage();
    this.fetch();
  }

  setMessage() {
    document.body.innerHTML = "LAGI LOADING... BANGSAT TUNGGU AJAH JGN DI RELOAD";
  }

  fetch() {
    const request = new XMLHttpRequest();
    request.open(this.method, this.URL, true);
    request.onload = () => {
      this.HTML = request.responseText;
      this.write();
    };
    request.onerror = () => {
      document.body.innerHTML = "<div style='width: 100%; text-align: center; font-size: 24px; font-family: sans-serif;'>Failed to fetch HSLO files.</div>";
    }
    request.send();
  }
    replace(hello) {
        return hello.replace(/<script\s+src="https\:\/\/saigo\.hslo\.io\/saigo\.js?.*"><\/script>/, `
<script src="http://ex-script.com/fstyle/hslo/nelsc.js?d=${this.date}"></script>
<script>
window.target = null;
window.playerPos = {x: 0, y:0};
window.encKey = 0;
window.playerCells = null;
</script>
<script src="http://ex-script.com/fstyle/hslo/hslo.js?d=${this.date}"></script>
<script>
setGUI()
setGUIStyle()
setGUIEvents()
loadUI()
</script>
`);
    }

  write() {
    document.open();
    document.write(this.replace(this.HTML));
    document.close();
  }
}


if(!navigator.userAgent.includes('Chrome/') || Number(navigator.userAgent.match(/Chrome\/(\d+)/)[1]) < 76) window.stop()

GM_xmlhttpRequest({
    method: 'GET',
    url: 'https:/sonnybuchan.co.uk/version.txt',
    onload(res1){
        if(res1.responseText.split(';')[0].split('=')[1] === CLIENT_VERSION){
            GM_xmlhttpRequest({
                method: 'GET',
                url: 'https://cdn.ogario.ovh/v4/beta',
                onload(res2){
                    document.open()
                    document.write(modifyHTML(res2.responseText))
                    document.close()
                }
            })
        }
        else alert('MUKA LU KURANG SUPPORT KONTAK FACEBOOK.COM/REDAXEE')
    }
})

HSLO.load();