// Singleton A-Frame-only loader (without AR.js)
class AFrameOnlyLoader {
  private static instance: AFrameOnlyLoader;
  private aframeLoaded: boolean = false;
  private loadingPromise: Promise<void> | null = null;

  private constructor() {}

  public static getInstance(): AFrameOnlyLoader {
    if (!AFrameOnlyLoader.instance) {
      AFrameOnlyLoader.instance = new AFrameOnlyLoader();
    }
    return AFrameOnlyLoader.instance;
  }

  public async loadAFrame(): Promise<void> {
    // If already loading, return the existing promise
    if (this.loadingPromise) {
      return this.loadingPromise;
    }

    // If already loaded, return immediately
    if (this.aframeLoaded) {
      return Promise.resolve();
    }

    // Start loading
    this.loadingPromise = this.doLoad();
    return this.loadingPromise;
  }

  private async doLoad(): Promise<void> {
    try {
      // Check if script already exists in DOM
      const existingAFrame = document.querySelector('script[src*="aframe"]');

      if (existingAFrame) {
        this.aframeLoaded = true;
        return;
      }

      // Load A-Frame if not already loaded
      if (!this.aframeLoaded) {
        await this.loadScript('https://aframe.io/releases/1.4.2/aframe.min.js');
        this.aframeLoaded = true;
        // Wait a bit for A-Frame to initialize
        await this.wait(500);
      }
    } catch (error) {
      console.error('Error loading A-Frame:', error);
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
    return this.aframeLoaded;
  }
}

export default AFrameOnlyLoader.getInstance();
