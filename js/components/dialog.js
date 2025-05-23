export function dialog() {
  openDialog();
  closeDialog();
  closeDialogOnTargetClick();
}

function openDialog() {
  const dialogsBtns = document.querySelectorAll('.btn-dialog');
  dialogsBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      if (btn.getAttribute('aria-label') === "메뉴 열기") {
        const menuDialog = document.querySelector('.popup-menu');
        menuDialog.showModal();
      }
      else if (btn.getAttribute('aria-label') === "검색") {
        const searchDialog = document.querySelector('.popup-search');
        searchDialog.showModal();
      }
      else if (btn.getAttribute('aria-label') === "장바구니") {
        const cartDialog = document.querySelector('.popup-cart');
        cartDialog.showModal();
      }
    })
  })
}

function closeDialog() {
  const closeBtns = document.querySelectorAll('.btn--icon--close');
  closeBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      const dialog = btn.closest('dialog');
      dialog.classList.add('closing');
      
      setTimeout(() => {
        dialog.close();
        dialog.classList.remove('closing');
      }, 300);
    });
  });
}

function closeDialogOnTargetClick() {
  $('dialog').on('mousedown', function(e) {
    if (!$(e.target).closest('.popup__header, .popup__content').length) {
      const $dialog = $(this);
      $dialog.addClass('closing');
      
      setTimeout(() => {
        this.close();
        $dialog.removeClass('closing');
      }, 300);
    }
  });
}
