import Editor from './components/Editor'
import './App.css'
import Preview from './components/Preview'
import { MarkdownProvider } from './context/UseMarkdown'
import Header from './components/header'

function App() {
  
  return (
    <div >
      <Header/>
      <MarkdownProvider> 
      <div className="flex h-screen">
        <Editor/>
       <Preview />
      </div>
      
     </MarkdownProvider>
    </div>
    
  )
}

export default App
