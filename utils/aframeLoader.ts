// Singleton A-Frame and AR.js loader
class AFrameLoader {
  private static instance: AFrameLoader;
  private aframeLoaded: boolean = false;
  private arjsLoaded: boolean = false;
  private loadingPromise: Promise<void> | null = null;

  private constructor() {}

  public static getInstance(): AFrameLoader {
    if (!AFrameLoader.instance) {
      AFrameLoader.instance = new AFrameLoader();
    }
    return AFrameLoader.instance;
  }

  public async loadLibraries(): Promise<void> {
    // If already loading, return the existing promise
    if (this.loadingPromise) {
      return this.loadingPromise;
    }

    // If already loaded, return immediately
    if (this.aframeLoaded && this.arjsLoaded) {
      return Promise.resolve();
    }

    // Start loading
    this.loadingPromise = this.doLoad();
    return this.loadingPromise;
  }

  private async doLoad(): Promise<void> {
    try {
      // Check if scripts already exist in DOM
      const existingAFrame = document.querySelector('script[src*="aframe"]');
      const existingARjs = document.querySelector('script[src*="aframe-ar"]');

      if (existingAFrame && existingARjs) {
        this.aframeLoaded = true;
        this.arjsLoaded = true;
        return;
      }

      // Load A-Frame if not already loaded
      if (!this.aframeLoaded && !existingAFrame) {
        await this.loadScript('https://aframe.io/releases/1.4.2/aframe.min.js');
        this.aframeLoaded = true;
        // Wait a bit for A-Frame to initialize
        await this.wait(500);
      }

      // Load AR.js if not already loaded
      if (!this.arjsLoaded && !existingARjs) {
        await this.loadScript('https://raw.githack.com/AR-js-org/AR.js/master/aframe/build/aframe-ar.js');
        this.arjsLoaded = true;
        // Wait a bit for AR.js to initialize
        await this.wait(500);
      }
    } catch (error) {
      console.error('Error loading A-Frame/AR.js:', error);
      this.loadingPromise = null;
      throw error;
    }
  }

  private loadScript(src: string): Promise<void> {
    return new Promise((resolve, reject) => {
      const script = document.createElement('script');
      script.src = src;
      script.async = true;
      script.onload = () => resolve();
      script.onerror = () => reject(new Error(`Failed to load script: ${src}`));
      document.head.appendChild(script);
    });
  }

  private wait(ms: number): Promise<void> {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  public isLoaded(): boolean {
    return this.aframeLoaded && this.arjsLoaded;
  }
}

export default AFrameLoader.getInstance();
