$(document).ready(function(){
    $("#toggle-ext").switchButton();
    $('body').on('click', 'a', function(){
        chrome.tabs.create({url: $(this).attr('href')});
        return false;
      });
})

function toggleExtension(action) {
    chrome.storage.local.set({
        toggle: action
    });
}

$(document).on("change", "#toggle-ext", function(){
    if(this.checked) {
        toggleExtension("On");
    } else {
        toggleExtension("Off");
    }
})

