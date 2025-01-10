      const text = document.querySelector('.sec-text');
      const textLoad = () => {
        setTimeout(() => {
          text.textContent = 'Freelancer';
        }, 0);
        setTimeout(() => {
          text.textContent = 'Programmer';
        }, 1000);
        setTimeout(() => {
          text.textContent = 'Graphics Desiger';
        }, 2000); //1s=1000 milliseeconds
        setTimeout(() => {
          text.textContent = 'Gamer';
        }, 3000);
        setTimeout(() => {
          text.textContent = 'Developer';
        }, 4000);
      }
      textLoad();
      setInterval(textLoad, 5000);
      
      const txt = document.querySelector('.btn');
      const txtLoad = () => {
        setTimeout(() => {
          txt.textContent = 'Hire Me';
        }, 0);
        setTimeout(() => {
          txt.textContent = 'Contract Me';
        }, 1000);
        setTimeout(() => {
          txt.textContent = 'Work Together';
        }, 2000); //1s=1000 milliseeconds
        setTimeout(() => {
          txt.textContent = 'Learn Together';
        }, 3000);
        setTimeout(() => {
          txt.textContent = 'Let Us Collaborate';
        }, 4000);
      }
      textLoad();
      setInterval(txtLoad, 5000);