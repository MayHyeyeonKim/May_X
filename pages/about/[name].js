//동적 라우팅
import { useRouter } from "next/router";

const AboutName = () => {
    const router = useRouter()
    const { name } = router.query
  
    return (
      <div>
        <h1>About {name}</h1>
        <p>This is the about page for {name}.</p>
      </div>
    )
}

export default AboutName