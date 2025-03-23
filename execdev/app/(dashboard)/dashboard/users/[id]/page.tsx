import { getUser } from '@/lib/getUser'
import { getUserPosts } from '@/lib/getUserPost'
import React, { Suspense } from 'react'
import Head from 'next/head'
import { Metadata } from 'next'
import UserPosts from './UserPosts'

async function generateMetaData({ params }: { params: { userId: string } }): Promise<Metadata> {
  const userData: Promise<User> = getUser(params.userId);
  const user = await userData; 

  return {
      title: user.name,
      description: `This is the page of ${user.name}`
  }
}


const UserPage = async ({
  params,
}: {
  params: Promise<{   id: string }>
})  => {
   const {id} = await params;
  const userData: Promise<User> = getUser(id);
  const userPostData: Promise<Post[]> = getUserPosts(id);
  const [user, userPost] = await Promise.all([userData, userPostData]);
  const metadata = await generateMetaData({ params: { userId: id } });
  const title: string = metadata.title as string;
  const description: string = metadata.description || 'User Page';

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
      </Head>
      <h2>{user.name}</h2>
      <br />
      <Suspense fallback={<h2>Loading...</h2>}>
        {/* @ts-expect-error Server Component */}
        <UserPosts promise={userPost} />
      </Suspense>
    </>
  );
}

export default UserPage

// export default async function UserPage({ params }: { params: { userId: string } }) {

// }
