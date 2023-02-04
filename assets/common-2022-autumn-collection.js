//パララックス・アニメーション
var controller=new ScrollMagic.Controller();

//アニメーション
function scrollAnim() {
	var $target=document.querySelectorAll('.jscr');

	if (!$target) {
		return;
	}

	var triggerHookNum='1';
	if (window.matchMedia('screen and (max-width: 767px)').matches) {
		triggerHookNum='1';
	}

	var controller=new ScrollMagic.Controller();
	window.addEventListener('load', function() {
		for (var i=0; i<$target.length; i++) {
			var scene=new ScrollMagic.Scene({
				triggerElement: $target[i],
				triggerHook: triggerHookNum,
				reverse: false,
				offset: 0
			})
				.setClassToggle($target[i], 'is-anime')
				.addTo(controller);
		}
	});
}

$(function() {

	//全体アニメーション
	scrollAnim();

})
