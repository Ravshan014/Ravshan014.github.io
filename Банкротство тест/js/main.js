      $(document).ready (function(){
        $('[data-toggle="popover"]').popover();

        
        $('[name="иваново"]').click(function(){
        	$('[class="москва"]').hide();

	        $('[class="санкт-петербург"]').hide();

	        $('[class="сыктывкар"]').hide();

	        $('[class="иваново"]').show();
        });

        $('[name="москва"]').click(function(){
        	$('[class="иваново"]').hide();

	        $('[class="санкт-петербург"]').hide();

	        $('[class="сыктывкар"]').hide();

	        $('[class="москва"]').show();
        });

        $('[name="санкт-петербург"]').click(function(){
        	$('[class="иваново"]').hide();

	        $('[class="москва"]').hide();

	        $('[class="сыктывкар"]').hide();

	        $('[class="санкт-петербург"]').show();
        });

        $('[name="сыктывкар"]').click(function(){
        	$('[class="иваново"]').hide();

	        $('[class="москва"]').hide();

	        $('[class="санкт-петербург"]').hide();

	        $('[class="сыктывкар"]').show();
        });

        $('[name="all"]').click(function(){
        	$('[class="иваново"]').show();

	        $('[class="москва"]').show();

	        $('[class="санкт-петербург"]').show();

	        $('[class="сыктывкар"]').show();
        });

        $('[name="физлица"]').click(function(){
        	$('[class="иваново"]').show();

	        $('[class="москва"]').show();

	        $('[class="санкт-петербург"]').hide();

	        $('[class="сыктывкар"]').hide();
        });

        $('[name="юрлица"]').click(function(){
        	$('[class="иваново"]').hide();

	        $('[class="москва"]').hide();

	        $('[class="санкт-петербург"]').show();

	        $('[class="сыктывкар"]').hide();
        });

        $('[name="ип"]').click(function(){
        	$('[class="иваново"]').hide();

	        $('[class="москва"]').hide();

	        $('[class="санкт-петербург"]').hide();

	        $('[class="сыктывкар"]').show();
        });

        $('[name="ип"]').click(function(){
            $('[class="иваново"]').hide();

            $('[class="москва"]').hide();

            $('[class="санкт-петербург"]').hide();

            $('[class="сыктывкар"]').show();
        });
      });