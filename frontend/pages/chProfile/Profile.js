import { useRouter } from "next/navigation";

const profiles = [
  { id: 1, name: "Maria", image: "/profiles/maria.png" },
  { id: 2, name: "João", image: "/profiles/joao.png" },
  { id: 3, name: "Convidado", image: "/profiles/convidado.png" },
];

export default function ProfilesPage() {
  const router = useRouter();

  const handleProfileSelect = (profile) => {
    // (Opcional) Salvar o perfil selecionado no localStorage
    localStorage.setItem("selectedProfile", JSON.stringify(profile));

    // Redirecionar para a homepage
    router.push("./prfselected/PrfSelected");
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-black text-white">
      <h1 className="text-3xl font-bold mb-8">Escolha o perfil</h1>
      <div className="flex gap-8">
        {profiles.map((profile) => (
          <button
            key={profile.id}
            onClick={() => handleProfileSelect(profile)}
            className="cursor-pointer flex flex-col items-center hover:scale-105 transition-transform bg-transparent border-none focus:outline-none"
          >
            <img
              src={profile.image}
              alt={profile.name}
              className="w-24 h-24 rounded-full border-2 border-gray-400 mb-2 object-cover"
            />
            <span className="text-sm">{profile.name}</span>
          </button>
        ))}
      </div>
    </div>
  );
}
