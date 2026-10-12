import estilos from '../Cards/cards.module.css';
import { FaPhone, FaEnvelope } from 'react-icons/fa'; // Caso utilize react-icons (opcional)

export default function MeuRodape() {
  return (
    <footer className={estilos.footer}>
      <div className={estilos.conteudoFooter}>
        <p className={estilos.nome}>
          Pollyanna Dos Santos Souza <span>( Programadora Full Stack )</span>
        </p>
        
        <div className={estilos.contatos}>
          <a href="tel:11980733827" className={estilos.itemContato}>
            <FaPhone className={estilos.icone} /> (11) 98073-3827
          </a>
          <a href="mailto:santossouzapollyanna79@gmail.com" className={estilos.itemContato}>
            <FaEnvelope className={estilos.icone} /> santossouzapollyanna79@gmail.com
          </a>
        </div>
      </div>
    </footer>
  );
}