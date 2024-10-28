function removeWeavaAttributes() {
    const removeAttributes = () => {
      document.querySelectorAll('[class="weava-extension-context"]').forEach((el) => {
        el.removeAttribute('class');
      });
      document.querySelectorAll('[data-weava-installed]').forEach((el) => {
        el.removeAttribute('data-weava-installed');
      });
    };
  
    removeAttributes();
  
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.type === 'attributes') {
          removeAttributes();
        }
      });
    });
  
    observer.observe(document.body, {
      attributes: true,
      subtree: true,
      attributeFilter: ['class', 'data-weava-installed']
    });
  }
  
  removeWeavaAttributes();