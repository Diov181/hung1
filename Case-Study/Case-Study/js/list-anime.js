let listAnimeArray = [];
let isClassAdded = false

class listAnime { 
    constructor(animeName, category, shounen, episodes, view) {
        this.animeName = animeName;
        this.category = category;
        this.shounen = shounen;
        this.episodes = episodes;
        this.view = view;
    }
}

function popup() {
    // Kiểm tra và lấy dữ liệu từ localStorage
    if (localStorage.getItem(`listAnimeArray`)) {
        listAnimeArray = JSON.parse(localStorage.getItem(`listAnimeArray`));
        arrange(); // Sắp xếp dữ liệu
    }
    
    let openBtn = document.getElementById("openPopup");
    let closeBtn = document.getElementById("closePopup");
    let popup = document.getElementById("popup");
    let addBtns = document.querySelectorAll(".add-btn");
    let savedList = document.getElementById("saved-list");
    
    // Xử lý sự kiện khi click mở và đóng popup
    openBtn.addEventListener(`click`, () => {
        popup.style.display = `block`;
    });

    closeBtn.addEventListener(`click`, () => {
        popup.style.display = `none`;
    });

    // Thêm sự kiện khi click nút 'Add' trên mỗi item
    addBtns.forEach((addBtn, index) => {
    addBtn.addEventListener(`click`, () => {
        addToPopup(index);
    });
});
}

function addToPopup(index) {
    if (!isClassAdded) {
    let addElem = document.getElementById("popup");
    let animeNameElem = document.querySelectorAll(".anime-name")[index];
    
    if (animeNameElem) {
        let animeName = animeNameElem.textContent.trim();
        let episodes = document.querySelectorAll(".ep")[index].textContent.trim();
        let view = document.querySelectorAll(".view")[index].textContent.trim();
        let category = document.querySelectorAll(".category")[index].textContent.trim();
        let shounen = document.querySelectorAll(".shounen")[index].textContent.trim();
    
        if (!listAnimeArray.some(item => item.animeName === animeName)) {
        let addListAnime = new listAnime(animeName, category, shounen, episodes, view);
        listAnimeArray.push(addListAnime);
    
        let li = document.createElement("li");
        li.textContent = `Anime Name: ${addListAnime.animeName}, Category: ${addListAnime.category}, ${addListAnime.shounen}, Episodes: ${addListAnime.episodes} View: ${addListAnime.view}`;
        
        let deleteBtn = document.createElement("button");
        deleteBtn.textContent = "Delete";
        deleteBtn.addEventListener("click", () => deleteItem(addListAnime));

        li.appendChild(deleteBtn);

        addElem.appendChild(li);
        
    isClassAdded = true;

    setTimeout(() => {
        isClassAdded = false;
    }, 0);
    }
}
}
saveDataToLocal();
}

function deleteItem(itemToDelete) {
    let index = listAnimeArray.indexOf(itemToDelete);

    if (index !== -1) {
        listAnimeArray.splice(index, 1);

        let popup = document.getElementById("popup");
        let listItem = popup.querySelectorAll("li:not(.add-btn)");
        listItem[index].remove();
        arrange() // Sắp xếp lại dữ liệu sau khi xóa
    }
    saveDataToLocal();
}

function searchName() {
    let searchNameAnime = document.getElementById("search-box").value;

    for (let i in listAnimeArray) {
        let listAnime = listAnimeArray[i];
        if (listAnime.animeName === searchNameAnime) {
            alert(`Anime Name: ${listAnime.animeName},Category: ${listAnime.category}, ${listAnime.shounen}, Episodes: ${listAnime.episodes}, Views: ${listAnime.view}`);
        }
    }
}

function arrange() {
     // Sắp xếp danh sách anime theo tên
    listAnimeArray.sort((a, b) => {
        let nameA = a.animeName.toLowerCase();
        let nameB = b.animeName.toLowerCase();

        if (nameA < nameB) {
            return -1;
        } else if (nameA > nameB) {
            return 1;
        } else {
            return 0 ;
        }
    })
    
    let popup = document.getElementById("popup");
    
    let listItem = popup.querySelectorAll("li:not(.add-btn)");
    listItem.forEach(item => item.remove());

    let container = document.createElement("div");
    
    for (let i = 0; i < listAnimeArray.length; i++) {
        let li = document.createElement("li");
        li.textContent = `Anime Name: ${listAnimeArray[i].animeName}, Category: ${listAnimeArray[i].category}, ${listAnimeArray[i].shounen}, Episodes: ${listAnimeArray[i].episodes}, Views: ${listAnimeArray[i].view} `;

        let deleteBtn = document.createElement("button");
        deleteBtn.textContent = "Delete";
        deleteBtn.addEventListener("click", () => deleteItem(listAnimeArray[i]));

        li.appendChild(deleteBtn);
        container.appendChild(li);
    }
    popup.appendChild(container);
}

function saveDataToLocal() {
    // Lưu dữ liệu vào localStorage
    localStorage.setItem(`listAnimeArray`, JSON.stringify(listAnimeArray));
}



   









