/**
 * @author Szczepan M.
 */


(function($){
	
	$.fn.jqueryAccordion = function(options){
		
		
		var methods = {
			destroy: function(){
				$this = $(this);
				
				var $child = $this.removeClass('accordion-init').find('> div');
				$child.removeClass('accordion-open accordion-row');
				$child.find('> div:last').show().removeClass('accordion-body');
				$child.unbind('mouseenter', 'mouseleave');
				$child.find('> div:first').unbind('click').removeClass('accordion-header');
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
			
			$content.addClass('accordion-init').find('> div').each(function(index){
				
			var $elem = index;
			var $child = $(this).addClass('accordion-row');
			var $header = $child.find('> div:first').addClass('accordion-header');
			var $body = $child.find('> div:last').hide().addClass('accordion-body');
			
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
