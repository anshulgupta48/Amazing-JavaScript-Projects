const userImage = document.querySelector("img")
const userFeedback = document.querySelector(".userFeedback");
const userName = document.querySelector(".userName");
let index = 0;

const testimonials = [
    {
        name: "Cherise G",
        photoUrl: "Assets/img-1.jpg",
        text: "This is simply unbelievable! I would be lost without Apple. The very best. Not able to tell you how happy I am with Apple.",
    },
    {
        name: "Rosetta Q",
        photoUrl: "Assets/img-2.jpg",
        text: "I would also like to say thank you to all your staff. Wow what great service, I love it! Apple impressed me on multiple levels.",
    },
    {
        name: "Constantine V",
        photoUrl: "Assets/img-3.jpg",
        text: "Thank you for making it painless, pleasant and most of all hassle free! I wish I would have thought of it first. The very best.",
    },
];

updateTestimonial();

function updateTestimonial() {
    const { name, photoUrl, text } = testimonials[index];

    userImage.src = photoUrl;
    userFeedback.innerText = text;
    userName.innerText = name;
    index++;

    if (index == testimonials.length) {
        index = 0
    }

    setTimeout(() => {
        updateTestimonial();
    }, 10000);
}