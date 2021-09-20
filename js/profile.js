//add active  class to opened tab
var btntab = $("button");
btntab.on("click", () => {
    btntab.removeClass("active");
    $(this).addClass("active");
});