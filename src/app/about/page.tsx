"use client";

import { useState } from "react";

const languages = ["English", "Français", "Русский"] as const;
type Lang = (typeof languages)[number];

const content: Record<Lang, JSX.Element> = {
  English: (
    <>
      <p className="text-gray-600 leading-relaxed mb-6" style={{ textIndent: "2em" }}>
        <strong>Amateur Theatre in English &quot;Perelman&quot;</strong> is a small group of children and their parents, with modest ambitions and modest expectations.
      </p>
      <p className="text-gray-600 leading-relaxed mb-6" style={{ textIndent: "2em" }}>
        Our first production was staged in 2019 — we are relatively new to this scene and have only brought a few projects to life so far. Every project is exceptionally precious to us, because it is built entirely from our own ideas and by our own hands. We typically take a well-known story and, after reading all the literature we can find and exploring every available resource about the work, we radically — if not entirely — rewrite the dialogues and weave in favourite moments from films, books, and our own thoughts. The best jokes and ideas for our shows come from the actors and their parents.
      </p>
      <p className="text-gray-600 leading-relaxed mb-6" style={{ textIndent: "2em" }}>
        The director of the theatre group is English language teacher Evgenia Efanova-Ogier. In addition to writing scripts and directing, she also attempts to handle props, set construction, and the general organisation of the whole affair. She has no particular skill in any of these areas, so at the critical moment the parents step in and, somehow, everything comes together. The children — our actors — are of course wonderful, but their parents deserve no less admiration, and frequently a medal for bravery. Our gratitude to every parent who invests energy, time, money, nerves, and care into each project is boundless and well-deserved. The parents of our actors are the pillars on which our house of cards stands. And naturally, the children themselves are the reason, the foundation, and the whole point of everything we do.
      </p>
      <p className="text-gray-600 leading-relaxed mb-6" style={{ textIndent: "2em" }}>
        Our rehearsals are very noisy. Rehearsals are a place where children connect, where something shared is created — something that feels, to us, both beautiful and worthwhile. With rare exceptions, the noise is a sign that the children are having a great time, and that matters no less than the premiere of the play.
      </p>
      <p className="text-gray-600 leading-relaxed" style={{ textIndent: "2em" }}>
        What connection do we have to the remarkable mathematician Grigori Perelman, after whom our theatre is named? Absolutely none! We simply allow ourselves the pride of being his contemporaries.
      </p>
    </>
  ),
  Français: (
    <>
      <p className="text-gray-600 leading-relaxed mb-6" style={{ textIndent: "2em" }}>
        <strong>Le Théâtre Amateur en Anglais &quot;Perelman&quot;</strong> est un petit groupe d&apos;enfants et de parents, doté de modestes ambitions et de modestes prétentions.
      </p>
      <p className="text-gray-600 leading-relaxed mb-6" style={{ textIndent: "2em" }}>
        Notre premier spectacle a vu le jour en 2019 ; nous sommes donc relativement nouveaux sur cette scène avec seulement quelques projets à notre actif. Chaque projet nous est infiniment précieux, car il est le fruit de nos propres idées et de nos propres mains. En général, nous partons d&apos;une intrigue connue et, après avoir exploré toute la documentation et les informations disponibles sur l&apos;œuvre, nous modifions radicalement — si ce n&apos;est totalement — les dialogues. Nous y intégrons des clins d&apos;œil à nos films et livres préférés, ainsi que nos propres réflexions. Les meilleures blagues et idées de mise en scène sont imaginées par les acteurs et leurs parents.
      </p>
      <p className="text-gray-600 leading-relaxed mb-6" style={{ textIndent: "2em" }}>
        La responsable de la troupe est Evguenia Efanova-Ogier, professeure d&apos;anglais. En plus de l&apos;écriture et de la mise en scène, elle tente également de s&apos;occuper des accessoires, de la construction des décors et de l&apos;organisation générale. Comme elle n&apos;a aucune compétence technique dans ces domaines, les parents finissent par intervenir au moment opportun et, par miracle, tout finit par fonctionner.
        Les enfants sont, bien sûr, admirables. Les parents méritent tout autant d&apos;admiration, et souvent même une médaille « pour le courage ». Notre gratitude envers chaque parent qui investit son énergie, son temps, ses finances et ses nerfs dans ce projet est immense et amplement justifiée. Les parents sont les piliers sur lesquels repose notre château de cartes. Et, naturellement, les enfants sont la raison d&apos;être, le fondement et le sens même de toute cette aventure.
      </p>
      <p className="text-gray-600 leading-relaxed mb-6" style={{ textIndent: "2em" }}>
        Nos répétitions sont très bruyantes. C&apos;est avant tout un espace d&apos;échange pour les enfants, un lieu où l&apos;on crée ensemble quelque chose que nous espérons beau et utile. À de rares exceptions près, le bruit est l&apos;indicateur que les enfants passent un bon moment, ce qui est tout aussi important pour nous que la première du spectacle.
      </p>
      <p className="text-gray-600 leading-relaxed" style={{ textIndent: "2em" }}>
        Quel est notre lien avec l&apos;étonnant Grigori Perelman, le mathématicien dont le théâtre porte le nom ? Absolument aucun ! Nous nous permettons simplement d&apos;être fiers d&apos;être ses contemporains.
      </p>
    </>
  ),
  Русский: (
    <>
      <p className="text-gray-600 leading-relaxed mb-6" style={{ textIndent: "2em" }}>
        <strong>Amateur Theatre in English &quot;Perelman&quot;</strong> — это небольшая группа детей и их родителей, с небольшими амбициями и небольшими претензиями.
      </p>
      <p className="text-gray-600 leading-relaxed mb-6" style={{ textIndent: "2em" }}>
        Первый спектакль был создан в 2019 году — мы относительно новенькие на этой сцене и у нас пока реализовано лишь несколько проектов. Каждый проект исключительно ценен для нас, потому что создан полностью нашими идеями, нашими руками. Обычно мы берем известный сюжет и, после прочтения всей возможной литературы, просмотра всей доступной информации об этом произведении, если не полностью, то кардинально меняем диалоги, делаем вставки из наших любимых фильмов, книг, мыслей. Лучшие шутки, идеи для спектаклей придуманы актерами и их родителями.
      </p>
      <p className="text-gray-600 leading-relaxed mb-6" style={{ textIndent: "2em" }}>
        Руководитель театральной группы — учительница английского языка Евгения Ефанова-Ожье. Кроме сценариев и режиссуры она также пытается заниматься подбором реквизита и постройкой декораций к спектаклям, организацией всего действа. Ничего этого она делать не умеет, поэтому в нужный момент вмешиваются родители и каким-то чудом все получается. Дети — актеры, конечно, достойны восхищения, но их родители заслуживают восхищения не меньшего, а часто и медали &quot;За Мужество&quot;. Наша признательность каждому родителю, вкладывающему силы, время, финансы, нервы, заботы в проект, безмерна и оправдана. Родители актеров — это те киты, на которых держится наш карточный дворец. И, естественно, дети — это вообще причина, первооснова и смысл всего затеянного.
      </p>
      <p className="text-gray-600 leading-relaxed mb-6" style={{ textIndent: "2em" }}>
        У нас очень шумные репетиции. Репетиции — это место общения детей, место создания чего-то общего, как нам кажется, красивого и нужного. За редким исключением, шум — индикатор того, что дети хорошо проводят время, и это не менее важно, чем премьера спектакля.
      </p>
      <p className="text-gray-600 leading-relaxed" style={{ textIndent: "2em" }}>
        Какое отношение мы имеем к удивительному Григорию Перельману, математику, именем которого назван театр? Решительно никакого! Мы лишь позволяем себе гордиться тем, что мы его современники.
      </p>
    </>
  ),
};

export default function AboutPage() {
  const [lang, setLang] = useState<Lang>("English");

  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary-950 via-primary-900 to-primary-950 text-white py-16 relative overflow-hidden">
        <div className="absolute inset-0 select-none pointer-events-none">
          <div className="absolute top-6 right-[10%] font-math text-7xl text-white/[0.04] -rotate-6">&pi;</div>
          <div className="absolute bottom-6 left-[15%] font-math text-6xl text-white/[0.04] rotate-12">&Sigma;</div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">
            About Us
          </h1>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Language tabs */}
          <div className="flex gap-2 mb-10">
            {languages.map((l) => (
              <button
                key={l}
                onClick={() => setLang(l)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  lang === l
                    ? "bg-primary-600 text-white"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
              >
                {l}
              </button>
            ))}
          </div>

          <div className="prose max-w-none" style={{ fontFamily: "'Times New Roman', Times, serif", fontSize: "1.5rem", lineHeight: "2.2rem" }}>
            {content[lang]}
          </div>
        </div>
      </section>
    </>
  );
}
