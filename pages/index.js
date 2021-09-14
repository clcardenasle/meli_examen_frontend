import Head from 'next/head'
import Button from '@material-ui/core/Button'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Button variant="contained" color="primary">
          Hello World
        </Button>
      </main>
    </div>
  );
}
