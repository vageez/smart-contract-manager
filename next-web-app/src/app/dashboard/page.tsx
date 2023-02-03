import { TokenManager } from '../../components/TokenManager'

export default function Dashboard() {
  return (
    <>
      <header className="m-10">
        <h1>ERC 20 Token Manager</h1>
      </header>
      <main className="m-10">
        <TokenManager />
      </main>
      <footer></footer>
    </>
  )
}
