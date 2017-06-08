
//FAQ js
$(document).ready(function() {
    // FAQs
    $(".faqs__faq").attr("data-collapsed", "true").find(".faqs__answer").hide();

    $(".faqs").on("click", "[data-collapsed='true'] .faqs__question", function () {
        $(this).parent().attr("data-collapsed", "false").find(".faqs__answer").slideDown();
    });

    $(".faqs").on("click", "[data-collapsed='false'] .faqs__question", function () {
        $(this).parent().attr("data-collapsed", "true").find(".faqs__answer").slideUp();
    });

});
