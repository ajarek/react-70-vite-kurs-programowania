import { useState, createContext } from 'react'
export const AppContext = createContext()
import courses from './assets/courses.json'
import Lista from './components/Lista/Lista'
import Form from './components/Form/Form'
import Dashboard from './components/Dashboard/Dashboard'
import FullPageLayout from './components/FullPageLayout/FullPageLayout'
function App() {
  const [userData, setUserData] = useState()
  const receiveData = (data) => {
    setUserData(data)
  }
  console.log(userData)
  return (
    <div className='App'>
      <AppContext.Provider value={{ userData, setUserData, courses }}>
        {userData ? (
          <FullPageLayout>
            <Dashboard />
          </FullPageLayout>
        ) : null}
        <h1>Zapisz się na kurs Programowania.</h1>
        <Lista array={courses} />
        <Form
          labelSubmit={'Zapisz do kursu'}
          onSubmit={receiveData}
        />
      </AppContext.Provider>
    </div>
  )
}

export default App
