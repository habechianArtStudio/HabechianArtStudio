// === FUNÇÕES EXISTENTES ===

// Função que verifica a visibilidade e aplica a classe 'is-visible' (Fade/Transform)
function checkVisibility() {
    const elements = document.querySelectorAll('.animate-on-scroll');
    const viewportHeight = window.innerHeight;
    
    elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementBottom = element.getBoundingClientRect().bottom;

        const visibleThreshold = 150; 

        const isVisible = (elementTop < viewportHeight - visibleThreshold) && (elementBottom > visibleThreshold);

        // A lógica aqui é manter a classe 'is-visible' se for visível
        if (isVisible) {
            element.classList.add('is-visible');
        } else {
            element.classList.remove('is-visible');
        }
    });
}

// Parallax da Seção 1 (Logo)
    const parallaxImg = document.getElementById('parallax-img');
    const section1 = document.getElementById('intro'); 
    const isReturning = window.performanceNavigation.type === 2 || 
                        (window.performance.getEntriesByType("navigation").length > 0 && 
                         window.performance.getEntriesByType("navigation")[0].type === "back_forward");

    function applyLogoParallax() {
        if (!parallaxImg || !section1) return; 

        const scrollPosition = window.scrollY;
        const sectionHeight = section1.offsetHeight; 
        const offset = scrollPosition * 0.3; 
        
        const fadeStartPoint = sectionHeight - 300; 
        let opacityValue = 1; 
        
        // Se a rolagem estiver no topo, garantimos que a opacidade inicial seja 0 para o Fade In
        // Excluindo apenas se o usuário estiver rolando ativamente.
        if (scrollPosition === 0 && !isReturning) {
            // No carregamento inicial, o initializeAnimations cuidará do fade-in
            // Senão, o valor 1 é usado abaixo.
        }
        
        if (scrollPosition > fadeStartPoint) {
            const scrolledIntoFade = scrollPosition - fadeStartPoint;
            const fadeDistance = 300; 
            opacityValue = 1 - (scrolledIntoFade / fadeDistance);
            opacityValue = Math.max(0, Math.min(1, opacityValue));
        }
        
        parallaxImg.style.transform = `translateY(${offset}px)`;
        // Se a opacidade já foi definida por initializeAnimations, não sobrescrevemos,
        // mas sim definimos o valor calculado.
        if (scrollPosition > 0 || parallaxImg.style.opacity !== "0") {
             parallaxImg.style.opacity = opacityValue; 
        }
    }

    // Parallax para Itens do Portfólio (Seção 2)
    
    function applyPortfolioParallax() {
        const portfolioItems = document.querySelectorAll('.portfolio-item-link');
        const scrollPosition = window.scrollY;
        const viewportHeight = window.innerHeight;
        
        const parallaxFactor = 0.1; 
        
        portfolioItems.forEach(item => {
            // A opacidade inicial (0) é definida pelo CSS, o fade-in pela classe .is-visible
            // Não precisamos recalcular a opacidade aqui a menos que o elemento esteja sendo rolado para fora.
            
            const itemRect = item.getBoundingClientRect();
            const itemTop = itemRect.top;
            const itemHeight = itemRect.height;

            const centerDistance = (itemTop + itemHeight / 2) - viewportHeight / 2;
            const offset = centerDistance * parallaxFactor;
            
            let opacityValue = 1;
            const fadeOutThreshold = 100; 

            if (itemTop + itemHeight < fadeOutThreshold) {
                opacityValue = (itemTop + itemHeight) / fadeOutThreshold;
                opacityValue = Math.max(0, Math.min(1, opacityValue));
                item.style.opacity = opacityValue; // Aplicamos o fade out
            }
            
            item.style.transform = `translateY(${-offset}px)`;
            
        });
    }
    