import Title from './components/Title';
import UploadForm from './components/UploadForm';

export function App() {

  return (
    <div className='flex-row h-screen max-w-5xl justify-center my-0 mx-auto font-mono text-secondary'>
      <Title/>
      <UploadForm/>
    </div>
  )
}
