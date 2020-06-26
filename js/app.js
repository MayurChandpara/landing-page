// refrencing floating action button for going to top
const fab = document.getElementById("fab");

// Getting refrence to the navigation bar and the number of sections with class section
const navList = document.getElementById('navList');
const sectionList = document.querySelectorAll('.section');

// Setting the Nav Bar Items
for(const item of sectionList){
    let listItemWrapper = document.createElement('li');
    let listItem = document.createElement('a');
    listItem.textContent = item.firstElementChild.textContent;
    // listItem.setAttribute("href","#" + item.getAttribute('id'));
    listItem.setAttribute("id", item.getAttribute('id') + "-link");
    listItem.setAttribute('class',"nav-item");
    listItemWrapper.appendChild(listItem);
    navList.appendChild(listItemWrapper);
    // Adding event listner for nav link for smooth scroll...
    listItem.addEventListener("click",function navClick(e) {
        e.preventDefault;
        
        document.getElementById(item.getAttribute('id')).scrollIntoView({behavior: "smooth", block: "start"});
    });
}

// setting event listner for fab to scroll to top
fab.addEventListener("click", function fab(e){
    // preventing default not required but still doing
    e.preventDefault;

    document.documentElement.scrollTo({top:0, behavior:'smooth'});
})

// Adding active state to the sections and nav links

function makeSectionActive(){
    let currentPosition = document.documentElement.scrollTop;
    for(const item of sectionList){
        let sectionTop = item.offsetTop - 300;
        let sectionBottom = item.offsetHeight + sectionTop;
        const navLink = document.getElementById(item.getAttribute('id') + "-link");
        
        if( currentPosition > sectionTop && currentPosition < sectionBottom - 100){
            item.classList.add('active-section');
            navLink.classList.add("active-nav-item");
        } else{
            item.classList.remove('active-section');
            navLink.classList.remove("active-nav-item");
        }
    }
}

    window.addEventListener("scroll", makeSectionActive);