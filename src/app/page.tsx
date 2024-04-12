import NavBar from "@/components/NavBar"

export default function Home() {
  return ( 
    <main className="flex min-h-screen flex-col items-center bg-no-repeat">
      <NavBar active="estoque" />

      <h1>Estoque</h1>

    </main>

    
  );
}
