"use client"

import InputArea from "@/components/InputArea";
import { useState } from "react";

export default function Home() {
  const [text, setText] = useState<string>("");

  const handleSubmit = () => {
    console.log(text)
  }

  return (
    <div>
      <main className="flex flex-col w-full items-center px-[30]">
        <div className="w-full mb-20 mt-15">
          <h1 className="text-center text-[38px] font-bold">Snippets AI</h1>
          <p className="text-center w-full text-[20px]">Simplifique a informação. Amplifique sua produtividade.</p>
        </div>
        <InputArea buttonText="✨ Gerar resumo ✨" value={text} onChange={setText} onClick={handleSubmit}/>
      </main>
      <footer>
      </footer>
    </div>
  );
}
