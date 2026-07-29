/* function contactForm() {
    return {
      formData: {
        name: '',
        email: '',
        message: ''
      },
      loading: false,
      success: false,
      error: false,
      errorMessage: '',
      
      // REPLACE WITH YOUR ACTUAL FORMSPREE ID OR ENDPOINT URL
      endpoint: 'https://formspree.io', 
  
      async submitData() {
        this.loading = true;
        this.error = false;
        
        try {
          const response = await fetch(this.endpoint, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'Accept': 'application/json'
            },
            body: JSON.stringify(this.formData)
          });
  
          if (response.ok) {
            this.success = true;
            this.formData = { name: '', email: '', message: '' }; // Reset form
          } else {
            const data = await response.json();
            throw new Error(data.error || 'Form submission failed.');
          }
        } catch (err) {
          this.error = true;
          this.errorMessage = err.message || 'Something went wrong. Please try again.';
        } finally {
          this.loading = false;
        }
      }
    }
  }
   */

    const slider = document.getElementById('slider');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    const dots = document.querySelectorAll('.dot');
    
    let index = 0;
    const totalSlides = dots.length;
  
    function updateSlider() {
      slider.style.transform = `translateX(-${index * 25}%)`;
      dots.forEach((dot, i) => {
      dot.classList.toggle('bg-white/100', i === index);
      dot.classList.toggle('bg-white/50', i !== index);
    });
    }
  
    nextBtn.addEventListener('click', () => {
      index = (index + 1) % totalSlides;
      updateSlider();
    });
  
    prevBtn.addEventListener('click', () => {
      index = (index - 1 + totalSlides) % totalSlides;
      updateSlider();
    });

    dots.forEach((dot, i) => {
    dot.addEventListener('click', () => {
      index = i;
      updateSlider();
    });
  });

  function contactForm() {
    return {
      formData: {
        name: 'John Doe',
        email: 'john@example.com',
        message: 'Testing my beautiful layout!'
      },
      loading: false,
      success: false,
      error: false,
      errorMessage: '',
  
      async submitForm() {
        this.loading = true;
        this.error = false;
  
        // Simulate a 1.5-second network delay
        await new Promise(resolve => setTimeout(resolve, 1500));
  
        // TOGGLE THIS TO TEST SUCCESS VS ERROR STATES
        const simulateSuccess = true; 
  
        if (simulateSuccess) {
          this.success = true;
          this.formData = { name: '', email: '', message: '' }; 
        } else {
          this.error = true;
          this.errorMessage = 'Mock Error: This is how your error message looks!';
        }
  
        this.loading = false;
      }
    }
  }
  