"use client";

import { useState } from "react";
import { CheckCircle2, AlertTriangle } from "lucide-react";

export default function Page() {
  const questions = [
    "Existem pendências do cliente com relação a este item? (Envio de documentos, informações, aprovações)",
    "O item do product backlog exige conhecimento técnico avançado ou muito específico de alguma ferramenta?",
    "A solução requer a criação de algo novo (sem referência ou base existente)?",
    "O item pode ser concluído em 1 dia útil? (Aqui, o NÃO conta como +1 ponto)",
    "O item pode ser executado por apenas uma pessoa?",
    "Será necessário aprender uma ferramenta nova para a realização do item?",
    "Existem múltiplas etapas ou componentes interdependentes (front, back, banco, infra etc.)?",
    "O item tem como pré-requisito outro item do backlog não concluído? (Definition of Ready)",
    "Existem riscos de retrabalho devido a mudanças de escopo ou requisitos pouco claros?",
    "O resultado da atividade será validado por diferentes áreas ou stakeholders?",
  ];

  const [answers, setAnswers] = useState<(boolean | null)[]>(Array(questions.length).fill(null));
  const [points, setPoints] = useState<number | null>(null);

  const handleAnswer = (index: number, value: boolean) => {
    const newAnswers = [...answers];
    newAnswers[index] = value;
    setAnswers(newAnswers);
  };

  const calculatePoints = () => {
    let yesCount = 0;

    questions.forEach((q, i) => {
      const answer = answers[i];
      // regra especial: se for a pergunta 4, "NÃO" conta como +1
      if (i === 3) {
        if (answer === false) yesCount++;
      } else if (answer === true) {
        yesCount++;
      }
    });

    let score = 0;
    if (yesCount <= 1) score = 1;
    else if (yesCount === 2) score = 2;
    else if (yesCount === 3) score = 3;
    else if (yesCount <= 5) score = 5;
    else if (yesCount <= 7) score = 8;
    else score = 13;

    setPoints(score);
  };

  const resetForm = () => {
    setAnswers(Array(questions.length).fill(null));
    setPoints(null);
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-700 text-white flex flex-col items-center justify-center p-6">
      <div className="w-full max-w-3xl bg-slate-800/80 backdrop-blur-md p-8 rounded-2xl shadow-2xl">
        
        {/* Cabeçalho */}
        <div className="flex items-center gap-4 mb-6">
          <h1 className="text-2xl font-bold text-orange-400">
            Calculadora de Storypoints - AutoU
          </h1>
        </div>

        <p className="text-slate-300 mb-8">
          Responda as perguntas abaixo com <strong>“Sim”</strong> ou <strong>“Não”</strong>.  
          O sistema calculará automaticamente a complexidade do item.
        </p>

        {/* Perguntas */}
        <div className="space-y-6">
          {questions.map((q, i) => (
            <div
              key={i}
              className="bg-slate-700/60 p-5 rounded-xl flex flex-col sm:flex-row justify-between items-start sm:items-center"
            >
              <p className="font-medium mb-3 sm:mb-0 leading-relaxed">{q}</p>
              <div className="flex gap-4">
                {/* Botão SIM em verde */}
                <button
                  onClick={() => handleAnswer(i, true)}
                  className={`px-5 py-2 rounded-lg text-sm font-semibold transition-all ${
                    answers[i] === true
                      ? "bg-green-500 text-white shadow-lg scale-105"
                      : "bg-slate-600 hover:bg-green-600"
                  }`}
                >
                  Sim
                </button>

                {/* Botão NÃO em vermelho */}
                <button
                  onClick={() => handleAnswer(i, false)}
                  className={`px-5 py-2 rounded-lg text-sm font-semibold transition-all ${
                    answers[i] === false
                      ? "bg-red-500 text-white shadow-lg scale-105"
                      : "bg-slate-600 hover:bg-red-600"
                  }`}
                >
                  Não
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Botões principais */}
        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={calculatePoints}
            className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-xl font-semibold shadow-lg flex items-center gap-2 justify-center transition-all"
          >
            <CheckCircle2 className="w-5 h-5" /> Calcular Pontuação
          </button>

          <button
            onClick={resetForm}
            className="bg-slate-600 hover:bg-slate-500 text-white px-6 py-2 rounded-xl font-semibold shadow-lg flex items-center gap-2 justify-center transition-all"
          >
            <AlertTriangle className="w-5 h-5" /> Resetar
          </button>
        </div>

        {/* Resultado */}
        {points !== null && (
          <div className="mt-10 text-center">
            <h2 className="text-xl font-bold mb-2">Resultado:</h2>
            <p className="text-3xl font-extrabold text-orange-400">
              {points} Story Points
            </p>
          </div>
        )}
      </div>
    </main>
  );
}
