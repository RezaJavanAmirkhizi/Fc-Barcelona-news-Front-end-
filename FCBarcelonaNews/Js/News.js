let details = [];
let imagesUrl = [];
let title;
let detail;
let imageUrl;

details.push("The result was anything like the one he or anybody else at FC Barcelona wanted, but Tuesday’s game with Bayern Munich was nevertheless a special occasion for Philippe Coutinho.<br>The Brazilian was playing competitive football for the first time since damaging the lateral meniscus in his left knee almost nine months previously in a 1-1 draw with Eibar last December.<br>259 days without playing are a frustratingly long time for a professional footballer, but last night he was back, and against the very team where he spent a season on loan in 2019/20.\nCoutinho replaced Luuk De Jong for the last 24 minutes of the game, getting all 12 of his passes right and was the only player in his team to have two shots on goal (one went wide and the other was blocked by a defender).<br>He may not have got much time on pitch, and was introduced at a delicate time with the team already trailing by two goals, but his contribution down the left was very much noticed and played a big part in a considerable improvement to the team in the latter stages of the encounter.");
details.push("Alex Balde’s dream of making his official debut for FC Barcelona finally came true on the night of 14 September 2021. The result may have been anything like the one he wanted, but all the same it was a very special experience for the 18-year-old to play at Camp Nou, where he replaced Jordi Alba for the last quarter of an hour.\nThe debut was a dream come true despite the result” he said afterwards.\n “I have been working long and hard since I came to this club and I’m very happy.I didn’t expect to get on. But when Jordi asked to come off, I got 30 seconds to warm up and then I was on. So many things were running through my head, but I was really ready for it.\n“From here on, I hope to get more playing time and to gain experience, keep training with the lads and learn from the best.”\nBorn 17 years ago in Barcelona, Alejandro Balde joined Barça in 2011 from the Espanyol youth system at the age of eight. He is part of the 2003 generation, but has always played above his age groups, winning the league with teams at all levels.\nLast season, despite being an U18, he played at left-back for Barça B, appearing in 16 games as the team won promotion to Primera RFEF. His good performances have earned him several chances to train with the senior team and on during the preseason he finally got to play for them in the friendly against Gimnàstic Tarragona at the Estadi Johan Cruyff.\nEarlier this summer, Balde signed an extension to his contract to keep him at FC Barcelona until 30 June 2024, with the buyout clause set at 500 million euros.");
details.push("The first team player Pedri has a quadriceps muscle injury in his left thigh.\n The player is unavailable for selection and his recovery will dictate his return.Pedri was in the starting XI against Bayern Munich on Tuesday and played all 90 minutes.\n In total this season the midfielder has made two appearances in the league - the 4-2 win over Real Sociedad at Camp Nou and the 1-1 draw away at Athletic Club in San Mamés. ");
details.push("Martin Braithwaite has undergone a successful operation on a patellofemoral injury (on the region between the kneecap and femur) in his left leg. Doctors Juan Carles Monllau and Jordi Puigdellívol conducted surgery under supervision of the FC Barcelona Medical Service.\nAfter representing his country at Euro 2020, Martin Braithwaite has featured in three league matches so far this season. The Danish forward has three goal involvements in the 226 minutes he has played for Barça. He scored two goals and assisted another in the first game of the season against Real Sociedad at the Camp Nou.");
details.push("Tests carried out on Wednesday morning on Jordi Alba have revealed that he has inured the biceps femoris muscle in his right hamstring. As a result, the player is unavailable for selection until he has recovered.\n The left back had to be replaced in the 74th minute of the game against Bayern Munich at Camp Nou, making way for Alejandro Balde to make his official debut for the first team. ");

imagesUrl.push("https://www.fcbarcelona.com/photo-resources/2021/09/14/f32e24d6-b488-4d1e-9d8e-6d9145c3f82f/2021-09-14_FCBvsBAYERN_26-min.JPG?width=1200&height=750");
imagesUrl.push("https://www.fcbarcelona.com/photo-resources/2021/09/14/28970d0e-cc2e-4ac3-9095-f38bd3f0829c/2021-09-14-BARCELONA-BAYERN-45-min.JPG?width=1200&height=750");
imagesUrl.push("https://www.fcbarcelona.com/photo-resources/2021/09/14/7acbf7ce-7138-4195-afac-d85a0d85f5a1/2021-09-14_FCBvsBAYERN_08-min.JPG?width=1200&height=750");
imagesUrl.push("https://www.fcbarcelona.com/photo-resources/2021/08/29/0e2d09cd-1efe-44c4-a6cf-176b25fb3d20/mini_2021-08-29_FCBvsGETAFE_11.jpg?width=1200&height=750");
imagesUrl.push("https://www.fcbarcelona.com/photo-resources/2021/09/14/22a084c7-785d-4ebd-9b5f-4b5d11a2561f/2021-09-14-BARCELONA-BAYERN-31-min.JPG?width=1200&height=750");


let news1Link = document.querySelector(".part3 .box1 .content a");
let news2Link = document.querySelector(".part3 .box2 .content a");
let news3Link = document.querySelector(".part3 .box3 .content a");
let news4Link = document.querySelector(".part3 .box4 .content a");
let news5Link = document.querySelector(".part3 .box5 .content a");


news1Link.onclick = function() {
    title = news1Link.innerHTML;
    imageUrl = imagesUrl[0];
    detail = details[0];
}

news2Link.onclick = function() {
    title = news2Link.innerHTML;
    imageUrl = imagesUrl[1];
    detail = details[1];
}

news3Link.onclick = function() {
    title = news3Link.innerHTML;
    imageUrl = imagesUrl[2];
    detail = details[2];
}

news4Link.onclick = function() {
    title = news4Link.innerHTML;
    imageUrl = imagesUrl[3];
    detail = details[3];
}

news5Link.onclick = function() {
    title = news5Link.innerHTML;
    imageUrl = imagesUrl[4];
    detail = details[4];
}

export{imageUrl, title, detail};