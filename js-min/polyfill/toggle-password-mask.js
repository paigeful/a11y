YUI.add("toggle-password-mask",function(a){var b,c=a.one("#show-password"),d=a.one("#password"),e=a.one("#show-password-icon"),f=a.one("#show-password-label");b=function(a){a.halt(),"password"===d.get("type")?(d.set("type","text"),e.addClass("checked"),e.removeClass("unchecked"),f.setAttribute("aria-checked","true")):(d.set("type","password"),e.addClass("unchecked"),e.removeClass("checked"),f.setAttribute("aria-checked","false"))},c&&c.setStyle("display","block"),a.on("mousedown",b,"#show-password")});