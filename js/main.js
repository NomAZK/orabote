$(document).ready(function(){
	var width = $(window).width();
	$('.star-rate').rateYo({
		starWidth: "32px",
		normalFill: "#d7d7d7",
		ratedFill: "#ed8a19",
		numStars: 5,
		onSet: function (rating, rateYoInstance) {
			alert("Rating is set to: " + rating);
		},
      "starSvg": "<svg xmlns='http://www.w3.org/2000/svg' x='0' y='0' viewBox='0 0 49.94 49.94' xml:space='preserve'>"+
                 "<path d='M48.856 22.73a3.56 3.56 0 0 0 .906-3.671 3.56 3.56 0 0 0-2.892-2.438l-12.092-1.757a1.58 1.58 0 0 1-1.19-.865L28.182 3.043a3.56 3.56 0 0 0-3.212-1.996 3.56 3.56 0 0 0-3.211 1.996L16.352 14c-.23.467-.676.79-1.191.865L3.069 16.622A3.56 3.56 0 0 0 .177 19.06a3.56 3.56 0 0 0 .906 3.671l8.749 8.528c.373.364.544.888.456 1.4L8.224 44.701a3.506 3.506 0 0 0 .781 2.904c1.066 1.267 2.927 1.653 4.415.871l10.814-5.686a1.619 1.619 0 0 1 1.472 0l10.815 5.686a3.544 3.544 0 0 0 1.666.417c1.057 0 2.059-.47 2.748-1.288a3.505 3.505 0 0 0 .781-2.904l-2.065-12.042a1.582 1.582 0 0 1 .456-1.4l8.749-8.529z'></path>"+
                "</svg>"
	});
   $('.star-rate-value').rateYo({
		"starWidth": "20px",
		"numStars": 5,
      "spacing": "5px",
      "multiColor": {
         "startColor": "#FF0000", //RED
         "endColor"  : "#00FF00"  //GREEN
      },
		onSet: function (rating, rateYoInstance) {
			alert("Rating is set to: " + rating);
		},
      "starSvg": "<svg xmlns='http://www.w3.org/2000/svg' x='0' y='0' viewBox='0 0 49.94 49.94' xml:space='preserve'>"+
                 "<path d='M48.856 22.73a3.56 3.56 0 0 0 .906-3.671 3.56 3.56 0 0 0-2.892-2.438l-12.092-1.757a1.58 1.58 0 0 1-1.19-.865L28.182 3.043a3.56 3.56 0 0 0-3.212-1.996 3.56 3.56 0 0 0-3.211 1.996L16.352 14c-.23.467-.676.79-1.191.865L3.069 16.622A3.56 3.56 0 0 0 .177 19.06a3.56 3.56 0 0 0 .906 3.671l8.749 8.528c.373.364.544.888.456 1.4L8.224 44.701a3.506 3.506 0 0 0 .781 2.904c1.066 1.267 2.927 1.653 4.415.871l10.814-5.686a1.619 1.619 0 0 1 1.472 0l10.815 5.686a3.544 3.544 0 0 0 1.666.417c1.057 0 2.059-.47 2.748-1.288a3.505 3.505 0 0 0 .781-2.904l-2.065-12.042a1.582 1.582 0 0 1 .456-1.4l8.749-8.529z'></path>"+
                "</svg>"
	});
   var companyStar = $('.star_company_list');
   var allRateAv = 0;
   for(let i = 0; i < companyStar.length; i++){
      var companyStarList = companyStar[i];
      var companyListRate = $(companyStarList).parents('.work_value').find('span')[0].innerHTML;
      $(companyStarList).rateYo({
         "rating"    : companyListRate,
         "starWidth": "20px",
         "numStars": 5,
         "spacing": "5px",
         "readOnly": "true",
         "multiColor": {
            "startColor": "#FF0000", //RED
            "endColor"  : "#00FF00"  //GREEN
         },
         "starSvg": "<svg xmlns='http://www.w3.org/2000/svg' x='0' y='0' viewBox='0 0 49.94 49.94' xml:space='preserve'>"+
                  "<path d='M48.856 22.73a3.56 3.56 0 0 0 .906-3.671 3.56 3.56 0 0 0-2.892-2.438l-12.092-1.757a1.58 1.58 0 0 1-1.19-.865L28.182 3.043a3.56 3.56 0 0 0-3.212-1.996 3.56 3.56 0 0 0-3.211 1.996L16.352 14c-.23.467-.676.79-1.191.865L3.069 16.622A3.56 3.56 0 0 0 .177 19.06a3.56 3.56 0 0 0 .906 3.671l8.749 8.528c.373.364.544.888.456 1.4L8.224 44.701a3.506 3.506 0 0 0 .781 2.904c1.066 1.267 2.927 1.653 4.415.871l10.814-5.686a1.619 1.619 0 0 1 1.472 0l10.815 5.686a3.544 3.544 0 0 0 1.666.417c1.057 0 2.059-.47 2.748-1.288a3.505 3.505 0 0 0 .781-2.904l-2.065-12.042a1.582 1.582 0 0 1 .456-1.4l8.749-8.529z'></path>"+
                  "</svg>"
      });
      allRateAv += parseFloat(companyListRate);
      if($('.all_rate').length != 0){
         $('.all_rate')[0].innerHTML = (allRateAv/companyStar.length).toFixed(1);
      }
      var av = (allRateAv/companyStar.length).toFixed(1);
   }
   $('.star_company_av').rateYo({
      "rating"    : av,
      "starWidth": "30px",
      "numStars": 5,
      "readOnly": "true",
      "normalFill": "#d7d7d7",
      "ratedFill": "#ed8a19",
      "starSvg": "<svg xmlns='http://www.w3.org/2000/svg' x='0' y='0' viewBox='0 0 49.94 49.94' xml:space='preserve'>"+
               "<path d='M48.856 22.73a3.56 3.56 0 0 0 .906-3.671 3.56 3.56 0 0 0-2.892-2.438l-12.092-1.757a1.58 1.58 0 0 1-1.19-.865L28.182 3.043a3.56 3.56 0 0 0-3.212-1.996 3.56 3.56 0 0 0-3.211 1.996L16.352 14c-.23.467-.676.79-1.191.865L3.069 16.622A3.56 3.56 0 0 0 .177 19.06a3.56 3.56 0 0 0 .906 3.671l8.749 8.528c.373.364.544.888.456 1.4L8.224 44.701a3.506 3.506 0 0 0 .781 2.904c1.066 1.267 2.927 1.653 4.415.871l10.814-5.686a1.619 1.619 0 0 1 1.472 0l10.815 5.686a3.544 3.544 0 0 0 1.666.417c1.057 0 2.059-.47 2.748-1.288a3.505 3.505 0 0 0 .781-2.904l-2.065-12.042a1.582 1.582 0 0 1 .456-1.4l8.749-8.529z'></path>"+
               "</svg>"
   });
   $('.feed_star').rateYo({
      "rating"    : 3,
      "starWidth": "36px",
      "numStars": 5,
      "readOnly": "true",
      "normalFill": "#d7d7d7",
      "ratedFill": "#ed8a19",
      "starSvg": "<svg xmlns='http://www.w3.org/2000/svg' x='0' y='0' viewBox='0 0 49.94 49.94' xml:space='preserve'>"+
               "<path d='M48.856 22.73a3.56 3.56 0 0 0 .906-3.671 3.56 3.56 0 0 0-2.892-2.438l-12.092-1.757a1.58 1.58 0 0 1-1.19-.865L28.182 3.043a3.56 3.56 0 0 0-3.212-1.996 3.56 3.56 0 0 0-3.211 1.996L16.352 14c-.23.467-.676.79-1.191.865L3.069 16.622A3.56 3.56 0 0 0 .177 19.06a3.56 3.56 0 0 0 .906 3.671l8.749 8.528c.373.364.544.888.456 1.4L8.224 44.701a3.506 3.506 0 0 0 .781 2.904c1.066 1.267 2.927 1.653 4.415.871l10.814-5.686a1.619 1.619 0 0 1 1.472 0l10.815 5.686a3.544 3.544 0 0 0 1.666.417c1.057 0 2.059-.47 2.748-1.288a3.505 3.505 0 0 0 .781-2.904l-2.065-12.042a1.582 1.582 0 0 1 .456-1.4l8.749-8.529z'></path>"+
               "</svg>"
   });
   $('.work_value_list').find('.star-rate-value').rateYo("option", "onChange", function (rating) {
      let rateText = $(this).siblings('.rate-text')[0];
      if(rating > 4){
         rateText.innerHTML = "Отлично";
      } else if( rating > 3){
         rateText.innerHTML = "Хорошо";
      } else if( rating > 2){
         rateText.innerHTML = "Обычно";
      } else if( rating > 1){
         rateText.innerHTML = "Плохо";
      } else if( rating >= 0){
         rateText.innerHTML = "Ужасно";
      }
   });
	if(width < 601){
		$(".star-rate").rateYo("option", "starWidth", "16px");
		$(".star-rate").rateYo("option", "readOnly", true);
	}
	let rate = document.getElementsByClassName('rate_thumbs');
	let firstEl = $(rate).find('.good_thumb');
	let secEl = $(rate).find('.bad_thumb');
	let goodBar = $(rate).find('.good_bar');
	for(let i = 0; i < firstEl.length; i++){
		let val1 = $(firstEl)[i].innerHTML;
		let val2 = $(secEl)[i].innerHTML;
		let total = parseInt(val1) + parseInt(val2);
		let average = val1 * 100 / total;
		let item = goodBar[i];
		$(item).css("width", average+'%');
	}
   $('.enter').click(function(){
      $('.modal').fadeIn();
   });
   $('#imgInp').change(function(){
      let input = $('#imgInp')[0];
      addFile(input);
   });
   $('#imgInp1').change(function(){
      let input = $('#imgInp1')[0];
      addFile(input);
   });
   $('#imgInp2').change(function(){
      let input = $('#imgInp2')[0];
      addFile(input);
   });
   $('#imgInp3').change(function(){
      let input = $('#imgInp3')[0];
      addFile(input);
   });
   $('.down_btn').click(function(){
      $(this).toggleClass('toggled');
      if($('.gallery_list').hasClass('toggled')){
         $('.gallery_list').animate({
            height: "105px",
         }, 700);
         $('.gallery_list').removeClass('toggled');
      } else{
         $('.gallery_list').animate({
            height: $(".gallery_list").get(0).scrollHeight,
         }, 700);
         $('.gallery_list').addClass('toggled');
      }
   });
	$('.service_slider').slick({
	  slidesToShow: 3,
	  slidesToScroll: 3,
	  arrows: false,
	  autoplaySpeed: 5000,
	  infinite: true,
	  dots: true,
	  responsive: [
	    {
	      breakpoint: 1201,
	      settings: {
	        slidesToShow: 3,
	        slidesToScroll: 3,
	        infinite: true,
	      }
	    },
	    {
	      breakpoint: 601,
	      settings: {
	        slidesToShow: 2,
	        slidesToScroll: 2,
	        infinite: true,
	      }
	    },
	    {
	      breakpoint: 401,
	      settings: {
	        slidesToShow: 1,
	        slidesToScroll: 1,
	        infinite: true,
	      }
	    },
	  ]
	});
	$(document).mouseup(function (e){ // отслеживаем событие клика по веб-документу
		var block = $(".modal_block"); // определяем элемент, к которому будем применять условия (можем указывать ID, класс либо любой другой идентификатор элемента)
		if (!block.is(e.target) // проверка условия если клик был не по нашему блоку
			&& block.has(e.target).length === 0) { // проверка условия если клик не по его дочерним элементам
			$('.modal').fadeOut(); // если условия выполняются - скрываем наш элемент
		}
	});
});
$(document).on("click",".remove_l", function(){
   $(this).parents('.form_list').remove();
});
function allowDrop(ev) {
   ev.preventDefault();
}
function drop(input) {
   input.preventDefault();
   console.log(input);
   let files = input.target.files || input.dataTransfer.files;
   let x = input.path[0];
   $(x).find('.form_list').css("pointer-events", "auto");
   for (let i = 0, file; file = files[i]; i++) {
      if (file.type.indexOf("image") == 0 && file.size < 307200) {
         let reader = new FileReader();
         reader.onload = function(e) {
            let x = input.target;
            $("<div class='form_list'>"+
               "<img id='blah' src='" + e.target.result + "' alt='your image' />"+"<span class='remove_l'><i class='fad fa-times-circle'></i></span>"+
         "</div>").insertBefore($(x).find('.form_list')[0]);
         }
         reader.readAsDataURL(file);
      } else{
         alert('Файлы должны иметь расширения: "*jpg,*jpeg,*png" \nИ иметь размер меньше 3МБ');
      }
   }
}
function addFile(input){
   if (input.files) {
      let filesAmount = input.files.length;
      for (let i = 0; i < filesAmount; i++) {
         if ((input.files[i].type == "image/png" || input.files[i].type == "image/jpeg") && input.files[i].size < 307200) {
            let reader = new FileReader();
            reader.onload = function(event) {
            $("<div class='form_list'>"+
                  "<img id='blah' src='" + event.target.result + "' alt='your image' />"+"<span class='remove_l'><i class='fad fa-times-circle'></i></span>"+
            "</div>").insertBefore($(input).parents('.form_list'));
            }

            reader.readAsDataURL(input.files[i]);
         } else{
            alert('Файлы должны иметь расширения: "*jpg,*jpeg,*png" \nИ иметь размер меньше 3МБ');
         }
      }
   }
}
function onDrag(input){
   let x = input.path[0];
   $(x).find('.form_list').css("pointer-events", "none");
}
function onDragLeave(input){
   let x = input.path[0];
   $(x).find('.form_list').css("pointer-events", "auto");
}