"use server"
export async function getById(id: number) {
    const response = await fetch(`http://localhost:8080/modelo/${id}`)

    if (!response.ok) {
        throw new Error('Modelo não encontrado')
    }

    return await response.json()
}
