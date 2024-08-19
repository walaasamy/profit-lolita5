
const pageTurnBtn = document.querySelectorAll('.nextprev-btn');

pageTurnBtn.forEach((el, index) => {
    el.onclick = () => {
        const pageTurnId = el.getAttribute('data-page');
        const pageTurn = document.getElementById(pageTurnId);

        if (pageTurn.classList.contains('turn')) { // استخدم classList.contains بدلاً من contains
            pageTurn.classList.remove('turn');
            setTimeout(() => {
                pageTurn.style.zIndex = 20 - index;
            }, 500);
        } else {
            pageTurn.classList.add('turn');
            setTimeout(() => { // أزل pageTurn.classList.remove('turn') هنا لأنه يزيل الكلاس الذي أضفته للتو
                pageTurn.style.zIndex = 20 + index;
            }, 500);
        }
    };
});

const pages = document.querySelectorAll('.book-page .page-right');
const contactMeBtn = document.querySelector('.btn.contact-me');


contactMeBtn.onclick = () => {
  pages.forEach((page, index) => {
      setTimeout(() => {
          page.classList.add('turn');

          setTimeout(() => {
              page.style.zIndex = 20 + index;
          }, 500);

      }, (index + 1) * 200 + 100);
  });
};

let totalpages = pages.length;
let pageNumber = 0;

function reverseIndex() {
  pageNumber--;
  if (pageNumber < 0) {
      pageNumber = totalpages - 1;
  }
}


const backprofileBtn = document.querySelector('.back-profile');

backprofileBtn.onclick = () => {
    pages.forEach((_, index) => {
        reverseIndex();
        setTimeout(() => {
            pages[pageNumber].classList.remove('turn');

            setTimeout(() => {
                reverseIndex();
                pages[pageNumber].style.zIndex = 10 + index;
            }, 500);

        }, (index + 1) * 200 + 100);
    });
};


   

 