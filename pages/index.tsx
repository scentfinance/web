import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
// import Particles from "react-tsparticles";
// import { PARTICLE_OPTIONS_MULTIPLE_IMAGES } from "../constants";

const Home: NextPage = () => {
  // const particlesInit = (main: any) => {
  //   console.log(main);

  //   // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
  // };

  // const particlesLoaded = (container: any) => {
  //   console.log(container);
  // };

  return (
    <div className={styles.container}>
      {/* <Particles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={PARTICLE_OPTIONS_MULTIPLE_IMAGES as any}
      /> */}
      <Head>
        <title>Scent Finance | Decentralized Art | Decentralized Finance</title>
        <meta
          name="description"
          content="Decentralized Art and Finance for Gaming"
        />
        <link rel="icon" href="/favicon.png" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          <a href="https://scent.finance">Scent Finance</a>
        </h1>

        <p className={styles.description}>
          Decentralized Art and Finance for gamers and all
        </p>

        <div className={styles.grid}>
          <a
            href="https://founding.scent.finance"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2>Founding Member &rarr;</h2>
            <p>Join founding member NFT drop.</p>
          </a>

          <a
            // href="https://app.scent.finance"
            href=""
            className={styles.card}
            // target="_blank"
            // rel="noopener noreferrer"
          >
            <h2>Staking (coming soon) &rarr;</h2>
            <p>Stake tokens to get benefits.</p>
          </a>

          <a
            // href="https://app.scent.finance"
            href=""
            className={styles.card}
            // target="_blank"
            // rel="noopener noreferrer"
          >
            <h2>Play (coming soon) &rarr;</h2>
            <p>Let&apos;s get started to enjoy and earn.</p>
          </a>

          <a
            href="https://scentfinance.gitbook.io"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2>Documentation &rarr;</h2>
            <p>Find in-depth information about us.</p>
          </a>

          {/* <a
            href="https://twitter.com/scentfinance"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2>Twitter &rarr;</h2>
            <p>Announcements of all events.</p>
          </a> */}

          {/* <a
            href="https://t.me/+uIhdL6puD0M5NTM5"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2>Telegram &rarr;</h2>
            <p>Official announcement channel.</p>
          </a>

          <a
            href="https://t.me/+QHoBoBX_eb1hNzVh"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2>Telegram &rarr;</h2>
            <p>Join and discover.</p>
          </a> */}

          {/* <a
            href="https://discord.gg/SEBzR9KC4y"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2>Discord &rarr;</h2>
            <p>Join and get latest updates.</p>
          </a> */}
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://discord.gg/7UtUCsXBd3"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.socialIcon}
        >
          <Image
            src="/images/discord.svg"
            alt="discord"
            width={24}
            height={24}
          />
        </a>
        <a
          href="https://twitter.com/scentfinance"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.socialIcon}
        >
          <Image
            src="/images/twitter.svg"
            alt="twitter"
            width={24}
            height={24}
          />
        </a>
        {/* <a
          href="https://scent.finance"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <span className={styles.logo}>
            <Image
              src="/logo.png"
              alt="Scent Finance Logo"
              width={24}
              height={20}
            />
          </span>
          Scent Finance
        </a> */}
      </footer>
    </div>
  );
};

export default Home;
