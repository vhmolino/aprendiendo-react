import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard.jsx'

const users = [
  {
    userName: 'midudev',
    name: 'Miguel Ángel Durán',
    isFollowing: true
  },
  {
    userName: 'CHIVITO',
    name: 'Víctor Hernández Carramolino',
    isFollowing: false
  }
]

export function App() {

  return (
    <section className='App'>
      {
        users.map(({ userName, name, isFollowing }) => (
          <TwitterFollowCard
            key={userName}
            userName={userName}
            initialsFollowing={isFollowing}
          >
            {name}
          </TwitterFollowCard>
        )
        )

      }
    </section>
  )
}
