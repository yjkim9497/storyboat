/// <reference types="vite/client" />

interface ImportMetaEnv {
    readonly VITE_BACKEND_URL: string;
    // 다른 환경 변수들을 추가할 수 있습니다.
  }
  
  interface ImportMeta {
    readonly env: ImportMetaEnv;
  }