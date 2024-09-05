import { cookies } from "next/headers"

export default function Greeting() {
  const cookieStore = cookies()
  const visitedStatus = cookieStore.get(`visited`)

  return (
    <div>
      <h3>{visitedStatus?.value ? 'Привіт, раді бачити тебе знову!' : 'Ласкаво просимо!'}</h3>
    </div>
  )
}