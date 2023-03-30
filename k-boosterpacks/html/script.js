$(() => {

  const exitNui = () => {    
    $('.card-container').css("display", "none");
    $('#pack-opened').css("display", "none");
    $.post("https://k-boosterpacks/Close");
  }

  const populateCards = info => {
    $('.card-container').css("display", "flex");
    $(".card-container").empty();
    let items = info.items;
    items.forEach((data, index) => {
      const delay = index * 600; // Add a delay based on the card's index
      $(".card-container").append(`
        <div class="card p-0 m-3" id="${index}" style="top:100vh;">
          <div class="card__face card__face--front" >
            <img src="${info.backImage}" width="300px" height="450px" />
          </div>
          <div class="card__face card__face--back" id="${index}_front">
            <img id='${data.name}' src="${data.image}" width="300px" height="450px" />
          </div>
        </div>
      `);
      $(`#${index}`).delay(delay).animate({ top: 0 }, 500); // Add delay and animation to the card
      $(`#${index}`).click(function () {
        $(`#${index}`).toggleClass('is-flipped');
        $(`${data.name}`).attr('src', data.front);
      });
      $(`#${index}_front`).click(function () {
        const divHeight = $(window).height() + 1000;
        $(`#${index}`).animate({ top: `-${divHeight}px` }, 500)
        if (info.packImage == null) {
          exitNui()
        }
      });
    });
  }

  window.addEventListener("message", event => {
    if (event.data.packImage != null) {
      $('#pack-opened').css("display", "block");
      $('.front').attr('src', event.data.packImage);
      $(".top").click(function(){
        $("#pack-opened").toggleClass("open");
        setTimeout(function(){
          populateCards(event.data)
          $('#pack-opened').css("display", "none");
          $("#pack-opened").toggleClass("open");
        }, 2000)
      });
    } else {
      populateCards(event.data)
    }
  });

  $(window).on("keydown", event => {
    if (lifepointsOn === 0) {
      switch(event.key) {
        case "Escape":
          exitNui()
        break;
      }
    }
  });

});