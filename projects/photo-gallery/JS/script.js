// <======== Initializing Variables ========>
const mainContainer = document.querySelector("#main-container");
const getPhotosBtn = document.querySelector("#btn");
const errorMessage = document.querySelector("#errorMessage");
const galleryContainer = document.querySelector("#gallery-container");


// <======== JS Function to Fetch all the Images ========>
async function fetchImage() {
    const inputValue = document.querySelector("#input").value;

    if (inputValue > 10 || inputValue < 1) {
        errorMessage.style.display = "block";
        errorMessage.innerText = "Number should be Between 0 and 11";
        return;
    }

    allImages = "";

    try {
        getPhotosBtn.style.display = "none";
        const loading = `<img src="../Assets/spinner.svg" />`;
        galleryContainer.innerHTML = loading;
        await fetch(
            `https://api.unsplash.com/photos?per_page=${inputValue}&page=${Math.round(
                Math.random() * 1000
            )}&client_id=oUPAgaBA71jQGG9IBr52PEl4I-rS6dWNhK7JNiZxJI0`
        ).then((res) =>
            res.json().then((data) => {
                if (data) {
                    data.forEach((pic) => {
                        allImages += `
            <img src=${pic.urls.small} alt="image"/>
            `;
                        mainContainer.style.padding = "80px 0px";
                        galleryContainer.style.display = "block";
                        galleryContainer.innerHTML = allImages;
                        getPhotosBtn.style.display = "block";
                        errorMessage.style.display = "none";
                    });
                }
            })
        );
    } catch (error) {
        console.log(error);
        errorMessage.style.display = "block";
        errorMessage.innerHTML = "An Error Happened, Please Try Again Later..";
        getPhotosBtn.style.display = "block";
        galleryContainer.style.display = "none";
    }
}


getPhotosBtn.addEventListener("click", fetchImage);