YUI.add("toggle-password-mask",function(a){var b,c=a.one("#password");b=function(a){a.target.get("checked")?c.set("type","text"):c.set("type","password")},a.one("#unmask-password-container").setStyle("display","block"),a.on("change",b,"#unmask-password")});