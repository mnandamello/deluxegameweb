'use server'
export async function getModelos(){
    const resp = await fetch(process.env.API_BASE_URL + "/modelo", { next: {revalidate:0}})
    return await resp.json()
  }
