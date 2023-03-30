import React, { useContext } from 'react'
import { AppContext } from '../../App'
import './Dashboard.css'
const Dashboard = () => {
  const { userData, setUserData, courses } = useContext(AppContext)
  const course = courses.find((cr) => cr.id === String(userData.nr))
  return (
    <div className='dashboard'>
      <h3>Witaj {userData.name} !</h3>
      {course ? (
        <>
          <p>
            Dziękujemy za wybranie kursu: <b>{course.name}.</b>{' '}
          </p>
          <p>
            Link i hasło do kursu prześlemy na adres: <b>{userData.email}</b>{' '}
          </p>
        </>
      ) : (
        <p style={{ color: 'red' }}>Brak kursów o numerze {userData.nr} !</p>
      )}

      <button onClick={() => setUserData(null)}>Powrót</button>
    </div>
  )
}

export default Dashboard
