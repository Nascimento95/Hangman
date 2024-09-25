import React from "react";
import styled from "styled-components";
import { Header } from "../../Components/Home/Header";
import ArrowBack from "../../Assets/Icons/arrow-back.svg";
import { useNavigate } from "react-router-dom";

const ScrollContaiber = styled.div`
  height: 100vh;
  overflow-y: scroll;
  scrollbar-width: none;
`;
const Explanation = () => {
  const navigate = useNavigate();
  const handleGoBack = () => {
    navigate("/");
  };
  return (
    <div className="bg-hanged-pattern bg-cover h-screen px-6">
      <div className="w-full">
        <Header
          iconSrc={ArrowBack}
          labelcategory="Choisissez une catégorie"
          onClick={handleGoBack}
        />
      </div>
      <ScrollContaiber className=" h-full flex-col justify-center items-center overflow-scroll ">
        <h1 className="text-2xl font-bold text-white lg:text-4xl">
          Comment jouer au jeu du Pendu
        </h1>
        <p className="text-white mb-4 lg:text-lg">
          Bienvenue dans notre version du jeu du Pendu ! Voici comment vous
          pouvez commencer à jouer et profiter du jeu.
        </p>

        <h2 className="text-white font-bold lg:text-lg">
          Étape 1: Démarrer le jeu
        </h2>
        <p className="text-white mb-4 lg:text-lg">
          Cliquez sur le bouton <strong>"Play"</strong> pour commencer à jouer.
        </p>

        <h2 className="text-white font-bold lg:text-lg">
          Étape 2: Sélectionner une catégorie
        </h2>
        <p className="text-white mb-4 lg:text-lg">
          Une fois que vous avez cliqué sur "Play", vous serez redirigé vers une
          page où vous devez choisir la <strong>catégorie</strong> des mots à
          trouver. Sélectionnez la catégorie qui vous intéresse pour continuer.
        </p>

        <h2 className="text-white font-bold lg:text-lg">
          Étape 3: Deviner le mot
        </h2>
        <p className="text-white lg:text-lg">
          Après avoir choisi une catégorie, vous arriverez sur la page
          principale du jeu avec le mot à trouver. Vous verrez des espaces
          représentant chaque lettre du mot à deviner.
        </p>
        <p className="text-white mb-4 lg:text-lg">
          En dessous du mot, vous trouverez un <strong>clavier virtuel</strong>{" "}
          de lettres. Cliquez sur les lettres une par une pour deviner le mot.
        </p>

        <h2 className="text-white font-bold lg:text-lg">
          Étape 4: Système de vie
        </h2>
        <p className="text-white lg:text-lg">
          Vous avez un total de <strong>4 chances</strong> pour deviner le mot
          correctement. À chaque fois que vous sélectionnez une lettre
          incorrecte, vous perdez une vie.
        </p>
        <p className="text-white mb-4 lg:text-lg">
          En haut à droite de l'écran, vous verrez un <strong>cœur</strong> avec
          une <strong>barre de vie</strong>. Cette barre de vie diminue à chaque
          erreur. Lorsque votre barre de vie est vide après 4 erreurs, le jeu
          est terminé.
        </p>

        <h2 className="text-white font-bold lg:text-lg">
          Étape 5: Gagner ou perdre
        </h2>
        <p className="text-white lg:text-lg">
          Si vous devinez toutes les lettres du mot avant que la barre de vie ne
          soit vide, vous gagnez la partie !
        </p>
        <p className="text-white mb-4 lg:text-lg">
          Si vous faites 4 erreurs, le jeu se termine et vous pouvez essayer à
          nouveau.
        </p>

        <h2 className="text-white font-bold lg:text-lg">
          Conseils pour bien jouer
        </h2>
        <ul>
          <li className="text-white mb-4 lg:text-lg">
            Choisissez des lettres fréquentes comme "E", "A", ou "S" au début.
          </li>
          <li className="text-white mb-4 lg:text-lg">
            Surveillez bien votre barre de vie pour savoir combien d'erreurs
            vous pouvez encore faire.
          </li>
          <li className="text-white mb-4">
            Essayez de deviner les mots en fonction de la catégorie choisie.
          </li>
        </ul>

        <p className="text-white font-bold lg:text-lg">
          Bonne chance et amusez-vous bien !
        </p>
      </ScrollContaiber>
    </div>
  );
};

export default Explanation;
