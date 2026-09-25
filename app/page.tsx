'use client';

import Image from 'next/image';
import { useState } from 'react';
import CamadaServico from './backend-camadaServico/cardsservicohoroscopo';
import CamadaServicoChines from './backend-camadaServico/cardsservicohoroscopochines';
import { dadosSignos, getFraseDoDia, getSignoAtual } from './backend-camadaServico/colecao';
import DetalhesSigno from './FrontEnd/Detalhes/detalhesSigno';
import estilos from './FrontEnd/Cards/cards.module.css';

export default function Home() {
  const dataAtual = new Date();
  const signoAtual = getSignoAtual(dataAtual);
  const anoAtual = dataAtual.getFullYear();
  const [anoChinesInput, setAnoChinesInput] = useState(String(anoAtual));
  const [signoSelecionado, setSignoSelecionado] = useState(signoAtual);

  const valorAnoChines = (() => {
    const valor = Number(anoChinesInput);
    if (!anoChinesInput.trim() || Number.isNaN(valor)) return anoAtual;
    return valor;
  })();

  const handleAnoChines = (valor: string) => {
    if (!valor) {
      setAnoChinesInput('');
      return;
    }

    if (!/^\d*$/.test(valor)) {
      return;
    }

    setAnoChinesInput(valor);
  };

  const validarAnoChines = () => {
    if (!anoChinesInput.trim()) {
      setAnoChinesInput(String(anoAtual));
      return;
    }

    const numero = Number(anoChinesInput);
    if (Number.isNaN(numero)) {
      setAnoChinesInput(String(anoAtual));
      return;
    }

    if (numero < 1900) {
      setAnoChinesInput('1900');
      return;
    }

    if (numero > 2100) {
      setAnoChinesInput('2100');
      return;
    }

    setAnoChinesInput(String(numero));
  };

  return (
    <div className={estilos.pageWrapper}>
      <div className={estilos.appShell}>
        <aside className={estilos.sidebar}>
          <div className={estilos.sidebarTitulo}>Signos</div>

          <div className={estilos.signosGrid}>
            {dadosSignos.map((signo) => (
              <button
                key={signo.nome}
                type="button"
                className={`${estilos.signoButton} ${
                  signoSelecionado.nome === signo.nome ? estilos.signoButtonAtivo : ''
                }`}
                onClick={() => setSignoSelecionado(signo)}
              >
                <Image
                  src={signo.signo}
                  alt={signo.nome}
                  width={42}
                  height={42}
                  className={estilos.signoMiniatura}
                />
                <span>{signo.nome}</span>
              </button>
            ))}
          </div>
        </aside>

        <main className={estilos.dashboard}>
          <section className={estilos.sectionBox}>
            <div className={estilos.sectionTitleRow}>
              <h2>Horóscopo brasileiro</h2>
            </div>

            <CamadaServico signoSelecionado={signoSelecionado} />
            <DetalhesSigno nome={signoSelecionado.nome} frase={getFraseDoDia(signoSelecionado, dataAtual)} />
          </section>

          <section className={estilos.sectionBox}>
            <div className={estilos.sectionTitleRow}>
              <h2>Horóscopo chinês</h2>
            </div>

            <div className={estilos.inputRow}>
              <label htmlFor="ano-chines">Informe o ano de Nascimento</label>
              <input
                id="ano-chines"
                type="number"
                inputMode="numeric"
                value={anoChinesInput}
                min={1900}
                max={2100}
                onChange={(event) => handleAnoChines(event.target.value)}
                onBlur={validarAnoChines}
              />
            </div>

            <CamadaServicoChines ano={valorAnoChines} />
          </section>
        </main>
      </div>

      <footer className={estilos.footer}>
      Pollyanna Dos Santos Souza ( Programadora Full Stack )
      </footer>
    </div>
  );
}
