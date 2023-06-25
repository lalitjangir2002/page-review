const review = [
    {
        id:1,
        name : "Sunil Kumar",
        job:"Web Designer",
        img:"https://ik.imgkit.net/ikmedia/rupesh-kumar_NvSK2grvp.png?tr=w-80",
        text:"Customer experience is of paramount importance at BigBasket. We looked to solve image optimization and delivery as a part of our experience optimization exercise across BigBasket's apps and website. While we were looking at other tools in the market and deliberating on building a solution internally, ImageKit came in just at the right time."
    },
    {
        id:2,
        name : "Ankit Gupta",
        job:"Web Designer & Developer",
        img:"https://ik.imgkit.net/ikmedia/Davide_Ciambelli_copy_Fxk3Pj0dJ.png?tr=w-80",
        text:"Our main objective to use ImageKit is to reduce the image size and improve the page load time. With the help of ImageKit's real-time resizing and image transformation solutions, we have improved our clients' websites load time and page size significantly. The ImageKit team was very supportive and helped us during the integration."
    },
    {
        id:3,
        name : "Manish Chauhan",
        job:"UX/UI Designer",
        img:"https://ik.imgkit.net/ikmedia/Vijay-Mendiratta_ANH0g8blV.png?tr=w-80",
        text:"We started using ImageKit to solve one use-case - image optimization and transformation. That alone helped us achieve great improvements in processing times and costs. Since then, with their team's help, we have automated large parts of our image workflow. This has helped us improve our turnaround time.",
    },
    {
        id:4,
        name : "Dev Yadav",
        job:"Programmer",
        img:"https://ik.imgkit.net/ikmedia/Suyash_Katyayani_Gh0IVxPHDP.png?tr=w-80",
        text:"ImageKit has made real-time image manipulation, optimization and resizing across devices really easy. Its an out of the box plug & play offering with minimal changes in existing infrastructure. And Yes, Your images stay where they are!",
    }

]

const img = document.getElementById("person_img");
const author = document.getElementById("author");
const job = document.getElementById("job");
const info = document.getElementById("info");

const prevbtn = document.querySelector('.prev-btn');
const nextbtn = document.querySelector('.next-btn');
const randombtn = document.querySelector('.random');

// setting starting item 
let currentItem = 0;

window.addEventListener("DOMContentLoaded",()=>{
personItem(currentItem);
})

const personItem = (person)=>{
    const item = review[person];
    img.src = item.img;
    author.textContent = item.name; 
    job.textContent = item.job;
    info.textContent = item.text;
}

nextbtn.addEventListener("click",()=>{
    currentItem++;
    if(currentItem > review.length-1){
        currentItem = 0;
    }
    personItem(currentItem);
})
prevbtn.addEventListener("click",()=>{
    currentItem--;
        if(currentItem < 0){
        currentItem = review.length-1;
    }
    personItem(currentItem);
})

randombtn.addEventListener("click",()=>{
    currentItem = Math.floor(Math.random()*review.length);
    personItem(currentItem);
})