/**
 * @author Szczepan
 */


(function($){
	
	$.fn.jqueryAccordion = function(options){
		
		
		var methods = {
			destroy: function(){
				$this = $(this);
				
				var $child = $this.find('> div');
				$child.removeClass('accordion-open');
				$child.find('> div:last').show();
				$child.unbind('mouseenter', 'mouseleave');
				$child.find('> div:first').unbind('click');
			}
		};
		
		
		return this.each(function(){
			
			if(methods[options]){   
				
                return methods[options].apply( this, arguments );
                
            }
            else if(typeof options === 'object' || ! options){
				
				options = $.extend({
				autoOpen: true,
				openChild: 1,
				clickOpen: true,
				hoverOpen: false,
				openLast: false,
				animation: 'fast'
				
					}, options);
				
			

			var $content = $(this);
			
			$content.find('> div').each(function(index){
				
			var $elem = index;
			var $child = $(this);
			var $header = $child.find('> div:first');
			var $body = $child.find('> div:last').hide();
			
			var openAccordion = function(){
				
				if($child.hasClass('accordion-open')){
					$child.removeClass('accordion-open');
					$body.stop().slideUp(options.animation);	
				}
				else{
					$child.addClass('accordion-open');
					$body.stop().slideDown(options.animation);
					
				}
				
			};
			
			var initialOpenAccordion = function(){
				if($elem == options.openChild-1){
					$header.trigger('click');
				}
				
			};
			
			if(options.clickOpen){
				$header.bind('click', openAccordion);
			}
			
			if(options.hoverOpen){
				$child.bind({
					mouseenter: function(e){
						openAccordion();
					},
					mouseleave: function(e){
						openAccordion();
					}
				});
			}
			
			if(options.autoOpen){
				initialOpenAccordion();
			}
			
			if(options.openLast && $elem == ($content.find('> div').length - 1) && $elem != options.openChild-1){
				$header.trigger('click');
			}
				
				
			});
			
			return;

			}
			else{
				$.error('error: undefinied options: ' + options);
			}
			
			
		});
	
	
	}
	
})(jQuery);
