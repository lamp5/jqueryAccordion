/**
 * @author Szczepan
 */


(function($){
	
	$.fn.jqueryAccordion = function(options){
		options = $.extend({
			autoOpen: true,
			openChild: 1,
			animation: 'fast'
			
		}, options);
		
		return this.find('> div').each(function(index){
			var $elem = index;
			var $child = $(this);
			var $header = $child.find('> div:first');
			var $body = $child.find('> div:last').hide();
			
			var openAccordion = function(){
				
				if($child.hasClass('accordion-open')){
					$child.removeClass('accordion-open');
					$body.slideUp(options.animation);	
				}
				else{
					$child.addClass('accordion-open');
					$body.slideDown(options.animation);
					
				}
				
			};
			
			var initialOpenAccordion = function(){
				if($elem == options.openChild-1){
					$header.trigger('click');
				}
				
			};
			
			
			$header.bind('click', openAccordion);
			
			if(options.autoOpen){
				initialOpenAccordion();
			}
			
		});
	
	
	}
	
})(jQuery);
