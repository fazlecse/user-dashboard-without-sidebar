// Preloader area
const preloader = document.getElementById("preloader");
const preloaderFunction = () => {
    preloader.style.display = "none";
};

// toggleSideMenu start
const toggleSideMenu = () => {
    document.body.classList.toggle("toggle-sidebar");
};
// toggleSideMenu end

// input file preview & reset start
if (document.querySelector('.account-settings-profile-section')) {
    const originalImageSrc = document.getElementById('profile-img').src;
    function previewImage() {
        const fileInput = document.getElementById('formFile');
        if (fileInput.files && fileInput.files[0]) {
            document.getElementById('profile-img').src = URL.createObjectURL(fileInput.files[0]);
        }
    }

    function resetPreviewImage() {
        document.getElementById('profile-img').src = originalImageSrc;
    }
}

// input file preview & reset end

// Tooltip
const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl));

// cmn select2 start
$(document).ready(function () {
    $('.cmn-select2').select2();
});
// cmn select2 end

// cmn-select2-modal
$(".modal-select").select2({
    dropdownParent: $("#formModal"),
});

// cmn-select2 with image start
$(document).ready(function () {
    $('.cmn-select2-image').select2({
        templateResult: formatState,
        templateSelection: formatState
    });
});

// select2 function
function formatState(state) {
    if (!state.id) {
        return state.text;
    }
    var baseUrl = "assets/img/mini-flag";
    var $state = $(
        '<span><img src="' + baseUrl + '/' + state.element.value.toLowerCase() + '.svg" class="img-flag" /> ' + state.text + '</span>'
    );
    return $state;
};
// cmn-select2 with image start





$(document).ready(function () {
    // owl carousel dashboard card
    $('.card-carousel').owlCarousel({
        loop: false,
        // autoplay: true,
        margin: -20,
        nav: false,
        dots: false,
        // rtl:true,
        responsive: {
            0: {
                items: 1
            },
            576: {
                items: 2
            },
            768: {
                items: 3
            },
            1600: {
                items: 4
            }
        }
    });

    // Bootstrap datepicker start
    if ($('.date').length) {
        $('.date').datepicker({
            // options here
            format: 'dd/mm/yyyy',
        });
    }
    // Bootstrap datepicker end
    //Multi step progress section start

    // Nice select start
    if ($('.nice-select').length) {
        $('.nice-select').niceSelect();

    }
    // Nice select end

});

// RichTextEditor start
if ($('#div_editor1').length) {
    var editor1cfg = {}
    editor1cfg.toolbar = "basic";
    var editor1 = new RichTextEditor("#div_editor1", editor1cfg);
}
// RichTextEditor end


// Modal select to input focus start
document.addEventListener("DOMContentLoaded", function () {
    function handleInput(inputAmountBox, inputAmountBoxInner) {
        if (inputAmountBox && inputAmountBoxInner) {
            const inputField = inputAmountBoxInner.querySelector('input');

            inputField.addEventListener("focus", function () {
                inputAmountBox.classList.add("active");
            });

            inputField.addEventListener("blur", function () {
                inputAmountBox.classList.remove("active");
            });

            inputField.addEventListener("click", function () {
                inputField.setSelectionRange(inputField.value.length, inputField.value.length);
            });

            inputAmountBox.addEventListener("click", function (event) {
                if (!event.target.closest('.icon-area') && !event.target.closest('.text-area')) {
                    inputField.focus();
                    inputField.setSelectionRange(inputField.value.length, inputField.value.length);
                }
            });
        }
    }

    const inputAmountBox = document.getElementById("inputAmountBox");
    const inputAmountBoxInner = document.getElementById("inputAmountBoxInner");
    handleInput(inputAmountBox, inputAmountBoxInner);

    const inputAmountBox2 = document.getElementById("inputAmountBox2");
    const inputAmountBoxInner2 = document.getElementById("inputAmountBoxInner2");
    handleInput(inputAmountBox2, inputAmountBoxInner2);
});
// Modal select to input focus end


// Filter section start
function filterItems(inputId) {
    var input, filter, items, title, subtitle, i, txtValue;
    input = document.getElementById(inputId);
    filter = input.value.toUpperCase();
    items = document.querySelectorAll("#currency-list .item");

    items.forEach(function (item) {
        title = item.querySelector(".title");
        subtitle = item.querySelector(".sub-title");

        txtValue = title.textContent || title.innerText;
        txtValue += " " + (subtitle.textContent || subtitle.innerText);

        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            item.style.display = "";
        } else {
            item.style.display = "none";
        }
    });
}

function filterItems2(inputId) {
    var input, filter, items, title, subtitle, i, txtValue;
    input = document.getElementById(inputId);
    filter = input.value.toUpperCase();
    items = document.querySelectorAll("#currency-list2 .item");

    items.forEach(function (item) {
        title = item.querySelector(".title");
        subtitle = item.querySelector(".sub-title");

        txtValue = title.textContent || title.innerText;
        txtValue += " " + (subtitle.textContent || subtitle.innerText);

        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            item.style.display = "";
        } else {
            item.style.display = "none";
        }
    });
}
// Filter section end

// Dark theme start
const toggleBtn = document.getElementById("toggle-btn");
const body = document.querySelector("body");
toggleBtn.addEventListener("click", function () {
    document.body.classList.toggle("dark-theme");
    if (document.body.classList.contains("dark-theme")) {
        localStorage.setItem("dark-theme", 1);
    } else {
        localStorage.setItem("dark-theme", 0);
    }
    setTheme();
});

function setTheme() {
    const isDarkTheme = localStorage.getItem("dark-theme");
    if (isDarkTheme == 1) {
        document.querySelector('body').classList.add('dark-theme');
        document.getElementById("moon").style.display = "none";
        document.getElementById("sun").style.display = "block";
    } else {
        document.querySelector('body').classList.remove('dark-theme');
        document.getElementById("moon").style.display = "block";
        document.getElementById("sun").style.display = "none";
    }
}
setTheme();
// Dark theme end

