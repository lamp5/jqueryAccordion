/**
 * @author Szczepan M.  Lamp5
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
				animation: 'fast',
				autoOpen: true,
				clickOpen: true,
				hoverOpen: false,
				onlyOneOpen: true,
				openChild: 1,
				openLast: false
				
					}, options);
				
			

			var $content = $(this);
			
			$content.addClass('accordion-init').find('> div').each(function(index){
				
			var $elem = index;
			var $child = $(this).addClass('accordion-row');
			var $header = $child.find('> div:first').addClass('accordion-header');
			var $body = $child.find('> div:last').hide().addClass('accordion-body');
			
			var openAccordion = function(opt){
				
				if($child.hasClass('accordion-open')){
					$child.removeClass('accordion-open');
					$body.stop().slideUp(options.animation);	
				}
				else{
					
					if(opt){
						$content.find('.accordion-row').removeClass('accordion-open');
						$content.find('.accordion-body').slideUp(options.animation);
						
					}
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
				$header.bind({
					click: function(e){
						openAccordion(options.onlyOneOpen);
					}
				});
			}
			
			if(options.hoverOpen){
				$child.bind({
					mouseenter: function(e){
						openAccordion(false);
					},
					mouseleave: function(e){
						openAccordion(false);
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
