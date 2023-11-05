const program = [
    {
        title: "Mary Had a Little Lamb",
        composer: "Traditional",
        performer: "Timmy Smith, Piano"
    },
    {
        title: "Despacito",
        composer: "Johann Sebastian Bach",
        performer: "Billy Johnson, Guitar"
    },
    {
        title: "All Star",
        composer: "Smash Mouth",
        performer: "Braxtynn Paxtynn, Voice"
    },
    {
        title: "Jingle Bell Rock",
        composer: "Bobby Helms",
        performer: "Tommy Thomas, Guitar"
    },
    {
        title: "Deck the Halls",
        composer: "Rudolph D. Reindeer",
        performer: "Bella Bailey, Piano"
    },
    {
        title: "Smooth Criminal",
        composer: "Michael Jackson",
        performer: "Annie Aruokay, Piano"
    },
    {
        title: "Oh Christmas Tree",
        composer: "Nicholas S. Claus",
        performer: "Simon Simmons, Voice"
    },
    {
        title: "All I Want For Christmas Is You",
        composer: "Mariah Carey",
        performer: "Hannah Montana Jr, Xylophone"
    },
    {
        title: "Tequila",
        composer: "The Champs",
        performer: "Manny Bailey, Voice"
    },
    {
        title: "Sonatina in C# Major",
        composer: "Wolfgang Van Liszt",
        performer: "Katherine Perry, Piano"
    },
    {
        title: "This Is Not Jingle Bells",
        composer: "Faber",
        performer: "Tyra Banks, Piano"
    },
    {
        title: "Another One Bites the Dust",
        composer: "Queen",
        performer: "Ashley Tisdale, Voice"
    },
    {
        title: "Grandma Got Run Over by a Reindeer",
        composer: "Elmo and Patsy",
        performer: "Chris P. Bacon, Violin"
    },
    {
        title: "My Heart Will Go On",
        composer: "Celine Dion",
        performer: "Lindsay Lohan, Drums"
    },
    {
        title: "Ice Ice Baby",
        composer: "Vanilla Ice",
        performer: "John Cena, Violin"
    },
    {
        title: "She Will Be Loved",
        composer: "Maroon Five",
        performer: "MacKenzie MacAdoodle, Voice"
    },
    {
        title: "Hot Cross Buns",
        composer: "Traditional",
        performer: "Julian Lopez, Recorder"
    },
    {
        title: "Fur Elise",
        composer: "Ludwig Van Beethoven",
        performer: "Abraham Lincoln, Piano"
    },
    {
        title: "I Will Always Love You",
        composer: "Dolly Parton",
        performer: "Isaac Newton, Recorder"
    },
    {
        title: "Twinkle Twinkle Little Star",
        composer: "Traditional",
        performer: "Jimmy Neutron, Bass"
    },
    {
        title: "Don't Stop Believing",
        composer: "Journey",
        performer: "Emma Watson, Voice"
    },
    {
        title: "Ode to Joy",
        composer: "Ludwig van Beethoven",
        performer: "Barack Obama, Recorder"
    },
    {
        title: "We Wish You a Merry Christmas",
        composer: "Traditional",
        performer: "Charlie McCharles, Piano"
    }
]

let slideIndex = 1;

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("slide_dot");
    if (n > slides.length) {slideIndex = 1} 
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none"; 
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block"; 
    dots[slideIndex-1].className += " active";
}

function printSlides() {
    mainContainer = document.getElementById("main_container");
    mainContainer.classList.remove("justify-content-between");
    mainContainer.classList.remove("d-inline-flex");

    // hide buttons and dots
    let prevBtn = document.getElementsByClassName("prev")[0];
    let nextBtn = document.getElementsByClassName("next")[0];
    let dots =  document.getElementsByClassName("slide_dot");
    prevBtn.style.visibility = "hidden";
    nextBtn.style.visibility = "hidden";
    for (d = 0; d < dots.length; d++) { dots[d].style.visibility = "hidden"; };

    // start with present container
    var currentContainer = document.getElementById(`performances_container`);

    // reset html
    currentContainer.innerHTML = "";
    currentContainer.style.pageBreakAfter = "always";

    // create new slide
    var text = `<div class="mySlides" name="slide 1" style="display: block;">`;

    var count = 1;
    let num_slides = 1;

    program.forEach(record => {
        // add records to slide
        text += `<div id="program_row" name="top row ${count}" class="row gx-4 gx-lg-5 pt-4 ps-4 pe-4 justify-content-between">`;
        text += `<div class="col-auto text-black">${record.title}</div>`;
        text += `<div class="col dot"></div>`;
        text += `<div class="col-auto text-black">${record.composer}</div></div>`;
        text += `<div id="program_row" name="bottom row ${count}" class="row gx-4 gx-lg-5 text-black-50 justify-content-center">${record.performer}</div>`;
        if (((count % 8 == 0) && num_slides == 1) || ((count - 10 != 0) && ((count - 10) % 8 == 0)) && (num_slides > 1)) {
            // close slide
            text += '</div>';

            // add to current container
            currentContainer.innerHTML += text;
            currentContainer.style.maxHeight = "9.5in"

            // add padding to last row
            let row = document.getElementsByName(`bottom row ${count}`)[0];
            row.classList.add("pb-5");

            // increase number of slides
            num_slides += 1

            // create new container
            text = `<div class="container px-4 py-2 pb-5 px-lg-5 py-lg-2 pb-lg-5 justify-content-center" id="performances_container_${num_slides}"></div>`
            mainContainer.innerHTML += text;
            currentContainer = document.getElementById(`performances_container_${num_slides}`);
            currentContainer.style.pageBreakAfter = "always";

            // create new slide
            text = `<div class="mySlides" name="slide ${num_slides}" style="display: block;">`;
        } 
        // if last record reached
        else if (count == program.length) {
            // close slide
            text += '</div>';

            // add to current container
            currentContainer.innerHTML += text;

            // determine number of missing rows (max is 10)
            let missingRows = 10 - ((program.length - 8) % 10);

            // get last slide
            var slide = document.getElementsByName(`slide ${num_slides}`)[0];

            // add missing rows to slide
            for (i = 0; i < missingRows; i++) {
                text = `<div id="program_row" class="row gx-4 gx-lg-5 pt-4 ps-4 pe-4 justify-content-between">`;
                text += `<div class="col-auto text-white invisible">spacer</div>`;
                text += `<div class="col" style="height: 12px;"></div>`;
                text += `<div class="col-auto text-white invisible">spacer</div></div>`;
                text += `<div id="program_row" name="missing row ${i + 1}" class="row gx-4 gx-lg-5 pt-4 ps-4 pe-4 justify-content-between"></div>`;
                slide.innerHTML += text;
            };

            // add padding to the last missing row
            var row = document.getElementsByName(`missing row ${missingRows}`)[0];
            row.classList.add("pb-5");
        }
        count += 1
    });

    // add padding and margin to top row
    var label = document.getElementById("performancesLabel");
    label.style.marginTop = "2rem";
    let top_rows = [1, 9, 19, 29, 39];
    for (r = 0; r < num_slides; r++) {
        var row = document.getElementsByName(`top row ${top_rows[r]}`)[0];
        row.classList.remove("pt-4");
        row.classList.add("pt-5");
        row.style.marginTop = "3rem";
    }
    var row = document.getElementsByName(`top row 1`)[0];
    row.style.marginTop = "0rem";

    document.close();
    window.print();
    window.location.reload();
}

// Next/previous controls
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
    showSlides(slideIndex = n);
}

function loadProgram() {
    let prevBtn = document.getElementsByClassName("prev")[0];
    let nextBtn = document.getElementsByClassName("next")[0];
    let dots =  document.getElementsByClassName("slide_dot");
    prevBtn.style.visibility = "visible";
    nextBtn.style.visibility = "visible";
    for (d = 0; d < dots.length; d++) { dots[d].style.visibility = "visible"; };
    var i = 0;
    var count = 1;
    let num_dots = 1;
    var text = `<div class="mySlides" name="${num_dots} slide">`;
    program.forEach(record => {
        text += `<div id="program_row" name="${count} top" class="row gx-4 gx-lg-5 pt-4 ps-4 pe-4 justify-content-between">`;
        text += `<div id="songTitle" class="col-auto text-black">${record.title}</div>`;
        text += `<div id="dottedLine" class="col dot"></div>`;
        text += `<div id="songComposer" class="col-auto text-black">${record.composer}</div></div>`;
        text += `<div id="program_row" name=${i} class="row gx-4 gx-lg-5 text-black-50 justify-content-center">${record.performer}</div>`;
        if (count % 8 == 0) {
            text += '</div>'
            performances_container.innerHTML += text;
            let row = document.getElementsByName(`${i}`)[0];
            row.classList.add("pb-5");
            num_dots += 1
            text = `<div class="mySlides" name="${num_dots} slide">`;
        } 
        else if (count == program.length) {
            text += '</div>'
            performances_container.innerHTML += text;
            let missingRows = 8 - (program.length % 8);
            var slide = document.getElementsByName(`${num_dots} slide`)[0];
            for (i = 0; i < missingRows; i++) {
                text = `<div id="program_row" class="row gx-4 gx-lg-5 pt-4 ps-4 pe-4 justify-content-between">`;
                text += `<div class="col-auto text-white invisible">spacer</div>`;
                text += `<div class="col" style="height: 12px;"></div>`;
                text += `<div class="col-auto text-white invisible">spacer</div></div>`;
                text += `<div id="program_row" name="missing row ${i + 1}" class="row gx-4 gx-lg-5 pt-4 ps-4 pe-4 justify-content-between"></div>`;
                slide.innerHTML += text;
            };
            var slide = document.getElementsByName(`missing row ${missingRows}`)[0];
            slide.classList.add("pb-5");
        }
        i += 1;
        count += 1
    });
    text = `<div style="text-align:center">`;
    let top_rows = [1, 9, 17, 25, 33];
    for (j = 1; j <= num_dots; j++) {
        text += `<span class="slide_dot" onclick="currentSlide(${j})"></span>`
        let row = document.getElementsByName(`${top_rows[j - 1]} top`)[0];
        row.classList.remove("pt-4");
        row.classList.add("pt-5");
    };   
    text += '</div>';
    performances.innerHTML += text;
    showSlides(slideIndex);
}