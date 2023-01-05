import Head from 'next/head'
import styles from '../styles/gallery.module.css'
import ProfileCards from "../components/profileCards";
import { useState } from 'react';

export default function Details() {
  return (
    <div className='page-container'>
      <Head>
        <title>OrangeDigital Challenge</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main} >
        <ProfileCards />

        <div>

        </div>

      </main>

    </div>
  )
}
