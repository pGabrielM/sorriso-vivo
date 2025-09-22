// Simple animation utility to replace anime.js
export interface AnimationOptions {
  targets: string | HTMLElement | HTMLElement[];
  opacity?: [number, number];
  translateY?: [number, number];
  translateX?: [number, number];
  scale?: [number, number];
  delay?: number;
  duration?: number;
  easing?: string;
}

export const animate = (options: AnimationOptions) => {
  let elements: HTMLElement[] = [];
  
  if (typeof options.targets === 'string') {
    elements = Array.from(document.querySelectorAll(options.targets));
  } else if (options.targets instanceof HTMLElement) {
    elements = [options.targets];
  } else if (Array.isArray(options.targets)) {
    elements = options.targets.filter(el => el !== null);
  }

  elements.forEach((element, index) => {
    if (!element) return;
    
    const delay = (options.delay || 0) + (index * 100);
    
    setTimeout(() => {
      element.style.transition = `all ${options.duration || 800}ms ${options.easing || 'ease-out'}`;
      
      if (options.opacity) {
        element.style.opacity = options.opacity[1].toString();
      }
      
      if (options.translateY || options.translateX || options.scale) {
        const transforms = [];
        
        if (options.translateY) {
          transforms.push(`translateY(${options.translateY[1]}px)`);
        }
        
        if (options.translateX) {
          transforms.push(`translateX(${options.translateX[1]}px)`);
        }
        
        if (options.scale) {
          transforms.push(`scale(${options.scale[1]})`);
        }
        
        element.style.transform = transforms.join(' ');
      }
    }, delay);
  });
};

// Stagger utility
export const stagger = (delay: number) => delay;

// Animation object that mimics anime.js API
export const animeJs = {
  stagger: (delay: number) => delay,
  timeline: () => ({
    add: () => {},
  })
};