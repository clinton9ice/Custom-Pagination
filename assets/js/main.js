// Prevent default behaviour
let defaultAttr = document.querySelectorAll("[data-default='false']");

for (let i = 0; i < defaultAttr.length; i++) {
    const element = defaultAttr[i];
    element.addEventListener("click", (e) => {
        e.preventDefault()
    });
}

// Set up Git users objects or your object api
let gitUsers = [{
        name: "Mojombo",
        img: "./assets/img/01.jpg"
    },
    {
        name: "Smoker",
        img: "./assets/img/blog-details-2.jpg"
    },
    {
        name: "Beard Guy",
        img: "./assets/img/comment-1.jpg"
    },
    {
        name: "Smiley Face",
        img: "./assets/img//comment-2.jpg"
    },
    {
        name: "John",
        img: "./assets/img/01.jpg"
    },
    {
        name: "Kate",
        img: "./assets/img/01.jpg"
    },
    {
        name: "Clinton",
        img: "./assets/img/01.jpg"
    },
    {
        name: "Clair",
        img: "./assets/img/01.jpg"
    },
    {
        name: "Philip",
        img: "./assets/img/01.jpg"
    },
    {
        name: "Kingsley",
        img: "./assets/img/01.jpg"
    },
    {
        name: "Cynthia",
        img: "./assets/img/01.jpg"
    },
    {
        name: "Drake",
        img: "./assets/img/01.jpg"
    },
    {
        name: "Paul",
        img: "./assets/img/01.jpg"
    },
    {
        name: "Johnny",
        img: "./assets/img/01.jpg"
    },
    {
        name: "Moses",
        img: "./assets/img/01.jpg"
    },
    {
        name: "Felicia",
        img: "./assets/img/01.jpg"
    },
    {
        name: "Ruth",
        img: "./assets/img/01.jpg"
    },
    {
        name: "IJ",
        img: "./assets/img/01.jpg"
    },
    {
        name: "Ronni",
        img: "./assets/img/01.jpg"
    },
    {
        name: "Hassel",
        img: "./assets/img/01.jpg"
    },

];

// Get the variable
let list_container = document.getElementById("list_container");
let pagination_btn = document.getElementById("pagination_btn_container");

let CURRENT_PAGE = 1;
let ROW = 5;


function setupPagination(items, wrapper, rows_per_page) {
    wrapper.innerHTML = "";

    let page_count = Math.ceil(items.length / rows_per_page);

    // Create button container
    let ul = document.createElement("ul")
    ul.classList.add("pagination-button-list");

    for (let i = 1; i < page_count + 1; i++) {
        let btn = paginationBtn(i);
        ul.append(btn)
    }
    // Append the ul to main parent
    wrapper.append(ul)

}

function paginationBtn(pageNumbers) {

    // Create the button link
    let btn_wrapper = document.createElement("li"),
        btn_link = document.createElement("a");

    btn_wrapper.classList.add("p-button");
    btn_link.classList.add("p-link");
    btn_link.setAttribute("data-default", "false");
    btn_link.innerText = pageNumbers;

    if (pageNumbers === CURRENT_PAGE) btn_wrapper.classList.add("active");

    btn_wrapper.append(btn_link);

    btn_wrapper.addEventListener("click", () => {
        CURRENT_PAGE = pageNumbers;

        display_list(gitUsers, list_container, ROW, CURRENT_PAGE)

        //    Remove active class from the btn
        let currentBtn = document.querySelector(".p-button.active");
        currentBtn.classList.remove("active");

        // Add active button
        btn_wrapper.classList.add("active");

    })
    return btn_wrapper;
}


function display_list(items, wrapper, row_per_page, page) {

    if (typeof items !== 'object') {
        alert("The first parameter is supposed to be an array of objects")
        throw new Error("The first parameter is supposed to be an array of objects")
    }

    wrapper.innerHTML = "";
    page--;

    let loop_start = row_per_page * page;
    let loop_end = loop_start + row_per_page;

    paginatedItems = items.slice(loop_start, loop_end);

    for (let i = 0; i < paginatedItems.length; i++) {
        const users = paginatedItems[i];

        // Create a list element
        let list_element = document.createElement("li");
        list_element.classList.add("pagination-item");

        // Create the list header
        let list_header = document.createElement("div");
        list_header.textContent = users.name;
        list_header.classList.add("pagination-item-header");

        // Create the list img container
        let list_img_container = document.createElement("div");
        list_img_container.classList.add("pagination-img");
        // Create the img
        let list_img = document.createElement("img");
        list_img.setAttribute("src", users.img);

        list_img_container.appendChild(list_img);

        // Append the list element
        list_element.append(list_header, list_img_container);

        // Append to the parent container
        list_container.append(list_element);
    }

    setupPagination(gitUsers, pagination_btn, row_per_page);
}

display_list(gitUsers, list_container, ROW, CURRENT_PAGE);