chrome.storage.local.get('toggle', function(result){
    if(result.toggle == "Off"){

        $("#toggle-ext").switchButton({
            checked: false
        });

    } else {

        $("#toggle-ext").switchButton({
            checked: true
        });

    lowercase = /no/g;
    uppercase = /No/g;
    caps = /no/gi;

    walk(document.body);
    setTimeout(function() {
        walk(document.body);
    }, 1000);

    function walk(node) {
        // Source: https://stackoverflow.com/questions/5904914/javascript-regex-to-replace-text-not-in-html-attributes/5904945#5904945
        var child, next;
        switch (node.nodeType) {
            case 1: // Element
            case 9: // Document
            case 11: // Document fragment
                child = node.firstChild;
                while (child) {
                    next = child.nextSibling;
                    if (child.tagName != 'SCRIPT' && child.tagName != 'STYLE') walk(child);
                    child = next;
                }
                break;

            case 3: // Text node
                handleText(node);
                break;
        }
    }

    function handleText(textNode) {
        var v = textNode.nodeValue;

        v = v.replace(lowercase, 'yesn\'t')
            .replace(uppercase, 'Yesn\'t')
            .replace(caps, 'YESN\'T');

        textNode.nodeValue = v;
    }
}

})


