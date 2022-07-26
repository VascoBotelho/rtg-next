import type { NextPage } from "next"
import { motion } from "framer-motion"

import { Container } from "../components"

const Home: NextPage = () => {
  return (
    <Container footer>
      <div>
        <h1>Welcome</h1>

        <p>
          A Discord Bot made for communities that like playing games together,
          this bot makes creating random teams easier than ever before, with one
          simple command like <b>!game</b>, the bot will fetch all users from
          the voice channel and will create and manage the teams for you.
        </p>
      </div>

      <motion.div exit={{ opacity: 0 }}>
        <h1>Arguments</h1>

        <p>
          Arguments are a set of options that you can use to customize your
          games, like choosing team size, members per team, add members or
          remove members, add custom voice channels, create asymmetric games
          like 1v4 and much more.
        </p>

        <h1>Game Maps, Roles & Modes</h1>

        <p>
          The bot has different games to choice from and depending on the game
          they can have maps, roles and modes that are randomly set. you can
          choose games like <b>Valorant</b>,{" "}
          <b>Counter Strike: Global Offensive</b>, <b>League of Legends</b>,{" "}
          <b>Standoff 2</b>, <b>Rainbow Six Siege</b> and much more.
        </p>
      </motion.div>
    </Container>
  )
}

export default Home
