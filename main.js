console.log('js connected');

let STORE =[
  {
    title:"Because of Katie",
    blurb:"Gracie Kato survived years of abuse at the hands of her wife. While her body has healed, her heart and soul remain damaged. Gracie seeks solace at her grandfather’s home in the Yukon Territory of Canada. There she’ll be able to work at his gold mine, named for her grandmother, Gracie’s Glory. It’s the perfect place for her to start over again. Liv Templeton’s heart was crushed years ago and she doesn’t see any chance of recovery. She’s never alone unless she wants to be, but never seeks any commitments. Instead she puts all her energy and time into running the family mining business. From the moment they meet, Gracie and Liv’s connection, physical and emotional, is obvious to them both. Is Liv ready for a serious relationship? Even if she is, will she be able to convince Gracie to trust again? To let her soul heal? Will Gracie open herself up to Liv? Or will she close her heart forever?",

    isbn1:"ISBN: 978-1-949096-15-6",
    isbn2:"eISBN: 978-1-949096-16-3",
    author:"Patty Schramm",
    cover:"images/Because of Katie_2.jpg",
    coverAlt:"Because of Katie by Patty Schramm"
  },

  {
    title:"Reflections of Fate",
    blurb: "Leoni Wolf lived and worked on the Qualla Boundry in Cherokee, North Carolina her entire life. It was her home and the place she belonged. Leoni once believed in fate and that everything happened for a reason. Until her wife, Tayanita, was killed in a tragic accident. What possible reason could there be for her death? The event shattered Leoni’s world.<br>Each day Leoni awoke, gazed at her reflection in the old free-standing mirror and convinced herself she could get through one more day. <br> Nicola Daelis was tired of fate intervening in her life and wanted to throttle her. Before Nicola could act on the event that could change it all, fate landed a beautiful, dark-eyed woman in her lap and turned Nicola’s world upside down. <br>Fighting for their lives, and often against each other, Nicola and Leoni must embark upon an adventure that could be the beginning of something new. Or the end of them both.",
    isbn1:"ISBN: 978-1-949096-12-5",
    isbn2:"eISBN: 978-1-949096-13-2",
    author:"Patty Schramm",
    cover:"images/Reflections of Fate - Patty   Schramm.jpg",
    coverAlt:"Reflections of Fate by Patty Schramm"
  },

  {
    title:"Better Together",
    blurb:"Mac Bradenton has never been south of the Mason Dixon Line or across a body of water wider than the Ohio River. But her best friend is sick and on a quest to complete her bucket list. First stop is Paris, France. Mac goes along expecting to enjoy the time with Kristy, never anticipating just how much her life will change. <br>They meet up with Kristy’s friend, Lenie, who has promised to give them a guided tour of Paris and while there, romance blossoms between Mac and Lenie. <br> They meet up with Kristy’s friend, Lenie, who has promised to give them a guided tour of Paris and while there, romance blossoms between Mac and Lenie.",
    isbn1:"ISBN: 978-1-949096-09-5",
    isbn2:"eISBN: 978-1-949096-10-1",
    author:"Patty Schramm",
    cover:"images/Better Together_Schramm (1).jpg",
    coverAlt:"Better Together by Patty Schramm"
  },

  {
    title:"Soul's Rescue",
    blurb:"Kelly McCoy is a firefighter and paramedic who’s lived most of her adult life in New York. After 9-11, she relocates to Cincinnati, nursing a broken heart and looking for a new start. She takes one day at a time, trying not to let her losses overwhelm her. <br>Talia Stoddard is an insurance wiz who’s always been smart on the job, but unlucky in love. After years of being told that she’s too big, too tall, too black, too lesbian, and not a very snappy dresser, Talia has resigned herself to a life alone with only her dear gay friend Jacob for a diversion. <br> When Kelly and Talia’s lives crash into one another, it’s under the most stressful and threatening circumstances. Talia is in terrible danger, and it’s up to Kelly to rescue her. In the horrendous situation they end up in, neither expects to find a friend, much less a soul mate. <br> Will they rescue one another and heal the wounds of their pasts? Or will they both continue to believe that they’re not worthy of the kind of love the other might offer? <br> Souls’ Rescue is the story of opening up to love, taking chances, and building a life that everyone dreams about, but few people ever find.",
    isbn1:"ISBN: 978-1-949096-06-4",
    isbn2:"eISBN: 978-1-949096-07-1",
    author:"Patty Schramm",
    cover:"images/Reflections of Fate - Patty   Schramm.jpg",
    coverAlt:"Soul's Rescue by Patty Schramm"
  },

  {
    title:"Love is in the Air",
    blurb:"Love Is in the Air is a collection of romantic short stories about love that comes to us in different ways, different forms, and in ways we might never suspect. Whether we feel worthy or not, love is there. And it will find us all.",
    isbn1:"ISBN: 978-1-61929-278-9",
    isbn2:"eISBN: 978-1-61929-362-5",
    author:"Patty Schramm and Nan Dunne, Editors",
    cover:"images/LoveIsInTheAir_v2.jpg",
    coverAlt:"Love is in the Air, Editors Patty Schramm and Nan Dunne"
  },

  {
    title:"Women in Sports: A collection of romantic and erotic tales.",
    blurb:"Women in Sports: A collection of romantic and erotic tales. <br>Hot. Sweaty. Tight shorts. Sports bras. Six-pack abs. What sparks your imagination? Muscular legs? Hands that are strong and sure? Baseball, soccer, hockey, track and field...does it really matter? She’s sexy, she’s incredible and she’s all yours. Sit back, relax and enjoy some wonderful tales from this group of talented authors. Women in sports—does it get any better than that? <br> This amazing collection of romance and erotica includes stories from: Lee Lynch, Jessie Chandler, Mary Griggs, MB Panichi, Tonie Chacon, Kate McLachlan, A.L. Duncan, Jeanine Hoffman, Erica Lawson, Sharon G. Clark, Nann Dunne,Pat Cronin and Verda Foster.",
    isbn1:"ISBN: 978-1-61929-278-9",
    isbn2:"eISBN: 978-1-61929-279-6",
    author:"Patty Schramm and Verda Foster, Editors",
    cover:"images/WomenInSports_Schramm.jpg",
    coverAlt:"Women in Sports, Patty Schramm and Verda Foster, Editors"
  },

  {
    title:"Women In Uniform: Medics and Soldiers and Cops, Oh My!",
    blurb:"Cops, medics, soldiers, chefs, forest rangers...let’s face it...who doesn’t appreciate women in uniforms? Whether it’s a nurse in Vietnam, a lesbian about to deploy to Iraq, a horny football player, a cop who likes bondage, a medic who needs pampering, or a security guard who finds out she’s not past her shelf date, these stories of erotica and romance will rev you up, touch your heart, and make you feel.<br>You’ll be delighted by great stories from some of today’s top writers: Catherine Lundoff, J.M. Redmann, Lee Lynch, AnaIza Otis, Lori L. Lake, Chris Paynter, Sammo, M.J. Williamz, Ms. M, Diane S. Bauden, Karen D. Badger, V.W. Massie, Victoria Oldham, Bliss, R.G. Emanuelle, Andi Marquette, Jessie Chandler, Pat Cronin, and Lee Coats.",
    isbn1:"ISBN:  978-1-935053-31-6",
    isbn2:"eISBN:  978-1-935053-31-6",
    author:"Patty Schramm and Verda Foster, Editors",
    cover:"images/womeninuniform_schramm.jpg",
    coverAlt:"Women In Uniform: Medics and Soldiers and Cops, Oh My! Patty Schramm and Verda Foster, Editors"
  },

  {
    title:"Blue Collar Lesbian Erotica",
    blurb:"Blue Collar Lesbian Erotica is a collection of stories about the average lesbian in hot, steamy encounters in not-so-average places. Santa and her elf, a tryst in an oil mechanics pit, or what nuns really do in the convent, this anthology goes outside the norm. <br> Several talented authors have joined together for this collection of erotica including Karin Kallmaker, Radclyffe, Ali Vali, Kate Sweeney, Verda Foster, Vada Foster, Trish Sheilds, Nann Dunne, Sammo, Cheri Crystal, Pat Cronin, Georgia Beers, Anne J. Kingsley, MJ Williamz, Kathy Smith, and Victoria Oldham.",
    isbn1:"ISBN: 978-1-935053-01-9",
    isbn2:"eISBN: 978-1-61929-045-7",
    author:"Patty Schramm and Verda Foster, Editors",
    cover:"images/bcle_schramm.jpg",
    coverAlt:"Blue Collar Lesbian Erotica, Patty Schramm and Verda Foster, Editors"
  }
];

let storeIndex =0;
let bookDataLength = STORE.length;
let bookDataInfo= '$(STORE[storeIndex].map(bookDataLength))';
// event listener
function navMenuBtn(){
  $('.navBar').on('click', '.navMenu', 'img', function (event){
    console.log('naveMenuBtn ran');
    toggleMenuClicked();
  });
}

function toggleMenuClicked(){
// when menu img is clicked display menu
$('.menu').toggle('js-hidden');
}

function homeNavBtn(){
  $('.navBar').on('click','.home', function(event){
   
   renderHomeHtml();
   $('.menu').toggle('js-hidden');
 });
 }

function renderHomeHtml(){
  let homeHtmlCode=`
    <section class="pageFocus" role="contentinfo">
    <h3>Where to find Patty's books:</h3>
    <ul aria-label="links to purchase books" class="buyBooks">
      <li><a href="https://www.bellabooks.com/category/author-patty-schramm/">Bella Books</a></li>
      <li><a href="https://www.amazon.com/Patty-Schramm/e/B01KYJFW22?ref=sr_ntt_srch_lnk_1&qid=1555594000&sr=8-1">Amazon</a></li>
      <li><a href="https://www.kobo.com/us/en/search?query=patty+schramm">Kobo</a></li>
      <li><a href="https://www.barnesandnoble.com/s/patty+schramm?_requestid=2575857">Nook</a></li>
    </ul>
    <section class="mainPgImg" aria-roledescription="image holder">
      <img class="profileImg js-profileImg" src="images/PattySchramm.jpg" alt="Patty Schramm">
    </section>
    <section class="displayBooks"></section>
    </section>`;
  // render index.html pg
  $('.pageFocus').html(homeHtmlCode);
}

function bioNavBtn(){
 $('.navBar').on('click','.bio', function(event){
  renderBioHtml();
  $('.menu').toggle('js-hidden');
});
}

function renderBioHtml(){
  let bioHtml=`<section aria-label="bio" class="bioContainer"> <img src="images/Patty2.jpg" alt="Patty Schramm" aria-label="image of Patty Schramm" class="authImg2 js-bio">
  <article  class="js-bio" role="article" aria-label="biography section">
    <h2>About the Author</h2>
    <p>Patty is the Goldie Award-winning co-editor of Blue Collar Lesbian Erotica with Verda Foster. She and Verda also coedited Women in Uniform: Medics and Soldiers and Cops, Oh My!  and Women In Sports. Her first novel, Souls’ Rescue was a finalist for the Ann Bannon Popular Choice Award. Patty is a retired paramedic and currently resides in The Netherlands with her wife, Sandra, and their kitties.</p>
  </article>
  </section>
  <section class="displayBooks"></section>`;
$('.pageFocus').html(bioHtml);
}

function booksNavBtn(){
  $('.navBar').on('click','.books', function(event){
    console.log('booksbtn');
  renderBooksPage(); 
  $('.mainPgImg').toggle('js-books-hidden');
  $('.bioContainer').toggle('js-bio'); 
  $('.menu').toggle('js-hidden');
});
}

function renderBooksPage(){ 
  
  for (let i = 0; i< STORE.length; i ++){
    
    let bookDisplay=`
    <div class="booksDiv"></div>
    <p class="titleDisplay">${STORE[i].title}</p>
    <img class="bookCover" src="${STORE[i].cover}" alt="${STORE[i].coverAlt}">
    <p class="js-blurb">${STORE[i].blurb}</p>
    <p class="isbn">${STORE[i].isbn1}</p> 
    <p class="isbnEbook">${STORE[i].isbn2}</p>`;
    $('.displayBooks').append(bookDisplay);
  }
}

function respondBtnPress(){
  navMenuBtn();
  homeNavBtn();
  bioNavBtn();
  booksNavBtn();
}

$(respondBtnPress);