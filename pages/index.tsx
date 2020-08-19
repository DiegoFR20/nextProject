import React from 'react'
import Link from 'next/Link'
import { GetServerSideProps } from 'next'

import 'isomorphic-fetch'

const Home = ({ repositories }) => {
    return (
        <div>
            <Link href="/blog">
                <a>Blog</a>
            </Link>

            {repositories.map(repo => (<h1 key={repo.id}>{repo.name}</h1>))}
        </div>
    )
}

export const getServerSideProps: GetServerSideProps = async () => {
    const res = await fetch('https://api.github.com/users/DiegoFR20/repos')
    const repositories = await res.json()

    return {
        props: {
            repositories
        }
    }
}

export default Home