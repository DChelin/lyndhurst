
 // When the browser is ready...
  $(function() {
  
    // Setup form validation on the #register-form element
    $("#register-form").validate({
			
    
        // Specify the validation rules
			rules: {
					name: "required",
					surname: "required",
					age: {
						required: true,
						number: true
					},
				 tel: {
							required: true,
							number: true
					},
				 email: {
							required: true,
							email: true
					},
					duration: "required",
					lead: "required"
			},
        
        // Specify the validation error messages
			messages: {
					name: "Please enter your name",
					surname: "Please enter your surname",
					age: {
						required: "Please enter your age",
						number: "Please enter a number",
						max: "Please enter a valid age"
					},
					tel: {
						required: "Please enter your tel number",
						number: "Please enter a number"
					},
					email: {
						required: "Please enter your email address",
						email: "Please enter a valid email address"
					},
					duration: "Please choose",
					lead: "Please choose"
			},
        
        submitHandler: function(form) {
            form.submit();
        }
    });

  });
  