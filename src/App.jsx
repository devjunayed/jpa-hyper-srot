import Header from './components/Header'
import TaskContainer from './components/TaskContainer'

const App = () => {
  return (
    <div className='bg-gradient-to-r from-red-100  to-violet-300 min-h-screen' >
      <div className='mx-10 '>
        <Header />
        <TaskContainer />
      </div>
    </div>
  )

}

export default App
