# 🧮 Calculadora de Storypoints - AutoU

Aplicação web interativa para **padronizar o cálculo de Story Points** em projetos de tecnologia da **AutoU**.  
Permite que qualquer membro do time avalie a complexidade de um *Product Backlog Item (PBI)* de forma objetiva e visual.

---

## 🚀 Demonstração

🔗 [Acessar Calculadora Online](https://calculadora-storypoints-autou.vercel.app)

---

## 🎯 Objetivo

Padronizar a atribuição de **Story Points** entre times técnicos, eliminando interpretações subjetivas.  
O cálculo é feito automaticamente a partir de **respostas padronizadas de Sim/Não** para um conjunto de perguntas sobre complexidade, dependências e riscos.

---

## 🧠 Critérios de Pontuação

A cada resposta **“Sim”**, é somado um ponto de complexidade  
(exceto na pergunta 4, onde o **“Não”** soma 1 ponto).

| Nº de “Sim” | Pontuação | Classificação |
|--------------|------------|----------------|
| 0–1 | **1 ponto** | Muito simples |
| 2 | **2 pontos** | Simples, mas com um cuidado extra |
| 3 | **3 pontos** | Alguma complexidade / risco |
| 4–5 | **5 pontos** | Complexo / múltiplas validações |
| 6–7 | **8 pontos** | Muito complexo / alto grau de incerteza |
| 8+ | **13 pontos** | Escopo grande ou desconhecido |

---

## 📝 Perguntas utilizadas

1. Existem pendências do cliente com relação a este item? (Envio de documentos, informações, aprovações)  
2. O item do product backlog exige conhecimento técnico avançado ou muito específico de alguma ferramenta?  
3. A solução requer a criação de algo novo (sem referência ou base existente)?  
4. O item pode ser concluído em 1 dia útil? (**Aqui o NÃO conta como +1 ponto**)  
5. O item pode ser executado por apenas uma pessoa?  
6. Será necessário aprender uma ferramenta nova para a realização do item?  
7. Existem múltiplas etapas ou componentes interdependentes (front, back, banco, infra etc.)?  
8. O item tem como pré-requisito outro item do backlog não concluído? (Definition of Ready)  
9. Existem riscos de retrabalho devido a mudanças de escopo ou requisitos pouco claros?  
10. O resultado da atividade será validado por diferentes áreas ou stakeholders?

---

## 🧩 Tecnologias utilizadas

- **Next.js 14** — estrutura React moderna e performática  
- **TailwindCSS** — estilização responsiva e rápida  
- **Lucide Icons** — ícones elegantes e minimalistas  
- **Vercel** — hospedagem e deploy contínuo gratuito

---

## ⚙️ Rodar localmente

Clone o repositório e instale as dependências:

```bash
git clone https://github.com/lucasaalencarcontato-lang/Calculadora-de-Storypoints.git
cd Calculadora-de-Storypoints
npm install
npm run dev
