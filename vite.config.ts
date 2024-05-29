import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  base:"/action-seven/",
  plugins: [react()],
  server:{
    proxy:{
        '/api':{
            target:"http://192.168.120.112",
            changeOrigin:true,
            ws:true,
            secure:false,
            rewrite:(path)=>path.replace(/^\/api/,""),
        },
        '/data':{
            target:"http://192.168.120.112:8080",
            changeOrigin:true,
            ws:true,
            secure:false,
            rewrite:(path)=>path.replace(/^\/data/,""),    
        }
    }
  },
  resolve: {
    alias:{
      '@': path.resolve(__dirname,'./src')
    }
  }
})
