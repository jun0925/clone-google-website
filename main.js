const searchInput = document.querySelector("#search-input");

searchInput.addEventListener("keydown", function(){
    if(event.code === "Enter"){
        search();
    }
});

function search() {
    const input = searchInput.value;

    window.location.href= "https://www.google.com/search?q="+input+"&sxsrf=APq-WBt6eE1yrVbLeGrz3JktkS_XMIM6QA%3A1644729131204&source=hp&ei=K5MIYsfFCYS1mAWFp4WoBQ&iflsig=AHkkrS4AAAAAYgihO-fxwpAJTl0A6UgBlqQFAKFly_T0&ved=0ahUKEwiHh_W89fv1AhWEGqYKHYVTAVUQ4dUDCAk&uact=5&oq="+input+"&gs_lcp=Cgdnd3Mtd2l6EAMyBQguEIAEMgsILhCABBCxAxDUAjILCAAQgAQQsQMQgwEyCAgAEIAEELEDMggIABCABBCxAzIFCAAQgAQyCwguEIAEELEDEIMBMgUIABCABDIICC4QgAQQ1AIyBQgAEIAEOgcIIxDqAhAnOgsILhCABBDHARDRAzoOCC4QgAQQsQMQxwEQ0QM6DgguEIAEELEDEMcBEKMCOgQIIxAnOg4ILhCABBCxAxCDARDUAjoRCC4QgAQQsQMQgwEQxwEQ0QNQmK4KWIy1CmCVtgpoAXAAeACAAaMBiAHCBJIBAzAuNJgBAKABAbABCg&sclient=gws-wiz"
}